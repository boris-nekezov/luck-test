import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { registerUser, loginUser, getUserProfile } from '../../features/user/userActions';

import './account.scss'
import SignUp from '../../components/SignUp';
import LogIn from '../../components/LogIn';

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
			navigate('/');
			dispatch(getUserProfile());
		}
	}, [isAuthenticated, navigate, dispatch])

	return (
		<div className="account-page">
			<h1 className="account-page__heading">Welcome!</h1>
			{loading && <h1>LOADING...</h1>}
			{success && <h2>Registration is successful! Please log in!</h2>}
			<div className="account-page__container">
				<div className="account-page__container_column account-page__container_column--text-right">
					<LogIn
						handleSubmit={handleLogin}
						handleChange={handleChange}
					/>
				</div>
				{
					// if we successfully make registration hide the separator and register form
					!success && <>
						<div className="account-page__container_separator"></div>
						<div className="account-page__container_column ">
							<SignUp
								handleSubmit={handleSignUp}
								handleChange={handleChange}
							/>
						</div>
					</>
				}


			</div>


		</div>
	)
};

export default AccountPage;
