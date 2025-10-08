<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Member } from '../types';

	export let member: Member;

	const dispatch = createEventDispatcher();

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			dispatch('close');
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<div
	class="modal-backdrop"
	on:click={() => dispatch('close')}
	role="button"
	tabindex="-1"
	aria-label="Close member details"
>
	<div class="modal-content" on:click|stopPropagation>
		<button class="close-button" on:click={() => dispatch('close')}>[X]</button>

		<header class="profile-header">
			<img src={member.pfp} alt="Profile picture for {member.id}" class="pfp" />
			<div class="header-text">
				<h2 class="member-id">{member.id}</h2>
				<p class="member-role">{member.role}</p>
				<p class="member-tagline">{member.tagline}</p>
			</div>
		</header>

		<div class="details-grid">
			<div class="skills">
				<h3 class="detail-title">Skillset</h3>
				<ul class="skills-list">
					{#each member.skills as skill}
						<li>{skill}</li>
					{/each}
				</ul>
			</div>

			<div class="bio">
				<h3 class="detail-title">Profile</h3>
				<p>{member.bio}</p>
			</div>
		</div>
	</div>
</div>

<style>
	.modal-backdrop {
		position: fixed;
		inset: 0;
		z-index: 50;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(0, 0, 0, 0.7);
		backdrop-filter: blur(8px);
		animation: fade-in 0.3s ease;
	}

	.modal-content {
		position: relative;
		width: 100%;
		max-width: 700px;
		margin: 1rem;
		background-color: #161616;
		border: 1px solid #333;
		padding: 2.5rem;
		animation: slide-up 0.4s ease;
	}

	.close-button {
		position: absolute;
		top: 1rem;
		right: 1rem;
		font-family: 'Inter', sans-serif;
		color: #777;
		background: none;
		border: none;
		cursor: pointer;
		transition: color 0.3s;
	}
	.close-button:hover {
		color: #fff;
	}

	.profile-header {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1.5rem;
		margin-bottom: 2rem;
	}
	@media (min-width: 640px) {
		.profile-header {
			flex-direction: row;
			align-items: center;
		}
	}

	.pfp {
		width: 100px;
		height: 100px;
		flex-shrink: 0;
		border: 1px solid #555;
		filter: grayscale(100%);
		transition: filter 0.3s;
	}
	.pfp:hover {
		filter: grayscale(0%);
	}

	.member-id {
		font-size: 2.5rem;
		font-weight: 800;
		letter-spacing: -0.05em;
		line-height: 1;
		color: #fff;
		text-transform: none;
	}
	.member-role {
		font-size: 1rem;
		color: var(--spotlight-color, #d946ef);
		margin-top: 0.25rem;
	}
	.member-tagline {
		color: #999;
		font-style: italic;
		quotes: '"' '"';
		margin-top: 0.75rem;
		text-transform: none;
	}
	.member-tagline::before {
		content: open-quote;
	}
	.member-tagline::after {
		content: close-quote;
	}

	.details-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
	}
	@media (min-width: 640px) {
		.details-grid {
			grid-template-columns: 1fr 2fr;
		}
	}

	.detail-title {
		font-size: 0.875rem;
		font-weight: 600;
		color: #777;
		margin-bottom: 1rem;
	}

	.skills-list li {
		margin-bottom: 0.5rem;
	}

	.bio p {
		color: #ccc;
		text-transform: none;
		line-height: 1.6;
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@keyframes slide-up {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
