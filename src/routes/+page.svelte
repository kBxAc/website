<script lang="ts">
	import MemberDetails from '$lib/components/MemberDetails.svelte';
	import type { Member } from '$lib/types';

	let selectedMember: Member | null = null;

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			if (selectedMember) selectedMember = null;
			if (showTimeline) showTimeline = false;
			return;
		}

		if (
			selectedMember ||
			showTimeline ||
			(event.target as HTMLElement).closest('input, textarea')
		) {
			return;
		}

		const key = event.key.toUpperCase();
		const link = navLinks.find((l) => l.key === key);

		if (link) {
			event.preventDefault();

			if (link.key === 'T') {
				showTimeline = true;
				return;
			}

			if (link.url.startsWith('#')) {
				const element = document.querySelector(link.url);
				if (element) {
					element.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}
			} else {
				window.location.href = link.url;
			}
		}
	}

	let showTimeline = false;
	const teamName: string = 'kBxAc';

	const navLinks: { name: string; key: string; url: string }[] = [
		{ name: 'Timeline', key: 'T', url: '#' },
		{ name: 'Intel', key: 'I', url: '#achievements' },
		{ name: 'Roster', key: 'R', url: '#roster' },
		{ name: 'flagbook', key: 'F', url: 'https://flagbook.kbxac.xyz' },
		{ name: 'Contact', key: 'C', url: 'mailto:admin@kbxac.com' }
	];

	const members: Member[] = [
		{
			id: 'k3rn3lbr3ach3r',
			role: 'Team Captain',
			pfp: 'https://i.ibb.co/5hqNrKz6/k3rn3lbr3ach3r.jpg',
			tagline: '"Program received signal SIGSEGV, Segmentation fault.0x1337 in check_sanity()"',
			skills: ['Sanity Check', 'Pwn', 'RE', 'Leadership'],
			bio: 'Sanity Check Expert'
		},
		{
			id: 'ayushch',
			role: 'Team Captain',
			pfp: 'https://i.ibb.co/JwyLfdvQ/ayushch.png',
			tagline: '"सूत्त अरुत्तु, सूप वेच्चुरुवेन"',
			skills: ['RE', 'Android', 'Malware', 'Deobfuscation', 'Binary Ninja', 'Leadership'],
			bio: 'Reverse Engineering is ❤️'
		},
		{
			id: 'adithG17',
			role: 'Core Member',
			pfp: 'https://i.ibb.co/1Y3vYcvW/adithg17.jpg',
			tagline: '"OSINT"',
			skills: ['RSA', 'ECC', 'Post-Quantum'],
			bio: 'A master of ciphers and modern cryptographic protocols. Believes every encryption has a weakness waiting to be found.'
		},
		{
			id: 'kaii-k',
			role: 'NeoPhyte',
			pfp: 'https://i.ibb.co/VWJqS3ZV/kaiik.jpg',
			tagline: '"Inactivity"',
			skills: ['Memory Analysis', 'Steganography'],
			bio: 'Digs through data remnants to uncover hidden flags and reconstruct events. Leaves no byte unturned.'
		},
		{
			id: 'ilenaak',
			role: 'NeoPhyte',
			pfp: 'https://i.ibb.co/DDZx5LMB/ilenaak.png',
			tagline: '"He will tell soon"',
			skills: ['Ghidra', 'IDA Pro', 'Malware'],
			bio: 'Deconstructs compiled binaries to understand their inner workings, finding vulnerabilities where others see only machine code.'
		},
		{
			id: 'Cr4zy_dr34m',
			role: 'NeoPhyte',
			pfp: 'https://i.ibb.co/PsP8ZVXv/cr4zy-dr34m.png',
			tagline: '"Sapna"',
			skills: ['Docker', 'Kubernetes', 'Ansible'],
			bio: "Manages the team's hardware and software stack, ensuring stable and secure operations during competitions."
		},
		{
			id: '$hellGh05t3r',
			role: 'NeoPhyte',
			pfp: 'https://i.ibb.co/FbVFyRy4/shellghoster.png',
			tagline: '"A shell calls, the void listens (tf 🥀)"',
			skills: ['Heap Exploitation', 'ROP Chains'],
			bio: 'A pure exploitation expert who specializes in gaining arbitrary code execution on vulnerable systems.'
		},
		{
			id: 'R0z4r1y0',
			role: 'NeoPhyte',
			pfp: 'https://i.ibb.co/zhyKjJhR/R0z4r1y0-1.jpg',
			tagline: '"Hunting flags, chasing truth"',
			skills: ['JTAG', 'Side-Channel', 'Glitching'],
			bio: 'Focuses on the physical layer, extracting secrets from silicon and bending hardware to their will.'
		},
		{
			id: 'HydraRoot',
			role: 'NeoPhyte',
			pfp: 'https://i.ibb.co/Y7Zr30JQ/Hydra-Root-1.jpg',
			tagline: '"Many heads, one root"',
			skills: ['OSINT', 'Scanning', 'Enumeration'],
			bio: 'The first eyes on any target, mapping attack surfaces and discovering initial points of entry for the team.'
		}
	];

	const journey: { date: string; event: string; status: 'complete' | 'current' }[] = [
		{ date: '10.2024', event: 'Team Founded', status: 'complete' },
		{ date: '10.2024', event: 'First Major CTF Entry', status: 'complete' },
		{ date: '11.2024', event: 'Achieved Top 50 in an International CTF', status: 'complete' },
		{ date: '01.2025', event: "Started the year in CTFtime's India Top 50", status: 'complete' },
		{ date: '03.2025', event: 'Qualified for BinaryClash Finals', status: 'complete' },
		{ date: '04.2025', event: 'Qualified for Pentathon Finals', status: 'complete' },
		{
			date: '05.2025',
			event: 'Improved rankings in BinaryClash & Pentathon Finals',
			status: 'complete'
		},
		{ date: '07.2025', event: 'Strategic 2-Month Hiatus', status: 'complete' },
		{ date: '09.2025', event: 'Secured Two Consecutive CTF Wins', status: 'complete' },
		{ date: '10.2025', event: 'Celebrated First Anniversary', status: 'current' }
	];
	const achievements: string[] = [
		'1st Place // Red Teaming CTF 2025',
		'1st Place // CINTEL CTF 2025',
		'5th Place // Binary Clash Finals 2025',
		'13th Place // Pentathon Finals 2025',
		'18th Place // Binary Clash Qualifiers 2025',
		'21st Place // Pentathon Qualifiers 2025'
	];
	const socials: { name: string; url: string }[] = [
		{ name: 'GitHub', url: 'https://github.com/kBxAc' },
		{ name: 'LinkedIn', url: 'https://www.linkedin.com/company/kbxac/' },
		{ name: 'CTFtime', url: 'https://ctftime.org/team/358282/' }
	];
</script>

<svelte:head>
	<title>{teamName}</title>
</svelte:head>

<svelte:window on:keydown={handleKeydown} />

{#if selectedMember}
	<MemberDetails member={selectedMember} on:close={() => (selectedMember = null)} />
{/if}

{#if showTimeline}
	<div class="timeline-overlay" on:click={() => (showTimeline = false)}>
		<div class="timeline-content" on:click|stopPropagation>
			<button class="close-button" on:click={() => (showTimeline = false)}>[X]</button>
			<h2 class="section-title">Timeline_Y1</h2>
			<ul class="timeline-list">
				{#each journey as item}
					<li class:current={item.status === 'current'}>
						<div class="marker" />
						<div class="content">
							<span class="date">{item.date}</span>
							<span class="event">{item.event}</span>
							{#if item.status === 'current'}
								<span class="status-indicator" />
							{/if}
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
{/if}

<div class="main-container" class:modal-open={selectedMember || showTimeline}>
	<div class="content-grid">
		<aside class="left-sidebar">
			<nav class="sidebar-nav">
				{#each navLinks as link}
					{#if link.key === 'T'}
						<button class="nav-button" on:click={() => (showTimeline = true)}>
							<span class="keybind">{link.key}</span>
							<span class="divider">|</span>
							<span class="link-name">{link.name}</span>
						</button>
					{:else}
						<a href={link.url} class="nav-button">
							<span class="keybind">{link.key}</span>
							<span class="divider">|</span>
							<span class="link-name">{link.name}</span>
						</a>
					{/if}
				{/each}
			</nav>

			<div class="vertical-title-container">
				<h1 class="team-name">{teamName}</h1>
			</div>
		</aside>

		<main class="main-content">
			<section class="section" id="achievements">
				<h2 class="section-title">Achievements</h2>
				<div class="achievements-grid">
					{#each achievements as item, i}
						<div class="achievement-item" style="animation-delay: {i * 100}ms;">{item}</div>
					{/each}
				</div>
			</section>

			<section class="section" id="roster">
				<h2 class="section-title">Roster</h2>
				<div class="roster-grid">
					{#each members as member}
						<button class="roster-item" on:click={() => (selectedMember = member)}>
							{member.id}
						</button>
					{/each}
				</div>
			</section>
		</main>

		<footer class="footer">
			<span class="location">Kattankulathur, IN</span>
			<div class="socials">
				{#each socials as social}
					<a href={social.url} target="_blank" rel="noopener noreferrer">{social.name}</a>
				{/each}
			</div>
			<span>EST. 2024</span>
		</footer>
	</div>
</div>

<style>
	:global(body) {
		background-color: #111;
		color: #f5f5f5;
		font-family: 'Inter', sans-serif;
		font-weight: 500;
		text-transform: uppercase;
		/* UPDATED: Changed from overflow-x to overflow to prevent all body scrolling */
		overflow: hidden;
	}

	.main-container {
		--spotlight-color: #d946ef;
		/* UPDATED: Changed min-height to height to fix the container to the viewport size */
		height: 100vh;
		padding: 0; /* Padding moved to the grid container */
		transition: filter 0.3s ease-out;
	}
	.main-container.modal-open {
		filter: blur(4px);
		pointer-events: none;
	}
	:global(body.modal-open) {
		overflow: hidden;
	}

	.content-grid {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr auto;
		gap: 2rem; /* Reduced mobile gap slightly */
		/* UPDATED: The grid now controls the full height and has padding */
		height: 100%;
		padding: 2rem;
		max-width: 1400px;
		margin: auto;
	}
	@media (min-width: 1024px) {
		.content-grid {
			grid-template-columns: auto 1fr;
			grid-template-rows: 1fr auto;
			gap: 2rem;
		}
	}

	.left-sidebar {
		display: none;
	}
	@media (min-width: 1024px) {
		.left-sidebar {
			grid-row: 1 / 3; /* UPDATED: Make sidebar span both rows to align with footer */
			display: flex;
			align-items: center;
			gap: 2rem;
			max-width: 100%;
			overflow: hidden;
		}
	}

	.sidebar-nav {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		flex-shrink: 0;
	}
	.nav-button {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		color: #777;
		text-decoration: none;
		font-weight: 600;
		font-size: 1rem;
		transition: color 0.3s;
		white-space: nowrap;
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		font-family: inherit;
		text-transform: uppercase;
		text-align: left;
	}
	.nav-button:hover {
		color: var(--spotlight-color);
	}
	.nav-button .divider {
		color: #444;
	}
	.nav-button .keybind {
		border: 1px solid #555;
		width: 28px;
		height: 28px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		color: #999;
	}

	.vertical-title-container {
		display: flex;
		justify-content: start;
		align-items: start;
		height: 100%;
		border-right: 1px solid #333;
		padding-right: 2rem;
		writing-mode: vertical-rl;
		transform: rotate(180deg);
		min-width: 0;
	}
	.team-name {
		font-size: clamp(4rem, 15vw, 12rem);
		font-weight: 800;
		letter-spacing: -0.075em;
		line-height: 0.8;
		text-align: left;
		text-transform: none;
	}

	.main-content {
		display: flex;
		flex-direction: column;
		gap: 4rem;
		/* THIS IS THE KEY FIX: Makes this container scrollable if its content overflows */
		overflow-y: auto;
	}
	@media (max-width: 1023px) {
		.main-content::before {
			content: 'kBxAc';
			display: block;
			font-size: 4rem;
			font-weight: 800;
			letter-spacing: -0.075em;
			line-height: 0.8;
			text-align: center;
			margin-bottom: 2rem;
			flex-shrink: 0; /* Prevent header from shrinking */
		}
	}

	.section {
		flex-shrink: 0; /* Prevent sections from shrinking weirdly during scroll */
	}
	.section-title {
		font-size: 0.875rem;
		font-weight: 600;
		color: #777;
		margin-bottom: 1.5rem;
		border-bottom: 1px solid #333;
		padding-bottom: 0.75rem;
	}

	.timeline-list {
		position: relative;
		padding-left: 2rem;
		border-left: 1px solid #333;
	}
	.timeline-list li {
		position: relative;
		margin-bottom: 1.5rem;
	}
	.timeline-list li:last-child {
		margin-bottom: 0;
	}
	.timeline-list li .marker {
		position: absolute;
		left: -2rem;
		top: 0.5rem;
		width: 9px;
		height: 9px;
		background-color: #333;
		border: 1px solid #555;
		transform: translateX(-4px);
		transition: all 0.3s;
	}
	.timeline-list li:hover .marker {
		background-color: var(--spotlight-color);
		border-color: var(--spotlight-color);
	}
	.timeline-list li.current .marker {
		background-color: var(--spotlight-color);
		border-color: var(--spotlight-color);
		box-shadow: 0 0 10px var(--spotlight-color);
	}
	.timeline-list li .content {
		display: flex;
		align-items: baseline;
		gap: 1.5rem;
	}
	.timeline-list .date {
		color: #777;
		flex-shrink: 0;
		font-size: 1.125rem;
	}
	.timeline-list .event {
		font-weight: 600;
		color: #ccc;
		transition: color 0.3s;
		font-size: 1.25rem;
	}
	.timeline-list li:hover .event {
		color: #fff;
	}
	.status-indicator {
		width: 10px;
		height: 10px;
		background-color: var(--spotlight-color);
		border-radius: 50%;
		animation: pulse 1.5s infinite;
	}
	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
			box-shadow: 0 0 5px var(--spotlight-color);
		}
		50% {
			opacity: 0.5;
			box-shadow: 0 0 15px var(--spotlight-color);
		}
	}

	.achievements-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}
	@media (min-width: 768px) {
		.achievements-grid {
			grid-template-columns: 1fr 1fr;
		}
	}
	.achievement-item {
		border: 1px solid #333;
		padding: 1rem;
		font-size: 0.875rem;
		font-weight: 600;
		transition: all 0.3s;
		opacity: 0;
		animation: fade-in-up 0.5s ease forwards;
	}
	.achievement-item:hover {
		border-color: var(--spotlight-color);
		color: #fff;
	}
	@keyframes fade-in-up {
		to {
			opacity: 1;
			transform: translateY(0);
		}
		from {
			opacity: 0;
			transform: translateY(10px);
		}
	}

	.roster-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: 1rem;
	}
	.roster-item {
		background: none;
		color: inherit;
		border: 1px solid #333;
		font: inherit;
		cursor: pointer;
		outline: inherit;
		text-transform: uppercase;
		padding: 1.5rem 1rem;
		text-align: center;
		font-weight: 600;
		transition: all 0.3s;
		text-transform: none;
	}
	.roster-item:hover {
		border-color: var(--spotlight-color);
		background-color: rgba(217, 70, 239, 0.1);
		color: #fff;
	}

	.footer {
		grid-column: 2 / 3; /* UPDATED: Align footer with the main content column */
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.75rem;
		color: #555;
		border-top: 1px solid #333;
		padding-top: 1rem;
		flex-shrink: 0; /* Prevent footer from shrinking */
	}
	@media (max-width: 1023px) {
		.footer {
			grid-column: 1 / -1;
		}
	}

	.socials {
		display: flex;
		gap: 1.5rem;
	}
	.socials a {
		color: #888;
		font-weight: 600;
		text-decoration: none;
		transition: color 0.3s;
	}
	.socials a:hover {
		color: var(--spotlight-color);
	}
	@media (max-width: 640px) {
		.footer {
			flex-direction: column;
			gap: 1rem;
		}
		.socials {
			order: -1;
		}
	}

	/* --- TIMELINE OVERLAY STYLES --- */
	.timeline-overlay {
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
	.timeline-content {
		position: relative;
		width: 100%;
		max-width: 900px;
		max-height: 80vh;
		overflow-y: auto;
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
		font-size: 1rem;
	}
	.close-button:hover {
		color: #fff;
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
