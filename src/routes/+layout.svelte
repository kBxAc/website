<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/logo.jpg';
	import CustomCursor from '$lib/components/CustomCursor.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<CustomCursor />

{@render children?.()}
