import * as Styled from './style';
import { AuthContext, useProvideAuth } from '../hooks/useAuth';
import { Chatroom } from '../views/Chatroom';
import { Login } from '../views/Login';

const App: React.FC = (): React.ReactElement => {
	const auth = useProvideAuth();
	return (
		<AuthContext.Provider value={auth}>
			<Styled.Container>
				{auth && auth.user ? <Chatroom /> : <Login />}
			</Styled.Container>
		</AuthContext.Provider>
	);
};

export default App;
