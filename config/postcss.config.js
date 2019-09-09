

// npm i postcss-loader autoprefixer -D
// 安装后，我们还需要像webpack一样写一个config的配置文件，
// 在项目根目录下创建一个postcss.config.js文件，配置如下：

module.exports = {
    plugins: [
        require('autoprefixer')({
            "browsers": [
                "defaults",
                "not ie < 11",
                "last 2 versions",
                "> 1%",
                "iOS 7",
                "last 3 iOS versions"
            ]
        })
    ]
};


