<script>
  const achievements = [
    { 
      title: 'CYBERGON CTF 2024', 
      position: '45th Place', 
      description: 'Secured 45th place among 500+ teams in the international CYBERGON CTF competition.' 
    },
    { 
      title: 'ATC Winter Vibes Community CTF', 
      position: '45th Place', 
      description: 'Reached the top 50 in the ATC Winter Vibes Community CTF, demonstrating exceptional skills in various domains.' 
    },
    { 
      title: 'BinaryClash360 Qualifiers', 
      position: '18th Place', 
      description: 'Secured 18th place among 1000+ teams in the BinaryClash360 CTF organised by IIT Madras and IIITDM Kacheepuram.' 
    },
    { 
      title: 'Pentathon 2025 Qualifiers', 
      position: '21st Place', 
      description: 'Achieved 21st place in the Pentathon 2025 CTF organised by NCIIPC AICTE and Ministry of Education, Govt. of India.' 
    },
    {
      title: 'Pentathon 2025 Finals', 
      position: '13st Place', 
      description: 'Ranked 13th in the Grand Finale of Pentathon 2025, a national-level competition by NCIIPC, AICTE, and the Ministry of Education, Govt. of India.' 
    },
    {
      title: 'BinaryClash360 Finals', 
      position: '5th Place', 
      description: 'Secured 5th place and won the cash prize of ₹15k in the BinaryClash360 CTF organised by IIT Madras and IIITDM Kacheepuram.' 
    }
  ];
  
  // Skills data
  const skills = [
    { name: 'Sanity Check', level: 100 },
    { name: 'Reverse Engineering', level: 75 },
    { name: 'OSINT', level: 85 },
    { name: 'Web Exploitation', level: 25 },
    { name: 'Cryptography', level: 50 },
    { name: 'Binary Exploitation', level: 60 },
    { name: 'Forensics', level: 65 }
  ];
</script>

<section id="achievements" class="achievements-section">
  <div class="matrix-overlay"></div>
  
  <h2>0x02: <span class="highlight">Our Achievements</span></h2>
  <p class="section-description">
    <span class="terminal-prompt">$</span> cat /achievements/readme.md<br>
    We've participated in numerous CTF competitions and achieved significant milestones. 
    Here are some of our notable accomplishments.
  </p>
  
  <div class="achievements-container">
    <div class="decoration-line left"></div>
    <div class="achievements-grid">
      {#each achievements as achievement, i}
        <div class="achievement-card" style="animation-delay: {i * 0.15}s">
          <div class="card-header">
            <div class="header-decoration"></div>
            <h3>{achievement.title}</h3>
          </div>
          <div class="achievement-content">
            <span class="position-badge">{achievement.position}</span>
            <p class="achievement-description">{achievement.description}</p>
            <div class="card-dots">
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
          </div>
        </div>
      {/each}
    </div>
    <div class="decoration-line right"></div>
  </div>
  
  <div class="skills-section">
    <h3>/ Our Expertise /</h3>
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-button"></span>
        <span class="terminal-button"></span>
        <span class="terminal-button"></span>
        <span class="terminal-title">kbxac-terminal -- skills-report.sh</span>
      </div>
      <div class="terminal-content">
        <p class="terminal-line">$ ./skill_analysis.sh --generate-report</p>
        <p class="terminal-line">Analyzing team skills...</p>
        <div class="skills-container">
          {#each skills as skill}
            <div class="skill">
              <div class="skill-header">
                <div class="skill-name">{skill.name}</div>
                <div class="skill-percentage">{skill.level}%</div>
              </div>
              <div class="skill-bar">
                <div class="skill-level" style="width: {skill.level}%">
                </div>
              </div>
            </div>
          {/each}
        </div>
        <p class="terminal-line terminal-success">▓▒░ Analysis complete. Team capabilities at optimal levels.</p>
      </div>
    </div>
  </div>
</section>

<style>
  .achievements-section {
    padding: 4rem 0;
    position: relative;
    overflow: hidden;
  }
  
  .matrix-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='600'%3E%3Ctext x='10' y='15' font-family='monospace' font-size='10' fill='rgba(66, 135, 245, 0.03)'%3E01001010101110%3C/text%3E%3Ctext x='10' y='30' font-family='monospace' font-size='10' fill='rgba(66, 135, 245, 0.03)'%3E10110101001001%3C/text%3E%3Ctext x='10' y='45' font-family='monospace' font-size='10' fill='rgba(66, 135, 245, 0.03)'%3E01010101011010%3C/text%3E%3Ctext x='10' y='60' font-family='monospace' font-size='10' fill='rgba(66, 135, 245, 0.03)'%3E11001011001010%3C/text%3E%3Ctext x='10' y='75' font-family='monospace' font-size='10' fill='rgba(66, 135, 245, 0.03)'%3E01010101010100%3C/text%3E%3Ctext x='10' y='90' font-family='monospace' font-size='10' fill='rgba(66, 135, 245, 0.03)'%3E11101010100001%3C/text%3E%3Ctext x='10' y='105' font-family='monospace' font-size='10' fill='rgba(66, 135, 245, 0.03)'%3E01010101010111%3C/text%3E%3Ctext x='10' y='120' font-family='monospace' font-size='10' fill='rgba(66, 135, 245, 0.03)'%3E10101010100101%3C/text%3E%3C/svg%3E");
    opacity: 0.5;
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
  }
  
  .section-description {
    max-width: 800px;
    margin: 0 auto 3rem;
    text-align: center;
    font-size: 1.1rem;
    line-height: 1.6;
    color: #f0f0f0;
    font-family: 'Space Mono', monospace;
    background: rgba(10, 10, 10, 0.6);
    padding: 1.5rem;
    border-radius: 5px;
    border-left: 3px solid #4287f5;
  }
  
  .terminal-prompt {
    color: #4287f5;
    font-weight: bold;
  }
  
  .achievements-container {
    position: relative;
    margin-bottom: 4rem;
    display: flex;
    align-items: center;
  }
  
  .decoration-line {
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, transparent, #4287f5, transparent);
    position: absolute;
    top: 0;
  }
  
  .decoration-line.left {
    left: 0;
  }
  
  .decoration-line.right {
    right: 0;
  }
  
  .achievements-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    width: 100%;
    z-index: 1;
  }
  
  .achievement-card {
    background: rgba(10, 10, 10, 0.8);
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
    border: 1px solid #222;
    animation: fadeIn 0.6s ease forwards;
    opacity: 0;
    transform: translateY(20px);
    position: relative;
  }
  
  .card-header {
    background: rgba(15, 15, 15, 0.9);
    padding: 1rem;
    position: relative;
    border-bottom: 1px solid #333;
  }
  
  .header-decoration {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #4287f5, transparent);
  }
  
  .achievement-content {
    padding: 1.5rem;
    position: relative;
  }
  
  .card-dots {
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
    gap: 5px;
  }
  
  .dot {
    width: 5px;
    height: 5px;
    background-color: #4287f5;
    border-radius: 50%;
    opacity: 0.7;
  }
  
  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .position-badge {
    display: inline-block;
    background-color: #4287f5;
    color: #ffffff;
    padding: 0.3rem 0.8rem;
    border-radius: 3px;
    font-weight: bold;
    font-size: 0.8rem;
    margin-bottom: 1rem;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }
  
  .position-badge::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: shimmer 2s infinite;
    z-index: -1;
  }
  
  @keyframes shimmer {
    100% {
      left: 100%;
    }
  }
  
  .achievement-description {
    color: #e0e0e0;
    font-size: 0.95rem;
    line-height: 1.5;
  }
  
  .skills-section {
    margin-top: 4rem;
  }
  
  .skills-section h3 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.8rem;
    color: #ffffff;
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .terminal-window {
    max-width: 800px;
    margin: 0 auto;
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
  
  .terminal-success {
    color: #27c93f;
    margin-top: 1rem;
  }
  
  .skills-container {
    margin: 1.5rem 0;
  }
  
  .skill {
    margin-bottom: 1.2rem;
  }
  
  .skill-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }
  
  .skill-name {
    font-weight: 600;
    color: #f0f0f0;
  }
  
  .skill-percentage {
    color: #4287f5;
    font-weight: 600;
  }
  
  .skill-bar {
    height: 10px;
    background-color: #111111;
    border-radius: 2px;
    overflow: hidden;
    position: relative;
  }
  
  .skill-level {
    height: 100%;
    background: linear-gradient(90deg, #2563eb, #4287f5);
    border-radius: 2px;
    position: relative;
    animation: skillLoad 1.5s ease-out forwards;
    transform-origin: left;
    transform: scaleX(0);
  }
  
  @keyframes skillLoad {
    to {
      transform: scaleX(1);
    }
  }
  
  @keyframes pulse {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  
  @media (max-width: 768px) {
    .achievements-grid {
      grid-template-columns: 1fr;
    }
    
    .decoration-line {
      display: none;
    }
  }
</style> 