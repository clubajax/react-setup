import React from 'react';
import ReactDom from 'react-dom';
import Display from './components/Display';
import './styles/main.scss';

const renderApp = (Component) => {
	ReactDom.render(
		<div><span>Wilcox</span><Display /></div>, document.getElementById('container')
	);
};

renderApp();

if (module.hot) {
	module.hot.accept((err) => {
		console.log('HOT');
		if (err) {
			console.error('Cannot apply HMR update.', err);
		}
	});
}