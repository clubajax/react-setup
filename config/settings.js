module.exports = {
    port: '8080',
    testBuildPort: '8090',
    local_server: 'localhost:3000',
    dev_server: 'localhost:3000',
    projectFolder: '/app',
    projectIndex: 'index.js',
    projectHTML: 'index.tmpl.html',
    projectDist: '/dist',
    babelizeNodeModules: '/stories,storybook',
    polyfiles: ['whatwg-fetch', '@babel/polyfill'],
    copy: {
        common: 'static',
        dev: 'files-dev',
        prod: 'files-prod'
    }
};
