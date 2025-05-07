import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import packageJson from './package.json' assert { type: 'json' };
import postcss from 'rollup-plugin-postcss'
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { babel } from '@rollup/plugin-babel';

const production = !process.env.ROLLUP_WATCH;

export default [
  {
    input: 'lib/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        inlineDynamicImports: true
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
        inlineDynamicImports: true
      },
    ],
    plugins: [
      resolve({moduleDirectories: ['node_modules']}),
      peerDepsExternal(),
      commonjs(),
      babel({
        extensions: ['.js', '.jsx'],
        exclude: 'node_modules/**',
      }),
      terser(),
      typescript({ tsconfig: './tsconfig.json', exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.ts'] }),
      postcss({
        // Extract CSS to a separate file
        minimize: true, // Minimize the CSS
      })
    ],
    
    onwarn: (warning, rollupWarn) => {
      // Ignore specific warnings
      if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return;
      rollupWarn(warning);
    },
  },
  {
    input: 'dist/esm/types/lib/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: ['react', 'react-dom',/\.css$/],
  },
];
