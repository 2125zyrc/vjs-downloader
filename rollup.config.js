// import path from 'path';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

const isProduction = process.env.NODE_ENV === 'production';
const formats = ['es', 'umd'];

export default formats.map(format => ({
    input: 'src/main.js',
    output: {
        file: `dist/vjs-downloader.${format}${isProduction ? '.min' : ''}.js`,
        // dir: 'dist',
        format,
        name: 'vjsDownloader', // UMD 需要
    },
    globals: {
      "videojs": "videojs", // 告诉 Rollup 全局变量名
    },
    external:['video.js'], //告诉rollup不要将此lodash打包，而作为外部依赖
    plugins: [
        postcss({
            extract: 'vjs-downloader.min.css',
            minimize: true,       // 是否压缩
            inject: false,        // 不注入到 JS 中
            modules: false
        }),
        resolve({
            // 使 Rollup 能够查找 `node_modules` 中的模块
            browser: true,
            // extensions: ['.js', '.jsx', '.ts', '.tsx']
        }),
        commonjs({
            // 将 CommonJS 模块转换为 ES6，以便 Rollup 可以处理
            include: 'node_modules/**',
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        }),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        }),
        // 可以在此处根据 isProduction 添加插件，如 terser 进行压缩
    ].filter(Boolean)
}));
