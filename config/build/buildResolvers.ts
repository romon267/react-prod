import { ResolveOptions } from 'webpack'
import path from 'path'
import { BuildOptions } from './types/config'

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        preferAbsolute: true,
        mainFiles: ['index'],
        modules: [options.paths.src, 'node_modules'],
        alias: {
            '@app': path.resolve(options.paths.src, 'app'),
            '@pages': path.resolve(options.paths.src, 'pages'),
            '@shared': path.resolve(options.paths.src, 'shared'),
            '@entities': path.resolve(options.paths.src, 'entities'),
            '@features': path.resolve(options.paths.src, 'features'),
            '@widgets': path.resolve(options.paths.src, 'widgets'),
        },

    }
}
