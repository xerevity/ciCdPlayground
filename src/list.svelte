<script>
	export let content;
</script>

<div>
{#if Array.isArray(content)}
	<p>
	{#each content as line}
		<li>{line}</li>
	{/each}
	</p>
{:else}
	<p>{content}</p>
{/if}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;		
	}
	p {
		margin: 0;
	}
	li {
		text-align: left;
	}
</style>