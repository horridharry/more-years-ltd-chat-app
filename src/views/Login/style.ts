import styled from 'styled-components';

export const Input = styled.input`
	padding: 0.75rem;
	font-weight: 600;
	font-size: 1.15rem;
	border-radius: 0.5em;
	margin-top: 0.5rem;
	outline: 1px rgba(0, 0, 0, 0.2) solid;
	border: 1px rgba(0, 0, 0, 0.2) solid;
	&:focus {
		border: 1px solid black;
		outline: 1px solid black;
	}
	box-shadow: 0 0 0.15rem 0 rgba(119, 112, 101, 0.25);
`;

export const Button = styled.button`
	padding: 0.75rem;
	font-weight: 600;
	font-size: 1.15rem;
	border-radius: 0.5em;
	color: white;
	background: rgb(75, 43, 16);
	margin-top: 1rem;
	border: 0;
	cursor: pointer;
	&:hover {
		background: rgb(56, 33, 13);
	}
	&:active {
		background: rgb(248, 226, 191);
		color: black;
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 100%;
	border-radius: 1.5rem;
	box-shadow: 0 0 2rem 0 rgba(119, 112, 101, 0.25);
	padding: 1.5rem;
	margin: 1rem;
	background: white;
`;

export const Label = styled.label`
	margin-top: 4rem;
	font-size: 1em;
	font-weight: 500;
`;
export const Image = styled.img`
	max-width: 200px;
	margin: 1rem;
	height: auto;
`;

export const Paragraph = styled.p`
	font-weight: 400;
	font-size: 1.25rem;
	margin-top: 1rem;
	color: #333;
`;

export const Title = styled.h1`
	font-size: 2.5rem;
	font-weight: 700;
	line-height: 3rem;
	letter-spacing: -0.15rem;
`;
