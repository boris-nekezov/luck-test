import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button } from '@luck-test/ui-kit';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { registerUser, loginUser } from '../../features/user/userActions';

import './account.scss'

const AccountPage = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { loading, success, isAuthenticated } = useAppSelector(state => state.user);

	const [state, setState] = useState({
		emailSignUp: '',
		passwordSignUp: '',
		emailLogIn: '',
		passwordLogIn: '',
		userToken: '',
	});

	const handleChange = (e: { target: HTMLInputElement }) => {
		setState((state) => ({
			...state,
			[e.target.name]: e.target.value,
		}))
	};

	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const reqBody = {
			login: state.emailLogIn,
			password: state.passwordLogIn,
		};

		dispatch(loginUser(reqBody));

		if (success) {
			setState(state => ({
				...state,
				emailLogIn: '',
				passwordLogIn: '',
			}))
		}

	}

	const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const reqBody = {
			login: state.emailSignUp,
			password: state.passwordSignUp,
		};

		dispatch(registerUser(reqBody));
		if (success) {
			setState(state => ({
				...state,
				emailSignUp: '',
				passwordSignUp: '',
			}))
		}

	}

	useEffect(() => {
		if (isAuthenticated) {
			navigate('/tests')
		}
	}, [isAuthenticated, navigate])

	return (
		<div className="account-page">
			<h1 className="account-page__heading">Welcome!</h1>
			{loading && <h1>LOADING...</h1>}
			{success && <h2>Registration is successful! Please log in!</h2>}
			<div className="account-page__container">
				<div className="account-page__container_column account-page__container_column--text-right">
					<Form handleSubmit={handleLogin}>
						<h2>Log in</h2>
						<Input
							type="email"
							name="emailLogIn"
							label="Email"
							placeholder="Enter you email!"
							handleChange={handleChange}
						/>
						<Input
							type="password"
							name="passwordLogIn"
							label="Password"
							placeholder="Enter you password!"
							handleChange={handleChange}
						/>
						<Button type='submit' disabled={loading}>Log in</Button>
					</Form>
				</div>
				<div className="account-page__container_separator"></div>
				<div className="account-page__container_column ">
					<Form handleSubmit={handleSignUp}>
						<h2>Sign up</h2>
						<Input
							type="email"
							name="emailSignUp"
							label="Email"
							placeholder="Enter you email!"
							handleChange={handleChange}
						/>
						<Input
							type="password"
							name="passwordSignUp"
							label="Password"
							placeholder="Enter you password!"
							handleChange={handleChange}
						/>
						<Button type='submit'>Register</Button>
					</Form>
				</div>
			</div>


		</div>
	)
};

export default AccountPage;
