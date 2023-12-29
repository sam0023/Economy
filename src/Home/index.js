import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
	const subjects = [
		{id: 0, chapter: 'General', code: 'general'},
		{id: 1, chapter: 'Monetary Policy', code: 'monetarypolicy'},
		{id: 2, chapter: 'Banking', code: 'banking'},
		{id: 3, chapter: 'Sectors of Economy', code: 'sectorsofeconomy'},
		// Add more subjects here
	];

	return (
		<div>
			<h1>Quiz App</h1>
			<h2>Subjects</h2>
			<ul>
				{subjects.map(subject => (
					<li key={subject.id}>
						<Link to={`/${subject.code}`}>{subject.chapter}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Home;
