import { Link, Outlet } from 'react-router-dom';

import { mockTests } from '../../data/tests.mock';

import './tests.scss';

// all state and structure will be updated at a later point 
// this is just for implementing and testing basic routing mechanism
const TestsPage = () => {
	return (
		<div className="tests-page">
			<h1 className="tests-page__heading">Tests Page or Dashboard!</h1>
			<nav>
				<ul style={{ listStyle: 'none' }}>
					{mockTests.map(test => (
						<li
							key={test.testId}
							style={{
								margin: '10px 50px 10px',
								padding: 10,
								fontSize: '50px',
								border: '5px solid gray'
							}}>
							<Link
								to={`${test.testId}`}
								style={{ textDecoration: 'none' }}
							>
								<span style={{ color: 'white' }}>
									{`Test #${test.testId} with length of ${test.length} `}
								</span>
							</Link>
						</li>

					))}
				</ul>
			</nav>

			<Outlet />
		</div>
	);
}

export default TestsPage;
