

import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import dts from "rollup-plugin-dts"
import packageJson from "./package.json" with { type: "json" }

export default [
    {
        input: "./src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            postcss(),
            terser()
        ],
    },
    {
        input: "./dist/esm/index.d.ts",
        output: [{ file: "./dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: [/\.css$/]
    },
]


