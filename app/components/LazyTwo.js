import React from 'react';

import '../styles/LazyTwo.scss';

const a = ['Fard', 'Faruqq', '(was) Adam', 'No one else'];

const names = a.map(n => n).join(' ');

export default function LazyTwo () {
	return (
		<div className="lazy-two">
			<div>Lazy Two Component ---~></div>
			<div>{names}</div>
		</div>
	);
}
