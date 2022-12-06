interface AuthContextInterface {
	user: string | null;
	signup: Function;
	signout: Function;
}

interface AuthContextInterfaceProp {
	auth: AuthContextInterface | null;
}

export type { AuthContextInterface, AuthContextInterfaceProp };
