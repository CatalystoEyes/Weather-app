import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

type Mode = 'production' | 'development'

interface EnvProps {
    mode: Mode
    port: number
}

export default (env: EnvProps) => {
    const isDev = env.mode === 'development'

    const config: webpack.Configuration = {
        mode: env.mode,
        entry: path.resolve(__dirname, 'src', 'Main.tsx'),
        output: {
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, 'build'),
            clean: true,
        },

        plugins: [new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            favicon: "src/assets/icon.svg"
        }),
        new ForkTsCheckerWebpackPlugin(),
        new ReactRefreshWebpackPlugin(),
        new MiniCssExtractPlugin()],
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader",
                    ],
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.[jt]sx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        devtool: isDev ? 'inline-source-map' : false,
        devServer: isDev ? {
            port: env.port ?? 3000,
            open: true,
            historyApiFallback: true,
            hot: true
        } : undefined
    }
    return config
}