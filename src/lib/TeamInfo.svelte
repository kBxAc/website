<script>
  import adithg17Image from '../assets/adithg17.jpg';
  
  // Team structure organized hierarchically
  const leadership = [
    { name: 'k3rn3lbr3ach3r', role: 'Captain', specialization: 'Sanity Check' },
    { name: 'ayushch', role: 'Captain', specialization: 'Reverse Engineering' }
  ];
  
  const coreMember = [
    { name: 'adithG17', role: 'Core Member', specialization: 'OSINT', image: adithg17Image },
    { name: 'Cr4zy_dr34m', role: 'Core Member', specialization: 'Instagram' }
  ];
  
  const newMembers = [
    { name: 'kaii-k', role: 'NeoPhyte', specialization: 'Inactivity' },
    { name: 'BR3AK3R', role: 'NeoPhyte', specialization: 'GUI Lover' },
    { name: 'SpXmaReerhS', role: 'NeoPhyte', specialization: 'Not sure if he exists' },
    { name: 'ilenaak', role: 'NeoPhyte', specialization: 'He will tell soon' },
    { name: 'Cr4zy_dr34m', role: 'NeoPhyte', specialization: 'Content Manager' }
  ];
</script>

<section id="team" class="team-section">
  <div class="section-header">
    <h2>0x01: <span class="highlight">Our Team</span></h2>
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-button"></span>
        <span class="terminal-button"></span>
        <span class="terminal-button"></span>
        <span class="terminal-title">kbxac-terminal -- team-info.sh</span>
      </div>
      <div class="terminal-content">
        <p class="terminal-line">$ ./show_team_info.sh</p>
        <p class="terminal-line">Loading team data...</p>
        <p class="terminal-description">
          kBxAc is a competitive Capture The Flag team focused on cybersecurity challenges.<br>
          We participate in various CTF competitions worldwide and strive to continuously improve our skills.
        </p>
        <p class="terminal-line" style="color: #4287f5;">$<span class="blink">_</span></p>
      </div>
    </div>
    
    <div class="team-stats">
      <div class="stat">
        <span class="stat-number">20+</span>
        <span class="stat-label">CTFs Participated</span>
      </div>
      <div class="stat">
        <span class="stat-number">1+</span>
        <span class="stat-label">Awards Won</span>
      </div>
      <div class="stat">
        <span class="stat-number">8</span>
        <span class="stat-label">Team Members</span>
      </div>
    </div>
  </div>
  
  <div class="team-members">
    <h3>Team Hierarchy</h3>
    <div class="scanner-line"></div>
    
    <!-- Leadership Section -->
    <div class="hierarchy-section">
      <h4 class="hierarchy-title">Leadership Team</h4>
      <div class="hierarchy-grid">
        {#each leadership as member, i}
          <div class="member-card leadership-card">
            <div class="avatar">
              <div class="avatar-placeholder">
                <div class="binary-overlay"></div>
              </div>
            </div>
            <div class="member-data">
              <h4>{member.name}</h4>
              <div class="data-line"></div>
              <p class="member-role">{member.role}</p>
              <p class="member-specialization">{member.specialization}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
    
    <!-- Core Team Section -->
    <div class="hierarchy-section">
      <h4 class="hierarchy-title">Core Team</h4>
      <div class="hierarchy-grid">
        {#each coreMember as member, i}
          <div class="member-card core-card">
            <div class="avatar">
              {#if member.image}
                <img src={member.image} alt={member.name} class="member-image" />
              {:else}
                <div class="avatar-placeholder">
                  <div class="binary-overlay"></div>
                </div>
              {/if}
            </div>
            <div class="member-data">
              <h4>{member.name}</h4>
              <div class="data-line"></div>
              <p class="member-role">{member.role}</p>
              <p class="member-specialization">{member.specialization}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
    
    <!-- New Members Section -->
    <div class="hierarchy-section">
      <h4 class="hierarchy-title">New Members</h4>
      <div class="hierarchy-grid">
        {#each newMembers as member, i}
          <div class="member-card neophyte-card">
            <div class="avatar">
              <div class="avatar-placeholder">
                <div class="binary-overlay"></div>
              </div>
            </div>
            <div class="member-data">
              <h4>{member.name}</h4>
              <div class="data-line"></div>
              <p class="member-role">{member.role}</p>
              <p class="member-specialization">{member.specialization}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .team-section {
    padding: 4rem 0;
    position: relative;
  }
  
  .section-header {
    position: relative;
  }
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    text-align: center;
    color: #ffffff;
    text-transform: uppercase;
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
    font-size: 1.8rem;
    margin: 3rem 0 1.5rem;
    text-align: center;
    color: #ffffff;
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .terminal-window {
    max-width: 800px;
    margin: 0 auto 3rem;
    background-color: #0a0a0a;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    border: 1px solid #222;
  }
  
  .terminal-header {
    background-color: #111;
    padding: 10px;
    display: flex;
    align-items: center;
  }
  
  .terminal-button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 8px;
    background-color: #444;
  }
  
  .terminal-button:first-child {
    background-color: #ff5f56;
  }
  
  .terminal-button:nth-child(2) {
    background-color: #ffbd2e;
  }
  
  .terminal-button:nth-child(3) {
    background-color: #27c93f;
  }
  
  .terminal-title {
    color: #999;
    font-size: 0.8rem;
    margin-left: 10px;
    font-family: 'Space Mono', monospace;
  }
  
  .terminal-content {
    padding: 20px;
    font-family: 'Space Mono', monospace;
    color: #f0f0f0;
  }
  
  .terminal-line {
    margin: 0;
    padding: 5px 0;
    color: #ccc;
  }
  
  .terminal-line:first-child {
    color: #4287f5;
  }
  
  .terminal-description {
    margin: 15px 0;
    line-height: 1.6;
    color: #f0f0f0;
  }
  
  .blink {
    color: #4287f5;
    animation: cursor-blink 1s infinite;
  }
  
  @keyframes cursor-blink {
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
  }
  
  .team-stats {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin: 3rem 0;
  }
  
  .stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    background: rgba(10, 10, 10, 0.7);
    border-radius: 5px;
    border: 1px solid #222;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s, box-shadow 0.3s;
    position: relative;
    overflow: hidden;
    min-width: 150px;
  }
  
  .stat:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(66, 135, 245, 0.1);
  }
  
  .stat:before {
    content: '';
    position: absolute;
    top: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #4287f5, transparent);
  }
  
  .stat-number {
    font-size: 2.5rem;
    font-weight: bold;
    color: #4287f5;
    text-shadow: 0 0 10px rgba(66, 135, 245, 0.5);
  }
  
  .stat-label {
    font-size: 0.9rem;
    color: #ccc;
    margin-top: 0.5rem;
  }
  
  .scanner-line {
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, transparent, #4287f5, transparent);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
    z-index: 0;
  }
  
  .team-members {
    position: relative;
    padding-top: 2rem;
  }
  
  /* Hierarchy section styling */
  .hierarchy-section {
    margin-bottom: 3rem;
    position: relative;
    padding: 1rem;
    background: rgba(10, 10, 10, 0.3);
    border-radius: 5px;
    border-left: 3px solid #4287f5;
  }
  
  .hierarchy-title {
    font-size: 1.4rem;
    color: #4287f5;
    margin-bottom: 1.5rem;
    position: relative;
    padding-left: 1rem;
    display: inline-block;
  }
  
  .hierarchy-title::before {
    content: '>';
    position: absolute;
    left: 0;
    color: #4287f5;
  }
  
  .hierarchy-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
    position: relative;
    z-index: 1;
  }
  
  /* Card styling for different hierarchies */
  .member-card {
    background: rgba(10, 10, 10, 0.8);
    border-radius: 5px;
    padding: 1.5rem;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
    transition: all 0.3s;
    border: 1px solid #222;
    position: relative;
    overflow: hidden;
    opacity: 1;
  }
  
  .leadership-card {
    border-top: 3px solid #ff5f56;
  }
  
  .core-card {
    border-top: 3px solid #ffbd2e;
  }
  
  .neophyte-card {
    border-top: 3px solid #27c93f;
  }
  
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .member-card:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
    border-color: #4287f5;
  }
  
  .member-card:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: #4287f5;
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  .member-card:hover:before {
    opacity: 1;
  }
  
  .avatar {
    width: 100px;
    height: 100px;
    margin: 0 auto 1rem;
    position: relative;
    z-index: 1;
  }
  
  .avatar-placeholder {
    width: 100%;
    height: 100%;
    background: #151515;
    border-radius: 5px;
    border: 2px solid #4287f5;
    position: relative;
    overflow: hidden;
  }
  
  .binary-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Ctext x='10' y='20' font-family='monospace' font-size='10' fill='rgba(66, 135, 245, 0.2)'%3E01001%3C/text%3E%3Ctext x='10' y='40' font-family='monospace' font-size='10' fill='rgba(66, 135, 245, 0.2)'%3E10110%3C/text%3E%3Ctext x='10' y='60' font-family='monospace' font-size='10' fill='rgba(66, 135, 245, 0.2)'%3E01010%3C/text%3E%3Ctext x='10' y='80' font-family='monospace' font-size='10' fill='rgba(66, 135, 245, 0.2)'%3E11001%3C/text%3E%3C/svg%3E");
    opacity: 0.5;
  }
  
  .data-line {
    width: 50px;
    height: 2px;
    background: #4287f5;
    margin: 0.5rem auto;
  }
  
  h4 {
    margin: 0.5rem 0;
    font-size: 1.2rem;
    color: #ffffff;
  }
  
  .member-role {
    color: #4287f5;
    margin: 0.2rem 0;
    font-weight: 600;
  }
  
  .member-specialization {
    color: #ccc;
    font-size: 0.9rem;
    margin: 0.2rem 0;
  }
  
  @media (max-width: 768px) {
    .team-stats {
      flex-direction: column;
      gap: 1.5rem;
      align-items: center;
    }
    
    .hierarchy-grid {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
    
    .stat {
      width: 80%;
    }
  }
  
  /* Additional mobile optimizations */
  @media (max-width: 480px) {
    h2 {
      font-size: 1.8rem;
    }
    
    h3 {
      font-size: 1.5rem;
    }
    
    .hierarchy-title {
      font-size: 1.2rem;
    }
    
    .terminal-window {
      margin: 0 1rem 2rem;
    }
    
    .terminal-content {
      padding: 15px 10px;
    }
    
    .terminal-description {
      font-size: 0.9rem;
    }
    
    .team-section {
      padding: 2rem 0.5rem;
    }
    
    .hierarchy-section {
      padding: 0.75rem;
      margin-bottom: 2rem;
    }
    
    .hierarchy-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    
    .member-card {
      max-width: 100%;
      padding: 1rem;
    }
    
    .avatar {
      width: 80px;
      height: 80px;
    }
    
    .stat-number {
      font-size: 2rem;
    }
    
    .stat-label {
      font-size: 0.8rem;
    }
  }
  
  .member-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    border: 2px solid #4287f5;
    transition: transform 0.3s ease;
  }
  
  .member-card:hover .member-image {
    transform: scale(1.05);
  }
</style> 