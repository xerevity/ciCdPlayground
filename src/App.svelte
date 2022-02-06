<script>
	import List from './list.svelte';
	export let name;
	export let associations;
	export let tools;
	export let expectations;
	export let hobbies;
</script>

<main>
	<h1>Hello, my name is {name}!</h1>

	<h2>I associate with CI/CD:</h2>
	<List content={associations}></List>

	<h2>In my project we use:</h2>
	<List content={tools}></List>

	<h2>I want to learn today:</h2>
	<List content={expectations}></List>

	<h2>When not doing devops, I like to:</h2>
	<List content={hobbies}></List>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	h2 {
		color: #aa3e00;
		font-size: 2em;
		font-weight: 200;

		margin-top: 1em;
		margin-bottom: 0.5em;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>