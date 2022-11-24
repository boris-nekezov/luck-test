import React from 'react';
import { Form, Input, Button } from '@luck-test/ui-kit';

import './account.scss'

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

const AccountPage = () => (
	<div className="account-page">
		<h1 className="account-page__heading">Welcome!</h1>
		<div className="account-page__container">
			<div className="account-page__container_column account-page__container_column--text-right">
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
			<div className="account-page__container_separator"></div>
			<div className="account-page__container_column ">
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

export default AccountPage;
