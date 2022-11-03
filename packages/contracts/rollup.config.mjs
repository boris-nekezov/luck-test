import typescript from 'rollup-plugin-typescript2';

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
    typescript(),
  ]
};

export default rollupConfig;
