import { Form, Input, Button } from '@luck-test/ui-kit';
import React from 'react';

import './home.scss'

const handleChange = (e: { target: HTMLInputElement }) => {
	console.log('output: ' + e.target.name, e.target.value);
};

const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault();
	console.log('LOGIN SUBMIT CLICKED!')
}

const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault();
	console.log('SIGN UP SUBMIT CLICKED!')
}

const HomePage = () => (
	<div className="home-page">
		<h1 className="home-page__heading">Home Page!</h1>
		<div className="home-page__container">
			<div className="home-page__container_column home-page__container_column--text-right">
				<Form handleSubmit={handleLogin}>
					<h2>Log in</h2>
					<Input
						type="email"
						name="email"
						label="Email"
						placeholder="Enter you email!"
						handleChange={handleChange}
					/>
					<Input
						type="password"
						name="pass"
						label="Password"
						placeholder="Enter you password!"
						handleChange={handleChange}
					/>
					<Button type='submit'>Submit</Button>
				</Form>
			</div>
			<div className="home-page__container_separator"></div>
			<div className="home-page__container_column ">
				<Form handleSubmit={handleSignUp}>
					<h2>Sign up</h2>
					<Input
						type="email"
						name="email"
						label="Email"
						placeholder="Enter you email!"
						handleChange={handleChange}
					/>
					<Input
						type="password"
						name="pass"
						label="Password"
						placeholder="Enter you password!"
						handleChange={handleChange}
					/>
					<Button type='submit'>Submit</Button>
				</Form>
			</div>
		</div>


	</div>
);

export default HomePage;
