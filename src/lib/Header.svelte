<script>
  import kBxAcLogo from '../assets/kBxAc.jpg';
  
  // Navigation links
  const navLinks = [
    { text: 'Home', href: '#' },
    { text: 'Team', href: '#team' },
    { text: 'Achievements', href: '#achievements' },
    { text: 'Contact', href: '#contact' }
  ];
  
  let isGlitching = false;
  
  function startGlitch() {
    isGlitching = true;
    setTimeout(() => {
      isGlitching = false;
    }, 2000);
  }
</script>

<header>
  <div class="terminal-line"></div>
  <div class="header-container">
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="logo-container" on:mouseenter={startGlitch}>
      <img src={kBxAcLogo} alt="kBxAc Logo" class="logo-image" />
      <div class="logo">
        <h1 class:glitch={isGlitching} data-text="kBxAc">kBxAc<span class="terminal-cursor">_</span></h1>
        <p class="tagline">$ <span>We Break The Broken</span></p>
      </div>
    </div>
    
    <nav>
      <ul>
        {#each navLinks as link, i}
          <li><a href={link.href} style="animation-delay: {i * 0.1}s" class="nav-link">/{link.text}</a></li>
        {/each}
      </ul>
    </nav>
  </div>
  <div class="noise-overlay"></div>
</header>

<style>
  header {
    background-color: rgba(0, 0, 0, 0.9);
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.8);
    border-bottom: 1px solid #222;
    position: relative;
  }
  
  .terminal-line {
    height: 2px;
    width: 100%;
    background: linear-gradient(90deg, transparent, #4287f5, transparent);
  }
  
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .logo-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .logo-image {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    border: 2px solid #4287f5;
    object-fit: cover;
    filter: drop-shadow(0 0 5px rgba(66, 135, 245, 0.5));
    transition: transform 0.3s ease;
  }
  
  .logo-container:hover .logo-image {
    transform: scale(1.1);
    filter: drop-shadow(0 0 8px rgba(66, 135, 245, 0.8));
  }
  
  .logo h1 {
    margin: 0;
    font-size: 2.8rem;
    font-weight: 700;
    color: #ffffff;
    text-shadow: 0 0 10px rgba(66, 135, 245, 0.6);
    position: relative;
    display: inline-block;
  }
  
  .terminal-cursor {
    display: inline-block;
    color: #4287f5;
    animation: blink 1s infinite;
  }
  
  @keyframes blink {
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
  }
  
  .tagline {
    margin: 0;
    font-size: 0.9rem;
    color: #aaa;
    font-family: 'Space Mono', monospace;
  }
  
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
  
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: #4287f5; }
  }
  
  nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 1.5rem;
  }
  
  .nav-link {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    padding: 0.5rem 0;
    display: inline-block;
    transition: all 0.3s;
    position: relative;
    animation: fadeIn 0.5s ease forwards;
    opacity: 0;
    transform: translateY(-10px);
  }
  
  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .nav-link:hover {
    color: #4287f5;
    transform: translateY(-2px);
  }
  
  .nav-link:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #4287f5;
    transition: width 0.3s;
  }
  
  .nav-link:hover:before {
    width: 100%;
  }
  
  .noise-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    opacity: 0.04;
    pointer-events: none;
    z-index: -1;
  }
  
  @media (max-width: 768px) {
    .header-container {
      flex-direction: column;
      gap: 1rem;
    }
    
    nav ul {
      gap: 1rem;
    }
    
    .logo h1 {
      font-size: 2.2rem;
    }
    
    .logo-container {
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }
    
    .logo-image {
      width: 40px;
      height: 40px;
    }
  }
</style> 