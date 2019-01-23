module.exports = function babelConfig (api) {
    const presets = ['@babel/preset-react', '@babel/preset-env'];
    const plugins = ['@babel/plugin-proposal-class-properties', '@babel/plugin-syntax-export-extensions', '@babel/plugin-syntax-dynamic-import'];

    api.cache(true);

    return {
        presets,
        plugins
    };
};
