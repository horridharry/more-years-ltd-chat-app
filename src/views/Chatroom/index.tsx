import { useState, useEffect, useRef, useCallback } from 'react';
import { useAuth } from '../../hooks/useAuth';

const URL = 'wss://26g24plfwg.execute-api.us-east-1.amazonaws.com/production';

export const Chatroom: React.FC = () => {
	const auth = useAuth();
	const username: string = auth.user || 'Anonymous';
	const ws = useRef<WebSocket | null>(null);
	const [clients, setClients] = useState([]);
	const [messages, setMessages] = useState<string[] | object[]>([]);

	const onConnectionOpen = useCallback(() => {
		console.log('Connection: open.');
		ws.current?.send(
			JSON.stringify({ action: 'addUser', username: username })
		);
	}, [username]);

	const onConnectionClose = useCallback(() => {
		console.log('Connection: closed.');
	}, []);

	const onMessageReceived = useCallback((event: string) => {
		const data = JSON.parse(event);
		data.messages ? setMessages(data.messages) : setClients(data.clients);
	}, []);

	useEffect(() => {
		if (ws.current?.readyState !== WebSocket.OPEN) {
			console.log('Connection opening...');
			ws.current = new WebSocket(URL);
			ws.current.addEventListener('open', onConnectionOpen);
			ws.current.addEventListener('close', onConnectionClose);
			ws.current.addEventListener('message', (event) =>
				onMessageReceived(event.data)
			);
		}
		return () => {
			console.log('Connection closing...');
			ws.current?.close();
		};
	}, [onConnectionOpen, onConnectionClose, onMessageReceived]);

	const onSendMessage = useCallback(
		(message: string) => {
			const messageBody = {
				message: `${username}: ${message}`,
				sender: username,
				timestamp: new Date().toISOString(),
			};
			ws.current?.send(JSON.stringify({ action: 'addMessage', message }));
		},

		[username]
	);

	const handleSubmit = ((e: any) => {
		e.preventDefault();
		const message = e.target.message.value;
		onSendMessage(message);
		e.target.message.value = '';
	}) as React.FormEventHandler<HTMLFormElement>;

	return (
		<>
			{messages && (
				<ul>
					{messages.map((message: any, i: number) => (
						<li key={i}>{message}</li>
					))}
				</ul>
			)}
			<form onSubmit={(e) => handleSubmit(e)}>
				<input id='message' />
				<button>Send</button>
			</form>
			<button onClick={() => auth.signout()}>Log Out</button>
		</>
	);
};
