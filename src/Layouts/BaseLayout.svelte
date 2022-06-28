<script lang="ts">
	import BaseHead from './BaseHead.svelte';

	export let title: string;
	export let pageDescription: string;
</script>

<svelte:head>
	<BaseHead {title} description={pageDescription} />
</svelte:head>

<slot />
