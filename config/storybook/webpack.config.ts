import { Configuration, RuleSetRule } from 'webpack'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoader'

export default ({ config }: { config: Configuration }) => {
    const src = path.resolve(__dirname, '..', '..', 'src')
    config.resolve.modules.push(src)
    config.resolve.extensions.push('.ts', '.tsx')
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias = {
        '@app': path.resolve(src, 'app'),
        '@pages': path.resolve(src, 'pages'),
        '@shared': path.resolve(src, 'shared'),
        '@entities': path.resolve(src, 'entities'),
        '@features': path.resolve(src, 'features'),
        '@widgets': path.resolve(src, 'widgets')
    }

    const cssLoader = buildCssLoader(true)

    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i }
        }
        return rule
    })

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
    })
    config.module.rules.push(cssLoader)

    return config
}
