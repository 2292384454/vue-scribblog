const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        // 代理axios
        proxy: 'http://localhost:8081',
        //vue自己的端口
        port: 8080
    }
})
