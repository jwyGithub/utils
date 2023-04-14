import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import ts from 'rollup-plugin-typescript2';
import type { ModuleFormat, RollupOptions } from 'rollup';
import { defineConfig } from 'rollup';
import rollupNodeResolve from '@rollup/plugin-node-resolve';

interface BuildOptions {
    entry: string;
    name: string;
    formats: ModuleFormat[];
}

/**
 * @description: get __dirname
 */
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * @description get targets
 * @returns {string[]} targets
 */
const targets = fs.readdirSync('packages').filter(dir => fs.statSync(path.join('packages', dir)).isDirectory());

/**
 * @description get packageDir
 * @param target string
 * @returns string
 */
const packageDirs = (target: string) => {
    const root = path.resolve(__dirname, 'packages', target);
    return {
        root: root,
        dist: path.resolve(root, 'dist'),
        types: path.resolve(root, 'dist', 'types'),
        include: path.resolve(root, 'src/**/*')
    };
};

/**
 * @description get buildOptions
 * @param target  target
 * @returns  buildOptions
 */
const getBuildOption = (target: string): BuildOptions => {
    const packageJsonContent = fs.readFileSync(path.resolve(packageDirs(target).root, 'package.json'), 'utf-8');
    const packageJson = JSON.parse(packageJsonContent);
    const buildOptions = packageJson.buildOptions || {};
    return buildOptions as BuildOptions;
};

const getBuildConfig = (targets: string[]) => {
    return targets.reverse().reduce<RollupOptions[]>((result, target) => {
        const buildOptions = getBuildOption(target);
        const { root, dist, types, include } = packageDirs(target);
        result.push({
            input: `${path.join(root, buildOptions.entry)}`,
            output: buildOptions.formats.map(format => ({
                format,
                exports: 'auto',
                name: buildOptions.name,
                file: `${path.join(dist, `index.${format}.js`)}`
            })),
            plugins: [
                rollupNodeResolve(),
                ts({
                    tsconfig: path.resolve(root, 'tsconfig.json'),
                    tsconfigOverride: {
                        compilerOptions: {
                            declaration: true,
                            declarationMap: false,
                            declarationDir: `${types}`,
                            allowJs: true
                        }
                    },
                    include: [`${include}`],
                    exclude: ['node_modules/**', 'rollup.config.ts'],
                    clean: true,
                    useTsconfigDeclarationDir: true
                })
            ]
        });
        return result;
    }, []);
};

const buildConfig = getBuildConfig(targets);

export default buildConfig.map(item => {
    return defineConfig({
        input: item.input,
        output: item.output,
        plugins: item.plugins
    });
});

