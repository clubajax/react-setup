const CopyWebpackPlugin = require('copy-webpack-plugin');
const settings = require('./settings');

const ROOT = `${__dirname}/..`;
const path = require('path');
function get (file) {
    return path.join(ROOT, file);
}
module.exports = function plugins (isProd) {

    let files = [];

    if (settings.copy) {

        const common = !settings.copy.common ? [] : [{ from: get(settings.copy.common), to: settings.copy.common }];
        const prod = !settings.copy.prod ? [] : [{ from: get(settings.copy.prod), to: settings.copy.prod }];
        const dev = !settings.copy.dev ? [] : [{ from: get(settings.copy.dev), to: settings.copy.dev }];

        if (isProd) {
            files = [...common, ...prod];
        } else {
            files = [...common, ...dev];
        }
    }

    return new CopyWebpackPlugin(files, { debug: 'info' });
};
