import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs' 
import resolve from 'rollup-plugin-node-resolve';

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: 'src/index.js',
    output: {
      format: 'esm',
      file: 'dist/vue-easy-printer.esm.js',
      exports: 'named',
    },
    plugins: [
      vue(),
      commonjs(),
      resolve()
    ]
  },
  // SSR build.
  {
    input: 'src/index.js',
    output: {
      format: 'cjs',
      file: 'dist/vue-easy-printer.ssr.js',
      name: 'vue-easy-printer',
      exports: 'named',
    },
    plugins: [
      vue({ template: { optimizeSSR: true } }),
      commonjs(),
       resolve()
    ]
  },
  // Browser build.
  {
    input: 'src/index.js',
    output: {
      format: 'iife',
      file: 'dist/vue-easy-printer.js',
      name: 'VueEasyPrinter',
      exports: 'named',
    },
    plugins: [
      vue(),
      commonjs(),
       resolve()
    ]
  }
]