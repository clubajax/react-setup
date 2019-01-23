import { configure } from 'enzyme';
import jsdom from 'jsdom';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const { JSDOM } = jsdom;
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
global.window = document.defaultView;

const mocks = {};
global.mockFetch = (url, data) => {
    mocks[url] = data;
};

global.fetch = (url) => {
    return new Promise((resolve) => {
        resolve({
            status: 200,
            json: () => new Promise(res => res(mocks[url] || { data: 'no data was mocked' }))
        });
    });
};

global.on = (instance, strMethod, count = 1) => {
    let amount = 0;
    return new Promise((resolve) => {
        const org = instance[strMethod];
        instance[strMethod] = (...args) => {
            amount += 1;
            org.call(instance, ...args);
            if (amount >= count) {
                resolve(...args);
                instance[strMethod] = org;
            }
            return null;
        };
    });
};

async function wait () {
    return new Promise(resolve => setTimeout(resolve, 100));
}
global.wait = wait;
