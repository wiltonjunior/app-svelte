import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'My first app in svelte'
	}
});

export default app;