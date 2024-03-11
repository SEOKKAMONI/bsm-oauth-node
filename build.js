import esbuild from 'esbuild';

const baseConfig = {
  entryPoints: ['./src/index.ts'],
  outdir: 'dist',
  bundle: true,
  sourcemap: true,
};

esbuild
  .build({
    ...baseConfig,
    format: 'cjs',
  })
  .catch(() => {
    console.error('CommonJS build failed');
    process.exit(1);
  });

esbuild
  .build({
    ...baseConfig,
    format: 'esm',
  })
  .catch(() => {
    console.error('ESM build failed');
    process.exit(1);
  });
