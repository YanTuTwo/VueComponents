const path = require('path');

const resolve = dir => {
    return path.join(__dirname, dir)
}

console.log(
    '\n' +
    '  ---------------------\n' +
    '< 要加加加加加加加加油吖！ >\n' +
    '  ---------------------\n' +
    '        \\   ^__^\n' +
    '         \\  (oo)\\_______\n' +
    '            (__)\\       )\\/\\\n' +
    '                ||---w-||\n' +
    '                ||     ||\n' +
    '\n'
)

module.exports = {
    // 项目部署基础
    publicPath: './',
    assetsDir: './static',
    lintOnSave: 'error',
    css: {
        sourceMap: process.env.NODE_ENV !== 'production'
    },
    runtimeCompiler: true,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('./src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set('_c', resolve('./src/components'))
    },
    // 设为false打包时不生成.map文件
    productionSourceMap: false,
    // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
    devServer: {
        open: true,
        host: 'localhost',
        port: 9999,
        hot: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        proxy: {
            '/proxy': {
                target: 'https://210.76.74.226:7004',
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    '/proxy': ''
                }
            }
        }
    }
};
