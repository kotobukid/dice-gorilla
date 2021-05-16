module.exports = {
    entry: './ts/index.tsx',
    mode: 'development',
    output: {
        filename: '../public/javascripts/index.js'
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {loader: 'ts-loader'}
                ]
            },
            {
                test: /\.less?$/, use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                strictMath: true,
                            },
                        },
                    },
                ]
            }
        ]
    }
};