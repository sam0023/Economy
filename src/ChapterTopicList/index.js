import React from 'react';
import {Link} from 'react-router-dom';

import {useParams} from 'react-router-dom';

// Const env = [
// 	{id: 1, topicId: 'np', topicName: 'National Parks'},

// ];
const General = [
	{id: 1, topicId: 'general', topicName: 'General'},
];

const Banking = [
	{id: 1, topicId: 'bankingI', topicName: 'Banking I'},
	{id: 2, topicId: 'bankingII', topicName: 'Banking II'},
	{id: 3, topicId: 'baselnorms', topicName: 'Basel Norms'},
];
// Const vijayanagara = [
// 	{id: 1, topicId: 'general', topicName: 'General'},
const MonetaryPolicy = [
	{id: 1, topicId: 'monetarypolicy', topicName: 'Monetary Policy'},
];

const sectorsofeconomy = [
	{id: 1, topicId: 'agriI', topicName: 'Agri I'},
	{id: 2, topicId: 'agriII', topicName: 'Agri II'},
];
// ];

const subjects = [
	{
		id: 'general',
		data: General,

	},
	{
		id: 'banking',
		data: Banking,
	},
	{
		id: 'monetarypolicy',
		data: MonetaryPolicy,
	},
	{
		id: 'sectorsofeconomy',
		data: sectorsofeconomy,
	},

];
const ChapterTopicList = () => {
	// Replace with your subtopic data

	const {subjectId} = useParams();

	const subtopicObject = subjects.find(subject => subject.id === subjectId);

	const subtopic = subtopicObject.data;
	// Get subjectId from route parameters

	// Filter subtopics based on the subjectId

	return (
		<div>
			<h2>Subtopics for Subject ID {subjectId}</h2>
			<ul>
				{subtopic.map(subtopic => (
					<li key={subtopic.id}>
						<Link to={`/${subjectId}/${subtopic.topicId}`}>
							{subtopic.topicName}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ChapterTopicList;
