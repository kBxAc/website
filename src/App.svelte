<script>
  // Import components we'll create
  import Header from './lib/Header.svelte';
  import TeamInfo from './lib/TeamInfo.svelte';
  import Achievements from './lib/Achievements.svelte';
  import Contact from './lib/Contact.svelte';
</script>

<main>
  <div class="side-decorations left">
    <div class="decoration-line"></div>
    <div class="decoration-dot"></div>
    <div class="decoration-dot"></div>
    <div class="decoration-dot"></div>
  </div>
  
  <Header />
  
  <div class="container">
    <TeamInfo />
    <Achievements />
    <Contact />
  </div>
  
  <footer>
    <div class="terminal-line">
      <span class="terminal-prompt">$</span> <span class="command">echo $COPYRIGHT</span>
    </div>
    <p>© {new Date().getFullYear()} kBxAc CTF Team. All rights reserved.</p>
    <div class="footer-decoration"></div>
  </footer>
  
  <div class="side-decorations right">
    <div class="decoration-line"></div>
    <div class="decoration-dot"></div>
    <div class="decoration-dot"></div>
    <div class="decoration-dot"></div>
  </div>
</main>

<style>
  main {
    position: relative;
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
    position: relative;
  }
  
  footer {
    text-align: center;
    padding: 2rem 0;
    background-color: #000000;
    margin-top: 2rem;
    border-top: 1px solid #111;
    color: #f0f0f0;
    position: relative;
  }
  
  .terminal-line {
    font-family: 'Space Mono', monospace;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }
  
  .terminal-prompt {
    color: #4287f5;
    font-weight: bold;
  }
  
  .command {
    color: #ccc;
  }
  
  .footer-decoration {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(66, 135, 245, 0.2) 20%, 
      rgba(66, 135, 245, 0.5) 50%, 
      rgba(66, 135, 245, 0.2) 80%, 
      transparent 100%);
  }
  
  .side-decorations {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
    pointer-events: none;
  }
  
  .side-decorations.left {
    left: 20px;
  }
  
  .side-decorations.right {
    right: 20px;
  }
  
  .decoration-line {
    width: 2px;
    height: 100px;
    background: linear-gradient(to bottom, transparent, #4287f5, transparent);
  }
  
  .decoration-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #4287f5;
    margin: 10px 0;
    opacity: 0.7;
  }
  
  @media (max-width: 1400px) {
    .side-decorations {
      display: none;
    }
  }
</style>
