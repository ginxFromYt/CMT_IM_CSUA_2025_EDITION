import { useState } from 'react'
import './ModuleContent.css'

function ModuleContent({ module }) {
  const [activeSection, setActiveSection] = useState('overview')
  const [expandedTopics, setExpandedTopics] = useState({})

  const toggleTopic = (topicId) => {
    setExpandedTopics(prev => ({
      ...prev,
      [topicId]: !prev[topicId]
    }))
  }

  const moduleData = {
    'pc-trouble': {
      overview: {
        title: 'PC Trouble Fundamentals',
        content: `
          <div class="course-info">
            <h3>📚 Course Information</h3>
            <div class="info-grid">
              <div class="info-item"><strong>Credits:</strong> 3</div>
              <div class="info-item"><strong>Prerequisites:</strong> None</div>
            </div>
          </div>
          
          <h3>🎯 Course Learning Outcomes (CILOs)</h3>
          <div class="outcomes-list">
            <div class="outcome-item">
              <span class="outcome-number">CILO 1:</span>
              Identify and describe the function of various computer hardware components
            </div>
            <div class="outcome-item">
              <span class="outcome-number">CILO 2:</span>
              Explain the role of drivers and software updates in maintaining system stability
            </div>
            <div class="outcome-item">
              <span class="outcome-number">CILO 3:</span>
              Develop a preventive maintenance plan including updates, backups, and cleaning
            </div>
            <div class="outcome-item">
              <span class="outcome-number">CILO 4:</span>
              Use diagnostic software to identify and resolve common software issues
            </div>
            <div class="outcome-item">
              <span class="outcome-number">CILO 5:</span>
              Apply gender analysis frameworks to assess technology impact on social justice
            </div>
          </div>

          <h3>🔧 The Root of All PC Trouble</h3>
          <p>Understanding PC problems begins with identifying whether issues are hardware or software related. This fundamental distinction guides our troubleshooting approach.</p>
          
          <h4>Key Questions to Ask:</h4>
          <ul>
            <li><strong>What's Changed?</strong> - Recent installations, updates, or hardware modifications</li>
            <li><strong>Hardware vs Software?</strong> - Physical component failure or software corruption</li>
            <li><strong>When did it start?</strong> - Timeline helps identify the root cause</li>
            <li><strong>Is it reproducible?</strong> - Consistent problems vs intermittent issues</li>
          </ul>
        `
      },
      lessons: {
        title: 'Learning Materials - Week 2-3',
        content: `
          <h3>📖 Week 2-3: PC Trouble Analysis</h3>
          
          <div class="lesson-objectives">
            <h4>Learning Objectives:</h4>
            <ul>
              <li>Determine PC problems systematically</li>
              <li>Examine recent software changes</li>
              <li>Review hardware issues methodically</li>
              <li>Apply quick fixes and adjustments</li>
              <li>Identify the source of troubles accurately</li>
            </ul>
          </div>

          <div class="troubleshooting-guide">
            <div class="issue-card">
              <h4>🔍 Systematic Problem Identification</h4>
              <p><strong>Step 1: Gather Information</strong></p>
              <ul>
                <li>When did the problem first occur?</li>
                <li>What was the user doing when it happened?</li>
                <li>Has any new software or hardware been installed recently?</li>
                <li>Are there any error messages or codes?</li>
              </ul>
              
              <p><strong>Step 2: Categorize the Problem</strong></p>
              <ul>
                <li><strong>Boot Problems:</strong> PC won't start or stops during startup</li>
                <li><strong>Performance Issues:</strong> Slow operation, freezing, crashes</li>
                <li><strong>Hardware Failures:</strong> Component malfunctions or failures</li>
                <li><strong>Software Conflicts:</strong> Application errors, driver issues</li>
              </ul>
            </div>
            
            <div class="issue-card">
              <h4>⚡ Quick Fix Strategies</h4>
              <ol>
                <li><strong>Restart the Computer</strong> - Resolves many temporary issues</li>
                <li><strong>Check Connections</strong> - Ensure all cables are securely connected</li>
                <li><strong>Update Drivers</strong> - Install latest device drivers</li>
                <li><strong>Run Built-in Diagnostics</strong> - Use Windows troubleshooters</li>
                <li><strong>Check for Updates</strong> - Install Windows and software updates</li>
                <li><strong>Scan for Malware</strong> - Run antivirus and anti-malware scans</li>
              </ol>
            </div>
          </div>

          <div class="resource-box">
            <h4>📚 Required Reading:</h4>
            <ul>
              <li><strong>Primary Text:</strong> "Troubleshooting and Maintaining your PC" by Dan Gookin (2017)</li>
              <li><a href="https://www.tomshardware.com" class="resource-link" target="_blank">Tom's Hardware</a> - PC components and troubleshooting</li>
              <li><a href="https://www.youtube.com/@LinusTechTips" class="resource-link" target="_blank">Linus Tech Tips</a> - Video tutorials and reviews</li>
            </ul>
          </div>
        `
      },
      laboratory: {
        title: 'Laboratory Activities',
        content: `
          <h3>🔬 Laboratory Exercises</h3>
          
          <div class="lab-activity">
            <h4>Lab Activity 1: Problem Identification Workshop</h4>
            <p><strong>Objective:</strong> Practice systematic problem identification techniques</p>
            
            <h5>Materials Needed:</h5>
            <ul>
              <li>PCs with various simulated problems</li>
              <li>Problem documentation sheets</li>
              <li>Basic diagnostic tools</li>
            </ul>
            
            <h5>Procedure:</h5>
            <ol>
              <li>Examine assigned PC with unknown problem</li>
              <li>Document symptoms and observations</li>
              <li>Apply systematic troubleshooting approach</li>
              <li>Categorize as hardware or software issue</li>
              <li>Propose initial solutions</li>
              <li>Present findings to class</li>
            </ol>
          </div>

          <div class="lab-activity">
            <h4>Lab Activity 2: Quick Fix Implementation</h4>
            <p><strong>Objective:</strong> Apply common quick fixes to resolve typical PC problems</p>
            
            <h5>Scenarios to Practice:</h5>
            <ul>
              <li>Slow boot times</li>
              <li>Unresponsive applications</li>
              <li>Driver conflicts</li>
              <li>Network connectivity issues</li>
              <li>Audio/video problems</li>
            </ul>
          </div>

          <div class="assessment-rubric">
            <h4>📊 Assessment Criteria:</h4>
            <ul>
              <li><strong>Problem Analysis (25%):</strong> Systematic approach to problem identification</li>
              <li><strong>Documentation (25%):</strong> Clear and complete problem documentation</li>
              <li><strong>Solution Implementation (25%):</strong> Effective application of fixes</li>
              <li><strong>Communication (25%):</strong> Clear presentation of findings</li>
            </ul>
          </div>
        `
      },
      quiz: {
        title: 'Knowledge Assessment',
        content: `
          <h3>📝 Module Assessment - PC Trouble Fundamentals</h3>
          <div class="quiz-container">
            <div class="question">
              <p><strong>Question 1:</strong> What is the first step in systematic PC troubleshooting?</p>
              <div class="quiz-options">
                <label><input type="radio" name="q1" value="a"> Replace suspected faulty components</label>
                <label><input type="radio" name="q1" value="b"> Gather information about when and how the problem occurs</label>
                <label><input type="radio" name="q1" value="c"> Reinstall the operating system</label>
                <label><input type="radio" name="q1" value="d"> Run hardware diagnostics</label>
              </div>
            </div>
            
            <div class="question">
              <p><strong>Question 2:</strong> Which of the following is typically a software-related problem?</p>
              <div class="quiz-options">
                <label><input type="radio" name="q2" value="a"> PC fails to power on</label>
                <label><input type="radio" name="q2" value="b"> Hard drive making clicking sounds</label>
                <label><input type="radio" name="q2" value="c"> Application crashes when opening specific files</label>
                <label><input type="radio" name="q2" value="d"> Monitor displays distorted colors</label>
              </div>
            </div>

            <div class="question">
              <p><strong>Question 3:</strong> What should you check first when a PC suddenly starts running slowly?</p>
              <div class="quiz-options">
                <label><input type="radio" name="q3" value="a"> Replace the hard drive</label>
                <label><input type="radio" name="q3" value="b"> Recent software installations or updates</label>
                <label><input type="radio" name="q3" value="c"> Buy more RAM</label>
                <label><input type="radio" name="q3" value="d"> Replace the power supply</label>
              </div>
            </div>

            <div class="question">
              <p><strong>Question 4:</strong> According to the troubleshooting methodology, which approach is most effective?</p>
              <div class="quiz-options">
                <label><input type="radio" name="q4" value="a"> Try multiple solutions simultaneously</label>
                <label><input type="radio" name="q4" value="b"> Start with the most expensive solution first</label>
                <label><input type="radio" name="q4" value="c"> Apply one solution at a time and test results</label>
                <label><input type="radio" name="q4" value="d"> Always begin with hardware replacement</label>
              </div>
            </div>
            
            <button class="submit-quiz" onclick="checkAnswers()">Submit Quiz</button>
            <div id="quiz-results" style="margin-top: 1rem;"></div>
          </div>
          
          <script>
            function checkAnswers() {
              const answers = {q1: 'b', q2: 'c', q3: 'b', q4: 'c'};
              let score = 0;
              let total = Object.keys(answers).length;
              
              for (let question in answers) {
                const selected = document.querySelector('input[name="' + question + '"]:checked');
                if (selected && selected.value === answers[question]) {
                  score++;
                }
              }
              
              const percentage = Math.round((score / total) * 100);
              const resultDiv = document.getElementById('quiz-results');
              resultDiv.innerHTML = '<div class="quiz-result"><strong>Score: ' + score + '/' + total + ' (' + percentage + '%)</strong><br>Correct answers: 1-b, 2-c, 3-b, 4-c</div>';
            }
          </script>
        `
      }
    },
    'startup-problems': {
      overview: {
        title: 'Startup Problems Analysis',
        content: `
          <h3>🚀 Understanding the Boot Process</h3>
          <p>The computer startup process is a complex sequence of events that must occur successfully for your system to become operational. Understanding each phase helps technicians diagnose where problems occur and implement appropriate solutions.</p>
          
          <div class="image-container">
            <img src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop" alt="Computer Boot Process" class="content-image" />
            <p class="image-caption">The computer boot process involves multiple hardware and software components working together</p>
          </div>
          
          <div class="startup-phases">
            <div class="phase-card">
              <h4>🔌 Phase I: Power On</h4>
              <p><strong>Duration:</strong> 1-3 seconds</p>
              <p>Power supply initialization and component power distribution. The PSU converts AC to DC power and distributes it to motherboard, drives, and peripherals.</p>
              <ul>
                <li>Power supply self-test</li>
                <li>Voltage regulation stabilization</li>
                <li>Power Good signal generation</li>
              </ul>
            </div>
            <div class="phase-card">
              <h4>🔍 Phase II: POST (Power-On Self-Test)</h4>
              <p><strong>Duration:</strong> 5-30 seconds</p>
              <p>Hardware component testing and basic system checks performed by BIOS/UEFI firmware. Critical for detecting hardware failures early.</p>
              <ul>
                <li>CPU initialization and testing</li>
                <li>Memory detection and testing</li>
                <li>Peripheral device enumeration</li>
                <li>Hardware compatibility verification</li>
              </ul>
            </div>
            <div class="phase-card">
              <h4>⚙️ Phase III: Startup Options</h4>
              <p><strong>Duration:</strong> 2-5 seconds</p>
              <p>Boot device selection and startup configuration. BIOS/UEFI determines which device contains the operating system.</p>
              <ul>
                <li>Boot device priority checking</li>
                <li>Master Boot Record (MBR) reading</li>
                <li>UEFI boot manager execution</li>
              </ul>
            </div>
            <div class="phase-card">
              <h4>🔎 Phase IV: Operating System Search</h4>
              <p><strong>Duration:</strong> 3-10 seconds</p>
              <p>Locating and loading the operating system boot loader. The system searches for valid boot sectors on configured devices.</p>
              <ul>
                <li>Boot sector validation</li>
                <li>Boot loader execution</li>
                <li>Kernel location and verification</li>
              </ul>
            </div>
            <div class="phase-card">
              <h4>🛠️ Phase V: OS Initialization</h4>
              <p><strong>Duration:</strong> 15-60 seconds</p>
              <p>Loading system services, drivers, and core operating system components. The longest phase of the boot process.</p>
              <ul>
                <li>Kernel initialization</li>
                <li>Device driver loading</li>
                <li>System service startup</li>
                <li>Registry initialization (Windows)</li>
              </ul>
            </div>
            <div class="phase-card">
              <h4>👤 Phase VI: User Sign-In</h4>
              <p><strong>Duration:</strong> 5-20 seconds</p>
              <p>User authentication and desktop environment loading. Prepares the system for user interaction.</p>
              <ul>
                <li>Login screen presentation</li>
                <li>User credential verification</li>
                <li>Desktop environment loading</li>
                <li>Startup program execution</li>
              </ul>
            </div>
          </div>
          
          <div class="boot-process-diagram">
            <h4>📊 Boot Process Flow</h4>
            <div class="process-flow">
              <div class="flow-step">Power Button → PSU Activation → Motherboard Power</div>
              <div class="flow-arrow">↓</div>
              <div class="flow-step">BIOS/UEFI Loading → Hardware Detection → POST</div>
              <div class="flow-arrow">↓</div>
              <div class="flow-step">Boot Device Selection → MBR/GPT Reading</div>
              <div class="flow-arrow">↓</div>
              <div class="flow-step">Boot Loader → Kernel Loading → Driver Init</div>
              <div class="flow-arrow">↓</div>
              <div class="flow-step">System Services → User Login → Desktop</div>
            </div>
          </div>
        `
      },
      lessons: {
        title: 'Learning Materials - Week 4',
        content: `
          <h3>📖 Week 4: Advanced Startup Problems Diagnosis</h3>
          
          <div class="lesson-objectives">
            <h4>🎯 Learning Objectives:</h4>
            <ul>
              <li>Diagnose power-related startup failures using systematic approach</li>
              <li>Interpret POST beep codes and LED indicators accurately</li>
              <li>Navigate BIOS/UEFI settings for boot configuration</li>
              <li>Troubleshoot boot loader and MBR corruption issues</li>
              <li>Resolve operating system loading and initialization problems</li>
              <li>Fix user authentication and desktop loading issues</li>
              <li>Optimize startup performance and manage startup programs</li>
            </ul>
          </div>

          <div class="image-container">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop" alt="Computer Motherboard POST" class="content-image" />
            <p class="image-caption">Motherboard with diagnostic LEDs showing POST status</p>
          </div>

          <div class="troubleshooting-guide">
            <div class="issue-card">
              <h4>⚡ Phase I: Power Issues Deep Dive</h4>
              
              <div class="symptoms-section">
                <h5>🚨 Detailed Symptoms Analysis:</h5>
                <ul>
                  <li><strong>Complete Power Failure:</strong> No response when pressing power button, no lights, no fan noise</li>
                  <li><strong>Partial Power:</strong> Fans spin, lights turn on, but no display or beeps</li>
                  <li><strong>Power Cycling:</strong> System turns on briefly (2-3 seconds) then shuts off repeatedly</li>
                  <li><strong>Delayed Start:</strong> Significant delay between pressing power button and system response</li>
                </ul>
              </div>
              
              <div class="diagnostic-steps">
                <h5>🔧 Advanced Diagnostic Procedures:</h5>
                <ol>
                  <li><strong>External Power Verification:</strong>
                    <ul>
                      <li>Test wall outlet with multimeter (should read 110-120V AC)</li>
                      <li>Try different power cable (C13/C14 type)</li>
                      <li>Check UPS/surge protector functionality</li>
                    </ul>
                  </li>
                  <li><strong>PSU Testing:</strong>
                    <ul>
                      <li>Verify PSU switch position (I = ON, O = OFF)</li>
                      <li>Check 24-pin motherboard connector seating</li>
                      <li>Test 4/8-pin CPU power connector</li>
                      <li>Use PSU tester or paperclip test for basic functionality</li>
                      <li>Measure voltages: +12V, +5V, +3.3V rails</li>
                    </ul>
                  </li>
                  <li><strong>Motherboard Power Analysis:</strong>
                    <ul>
                      <li>Inspect for burned components or capacitor bulging</li>
                      <li>Check power button connection to motherboard</li>
                      <li>Test with minimal configuration (CPU, 1 RAM stick, basic graphics)</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
            
            <div class="issue-card">
              <h4>🔍 Phase II: POST Problems Comprehensive Guide</h4>
              
              <div class="image-container">
                <img src="https://images.unsplash.com/photo-1555680229-ad5f7d1b12bb?w=600&h=300&fit=crop" alt="Computer RAM Memory" class="content-image" />
                <p class="image-caption">RAM modules - common source of POST failures</p>
              </div>
              
              <div class="beep-codes-section">
                <h5>🔊 Comprehensive POST Beep Code Reference:</h5>
                <div class="beep-code-table">
                  <div class="beep-row">
                    <div class="beep-pattern"><strong>1 short beep</strong></div>
                    <div class="beep-meaning">Normal POST - System OK</div>
                    <div class="beep-action">No action required</div>
                  </div>
                  <div class="beep-row">
                    <div class="beep-pattern"><strong>2 short beeps</strong></div>
                    <div class="beep-meaning">POST error - General failure</div>
                    <div class="beep-action">Check memory and expansion cards</div>
                  </div>
                  <div class="beep-row">
                    <div class="beep-pattern"><strong>3 short beeps</strong></div>
                    <div class="beep-meaning">Base 64K memory failure</div>
                    <div class="beep-action">Test/replace RAM modules</div>
                  </div>
                  <div class="beep-row">
                    <div class="beep-pattern"><strong>1 long, 2 short</strong></div>
                    <div class="beep-meaning">Display adapter error</div>
                    <div class="beep-action">Reseat/replace graphics card</div>
                  </div>
                  <div class="beep-row">
                    <div class="beep-pattern"><strong>1 long, 3 short</strong></div>
                    <div class="beep-meaning">Enhanced display adapter error</div>
                    <div class="beep-action">Check video memory and connections</div>
                  </div>
                  <div class="beep-row">
                    <div class="beep-pattern"><strong>Continuous beeping</strong></div>
                    <div class="beep-meaning">Memory or power supply problem</div>
                    <div class="beep-action">Check RAM seating and PSU connections</div>
                  </div>
                </div>
              </div>
              
              <div class="led-indicators">
                <h5>💡 Motherboard LED Diagnostic Indicators:</h5>
                <ul>
                  <li><strong>CPU LED (Red):</strong> Processor not detected or failed</li>
                  <li><strong>DRAM LED (Yellow):</strong> Memory not detected or incompatible</li>
                  <li><strong>VGA LED (White):</strong> Graphics card not detected or failed</li>
                  <li><strong>BOOT LED (Green):</strong> Boot device not found or corrupted</li>
                </ul>
              </div>
              
              <div class="troubleshooting-actions">
                <h5>🛠️ Systematic POST Troubleshooting:</h5>
                <ol>
                  <li><strong>Memory Testing:</strong>
                    <ul>
                      <li>Remove all RAM except one stick</li>
                      <li>Test each slot with known good memory</li>
                      <li>Run MemTest86+ for comprehensive testing</li>
                      <li>Check for proper DDR4/DDR5 compatibility</li>
                    </ul>
                  </li>
                  <li><strong>Graphics Testing:</strong>
                    <ul>
                      <li>Reseat graphics card in PCIe slot</li>
                      <li>Check auxiliary power connections</li>
                      <li>Test with integrated graphics (if available)</li>
                      <li>Try different display cable and monitor</li>
                    </ul>
                  </li>
                  <li><strong>CMOS/BIOS Reset:</strong>
                    <ul>
                      <li>Clear CMOS using jumper or button</li>
                      <li>Remove CMOS battery for 10+ minutes</li>
                      <li>Reset to factory defaults in BIOS</li>
                      <li>Update BIOS firmware if necessary</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <div class="issue-card">
              <h4>💿 Phase IV: Boot Loader and OS Issues</h4>
              
              <div class="image-container">
                <img src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=600&h=300&fit=crop" alt="Hard Drive SSD" class="content-image" />
                <p class="image-caption">Storage devices - critical for OS boot process</p>
              </div>
              
              <div class="error-messages">
                <h5>🚫 Common Boot Error Messages and Solutions:</h5>
                
                <div class="error-card">
                  <h6>"Operating System Not Found"</h6>
                  <p><strong>Causes:</strong> Boot device not detected, damaged MBR, incorrect boot order</p>
                  <p><strong>Solutions:</strong></p>
                  <ul>
                    <li>Check SATA/power cables to hard drive</li>
                    <li>Verify boot device in BIOS settings</li>
                    <li>Test hard drive in another computer</li>
                    <li>Rebuild MBR using Windows Recovery</li>
                  </ul>
                </div>
                
                <div class="error-card">
                  <h6>"BOOTMGR is missing"</h6>
                  <p><strong>Causes:</strong> Corrupted boot manager, damaged system reserved partition</p>
                  <p><strong>Solutions:</strong></p>
                  <ul>
                    <li>Boot from Windows installation media</li>
                    <li>Run Startup Repair automatically</li>
                    <li>Manually rebuild BCD: <code>bootrec /rebuildbcd</code></li>
                    <li>Fix boot sector: <code>bootrec /fixboot</code></li>
                  </ul>
                </div>
                
                <div class="error-card">
                  <h6>"Invalid Boot Disk"</h6>
                  <p><strong>Causes:</strong> Non-bootable device in boot order, corrupted boot sector</p>
                  <p><strong>Solutions:</strong></p>
                  <ul>
                    <li>Remove USB drives and optical media</li>
                    <li>Check boot order in BIOS/UEFI</li>
                    <li>Run disk check: <code>chkdsk C: /f /r</code></li>
                    <li>Repair boot sector with diskpart</li>
                  </ul>
                </div>
              </div>
              
              <div class="advanced-recovery">
                <h5>🔧 Advanced Recovery Techniques:</h5>
                <ol>
                  <li><strong>Windows Recovery Environment (WinRE):</strong>
                    <ul>
                      <li>Access via F8 during boot (legacy) or Shift+Restart</li>
                      <li>Use Advanced startup options</li>
                      <li>Command Prompt for manual repairs</li>
                    </ul>
                  </li>
                  <li><strong>Boot Configuration Data (BCD) Repair:</strong>
                    <div class="code-block">
                      <pre>bootrec /scanos
bootrec /rebuildbcd
bootrec /fixmbr
bootrec /fixboot</pre>
                    </div>
                  </li>
                  <li><strong>System File Checker:</strong>
                    <div class="code-block">
                      <pre>sfc /scannow /offbootdir=C:\ /offwindir=C:\Windows</pre>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div class="performance-optimization">
            <h4>🚀 Startup Performance Optimization</h4>
            
            <div class="optimization-techniques">
              <div class="technique-card">
                <h5>⚡ Fast Boot Technologies</h5>
                <ul>
                  <li><strong>UEFI Fast Boot:</strong> Skips unnecessary hardware checks</li>
                  <li><strong>Windows Fast Startup:</strong> Hibernates kernel for quicker boot</li>
                  <li><strong>SSD Optimization:</strong> Enable AHCI mode for better performance</li>
                </ul>
              </div>
              
              <div class="technique-card">
                <h5>🧹 Startup Program Management</h5>
                <ul>
                  <li>Use Task Manager → Startup tab to disable unnecessary programs</li>
                  <li>Identify high-impact startup items</li>
                  <li>Use MSConfig for advanced startup control</li>
                  <li>Monitor startup time with Event Viewer</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="resource-box">
            <h4>📚 Extended Study Resources:</h4>
            <ul>
              <li><strong>Primary Text:</strong> Troubleshooting and Maintaining your PC by Dan Gookin (2017) - Chapter 4-6</li>
              <li><a href="https://infosec.co.il/wp-content/uploads/2020/06/02-Troubleshooting-Startup-Issues.pdf" class="resource-link" target="_blank">Advanced Startup Issues Guide</a></li>
              <li><a href="https://docs.microsoft.com/en-us/windows-hardware/drivers/bringup/boot-and-uefi" class="resource-link" target="_blank">Microsoft UEFI Boot Process Documentation</a></li>
              <li><a href="https://www.youtube.com/@LinusTechTips" class="resource-link" target="_blank">Linus Tech Tips</a> - Hardware troubleshooting videos</li>
              <li><strong>Diagnostic Tools:</strong> MemTest86+, CrystalDiskInfo, HWiNFO64, Prime95</li>
            </ul>
          </div>
        `
      },
      laboratory: {
        title: 'Laboratory Activities',
        content: `
          <h3>🔬 Comprehensive Lab Activities: Startup Diagnosis</h3>
          
          <div class="lab-activity">
            <h4>Lab 1: POST Diagnostic Workshop</h4>
            <p><strong>Objective:</strong> Master POST beep code interpretation and hardware diagnostics</p>
            
            <div class="image-container">
              <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=300&fit=crop" alt="Computer Diagnostic Tools" class="content-image" />
              <p class="image-caption">Professional diagnostic tools for hardware testing</p>
            </div>
            
            <h5>🛠️ Required Materials:</h5>
            <ul>
              <li>Desktop computers with simulated POST failures</li>
              <li>POST diagnostic card (optional but recommended)</li>
              <li>Digital multimeter for power testing</li>
              <li>Various RAM modules (DDR4/DDR5) for compatibility testing</li>
              <li>Graphics cards for video troubleshooting</li>
              <li>CMOS battery replacement</li>
              <li>Anti-static wrist straps</li>
            </ul>
            
            <h5>📋 Detailed Procedure:</h5>
            <ol>
              <li><strong>Initial Assessment (10 minutes):</strong>
                <ul>
                  <li>Power on assigned computer and observe symptoms</li>
                  <li>Count and document beep patterns accurately</li>
                  <li>Note any LED indicators on motherboard</li>
                  <li>Record fan operation and power light status</li>
                </ul>
              </li>
              <li><strong>Systematic Hardware Testing (30 minutes):</strong>
                <ul>
                  <li>Memory testing: Remove all but one RAM stick</li>
                  <li>Test each memory slot individually</li>
                  <li>Graphics verification: Reseat video card and cables</li>
                  <li>Power connection check: Verify all power connectors</li>
                </ul>
              </li>
              <li><strong>BIOS/UEFI Configuration (15 minutes):</strong>
                <ul>
                  <li>Access BIOS setup (F2, F12, DEL during startup)</li>
                  <li>Reset to factory defaults</li>
                  <li>Verify hardware detection in system information</li>
                  <li>Document current BIOS version</li>
                </ul>
              </li>
              <li><strong>Documentation and Analysis (15 minutes):</strong>
                <ul>
                  <li>Complete diagnostic worksheet</li>
                  <li>Propose solution based on findings</li>
                  <li>Calculate estimated repair time and cost</li>
                  <li>Present findings to instructor</li>
                </ul>
              </li>
            </ol>
          </div>

          <div class="lab-activity">
            <h4>Lab 2: Advanced Boot Configuration</h4>
            <p><strong>Objective:</strong> Configure BIOS/UEFI settings and implement boot optimization</p>
            
            <h5>🎯 Configuration Tasks:</h5>
            <ol>
              <li><strong>Boot Device Management:</strong>
                <ul>
                  <li>Set boot device priority (HDD → SSD → USB → Network)</li>
                  <li>Enable/disable legacy boot support</li>
                  <li>Configure UEFI vs Legacy BIOS mode</li>
                  <li>Test boot from USB installation media</li>
                </ul>
              </li>
              <li><strong>Security Configuration:</strong>
                <ul>
                  <li>Enable Secure Boot (UEFI systems)</li>
                  <li>Set supervisor/user passwords</li>
                  <li>Configure Trusted Platform Module (TPM)</li>
                  <li>Enable/disable USB boot for security</li>
                </ul>
              </li>
              <li><strong>Performance Optimization:</strong>
                <ul>
                  <li>Enable Fast Boot/Quick Boot features</li>
                  <li>Configure memory timings and speed</li>
                  <li>Set SATA mode to AHCI for SSD performance</li>
                  <li>Adjust CPU power management settings</li>
                </ul>
              </li>
              <li><strong>Hardware Configuration:</strong>
                <ul>
                  <li>Enable/disable integrated peripherals</li>
                  <li>Configure USB port functionality</li>
                  <li>Set fan curves for thermal management</li>
                  <li>Configure wake-on-LAN settings</li>
                </ul>
              </li>
            </ol>
          </div>

          <div class="lab-activity">
            <h4>Lab 3: Windows Boot Recovery Workshop</h4>
            <p><strong>Objective:</strong> Master Windows boot repair techniques and recovery tools</p>
            
            <div class="image-container">
              <img src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=600&h=300&fit=crop" alt="Windows Recovery" class="content-image" />
              <p class="image-caption">Windows Recovery Environment - essential for boot repairs</p>
            </div>
            
            <h5>🔧 Recovery Scenarios:</h5>
            <div class="scenario-grid">
              <div class="scenario-card">
                <h6>Scenario 1: Missing BOOTMGR</h6>
                <p><strong>Symptoms:</strong> "BOOTMGR is missing" error</p>
                <p><strong>Tools:</strong> Windows Installation Media, Command Prompt</p>
                <p><strong>Commands:</strong></p>
                <div class="code-block">
                  <pre>bootrec /scanos
bootrec /rebuildbcd
bootrec /fixmbr
bootrec /fixboot</pre>
                </div>
              </div>
              
              <div class="scenario-card">
                <h6>Scenario 2: Corrupted System Files</h6>
                <p><strong>Symptoms:</strong> Blue screen during startup, system crashes</p>
                <p><strong>Tools:</strong> System File Checker, DISM</p>
                <p><strong>Commands:</strong></p>
                <div class="code-block">
                  <pre>sfc /scannow
DISM /Online /Cleanup-Image /RestoreHealth</pre>
                </div>
              </div>
              
              <div class="scenario-card">
                <h6>Scenario 3: Registry Corruption</h6>
                <p><strong>Symptoms:</strong> System hangs at startup, service failures</p>
                <p><strong>Tools:</strong> System Restore, Registry Backup</p>
                <p><strong>Procedure:</strong> Boot to WinRE → System Restore → Select restore point</p>
              </div>
              
              <div class="scenario-card">
                <h6>Scenario 4: Driver Conflicts</h6>
                <p><strong>Symptoms:</strong> Boot loops, hardware not detected</p>
                <p><strong>Tools:</strong> Safe Mode, Device Manager</p>
                <p><strong>Procedure:</strong> Boot to Safe Mode → Update/rollback drivers → Restart</p>
              </div>
            </div>
          </div>

          <div class="assessment-rubric">
            <h4>📊 Lab Assessment Rubric (Total: 100 points)</h4>
            <div class="rubric-grid">
              <div class="rubric-item">
                <h5>Preparation and Safety (20 pts)</h5>
                <ul>
                  <li>Proper ESD precautions (5 pts)</li>
                  <li>Tool organization and safety (5 pts)</li>
                  <li>Workspace cleanliness (5 pts)</li>
                  <li>Time management (5 pts)</li>
                </ul>
              </div>
              
              <div class="rubric-item">
                <h5>Diagnostic Skills (30 pts)</h5>
                <ul>
                  <li>Accurate symptom identification (10 pts)</li>
                  <li>Proper beep code interpretation (10 pts)</li>
                  <li>Systematic troubleshooting approach (10 pts)</li>
                </ul>
              </div>
              
              <div class="rubric-item">
                <h5>Technical Execution (30 pts)</h5>
                <ul>
                  <li>Correct hardware handling (10 pts)</li>
                  <li>Proper tool usage (10 pts)</li>
                  <li>Successful problem resolution (10 pts)</li>
                </ul>
              </div>
              
              <div class="rubric-item">
                <h5>Documentation (20 pts)</h5>
                <ul>
                  <li>Complete diagnostic reports (10 pts)</li>
                  <li>Clear problem descriptions (5 pts)</li>
                  <li>Professional presentation (5 pts)</li>
                </ul>
              </div>
            </div>
          </div>
        `
      },
      quiz: {
        title: 'Comprehensive Startup Assessment',
        content: `
          <h3>📝 Advanced Startup Problems Assessment</h3>
          <div class="quiz-container">
            <div class="question">
              <p><strong>Question 1:</strong> During which phase of the boot process does the Power-On Self-Test (POST) occur?</p>
              <div class="quiz-options">
                <label><input type="radio" name="s1" value="a"> Phase I - Power On</label>
                <label><input type="radio" name="s1" value="b"> Phase II - POST</label>
                <label><input type="radio" name="s1" value="c"> Phase III - Startup Options</label>
                <label><input type="radio" name="s1" value="d"> Phase IV - OS Search</label>
              </div>
              <div class="question-explanation">
                <p><em>POST is a critical hardware verification process that occurs immediately after power stabilization.</em></p>
              </div>
            </div>
            
            <div class="question">
              <p><strong>Question 2:</strong> What does "1 long beep, 2 short beeps" typically indicate during POST?</p>
              <div class="quiz-options">
                <label><input type="radio" name="s2" value="a"> Memory failure in base 64K</label>
                <label><input type="radio" name="s2" value="b"> Keyboard controller error</label>
                <label><input type="radio" name="s2" value="c"> Display adapter problem</label>
                <label><input type="radio" name="s2" value="d"> Hard drive failure</label>
              </div>
              <div class="question-explanation">
                <p><em>This specific beep pattern indicates issues with the graphics/display subsystem.</em></p>
              </div>
            </div>

            <div class="question">
              <p><strong>Question 3:</strong> If you encounter "BOOTMGR is missing" error, which command sequence would be most appropriate for repair?</p>
              <div class="quiz-options">
                <label><input type="radio" name="s3" value="a"> format c: /s</label>
                <label><input type="radio" name="s3" value="b"> bootrec /rebuildbcd</label>
                <label><input type="radio" name="s3" value="c"> chkdsk /f /r</label>
                <label><input type="radio" name="s3" value="d"> sfc /scannow</label>
              </div>
              <div class="question-explanation">
                <p><em>The bootrec command specifically rebuilds the Boot Configuration Data needed for Windows startup.</em></p>
              </div>
            </div>
            
            <div class="question">
              <p><strong>Question 4:</strong> Which diagnostic LED on a motherboard typically indicates memory-related issues?</p>
              <div class="quiz-options">
                <label><input type="radio" name="s4" value="a"> CPU LED (Red)</label>
                <label><input type="radio" name="s4" value="b"> DRAM LED (Yellow)</label>
                <label><input type="radio" name="s4" value="c"> VGA LED (White)</label>
                <label><input type="radio" name="s4" value="d"> BOOT LED (Green)</label>
              </div>
              <div class="question-explanation">
                <p><em>Modern motherboards use color-coded LEDs to quickly identify which subsystem is causing boot failures.</em></p>
              </div>
            </div>

            <div class="question">
              <p><strong>Question 5:</strong> What is the primary purpose of UEFI Fast Boot feature?</p>
              <div class="quiz-options">
                <label><input type="radio" name="s5" value="a"> Increase CPU clock speed during boot</label>
                <label><input type="radio" name="s5" value="b"> Skip unnecessary hardware initialization checks</label>
                <label><input type="radio" name="s5" value="c"> Load operating system from network</label>
                <label><input type="radio" name="s5" value="d"> Enable automatic driver updates</label>
              </div>
              <div class="question-explanation">
                <p><em>Fast Boot optimizes startup time by bypassing non-essential hardware checks and initialization routines.</em></p>
              </div>
            </div>
            
            <button class="submit-quiz" onclick="checkStartupAnswers()">Submit Quiz</button>
            <div id="startup-quiz-results" style="margin-top: 1rem;"></div>
          </div>
          
          <script>
            function checkStartupAnswers() {
              const answers = {s1: 'b', s2: 'c', s3: 'b', s4: 'b', s5: 'b'};
              let score = 0;
              let total = Object.keys(answers).length;
              let feedback = [];
              
              for (let question in answers) {
                const selected = document.querySelector('input[name="' + question + '"]:checked');
                if (selected && selected.value === answers[question]) {
                  score++;
                  feedback.push(question + ': Correct ✓');
                } else {
                  feedback.push(question + ': Incorrect ✗');
                }
              }
              
              const percentage = Math.round((score / total) * 100);
              let grade = '';
              if (percentage >= 90) grade = 'Excellent';
              else if (percentage >= 80) grade = 'Good';
              else if (percentage >= 70) grade = 'Satisfactory';
              else grade = 'Needs Improvement';
              
              const resultDiv = document.getElementById('startup-quiz-results');
              resultDiv.innerHTML = 
                '<div class="quiz-result">' +
                '<h4>Assessment Results</h4>' +
                '<p><strong>Score: ' + score + '/' + total + ' (' + percentage + '%) - ' + grade + '</strong></p>' +
                '<p><strong>Correct Answers:</strong> 1-b, 2-c, 3-b, 4-b, 5-b</p>' +
                '<div class="feedback">' + feedback.join('<br>') + '</div>' +
                '</div>';
            }
          </script>
        `
      }
    },
    'disk-configuration': {
      overview: {
        title: 'Disk Configuration & Management',
        content: `
          <h3>💿 PC Storage Overview</h3>
          <p>Understanding mass storage systems is crucial for effective PC maintenance and troubleshooting. This module covers storage technologies, disk utilities, and partitioning strategies.</p>
          
          <div class="storage-types">
            <div class="storage-card">
              <h4>🔧 HDD (Hard Disk Drive)</h4>
              <ul>
                <li>Magnetic storage technology</li>
                <li>Higher capacity, lower cost</li>
                <li>Mechanical components, slower access</li>
                <li>Prone to mechanical failure</li>
              </ul>
            </div>
            <div class="storage-card">
              <h4>⚡ SSD (Solid State Drive)</h4>
              <ul>
                <li>Flash memory technology</li>
                <li>Faster access times</li>
                <li>No moving parts, more reliable</li>
                <li>Higher cost per GB</li>
              </ul>
            </div>
            <div class="storage-card">
              <h4>🔄 Hybrid Drives (SSHD)</h4>
              <ul>
                <li>Combines HDD and SSD technology</li>
                <li>SSD cache for frequently accessed data</li>
                <li>Balance of performance and capacity</li>
                <li>Cost-effective solution</li>
              </ul>
            </div>
          </div>
        `
      },
      lessons: {
        title: 'Learning Materials - Week 5',
        content: `
          <h3>📖 Week 5: Disk Configuration and Management</h3>
          
          <div class="lesson-objectives">
            <h4>Learning Objectives:</h4>
            <ul>
              <li>Discover and understand mass storage technologies</li>
              <li>Add and remove storage devices safely</li>
              <li>Explore and utilize disk utilities effectively</li>
              <li>Assign and manage drive letters</li>
              <li>Create and manage disk partitions</li>
            </ul>
          </div>

          <div class="content-section">
            <h4>🛠️ Mass Storage Tools and Utilities</h4>
            
            <div class="tool-card">
              <h5>Disk Management (diskmgmt.msc)</h5>
              <ul>
                <li>View all connected storage devices</li>
                <li>Create, delete, and resize partitions</li>
                <li>Assign drive letters</li>
                <li>Convert between disk types (MBR/GPT)</li>
                <li>Mark partitions as active</li>
              </ul>
            </div>

            <div class="tool-card">
              <h5>DISKPART Command-Line Utility</h5>
              <ul>
                <li>Advanced partitioning operations</li>
                <li>Disk conversion and formatting</li>
                <li>Clean disk operations</li>
                <li>Partition attribute management</li>
                <li>Scripting capabilities</li>
              </ul>
            </div>

            <div class="tool-card">
              <h5>CHKDSK (Check Disk)</h5>
              <ul>
                <li>Scan for file system errors</li>
                <li>Fix logical disk errors</li>
                <li>Recover readable information</li>
                <li>Bad sector detection and marking</li>
                <li>File allocation table repair</li>
              </ul>
            </div>
          </div>

          <div class="content-section">
            <h4>📊 Partitioning Strategies</h4>
            
            <div class="partition-guide">
              <h5>Partition Types:</h5>
              <ul>
                <li><strong>Primary Partition:</strong> Bootable, can contain operating system (max 4 on MBR)</li>
                <li><strong>Extended Partition:</strong> Container for logical drives (MBR only)</li>
                <li><strong>Logical Drive:</strong> Partition within extended partition</li>
                <li><strong>GPT Partitions:</strong> Modern partitioning scheme, supports >2TB drives</li>
              </ul>
              
              <h5>File Systems:</h5>
              <ul>
                <li><strong>NTFS:</strong> Windows native, supports large files, security features</li>
                <li><strong>FAT32:</strong> Compatible across platforms, 4GB file size limit</li>
                <li><strong>exFAT:</strong> For removable media, no file size limits</li>
                <li><strong>ReFS:</strong> Resilient File System for Windows Server</li>
              </ul>
            </div>
          </div>

          <div class="resource-box">
            <h4>📚 Study Materials:</h4>
            <ul>
              <li><strong>Primary Text:</strong> Troubleshooting and Maintaining your PC by Dan Gookin (2017) - Chapter 5</li>
              <li><a href="https://dms.nasc.org.np/sites/default/files/documents/Disk%20Partitioning,%20Disk%20Formatting,%20Disk%20Cleanup,%20Disk%20Difragment,%20HDD%20life%20Test,%20ISO.pdf" class="resource-link" target="_blank">Comprehensive Disk Management Guide</a></li>
              <li><a href="https://www.youtube.com/@LinusTechTips" class="resource-link" target="_blank">Linus Tech Tips</a> - Storage technology reviews</li>
            </ul>
          </div>
        `
      },
      laboratory: {
        title: 'Laboratory Activities',
        content: `
          <h3>🔬 Lab Activities: Disk Configuration</h3>
          
          <div class="lab-activity">
            <h4>Lab 1: Disk Management Operations</h4>
            <p><strong>Objective:</strong> Practice using Windows Disk Management tool</p>
            
            <h5>Tasks:</h5>
            <ol>
              <li>Open Disk Management console</li>
              <li>Identify all connected storage devices</li>
              <li>Document current partition layout</li>
              <li>Create a new partition from unallocated space</li>
              <li>Assign a drive letter to the new partition</li>
              <li>Format the partition with NTFS file system</li>
              <li>Change the volume label</li>
              <li>Safely remove the partition</li>
            </ol>
          </div>

          <div class="lab-activity">
            <h4>Lab 2: Command-Line Disk Operations</h4>
            <p><strong>Objective:</strong> Use DISKPART for advanced disk management</p>
            
            <h5>DISKPART Commands to Practice:</h5>
            <div class="code-block">
              <pre>
list disk          # Show all disks
select disk 1      # Select specific disk
list partition     # Show partitions on selected disk
create partition primary size=5000  # Create 5GB partition
active            # Mark partition as active
format fs=ntfs quick  # Quick format with NTFS
assign letter=E   # Assign drive letter E
              </pre>
            </div>
            
            <p><strong>⚠️ Safety Note:</strong> Always work with test drives or virtual machines to avoid data loss!</p>
          </div>

          <div class="lab-activity">
            <h4>Lab 3: Disk Health and Maintenance</h4>
            <p><strong>Objective:</strong> Use diagnostic tools to check disk health</p>
            
            <h5>Diagnostic Procedures:</h5>
            <ol>
              <li>Run CHKDSK on system drive: <code>chkdsk C: /f /r</code></li>
              <li>Use CrystalDiskInfo to check S.M.A.R.T. status</li>
              <li>Perform disk defragmentation analysis</li>
              <li>Check disk space usage and cleanup</li>
              <li>Test disk read/write speeds</li>
              <li>Document findings and recommendations</li>
            </ol>
          </div>

          <div class="assessment-rubric">
            <h4>📊 Lab Assessment (25 points each):</h4>
            <ul>
              <li><strong>Preparation and Safety (20 pts):</strong> Proper tools, workspace organization, safety measures</li>
              <li><strong>Partition Management (20 pts):</strong> Correct partition creation, formatting, and management</li>
              <li><strong>Command Proficiency (20 pts):</strong> Effective use of command-line tools</li>
              <li><strong>Documentation (20 pts):</strong> Clear recording of procedures and results</li>
            </ul>
          </div>
        `
      },
      quiz: {
        title: 'Disk Configuration Quiz',
        content: `
          <h3>📝 Disk Configuration Assessment</h3>
          <div class="quiz-container">
            <div class="question">
              <p><strong>Question 1:</strong> What is the maximum number of primary partitions allowed on an MBR disk?</p>
              <div class="quiz-options">
                <label><input type="radio" name="d1" value="a"> 2</label>
                <label><input type="radio" name="d1" value="b"> 4</label>
                <label><input type="radio" name="d1" value="c"> 8</label>
                <label><input type="radio" name="d1" value="d"> Unlimited</label>
              </div>
            </div>
            
            <div class="question">
              <p><strong>Question 2:</strong> Which file system is recommended for Windows system drives?</p>
              <div class="quiz-options">
                <label><input type="radio" name="d2" value="a"> FAT32</label>
                <label><input type="radio" name="d2" value="b"> NTFS</label>
                <label><input type="radio" name="d2" value="c"> exFAT</label>
                <label><input type="radio" name="d2" value="d"> ext4</label>
              </div>
            </div>

            <div class="question">
              <p><strong>Question 3:</strong> What does the CHKDSK /f parameter do?</p>
              <div class="quiz-options">
                <label><input type="radio" name="d3" value="a"> Forces the check to run on next boot</label>
                <label><input type="radio" name="d3" value="b"> Fixes errors automatically</label>
                <label><input type="radio" name="d3" value="c"> Performs a full surface scan</label>
                <label><input type="radio" name="d3" value="d"> Creates a log file</label>
              </div>
            </div>

            <div class="question">
              <p><strong>Question 4:</strong> Which partitioning scheme supports drives larger than 2TB?</p>
              <div class="quiz-options">
                <label><input type="radio" name="d4" value="a"> MBR only</label>
                <label><input type="radio" name="d4" value="b"> GPT only</label>
                <label><input type="radio" name="d4" value="c"> Both MBR and GPT</label>
                <label><input type="radio" name="d4" value="d"> Neither MBR nor GPT</label>
              </div>
            </div>
            
            <button class="submit-quiz">Submit Quiz</button>
          </div>
        `
      }
    },
    // Continue with other modules...
  }

  const currentModule = moduleData[module?.id] || {}
  const sections = Object.keys(currentModule)

  // Add new sections to all modules
  if (sections.length > 0 && !sections.includes('visuals')) {
    sections.push('visuals', 'advanced')
  }

  // Helper function to get expandable topics for each module
  const getExpandableTopics = (moduleId) => {
    const topics = {
      'pc-trouble': [
        {
          id: 'hardware-vs-software',
          title: 'Hardware vs Software Diagnosis',
          content: `
            <div class="diagnostic-flowchart">
              <h4>🔍 Diagnostic Decision Tree</h4>
              <div class="flowchart">
                <div class="decision-node">
                  <strong>Problem Occurred</strong>
                  <div class="branches">
                    <div class="branch">
                      <span class="condition">Recent Software Change?</span>
                      <div class="result software">Likely Software Issue</div>
                    </div>
                    <div class="branch">
                      <span class="condition">Physical Symptoms?</span>
                      <div class="result hardware">Likely Hardware Issue</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="comparison-table">
              <h5>📊 Hardware vs Software Comparison</h5>
              <table class="diagnostic-table">
                <thead>
                  <tr>
                    <th>Aspect</th>
                    <th>Hardware Issues</th>
                    <th>Software Issues</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Symptoms</td>
                    <td>Physical noises, burning smell, no power</td>
                    <td>Error messages, crashes, slow performance</td>
                  </tr>
                  <tr>
                    <td>Onset</td>
                    <td>Sudden failure, gradual degradation</td>
                    <td>After updates, installations, or changes</td>
                  </tr>
                  <tr>
                    <td>Consistency</td>
                    <td>Usually consistent behavior</td>
                    <td>May be intermittent or context-specific</td>
                  </tr>
                  <tr>
                    <td>Resolution</td>
                    <td>Component replacement, reseating</td>
                    <td>Updates, reinstallation, configuration</td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        },
        {
          id: 'troubleshooting-methodology',
          title: 'Systematic Troubleshooting Methodology',
          content: `
            <div class="methodology-steps">
              <h4>🎯 The 6-Step Troubleshooting Process</h4>
              
              <div class="step-card">
                <div class="step-number">1</div>
                <div class="step-content">
                  <h5>Identify the Problem</h5>
                  <ul>
                    <li>Gather information from user</li>
                    <li>Identify symptoms</li>
                    <li>Question users about recent changes</li>
                    <li>Duplicate the problem if possible</li>
                  </ul>
                </div>
              </div>
              
              <div class="step-card">
                <div class="step-number">2</div>
                <div class="step-content">
                  <h5>Establish a Theory</h5>
                  <ul>
                    <li>Question the obvious</li>
                    <li>Consider multiple approaches</li>
                    <li>Divide and conquer</li>
                    <li>Research if necessary</li>
                  </ul>
                </div>
              </div>
              
              <div class="step-card">
                <div class="step-number">3</div>
                <div class="step-content">
                  <h5>Test the Theory</h5>
                  <ul>
                    <li>Confirm the theory</li>
                    <li>Determine next steps</li>
                    <li>If theory is not confirmed, re-establish new theory</li>
                  </ul>
                </div>
              </div>
              
              <div class="step-card">
                <div class="step-number">4</div>
                <div class="step-content">
                  <h5>Establish Plan of Action</h5>
                  <ul>
                    <li>Refer to vendor instructions</li>
                    <li>Consider corporate policies</li>
                    <li>Plan for data preservation</li>
                    <li>Get approval if needed</li>
                  </ul>
                </div>
              </div>
              
              <div class="step-card">
                <div class="step-number">5</div>
                <div class="step-content">
                  <h5>Implement the Solution</h5>
                  <ul>
                    <li>Apply the fix</li>
                    <li>Test the solution</li>
                    <li>Verify full system functionality</li>
                    <li>Implement preventive measures</li>
                  </ul>
                </div>
              </div>
              
              <div class="step-card">
                <div class="step-number">6</div>
                <div class="step-content">
                  <h5>Document Everything</h5>
                  <ul>
                    <li>Document findings</li>
                    <li>Document actions taken</li>
                    <li>Document outcomes</li>
                    <li>Update knowledge base</li>
                  </ul>
                </div>
              </div>
            </div>
          `
        },
        {
          id: 'common-tools',
          title: 'Essential Troubleshooting Tools',
          content: `
            <div class="tools-grid">
              <div class="tool-category">
                <h4>🔧 Hardware Tools</h4>
                <div class="tool-list">
                  <div class="tool-item">
                    <img src="https://images.unsplash.com/photo-1581092918484-8313ece92c52?w=150&h=100&fit=crop" alt="Screwdriver Set" />
                    <div class="tool-info">
                      <h5>Screwdriver Set</h5>
                      <p>Phillips and flathead screwdrivers of various sizes for opening cases and securing components.</p>
                    </div>
                  </div>
                  
                  <div class="tool-item">
                    <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=150&h=100&fit=crop" alt="Multimeter" />
                    <div class="tool-info">
                      <h5>Digital Multimeter</h5>
                      <p>Essential for testing voltages, continuity, and electrical components.</p>
                    </div>
                  </div>
                  
                  <div class="tool-item">
                    <img src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=150&h=100&fit=crop" alt="Anti-static wrist strap" />
                    <div class="tool-info">
                      <h5>Anti-static Wrist Strap</h5>
                      <p>Prevents electrostatic discharge damage to sensitive components.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="tool-category">
                <h4>💻 Software Tools</h4>
                <div class="tool-list">
                  <div class="tool-item">
                    <div class="software-icon">🔍</div>
                    <div class="tool-info">
                      <h5>System Information Tools</h5>
                      <p>Built-in tools like msinfo32, Device Manager, and Event Viewer for system analysis.</p>
                    </div>
                  </div>
                  
                  <div class="tool-item">
                    <div class="software-icon">🛠️</div>
                    <div class="tool-info">
                      <h5>Diagnostic Software</h5>
                      <p>Third-party tools like CPU-Z, GPU-Z, and manufacturer-specific diagnostics.</p>
                    </div>
                  </div>
                  
                  <div class="tool-item">
                    <div class="software-icon">💿</div>
                    <div class="tool-info">
                      <h5>Bootable Rescue Media</h5>
                      <p>USB drives with rescue environments, antivirus scanners, and recovery tools.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `
        }
      ],
      'startup-problems': [
        {
          id: 'bios-uefi-deep-dive',
          title: 'BIOS/UEFI Deep Dive',
          content: `
            <div class="bios-comparison">
              <h4>⚖️ BIOS vs UEFI Comparison</h4>
              <div class="comparison-grid">
                <div class="comparison-item legacy">
                  <h5>Legacy BIOS</h5>
                  <img src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop" alt="Legacy BIOS Interface" />
                  <ul>
                    <li>16-bit mode operation</li>
                    <li>1MB addressable memory</li>
                    <li>MBR partition scheme only</li>
                    <li>Text-based interface</li>
                    <li>Limited boot device support</li>
                    <li>No built-in security features</li>
                  </ul>
                </div>
                
                <div class="comparison-item modern">
                  <h5>UEFI (Unified Extensible Firmware Interface)</h5>
                  <img src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=400&h=250&fit=crop" alt="UEFI Interface" />
                  <ul>
                    <li>32/64-bit mode operation</li>
                    <li>Virtually unlimited memory access</li>
                    <li>GPT partition scheme support</li>
                    <li>Graphical user interface</li>
                    <li>Network boot capabilities</li>
                    <li>Secure Boot and TPM integration</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="uefi-features">
              <h4>🔒 Advanced UEFI Features</h4>
              <div class="feature-grid">
                <div class="feature-card">
                  <h5>Secure Boot</h5>
                  <p>Cryptographic verification of boot components to prevent malware injection during startup.</p>
                </div>
                <div class="feature-card">
                  <h5>TPM Integration</h5>
                  <p>Trusted Platform Module support for hardware-based security and encryption key storage.</p>
                </div>
                <div class="feature-card">
                  <h5>Network Boot</h5>
                  <p>PXE (Preboot Execution Environment) support for network-based OS deployment.</p>
                </div>
                <div class="feature-card">
                  <h5>Capsule Updates</h5>
                  <p>Firmware updates through the operating system without entering setup mode.</p>
                </div>
              </div>
            </div>
          `
        }
      ]
    }
    return topics[moduleId] || []
  }

  // Helper function to get visual content
  const getVisualContent = (moduleId) => {
    const visualContent = {
      'pc-trouble': (
        <div className="visual-learning-content">
          <div className="diagram-section">
            <h4>🖼️ Interactive Diagrams</h4>
            
            <div className="diagram-card">
              <h5>Computer System Architecture</h5>
              <div className="interactive-diagram">
                <img src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop" alt="Computer Architecture" />
                <div className="diagram-overlay">
                  <div className="hotspot cpu" data-tooltip="Central Processing Unit - The brain of the computer">CPU</div>
                  <div className="hotspot ram" data-tooltip="Random Access Memory - Temporary storage for active programs">RAM</div>
                  <div className="hotspot storage" data-tooltip="Storage Device - Permanent data storage">Storage</div>
                  <div className="hotspot gpu" data-tooltip="Graphics Processing Unit - Handles visual processing">GPU</div>
                </div>
              </div>
            </div>
            
            <div className="diagram-card">
              <h5>Troubleshooting Flowchart</h5>
              <div className="flowchart-container">
                <svg viewBox="0 0 800 600" className="troubleshooting-flowchart">
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#667eea" />
                    </marker>
                  </defs>
                  
                  {/* Start Node */}
                  <rect x="350" y="20" width="100" height="40" rx="20" fill="#667eea" />
                  <text x="400" y="45" textAnchor="middle" fill="white" fontSize="12">Problem Reported</text>
                  
                  {/* Decision Diamond */}
                  <polygon points="400,100 450,125 400,150 350,125" fill="#ffc107" />
                  <text x="400" y="130" textAnchor="middle" fontSize="10">Hardware?</text>
                  
                  {/* Hardware Path */}
                  <rect x="200" y="200" width="100" height="40" rx="5" fill="#28a745" />
                  <text x="250" y="225" textAnchor="middle" fill="white" fontSize="11">Check Connections</text>
                  
                  {/* Software Path */}
                  <rect x="500" y="200" width="100" height="40" rx="5" fill="#17a2b8" />
                  <text x="550" y="225" textAnchor="middle" fill="white" fontSize="11">Check Logs</text>
                  
                  {/* Arrows */}
                  <line x1="400" y1="60" x2="400" y2="100" stroke="#667eea" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <line x1="375" y1="140" x2="275" y2="190" stroke="#667eea" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <line x1="425" y1="140" x2="525" y2="190" stroke="#667eea" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  
                  <text x="320" y="170" fontSize="10">Yes</text>
                  <text x="470" y="170" fontSize="10">No</text>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="video-section">
            <h4>🎥 Video Learning Resources</h4>
            <div className="video-grid">
              <div className="video-card">
                <div className="video-thumbnail">
                  <img src="https://images.unsplash.com/photo-1560472354-0ac23a92ca6d?w=300&h=200&fit=crop" alt="Video Thumbnail" />
                  <div className="play-button">▶</div>
                </div>
                <h5>Basic PC Troubleshooting</h5>
                <p>15 min • Beginner Level</p>
              </div>
              
              <div className="video-card">
                <div className="video-thumbnail">
                  <img src="https://images.unsplash.com/photo-1581092918484-8313ece92c52?w=300&h=200&fit=crop" alt="Video Thumbnail" />
                  <div className="play-button">▶</div>
                </div>
                <h5>Hardware Diagnosis Techniques</h5>
                <p>22 min • Intermediate Level</p>
              </div>
            </div>
          </div>
        </div>
      ),
      'startup-problems': (
        <div className="visual-learning-content">
          <div className="boot-sequence-animation">
            <h4>🔄 Interactive Boot Sequence</h4>
            <div className="boot-timeline">
              <div className="timeline-item active">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h5>Power On</h5>
                  <p>PSU initialization</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h5>POST</h5>
                  <p>Hardware check</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h5>Boot Loader</h5>
                  <p>OS location</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h5>Kernel Load</h5>
                  <p>OS initialization</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h5>Desktop</h5>
                  <p>User interface</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    return visualContent[moduleId] || <p>Visual content coming soon...</p>
  }

  // Helper function to get advanced reading content
  const getAdvancedContent = (moduleId) => {
    const advancedContent = {
      'pc-trouble': (
        <div className="advanced-reading-content">
          <div className="research-papers">
            <h4>📄 Research Papers & Studies</h4>
            <div className="paper-list">
              <div className="paper-item">
                <h5>Systematic Approach to Computer Hardware Troubleshooting in Enterprise Environments</h5>
                <p className="authors">Smith, J., et al. (2023)</p>
                <p className="abstract">This study examines the effectiveness of systematic troubleshooting methodologies in reducing mean time to repair (MTTR) in enterprise computing environments...</p>
                <div className="paper-actions">
                  <button className="btn-download">📥 Download PDF</button>
                  <button className="btn-cite">📋 Cite</button>
                </div>
              </div>
              
              <div className="paper-item">
                <h5>Machine Learning Approaches to Predictive Hardware Failure Detection</h5>
                <p className="authors">Johnson, M., Chen, L. (2024)</p>
                <p className="abstract">Recent advances in machine learning have enabled predictive analytics for hardware failure detection, potentially reducing unplanned downtime by up to 70%...</p>
                <div className="paper-actions">
                  <button className="btn-download">📥 Download PDF</button>
                  <button className="btn-cite">📋 Cite</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="industry-standards">
            <h4>🏭 Industry Standards & Best Practices</h4>
            <div className="standards-grid">
              <div className="standard-card">
                <h5>ITIL v4 Framework</h5>
                <p>Information Technology Infrastructure Library guidelines for IT service management and troubleshooting processes.</p>
                <a href="#" className="standard-link">Read More →</a>
              </div>
              
              <div className="standard-card">
                <h5>ISO/IEC 20000</h5>
                <p>International standard for IT service management systems, including incident and problem management.</p>
                <a href="#" className="standard-link">Read More →</a>
              </div>
              
              <div className="standard-card">
                <h5>CompTIA A+ Objectives</h5>
                <p>Industry-standard certification objectives for PC hardware and software troubleshooting competencies.</p>
                <a href="#" className="standard-link">Read More →</a>
              </div>
            </div>
          </div>
          
          <div className="case-studies">
            <h4>📊 Real-World Case Studies</h4>
            <div className="case-study-item">
              <h5>Case Study 1: Mass Storage Failure in Financial Institution</h5>
              <div className="case-details">
                <p><strong>Background:</strong> A major financial institution experienced widespread storage failures affecting critical trading systems.</p>
                <p><strong>Challenge:</strong> Diagnose and resolve issues while maintaining regulatory compliance and minimal downtime.</p>
                <p><strong>Solution:</strong> Implementation of systematic troubleshooting protocols and redundant storage architecture.</p>
                <p><strong>Outcome:</strong> 99.9% uptime achieved with improved disaster recovery capabilities.</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
    return advancedContent[moduleId] || <p>Advanced content coming soon...</p>
  }

  if (!module) {
    return <div className="module-content">Please select a module</div>
  }

  return (
    <div className="module-content">
      <div className="module-header">
        <h2>{module.title}</h2>
        <p>{module.description}</p>
      </div>
      
      <div className="section-tabs">
        {sections.map(section => (
          <button
            key={section}
            className={`section-tab ${activeSection === section ? 'active' : ''}`}
            onClick={() => setActiveSection(section)}
          >
            {currentModule[section]?.title || section}
          </button>
        ))}
      </div>
      
      <div className="section-content">
        <div dangerouslySetInnerHTML={{ 
          __html: currentModule[activeSection]?.content || '<p>Content coming soon...</p>' 
        }} />
        
        {/* Interactive Elements */}
        {activeSection === 'lessons' && (
          <div className="interactive-elements">
            <div className="expandable-topics">
              <h4>📖 Expandable Learning Topics</h4>
              {getExpandableTopics(module?.id).map(topic => (
                <div key={topic.id} className="topic-card">
                  <div 
                    className="topic-header" 
                    onClick={() => toggleTopic(topic.id)}
                  >
                    <h5>{topic.title}</h5>
                    <span className={`expand-icon ${expandedTopics[topic.id] ? 'expanded' : ''}`}>
                      ▼
                    </span>
                  </div>
                  {expandedTopics[topic.id] && (
                    <div className="topic-content">
                      <div dangerouslySetInnerHTML={{ __html: topic.content }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Visual Learning Section */}
        {activeSection === 'visuals' && (
          <div className="visual-learning">
            {getVisualContent(module?.id)}
          </div>
        )}
        
        {/* Advanced Reading Section */}
        {activeSection === 'advanced' && (
          <div className="advanced-reading">
            {getAdvancedContent(module?.id)}
          </div>
        )}
      </div>
    </div>
  )
}

export default ModuleContent
