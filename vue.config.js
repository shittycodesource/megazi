const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: '/',
    lintOnSave: false,
    transpileDependencies: true,
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Egor Khanzhin | Megazi";
                return args;
            });
    },
})
