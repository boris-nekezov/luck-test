import typescript from 'rollup-plugin-typescript2';
import scss from 'rollup-plugin-scss';
import svgr from '@svgr/rollup';

export default {
    input: ["./lib/index.ts"],
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
                "./lib/**/*.stories.@(ts|tsx)",
                "./lib/**/*.spec.@(ts|tsx)"
            ]
        }),
        svgr(),
    ],
    external: ["react"]
};