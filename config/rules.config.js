
const babelConfig = require('./babel.config');
const settings = require('./settings');

module.exports = (isProd, isLegacy, ROOT) => {
    const babel = babelConfig(isProd, isLegacy, ROOT);

    const files = {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
            name: '[name].[ext]',
            context: `${ROOT}${settings.projectFolder}`
        }
    };

    const common = [babel, files];
    const dev = [];

    return [...common, ...dev];
};
