import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import * as Styled from './style';

export const Login: React.FC = () => {
	const auth = useAuth();
	const [username, setUsername] = useState<string>();

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (auth && username) {
			auth.signup(username);
		}
	}
	return (
		<>
			<Styled.Image
				src={require('../../images/yearsLogo.png')}
				alt='Years Logo'
			/>
			<Styled.Form onSubmit={handleSubmit}>
				<Styled.Title>
					Sign into your More Years chat account
				</Styled.Title>
				<Styled.Paragraph>
					This is the More Years realtime chat app designed by
					Harrison Ndugba for all More Years employees.
				</Styled.Paragraph>
				<Styled.Label>Your name</Styled.Label>
				<Styled.Input
					value={username}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setUsername(e.target.value)
					}
				/>
				<Styled.Button>Log in</Styled.Button>
			</Styled.Form>
		</>
	);
};
