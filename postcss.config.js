module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: [
                // 加这个后可以出现额外的兼容性前缀
                "> 0.01%"
            ]
        }),
        require('postcss-px2rem')({
            remUnit: 75,
            threeVersion: true
        })
    ]
};