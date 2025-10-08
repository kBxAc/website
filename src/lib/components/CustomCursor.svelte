<script lang="ts">
	import { onMount } from 'svelte';

	// Main dot position (follows mouse instantly)
	let dotX = 0;
	let dotY = 0;

	// Outline circle position (lags behind for a trailing effect)
	let outlineX = 0;
	let outlineY = 0;

	let isHovering = false;

	onMount(() => {
		const handleMouseMove = (e: MouseEvent) => {
			dotX = e.clientX;
			dotY = e.clientY;
		};

		const animate = () => {
			outlineX += (dotX - outlineX) * 0.2;
			outlineY += (dotY - outlineY) * 0.2;
			requestAnimationFrame(animate);
		};

		const handleMouseOver = (e: MouseEvent) => {
			if (e.target instanceof Element && e.target.closest('a, button')) {
				isHovering = true;
			}
		};

		const handleMouseOut = (e: MouseEvent) => {
			if (e.target instanceof Element && e.target.closest('a, button')) {
				isHovering = false;
			}
		};

		window.addEventListener('mousemove', handleMouseMove);
		document.body.addEventListener('mouseover', handleMouseOver);
		document.body.addEventListener('mouseout', handleMouseOut);
		animate();

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			document.body.removeEventListener('mouseover', handleMouseOver);
			document.body.addEventListener('mouseout', handleMouseOut);
		};
	});
</script>

<div class="cursor-glow" style="transform: translate({dotX}px, {dotY}px);" />

<div
	class="cursor-outline"
	class:hovering={isHovering}
	style="transform: translate({outlineX - 16}px, {outlineY - 16}px);"
/>
<div
	class="cursor-dot"
	class:hovering={isHovering}
	style="transform: translate({dotX - 4}px, {dotY - 4}px);"
/>

<style>
	.cursor-dot,
	.cursor-outline,
	.cursor-glow {
		position: fixed;
		top: 0;
		left: 0;
		pointer-events: none;
		border-radius: 50%;
		z-index: 9999;
	}

	/* NEW: Styles for the glow effect */
	.cursor-glow {
		width: 400px;
		height: 400px;
		background: radial-gradient(circle, rgba(217, 70, 239, 0.1), transparent 80%);
		/* Centering the glow div on the cursor's coordinates */
		margin-top: -200px;
		margin-left: -200px;
	}

	.cursor-dot {
		width: 8px;
		height: 8px;
		background-color: var(--spotlight-color, #d946ef);
		transition:
			transform 0.1s linear,
			width 0.3s ease,
			height 0.3s ease,
			background-color 0.3s ease;
	}

	.cursor-outline {
		width: 32px;
		height: 32px;
		border: 2px solid var(--spotlight-color, #d946ef);
		mix-blend-mode: difference;
		transition:
			transform 0.1s linear,
			width 0.3s ease,
			height 0.3s ease,
			background-color 0.3s ease;
	}

	.cursor-dot.hovering {
		width: 0px;
		height: 0px;
		background-color: transparent;
	}

	.cursor-outline.hovering {
		width: 40px;
		height: 40px;
		border-width: 2px;
		background-color: rgba(217, 70, 239, 0.2);
	}
</style>
