import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@luck-test/ui-kit';

import { mockTests, MockTest } from '../../data/tests.mock';

import './test.scss'
// all state and structure will be updated at a later point 
// this is just for implementing and testing basic routing mechanism
const TestPage = () => {
	const [test, setTest] = useState<MockTest>();
	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		let localTest = mockTests.find(test => test.testId === params.testId);
		setTest(localTest);
	}, [params.testId, test, setTest]);

	return (
		<div className="test-page">
			<Button handleClick={() => navigate(-1)}>Go back</Button>
			<br /><br />
			<h1 className="tests-page__heading">Tests Detail Page!</h1>
			<h2>This test is with id: {test?.testId}</h2>
			<h3>Test length: {test?.length}</h3>
			<h3>Test createdAt: {test?.createdAt}</h3>
			<h3>Test updatedAt: {test?.updatedAt}</h3>
			<h3>Test areAnswersCorrect: {test?.areAnswersCorrect}</h3>
			<h3>Test status: {test?.status}</h3>
			<h3>Test correctCount: {test?.correctCount}</h3>
			<h3>Test isSucceeded: {test?.isSucceeded}</h3>
		</div>
	)
};

export default TestPage;
