import babelConfig from './babel_config';
import banner from './banner';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/index.js',
  plugins: [
    babelConfig,
    uglify({
      output: {
        comments: /^!/
      }
    })
  ],
  targets: [{
    dest: 'dist/voca.min.js',
    format: 'umd',
    moduleName: 'v',
    sourceMap: true,
    banner: banner
  }]
};