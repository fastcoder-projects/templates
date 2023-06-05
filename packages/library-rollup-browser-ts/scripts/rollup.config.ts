import { resolve } from 'node:path';
import type { RollupOptions, Plugin } from 'rollup';
import dts from 'rollup-plugin-dts';
import esbuildPlugin from 'rollup-plugin-esbuild';

function defineConfig(config: RollupOptions | RollupOptions[]) {
  return config;
}

/**
 * 打包路径
 */
const DIST_ROOT_PATH = resolve(__dirname, '../dist');

/**
 * 公共插件
 */
const commonPlugins: Plugin[] = [];

commonPlugins.push(esbuildPlugin());

interface DistPackages {
  inputPath: string;
  outputPath: string;
}

const distPackages: DistPackages[] = [];

// 打包index
distPackages.push({
  inputPath: 'src/index.ts',
  // 对应dist下路径/
  outputPath: 'index',
});

// 打包storage
distPackages.push({
  inputPath: 'src/storage/index.ts',
  // 对应dist下路径/
  outputPath: 'storage/index',
});

export default defineConfig([
  // mjs
  {
    input: 'src/index.ts',
    output: {
      file: `${DIST_ROOT_PATH}/index.mjs`,
      format: 'es',
    },
    plugins: [
      ...commonPlugins,
    ],
  },
  // cjs
  {
    input: 'src/index.ts',
    output: {
      file: `${DIST_ROOT_PATH}/index.cjs`,
      format: 'cjs',
    },
    plugins: [
      ...commonPlugins,
    ],
  },
  // d.ts
  {
    input: 'src/index.ts',
    output: {
      file: `${DIST_ROOT_PATH}/index.d.ts`,
      format: 'es',
    },
    plugins: [
      dts(),
    ],
  },
]);
