import { db } from '../firebase/index.js';
import { setDoc, doc as documentRef, getDoc, getDocs, collection, query, orderBy, startAfter, limit, getCountFromServer, serverTimestamp } from 'firebase/firestore';
import generateRandomID from '../utils/generateRandomID.js';

export default {
    state: {
        windowWidth: 1920,
        dbLength: 0,
        loaded: []
    },
    mutations: {
        SET_WINDOW_WIDTH(state, width) {
            state.windowWidth = width;
        },

        SET_DB_LENGTH(state, l) {
            state.dbLength = l;
        },

        PUSH_TO_LOADED(state, data) {
            data.forEach((item) => {
                if (state.loaded.includes(item) == false) {
                    state.loaded.push(item);
                }
            })
        },
    },
    actions: {
        setWindowResizeObserver({dispatch, commit}) {
            commit('SET_WINDOW_WIDTH', document.body.clientWidth);
            window.addEventListener('resize', () => dispatch('onWindowResize'));
        },
    
        onWindowResize({commit}) {
            commit('SET_WINDOW_WIDTH', document.body.clientWidth);
        },


        async sendMessage({}, data) {
            try {
                data.id = generateRandomID();
                data.date = serverTimestamp();

                await setDoc(documentRef(db, 'messages', data.id), data);
            } catch(error) {
                throw error;
            }
        },

        async loadProjects({getters, commit}, { limitValue, step = 18 }) {
            try {
                const coll = collection(db, 'projects');
                const snapshot = await getCountFromServer(coll);
                const dbLength = snapshot.data().count;
                
                commit('SET_DB_LENGTH', dbLength);

                const loaded = getters.getLoaded;
                const projects = [];
                let q;

                if (loaded.length) {
                    const lastElement = loaded.at(-1).date;

                    if ((dbLength - (getters.getLoaded.length + step)) < step) {
                        q = query(collection(db, 'projects'), orderBy('date', 'desc'), startAfter(lastElement));
                    } else {
                        q = query(collection(db, 'projects'), orderBy('date', 'desc'), startAfter(lastElement), limit(limitValue));
                    }
                } else {
                    q = query(collection(db, 'projects'), orderBy('date', 'desc'), limit(limitValue));
                }

                const snapshots = await getDocs(q);

                snapshots.forEach(item => {
                    if (item.exists()) {
                        projects.push(item.data());
                    }
                });

                commit('PUSH_TO_LOADED', projects);

                return projects;
            } catch (error) {
                throw error;
            }
        },

        async getProject({getters, dispatch}, id) {
            try {
                console.log(id);
                let project = undefined;

                const loaded = getters.getLoaded;
                loaded.forEach(item => {
                    if (item.id == id) {
                        console.log('taken from loaded');
                        project = item;
                    }
                });
                
                if (project == undefined) {
                    project = await dispatch('loadProject', id);
                }
                
                console.log(project);

                return project;
            } catch (error) {
                throw error;
            }
        },

        async loadProject({}, id) {
            try {

                const projectSnapshot  = await getDoc(documentRef(db, "projects", id));

                if (projectSnapshot.exists()) {
                    const data = projectSnapshot.data();

                    return data;
                }

                return false;
            } catch (error) {
                throw error;
            }
        },
    },

    getters: {
        getWindowWidth: (state) => state.windowWidth,
        getDatabaseLength: (state) => state.dbLength,
        getLoaded: (state) => state.loaded,
    }
}