<script>
  let name = '';
  let email = '';
  let message = '';
  let submitted = false;
  
  function handleSubmit() {
    // In a real site, this would send the form data to a server
    console.log({ name, email, message });
    submitted = true;
    name = '';
    email = '';
    message = '';
    
    // Reset the submitted state after 5 seconds
    setTimeout(() => {
      submitted = false;
    }, 5000);
  }
  
  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/kBxAc', 
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>' 
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/company/kbxac', 
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>' 
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/kbxac.real', 
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>' 
    },
    { 
      name: 'Discord', 
      url: '#coming-soon', 
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>' 
    },
    { 
      name: 'CTFtime', 
      url: 'https://ctftime.org/team/358282', 
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>' 
    }
  ];
  
  let typingEffect = 0;
  
  function updateTypingEffect() {
    typingEffect = (typingEffect + 1) % 4;
    setTimeout(updateTypingEffect, 500);
  }
  
  updateTypingEffect();
</script>

<section id="contact" class="contact-section">
  <div class="circuit-overlay"></div>
  
  <h2>0x03: <span class="highlight">Contact Us</span></h2>
  <p class="section-description">
    Interested in joining our team or collaborating on CTF events? Establish a secure connection with us!
  </p>
  
  <div class="contact-container">
    <div class="contact-form-container">
      <div class="container-header">
        <div class="header-decoration"></div>
        <h3>// Secure Transmission //</h3>
      </div>
      
      {#if submitted}
        <div class="success-message">
          <div class="success-icon">✓</div>
          <p>Message encrypted and transmitted successfully!</p>
          <div class="blinker">Awaiting response...</div>
        </div>
      {:else}
        <div class="terminal-form-wrapper">
          <p class="terminal-line">$ ./secure_message.sh --initialize</p>
          <p class="terminal-line">Establishing secure channel<span class="loading-dots">{'.'.repeat(typingEffect)}</span></p>
          <p class="terminal-line success">Channel secure! You may proceed.</p>
          
          <form on:submit|preventDefault={handleSubmit} class="contact-form">
            <div class="form-group">
              <label for="name">IDENTITY:</label>
              <input 
                type="text" 
                id="name" 
                bind:value={name} 
                required 
                placeholder="Your codename"
                autocomplete="off"
              />
            </div>
            
            <div class="form-group">
              <label for="email">COMMS CHANNEL:</label>
              <input 
                type="email" 
                id="email" 
                bind:value={email} 
                required 
                placeholder="Your secure email"
                autocomplete="off"
              />
            </div>
            
            <div class="form-group">
              <label for="message">TRANSMISSION:</label>
              <textarea 
                id="message" 
                bind:value={message} 
                rows="5" 
                required 
                placeholder="Enter your encrypted message..."
                autocomplete="off"
              ></textarea>
            </div>
            
            <button type="submit" class="submit-button">
              <span class="button-text">TRANSMIT</span>
              <span class="button-icon">⟩</span>
            </button>
          </form>
        </div>
      {/if}
    </div>
    
    <div class="social-links-container">
      <div class="container-header">
        <div class="header-decoration"></div>
        <h3>// Network Nodes //</h3>
      </div>
      
      <p class="terminal-description">
        <span class="terminal-prompt">$</span> cat /etc/contact_channels.conf
      </p>
      
      <ul class="social-links">
        {#each socialLinks as link, i}
          <li style="animation-delay: {i * 0.15}s">
            <a href={link.url} target="_blank" rel="noopener noreferrer" class="social-link">
              <div class="node-indicator">
                <div class="node-pulse"></div>
              </div>
              <span class="icon">
                {@html link.icon}
              </span>
              <span class="social-name">{link.name}</span>
              <span class="node-status">ONLINE</span>
            </a>
          </li>
        {/each}
      </ul>
      
      <div class="additional-info">
        <div class="info-header">
          <div class="header-icon">!</div>
          <h4>Join Our CTF Operations</h4>
        </div>
        <p>
          We organize and participate in various Capture The Flag competitions. 
          Stay updated with our upcoming operations through our communication channels.
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  .contact-section {
    padding: 4rem 0;
    position: relative;
    overflow: hidden;
  }
  
  .circuit-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23222' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%234285f4' fill-opacity='0.05'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.1;
    z-index: -1;
  }
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    text-align: center;
    color: #ffffff;
    text-transform: uppercase;
    position: relative;
  }
  
  .highlight {
    position: relative;
    color: #4287f5;
    z-index: 1;
  }
  
  .highlight::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 5px;
    bottom: 0;
    left: 0;
    background-color: rgba(66, 135, 245, 0.3);
    z-index: -1;
  }
  
  h3 {
    font-size: 1.4rem;
    margin: 0;
    color: #ffffff;
    font-weight: 700;
  }
  
  h4 {
    font-size: 1.2rem;
    margin: 0;
    color: #ffffff;
  }
  
  .section-description {
    max-width: 800px;
    margin: 0 auto 3rem;
    text-align: center;
    font-size: 1.1rem;
    line-height: 1.6;
    color: #f0f0f0;
    font-family: 'Space Mono', monospace;
  }
  
  .contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .container-header {
    background: #080808;
    padding: 1rem;
    position: relative;
    border-bottom: 1px solid #222;
    margin-bottom: 1.5rem;
  }
  
  .header-decoration {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #4287f5, transparent);
  }
  
  .contact-form-container, 
  .social-links-container {
    background: rgba(10, 10, 10, 0.8);
    border-radius: 0;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    border: 1px solid #222;
    position: relative;
  }
  
  .terminal-form-wrapper {
    padding: 1.5rem;
    font-family: 'Space Mono', monospace;
  }
  
  .terminal-line {
    margin: 0;
    padding: 5px 0;
    color: #ccc;
    font-family: 'Space Mono', monospace;
    font-size: 0.9rem;
  }
  
  .terminal-line:first-child {
    color: #4287f5;
  }
  
  .loading-dots {
    display: inline-block;
    min-width: 20px;
  }
  
  .success {
    color: #27c93f;
  }
  
  .terminal-description {
    margin: 1rem 1.5rem;
    line-height: 1.6;
    color: #f0f0f0;
    font-family: 'Space Mono', monospace;
    font-size: 0.9rem;
  }
  
  .terminal-prompt {
    color: #4287f5;
    font-weight: bold;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
    position: relative;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #4287f5;
    font-family: 'Space Mono', monospace;
    font-size: 0.85rem;
  }
  
  input, textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #222;
    background: rgba(10, 10, 10, 0.9);
    color: #fff;
    border-radius: 0;
    font-family: 'Space Mono', monospace;
    font-size: 1rem;
    transition: all 0.3s;
  }
  
  input:focus, textarea:focus {
    outline: none;
    border-color: #4287f5;
    box-shadow: 0 0 0 2px rgba(66, 135, 245, 0.2);
    background: rgba(15, 15, 15, 0.9);
  }
  
  .submit-button {
    background: #4287f5;
    color: #ffffff;
    border: none;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 0;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    font-family: 'Space Mono', monospace;
  }
  
  .button-text {
    margin-right: 0.5rem;
    z-index: 1;
  }
  
  .button-icon {
    font-size: 1.2rem;
    z-index: 1;
    transition: transform 0.3s;
  }
  
  .submit-button:hover {
    background: #2563eb;
  }
  
  .submit-button:hover .button-icon {
    transform: translateX(5px);
  }
  
  .submit-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: all 0.5s;
  }
  
  .submit-button:hover::before {
    left: 100%;
  }
  
  .success-message {
    background: rgba(10, 10, 10, 0.9);
    padding: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  
  .success-icon {
    font-size: 2rem;
    color: #27c93f;
    margin-bottom: 1rem;
    border: 2px solid #27c93f;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  
  .success-message p {
    margin: 0 0 1rem;
    color: #fff;
    font-weight: 600;
    font-family: 'Space Mono', monospace;
  }
  
  .blinker {
    color: #4287f5;
    font-family: 'Space Mono', monospace;
    position: relative;
  }
  
  .blinker::after {
    content: "_";
    position: absolute;
    animation: blink 1s infinite;
  }
  
  @keyframes blink {
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
  }
  
  .social-links {
    list-style: none;
    padding: 0 1.5rem;
    margin: 1.5rem 0;
  }
  
  .social-links li {
    margin-bottom: 1rem;
    animation: fadeInRight 0.6s ease forwards;
    opacity: 0;
    transform: translateX(-20px);
  }
  
  @keyframes fadeInRight {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .social-link {
    display: flex;
    align-items: center;
    padding: 0.8rem;
    background: rgba(10, 10, 10, 0.8);
    border: 1px solid #222;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
    text-decoration: none;
  }
  
  .social-link:hover {
    background: rgba(20, 20, 20, 0.8);
    border-color: #4287f5;
    transform: translateX(5px);
  }
  
  .node-indicator {
    position: relative;
    width: 12px;
    height: 12px;
    margin-right: 1rem;
  }
  
  .node-indicator::before {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    background: #27c93f;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .node-pulse {
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(39, 201, 63, 0.3);
    animation: pulse 1.5s infinite;
    top: 0;
    left: 0;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(0.5);
      opacity: 1;
    }
    100% {
      transform: scale(1.5);
      opacity: 0;
    }
  }
  
  .icon {
    margin-right: 1rem;
    color: #4287f5;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .social-name {
    font-weight: 600;
    color: #ffffff;
    flex-grow: 1;
    font-family: 'Space Mono', monospace;
    font-size: 0.9rem;
  }
  
  .node-status {
    font-size: 0.7rem;
    font-weight: 700;
    background: rgba(39, 201, 63, 0.2);
    color: #27c93f;
    padding: 0.2rem 0.5rem;
    border-radius: 2px;
    font-family: 'Space Mono', monospace;
  }
  
  .additional-info {
    padding: 0 1.5rem 1.5rem;
    border-top: 1px solid #222;
    margin-top: 1.5rem;
  }
  
  .info-header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
  }
  
  .header-icon {
    width: 24px;
    height: 24px;
    background: #4287f5;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.8rem;
    font-weight: bold;
    color: #fff;
  }
  
  .additional-info p {
    color: #e0e0e0;
    line-height: 1.6;
    font-size: 0.9rem;
    margin: 0;
  }
  
  @media (max-width: 768px) {
    .contact-container {
      grid-template-columns: 1fr;
    }
  }
</style> 