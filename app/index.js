import React from 'react';
import ReactDom from 'react-dom';
import Display from './components/Display';
import './styles/main.scss';

function getTime() { 
	const d = new Date();
	return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
}
const renderApp = (Component) => {
	ReactDom.render(
		<div><span>{ getTime()}</span><Display /></div>, document.getElementById('container')
	);
};

renderApp();
