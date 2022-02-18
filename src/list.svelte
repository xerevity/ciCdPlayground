<script>
	export let content;
</script>

<div>
{#if Array.isArray(content)}
	<p data-testid="listContentParagraph">
	{#each content as line}
		<li>{line}</li>
	{/each}
	</p>
{:else}
	<p data-testid="singleContentParagraph">
		{content}
	</p>
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