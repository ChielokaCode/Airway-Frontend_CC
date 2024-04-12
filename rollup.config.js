// Import necessary Rollup plugins
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
    // Entry file for the bundle
    input: 'src/index.js',

    // Output configuration
    output: [
        {
            // Specify the output file
            file: 'dist/bundle.js',

            // Format of the output file
            format: 'cjs', // 'cjs' (CommonJS), 'es' (ES module), 'iife' (immediately-invoked function expression), etc.

            // Name for the global variable (if using 'iife' format)
            name: 'MyBundle',

            // Enable source map for debugging
            sourcemap: true,

            // Include the Terser plugin for minification
            plugins: [terser()]
        },
    ],

    // Plugins used in the build process
    plugins: [
        // Resolve modules from node_modules
        resolve(),

        // Convert CommonJS modules to ES6
        commonjs(),

        // Babel for transpiling ES6+ code to ES5
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**', // Ignore node_modules directory
        }),
    ],

    // Additional Rollup configuration
    external: [], // Specify external dependencies not to include in the bundle
    watch: {
        // Watch options for Rollup (useful during development)
        include: 'src/**',
    }
};
