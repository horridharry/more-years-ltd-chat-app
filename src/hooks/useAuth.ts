import { useEffect, useContext, createContext } from 'react';
import useLocalStorage from './useLocalStorage';
import { AuthContextInterface } from '../interfaces/authType';

export const AuthContext = createContext({} as AuthContextInterface);

export const useAuth = () => {
	return useContext(AuthContext);
};

export const useProvideAuth = () => {
	const [user, setUser] = useLocalStorage<string | null>('username', null);

	const signup = (username: string) => {
		if (username) setUser(username);
	};
	const signout = () => setUser(null);

	useEffect(() => {
		user ? setUser(user) : setUser(null);
	}, [user, setUser]);

	return {
		user,
		signup,
		signout,
	};
};
