import typescript from 'rollup-plugin-typescript2';
import scss from 'rollup-plugin-scss';
import svgr from '@svgr/rollup';

const rollupConfig = {
  input: ["./src/index.ts"],
  output: [
    {
      dir: "./dist",
      format: "cjs",
      exports: "named"
    }
  ],
  plugins: [
    scss({
      output: './dist/index.css',
      outputStyle: 'compressed',
      failOnError: true,
    }),
    typescript({
      exclude: [
        "./src/**/*.stories.@(ts|tsx)",
        "./src/**/*.spec.@(ts|tsx)"
      ]
    }),
    svgr(),
  ],
  external: ["react"]
};

export default rollupConfig;
