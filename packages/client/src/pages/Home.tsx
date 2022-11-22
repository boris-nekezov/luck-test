import { Form, Input, Button } from '@luck-test/ui-kit';
import React from 'react';

const handleChange = (e: { target: HTMLInputElement }) => {
	console.log('output: ' + e.target.name, e.target.value);
};

const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault();
	console.log('LOGIN SUBMIT CLICKED!')
}

const HomePage = () => (
	<div>
		<h1>Home Page!</h1>
		<Form handleSubmit={handleLogin}>
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
);

export default HomePage;
