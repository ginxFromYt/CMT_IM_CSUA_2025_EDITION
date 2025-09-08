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
    'monitor-internal': {
      overview: {
        title: 'Monitor and Internal Issues',
        content: `
          <h3>🖥️ Monitor and Internal Component Troubleshooting</h3>
          <p>This module focuses on diagnosing and resolving monitor display issues and internal component failures. Understanding visual symptoms and their underlying causes is essential for effective PC maintenance.</p>
          
          <div class="learning-objectives">
            <h4>📚 Learning Objectives:</h4>
            <ul>
              <li>Diagnose monitor display problems including resolution, color, and connectivity issues</li>
              <li>Troubleshoot graphics card and display adapter failures</li>
              <li>Identify and resolve internal component communication problems</li>
              <li>Perform systematic testing of display systems and internal buses</li>
              <li>Implement preventive maintenance for monitors and internal components</li>
              <li>Optimize display performance and internal component efficiency</li>
            </ul>
          </div>

          <div class="image-container">
            <img src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&h=400&fit=crop" alt="Multiple Monitors Setup" class="content-image" />
            <p class="image-caption">Professional multi-monitor setup showing various display configurations</p>
          </div>

          <div class="content-section">
            <h4>🔍 Common Monitor Issues Categories</h4>
            
            <div class="issue-category">
              <h5>📺 Display Quality Problems</h5>
              <ul>
                <li><strong>No Display:</strong> Black screen, power LED may be on</li>
                <li><strong>Distorted Colors:</strong> Color bleeding, wrong color temperature</li>
                <li><strong>Resolution Issues:</strong> Blurry text, incorrect scaling</li>
                <li><strong>Flickering:</strong> Screen flashing, brightness fluctuation</li>
                <li><strong>Dead Pixels:</strong> Stuck or completely non-responsive pixels</li>
                <li><strong>Burn-in/Image Retention:</strong> Permanent shadows from static images</li>
              </ul>
            </div>

            <div class="issue-category">
              <h5>🔌 Connectivity Problems</h5>
              <ul>
                <li><strong>Cable Issues:</strong> Loose connections, damaged cables</li>
                <li><strong>Port Problems:</strong> Faulty HDMI/DisplayPort/VGA/DVI ports</li>
                <li><strong>Signal Detection:</strong> "No Signal" or "Input Not Supported" errors</li>
                <li><strong>Multiple Monitor Issues:</strong> Extended display not working</li>
                <li><strong>Refresh Rate Mismatch:</strong> Unsupported refresh rates</li>
              </ul>
            </div>

            <div class="issue-category">
              <h5>⚙️ Internal Component Failures</h5>
              <ul>
                <li><strong>Graphics Card Issues:</strong> GPU overheating, driver conflicts</li>
                <li><strong>PCIe Slot Problems:</strong> Poor contact, power delivery issues</li>
                <li><strong>Memory Issues:</strong> Video memory corruption, insufficient VRAM</li>
                <li><strong>Power Supply Problems:</strong> Inadequate power for high-end graphics</li>
                <li><strong>Motherboard Issues:</strong> Integrated graphics failures</li>
              </ul>
            </div>
          </div>
        `
      },
      lessons: {
        title: 'Learning Materials - Week 4',
        content: `
          <h3>📖 Week 4: Monitor and Internal Component Diagnosis</h3>
          
          <div class="lesson-objectives">
            <h4>Learning Objectives:</h4>
            <ul>
              <li>Master monitor troubleshooting techniques and tools</li>
              <li>Understand display technologies and their common failure modes</li>
              <li>Diagnose graphics card and internal component issues</li>
              <li>Implement systematic testing procedures for display systems</li>
              <li>Optimize monitor performance and internal component efficiency</li>
            </ul>
          </div>

          <div class="content-section">
            <h4>🖥️ Monitor Technologies and Troubleshooting</h4>
            
            <div class="tech-comparison">
              <div class="tech-card">
                <h5>🖥️ LCD (Liquid Crystal Display)</h5>
                <img src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop" alt="LCD Monitor" />
                <ul>
                  <li><strong>Technology:</strong> Liquid crystals with LED backlight</li>
                  <li><strong>Common Issues:</strong> Backlight failure, dead pixels, color shifts</li>
                  <li><strong>Advantages:</strong> Energy efficient, thin profile, good color accuracy</li>
                  <li><strong>Troubleshooting:</strong> Backlight testing, pixel tests, color calibration</li>
                </ul>
              </div>

              <div class="tech-card">
                <h5>⚡ OLED (Organic Light-Emitting Diode)</h5>
                <img src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=250&fit=crop" alt="OLED Display" />
                <ul>
                  <li><strong>Technology:</strong> Self-emitting organic compounds</li>
                  <li><strong>Common Issues:</strong> Burn-in, uneven aging, blue sub-pixel degradation</li>
                  <li><strong>Advantages:</strong> Perfect blacks, infinite contrast, fast response</li>
                  <li><strong>Troubleshooting:</strong> Burn-in prevention, pixel refresh cycles</li>
                </ul>
              </div>

              <div class="tech-card">
                <h5>🎮 Gaming Monitors (High Refresh)</h5>
                <img src="https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=250&fit=crop" alt="Gaming Monitor" />
                <ul>
                  <li><strong>Technology:</strong> TN, IPS, or VA panels with high refresh rates</li>
                  <li><strong>Common Issues:</strong> Ghosting, input lag, G-Sync/FreeSync problems</li>
                  <li><strong>Advantages:</strong> Low latency, high refresh rates (144Hz+)</li>
                  <li><strong>Troubleshooting:</strong> Refresh rate optimization, sync issues</li>
                </ul>
              </div>
            </div>

            <h4>🔧 Systematic Monitor Troubleshooting Process</h4>
            
            <div class="troubleshooting-steps">
              <div class="step-card">
                <div class="step-number">1</div>
                <div class="step-content">
                  <h5>Initial Assessment</h5>
                  <ul>
                    <li>Check power LED status and behavior</li>
                    <li>Listen for monitor startup sounds</li>
                    <li>Observe any on-screen messages or artifacts</li>
                    <li>Note timing of issue occurrence</li>
                  </ul>
                </div>
              </div>

              <div class="step-card">
                <div class="step-number">2</div>
                <div class="step-content">
                  <h5>Connection Verification</h5>
                  <ul>
                    <li>Inspect all cable connections (loose, damaged)</li>
                    <li>Test with different cables (HDMI, DisplayPort, DVI)</li>
                    <li>Try alternative video outputs on graphics card</li>
                    <li>Test monitor with different computer</li>
                  </ul>
                </div>
              </div>

              <div class="step-card">
                <div class="step-number">3</div>
                <div class="step-content">
                  <h5>Settings and Configuration</h5>
                  <ul>
                    <li>Check monitor's built-in settings menu</li>
                    <li>Verify resolution and refresh rate settings</li>
                    <li>Test with different display modes (clone, extend)</li>
                    <li>Update or reinstall graphics drivers</li>
                  </ul>
                </div>
              </div>

              <div class="step-card">
                <div class="step-number">4</div>
                <div class="step-content">
                  <h5>Hardware Component Testing</h5>
                  <ul>
                    <li>Test with integrated graphics (if available)</li>
                    <li>Reseat graphics card in PCIe slot</li>
                    <li>Check graphics card power connections</li>
                    <li>Monitor GPU temperature and performance</li>
                  </ul>
                </div>
              </div>
            </div>

            <h4>🛠️ Internal Component Diagnostic Tools</h4>
            
            <div class="tools-section">
              <div class="tool-category">
                <h5>Software Diagnostic Tools</h5>
                <ul>
                  <li><strong>GPU-Z:</strong> Graphics card information and monitoring</li>
                  <li><strong>FurMark:</strong> GPU stress testing and stability testing</li>
                  <li><strong>MSI Afterburner:</strong> GPU overclocking and temperature monitoring</li>
                  <li><strong>Display Driver Uninstaller (DDU):</strong> Complete driver removal</li>
                  <li><strong>PixelHealer:</strong> Dead pixel repair attempts</li>
                  <li><strong>Lagom LCD Monitor Test:</strong> Comprehensive monitor testing</li>
                </ul>
              </div>

              <div class="tool-category">
                <h5>Hardware Testing Tools</h5>
                <ul>
                  <li><strong>HDMI/DisplayPort Cable Tester:</strong> Signal integrity testing</li>
                  <li><strong>Digital Multimeter:</strong> Power supply voltage testing</li>
                  <li><strong>Thermal Camera:</strong> Component temperature analysis</li>
                  <li><strong>Test Patterns:</strong> Built-in monitor test patterns</li>
                  <li><strong>External Monitor:</strong> For comparison testing</li>
                  <li><strong>PCIe Slot Tester:</strong> Motherboard connectivity testing</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="performance-optimization">
            <h4>⚡ Display Performance Optimization</h4>
            
            <div class="optimization-tips">
              <h5>🎯 Graphics Settings Optimization</h5>
              <ul>
                <li><strong>Resolution Matching:</strong> Set native resolution for best clarity</li>
                <li><strong>Refresh Rate:</strong> Match monitor's maximum supported rate</li>
                <li><strong>Color Depth:</strong> Use 32-bit color for best quality</li>
                <li><strong>Scaling:</strong> Adjust DPI scaling for readability</li>
                <li><strong>Multi-Monitor Setup:</strong> Configure primary display and arrangement</li>
              </ul>

              <h5>🔧 Hardware Optimization</h5>
              <ul>
                <li><strong>Cable Quality:</strong> Use certified high-speed cables</li>
                <li><strong>Power Management:</strong> Disable power saving that affects performance</li>
                <li><strong>GPU Cooling:</strong> Ensure adequate graphics card cooling</li>
                <li><strong>Driver Updates:</strong> Keep graphics drivers current</li>
                <li><strong>BIOS Settings:</strong> Allocate sufficient video memory</li>
              </ul>
            </div>
          </div>

          <div class="common-scenarios">
            <h4>📋 Common Troubleshooting Scenarios</h4>
            
            <div class="scenario-grid">
              <div class="scenario-card">
                <h6>Scenario 1: No Display Signal</h6>
                <p><strong>Symptoms:</strong> Monitor shows "No Signal" message</p>
                <p><strong>Likely Causes:</strong> Cable issue, graphics card failure, power problem</p>
                <p><strong>Solution Steps:</strong></p>
                <ol>
                  <li>Check cable connections at both ends</li>
                  <li>Try different cable and port</li>
                  <li>Test with integrated graphics</li>
                  <li>Reseat graphics card</li>
                </ol>
              </div>

              <div class="scenario-card">
                <h6>Scenario 2: Distorted Colors</h6>
                <p><strong>Symptoms:</strong> Wrong colors, color bleeding, tint issues</p>
                <p><strong>Likely Causes:</strong> Cable degradation, graphics driver, monitor aging</p>
                <p><strong>Solution Steps:</strong></p>
                <ol>
                  <li>Check cable integrity (especially analog cables)</li>
                  <li>Update graphics drivers</li>
                  <li>Calibrate monitor color settings</li>
                  <li>Test with different computer</li>
                </ol>
              </div>

              <div class="scenario-card">
                <h6>Scenario 3: Multiple Monitor Issues</h6>
                <p><strong>Symptoms:</strong> Second monitor not detected, wrong arrangement</p>
                <p><strong>Likely Causes:</strong> Driver issues, insufficient graphics power, settings</p>
                <p><strong>Solution Steps:</strong></p>
                <ol>
                  <li>Check Windows display settings</li>
                  <li>Update graphics drivers</li>
                  <li>Verify power supply capacity</li>
                  <li>Test monitors individually</li>
                </ol>
              </div>

              <div class="scenario-card">
                <h6>Scenario 4: Graphics Performance Issues</h6>
                <p><strong>Symptoms:</strong> Slow rendering, artifacts, crashes</p>
                <p><strong>Likely Causes:</strong> Overheating, insufficient power, driver conflicts</p>
                <p><strong>Solution Steps:</strong></p>
                <ol>
                  <li>Monitor GPU temperature</li>
                  <li>Check power supply adequacy</li>
                  <li>Clean install graphics drivers</li>
                  <li>Test with stress testing software</li>
                </ol>
              </div>
            </div>
          </div>
        `
      },
      laboratory: {
        title: 'Laboratory Activities',
        content: `
          <h3>🔬 Lab Activities: Monitor and Internal Component Testing</h3>
          
          <div class="lab-activity">
            <h4>Lab 1: Comprehensive Monitor Diagnostics</h4>
            <p><strong>Objective:</strong> Master monitor testing procedures and identify common display problems</p>
            
            <div class="image-container">
              <img src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=300&fit=crop" alt="Monitor Testing Setup" class="content-image" />
              <p class="image-caption">Professional monitor testing with various display patterns</p>
            </div>
            
            <h5>🛠️ Required Materials:</h5>
            <ul>
              <li>Multiple monitors (LCD, OLED if available)</li>
              <li>Various video cables (HDMI, DisplayPort, DVI, VGA)</li>
              <li>Graphics cards (integrated and discrete)</li>
              <li>Test pattern software (Lagom LCD test, UDPixel)</li>
              <li>Color calibration tools</li>
              <li>Thermal monitoring software</li>
              <li>Digital multimeter for power testing</li>
            </ul>
            
            <h5>📋 Testing Procedures:</h5>
            <ol>
              <li><strong>Visual Inspection (10 minutes):</strong>
                <ul>
                  <li>Check physical condition of monitor and cables</li>
                  <li>Examine ports for damage or corrosion</li>
                  <li>Test power LED behavior during startup</li>
                  <li>Document monitor specifications and age</li>
                </ul>
              </li>
              <li><strong>Connection Testing (15 minutes):</strong>
                <ul>
                  <li>Test all available video inputs (HDMI, DP, DVI)</li>
                  <li>Verify cable integrity with different cables</li>
                  <li>Test signal quality at various resolutions</li>
                  <li>Check for loose connections and intermittent issues</li>
                </ul>
              </li>
              <li><strong>Display Quality Assessment (25 minutes):</strong>
                <ul>
                  <li>Run comprehensive pixel tests for dead/stuck pixels</li>
                  <li>Test color accuracy with color gradient patterns</li>
                  <li>Check for backlight bleeding and uniformity</li>
                  <li>Assess text clarity at native resolution</li>
                  <li>Test response time with motion patterns</li>
                </ul>
              </li>
              <li><strong>Performance Testing (20 minutes):</strong>
                <ul>
                  <li>Test various refresh rates (60Hz, 120Hz, 144Hz)</li>
                  <li>Verify G-Sync/FreeSync functionality</li>
                  <li>Check input lag with gaming test patterns</li>
                  <li>Test HDR capability if supported</li>
                </ul>
              </li>
            </ol>
          </div>

          <div class="lab-activity">
            <h4>Lab 2: Graphics Card and Internal Component Diagnosis</h4>
            <p><strong>Objective:</strong> Diagnose graphics hardware issues and internal component failures</p>
            
            <h5>🎯 Diagnostic Procedures:</h5>
            <ol>
              <li><strong>Graphics Card Hardware Testing (30 minutes):</strong>
                <ul>
                  <li>Physical inspection for burn marks, damaged components</li>
                  <li>Verify power connector seating (6-pin, 8-pin PCIe)</li>
                  <li>Test graphics card in different PCIe slots</li>
                  <li>Monitor GPU temperature under load with FurMark</li>
                  <li>Check fan operation and noise levels</li>
                </ul>
              </li>
              <li><strong>Driver and Software Testing (20 minutes):</strong>
                <ul>
                  <li>Use DDU to completely remove graphics drivers</li>
                  <li>Install latest drivers from manufacturer</li>
                  <li>Test multiple driver versions for compatibility</li>
                  <li>Check Windows Device Manager for conflicts</li>
                  <li>Verify DirectX and OpenGL functionality</li>
                </ul>
              </li>
              <li><strong>Performance Benchmarking (25 minutes):</strong>
                <ul>
                  <li>Run 3DMark or similar graphics benchmarks</li>
                  <li>Compare results to expected performance</li>
                  <li>Test stability with extended stress testing</li>
                  <li>Monitor power consumption and efficiency</li>
                  <li>Document artifacts or anomalies</li>
                </ul>
              </li>
              <li><strong>Multi-Monitor Configuration (15 minutes):</strong>
                <ul>
                  <li>Configure dual monitor setup (clone and extend)</li>
                  <li>Test different resolution combinations</li>
                  <li>Verify monitor identification and arrangement</li>
                  <li>Test application behavior across monitors</li>
                </ul>
              </li>
            </ol>
          </div>

          <div class="lab-activity">
            <h4>Lab 3: Advanced Display Problem Resolution</h4>
            <p><strong>Objective:</strong> Resolve complex display issues using systematic troubleshooting</p>
            
            <h5>🔍 Problem Scenarios:</h5>
            <div class="scenario-testing">
              <div class="test-scenario">
                <h6>Scenario A: Intermittent Display Issues</h6>
                <p><strong>Setup:</strong> Configure a system with loose connections or marginal power supply</p>
                <p><strong>Task:</strong> Identify and resolve intermittent display problems</p>
                <p><strong>Tools:</strong> Oscilloscope, cable testers, thermal camera</p>
              </div>
              
              <div class="test-scenario">
                <h6>Scenario B: Color Calibration Problems</h6>
                <p><strong>Setup:</strong> Monitor with poor color accuracy or aging backlight</p>
                <p><strong>Task:</strong> Calibrate display for professional color work</p>
                <p><strong>Tools:</strong> Colorimeter, calibration software, test patterns</p>
              </div>
              
              <div class="test-scenario">
                <h6>Scenario C: High-Refresh Gaming Issues</h6>
                <p><strong>Setup:</strong> Gaming monitor with sync problems or input lag</p>
                <p><strong>Task:</strong> Optimize for competitive gaming performance</p>
                <p><strong>Tools:</strong> Input lag tester, frame rate analyzers</p>
              </div>
            </div>
          </div>

          <div class="assessment-rubric">
            <h4>📊 Lab Assessment Rubric (Total: 100 points)</h4>
            <div class="rubric-grid">
              <div class="rubric-item">
                <h5>Safety and Preparation (20 pts)</h5>
                <ul>
                  <li>Proper ESD precautions (5 pts)</li>
                  <li>Equipment handling and care (5 pts)</li>
                  <li>Workspace organization (5 pts)</li>
                  <li>Tool selection and usage (5 pts)</li>
                </ul>
              </div>
              
              <div class="rubric-item">
                <h5>Diagnostic Skills (30 pts)</h5>
                <ul>
                  <li>Systematic problem identification (10 pts)</li>
                  <li>Appropriate tool usage (10 pts)</li>
                  <li>Accurate measurements and testing (10 pts)</li>
                </ul>
              </div>
              
              <div class="rubric-item">
                <h5>Problem Resolution (30 pts)</h5>
                <ul>
                  <li>Correct solution implementation (15 pts)</li>
                  <li>Verification of fixes (10 pts)</li>
                  <li>Prevention strategies (5 pts)</li>
                </ul>
              </div>
              
              <div class="rubric-item">
                <h5>Documentation and Communication (20 pts)</h5>
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
        title: 'Monitor and Internal Issues Quiz',
        content: `
          <h3>📝 Monitor and Internal Component Assessment</h3>
          <div class="quiz-container">
            <div class="question">
              <p><strong>Question 1:</strong> What is the most likely cause of a "No Signal" message on a monitor when the computer appears to be running?</p>
              <div class="quiz-options">
                <label><input type="radio" name="m1" value="a"> Monitor power supply failure</label>
                <label><input type="radio" name="m1" value="b"> Video cable or connection problem</label>
                <label><input type="radio" name="m1" value="c"> Computer memory failure</label>
                <label><input type="radio" name="m1" value="d"> Hard drive corruption</label>
              </div>
              <div class="question-explanation">
                <p><em>Most "No Signal" issues are caused by connectivity problems between the computer and monitor.</em></p>
              </div>
            </div>
            
            <div class="question">
              <p><strong>Question 2:</strong> Which diagnostic tool is most appropriate for testing graphics card stability and temperature?</p>
              <div class="quiz-options">
                <label><input type="radio" name="m2" value="a"> CPU-Z</label>
                <label><input type="radio" name="m2" value="b"> MemTest86</label>
                <label><input type="radio" name="m2" value="c"> FurMark</label>
                <label><input type="radio" name="m2" value="d"> CrystalDiskInfo</label>
              </div>
              <div class="question-explanation">
                <p><em>FurMark is specifically designed for GPU stress testing and thermal monitoring.</em></p>
              </div>
            </div>

            <div class="question">
              <p><strong>Question 3:</strong> What is the primary advantage of OLED monitors over traditional LCD monitors?</p>
              <div class="quiz-options">
                <label><input type="radio" name="m3" value="a"> Lower cost and power consumption</label>
                <label><input type="radio" name="m3" value="b"> Perfect blacks and infinite contrast ratio</label>
                <label><input type="radio" name="m3" value="c"> Longer lifespan and durability</label>
                <label><input type="radio" name="m3" value="d"> Better compatibility with older systems</label>
              </div>
              <div class="question-explanation">
                <p><em>OLED pixels emit their own light, allowing for true blacks and infinite contrast.</em></p>
              </div>
            </div>

            <div class="question">
              <p><strong>Question 4:</strong> When troubleshooting distorted colors on a monitor, which should be tested first?</p>
              <div class="quiz-options">
                <label><input type="radio" name="m4" value="a"> Replace the graphics card</label>
                <label><input type="radio" name="m4" value="b"> Update the monitor firmware</label>
                <label><input type="radio" name="m4" value="c"> Check cable connections and try different cables</label>
                <label><input type="radio" name="m4" value="d"> Reinstall the operating system</label>
              </div>
              <div class="question-explanation">
                <p><em>Cable issues are the most common and easily fixable cause of color distortion.</em></p>
              </div>
            </div>

            <div class="question">
              <p><strong>Question 5:</strong> What does GPU-Z software primarily provide for graphics card diagnostics?</p>
              <div class="quiz-options">
                <label><input type="radio" name="m5" value="a"> Stress testing and stability checking</label>
                <label><input type="radio" name="m5" value="b"> Driver installation and updates</label>
                <label><input type="radio" name="m5" value="c"> Real-time information about graphics card specifications and status</label>
                <label><input type="radio" name="m5" value="d"> Overclocking and performance tuning</label>
              </div>
              <div class="question-explanation">
                <p><em>GPU-Z is an information tool that displays detailed graphics card specifications and monitoring data.</em></p>
              </div>
            </div>
            
            <button class="submit-quiz" onclick="checkMonitorAnswers()">Submit Quiz</button>
            <div id="monitor-quiz-results" style="margin-top: 1rem;"></div>
          </div>
          
          <script>
            function checkMonitorAnswers() {
              const answers = {m1: 'b', m2: 'c', m3: 'b', m4: 'c', m5: 'c'};
              let score = 0;
              let total = Object.keys(answers).length;
              let feedback = [];
              
              for (let question in answers) {
                const selected = document.querySelector('input[name="' + question + '"]:checked');
                if (selected && selected.value === answers[question]) {
                  score++;
                } else {
                  const questionNum = question.replace('m', '');
                  feedback.push('Question ' + questionNum + ': Review monitor troubleshooting procedures');
                }
              }
              
              const percentage = Math.round((score / total) * 100);
              let grade = 'F';
              if (percentage >= 90) grade = 'A';
              else if (percentage >= 80) grade = 'B';
              else if (percentage >= 70) grade = 'C';
              else if (percentage >= 60) grade = 'D';
              
              const resultDiv = document.getElementById('monitor-quiz-results');
              resultDiv.innerHTML = 
                '<div class="quiz-result">' +
                '<h4>Assessment Results</h4>' +
                '<p><strong>Score: ' + score + '/' + total + ' (' + percentage + '%) - ' + grade + '</strong></p>' +
                '<p><strong>Correct Answers:</strong> 1-b, 2-c, 3-b, 4-c, 5-c</p>' +
                '<div class="feedback">' + feedback.join('<br>') + '</div>' +
                '</div>';
            }
          </script>
        `
      }
    },
    'peripherals-software': {
      overview: {
        title: 'Peripherals & Software Issues',
        content: `
          <h3>🖨️ Peripheral Device and Software Troubleshooting</h3>
          <p>This module covers comprehensive diagnosis and resolution of peripheral device malfunctions and software-related problems that commonly affect computer systems.</p>
          
          <div class="learning-objectives">
            <h4>📚 Learning Objectives:</h4>
            <ul>
              <li>Diagnose and repair input device malfunctions (keyboard, mouse, touchpad)</li>
              <li>Troubleshoot printer and scanner connectivity and performance issues</li>
              <li>Resolve software conflicts, compatibility problems, and system errors</li>
              <li>Manage device drivers and software installations effectively</li>
              <li>Implement preventive measures for peripheral and software stability</li>
              <li>Optimize system performance through proper software management</li>
            </ul>
          </div>
          
          <div class="issue-categories">
            <h4>🔧 Major Issue Categories:</h4>
            <div class="category-grid">
              <div class="category-card">
                <h5>Input Device Issues</h5>
                <ul>
                  <li>Keyboard and mouse connectivity problems</li>
                  <li>Touchpad sensitivity and gesture issues</li>
                  <li>Wireless device pairing failures</li>
                  <li>Driver compatibility problems</li>
                </ul>
              </div>
              
              <div class="category-card">
                <h5>Printer & Scanner Problems</h5>
                <ul>
                  <li>Print quality and connectivity issues</li>
                  <li>Scanner calibration and recognition</li>
                  <li>Network printing configuration</li>
                  <li>Multi-function device troubleshooting</li>
                </ul>
              </div>
              
              <div class="category-card">
                <h5>Software Conflicts</h5>
                <ul>
                  <li>Application compatibility issues</li>
                  <li>Driver conflicts and errors</li>
                  <li>System service failures</li>
                  <li>Installation and update problems</li>
                </ul>
              </div>
            </div>
          </div>
        `
      },
      lessons: {
        title: 'Learning Materials - Week 5',
        content: `
          <h3>📖 Week 5: Peripherals & Software Management</h3>
          
          <div class="lesson-objectives">
            <h4>Learning Objectives:</h4>
            <ul>
              <li>Master input device diagnostic procedures</li>
              <li>Implement systematic printer and scanner troubleshooting</li>
              <li>Resolve complex software conflicts and compatibility issues</li>
              <li>Apply advanced driver management techniques</li>
              <li>Optimize system performance through software maintenance</li>
            </ul>
          </div>

          <div class="input-device-section">
            <h4>🖱️ Input Device Troubleshooting</h4>
            
            <div class="diagnostic-methodology">
              <h5>Systematic Diagnostic Approach</h5>
              <div class="step-by-step-guide">
                <div class="diagnostic-step">
                  <div class="step-number">1</div>
                  <div class="step-content">
                    <h6>Physical Inspection</h6>
                    <ul>
                      <li>Check cable connections and USB ports</li>
                      <li>Inspect for physical damage or wear</li>
                      <li>Test with different ports/computers</li>
                      <li>Verify power indicators (if applicable)</li>
                    </ul>
                  </div>
                </div>
                
                <div class="diagnostic-step">
                  <div class="step-number">2</div>
                  <div class="step-content">
                    <h6>Driver Verification</h6>
                    <ul>
                      <li>Check Device Manager for errors</li>
                      <li>Update or reinstall device drivers</li>
                      <li>Test with generic drivers</li>
                      <li>Verify driver compatibility</li>
                    </ul>
                  </div>
                </div>
                
                <div class="diagnostic-step">
                  <div class="step-number">3</div>
                  <div class="step-content">
                    <h6>Software Testing</h6>
                    <ul>
                      <li>Test in safe mode</li>
                      <li>Check for software conflicts</li>
                      <li>Verify system settings</li>
                      <li>Run built-in diagnostics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="device-specific-guides">
              <h5>Device-Specific Troubleshooting</h5>
              <div class="device-troubleshooting-grid">
                <div class="device-guide">
                  <h6>🖱️ Mouse Troubleshooting</h6>
                  <div class="common-issues">
                    <div class="issue-item">
                      <strong>Erratic Movement:</strong>
                      <ul>
                        <li>Clean optical sensor with compressed air</li>
                        <li>Check mouse pad surface quality</li>
                        <li>Test on different surfaces</li>
                        <li>Adjust DPI settings</li>
                      </ul>
                    </div>
                    
                    <div class="issue-item">
                      <strong>Double-clicking Problems:</strong>
                      <ul>
                        <li>Adjust double-click speed in settings</li>
                        <li>Clean micro-switch contacts</li>
                        <li>Test with different software</li>
                        <li>Replace if hardware failure confirmed</li>
                      </ul>
                    </div>
                    
                    <div class="issue-item">
                      <strong>Wireless Connectivity:</strong>
                      <ul>
                        <li>Check battery levels and replace</li>
                        <li>Re-pair device with receiver</li>
                        <li>Verify USB receiver placement</li>
                        <li>Check for interference sources</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="device-guide">
                  <h6>⌨️ Keyboard Diagnostics</h6>
                  <div class="common-issues">
                    <div class="issue-item">
                      <strong>Stuck or Unresponsive Keys:</strong>
                      <ul>
                        <li>Remove keycaps and clean debris</li>
                        <li>Use compressed air for deeper cleaning</li>
                        <li>Test key matrix with diagnostic software</li>
                        <li>Replace individual switches if mechanical</li>
                      </ul>
                    </div>
                    
                    <div class="issue-item">
                      <strong>Character Mapping Issues:</strong>
                      <ul>
                        <li>Check keyboard layout settings</li>
                        <li>Verify language input methods</li>
                        <li>Test with on-screen keyboard</li>
                        <li>Reset input preferences</li>
                      </ul>
                    </div>
                    
                    <div class="issue-item">
                      <strong>Key Repeat Problems:</strong>
                      <ul>
                        <li>Adjust repeat rate and delay</li>
                        <li>Clean key mechanisms</li>
                        <li>Check for stuck modifier keys</li>
                        <li>Test with different applications</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="device-guide">
                  <h6>👆 Touchpad Solutions</h6>
                  <div class="common-issues">
                    <div class="issue-item">
                      <strong>Sensitivity Issues:</strong>
                      <ul>
                        <li>Adjust sensitivity in system settings</li>
                        <li>Configure palm rejection</li>
                        <li>Update touchpad drivers</li>
                        <li>Calibrate touch response</li>
                      </ul>
                    </div>
                    
                    <div class="issue-item">
                      <strong>Gesture Recognition:</strong>
                      <ul>
                        <li>Enable gesture support in drivers</li>
                        <li>Configure multi-touch settings</li>
                        <li>Test gesture functionality</li>
                        <li>Reset touchpad preferences</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="printer-scanner-section">
            <h4>🖨️ Printer and Scanner Management</h4>
            
            <div class="printer-troubleshooting">
              <h5>Comprehensive Printer Diagnostic Framework</h5>
              
              <div class="troubleshooting-categories">
                <div class="trouble-category">
                  <h6>🔗 Connectivity Issues</h6>
                  <div class="solutions-grid">
                    <div class="solution-item">
                      <strong>USB Connection Problems:</strong>
                      <ul>
                        <li>Test different USB cables and ports</li>
                        <li>Check for driver conflicts</li>
                        <li>Verify printer power and ready status</li>
                        <li>Use USB 2.0 ports for compatibility</li>
                      </ul>
                    </div>
                    
                    <div class="solution-item">
                      <strong>Network Printing Issues:</strong>
                      <ul>
                        <li>Verify IP address configuration</li>
                        <li>Check network connectivity and ping tests</li>
                        <li>Configure firewall exceptions</li>
                        <li>Update network printer drivers</li>
                      </ul>
                    </div>
                    
                    <div class="solution-item">
                      <strong>Wireless Setup Problems:</strong>
                      <ul>
                        <li>Verify Wi-Fi credentials and signal strength</li>
                        <li>Use WPS setup when available</li>
                        <li>Check for network band compatibility</li>
                        <li>Reset network settings and reconfigure</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="trouble-category">
                  <h6>📄 Print Quality Issues</h6>
                  <div class="solutions-grid">
                    <div class="solution-item">
                      <strong>Text and Image Quality:</strong>
                      <ul>
                        <li>Perform print head alignment</li>
                        <li>Clean print heads and nozzles</li>
                        <li>Check print resolution settings</li>
                        <li>Replace low or empty cartridges</li>
                      </ul>
                    </div>
                    
                    <div class="solution-item">
                      <strong>Color Problems:</strong>
                      <ul>
                        <li>Calibrate color settings</li>
                        <li>Check individual color cartridges</li>
                        <li>Clean color print heads separately</li>
                        <li>Verify color management profiles</li>
                      </ul>
                    </div>
                    
                    <div class="solution-item">
                      <strong>Paper Handling:</strong>
                      <ul>
                        <li>Clear paper jams completely</li>
                        <li>Adjust paper guides properly</li>
                        <li>Use appropriate paper types</li>
                        <li>Clean paper feed rollers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="scanner-diagnostics">
              <h5>Scanner Troubleshooting Procedures</h5>
              
              <div class="scanner-issues">
                <div class="scanner-problem">
                  <h6>🔍 Detection and Recognition Issues</h6>
                  <ul>
                    <li><strong>Scanner Not Found:</strong> Check USB connections, install latest drivers, test with different software</li>
                    <li><strong>TWAIN Errors:</strong> Reinstall TWAIN drivers, check 32-bit vs 64-bit compatibility</li>
                    <li><strong>Software Conflicts:</strong> Test with built-in Windows Fax and Scan</li>
                    <li><strong>Permission Issues:</strong> Run scanning software as administrator</li>
                  </ul>
                </div>
                
                <div class="scanner-problem">
                  <h6>📷 Image Quality Problems</h6>
                  <ul>
                    <li><strong>Poor Scan Quality:</strong> Clean scanner glass, adjust resolution settings, calibrate scanner</li>
                    <li><strong>Color Accuracy:</strong> Use ICC color profiles, adjust color settings in software</li>
                    <li><strong>Streaks or Lines:</strong> Clean document feeder mechanism, inspect scanner lamp</li>
                    <li><strong>Slow Performance:</strong> Reduce resolution for drafts, close unnecessary applications</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="software-conflict-section">
            <h4>⚔️ Software Conflict Resolution</h4>
            
            <div class="conflict-analysis">
              <h5>Advanced Conflict Identification</h5>
              
              <div class="analysis-methods">
                <div class="method-card">
                  <h6>🔍 Event Log Analysis</h6>
                  <ul>
                    <li>Windows Event Viewer examination</li>
                    <li>Application and system log correlation</li>
                    <li>Error pattern identification</li>
                    <li>Timestamp analysis for conflict timing</li>
                  </ul>
                  
                  <div class="practical-example">
                    <strong>Example:</strong> Finding application crashes
                    <code>eventvwr.msc → Windows Logs → Application → Look for Error events</code>
                  </div>
                </div>
                
                <div class="method-card">
                  <h6>📊 Process Monitoring</h6>
                  <ul>
                    <li>Task Manager resource usage analysis</li>
                    <li>Process Explorer dependency mapping</li>
                    <li>Performance counter monitoring</li>
                    <li>Memory leak detection</li>
                  </ul>
                  
                  <div class="practical-example">
                    <strong>Tools:</strong> Process Explorer, Resource Monitor, Performance Toolkit
                  </div>
                </div>
                
                <div class="method-card">
                  <h6>🚀 Startup Analysis</h6>
                  <ul>
                    <li>MSConfig startup program review</li>
                    <li>Registry startup entry examination</li>
                    <li>Service dependency analysis</li>
                    <li>Boot time performance evaluation</li>
                  </ul>
                  
                  <div class="practical-example">
                    <strong>Command:</strong> <code>msconfig</code> → Startup tab → Selective startup testing
                  </div>
                </div>
              </div>
            </div>
            
            <div class="resolution-strategies">
              <h5>Systematic Conflict Resolution</h5>
              
              <div class="strategy-framework">
                <div class="resolution-step">
                  <div class="step-badge">Step 1</div>
                  <div class="step-details">
                    <h6>Isolation Testing</h6>
                    <p>Use Safe Mode and clean boot configurations to eliminate third-party interference</p>
                    <ul>
                      <li>Boot into Safe Mode with networking</li>
                      <li>Perform selective startup testing</li>
                      <li>Disable non-essential services</li>
                      <li>Test core functionality</li>
                    </ul>
                  </div>
                </div>
                
                <div class="resolution-step">
                  <div class="step-badge">Step 2</div>
                  <div class="step-details">
                    <h6>Compatibility Analysis</h6>
                    <p>Evaluate software compatibility with current system configuration</p>
                    <ul>
                      <li>Check Windows compatibility mode</li>
                      <li>Test in virtual machine environment</li>
                      <li>Verify system requirements</li>
                      <li>Update to compatible versions</li>
                    </ul>
                  </div>
                </div>
                
                <div class="resolution-step">
                  <div class="step-badge">Step 3</div>
                  <div class="step-details">
                    <h6>Dependency Management</h6>
                    <p>Resolve library conflicts and missing dependencies</p>
                    <ul>
                      <li>Update runtime libraries (.NET, Visual C++)</li>
                      <li>Resolve DLL conflicts</li>
                      <li>Install missing frameworks</li>
                      <li>Register required components</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
      },
      laboratory: {
        title: 'Laboratory Activities - Peripheral & Software Diagnostics',
        content: `
          <h3>🔬 Lab Activities: Comprehensive Peripheral & Software Testing</h3>
          
          <div class="lab-overview">
            <h4>📋 Laboratory Objectives:</h4>
            <ul>
              <li>Perform systematic input device testing and calibration</li>
              <li>Diagnose and resolve printer connectivity and quality issues</li>
              <li>Identify and resolve software conflicts using advanced tools</li>
              <li>Implement preventive software maintenance procedures</li>
            </ul>
          </div>

          <div class="lab-activity">
            <h4>Lab 1: Input Device Comprehensive Testing</h4>
            <p><strong>Duration:</strong> 45 minutes | <strong>Difficulty:</strong> Intermediate</p>
            
            <div class="lab-materials">
              <h5>🛠️ Required Materials:</h5>
              <ul>
                <li>Various input devices (wired/wireless mice, keyboards, touchpads)</li>
                <li>Multiple USB ports and adapters</li>
                <li>Input device testing software (KeyTweak, Mouse Tester)</li>
                <li>Wireless device receivers and batteries</li>
                <li>Cleaning supplies (compressed air, alcohol wipes)</li>
              </ul>
            </div>
            
            <div class="lab-procedure">
              <h5>📋 Detailed Procedure:</h5>
              <ol>
                <li><strong>Initial Assessment (10 minutes):</strong>
                  <ul>
                    <li>Test all devices on multiple computers</li>
                    <li>Document initial functionality and issues</li>
                    <li>Check Device Manager for driver status</li>
                    <li>Record baseline performance metrics</li>
                  </ul>
                </li>
                
                <li><strong>Diagnostic Testing (20 minutes):</strong>
                  <ul>
                    <li>Use input testing software for precision analysis</li>
                    <li>Test click accuracy and response times</li>
                    <li>Verify all keys and special functions</li>
                    <li>Check wireless range and interference</li>
                  </ul>
                </li>
                
                <li><strong>Cleaning and Maintenance (10 minutes):</strong>
                  <ul>
                    <li>Perform thorough device cleaning</li>
                    <li>Replace batteries in wireless devices</li>
                    <li>Lubricate mechanical components if applicable</li>
                    <li>Re-test functionality after maintenance</li>
                  </ul>
                </li>
                
                <li><strong>Documentation (5 minutes):</strong>
                  <ul>
                    <li>Create diagnostic report for each device</li>
                    <li>Document cleaning procedures performed</li>
                    <li>Record any hardware replacements needed</li>
                    <li>Provide maintenance recommendations</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>

          <div class="lab-activity">
            <h4>Lab 2: Printer Troubleshooting Workshop</h4>
            <p><strong>Duration:</strong> 60 minutes | <strong>Difficulty:</strong> Advanced</p>
            
            <div class="lab-materials">
              <h5>🛠️ Required Materials:</h5>
              <ul>
                <li>Inkjet and laser printers (various models)</li>
                <li>Multiple connection types (USB, network, wireless)</li>
                <li>Various paper types and sizes</li>
                <li>Print cartridges and maintenance kits</li>
                <li>Network cable tester and Wi-Fi analyzer</li>
                <li>Color calibration tools</li>
              </ul>
            </div>
            
            <div class="lab-procedure">
              <h5>📋 Comprehensive Procedure:</h5>
              <ol>
                <li><strong>Setup and Configuration (15 minutes):</strong>
                  <ul>
                    <li>Install printers using multiple connection methods</li>
                    <li>Configure network and wireless settings</li>
                    <li>Install appropriate drivers for each OS</li>
                    <li>Test basic printing functionality</li>
                  </ul>
                </li>
                
                <li><strong>Quality Assessment (20 minutes):</strong>
                  <ul>
                    <li>Print test pages and quality diagnostics</li>
                    <li>Perform color calibration procedures</li>
                    <li>Test different paper types and settings</li>
                    <li>Document print quality issues</li>
                  </ul>
                </li>
                
                <li><strong>Problem Simulation and Resolution (20 minutes):</strong>
                  <ul>
                    <li>Simulate common problems (jams, connectivity issues)</li>
                    <li>Practice head cleaning and alignment procedures</li>
                    <li>Troubleshoot network printing problems</li>
                    <li>Resolve driver conflicts and compatibility issues</li>
                  </ul>
                </li>
                
                <li><strong>Maintenance and Optimization (5 minutes):</strong>
                  <ul>
                    <li>Perform preventive maintenance tasks</li>
                    <li>Optimize print settings for efficiency</li>
                    <li>Configure automatic maintenance schedules</li>
                    <li>Document maintenance procedures</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>

          <div class="lab-activity">
            <h4>Lab 3: Software Conflict Resolution Simulation</h4>
            <p><strong>Duration:</strong> 90 minutes | <strong>Difficulty:</strong> Expert</p>
            
            <div class="lab-materials">
              <h5>🛠️ Required Materials:</h5>
              <ul>
                <li>Virtual machines with Windows installations</li>
                <li>Conflicting software packages for testing</li>
                <li>System monitoring tools (Process Monitor, Event Viewer)</li>
                <li>Driver packages (old and new versions)</li>
                <li>Registry editing tools</li>
                <li>System restore and backup utilities</li>
              </ul>
            </div>
            
            <div class="lab-procedure">
              <h5>📋 Advanced Procedure:</h5>
              <ol>
                <li><strong>Environment Preparation (15 minutes):</strong>
                  <ul>
                    <li>Create VM snapshots for rollback capability</li>
                    <li>Install baseline software configuration</li>
                    <li>Configure monitoring tools</li>
                    <li>Document initial system state</li>
                  </ul>
                </li>
                
                <li><strong>Conflict Introduction (20 minutes):</strong>
                  <ul>
                    <li>Install conflicting antivirus programs</li>
                    <li>Create driver version conflicts</li>
                    <li>Introduce incompatible software versions</li>
                    <li>Document symptoms and error messages</li>
                  </ul>
                </li>
                
                <li><strong>Systematic Diagnosis (30 minutes):</strong>
                  <ul>
                    <li>Use Event Viewer to identify error patterns</li>
                    <li>Monitor process behavior and resource usage</li>
                    <li>Trace system calls and file access</li>
                    <li>Correlate events with timeline analysis</li>
                  </ul>
                </li>
                
                <li><strong>Resolution Implementation (20 minutes):</strong>
                  <ul>
                    <li>Apply systematic troubleshooting methodology</li>
                    <li>Use safe mode and clean boot techniques</li>
                    <li>Resolve conflicts through selective removal</li>
                    <li>Verify system stability after fixes</li>
                  </ul>
                </li>
                
                <li><strong>Prevention Strategy (5 minutes):</strong>
                  <ul>
                    <li>Document lessons learned</li>
                    <li>Create prevention checklists</li>
                    <li>Establish monitoring procedures</li>
                    <li>Develop rapid response protocols</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>

          <div class="assessment-rubric">
            <h4>📊 Laboratory Assessment Rubric (Total: 100 points)</h4>
            <div class="rubric-breakdown">
              <div class="rubric-category">
                <h5>Safety and Preparation (20 points)</h5>
                <ul>
                  <li>Proper handling of electronic devices (5 pts)</li>
                  <li>Appropriate tool selection and usage (5 pts)</li>
                  <li>Workspace organization and safety (5 pts)</li>
                  <li>Data backup and system protection (5 pts)</li>
                </ul>
              </div>
              
              <div class="rubric-category">
                <h5>Diagnostic Skills (30 points)</h5>
                <ul>
                  <li>Systematic troubleshooting approach (10 pts)</li>
                  <li>Proper use of diagnostic tools (10 pts)</li>
                  <li>Accurate problem identification (10 pts)</li>
                </ul>
              </div>
              
              <div class="rubric-category">
                <h5>Technical Execution (30 points)</h5>
                <ul>
                  <li>Successful device testing and repair (10 pts)</li>
                  <li>Effective conflict resolution (10 pts)</li>
                  <li>Proper maintenance procedures (10 pts)</li>
                </ul>
              </div>
              
              <div class="rubric-category">
                <h5>Documentation and Analysis (20 points)</h5>
                <ul>
                  <li>Clear and accurate reporting (10 pts)</li>
                  <li>Logical analysis and conclusions (5 pts)</li>
                  <li>Preventive recommendations (5 pts)</li>
                </ul>
              </div>
            </div>
          </div>
        `
      },
      quiz: {
        title: 'Module Quiz - Peripherals & Software Issues',
        content: `
          <h3>📝 Assessment Quiz: Peripherals & Software Troubleshooting</h3>
          <p><strong>Instructions:</strong> Select the best answer for each question. You need 80% or higher to pass.</p>
          
          <div class="quiz-container">
            <div class="question">
              <p><strong>Question 1:</strong> What is the first step when troubleshooting an unresponsive wireless mouse?</p>
              <div class="quiz-options">
                <label><input type="radio" name="ps1" value="a"> Reinstall the mouse driver</label>
                <label><input type="radio" name="ps1" value="b"> Check the battery level and wireless connection</label>
                <label><input type="radio" name="ps1" value="c"> Replace the mouse immediately</label>
                <label><input type="radio" name="ps1" value="d"> Restart the computer</label>
              </div>
              <div class="question-explanation">
                <p><em>Always start with the most basic and common issues first.</em></p>
              </div>
            </div>
            
            <div class="question">
              <p><strong>Question 2:</strong> Which Windows tool provides the most comprehensive information about driver conflicts?</p>
              <div class="quiz-options">
                <label><input type="radio" name="ps2" value="a"> Task Manager</label>
                <label><input type="radio" name="ps2" value="b"> System Information</label>
                <label><input type="radio" name="ps2" value="c"> Device Manager</label>
                <label><input type="radio" name="ps2" value="d"> Event Viewer</label>
              </div>
              <div class="question-explanation">
                <p><em>This tool shows all hardware devices and their associated drivers with error indicators.</em></p>
              </div>
            </div>

            <div class="question">
              <p><strong>Question 3:</strong> When a printer produces faded output, what should be checked first?</p>
              <div class="quiz-options">
                <label><input type="radio" name="ps3" value="a"> Paper type settings</label>
                <label><input type="radio" name="ps3" value="b"> Print resolution</label>
                <label><input type="radio" name="ps3" value="c"> Ink or toner levels</label>
                <label><input type="radio" name="ps3" value="d"> Network connectivity</label>
              </div>
              <div class="question-explanation">
                <p><em>Faded output is typically a sign of insufficient ink or toner.</em></p>
              </div>
            </div>

            <div class="question">
              <p><strong>Question 4:</strong> What is the most effective method to identify software causing system startup delays?</p>
              <div class="quiz-options">
                <label><input type="radio" name="ps4" value="a"> Uninstall all recent programs</label>
                <label><input type="radio" name="ps4" value="b"> Use MSConfig to disable startup programs selectively</label>
                <label><input type="radio" name="ps4" value="c"> Reinstall the operating system</label>
                <label><input type="radio" name="ps4" value="d"> Run a virus scan</label>
              </div>
              <div class="question-explanation">
                <p><em>Selective testing allows you to isolate the problematic software systematically.</em></p>
              </div>
            </div>

            <div class="question">
              <p><strong>Question 5:</strong> Which command-line tool provides detailed information about all installed drivers?</p>
              <div class="quiz-options">
                <label><input type="radio" name="ps5" value="a"> systeminfo</label>
                <label><input type="radio" name="ps5" value="b"> driverquery</label>
                <label><input type="radio" name="ps5" value="c"> msinfo32</label>
                <label><input type="radio" name="ps5" value="d"> devmgmt.msc</label>
              </div>
              <div class="question-explanation">
                <p><em>This command provides comprehensive driver information including versions and locations.</em></p>
              </div>
            </div>
          </div>

          <div class="quiz-actions">
            <button onclick="checkPeripheralsQuiz()" class="btn-submit">Submit Quiz</button>
            <button onclick="resetPeripheralsQuiz()" class="btn-reset">Reset Answers</button>
          </div>
          
          <div id="quiz-results-peripherals" class="quiz-results" style="display: none;"></div>

          <script>
            function checkPeripheralsQuiz() {
              const answers = {
                ps1: 'b', // Check battery and wireless connection
                ps2: 'c', // Device Manager
                ps3: 'c', // Ink or toner levels
                ps4: 'b', // MSConfig selective startup
                ps5: 'b'  // driverquery command
              };
              
              let score = 0;
              let total = Object.keys(answers).length;
              let feedback = [];
              
              for (let question in answers) {
                const selected = document.querySelector('input[name="' + question + '"]:checked');
                if (selected && selected.value === answers[question]) {
                  score++;
                } else {
                  feedback.push('Question ' + question.slice(-1) + ': Incorrect');
                }
              }
              
              const percentage = Math.round((score / total) * 100);
              let grade = '';
              
              if (percentage >= 90) grade = 'Excellent';
              else if (percentage >= 80) grade = 'Good';
              else if (percentage >= 70) grade = 'Satisfactory';
              else grade = 'Needs Improvement';
              
              document.getElementById('quiz-results-peripherals').style.display = 'block';
              document.getElementById('quiz-results-peripherals').innerHTML = 
                '<div class="results-header">' +
                '<h4>Quiz Results</h4>' +
                '<p><strong>Score: ' + score + '/' + total + ' (' + percentage + '%) - ' + grade + '</strong></p>' +
                '<p><strong>Correct Answers:</strong> 1-b, 2-c, 3-c, 4-b, 5-b</p>' +
                '<div class="feedback">' + 
                  (feedback.length > 0 ? feedback.join('<br>') : 'All answers correct!') + 
                '</div>' +
                '</div>';
            }
            
            function resetPeripheralsQuiz() {
              const radios = document.querySelectorAll('input[name^="ps"]');
              radios.forEach(radio => radio.checked = false);
              document.getElementById('quiz-results-peripherals').style.display = 'none';
            }
          </script>
        `
      }
    },
    'tools-security': {
      overview: {
        title: 'Tools, Security & Performance',
        content: `
          <h3>🛡️ System Tools, Security Implementation, and Performance Optimization</h3>
          <p>This comprehensive module covers essential system utilities, cybersecurity implementation, and performance optimization techniques for maintaining robust and secure computer systems.</p>
          
          <div class="learning-objectives">
            <h4>📚 Learning Objectives:</h4>
            <ul>
              <li>Master advanced system diagnostic and maintenance tools</li>
              <li>Implement comprehensive cybersecurity measures and threat mitigation</li>
              <li>Optimize system performance through systematic analysis and tuning</li>
              <li>Design and execute backup and disaster recovery strategies</li>
              <li>Establish monitoring systems for proactive maintenance</li>
              <li>Apply industry best practices for enterprise system management</li>
            </ul>
          </div>
          
          <div class="security-framework">
            <h4>🔒 Security Framework Overview:</h4>
            <div class="framework-grid">
              <div class="framework-card">
                <h5>Prevention</h5>
                <ul>
                  <li>Firewall configuration and management</li>
                  <li>Antivirus and anti-malware deployment</li>
                  <li>User access control and authentication</li>
                  <li>System hardening and patch management</li>
                </ul>
              </div>
              
              <div class="framework-card">
                <h5>Detection</h5>
                <ul>
                  <li>Intrusion detection systems (IDS)</li>
                  <li>Security information and event management (SIEM)</li>
                  <li>Behavioral analysis and anomaly detection</li>
                  <li>Vulnerability scanning and assessment</li>
                </ul>
              </div>
              
              <div class="framework-card">
                <h5>Response</h5>
                <ul>
                  <li>Incident response procedures</li>
                  <li>Forensic analysis and evidence collection</li>
                  <li>System recovery and restoration</li>
                  <li>Post-incident analysis and improvement</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="performance-categories">
            <h4>⚡ Performance Optimization Areas:</h4>
            <div class="category-showcase">
              <div class="performance-card">
                <h5>System Resources</h5>
                <ul>
                  <li>CPU utilization optimization</li>
                  <li>Memory management and optimization</li>
                  <li>Storage performance tuning</li>
                  <li>Network bandwidth optimization</li>
                </ul>
              </div>
              
              <div class="performance-card">
                <h5>Application Performance</h5>
                <ul>
                  <li>Startup time optimization</li>
                  <li>Application response time tuning</li>
                  <li>Resource conflict resolution</li>
                  <li>Workload distribution and balancing</li>
                </ul>
              </div>
              
              <div class="performance-card">
                <h5>Preventive Maintenance</h5>
                <ul>
                  <li>Automated system maintenance</li>
                  <li>Predictive failure analysis</li>
                  <li>Capacity planning and scaling</li>
                  <li>Performance baseline establishment</li>
                </ul>
              </div>
            </div>
          </div>
        `
      },
      lessons: {
        title: 'Learning Materials - Week 6',
        content: `
          <h3>📖 Week 6: Advanced System Management</h3>
          
          <div class="lesson-objectives">
            <h4>Learning Objectives:</h4>
            <ul>
              <li>Deploy and configure advanced system diagnostic tools</li>
              <li>Implement multi-layered security architectures</li>
              <li>Execute comprehensive performance optimization strategies</li>
              <li>Design enterprise-grade backup and recovery systems</li>
              <li>Establish automated monitoring and alerting systems</li>
            </ul>
          </div>

          <div class="diagnostic-tools-section">
            <h4>🔧 Advanced System Diagnostic Tools</h4>
            
            <div class="tools-categories">
              <div class="tool-category-advanced">
                <h5>Built-in Windows Tools</h5>
                <div class="tools-showcase">
                  <div class="tool-item-detailed">
                    <h6>Performance Monitor (PerfMon)</h6>
                    <div class="tool-description">
                      <p><strong>Purpose:</strong> Real-time and historical performance monitoring</p>
                      <ul>
                        <li><strong>Data Collector Sets:</strong> Custom performance monitoring configurations</li>
                        <li><strong>Performance Counters:</strong> CPU, memory, disk, network metrics</li>
                        <li><strong>Alerts and Thresholds:</strong> Automated notification systems</li>
                        <li><strong>Report Generation:</strong> Comprehensive performance analysis</li>
                      </ul>
                      <div class="usage-example">
                        <strong>Command:</strong> <code>perfmon.msc</code> or <code>perfmon /res</code> for resource monitor
                      </div>
                    </div>
                  </div>
                  
                  <div class="tool-item-detailed">
                    <h6>Event Viewer (EventVwr)</h6>
                    <div class="tool-description">
                      <p><strong>Purpose:</strong> System event logging and analysis</p>
                      <ul>
                        <li><strong>Windows Logs:</strong> System, Application, Security, Setup</li>
                        <li><strong>Applications and Services:</strong> Application-specific logging</li>
                        <li><strong>Custom Views:</strong> Filtered event analysis</li>
                        <li><strong>Event Forwarding:</strong> Centralized log collection</li>
                      </ul>
                      <div class="usage-example">
                        <strong>Command:</strong> <code>eventvwr.msc</code> or <code>wevtutil</code> for command-line access
                      </div>
                    </div>
                  </div>
                  
                  <div class="tool-item-detailed">
                    <h6>System File Checker (SFC)</h6>
                    <div class="tool-description">
                      <p><strong>Purpose:</strong> System file integrity verification and repair</p>
                      <ul>
                        <li><strong>Integrity Scanning:</strong> Verify system file checksums</li>
                        <li><strong>Automatic Repair:</strong> Replace corrupted system files</li>
                        <li><strong>CBS Logging:</strong> Detailed scan and repair logs</li>
                        <li><strong>DISM Integration:</strong> Advanced image repair capabilities</li>
                      </ul>
                      <div class="usage-example">
                        <strong>Commands:</strong> <code>sfc /scannow</code>, <code>dism /online /cleanup-image /restorehealth</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="tool-category-advanced">
                <h5>Third-Party Professional Tools</h5>
                <div class="tools-showcase">
                  <div class="tool-item-detailed">
                    <h6>Sysinternals Suite</h6>
                    <div class="tool-description">
                      <p><strong>Purpose:</strong> Advanced system monitoring and troubleshooting</p>
                      <ul>
                        <li><strong>Process Explorer:</strong> Advanced task manager with process tree</li>
                        <li><strong>Process Monitor:</strong> Real-time file system and registry monitoring</li>
                        <li><strong>Autoruns:</strong> Startup program and service management</li>
                        <li><strong>TCPView:</strong> Network connection monitoring</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div class="tool-item-detailed">
                    <h6>Hardware Monitoring Tools</h6>
                    <div class="tool-description">
                      <p><strong>Purpose:</strong> Hardware health and performance monitoring</p>
                      <ul>
                        <li><strong>HWiNFO64:</strong> Comprehensive hardware information and monitoring</li>
                        <li><strong>CrystalDiskInfo:</strong> Storage device health monitoring</li>
                        <li><strong>MSI Afterburner:</strong> GPU monitoring and overclocking</li>
                        <li><strong>Core Temp:</strong> CPU temperature monitoring</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div class="tool-item-detailed">
                    <h6>Network Analysis Tools</h6>
                    <div class="tool-description">
                      <p><strong>Purpose:</strong> Network performance and security analysis</p>
                      <ul>
                        <li><strong>Wireshark:</strong> Network protocol analyzer</li>
                        <li><strong>Nmap:</strong> Network discovery and security auditing</li>
                        <li><strong>Netstat:</strong> Network connection and routing table display</li>
                        <li><strong>PingPlotter:</strong> Network latency and path analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="security-implementation-section">
            <h4>🛡️ Comprehensive Security Implementation</h4>
            
            <div class="security-layers">
              <h5>Multi-Layered Security Architecture</h5>
              
              <div class="security-layer">
                <div class="layer-header">
                  <h6>🌐 Network Security Layer</h6>
                </div>
                <div class="layer-content">
                  <div class="security-measures">
                    <div class="measure-category">
                      <h7>Firewall Configuration</h7>
                      <ul>
                        <li><strong>Windows Defender Firewall:</strong> Advanced configuration with custom rules</li>
                        <li><strong>Inbound Rules:</strong> Application and port-specific access control</li>
                        <li><strong>Outbound Rules:</strong> Egress traffic filtering and monitoring</li>
                        <li><strong>Connection Security Rules:</strong> IPSec implementation</li>
                      </ul>
                    </div>
                    
                    <div class="measure-category">
                      <h7>Network Monitoring</h7>
                      <ul>
                        <li><strong>Traffic Analysis:</strong> Bandwidth utilization and pattern analysis</li>
                        <li><strong>Intrusion Detection:</strong> Anomaly detection and threat identification</li>
                        <li><strong>Port Scanning Detection:</strong> Unauthorized access attempt monitoring</li>
                        <li><strong>DNS Monitoring:</strong> Malicious domain blocking and filtering</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="security-layer">
                <div class="layer-header">
                  <h6>💻 Endpoint Security Layer</h6>
                </div>
                <div class="layer-content">
                  <div class="security-measures">
                    <div class="measure-category">
                      <h7>Antivirus and Anti-Malware</h7>
                      <ul>
                        <li><strong>Real-time Protection:</strong> Continuous threat monitoring and blocking</li>
                        <li><strong>Behavioral Analysis:</strong> Zero-day threat detection</li>
                        <li><strong>Cloud Intelligence:</strong> Global threat intelligence integration</li>
                        <li><strong>Quarantine Management:</strong> Threat isolation and analysis</li>
                      </ul>
                    </div>
                    
                    <div class="measure-category">
                      <h7>System Hardening</h7>
                      <ul>
                        <li><strong>User Account Control (UAC):</strong> Privilege escalation protection</li>
                        <li><strong>BitLocker Encryption:</strong> Full disk encryption implementation</li>
                        <li><strong>Windows Defender:</strong> Integrated security suite configuration</li>
                        <li><strong>Group Policy Security:</strong> Enterprise security policy enforcement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="security-layer">
                <div class="layer-header">
                  <h6>👤 Access Control Layer</h6>
                </div>
                <div class="layer-content">
                  <div class="security-measures">
                    <div class="measure-category">
                      <h7>Authentication Systems</h7>
                      <ul>
                        <li><strong>Multi-Factor Authentication:</strong> Something you know, have, are</li>
                        <li><strong>Password Policies:</strong> Complexity and rotation requirements</li>
                        <li><strong>Account Lockout:</strong> Brute force attack protection</li>
                        <li><strong>Single Sign-On (SSO):</strong> Centralized authentication management</li>
                      </ul>
                    </div>
                    
                    <div class="measure-category">
                      <h7>Authorization Controls</h7>
                      <ul>
                        <li><strong>Role-Based Access Control (RBAC):</strong> Permission management</li>
                        <li><strong>Principle of Least Privilege:</strong> Minimal access rights</li>
                        <li><strong>Access Auditing:</strong> Permission usage monitoring</li>
                        <li><strong>Privileged Account Management:</strong> Administrative access control</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="performance-optimization-section">
            <h4>⚡ Advanced Performance Optimization</h4>
            
            <div class="optimization-methodology">
              <h5>Systematic Performance Analysis</h5>
              
              <div class="analysis-framework">
                <div class="analysis-step">
                  <div class="step-indicator">1</div>
                  <div class="step-details">
                    <h6>Baseline Establishment</h6>
                    <p>Create comprehensive performance baselines for comparison and trend analysis</p>
                    <ul>
                      <li><strong>Resource Utilization:</strong> CPU, memory, disk, network baselines</li>
                      <li><strong>Application Performance:</strong> Response times and throughput metrics</li>
                      <li><strong>System Boot Time:</strong> Startup performance measurement</li>
                      <li><strong>User Experience Metrics:</strong> Response time and interaction analysis</li>
                    </ul>
                  </div>
                </div>
                
                <div class="analysis-step">
                  <div class="step-indicator">2</div>
                  <div class="step-details">
                    <h6>Bottleneck Identification</h6>
                    <p>Systematic identification of performance limitations and constraints</p>
                    <ul>
                      <li><strong>CPU Bottlenecks:</strong> Process scheduling and thread contention</li>
                      <li><strong>Memory Constraints:</strong> RAM usage patterns and paging activity</li>
                      <li><strong>Storage Limitations:</strong> I/O wait times and queue depths</li>
                      <li><strong>Network Congestion:</strong> Bandwidth utilization and latency issues</li>
                    </ul>
                  </div>
                </div>
                
                <div class="analysis-step">
                  <div class="step-indicator">3</div>
                  <div class="step-details">
                    <h6>Optimization Implementation</h6>
                    <p>Apply targeted optimizations based on analysis results</p>
                    <ul>
                      <li><strong>System Configuration:</strong> Registry and service optimization</li>
                      <li><strong>Resource Allocation:</strong> Priority and affinity management</li>
                      <li><strong>Storage Optimization:</strong> Defragmentation and SSD optimization</li>
                      <li><strong>Network Tuning:</strong> TCP/IP stack and adapter optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="optimization-techniques">
              <h5>Advanced Optimization Techniques</h5>
              
              <div class="technique-categories">
                <div class="technique-category">
                  <h6>🧠 Memory Optimization</h6>
                  <ul>
                    <li><strong>Virtual Memory Management:</strong> Paging file optimization</li>
                    <li><strong>Memory Compression:</strong> Windows memory compression features</li>
                    <li><strong>Superfetch/Prefetch:</strong> Intelligent caching optimization</li>
                    <li><strong>Memory Pool Monitoring:</strong> Kernel and user space analysis</li>
                  </ul>
                </div>
                
                <div class="technique-category">
                  <h6>💾 Storage Performance</h6>
                  <ul>
                    <li><strong>SSD Optimization:</strong> TRIM, over-provisioning, wear leveling</li>
                    <li><strong>File System Tuning:</strong> NTFS cluster size and indexing</li>
                    <li><strong>Disk Scheduling:</strong> I/O prioritization and queuing</li>
                    <li><strong>Storage Tiering:</strong> Hot/cold data management</li>
                  </ul>
                </div>
                
                <div class="technique-category">
                  <h6>🌐 Network Performance</h6>
                  <ul>
                    <li><strong>TCP Window Scaling:</strong> Bandwidth-delay product optimization</li>
                    <li><strong>Quality of Service (QoS):</strong> Traffic prioritization</li>
                    <li><strong>Network Adapter Tuning:</strong> Buffer sizes and offloading</li>
                    <li><strong>DNS Optimization:</strong> Caching and response time improvement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="backup-recovery-section">
            <h4>💾 Enterprise Backup and Recovery Systems</h4>
            
            <div class="backup-strategy">
              <h5>3-2-1 Backup Strategy Implementation</h5>
              <div class="strategy-explanation">
                <div class="strategy-rule">
                  <div class="rule-number">3</div>
                  <div class="rule-description">
                    <h6>Three Copies of Data</h6>
                    <p>Maintain three copies of critical data: one primary and two backups</p>
                  </div>
                </div>
                
                <div class="strategy-rule">
                  <div class="rule-number">2</div>
                  <div class="rule-description">
                    <h6>Two Different Media Types</h6>
                    <p>Store backups on two different storage media types for redundancy</p>
                  </div>
                </div>
                
                <div class="strategy-rule">
                  <div class="rule-number">1</div>
                  <div class="rule-description">
                    <h6>One Offsite Copy</h6>
                    <p>Keep at least one backup copy in a geographically separate location</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="backup-technologies">
              <h5>Advanced Backup Technologies</h5>
              <div class="backup-types">
                <div class="backup-type">
                  <h6>💽 File-Level Backup</h6>
                  <ul>
                    <li><strong>Incremental Backup:</strong> Changes since last backup</li>
                    <li><strong>Differential Backup:</strong> Changes since last full backup</li>
                    <li><strong>Synthetic Full:</strong> Reconstructed full backups</li>
                    <li><strong>Deduplication:</strong> Eliminate redundant data</li>
                  </ul>
                </div>
                
                <div class="backup-type">
                  <h6>🖥️ Image-Based Backup</h6>
                  <ul>
                    <li><strong>System Image:</strong> Complete system state capture</li>
                    <li><strong>Bare-Metal Recovery:</strong> Full system restoration</li>
                    <li><strong>Volume Shadow Copy:</strong> Live system backup</li>
                    <li><strong>P2V Migration:</strong> Physical to virtual conversion</li>
                  </ul>
                </div>
                
                <div class="backup-type">
                  <h6>☁️ Cloud Integration</h6>
                  <ul>
                    <li><strong>Hybrid Cloud:</strong> Local and cloud storage combination</li>
                    <li><strong>Cloud Replication:</strong> Real-time data synchronization</li>
                    <li><strong>Disaster Recovery as a Service:</strong> Cloud-based DR</li>
                    <li><strong>Archive Management:</strong> Long-term retention strategies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        `
      },
      laboratory: {
        title: 'Laboratory Activities - Advanced System Management',
        content: `
          <h3>🔬 Lab Activities: Comprehensive System Management</h3>
          
          <div class="lab-overview">
            <h4>📋 Laboratory Objectives:</h4>
            <ul>
              <li>Deploy and configure enterprise-grade monitoring systems</li>
              <li>Implement multi-layered security architectures</li>
              <li>Execute comprehensive performance optimization</li>
              <li>Design and test backup and disaster recovery systems</li>
            </ul>
          </div>

          <div class="lab-activity">
            <h4>Lab 1: Advanced System Monitoring and Diagnostics</h4>
            <p><strong>Duration:</strong> 90 minutes | <strong>Difficulty:</strong> Expert</p>
            
            <div class="lab-materials">
              <h5>🛠️ Required Materials:</h5>
              <ul>
                <li>Windows Server/Workstation environments</li>
                <li>Sysinternals Suite tools</li>
                <li>Performance monitoring software (HWiNFO64, CrystalDiskInfo)</li>
                <li>Network analysis tools (Wireshark, Nmap)</li>
                <li>Stress testing utilities (Prime95, MemTest86)</li>
                <li>Virtual machines for isolated testing</li>
              </ul>
            </div>
            
            <div class="lab-procedure">
              <h5>📋 Comprehensive Procedure:</h5>
              <ol>
                <li><strong>Baseline Establishment (20 minutes):</strong>
                  <ul>
                    <li>Configure Performance Monitor data collector sets</li>
                    <li>Establish baseline measurements for CPU, memory, disk, network</li>
                    <li>Document normal operating parameters</li>
                    <li>Create automated monitoring alerts and thresholds</li>
                  </ul>
                </li>
                
                <li><strong>Advanced Diagnostics (30 minutes):</strong>
                  <ul>
                    <li>Use Process Explorer for detailed process analysis</li>
                    <li>Monitor file system and registry activity with Process Monitor</li>
                    <li>Analyze network traffic with Wireshark and TCPView</li>
                    <li>Perform hardware health assessment with HWiNFO64</li>
                  </ul>
                </li>
                
                <li><strong>Stress Testing and Analysis (25 minutes):</strong>
                  <ul>
                    <li>Execute CPU stress tests with Prime95</li>
                    <li>Perform memory testing with MemTest86</li>
                    <li>Test storage performance with CrystalDiskMark</li>
                    <li>Monitor system behavior under load</li>
                  </ul>
                </li>
                
                <li><strong>Report Generation and Analysis (15 minutes):</strong>
                  <ul>
                    <li>Generate comprehensive performance reports</li>
                    <li>Identify performance bottlenecks and optimization opportunities</li>
                    <li>Document findings and recommendations</li>
                    <li>Create action plans for performance improvements</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>

          <div class="lab-activity">
            <h4>Lab 2: Security Implementation and Hardening</h4>
            <p><strong>Duration:</strong> 120 minutes | <strong>Difficulty:</strong> Expert</p>
            
            <div class="lab-materials">
              <h5>🛠️ Required Materials:</h5>
              <ul>
                <li>Windows domain environment or standalone systems</li>
                <li>Group Policy Management Console</li>
                <li>Security scanning tools (Nessus, OpenVAS)</li>
                <li>Antivirus management consoles</li>
                <li>Network security tools (pfSense, Windows Firewall)</li>
                <li>Penetration testing tools (Metasploit, Nmap)</li>
              </ul>
            </div>
            
            <div class="lab-procedure">
              <h5>📋 Security Implementation Procedure:</h5>
              <ol>
                <li><strong>Security Assessment (30 minutes):</strong>
                  <ul>
                    <li>Perform vulnerability scanning with security tools</li>
                    <li>Analyze current security posture and identify weaknesses</li>
                    <li>Document security gaps and risk assessment</li>
                    <li>Create security improvement roadmap</li>
                  </ul>
                </li>
                
                <li><strong>System Hardening (40 minutes):</strong>
                  <ul>
                    <li>Configure Windows Defender Firewall with advanced rules</li>
                    <li>Implement User Account Control (UAC) policies</li>
                    <li>Configure BitLocker disk encryption</li>
                    <li>Set up Group Policy security templates</li>
                  </ul>
                </li>
                
                <li><strong>Access Control Implementation (30 minutes):</strong>
                  <ul>
                    <li>Configure multi-factor authentication</li>
                    <li>Implement role-based access control (RBAC)</li>
                    <li>Set up password policies and account lockout</li>
                    <li>Configure audit policies for security monitoring</li>
                  </ul>
                </li>
                
                <li><strong>Security Testing and Validation (20 minutes):</strong>
                  <ul>
                    <li>Perform penetration testing with ethical hacking tools</li>
                    <li>Test firewall rules and access controls</li>
                    <li>Validate security implementations</li>
                    <li>Document security test results and compliance status</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>

          <div class="lab-activity">
            <h4>Lab 3: Performance Optimization and Tuning</h4>
            <p><strong>Duration:</strong> 100 minutes | <strong>Difficulty:</strong> Advanced</p>
            
            <div class="lab-materials">
              <h5>🛠️ Required Materials:</h5>
              <ul>
                <li>Test systems with various performance characteristics</li>
                <li>Benchmarking software (3DMark, CineBench, CrystalDiskMark)</li>
                <li>Registry editing tools (RegEdit, Group Policy Editor)</li>
                <li>System optimization utilities</li>
                <li>Network testing tools (iPerf3, PingPlotter)</li>
                <li>Storage optimization tools (SSD optimization utilities)</li>
              </ul>
            </div>
            
            <div class="lab-procedure">
              <h5>📋 Optimization Procedure:</h5>
              <ol>
                <li><strong>Performance Analysis (25 minutes):</strong>
                  <ul>
                    <li>Run comprehensive system benchmarks</li>
                    <li>Identify performance bottlenecks using monitoring tools</li>
                    <li>Analyze resource utilization patterns</li>
                    <li>Document baseline performance metrics</li>
                  </ul>
                </li>
                
                <li><strong>System Optimization (40 minutes):</strong>
                  <ul>
                    <li>Optimize startup programs and services</li>
                    <li>Configure virtual memory and paging files</li>
                    <li>Tune network adapter settings</li>
                    <li>Optimize storage systems (SSD TRIM, defragmentation)</li>
                  </ul>
                </li>
                
                <li><strong>Registry and Policy Optimization (20 minutes):</strong>
                  <ul>
                    <li>Apply performance-related registry modifications</li>
                    <li>Configure Group Policy performance settings</li>
                    <li>Optimize visual effects and animations</li>
                    <li>Set processor scheduling and memory management</li>
                  </ul>
                </li>
                
                <li><strong>Validation and Testing (15 minutes):</strong>
                  <ul>
                    <li>Re-run benchmarks to measure improvements</li>
                    <li>Validate system stability after optimizations</li>
                    <li>Document performance gains and changes</li>
                    <li>Create optimization maintenance procedures</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>

          <div class="lab-activity">
            <h4>Lab 4: Backup and Disaster Recovery Implementation</h4>
            <p><strong>Duration:</strong> 80 minutes | <strong>Difficulty:</strong> Advanced</p>
            
            <div class="lab-materials">
              <h5>🛠️ Required Materials:</h5>
              <ul>
                <li>Multiple storage devices (USB, external drives, network storage)</li>
                <li>Backup software (Windows Backup, Veeam, Acronis)</li>
                <li>Virtual machines for recovery testing</li>
                <li>Cloud storage accounts (OneDrive, Google Drive, AWS)</li>
                <li>Network attached storage (NAS) or file server</li>
                <li>Recovery boot media (Windows PE, Linux rescue disks)</li>
              </ul>
            </div>
            
            <div class="lab-procedure">
              <h5>📋 Backup and Recovery Procedure:</h5>
              <ol>
                <li><strong>Backup Strategy Design (20 minutes):</strong>
                  <ul>
                    <li>Implement 3-2-1 backup strategy</li>
                    <li>Configure automated full and incremental backups</li>
                    <li>Set up cloud backup synchronization</li>
                    <li>Create backup scheduling and retention policies</li>
                  </ul>
                </li>
                
                <li><strong>System Imaging and Recovery (30 minutes):</strong>
                  <ul>
                    <li>Create complete system images</li>
                    <li>Test bare-metal recovery procedures</li>
                    <li>Configure Volume Shadow Copy Service</li>
                    <li>Implement file-level recovery options</li>
                  </ul>
                </li>
                
                <li><strong>Disaster Recovery Testing (20 minutes):</strong>
                  <ul>
                    <li>Simulate system failures and data loss scenarios</li>
                    <li>Execute recovery procedures from various backup types</li>
                    <li>Test recovery time objectives (RTO) and recovery point objectives (RPO)</li>
                    <li>Validate data integrity after recovery</li>
                  </ul>
                </li>
                
                <li><strong>Documentation and Procedures (10 minutes):</strong>
                  <ul>
                    <li>Create detailed disaster recovery procedures</li>
                    <li>Document backup verification processes</li>
                    <li>Establish monitoring and alerting for backup systems</li>
                    <li>Create business continuity plans</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>

          <div class="assessment-rubric">
            <h4>📊 Laboratory Assessment Rubric (Total: 100 points)</h4>
            <div class="rubric-comprehensive">
              <div class="rubric-section">
                <h5>Technical Proficiency (40 points)</h5>
                <ul>
                  <li>Advanced tool utilization and configuration (15 pts)</li>
                  <li>Security implementation effectiveness (15 pts)</li>
                  <li>Performance optimization results (10 pts)</li>
                </ul>
              </div>
              
              <div class="rubric-section">
                <h5>Problem-Solving and Analysis (30 points)</h5>
                <ul>
                  <li>Systematic diagnostic approach (10 pts)</li>
                  <li>Root cause analysis accuracy (10 pts)</li>
                  <li>Solution effectiveness and innovation (10 pts)</li>
                </ul>
              </div>
              
              <div class="rubric-section">
                <h5>Documentation and Communication (20 points)</h5>
                <ul>
                  <li>Comprehensive technical documentation (10 pts)</li>
                  <li>Clear procedure documentation (5 pts)</li>
                  <li>Professional presentation of findings (5 pts)</li>
                </ul>
              </div>
              
              <div class="rubric-section">
                <h5>Safety and Professional Practice (10 points)</h5>
                <ul>
                  <li>Data protection and backup procedures (5 pts)</li>
                  <li>Ethical considerations and compliance (5 pts)</li>
                </ul>
              </div>
            </div>
          </div>
        `
      },
      quiz: {
        title: 'Module Quiz - Tools, Security & Performance',
        content: `
          <h3>📝 Comprehensive Assessment: System Management Excellence</h3>
          <p><strong>Instructions:</strong> This advanced assessment covers tools, security, and performance optimization. You need 80% or higher to pass.</p>
          
          <div class="quiz-container">
            <div class="question">
              <p><strong>Question 1:</strong> Which Performance Monitor feature allows you to create custom monitoring configurations for specific scenarios?</p>
              <div class="quiz-options">
                <label><input type="radio" name="ts1" value="a"> Performance Counters</label>
                <label><input type="radio" name="ts1" value="b"> Data Collector Sets</label>
                <label><input type="radio" name="ts1" value="c"> Event Traces</label>
                <label><input type="radio" name="ts1" value="d"> Resource Monitor</label>
              </div>
              <div class="question-explanation">
                <p><em>This feature enables custom performance monitoring configurations for specific analysis needs.</em></p>
              </div>
            </div>
            
            <div class="question">
              <p><strong>Question 2:</strong> In the 3-2-1 backup strategy, what does the "1" represent?</p>
              <div class="quiz-options">
                <label><input type="radio" name="ts2" value="a"> One primary storage device</label>
                <label><input type="radio" name="ts2" value="b"> One backup software solution</label>
                <label><input type="radio" name="ts2" value="c"> One offsite backup copy</label>
                <label><input type="radio" name="ts2" value="d"> One recovery testing per month</label>
              </div>
              <div class="question-explanation">
                <p><em>This ensures geographic separation for disaster recovery protection.</em></p>
              </div>
            </div>

            <div class="question">
              <p><strong>Question 3:</strong> Which Windows security feature provides full disk encryption to protect data at rest?</p>
              <div class="quiz-options">
                <label><input type="radio" name="ts3" value="a"> Windows Defender</label>
                <label><input type="radio" name="ts3" value="b"> User Account Control (UAC)</label>
                <label><input type="radio" name="ts3" value="c"> BitLocker</label>
                <label><input type="radio" name="ts3" value="d"> Windows Firewall</label>
              </div>
              <div class="question-explanation">
                <p><em>This encryption technology protects data even if the physical device is compromised.</em></p>
              </div>
            </div>

            <div class="question">
              <p><strong>Question 4:</strong> What is the primary purpose of establishing performance baselines?</p>
              <div class="quiz-options">
                <label><input type="radio" name="ts4" value="a"> To increase system speed immediately</label>
                <label><input type="radio" name="ts4" value="b"> To provide comparison points for future analysis</label>
                <label><input type="radio" name="ts4" value="c"> To reduce memory usage</label>
                <label><input type="radio" name="ts4" value="d"> To eliminate all system errors</label>
              </div>
              <div class="question-explanation">
                <p><em>Baselines provide reference points to measure changes and identify performance trends.</em></p>
              </div>
            </div>

            <div class="question">
              <p><strong>Question 5:</strong> Which Sysinternals tool provides real-time monitoring of file system and registry activity?</p>
              <div class="quiz-options">
                <label><input type="radio" name="ts5" value="a"> Process Explorer</label>
                <label><input type="radio" name="ts5" value="b"> Process Monitor</label>
                <label><input type="radio" name="ts5" value="c"> Autoruns</label>
                <label><input type="radio" name="ts5" value="d"> TCPView</label>
              </div>
              <div class="question-explanation">
                <p><em>This tool captures detailed file system and registry access information in real-time.</em></p>
              </div>
            </div>
            
            <div class="question">
              <p><strong>Question 6:</strong> What is the principle of least privilege in access control?</p>
              <div class="quiz-options">
                <label><input type="radio" name="ts6" value="a"> Give users maximum access for convenience</label>
                <label><input type="radio" name="ts6" value="b"> Provide only the minimum access rights necessary for job functions</label>
                <label><input type="radio" name="ts6" value="c"> Grant administrative access to all users</label>
                <label><input type="radio" name="ts6" value="d"> Allow unlimited access during business hours</label>
              </div>
              <div class="question-explanation">
                <p><em>This security principle minimizes potential damage from compromised accounts.</em></p>
              </div>
            </div>
            
            <div class="question">
              <p><strong>Question 7:</strong> Which optimization technique is specifically beneficial for SSD performance?</p>
              <div class="quiz-options">
                <label><input type="radio" name="ts7" value="a"> Defragmentation</label>
                <label><input type="radio" name="ts7" value="b"> TRIM command</label>
                <label><input type="radio" name="ts7" value="c"> Disk compression</label>
                <label><input type="radio" name="ts7" value="d"> Registry cleanup</label>
              </div>
              <div class="question-explanation">
                <p><em>This command helps maintain SSD performance by managing deleted data blocks.</em></p>
              </div>
            </div>
          </div>

          <div class="quiz-actions">
            <button onclick="checkToolsSecurityQuiz()" class="btn-submit">Submit Quiz</button>
            <button onclick="resetToolsSecurityQuiz()" class="btn-reset">Reset Answers</button>
          </div>
          
          <div id="quiz-results-tools-security" class="quiz-results" style="display: none;"></div>

          <script>
            function checkToolsSecurityQuiz() {
              const answers = {
                ts1: 'b', // Data Collector Sets
                ts2: 'c', // One offsite backup copy
                ts3: 'c', // BitLocker
                ts4: 'b', // Provide comparison points for future analysis
                ts5: 'b', // Process Monitor
                ts6: 'b', // Provide only minimum access rights necessary
                ts7: 'b'  // TRIM command
              };
              
              let score = 0;
              let total = Object.keys(answers).length;
              let feedback = [];
              
              for (let question in answers) {
                const selected = document.querySelector('input[name="' + question + '"]:checked');
                if (selected && selected.value === answers[question]) {
                  score++;
                } else {
                  feedback.push('Question ' + question.slice(-1) + ': Incorrect');
                }
              }
              
              const percentage = Math.round((score / total) * 100);
              let grade = '';
              
              if (percentage >= 95) grade = 'Outstanding';
              else if (percentage >= 90) grade = 'Excellent';
              else if (percentage >= 85) grade = 'Very Good';
              else if (percentage >= 80) grade = 'Good';
              else if (percentage >= 75) grade = 'Satisfactory';
              else grade = 'Needs Improvement';
              
              document.getElementById('quiz-results-tools-security').style.display = 'block';
              document.getElementById('quiz-results-tools-security').innerHTML = 
                '<div class="results-header">' +
                '<h4>📊 Advanced Assessment Results</h4>' +
                '<p><strong>Score: ' + score + '/' + total + ' (' + percentage + '%) - ' + grade + '</strong></p>' +
                '<p><strong>Correct Answers:</strong> 1-b, 2-c, 3-c, 4-b, 5-b, 6-b, 7-b</p>' +
                '<div class="detailed-feedback">' +
                  '<h5>Performance Analysis:</h5>' +
                  '<ul>' +
                    '<li><strong>Tools Mastery:</strong> ' + (percentage >= 80 ? 'Proficient' : 'Needs Development') + '</li>' +
                    '<li><strong>Security Knowledge:</strong> ' + (percentage >= 85 ? 'Advanced' : 'Developing') + '</li>' +
                    '<li><strong>Optimization Skills:</strong> ' + (percentage >= 90 ? 'Expert Level' : 'Progressing') + '</li>' +
                  '</ul>' +
                '</div>' +
                '<div class="feedback">' + 
                  (feedback.length > 0 ? feedback.join('<br>') : '🎉 Perfect Score! Outstanding mastery of advanced system management concepts!') + 
                '</div>' +
                '</div>';
            }
            
            function resetToolsSecurityQuiz() {
              const radios = document.querySelectorAll('input[name^="ts"]');
              radios.forEach(radio => radio.checked = false);
              document.getElementById('quiz-results-tools-security').style.display = 'none';
            }
          </script>
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
      ],
      'monitor-internal': [
        {
          id: 'display-technology-comparison',
          title: 'Display Technologies Deep Dive',
          content: `
            <div class="display-tech-analysis">
              <h4>🔬 Display Panel Technologies Comparison</h4>
              
              <div class="tech-matrix">
                <table class="comparison-table">
                  <thead>
                    <tr>
                      <th>Technology</th>
                      <th>Response Time</th>
                      <th>Color Accuracy</th>
                      <th>Viewing Angles</th>
                      <th>Contrast Ratio</th>
                      <th>Common Issues</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>TN (Twisted Nematic)</strong></td>
                      <td>1ms (Excellent)</td>
                      <td>Fair</td>
                      <td>Poor</td>
                      <td>1000:1</td>
                      <td>Color shift, limited viewing angles</td>
                    </tr>
                    <tr>
                      <td><strong>IPS (In-Plane Switching)</strong></td>
                      <td>4-5ms (Good)</td>
                      <td>Excellent</td>
                      <td>Excellent</td>
                      <td>1300:1</td>
                      <td>IPS glow, slower response</td>
                    </tr>
                    <tr>
                      <td><strong>VA (Vertical Alignment)</strong></td>
                      <td>3-4ms (Good)</td>
                      <td>Good</td>
                      <td>Good</td>
                      <td>3000:1</td>
                      <td>Black crush, ghosting</td>
                    </tr>
                    <tr>
                      <td><strong>OLED</strong></td>
                      <td>0.1ms (Perfect)</td>
                      <td>Excellent</td>
                      <td>Perfect</td>
                      <td>∞:1</td>
                      <td>Burn-in, blue degradation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div class="troubleshooting-matrix">
                <h5>🛠️ Technology-Specific Troubleshooting</h5>
                
                <div class="tech-troubleshooting">
                  <h6>TN Panel Issues:</h6>
                  <ul>
                    <li><strong>Color Banding:</strong> Check color depth settings (8-bit vs 6-bit+FRC)</li>
                    <li><strong>Viewing Angle Problems:</strong> Adjust monitor position, consider panel limitations</li>
                    <li><strong>Ghosting:</strong> Enable overdrive settings, check response time modes</li>
                  </ul>
                  
                  <h6>IPS Panel Issues:</h6>
                  <ul>
                    <li><strong>IPS Glow:</strong> Normal characteristic, adjust brightness and viewing angle</li>
                    <li><strong>Backlight Bleeding:</strong> Check for manufacturing defects, RMA if severe</li>
                    <li><strong>Input Lag:</strong> Disable image processing features, use game mode</li>
                  </ul>
                  
                  <h6>OLED Panel Issues:</h6>
                  <ul>
                    <li><strong>Burn-in Prevention:</strong> Enable pixel shift, use screensavers, vary content</li>
                    <li><strong>Color Degradation:</strong> Run panel refresh cycles, monitor usage patterns</li>
                    <li><strong>Uniformity Issues:</strong> Check for panel aging, calibrate regularly</li>
                  </ul>
                </div>
              </div>
            </div>
          `
        },
        {
          id: 'graphics-card-diagnostics',
          title: 'Advanced Graphics Card Diagnostics',
          content: `
            <div class="gpu-diagnostic-guide">
              <h4>🎮 Comprehensive GPU Troubleshooting Framework</h4>
              
              <div class="diagnostic-flowchart">
                <h5>🔍 GPU Problem Decision Tree</h5>
                <div class="flowchart">
                  <div class="decision-node">
                    <strong>Graphics Problem Detected</strong>
                    <div class="branches">
                      <div class="branch">
                        <span class="condition">Display Output?</span>
                        <div class="result hardware">Hardware Issue</div>
                        <ul>
                          <li>Check power connections</li>
                          <li>Reseat GPU</li>
                          <li>Test PSU capacity</li>
                          <li>Check PCIe slot</li>
                        </ul>
                      </div>
                      <div class="branch">
                        <span class="condition">Driver Issues?</span>
                        <div class="result software">Software Issue</div>
                        <ul>
                          <li>Use DDU to clean drivers</li>
                          <li>Install latest drivers</li>
                          <li>Check Windows updates</li>
                          <li>Test in safe mode</li>
                        </ul>
                      </div>
                      <div class="branch">
                        <span class="condition">Performance Problems?</span>
                        <div class="result thermal">Thermal/Power Issue</div>
                        <ul>
                          <li>Monitor temperatures</li>
                          <li>Check cooling system</li>
                          <li>Verify power delivery</li>
                          <li>Test stability</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="gpu-testing-protocol">
                <h5>📊 Systematic GPU Testing Protocol</h5>
                
                <div class="test-phase">
                  <h6>Phase 1: Visual and Physical Inspection</h6>
                  <ul>
                    <li><strong>Physical Damage:</strong> Check for burnt components, bulging capacitors</li>
                    <li><strong>Dust Accumulation:</strong> Inspect fan blades and heatsink fins</li>
                    <li><strong>Connection Integrity:</strong> Verify PCIe seating and power cables</li>
                    <li><strong>Thermal Paste:</strong> Look for dried thermal interface material</li>
                  </ul>
                </div>
                
                <div class="test-phase">
                  <h6>Phase 2: Power and Electrical Testing</h6>
                  <ul>
                    <li><strong>PSU Capacity:</strong> Calculate total system power draw vs PSU rating</li>
                    <li><strong>12V Rail Stability:</strong> Monitor voltage under GPU load</li>
                    <li><strong>PCIe Power:</strong> Test 6-pin (75W) and 8-pin (150W) connectors</li>
                    <li><strong>Slot Power:</strong> Verify PCIe slot provides 75W baseline</li>
                  </ul>
                </div>
                
                <div class="test-phase">
                  <h6>Phase 3: Thermal and Performance Testing</h6>
                  <ul>
                    <li><strong>Idle Temperatures:</strong> Should be 30-50°C depending on ambient</li>
                    <li><strong>Load Temperatures:</strong> Monitor during FurMark stress test</li>
                    <li><strong>Thermal Throttling:</strong> Watch for frequency drops at high temps</li>
                    <li><strong>Fan Curves:</strong> Verify automatic fan speed adjustment</li>
                  </ul>
                </div>
                
                <div class="test-phase">
                  <h6>Phase 4: Stability and Compatibility Testing</h6>
                  <ul>
                    <li><strong>Artifact Testing:</strong> Run visual tests for corruption/artifacts</li>
                    <li><strong>Memory Testing:</strong> Use CUDA/OpenCL memory stress tests</li>
                    <li><strong>Driver Compatibility:</strong> Test with multiple driver versions</li>
                    <li><strong>Application Testing:</strong> Test real-world software compatibility</li>
                  </ul>
                </div>
              </div>
              
              <div class="gpu-tools-arsenal">
                <h5>🛠️ Professional GPU Diagnostic Tools</h5>
                
                <div class="tool-category">
                  <h6>Hardware Monitoring Tools:</h6>
                  <ul>
                    <li><strong>GPU-Z:</strong> Real-time sensors, specifications, validation</li>
                    <li><strong>HWiNFO64:</strong> Comprehensive system monitoring</li>
                    <li><strong>MSI Afterburner:</strong> Overclocking and monitoring</li>
                    <li><strong>EVGA Precision X1:</strong> Advanced GPU tuning</li>
                  </ul>
                </div>
                
                <div class="tool-category">
                  <h6>Stress Testing Software:</h6>
                  <ul>
                    <li><strong>FurMark:</strong> GPU stress testing and stability</li>
                    <li><strong>3DMark:</strong> Synthetic benchmarking</li>
                    <li><strong>Unigine Heaven/Valley:</strong> Graphics benchmarking</li>
                    <li><strong>OCCT GPU Test:</strong> Error detection during stress</li>
                  </ul>
                </div>
                
                <div class="tool-category">
                  <h6>Diagnostic Utilities:</h6>
                  <ul>
                    <li><strong>Display Driver Uninstaller (DDU):</strong> Complete driver removal</li>
                    <li><strong>GPU Memory Test:</strong> Video memory testing</li>
                    <li><strong>PixelHealer:</strong> Dead pixel repair attempts</li>
                    <li><strong>NVIDIA/AMD Control Panels:</strong> Driver-specific diagnostics</li>
                  </ul>
                </div>
              </div>
            </div>
          `
        },
        {
          id: 'cable-connectivity-issues',
          title: 'Display Cable and Connectivity Troubleshooting',
          content: `
            <div class="cable-diagnostic-guide">
              <h4>🔌 Display Cable and Connection Diagnostics</h4>
              
              <div class="cable-comparison">
                <h5>📊 Video Cable Technology Comparison</h5>
                
                <table class="diagnostic-table">
                  <thead>
                    <tr>
                      <th>Cable Type</th>
                      <th>Max Resolution</th>
                      <th>Max Refresh Rate</th>
                      <th>Audio Support</th>
                      <th>Common Issues</th>
                      <th>Diagnostic Tips</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>HDMI 2.1</strong></td>
                      <td>8K (7680×4320)</td>
                      <td>120Hz at 4K</td>
                      <td>Yes (eARC)</td>
                      <td>Handshake issues, bandwidth limits</td>
                      <td>Test with lower resolution first</td>
                    </tr>
                    <tr>
                      <td><strong>DisplayPort 1.4</strong></td>
                      <td>8K (7680×4320)</td>
                      <td>144Hz at 4K</td>
                      <td>Yes</td>
                      <td>MST hub conflicts, link training</td>
                      <td>Check DP version compatibility</td>
                    </tr>
                    <tr>
                      <td><strong>USB-C (DP Alt)</strong></td>
                      <td>4K (3840×2160)</td>
                      <td>60Hz at 4K</td>
                      <td>Yes</td>
                      <td>Power delivery conflicts, orientation</td>
                      <td>Verify Alt Mode support</td>
                    </tr>
                    <tr>
                      <td><strong>DVI-D Dual Link</strong></td>
                      <td>2560×1600</td>
                      <td>60Hz max</td>
                      <td>No</td>
                      <td>Digital signal degradation</td>
                      <td>Check for bent pins</td>
                    </tr>
                    <tr>
                      <td><strong>VGA (Analog)</strong></td>
                      <td>2048×1536</td>
                      <td>60Hz max</td>
                      <td>No</td>
                      <td>Signal interference, quality loss</td>
                      <td>Minimize cable length</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div class="connection-troubleshooting">
                <h5>🔧 Systematic Connection Troubleshooting</h5>
                
                <div class="troubleshooting-steps">
                  <div class="step-category">
                    <h6>Step 1: Physical Inspection</h6>
                    <ul>
                      <li><strong>Cable Condition:</strong> Check for kinks, cuts, or physical damage</li>
                      <li><strong>Connector Integrity:</strong> Inspect pins for bending or corrosion</li>
                      <li><strong>Port Condition:</strong> Look for debris or damage in ports</li>
                      <li><strong>Secure Connection:</strong> Ensure connectors are fully seated</li>
                    </ul>
                  </div>
                  
                  <div class="step-category">
                    <h6>Step 2: Signal Testing</h6>
                    <ul>
                      <li><strong>Cable Substitution:</strong> Test with known good cables</li>
                      <li><strong>Port Testing:</strong> Try different ports on graphics card</li>
                      <li><strong>Resolution Stepping:</strong> Start with lower resolution and increase</li>
                      <li><strong>Refresh Rate Testing:</strong> Test different refresh rates</li>
                    </ul>
                  </div>
                  
                  <div class="step-category">
                    <h6>Step 3: Compatibility Verification</h6>
                    <ul>
                      <li><strong>Specification Matching:</strong> Verify cable supports desired resolution</li>
                      <li><strong>Version Checking:</strong> Confirm HDMI/DP version compatibility</li>
                      <li><strong>Bandwidth Calculation:</strong> Ensure sufficient data throughput</li>
                      <li><strong>Protocol Support:</strong> Check for specific feature requirements</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="signal-integrity-testing">
                <h5>📡 Advanced Signal Integrity Testing</h5>
                
                <div class="testing-procedures">
                  <h6>Digital Signal Quality Assessment:</h6>
                  <ul>
                    <li><strong>Eye Diagram Analysis:</strong> Use oscilloscope to check signal quality</li>
                    <li><strong>Bit Error Rate Testing:</strong> Measure data transmission accuracy</li>
                    <li><strong>Jitter Measurement:</strong> Test timing variations in digital signals</li>
                    <li><strong>Crosstalk Testing:</strong> Check for interference between signal pairs</li>
                  </ul>
                  
                  <h6>Cable Length and Environmental Factors:</h6>
                  <ul>
                    <li><strong>Distance Limitations:</strong> Test maximum reliable cable lengths</li>
                    <li><strong>EMI Susceptibility:</strong> Check for electromagnetic interference</li>
                    <li><strong>Temperature Effects:</strong> Monitor performance across temperature ranges</li>
                    <li><strong>Flex Testing:</strong> Verify reliability through cable movement</li>
                  </ul>
                </div>
              </div>
              
              <div class="common-scenarios">
                <h5>📋 Common Cable-Related Scenarios</h5>
                
                <div class="scenario-grid">
                  <div class="scenario-card">
                    <h6>Scenario: Intermittent Signal Loss</h6>
                    <p><strong>Symptoms:</strong> Display randomly goes black or shows artifacts</p>
                    <p><strong>Diagnosis:</strong></p>
                    <ol>
                      <li>Wiggle cable while monitoring display</li>
                      <li>Check for loose connections</li>
                      <li>Test with shorter cable</li>
                      <li>Verify power supply stability</li>
                    </ol>
                  </div>
                  
                  <div class="scenario-card">
                    <h6>Scenario: Resolution Limitation</h6>
                    <p><strong>Symptoms:</strong> Cannot achieve desired resolution/refresh rate</p>
                    <p><strong>Diagnosis:</strong></p>
                    <ol>
                      <li>Verify cable specification support</li>
                      <li>Check GPU and monitor capabilities</li>
                      <li>Test with different cable type</li>
                      <li>Update drivers and firmware</li>
                    </ol>
                  </div>
                  
                  <div class="scenario-card">
                    <h6>Scenario: Color Distortion</h6>
                    <p><strong>Symptoms:</strong> Wrong colors, color bleeding, or missing colors</p>
                    <p><strong>Diagnosis:</strong></p>
                    <ol>
                      <li>Check for damaged cable conductors</li>
                      <li>Test with digital vs analog cables</li>
                      <li>Verify color depth settings</li>
                      <li>Check for EMI sources nearby</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          `
        }
      ],
      'peripherals-software': [
        {
          id: 'advanced-input-device-diagnostics',
          title: 'Advanced Input Device Diagnostics and Calibration',
          content: `
            <div class="advanced-input-diagnostics">
              <h4>🎯 Precision Input Device Testing</h4>
              
              <div class="mouse-diagnostics">
                <h5>🖱️ Advanced Mouse Diagnostics</h5>
                
                <div class="diagnostic-categories">
                  <div class="diagnostic-category">
                    <h6>Precision and Accuracy Testing</h6>
                    <ul>
                      <li><strong>DPI Accuracy:</strong> Use mouse testing software to verify actual vs advertised DPI</li>
                      <li><strong>Polling Rate:</strong> Test USB polling rate (125Hz, 500Hz, 1000Hz)</li>
                      <li><strong>Sensor Performance:</strong> Test on various surfaces for tracking consistency</li>
                      <li><strong>Acceleration Curves:</strong> Analyze mouse acceleration and smoothing</li>
                    </ul>
                    
                    <div class="testing-procedure">
                      <strong>Testing Tools:</strong>
                      <ul>
                        <li>Mouse Tester - Real-time tracking visualization</li>
                        <li>MouseMark - Comprehensive benchmarking</li>
                        <li>ClickBenchmark - Click timing analysis</li>
                        <li>Human Benchmarker - Reaction time testing</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div class="diagnostic-category">
                    <h6>Gaming Mouse Optimization</h6>
                    <ul>
                      <li><strong>Input Lag Testing:</strong> Measure total system input lag</li>
                      <li><strong>Click Latency:</strong> Test mechanical switch response times</li>
                      <li><strong>Lift-off Distance:</strong> Adjust sensor lift-off calibration</li>
                      <li><strong>Surface Tuning:</strong> Optimize for specific mouse pad materials</li>
                    </ul>
                    
                    <div class="optimization-guide">
                      <strong>Optimization Steps:</strong>
                      <ol>
                        <li>Disable mouse acceleration in Windows and games</li>
                        <li>Set consistent DPI across all applications</li>
                        <li>Configure polling rate for optimal performance</li>
                        <li>Calibrate for specific gaming scenarios</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="keyboard-diagnostics">
                <h5>⌨️ Professional Keyboard Testing</h5>
                
                <div class="keyboard-testing-framework">
                  <div class="test-category">
                    <h6>Mechanical Switch Analysis</h6>
                    <ul>
                      <li><strong>Switch Type Identification:</strong> Linear, tactile, or clicky characteristics</li>
                      <li><strong>Actuation Force:</strong> Measure required force for key activation</li>
                      <li><strong>Travel Distance:</strong> Pre-travel and total travel measurements</li>
                      <li><strong>Durability Testing:</strong> Lifecycle analysis and wear patterns</li>
                    </ul>
                  </div>
                  
                  <div class="test-category">
                    <h6>Key Matrix and N-Key Rollover</h6>
                    <ul>
                      <li><strong>Ghosting Detection:</strong> Test for phantom key presses</li>
                      <li><strong>Key Rollover Limits:</strong> Determine maximum simultaneous keys</li>
                      <li><strong>Matrix Scanning:</strong> Analyze scan rate and response time</li>
                      <li><strong>Anti-Ghosting:</strong> Verify NKRO implementation effectiveness</li>
                    </ul>
                  </div>
                </div>
                
                <div class="specialized-testing">
                  <h6>Specialized Keyboard Functions</h6>
                  <div class="function-tests">
                    <ul>
                      <li><strong>Macro Keys:</strong> Test programmable key functionality</li>
                      <li><strong>Media Controls:</strong> Volume, playback, and system controls</li>
                      <li><strong>RGB Lighting:</strong> Color accuracy and synchronization</li>
                      <li><strong>Wireless Connectivity:</strong> Latency and battery performance</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="touchpad-calibration">
                <h5>👆 Advanced Touchpad Calibration</h5>
                
                <div class="calibration-procedures">
                  <div class="sensitivity-tuning">
                    <h6>Precision Sensitivity Adjustment</h6>
                    <ul>
                      <li><strong>Pointer Speed:</strong> Fine-tune cursor movement sensitivity</li>
                      <li><strong>Tap Sensitivity:</strong> Adjust tap-to-click responsiveness</li>
                      <li><strong>Edge Sensitivity:</strong> Configure edge scroll and gesture zones</li>
                      <li><strong>Pressure Sensitivity:</strong> Set force thresholds for different actions</li>
                    </ul>
                  </div>
                  
                  <div class="gesture-optimization">
                    <h6>Multi-Touch Gesture Configuration</h6>
                    <ul>
                      <li><strong>Two-Finger Gestures:</strong> Scroll, zoom, and rotation</li>
                      <li><strong>Three-Finger Gestures:</strong> Application switching and desktop management</li>
                      <li><strong>Four-Finger Gestures:</strong> System-level navigation commands</li>
                      <li><strong>Custom Gestures:</strong> Create application-specific touch commands</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          `
        },
        {
          id: 'enterprise-printer-management',
          title: 'Enterprise Printer Management and Network Troubleshooting',
          content: `
            <div class="enterprise-printer-management">
              <h4>🏢 Enterprise-Level Printer Infrastructure</h4>
              
              <div class="network-printer-architecture">
                <h5>🌐 Network Printer Architecture and Protocols</h5>
                
                <div class="protocol-analysis">
                  <div class="protocol-section">
                    <h6>Print Server Technologies</h6>
                    <ul>
                      <li><strong>Windows Print Server:</strong> Active Directory integration, group policy management</li>
                      <li><strong>CUPS (Linux/Mac):</strong> Common Unix Printing System configuration</li>
                      <li><strong>IPP (Internet Printing Protocol):</strong> Modern network printing standard</li>
                      <li><strong>JetDirect:</strong> HP's embedded print server technology</li>
                    </ul>
                  </div>
                  
                  <div class="protocol-section">
                    <h6>Network Configuration and Security</h6>
                    <ul>
                      <li><strong>IP Address Management:</strong> Static vs DHCP configurations</li>
                      <li><strong>Port Configuration:</strong> TCP 631 (IPP), 515 (LPR), 9100 (RAW)</li>
                      <li><strong>SSL/TLS Encryption:</strong> Secure printing protocols</li>
                      <li><strong>Authentication:</strong> User-based printing and access control</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="advanced-troubleshooting">
                <h5>🔧 Advanced Network Printing Troubleshooting</h5>
                
                <div class="troubleshooting-methodology">
                  <div class="network-layer-analysis">
                    <h6>Network Layer Diagnostic Approach</h6>
                    <ol>
                      <li><strong>Physical Layer:</strong> Cable integrity, switch port status</li>
                      <li><strong>Network Layer:</strong> IP connectivity, routing, DNS resolution</li>
                      <li><strong>Transport Layer:</strong> Port accessibility, firewall rules</li>
                      <li><strong>Application Layer:</strong> Print spooler, driver compatibility</li>
                    </ol>
                  </div>
                  
                  <div class="diagnostic-tools">
                    <h6>Professional Diagnostic Tools</h6>
                    <ul>
                      <li><strong>Network Scanner:</strong> Nmap for port and service discovery</li>
                      <li><strong>Packet Analyzer:</strong> Wireshark for protocol analysis</li>
                      <li><strong>SNMP Tools:</strong> Network device monitoring and management</li>
                      <li><strong>Print Queue Analyzer:</strong> Spooler service diagnostics</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="print-quality-optimization">
                <h5>📊 Advanced Print Quality Management</h5>
                
                <div class="quality-control-systems">
                  <div class="color-management">
                    <h6>Professional Color Management</h6>
                    <ul>
                      <li><strong>ICC Profiles:</strong> Device-specific color calibration</li>
                      <li><strong>Color Gamut Mapping:</strong> RGB to CMYK conversion optimization</li>
                      <li><strong>Pantone Matching:</strong> Spot color accuracy for branding</li>
                      <li><strong>Density Control:</strong> Toner/ink density calibration</li>
                    </ul>
                  </div>
                  
                  <div class="print-optimization">
                    <h6>Production Print Optimization</h6>
                    <ul>
                      <li><strong>RIP (Raster Image Processing):</strong> Optimize for complex documents</li>
                      <li><strong>Dithering Algorithms:</strong> Improve gradient and photo quality</li>
                      <li><strong>Paper Path Optimization:</strong> Reduce jams and improve speed</li>
                      <li><strong>Workflow Automation:</strong> Batch processing and job scheduling</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="maintenance-automation">
                <h5>🔄 Automated Maintenance and Monitoring</h5>
                
                <div class="monitoring-systems">
                  <div class="proactive-monitoring">
                    <h6>Proactive Health Monitoring</h6>
                    <ul>
                      <li><strong>Supply Level Tracking:</strong> Automated toner/ink monitoring</li>
                      <li><strong>Usage Analytics:</strong> Page count and cost analysis</li>
                      <li><strong>Error Prediction:</strong> Preventive maintenance scheduling</li>
                      <li><strong>Performance Metrics:</strong> Speed, quality, and uptime tracking</li>
                    </ul>
                  </div>
                  
                  <div class="maintenance-scheduling">
                    <h6>Intelligent Maintenance Scheduling</h6>
                    <ul>
                      <li><strong>Predictive Maintenance:</strong> Component lifespan analysis</li>
                      <li><strong>Supply Chain Integration:</strong> Automatic reordering systems</li>
                      <li><strong>Technician Dispatch:</strong> Automated service request generation</li>
                      <li><strong>Documentation Systems:</strong> Maintenance history and analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          `
        },
        {
          id: 'advanced-software-conflict-analysis',
          title: 'Advanced Software Conflict Analysis and System Optimization',
          content: `
            <div class="advanced-conflict-analysis">
              <h4>🔬 Deep System Analysis and Conflict Resolution</h4>
              
              <div class="forensic-analysis">
                <h5>🕵️ Digital Forensic Approach to Software Conflicts</h5>
                
                <div class="analysis-methodology">
                  <div class="data-collection">
                    <h6>Comprehensive Data Collection</h6>
                    <ul>
                      <li><strong>System Timeline Analysis:</strong> Correlate events across multiple log sources</li>
                      <li><strong>Registry Forensics:</strong> Track software installation and configuration changes</li>
                      <li><strong>File System Analysis:</strong> Monitor file creation, modification, and deletion</li>
                      <li><strong>Memory Dump Analysis:</strong> Examine system state during conflicts</li>
                    </ul>
                  </div>
                  
                  <div class="advanced-tools">
                    <h6>Professional Analysis Tools</h6>
                    <ul>
                      <li><strong>Process Monitor (ProcMon):</strong> Real-time file system and registry monitoring</li>
                      <li><strong>Windows Performance Analyzer:</strong> ETW (Event Tracing for Windows) analysis</li>
                      <li><strong>Dependency Walker:</strong> DLL dependency analysis and resolution</li>
                      <li><strong>API Monitor:</strong> Application programming interface call tracking</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="conflict-categorization">
                <h5>📋 Systematic Conflict Categorization</h5>
                
                <div class="conflict-types">
                  <div class="dll-conflicts">
                    <h6>Dynamic Link Library (DLL) Conflicts</h6>
                    <ul>
                      <li><strong>Version Conflicts:</strong> Multiple applications requiring different DLL versions</li>
                      <li><strong>DLL Hell:</strong> Overwriting system libraries with incompatible versions</li>
                      <li><strong>Side-by-Side Issues:</strong> Windows SxS assembly conflicts</li>
                      <li><strong>Resolution Strategies:</strong> Application isolation, virtualization, proper versioning</li>
                    </ul>
                  </div>
                  
                  <div class="service-conflicts">
                    <h6>Windows Service and Driver Conflicts</h6>
                    <ul>
                      <li><strong>Service Dependencies:</strong> Circular dependencies and startup order issues</li>
                      <li><strong>Driver Signature Conflicts:</strong> Unsigned or corrupted driver issues</li>
                      <li><strong>Resource Conflicts:</strong> IRQ, DMA, and memory address conflicts</li>
                      <li><strong>Security Context Issues:</strong> Service account permissions and privileges</li>
                    </ul>
                  </div>
                  
                  <div class="application-conflicts">
                    <h6>Application-Level Conflicts</h6>
                    <ul>
                      <li><strong>COM Registration:</strong> Component Object Model conflicts</li>
                      <li><strong>File Association:</strong> Multiple applications claiming same file types</li>
                      <li><strong>Database Connections:</strong> ODBC and connection string conflicts</li>
                      <li><strong>Legacy Compatibility:</strong> 16-bit vs 32-bit vs 64-bit application issues</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="resolution-frameworks">
                <h5>🛠️ Advanced Resolution Frameworks</h5>
                
                <div class="isolation-techniques">
                  <div class="virtualization-solutions">
                    <h6>Application Virtualization and Isolation</h6>
                    <ul>
                      <li><strong>App-V (Application Virtualization):</strong> Microsoft's enterprise application isolation</li>
                      <li><strong>Docker Containers:</strong> Containerized application deployment</li>
                      <li><strong>VMware ThinApp:</strong> Application virtualization and portability</li>
                      <li><strong>Windows Sandbox:</strong> Temporary isolated environment testing</li>
                    </ul>
                  </div>
                  
                  <div class="compatibility-solutions">
                    <h6>Compatibility and Shim Technologies</h6>
                    <ul>
                      <li><strong>Application Compatibility Toolkit:</strong> Custom compatibility fixes</li>
                      <li><strong>Windows Compatibility Mode:</strong> Legacy application support</li>
                      <li><strong>Shim Database:</strong> System-level compatibility fixes</li>
                      <li><strong>UAC Virtualization:</strong> File and registry redirection</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="performance-optimization">
                <h5>⚡ System Performance Optimization</h5>
                
                <div class="optimization-strategies">
                  <div class="startup-optimization">
                    <h6>Boot and Startup Optimization</h6>
                    <ul>
                      <li><strong>Boot Configuration:</strong> BCD optimization and multi-boot management</li>
                      <li><strong>Service Optimization:</strong> Disable unnecessary services safely</li>
                      <li><strong>Startup Programs:</strong> Intelligent startup delay and prioritization</li>
                      <li><strong>Fast Startup:</strong> Hybrid boot optimization for modern systems</li>
                    </ul>
                  </div>
                  
                  <div class="runtime-optimization">
                    <h6>Runtime Performance Optimization</h6>
                    <ul>
                      <li><strong>Memory Management:</strong> Virtual memory optimization and paging</li>
                      <li><strong>CPU Scheduling:</strong> Process priority and affinity optimization</li>
                      <li><strong>I/O Optimization:</strong> Disk and network performance tuning</li>
                      <li><strong>Power Management:</strong> Balanced performance and energy efficiency</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="automation-scripting">
                <h5>🤖 Automation and Scripting Solutions</h5>
                
                <div class="scripting-frameworks">
                  <div class="powershell-automation">
                    <h6>PowerShell System Management</h6>
                    <ul>
                      <li><strong>WMI/CIM Integration:</strong> Hardware and software inventory automation</li>
                      <li><strong>DSC (Desired State Configuration):</strong> Automated system configuration</li>
                      <li><strong>Event Log Analysis:</strong> Automated error detection and reporting</li>
                      <li><strong>Remote Management:</strong> Enterprise-scale troubleshooting automation</li>
                    </ul>
                  </div>
                  
                  <div class="deployment-automation">
                    <h6>Software Deployment and Management</h6>
                    <ul>
                      <li><strong>Group Policy:</strong> Centralized software deployment and configuration</li>
                      <li><strong>SCCM Integration:</strong> System Center Configuration Manager automation</li>
                      <li><strong>Package Management:</strong> Chocolatey, Windows Package Manager integration</li>
                      <li><strong>Update Management:</strong> WSUS and Windows Update automation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          `
        }
      ],
      'tools-security': [
      {
        id: 'enterprise-monitoring',
        title: 'Enterprise System Monitoring and SIEM Implementation',
        content: `
          <div class="topic-comprehensive">
            <h4>🏢 Enterprise-Grade Monitoring Architecture</h4>
            
            <div class="monitoring-overview">
              <p>Modern enterprise environments require sophisticated monitoring solutions that provide real-time visibility, automated alerting, and comprehensive analytics across all IT infrastructure components.</p>
            </div>
            
            <div class="siem-architecture">
              <h5>Security Information and Event Management (SIEM)</h5>
              
              <div class="siem-components">
                <div class="siem-component">
                  <h6>📊 Data Collection Layer</h6>
                  <ul>
                    <li><strong>Log Aggregation:</strong> Centralized collection from all network devices, servers, applications, and security tools</li>
                    <li><strong>Real-time Streaming:</strong> High-volume event processing with minimal latency</li>
                    <li><strong>Normalized Data Format:</strong> Standardized event structures for unified analysis</li>
                    <li><strong>Data Enrichment:</strong> Context addition through threat intelligence and asset information</li>
                  </ul>
                </div>
                
                <div class="siem-component">
                  <h6>🔍 Analysis and Correlation Engine</h6>
                  <ul>
                    <li><strong>Pattern Recognition:</strong> Machine learning algorithms for anomaly detection</li>
                    <li><strong>Rule-based Correlation:</strong> Custom business logic for specific threat scenarios</li>
                    <li><strong>Behavioral Analytics:</strong> User and entity behavior analysis (UEBA)</li>
                    <li><strong>Threat Hunting:</strong> Proactive search for advanced persistent threats</li>
                  </ul>
                </div>
                
                <div class="siem-component">
                  <h6>⚡ Incident Response Integration</h6>
                  <ul>
                    <li><strong>Automated Playbooks:</strong> Orchestrated response procedures</li>
                    <li><strong>Case Management:</strong> Incident tracking and resolution workflows</li>
                    <li><strong>Forensic Capabilities:</strong> Deep-dive investigation tools</li>
                    <li><strong>Compliance Reporting:</strong> Regulatory requirement fulfillment</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="monitoring-tools-enterprise">
              <h5>Professional Monitoring Tool Stack</h5>
              
              <div class="tool-categories-enterprise">
                <div class="enterprise-tool-category">
                  <h6>Infrastructure Monitoring</h6>
                  <div class="tools-grid">
                    <div class="tool-details">
                      <h7>Nagios XI / Core</h7>
                      <ul>
                        <li>Network device monitoring with SNMP</li>
                        <li>Service availability checking</li>
                        <li>Performance metric collection</li>
                        <li>Custom plugin development</li>
                      </ul>
                    </div>
                    
                    <div class="tool-details">
                      <h7>PRTG Network Monitor</h7>
                      <ul>
                        <li>Unified infrastructure monitoring</li>
                        <li>Bandwidth monitoring and analysis</li>
                        <li>Application performance monitoring</li>
                        <li>Mobile monitoring capabilities</li>
                      </ul>
                    </div>
                    
                    <div class="tool-details">
                      <h7>SolarWinds NPM</h7>
                      <ul>
                        <li>Advanced network topology mapping</li>
                        <li>Performance baseline establishment</li>
                        <li>Intelligent alerting with dependencies</li>
                        <li>Capacity planning and forecasting</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="enterprise-tool-category">
                  <h6>Security Monitoring</h6>
                  <div class="tools-grid">
                    <div class="tool-details">
                      <h7>Splunk Enterprise Security</h7>
                      <ul>
                        <li>Big data analytics for security</li>
                        <li>Machine learning threat detection</li>
                        <li>Compliance dashboard and reporting</li>
                        <li>Incident investigation workflows</li>
                      </ul>
                    </div>
                    
                    <div class="tool-details">
                      <h7>IBM QRadar</h7>
                      <ul>
                        <li>Advanced threat detection and analysis</li>
                        <li>Network flow analysis</li>
                        <li>Vulnerability management integration</li>
                        <li>Risk-based prioritization</li>
                      </ul>
                    </div>
                    
                    <div class="tool-details">
                      <h7>AlienVault OSSIM/USM</h7>
                      <ul>
                        <li>Open source SIEM foundation</li>
                        <li>Asset discovery and inventory</li>
                        <li>Vulnerability assessment integration</li>
                        <li>Behavioral monitoring capabilities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="implementation-strategy">
              <h5>🚀 Implementation Strategy</h5>
              
              <div class="implementation-phases">
                <div class="phase">
                  <div class="phase-number">1</div>
                  <div class="phase-content">
                    <h6>Assessment and Planning</h6>
                    <ul>
                      <li>Current infrastructure inventory and analysis</li>
                      <li>Compliance requirement identification</li>
                      <li>Risk assessment and threat modeling</li>
                      <li>Resource allocation and budget planning</li>
                    </ul>
                  </div>
                </div>
                
                <div class="phase">
                  <div class="phase-number">2</div>
                  <div class="phase-content">
                    <h6>Foundation Deployment</h6>
                    <ul>
                      <li>Core SIEM platform installation and configuration</li>
                      <li>Network monitoring infrastructure setup</li>
                      <li>Initial data source integration</li>
                      <li>Basic correlation rule implementation</li>
                    </ul>
                  </div>
                </div>
                
                <div class="phase">
                  <div class="phase-number">3</div>
                  <div class="phase-content">
                    <h6>Advanced Configuration</h6>
                    <ul>
                      <li>Custom dashboard and report development</li>
                      <li>Advanced correlation and alerting rules</li>
                      <li>Integration with external threat intelligence</li>
                      <li>Automated response playbook creation</li>
                    </ul>
                  </div>
                </div>
                
                <div class="phase">
                  <div class="phase-number">4</div>
                  <div class="phase-content">
                    <h6>Optimization and Tuning</h6>
                    <ul>
                      <li>Performance optimization and scaling</li>
                      <li>False positive reduction and tuning</li>
                      <li>User training and process development</li>
                      <li>Continuous improvement and updates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        id: 'cybersecurity-framework',
        title: 'Cybersecurity Framework Implementation and Threat Management',
        content: `
          <div class="topic-comprehensive">
            <h4>🛡️ NIST Cybersecurity Framework Implementation</h4>
            
            <div class="framework-overview">
              <p>The NIST Cybersecurity Framework provides a comprehensive approach to managing cybersecurity risk through five core functions: Identify, Protect, Detect, Respond, and Recover.</p>
            </div>
            
            <div class="nist-framework">
              <h5>Five Core Functions Implementation</h5>
              
              <div class="framework-functions">
                <div class="framework-function">
                  <div class="function-header">
                    <h6>🔍 IDENTIFY</h6>
                    <p>Develop organizational understanding to manage cybersecurity risk</p>
                  </div>
                  <div class="function-details">
                    <div class="category">
                      <h7>Asset Management (ID.AM)</h7>
                      <ul>
                        <li>Hardware asset inventory and classification</li>
                        <li>Software platform and application inventory</li>
                        <li>Data flow mapping and classification</li>
                        <li>External service provider identification</li>
                      </ul>
                    </div>
                    
                    <div class="category">
                      <h7>Risk Assessment (ID.RA)</h7>
                      <ul>
                        <li>Threat and vulnerability identification</li>
                        <li>Risk assessment methodology implementation</li>
                        <li>Threat intelligence integration</li>
                        <li>Criticality analysis and prioritization</li>
                      </ul>
                    </div>
                    
                    <div class="category">
                      <h7>Governance (ID.GV)</h7>
                      <ul>
                        <li>Cybersecurity policy and procedure development</li>
                        <li>Risk management strategy establishment</li>
                        <li>Legal and regulatory requirement compliance</li>
                        <li>Cybersecurity roles and responsibilities</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="framework-function">
                  <div class="function-header">
                    <h6>🛡️ PROTECT</h6>
                    <p>Develop and implement appropriate safeguards</p>
                  </div>
                  <div class="function-details">
                    <div class="category">
                      <h7>Access Control (PR.AC)</h7>
                      <ul>
                        <li>Identity and credential management</li>
                        <li>Physical and logical access controls</li>
                        <li>Network segregation and micro-segmentation</li>
                        <li>Privileged access management (PAM)</li>
                      </ul>
                    </div>
                    
                    <div class="category">
                      <h7>Data Security (PR.DS)</h7>
                      <ul>
                        <li>Data-at-rest and data-in-transit protection</li>
                        <li>Data backup and recovery procedures</li>
                        <li>Data destruction and sanitization</li>
                        <li>Data integrity protection mechanisms</li>
                      </ul>
                    </div>
                    
                    <div class="category">
                      <h7>Protective Technology (PR.PT)</h7>
                      <ul>
                        <li>Security tool deployment and configuration</li>
                        <li>System hardening and baseline configuration</li>
                        <li>Vulnerability management programs</li>
                        <li>Security awareness and training programs</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="framework-function">
                  <div class="function-header">
                    <h6>🔍 DETECT</h6>
                    <p>Develop and implement activities to identify cybersecurity events</p>
                  </div>
                  <div class="function-details">
                    <div class="category">
                      <h7>Continuous Monitoring (DE.CM)</h7>
                      <ul>
                        <li>Network and system monitoring implementation</li>
                        <li>Malicious code detection and analysis</li>
                        <li>Unauthorized personnel, devices, and software detection</li>
                        <li>Security event correlation and analysis</li>
                      </ul>
                    </div>
                    
                    <div class="category">
                      <h7>Detection Processes (DE.DP)</h7>
                      <ul>
                        <li>Detection role and responsibility definition</li>
                        <li>Event detection testing and validation</li>
                        <li>Detection process communication procedures</li>
                        <li>Continuous improvement of detection capabilities</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="framework-function">
                  <div class="function-header">
                    <h6>⚡ RESPOND</h6>
                    <p>Develop and implement activities regarding detected cybersecurity events</p>
                  </div>
                  <div class="function-details">
                    <div class="category">
                      <h7>Incident Response (RS.RP)</h7>
                      <ul>
                        <li>Incident response plan development and testing</li>
                        <li>Incident classification and prioritization</li>
                        <li>Stakeholder communication procedures</li>
                        <li>Incident analysis and forensic investigation</li>
                      </ul>
                    </div>
                    
                    <div class="category">
                      <h7>Mitigation (RS.MI)</h7>
                      <ul>
                        <li>Incident containment strategies</li>
                        <li>Mitigation action implementation</li>
                        <li>Newly identified vulnerabilities mitigation</li>
                        <li>Lessons learned integration</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="framework-function">
                  <div class="function-header">
                    <h6>🔄 RECOVER</h6>
                    <p>Develop and implement activities to maintain resilience</p>
                  </div>
                  <div class="function-details">
                    <div class="category">
                      <h7>Recovery Planning (RC.RP)</h7>
                      <ul>
                        <li>Recovery plan development and maintenance</li>
                        <li>Recovery strategies and procedures</li>
                        <li>Recovery plan testing and validation</li>
                        <li>Information system backup and restoration</li>
                      </ul>
                    </div>
                    
                    <div class="category">
                      <h7>Communications (RC.CO)</h7>
                      <ul>
                        <li>Public relations and reputation management</li>
                        <li>Recovery communication coordination</li>
                        <li>Internal and external stakeholder communication</li>
                        <li>Executive and board-level reporting</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="threat-management">
              <h5>🎯 Advanced Threat Management</h5>
              
              <div class="threat-landscape">
                <h6>Modern Threat Landscape</h6>
                <div class="threat-categories">
                  <div class="threat-category">
                    <h7>Advanced Persistent Threats (APTs)</h7>
                    <ul>
                      <li><strong>Nation-state actors:</strong> Sophisticated, long-term infiltration campaigns</li>
                      <li><strong>Zero-day exploits:</strong> Previously unknown vulnerability exploitation</li>
                      <li><strong>Living off the land:</strong> Legitimate tool abuse for malicious purposes</li>
                      <li><strong>Supply chain attacks:</strong> Third-party vendor and software compromise</li>
                    </ul>
                  </div>
                  
                  <div class="threat-category">
                    <h7>Ransomware and Extortion</h7>
                    <ul>
                      <li><strong>Double extortion:</strong> Data encryption and theft combination</li>
                      <li><strong>Ransomware-as-a-Service:</strong> Criminal franchise operations</li>
                      <li><strong>Critical infrastructure targeting:</strong> Healthcare, utilities, government</li>
                      <li><strong>Business email compromise:</strong> Financial fraud and data theft</li>
                    </ul>
                  </div>
                  
                  <div class="threat-category">
                    <h7>Insider Threats</h7>
                    <ul>
                      <li><strong>Malicious insiders:</strong> Intentional data theft or sabotage</li>
                      <li><strong>Negligent insiders:</strong> Unintentional security policy violations</li>
                      <li><strong>Compromised accounts:</strong> External threat actor using insider access</li>
                      <li><strong>Third-party access:</strong> Vendor and contractor risk management</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="threat-intelligence">
                <h6>Threat Intelligence Integration</h6>
                <div class="intelligence-sources">
                  <div class="intel-source">
                    <h7>Commercial Intelligence Feeds</h7>
                    <ul>
                      <li>Structured threat data (STIX/TAXII)</li>
                      <li>Indicators of compromise (IOCs)</li>
                      <li>Tactical, operational, and strategic intelligence</li>
                      <li>Industry-specific threat reporting</li>
                    </ul>
                  </div>
                  
                  <div class="intel-source">
                    <h7>Open Source Intelligence (OSINT)</h7>
                    <ul>
                      <li>Public vulnerability databases</li>
                      <li>Security research and blog analysis</li>
                      <li>Social media threat monitoring</li>
                      <li>Dark web monitoring and analysis</li>
                    </ul>
                  </div>
                  
                  <div class="intel-source">
                    <h7>Government and Industry Sharing</h7>
                    <ul>
                      <li>Information Sharing and Analysis Centers (ISACs)</li>
                      <li>Government threat briefings and alerts</li>
                      <li>Industry partnership programs</li>
                      <li>Trusted community threat sharing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        id: 'performance-engineering',
        title: 'Performance Engineering and System Optimization Methodologies',
        content: `
          <div class="topic-comprehensive">
            <h4>⚡ Advanced Performance Engineering</h4>
            
            <div class="performance-overview">
              <p>Performance engineering is a systematic approach to ensuring that systems meet performance requirements throughout their lifecycle. It encompasses capacity planning, performance testing, monitoring, and optimization.</p>
            </div>
            
            <div class="performance-methodology">
              <h5>🔬 Scientific Performance Analysis Methodology</h5>
              
              <div class="methodology-steps">
                <div class="methodology-step">
                  <div class="step-number">1</div>
                  <div class="step-content">
                    <h6>Requirement Definition and Goal Setting</h6>
                    <div class="step-details">
                      <div class="requirement-types">
                        <div class="req-type">
                          <h7>Functional Requirements</h7>
                          <ul>
                            <li><strong>Response Time:</strong> Maximum acceptable latency for user interactions</li>
                            <li><strong>Throughput:</strong> Transaction processing capacity requirements</li>
                            <li><strong>Concurrency:</strong> Simultaneous user or process support levels</li>
                            <li><strong>Resource Utilization:</strong> CPU, memory, storage, network targets</li>
                          </ul>
                        </div>
                        
                        <div class="req-type">
                          <h7>Non-Functional Requirements</h7>
                          <ul>
                            <li><strong>Scalability:</strong> Growth accommodation and elasticity</li>
                            <li><strong>Reliability:</strong> Uptime and availability targets</li>
                            <li><strong>Maintainability:</strong> Performance tuning and update capabilities</li>
                            <li><strong>Security Impact:</strong> Security control performance overhead</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div class="performance-metrics">
                        <h7>Key Performance Indicators (KPIs)</h7>
                        <ul>
                          <li><strong>Apdex Score:</strong> Application performance index for user satisfaction</li>
                          <li><strong>Error Rate:</strong> Percentage of failed transactions or requests</li>
                          <li><strong>Resource Efficiency:</strong> Work accomplished per resource unit consumed</li>
                          <li><strong>Cost Performance:</strong> Performance delivered per dollar invested</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="methodology-step">
                  <div class="step-number">2</div>
                  <div class="step-content">
                    <h6>Comprehensive System Profiling</h6>
                    <div class="step-details">
                      <div class="profiling-techniques">
                        <div class="profiling-method">
                          <h7>Static Analysis</h7>
                          <ul>
                            <li><strong>Architecture Review:</strong> Design pattern and component analysis</li>
                            <li><strong>Code Analysis:</strong> Algorithm complexity and optimization opportunities</li>
                            <li><strong>Configuration Analysis:</strong> System and application parameter review</li>
                            <li><strong>Resource Requirement Calculation:</strong> Theoretical capacity estimation</li>
                          </ul>
                        </div>
                        
                        <div class="profiling-method">
                          <h7>Dynamic Analysis</h7>
                          <ul>
                            <li><strong>Runtime Profiling:</strong> Real-time resource consumption monitoring</li>
                            <li><strong>Trace Analysis:</strong> Execution path and timing analysis</li>
                            <li><strong>Memory Profiling:</strong> Allocation patterns and leak detection</li>
                            <li><strong>I/O Analysis:</strong> Storage and network access pattern evaluation</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div class="profiling-tools">
                        <h7>Professional Profiling Tools</h7>
                        <div class="tool-categories">
                          <div class="tool-cat">
                            <h8>Application Profilers</h8>
                            <ul>
                              <li>Intel VTune Profiler</li>
                              <li>Microsoft Performance Toolkit</li>
                              <li>JetBrains dotMemory/dotTrace</li>
                              <li>Red Gate ANTS Performance Profiler</li>
                            </ul>
                          </div>
                          
                          <div class="tool-cat">
                            <h8>System Profilers</h8>
                            <ul>
                              <li>Windows Performance Analyzer (WPA)</li>
                              <li>Linux perf and perf-tools</li>
                              <li>DTrace (Solaris/macOS)</li>
                              <li>BCC/BPF tools (Linux)</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="methodology-step">
                  <div class="step-number">3</div>
                  <div class="step-content">
                    <h6>Advanced Performance Testing</h6>
                    <div class="step-details">
                      <div class="testing-types">
                        <div class="test-type">
                          <h7>Load Testing</h7>
                          <ul>
                            <li><strong>Normal Load:</strong> Expected production workload simulation</li>
                            <li><strong>Peak Load:</strong> Maximum anticipated load testing</li>
                            <li><strong>Sustained Load:</strong> Extended duration performance validation</li>
                            <li><strong>Gradually Increasing Load:</strong> Breaking point identification</li>
                          </ul>
                        </div>
                        
                        <div class="test-type">
                          <h7>Stress Testing</h7>
                          <ul>
                            <li><strong>System Limits:</strong> Maximum capacity determination</li>
                            <li><strong>Recovery Testing:</strong> Failure and recovery behavior analysis</li>
                            <li><strong>Resource Exhaustion:</strong> Individual component limit testing</li>
                            <li><strong>Degradation Analysis:</strong> Performance decline pattern study</li>
                          </ul>
                        </div>
                        
                        <div class="test-type">
                          <h7>Specialized Testing</h7>
                          <ul>
                            <li><strong>Spike Testing:</strong> Sudden load increase handling</li>
                            <li><strong>Volume Testing:</strong> Large data set processing capability</li>
                            <li><strong>Endurance Testing:</strong> Memory leak and resource accumulation</li>
                            <li><strong>Scalability Testing:</strong> Growth accommodation validation</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div class="testing-tools">
                        <h7>Enterprise Testing Platforms</h7>
                        <div class="platform-categories">
                          <div class="platform-cat">
                            <h8>Commercial Solutions</h8>
                            <ul>
                              <li><strong>LoadRunner:</strong> Enterprise-grade performance testing</li>
                              <li><strong>NeoLoad:</strong> Continuous performance testing</li>
                              <li><strong>BlazeMeter:</strong> Cloud-based load testing</li>
                              <li><strong>LoadNinja:</strong> Real browser-based testing</li>
                            </ul>
                          </div>
                          
                          <div class="platform-cat">
                            <h8>Open Source Tools</h8>
                            <ul>
                              <li><strong>Apache JMeter:</strong> Comprehensive load testing</li>
                              <li><strong>Gatling:</strong> High-performance load testing</li>
                              <li><strong>Locust:</strong> Python-based distributed testing</li>
                              <li><strong>Artillery:</strong> Modern load testing toolkit</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="optimization-strategies">
              <h5>🚀 Advanced Optimization Strategies</h5>
              
              <div class="optimization-levels">
                <div class="opt-level">
                  <h6>Hardware-Level Optimization</h6>
                  <div class="optimization-techniques">
                    <div class="opt-technique">
                      <h7>CPU Optimization</h7>
                      <ul>
                        <li><strong>Instruction Set Utilization:</strong> SIMD, AVX, vectorization</li>
                        <li><strong>Cache Optimization:</strong> Data locality and cache-friendly algorithms</li>
                        <li><strong>Branch Prediction:</strong> Control flow optimization</li>
                        <li><strong>Parallel Processing:</strong> Multi-core and thread utilization</li>
                      </ul>
                    </div>
                    
                    <div class="opt-technique">
                      <h7>Memory Hierarchy Optimization</h7>
                      <ul>
                        <li><strong>Cache-Conscious Programming:</strong> Data structure layout optimization</li>
                        <li><strong>Memory Pool Management:</strong> Custom allocation strategies</li>
                        <li><strong>NUMA Awareness:</strong> Non-uniform memory access optimization</li>
                        <li><strong>Prefetching Strategies:</strong> Predictive data loading</li>
                      </ul>
                    </div>
                    
                    <div class="opt-technique">
                      <h7>Storage I/O Optimization</h7>
                      <ul>
                        <li><strong>Queue Depth Tuning:</strong> Concurrent I/O optimization</li>
                        <li><strong>Alignment and Striping:</strong> Storage geometry optimization</li>
                        <li><strong>Caching Strategies:</strong> Read/write cache optimization</li>
                        <li><strong>Compression and Deduplication:</strong> Storage efficiency improvement</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="opt-level">
                  <h6>Software-Level Optimization</h6>
                  <div class="optimization-techniques">
                    <div class="opt-technique">
                      <h7>Algorithm and Data Structure Optimization</h7>
                      <ul>
                        <li><strong>Complexity Analysis:</strong> Big O notation and performance prediction</li>
                        <li><strong>Data Structure Selection:</strong> Optimal structure for access patterns</li>
                        <li><strong>Algorithm Refinement:</strong> More efficient algorithm implementation</li>
                        <li><strong>Lazy Evaluation:</strong> Deferred computation strategies</li>
                      </ul>
                    </div>
                    
                    <div class="opt-technique">
                      <h7>Concurrency and Parallelism</h7>
                      <ul>
                        <li><strong>Thread Pool Management:</strong> Optimal thread utilization</li>
                        <li><strong>Lock-Free Programming:</strong> Atomic operations and lockless algorithms</li>
                        <li><strong>Asynchronous Programming:</strong> Non-blocking I/O and event-driven architectures</li>
                        <li><strong>Work Distribution:</strong> Load balancing and task partitioning</li>
                      </ul>
                    </div>
                    
                    <div class="opt-technique">
                      <h7>Resource Management</h7>
                      <ul>
                        <li><strong>Memory Management:</strong> Custom allocators and garbage collection tuning</li>
                        <li><strong>Connection Pooling:</strong> Database and network connection optimization</li>
                        <li><strong>Resource Pooling:</strong> Object reuse and lifecycle management</li>
                        <li><strong>Batch Processing:</strong> Bulk operation optimization</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="opt-level">
                  <h6>System-Level Optimization</h6>
                  <div class="optimization-techniques">
                    <div class="opt-technique">
                      <h7>Operating System Tuning</h7>
                      <ul>
                        <li><strong>Kernel Parameter Tuning:</strong> System call optimization</li>
                        <li><strong>Scheduler Configuration:</strong> Process priority and affinity</li>
                        <li><strong>Virtual Memory Tuning:</strong> Paging and swapping optimization</li>
                        <li><strong>File System Optimization:</strong> Mount options and journaling</li>
                      </ul>
                    </div>
                    
                    <div class="opt-technique">
                      <h7>Network Optimization</h7>
                      <ul>
                        <li><strong>TCP/IP Stack Tuning:</strong> Buffer sizes and window scaling</li>
                        <li><strong>Network Interface Optimization:</strong> Driver settings and offloading</li>
                        <li><strong>Protocol Selection:</strong> Optimal protocol for use case</li>
                        <li><strong>Quality of Service:</strong> Traffic prioritization and shaping</li>
                      </ul>
                    </div>
                    
                    <div class="opt-technique">
                      <h7>Service and Process Optimization</h7>
                      <ul>
                        <li><strong>Service Configuration:</strong> Startup type and dependency optimization</li>
                        <li><strong>Process Isolation:</strong> Container and virtualization optimization</li>
                        <li><strong>Resource Limits:</strong> CPU, memory, and I/O constraints</li>
                        <li><strong>Monitoring Integration:</strong> Performance metric collection</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="capacity-planning">
              <h5>📊 Strategic Capacity Planning</h5>
              
              <div class="planning-methodology">
                <h6>Predictive Capacity Management</h6>
                
                <div class="planning-phases">
                  <div class="planning-phase">
                    <h7>🔍 Current State Assessment</h7>
                    <ul>
                      <li><strong>Resource Inventory:</strong> Complete infrastructure and capacity audit</li>
                      <li><strong>Utilization Analysis:</strong> Historical usage pattern analysis</li>
                      <li><strong>Performance Baseline:</strong> Current performance characteristic documentation</li>
                      <li><strong>Bottleneck Identification:</strong> Constraint and limitation analysis</li>
                    </ul>
                  </div>
                  
                  <div class="planning-phase">
                    <h7>📈 Growth Projection</h7>
                    <ul>
                      <li><strong>Business Growth Modeling:</strong> User and transaction growth prediction</li>
                      <li><strong>Technology Evolution:</strong> Platform and technology change impact</li>
                      <li><strong>Seasonal Variation:</strong> Cyclical demand pattern analysis</li>
                      <li><strong>Scenario Planning:</strong> Best/worst/most likely case modeling</li>
                    </ul>
                  </div>
                  
                  <div class="planning-phase">
                    <h7>💡 Capacity Strategy</h7>
                    <ul>
                      <li><strong>Scaling Strategy:</strong> Vertical vs. horizontal scaling decisions</li>
                      <li><strong>Resource Allocation:</strong> Optimal resource distribution planning</li>
                      <li><strong>Technology Refresh:</strong> Hardware and software upgrade planning</li>
                      <li><strong>Cloud Integration:</strong> Hybrid and multi-cloud capacity strategies</li>
                    </ul>
                  </div>
                  
                  <div class="planning-phase">
                    <h7>🎯 Implementation Planning</h7>
                    <ul>
                      <li><strong>Phased Deployment:</strong> Risk-managed capacity expansion</li>
                      <li><strong>Budget Planning:</strong> Cost optimization and ROI analysis</li>
                      <li><strong>Risk Mitigation:</strong> Contingency and fallback planning</li>
                      <li><strong>Success Metrics:</strong> Capacity effectiveness measurement</li>
                    </ul>
                  </div>
                </div>
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
      ),
      'monitor-internal': (
        <div className="visual-learning-content">
          <div className="display-technology-showcase">
            <h4>📺 Display Technology Showcase</h4>
            
            <div className="technology-comparison">
              <div className="tech-demo">
                <h5>Monitor Panel Technologies</h5>
                <div className="panel-grid">
                  <div className="panel-type">
                    <img src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop" alt="TN Panel Display" />
                    <h6>TN Panel</h6>
                    <div className="specs">
                      <span className="spec-good">1ms Response</span>
                      <span className="spec-bad">Poor Viewing Angles</span>
                    </div>
                  </div>
                  
                  <div className="panel-type">
                    <img src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=200&fit=crop" alt="IPS Panel Display" />
                    <h6>IPS Panel</h6>
                    <div className="specs">
                      <span className="spec-good">Excellent Colors</span>
                      <span className="spec-neutral">4ms Response</span>
                    </div>
                  </div>
                  
                  <div className="panel-type">
                    <img src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=300&h=200&fit=crop" alt="OLED Panel Display" />
                    <h6>OLED Panel</h6>
                    <div className="specs">
                      <span className="spec-excellent">0.1ms Response</span>
                      <span className="spec-bad">Burn-in Risk</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="connection-diagram">
              <h5>🔌 Display Connection Types</h5>
              <div className="connection-visual">
                <svg viewBox="0 0 800 400" className="connection-flowchart">
                  <defs>
                    <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#667eea" />
                    </marker>
                  </defs>
                  
                  {/* Graphics Card */}
                  <rect x="50" y="150" width="120" height="100" rx="10" fill="#667eea" />
                  <text x="110" y="185" textAnchor="middle" fill="white" fontSize="12">Graphics Card</text>
                  <text x="110" y="200" textAnchor="middle" fill="white" fontSize="10">RTX 4080</text>
                  <text x="110" y="215" textAnchor="middle" fill="white" fontSize="10">Multiple Outputs</text>
                  
                  {/* HDMI Connection */}
                  <rect x="250" y="100" width="100" height="40" rx="5" fill="#e74c3c" />
                  <text x="300" y="125" textAnchor="middle" fill="white" fontSize="11">HDMI 2.1</text>
                  <line x1="170" y1="170" x2="250" y2="120" stroke="#667eea" strokeWidth="3" markerEnd="url(#arrowhead2)" />
                  
                  {/* DisplayPort Connection */}
                  <rect x="250" y="160" width="100" height="40" rx="5" fill="#2ecc71" />
                  <text x="300" y="185" textAnchor="middle" fill="white" fontSize="11">DisplayPort 1.4</text>
                  <line x1="170" y1="200" x2="250" y2="180" stroke="#667eea" strokeWidth="3" markerEnd="url(#arrowhead2)" />
                  
                  {/* USB-C Connection */}
                  <rect x="250" y="220" width="100" height="40" rx="5" fill="#9b59b6" />
                  <text x="300" y="245" textAnchor="middle" fill="white" fontSize="11">USB-C (DP Alt)</text>
                  <line x1="170" y1="230" x2="250" y2="240" stroke="#667eea" strokeWidth="3" markerEnd="url(#arrowhead2)" />
                  
                  {/* Monitors */}
                  <rect x="450" y="80" width="100" height="60" rx="5" fill="#34495e" />
                  <text x="500" y="115" textAnchor="middle" fill="white" fontSize="11">4K Monitor</text>
                  <line x1="350" y1="120" x2="450" y2="110" stroke="#e74c3c" strokeWidth="3" markerEnd="url(#arrowhead2)" />
                  
                  <rect x="450" y="160" width="100" height="60" rx="5" fill="#34495e" />
                  <text x="500" y="195" textAnchor="middle" fill="white" fontSize="11">Gaming Monitor</text>
                  <line x1="350" y1="180" x2="450" y2="190" stroke="#2ecc71" strokeWidth="3" markerEnd="url(#arrowhead2)" />
                  
                  <rect x="450" y="240" width="100" height="60" rx="5" fill="#34495e" />
                  <text x="500" y="275" textAnchor="middle" fill="white" fontSize="11">Laptop Display</text>
                  <line x1="350" y1="240" x2="450" y2="270" stroke="#9b59b6" strokeWidth="3" markerEnd="url(#arrowhead2)" />
                  
                  {/* Specifications */}
                  <text x="600" y="100" fontSize="10">Max: 8K@60Hz</text>
                  <text x="600" y="115" fontSize="10">Audio: Yes</text>
                  
                  <text x="600" y="180" fontSize="10">Max: 8K@60Hz</text>
                  <text x="600" y="195" fontSize="10">Daisy Chain: Yes</text>
                  
                  <text x="600" y="260" fontSize="10">Max: 4K@60Hz</text>
                  <text x="600" y="275" fontSize="10">Power: 100W</text>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="diagnostic-tools-visual">
            <h4>🛠️ Visual Diagnostic Tools</h4>
            <div className="tool-showcase">
              <div className="tool-demo">
                <h5>GPU Monitoring Dashboard</h5>
                <div className="mock-dashboard">
                  <div className="gauge">
                    <div className="gauge-label">GPU Temperature</div>
                    <div className="gauge-value">72°C</div>
                    <div className="gauge-status normal">Normal</div>
                  </div>
                  <div className="gauge">
                    <div className="gauge-label">Memory Usage</div>
                    <div className="gauge-value">6.2/8 GB</div>
                    <div className="gauge-status normal">Normal</div>
                  </div>
                  <div className="gauge">
                    <div className="gauge-label">GPU Load</div>
                    <div className="gauge-value">85%</div>
                    <div className="gauge-status high">High</div>
                  </div>
                </div>
              </div>
              
              <div className="tool-demo">
                <h5>Display Test Patterns</h5>
                <div className="test-patterns">
                  <div className="pattern-grid">
                    <div className="test-pattern gradient">Gradient Test</div>
                    <div className="test-pattern checkerboard">Pixel Test</div>
                    <div className="test-pattern color-bars">Color Bars</div>
                    <div className="test-pattern text-clarity">Text Clarity</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      'peripherals-software': (
        <div className="visual-learning-content">
          <div className="device-testing-visual">
            <h4>🧪 Interactive Device Testing Laboratory</h4>
            
            <div className="testing-station">
              <h5>Input Device Testing Station</h5>
              <div className="testing-setup">
                <div className="device-showcase">
                  <div className="device-visual">
                    <div className="mouse-tester">
                      <h6>🖱️ Mouse Performance Analyzer</h6>
                      <div className="mock-testing-interface">
                        <div className="performance-metrics">
                          <div className="metric">
                            <span className="metric-label">DPI Accuracy</span>
                            <span className="metric-value">98.5%</span>
                            <div className="metric-bar">
                              <div className="metric-fill" style={{width: '98.5%'}}></div>
                            </div>
                          </div>
                          <div className="metric">
                            <span className="metric-label">Polling Rate</span>
                            <span className="metric-value">1000Hz</span>
                            <div className="metric-bar">
                              <div className="metric-fill excellent" style={{width: '100%'}}></div>
                            </div>
                          </div>
                          <div className="metric">
                            <span className="metric-label">Click Latency</span>
                            <span className="metric-value">1.2ms</span>
                            <div className="metric-bar">
                              <div className="metric-fill good" style={{width: '95%'}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="keyboard-tester">
                      <h6>⌨️ Keyboard Matrix Analyzer</h6>
                      <div className="key-matrix-visual">
                        <div className="matrix-grid">
                          <div className="key-row">
                            <div className="key active">Q</div>
                            <div className="key active">W</div>
                            <div className="key">E</div>
                            <div className="key">R</div>
                            <div className="key">T</div>
                          </div>
                          <div className="key-row">
                            <div className="key active">A</div>
                            <div className="key active">S</div>
                            <div className="key active">D</div>
                            <div className="key">F</div>
                            <div className="key">G</div>
                          </div>
                          <div className="status-indicator">
                            <span className="status-label">N-Key Rollover:</span>
                            <span className="status-value">5 Keys Active</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="printer-network-visual">
            <h4>🌐 Network Printer Infrastructure</h4>
            
            <div className="network-topology">
              <h5>Enterprise Printing Network</h5>
              <div className="topology-diagram">
                <svg viewBox="0 0 800 500" className="network-diagram">
                  <defs>
                    <marker id="networkarrow" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#2ecc71" />
                    </marker>
                  </defs>
                  
                  {/* Print Server */}
                  <rect x="350" y="50" width="100" height="60" rx="5" fill="#3498db" />
                  <text x="400" y="85" textAnchor="middle" fill="white" fontSize="12">Print Server</text>
                  
                  {/* Network Switch */}
                  <rect x="350" y="200" width="100" height="40" rx="5" fill="#95a5a6" />
                  <text x="400" y="225" textAnchor="middle" fill="white" fontSize="11">Network Switch</text>
                  
                  {/* Printers */}
                  <rect x="150" y="350" width="80" height="50" rx="5" fill="#e74c3c" />
                  <text x="190" y="380" textAnchor="middle" fill="white" fontSize="10">Laser Printer</text>
                  
                  <rect x="300" y="350" width="80" height="50" rx="5" fill="#9b59b6" />
                  <text x="340" y="380" textAnchor="middle" fill="white" fontSize="10">Inkjet MFP</text>
                  
                  <rect x="450" y="350" width="80" height="50" rx="5" fill="#f39c12" />
                  <text x="490" y="380" textAnchor="middle" fill="white" fontSize="10">Color Laser</text>
                  
                  <rect x="600" y="350" width="80" height="50" rx="5" fill="#1abc9c" />
                  <text x="640" y="380" textAnchor="middle" fill="white" fontSize="10">Wide Format</text>
                  
                  {/* Connections */}
                  <line x1="400" y1="110" x2="400" y2="200" stroke="#2ecc71" strokeWidth="3" markerEnd="url(#networkarrow)" />
                  <line x1="400" y1="240" x2="190" y2="350" stroke="#2ecc71" strokeWidth="2" markerEnd="url(#networkarrow)" />
                  <line x1="400" y1="240" x2="340" y2="350" stroke="#2ecc71" strokeWidth="2" markerEnd="url(#networkarrow)" />
                  <line x1="400" y1="240" x2="490" y2="350" stroke="#2ecc71" strokeWidth="2" markerEnd="url(#networkarrow)" />
                  <line x1="400" y1="240" x2="640" y2="350" stroke="#2ecc71" strokeWidth="2" markerEnd="url(#networkarrow)" />
                  
                  {/* IP Addresses */}
                  <text x="190" y="420" textAnchor="middle" fontSize="9">192.168.1.10</text>
                  <text x="340" y="420" textAnchor="middle" fontSize="9">192.168.1.11</text>
                  <text x="490" y="420" textAnchor="middle" fontSize="9">192.168.1.12</text>
                  <text x="640" y="420" textAnchor="middle" fontSize="9">192.168.1.13</text>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="software-conflict-visual">
            <h4>⚔️ Software Conflict Analysis Dashboard</h4>
            
            <div className="conflict-dashboard">
              <h5>System Health Monitor</h5>
              <div className="dashboard-panels">
                <div className="panel-grid">
                  <div className="status-panel">
                    <h6>System Services</h6>
                    <div className="service-list">
                      <div className="service-item running">
                        <span className="service-name">Print Spooler</span>
                        <span className="service-status">Running</span>
                      </div>
                      <div className="service-item warning">
                        <span className="service-name">Windows Update</span>
                        <span className="service-status">Warning</span>
                      </div>
                      <div className="service-item error">
                        <span className="service-name">Audio Service</span>
                        <span className="service-status">Stopped</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="status-panel">
                    <h6>Driver Status</h6>
                    <div className="driver-status-grid">
                      <div className="driver-item">
                        <span className="driver-type">Graphics</span>
                        <div className="status-indicator ok"></div>
                      </div>
                      <div className="driver-item">
                        <span className="driver-type">Audio</span>
                        <div className="status-indicator warning"></div>
                      </div>
                      <div className="driver-item">
                        <span className="driver-type">Network</span>
                        <div className="status-indicator ok"></div>
                      </div>
                      <div className="driver-item">
                        <span className="driver-type">USB</span>
                        <div className="status-indicator error"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="status-panel">
                    <h6>Performance Impact</h6>
                    <div className="performance-chart">
                      <div className="chart-bar" style={{height: '60%'}}>
                        <span className="bar-label">CPU</span>
                      </div>
                      <div className="chart-bar" style={{height: '80%'}}>
                        <span className="bar-label">Memory</span>
                      </div>
                      <div className="chart-bar" style={{height: '40%'}}>
                        <span className="bar-label">Disk</span>
                      </div>
                      <div className="chart-bar" style={{height: '30%'}}>
                        <span className="bar-label">Network</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="troubleshooting-flowchart">
            <h4>🔄 Interactive Troubleshooting Flowchart</h4>
            
            <div className="flowchart-container">
              <div className="flowchart-step start">
                <h6>Device Problem Reported</h6>
                <div className="step-options">
                  <button className="option-btn">Input Device</button>
                  <button className="option-btn">Printer Issue</button>
                  <button className="option-btn">Software Conflict</button>
                </div>
              </div>
              
              <div className="flowchart-paths">
                <div className="path-branch">
                  <div className="decision-node">
                    <span>Physical Connection?</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      'tools-security': (
        <div className="visual-learning-content">
          <div className="monitoring-dashboard-section">
            <h4>🖥️ Enterprise Monitoring Dashboards</h4>
            
            <div className="dashboard-showcase">
              <div className="siem-dashboard">
                <h5>Security Information and Event Management (SIEM) Console</h5>
                <div className="dashboard-interface">
                  <div className="dashboard-header">
                    <div className="status-indicators">
                      <div className="indicator critical">🔴 Critical: 3</div>
                      <div className="indicator warning">🟡 Warning: 15</div>
                      <div className="indicator info">🟢 Info: 247</div>
                    </div>
                    <div className="time-range">
                      <span>Last 24 Hours | Auto-refresh: 30s</span>
                    </div>
                  </div>
                  
                  <div className="dashboard-grid">
                    <div className="widget threat-map">
                      <h6>🌍 Global Threat Map</h6>
                      <div className="map-visualization">
                        <div className="threat-indicators">
                          <div className="threat-point us">🔴 USA (127 events)</div>
                          <div className="threat-point eu">🟡 Europe (89 events)</div>
                          <div className="threat-point as">🟢 Asia (234 events)</div>
                        </div>
                        <div className="connection-lines">
                          <div className="attack-vector">DDoS Attack Vector</div>
                          <div className="malware-spread">Malware Propagation</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="widget security-metrics">
                      <h6>📊 Security Metrics</h6>
                      <div className="metrics-grid">
                        <div className="metric">
                          <span className="metric-label">Events/Hour</span>
                          <span className="metric-value">12,847</span>
                          <span className="metric-trend up">↗ +15%</span>
                        </div>
                        <div className="metric">
                          <span className="metric-label">Failed Logins</span>
                          <span className="metric-value">1,234</span>
                          <span className="metric-trend down">↘ -8%</span>
                        </div>
                        <div className="metric">
                          <span className="metric-label">Blocked IPs</span>
                          <span className="metric-value">456</span>
                          <span className="metric-trend stable">→ 0%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="widget incident-timeline">
                      <h6>⏰ Recent Security Incidents</h6>
                      <div className="timeline">
                        <div className="incident critical">
                          <div className="incident-time">14:23</div>
                          <div className="incident-details">
                            <span className="incident-type">Malware Detection</span>
                            <span className="incident-host">WORKSTATION-042</span>
                          </div>
                        </div>
                        <div className="incident warning">
                          <div className="incident-time">14:15</div>
                          <div className="incident-details">
                            <span className="incident-type">Brute Force Attack</span>
                            <span className="incident-host">192.168.1.105</span>
                          </div>
                        </div>
                        <div className="incident info">
                          <div className="incident-time">14:08</div>
                          <div className="incident-details">
                            <span className="incident-type">Policy Violation</span>
                            <span className="incident-host">USER: jdoe</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="performance-dashboard">
                <h5>⚡ System Performance Analytics</h5>
                <div className="performance-interface">
                  <div className="performance-overview">
                    <div className="system-health">
                      <h6>🖥️ System Health Status</h6>
                      <div className="health-indicators">
                        <div className="health-metric cpu">
                          <div className="gauge-container">
                            <div className="gauge">
                              <div className="gauge-fill" style={{width: '68%'}}></div>
                            </div>
                            <span className="gauge-label">CPU: 68%</span>
                          </div>
                        </div>
                        <div className="health-metric memory">
                          <div className="gauge-container">
                            <div className="gauge">
                              <div className="gauge-fill memory-fill" style={{width: '42%'}}></div>
                            </div>
                            <span className="gauge-label">Memory: 42%</span>
                          </div>
                        </div>
                        <div className="health-metric disk">
                          <div className="gauge-container">
                            <div className="gauge">
                              <div className="gauge-fill disk-fill" style={{width: '78%'}}></div>
                            </div>
                            <span className="gauge-label">Disk: 78%</span>
                          </div>
                        </div>
                        <div className="health-metric network">
                          <div className="gauge-container">
                            <div className="gauge">
                              <div className="gauge-fill network-fill" style={{width: '34%'}}></div>
                            </div>
                            <span className="gauge-label">Network: 34%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="performance-trends">
                      <h6>📈 Performance Trends (24h)</h6>
                      <div className="trend-charts">
                        <div className="chart-container">
                          <div className="chart cpu-chart">
                            <div className="chart-line"></div>
                            <div className="chart-points">
                              <span className="point p1"></span>
                              <span className="point p2"></span>
                              <span className="point p3"></span>
                              <span className="point p4"></span>
                              <span className="point p5"></span>
                            </div>
                          </div>
                          <span className="chart-label">CPU Utilization</span>
                        </div>
                        <div className="chart-container">
                          <div className="chart memory-chart">
                            <div className="chart-line memory-line"></div>
                            <div className="chart-points">
                              <span className="point p1"></span>
                              <span className="point p2"></span>
                              <span className="point p3"></span>
                              <span className="point p4"></span>
                              <span className="point p5"></span>
                            </div>
                          </div>
                          <span className="chart-label">Memory Usage</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="security-architecture-section">
            <h4>🏗️ Security Architecture Visualization</h4>
            
            <div className="architecture-diagrams">
              <div className="network-security-diagram">
                <h5>🛡️ Multi-Layer Security Architecture</h5>
                <div className="security-layers">
                  <div className="layer perimeter">
                    <div className="layer-header">
                      <h6>Perimeter Security</h6>
                    </div>
                    <div className="layer-components">
                      <div className="component firewall">
                        <span className="component-icon">🔥</span>
                        <span className="component-name">Next-Gen Firewall</span>
                      </div>
                      <div className="component ips">
                        <span className="component-icon">🚨</span>
                        <span className="component-name">IPS/IDS</span>
                      </div>
                      <div className="component waf">
                        <span className="component-icon">🌐</span>
                        <span className="component-name">Web App Firewall</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="layer network">
                    <div className="layer-header">
                      <h6>Network Security</h6>
                    </div>
                    <div className="layer-components">
                      <div className="component segmentation">
                        <span className="component-icon">🔗</span>
                        <span className="component-name">Network Segmentation</span>
                      </div>
                      <div className="component nac">
                        <span className="component-icon">🔑</span>
                        <span className="component-name">Network Access Control</span>
                      </div>
                      <div className="component monitoring">
                        <span className="component-icon">👁️</span>
                        <span className="component-name">Traffic Monitoring</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="layer endpoint">
                    <div className="layer-header">
                      <h6>Endpoint Security</h6>
                    </div>
                    <div className="layer-components">
                      <div className="component antivirus">
                        <span className="component-icon">🛡️</span>
                        <span className="component-name">EDR/Antivirus</span>
                      </div>
                      <div className="component encryption">
                        <span className="component-icon">🔐</span>
                        <span className="component-name">Device Encryption</span>
                      </div>
                      <div className="component dlp">
                        <span className="component-icon">📋</span>
                        <span className="component-name">Data Loss Prevention</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="layer application">
                    <div className="layer-header">
                      <h6>Application Security</h6>
                    </div>
                    <div className="layer-components">
                      <div className="component authentication">
                        <span className="component-icon">👤</span>
                        <span className="component-name">Multi-Factor Auth</span>
                      </div>
                      <div className="component authorization">
                        <span className="component-icon">🔒</span>
                        <span className="component-name">RBAC</span>
                      </div>
                      <div className="component monitoring-app">
                        <span className="component-icon">📊</span>
                        <span className="component-name">App Monitoring</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="layer data">
                    <div className="layer-header">
                      <h6>Data Security</h6>
                    </div>
                    <div className="layer-components">
                      <div className="component classification">
                        <span className="component-icon">🏷️</span>
                        <span className="component-name">Data Classification</span>
                      </div>
                      <div className="component encryption-data">
                        <span className="component-icon">🔐</span>
                        <span className="component-name">Encryption at Rest</span>
                      </div>
                      <div className="component backup">
                        <span className="component-icon">💾</span>
                        <span className="component-name">Secure Backup</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="threat-flow">
                  <h6>🎯 Threat Detection Flow</h6>
                  <div className="flow-diagram">
                    <div className="flow-step">
                      <div className="step-box detection">Detection</div>
                      <div className="step-arrow">→</div>
                    </div>
                    <div className="flow-step">
                      <div className="step-box analysis">Analysis</div>
                      <div className="step-arrow">→</div>
                    </div>
                    <div className="flow-step">
                      <div className="step-box correlation">Correlation</div>
                      <div className="step-arrow">→</div>
                    </div>
                    <div className="flow-step">
                      <div className="step-box response">Response</div>
                      <div className="step-arrow">→</div>
                    </div>
                    <div className="flow-step">
                      <div className="step-box remediation">Remediation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="performance-optimization-lab">
            <h4>🧪 Performance Optimization Laboratory</h4>
            
            <div className="optimization-tools">
              <div className="benchmark-suite">
                <h5>⚡ System Benchmarking Suite</h5>
                <div className="benchmark-interface">
                  <div className="benchmark-controls">
                    <div className="test-selection">
                      <h6>Select Benchmark Tests:</h6>
                      <div className="test-options">
                        <label className="test-option">
                          <input type="checkbox" defaultChecked />
                          <span>CPU Performance Test</span>
                        </label>
                        <label className="test-option">
                          <input type="checkbox" defaultChecked />
                          <span>Memory Bandwidth Test</span>
                        </label>
                        <label className="test-option">
                          <input type="checkbox" />
                          <span>Storage I/O Test</span>
                        </label>
                        <label className="test-option">
                          <input type="checkbox" />
                          <span>Network Throughput Test</span>
                        </label>
                      </div>
                    </div>
                    
                    <div className="test-parameters">
                      <h6>Test Parameters:</h6>
                      <div className="parameter-controls">
                        <div className="parameter">
                          <label>Duration (minutes):</label>
                          <input type="range" min="1" max="60" defaultValue="10" />
                          <span className="value">10</span>
                        </div>
                        <div className="parameter">
                          <label>Stress Level:</label>
                          <select defaultValue="medium">
                            <option value="light">Light</option>
                            <option value="medium">Medium</option>
                            <option value="heavy">Heavy</option>
                            <option value="extreme">Extreme</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div className="benchmark-actions">
                      <button className="btn-primary">🚀 Start Benchmark</button>
                      <button className="btn-secondary">📊 View History</button>
                      <button className="btn-secondary">📋 Export Results</button>
                    </div>
                  </div>
                  
                  <div className="benchmark-results">
                    <h6>📈 Real-time Performance Metrics</h6>
                    <div className="metrics-display">
                      <div className="metric-group cpu-metrics">
                        <h7>CPU Performance</h7>
                        <div className="metric">
                          <span className="metric-name">Single-Core Score:</span>
                          <span className="metric-value">1,847</span>
                          <span className="metric-unit">points</span>
                        </div>
                        <div className="metric">
                          <span className="metric-name">Multi-Core Score:</span>
                          <span className="metric-value">12,459</span>
                          <span className="metric-unit">points</span>
                        </div>
                        <div className="metric">
                          <span className="metric-name">Temperature:</span>
                          <span className="metric-value">68°C</span>
                          <span className="metric-status normal">Normal</span>
                        </div>
                      </div>
                      
                      <div className="metric-group memory-metrics">
                        <h7>Memory Performance</h7>
                        <div className="metric">
                          <span className="metric-name">Read Bandwidth:</span>
                          <span className="metric-value">45.2</span>
                          <span className="metric-unit">GB/s</span>
                        </div>
                        <div className="metric">
                          <span className="metric-name">Write Bandwidth:</span>
                          <span className="metric-value">42.8</span>
                          <span className="metric-unit">GB/s</span>
                        </div>
                        <div className="metric">
                          <span className="metric-name">Latency:</span>
                          <span className="metric-value">65</span>
                          <span className="metric-unit">ns</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="optimization-analyzer">
                <h5>🔍 System Optimization Analyzer</h5>
                <div className="analyzer-interface">
                  <div className="analysis-categories">
                    <div className="category startup">
                      <h6>🚀 Startup Optimization</h6>
                      <div className="optimization-items">
                        <div className="optimization-item">
                          <span className="item-icon">⚠️</span>
                          <span className="item-name">Disable unnecessary startup programs</span>
                          <span className="item-impact">High Impact</span>
                          <button className="btn-optimize">Optimize</button>
                        </div>
                        <div className="optimization-item">
                          <span className="item-icon">ℹ️</span>
                          <span className="item-name">Enable Fast Startup</span>
                          <span className="item-impact">Medium Impact</span>
                          <button className="btn-optimize">Optimize</button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="category services">
                      <h6>⚙️ Service Optimization</h6>
                      <div className="optimization-items">
                        <div className="optimization-item">
                          <span className="item-icon">⚠️</span>
                          <span className="item-name">Stop unused Windows services</span>
                          <span className="item-impact">High Impact</span>
                          <button className="btn-optimize">Optimize</button>
                        </div>
                        <div className="optimization-item">
                          <span className="item-icon">💡</span>
                          <span className="item-name">Optimize indexing service</span>
                          <span className="item-impact">Low Impact</span>
                          <button className="btn-optimize">Optimize</button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="category storage">
                      <h6>💾 Storage Optimization</h6>
                      <div className="optimization-items">
                        <div className="optimization-item">
                          <span className="item-icon">⚠️</span>
                          <span className="item-name">Clean temporary files</span>
                          <span className="item-impact">Medium Impact</span>
                          <button className="btn-optimize">Optimize</button>
                        </div>
                        <div className="optimization-item">
                          <span className="item-icon">ℹ️</span>
                          <span className="item-name">Optimize SSD settings</span>
                          <span className="item-impact">Medium Impact</span>
                          <button className="btn-optimize">Optimize</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="optimization-summary">
                    <h6>📊 Optimization Summary</h6>
                    <div className="summary-stats">
                      <div className="stat">
                        <span className="stat-label">Potential Speed Improvement:</span>
                        <span className="stat-value">23%</span>
                      </div>
                      <div className="stat">
                        <span className="stat-label">Memory Recovery:</span>
                        <span className="stat-value">1.2 GB</span>
                      </div>
                      <div className="stat">
                        <span className="stat-label">Storage Cleanup:</span>
                        <span className="stat-value">4.7 GB</span>
                      </div>
                    </div>
                    <button className="btn-primary">🎯 Apply All Optimizations</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="backup-recovery-simulator">
            <h4>💾 Backup & Recovery Simulation</h4>
            
            <div className="backup-interface">
              <div className="backup-strategy-designer">
                <h5>📋 3-2-1 Backup Strategy Designer</h5>
                <div className="strategy-builder">
                  <div className="backup-rule rule-3">
                    <div className="rule-number">3</div>
                    <div className="rule-content">
                      <h6>Three Copies of Data</h6>
                      <div className="copy-selection">
                        <div className="copy-item primary">
                          <span className="copy-icon">💻</span>
                          <span className="copy-label">Primary (Production)</span>
                          <span className="copy-location">Local Workstation</span>
                        </div>
                        <div className="copy-item backup1">
                          <span className="copy-icon">💾</span>
                          <span className="copy-label">Backup Copy 1</span>
                          <select className="location-select">
                            <option>External USB Drive</option>
                            <option>Network Attached Storage</option>
                            <option>Local Server</option>
                          </select>
                        </div>
                        <div className="copy-item backup2">
                          <span className="copy-icon">☁️</span>
                          <span className="copy-label">Backup Copy 2</span>
                          <select className="location-select">
                            <option>Cloud Storage</option>
                            <option>Remote Data Center</option>
                            <option>Offsite Tape Storage</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="backup-rule rule-2">
                    <div className="rule-number">2</div>
                    <div className="rule-content">
                      <h6>Two Different Media Types</h6>
                      <div className="media-types">
                        <div className="media-type">
                          <span className="media-icon">💽</span>
                          <span className="media-name">Solid State Storage</span>
                          <span className="media-status selected">✓ Selected</span>
                        </div>
                        <div className="media-type">
                          <span className="media-icon">☁️</span>
                          <span className="media-name">Cloud Storage</span>
                          <span className="media-status selected">✓ Selected</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="backup-rule rule-1">
                    <div className="rule-number">1</div>
                    <div className="rule-content">
                      <h6>One Offsite Copy</h6>
                      <div className="offsite-options">
                        <div className="offsite-location">
                          <span className="location-icon">🌐</span>
                          <span className="location-name">Cloud Provider</span>
                          <span className="location-distance">Global Distribution</span>
                          <span className="location-status active">✓ Active</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="backup-schedule">
                  <h6>⏰ Backup Schedule Configuration</h6>
                  <div className="schedule-options">
                    <div className="schedule-type">
                      <label>Full Backup:</label>
                      <select>
                        <option>Weekly (Sunday)</option>
                        <option>Monthly</option>
                        <option>Quarterly</option>
                      </select>
                    </div>
                    <div className="schedule-type">
                      <label>Incremental Backup:</label>
                      <select>
                        <option>Daily</option>
                        <option>Every 6 hours</option>
                        <option>Hourly</option>
                      </select>
                    </div>
                    <div className="schedule-type">
                      <label>Retention Policy:</label>
                      <select>
                        <option>30 days</option>
                        <option>90 days</option>
                        <option>1 year</option>
                        <option>7 years (compliance)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="recovery-simulator">
                <h5>🔄 Disaster Recovery Simulator</h5>
                <div className="recovery-scenarios">
                  <div className="scenario-selection">
                    <h6>Select Recovery Scenario:</h6>
                    <div className="scenario-options">
                      <div className="scenario-option">
                        <input type="radio" name="scenario" id="hardware-failure" />
                        <label htmlFor="hardware-failure">Hardware Failure</label>
                      </div>
                      <div className="scenario-option">
                        <input type="radio" name="scenario" id="ransomware" />
                        <label htmlFor="ransomware">Ransomware Attack</label>
                      </div>
                      <div className="scenario-option">
                        <input type="radio" name="scenario" id="data-corruption" />
                        <label htmlFor="data-corruption">Data Corruption</label>
                      </div>
                      <div className="scenario-option">
                        <input type="radio" name="scenario" id="accidental-deletion" />
                        <label htmlFor="accidental-deletion">Accidental Deletion</label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="recovery-timeline">
                    <h6>📊 Recovery Time Analysis</h6>
                    <div className="timeline-metrics">
                      <div className="metric rto">
                        <span className="metric-label">Recovery Time Objective (RTO):</span>
                        <span className="metric-value">4 hours</span>
                        <span className="metric-status good">✓ Achievable</span>
                      </div>
                      <div className="metric rpo">
                        <span className="metric-label">Recovery Point Objective (RPO):</span>
                        <span className="metric-value">1 hour</span>
                        <span className="metric-status good">✓ Achievable</span>
                      </div>
                      <div className="metric mttr">
                        <span className="metric-label">Mean Time to Recover (MTTR):</span>
                        <span className="metric-value">2.5 hours</span>
                        <span className="metric-status excellent">✓ Excellent</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="recovery-actions">
                    <button className="btn-primary">🚀 Start Recovery Simulation</button>
                    <button className="btn-secondary">📋 Generate Recovery Plan</button>
                    <button className="btn-secondary">📊 Test Recovery Procedures</button>
                  </div>
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
      ),
      'monitor-internal': (
        <div className="advanced-reading-content">
          <div className="research-papers">
            <h4>📄 Display Technology Research & Studies</h4>
            <div className="paper-list">
              <div className="paper-item">
                <h5>OLED Display Degradation Patterns and Burn-in Mitigation Strategies</h5>
                <p className="authors">Kim, S.H., Park, J.W., Lee, M.K. (2024)</p>
                <p className="abstract">Comprehensive analysis of OLED panel aging mechanisms and effective burn-in prevention techniques in professional display environments. Study covers 2,000+ hours of accelerated aging tests across multiple OLED technologies...</p>
                <div className="paper-actions">
                  <button className="btn-download">📥 Download PDF</button>
                  <button className="btn-cite">📋 Cite</button>
                </div>
              </div>
              
              <div className="paper-item">
                <h5>Graphics Processing Unit Thermal Management in High-Performance Computing</h5>
                <p className="authors">Rodriguez, A., Thompson, B., Wilson, C. (2023)</p>
                <p className="abstract">Analysis of GPU thermal throttling behaviors and optimization strategies for sustained high-performance computing workloads. Includes thermal imaging studies and performance impact assessments...</p>
                <div className="paper-actions">
                  <button className="btn-download">📥 Download PDF</button>
                  <button className="btn-cite">📋 Cite</button>
                </div>
              </div>
              
              <div className="paper-item">
                <h5>Display Signal Integrity in High-Resolution Multi-Monitor Configurations</h5>
                <p className="authors">Zhang, L., Miller, R., Patel, S. (2024)</p>
                <p className="abstract">Investigation of signal degradation effects in 4K+ multi-monitor setups, including cable length limitations, EMI effects, and signal quality optimization techniques...</p>
                <div className="paper-actions">
                  <button className="btn-download">📥 Download PDF</button>
                  <button className="btn-cite">📋 Cite</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="industry-standards">
            <h4>🏭 Display Industry Standards & Specifications</h4>
            <div className="standards-grid">
              <div className="standard-card">
                <h5>VESA DisplayPort Standard</h5>
                <p>Video Electronics Standards Association specifications for DisplayPort technology, including Alt Mode and Multi-Stream Transport protocols.</p>
                <a href="#" className="standard-link">Read Specification →</a>
              </div>
              
              <div className="standard-card">
                <h5>HDMI 2.1 Specification</h5>
                <p>High-Definition Multimedia Interface standard supporting 8K resolution, Variable Refresh Rate (VRR), and Enhanced Audio Return Channel (eARC).</p>
                <a href="#" className="standard-link">Read Specification →</a>
              </div>
              
              <div className="standard-card">
                <h5>USB-C Display Alt Mode</h5>
                <p>USB Type-C Alternate Mode for DisplayPort specification enabling video output through USB-C connectors with power delivery.</p>
                <a href="#" className="standard-link">Read Specification →</a>
              </div>
              
              <div className="standard-card">
                <h5>JEDEC Graphics Memory Standards</h5>
                <p>Joint Electron Device Engineering Council standards for graphics memory including GDDR6X and HBM3 specifications.</p>
                <a href="#" className="standard-link">Read Specification →</a>
              </div>
            </div>
          </div>
          
          <div className="technology-roadmaps">
            <h4>🚀 Technology Roadmaps & Future Trends</h4>
            <div className="roadmap-section">
              <h5>Display Technology Evolution</h5>
              <div className="timeline-roadmap">
                <div className="roadmap-item">
                  <h6>2024-2025: Current Gen</h6>
                  <ul>
                    <li>OLED mainstream adoption</li>
                    <li>8K consumer displays</li>
                    <li>240Hz+ gaming monitors</li>
                    <li>Mini-LED backlighting</li>
                  </ul>
                </div>
                <div className="roadmap-item">
                  <h6>2026-2027: Next Gen</h6>
                  <ul>
                    <li>Micro-LED commercialization</li>
                    <li>Flexible/foldable displays</li>
                    <li>AR/VR integration</li>
                    <li>AI-powered calibration</li>
                  </ul>
                </div>
                <div className="roadmap-item">
                  <h6>2028+: Future Tech</h6>
                  <ul>
                    <li>Holographic displays</li>
                    <li>Neural interface displays</li>
                    <li>Quantum dot enhancement</li>
                    <li>Self-healing displays</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="case-studies">
            <h4>📊 Professional Display Case Studies</h4>
            
            <div className="case-study-item">
              <h5>Case Study 1: Broadcast Studio Display Wall Troubleshooting</h5>
              <div className="case-details">
                <p><strong>Background:</strong> Major television network experienced color inconsistency across 24-monitor display wall during live broadcasts.</p>
                <p><strong>Challenge:</strong> Identify cause of color drift and implement solution without interrupting broadcast schedule.</p>
                <p><strong>Solution:</strong> Systematic color calibration protocol with automated monitoring and real-time adjustment capabilities.</p>
                <p><strong>Outcome:</strong> Achieved Delta-E &lt; 2.0 color accuracy across all displays with 99.98% uptime during critical broadcast periods.</p>
              </div>
            </div>
            
            <div className="case-study-item">
              <h5>Case Study 2: Gaming Tournament GPU Performance Issues</h5>
              <div className="case-details">
                <p><strong>Background:</strong> International esports tournament faced GPU thermal throttling issues affecting competitive play during high-stakes matches.</p>
                <p><strong>Challenge:</strong> Resolve performance inconsistencies while maintaining tournament schedule and ensuring fair competition.</p>
                <p><strong>Solution:</strong> Implemented advanced cooling solutions and GPU monitoring protocols with real-time performance verification.</p>
                <p><strong>Outcome:</strong> Maintained consistent 240 FPS performance across all systems with zero thermal-related disruptions.</p>
              </div>
            </div>
            
            <div className="case-study-item">
              <h5>Case Study 3: Medical Imaging Display Calibration</h5>
              <div className="case-details">
                <p><strong>Background:</strong> Hospital radiology department required DICOM-compliant display calibration for accurate medical image interpretation.</p>
                <p><strong>Challenge:</strong> Meet stringent medical display standards while managing 40+ diagnostic workstations across multiple departments.</p>
                <p><strong>Solution:</strong> Deployed automated calibration system with QA protocols meeting FDA and ACR requirements.</p>
                <p><strong>Outcome:</strong> Achieved 100% DICOM compliance with automated daily QA checks and centralized monitoring dashboard.</p>
              </div>
            </div>
          </div>
          
          <div className="professional-resources">
            <h4>🎓 Professional Development Resources</h4>
            <div className="resource-grid">
              <div className="resource-card">
                <h5>Display Calibration Certification</h5>
                <p>Professional certification programs for display calibration specialists in photography, video production, and medical imaging.</p>
                <a href="#" className="resource-link">Learn More →</a>
              </div>
              
              <div className="resource-card">
                <h5>GPU Architecture Workshops</h5>
                <p>Technical workshops covering modern GPU architectures, including RDNA3, Ada Lovelace, and upcoming technologies.</p>
                <a href="#" className="resource-link">Learn More →</a>
              </div>
              
              <div className="resource-card">
                <h5>Advanced Troubleshooting Methodologies</h5>
                <p>Professional development courses in systematic diagnostic approaches for complex display and graphics issues.</p>
                <a href="#" className="resource-link">Learn More →</a>
              </div>
            </div>
          </div>
        </div>
      ),
      'peripherals-software': (
        <div className="advanced-reading-content">
          <div className="research-papers">
            <h4>📄 Peripheral Technology Research & Studies</h4>
            <div className="paper-list">
              <div className="paper-item">
                <h5>Human-Computer Interface Optimization: Ergonomic and Performance Analysis of Input Devices</h5>
                <p className="authors">Thompson, R., Martinez, C., Johnson, K. (2024)</p>
                <p className="abstract">Comprehensive study examining the relationship between input device design, user ergonomics, and performance metrics in professional computing environments. Analysis includes 500+ users across various industries with quantitative performance measurements...</p>
                <div className="paper-actions">
                  <button className="btn-download">📥 Download PDF</button>
                  <button className="btn-cite">📋 Cite</button>
                </div>
              </div>
              
              <div className="paper-item">
                <h5>Network Printing Infrastructure Security: Vulnerabilities and Mitigation Strategies</h5>
                <p className="authors">Singh, A., Williams, D., Brown, M. (2023)</p>
                <p className="abstract">Security analysis of modern network printing systems revealing critical vulnerabilities in enterprise environments. Study includes penetration testing results and comprehensive security hardening recommendations...</p>
                <div className="paper-actions">
                  <button className="btn-download">📥 Download PDF</button>
                  <button className="btn-cite">📋 Cite</button>
                </div>
              </div>
              
              <div className="paper-item">
                <h5>Software Conflict Resolution Using Machine Learning Diagnostics</h5>
                <p className="authors">Chen, L., Patel, S., Kumar, V. (2024)</p>
                <p className="abstract">Novel approach to software conflict detection and resolution using machine learning algorithms. System demonstrates 95% accuracy in conflict prediction and provides automated resolution recommendations...</p>
                <div className="paper-actions">
                  <button className="btn-download">📥 Download PDF</button>
                  <button className="btn-cite">📋 Cite</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="industry-standards">
            <h4>🏭 Industry Standards & Protocols</h4>
            <div className="standards-grid">
              <div className="standard-card">
                <h5>USB-IF Specifications</h5>
                <p>USB Implementers Forum standards for USB devices including USB 3.2, USB4, and USB-C specifications for peripheral connectivity.</p>
                <a href="#" className="standard-link">Read Specification →</a>
              </div>
              
              <div className="standard-card">
                <h5>IEEE 802.11 Wireless Standards</h5>
                <p>Wireless networking standards essential for wireless peripheral devices including mice, keyboards, and wireless printing solutions.</p>
                <a href="#" className="standard-link">Read Specification →</a>
              </div>
              
              <div className="standard-card">
                <h5>IPP (Internet Printing Protocol)</h5>
                <p>IETF standard for network printing including security, authentication, and job management protocols for enterprise printing.</p>
                <a href="#" className="standard-link">Read Specification →</a>
              </div>
              
              <div className="standard-card">
                <h5>HID (Human Interface Device) Class</h5>
                <p>USB HID class specifications defining communication protocols for keyboards, mice, and other input devices.</p>
                <a href="#" className="standard-link">Read Specification →</a>
              </div>
            </div>
          </div>
          
          <div className="technology-roadmaps">
            <h4>🚀 Peripheral Technology Evolution</h4>
            <div className="roadmap-section">
              <h5>Input Device Innovation Timeline</h5>
              <div className="timeline-roadmap">
                <div className="roadmap-item">
                  <h6>2024-2025: Current Generation</h6>
                  <ul>
                    <li>8KHz polling rate gaming mice</li>
                    <li>Optical mechanical keyboard switches</li>
                    <li>Haptic feedback touchpads</li>
                    <li>Low-latency wireless protocols</li>
                  </ul>
                </div>
                <div className="roadmap-item">
                  <h6>2026-2027: Next Generation</h6>
                  <ul>
                    <li>Neural interface input devices</li>
                    <li>Gesture recognition keyboards</li>
                    <li>AI-powered predictive input</li>
                    <li>Biometric authentication integration</li>
                  </ul>
                </div>
                <div className="roadmap-item">
                  <h6>2028+: Future Technologies</h6>
                  <ul>
                    <li>Brain-computer interfaces</li>
                    <li>Holographic input systems</li>
                    <li>Quantum-encrypted peripherals</li>
                    <li>Self-healing device materials</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="roadmap-section">
              <h5>Printing Technology Evolution</h5>
              <div className="timeline-roadmap">
                <div className="roadmap-item">
                  <h6>2024-2025: Smart Printing</h6>
                  <ul>
                    <li>Cloud-native print management</li>
                    <li>IoT-enabled supply monitoring</li>
                    <li>AI-powered print optimization</li>
                    <li>Zero-trust security models</li>
                  </ul>
                </div>
                <div className="roadmap-item">
                  <h6>2026-2027: Sustainable Solutions</h6>
                  <ul>
                    <li>Carbon-neutral printing workflows</li>
                    <li>Biodegradable consumables</li>
                    <li>Energy-efficient technologies</li>
                    <li>Circular economy integration</li>
                  </ul>
                </div>
                <div className="roadmap-item">
                  <h6>2028+: Next-Gen Printing</h6>
                  <ul>
                    <li>3D document printing</li>
                    <li>Molecular-level printing</li>
                    <li>Self-assembling documents</li>
                    <li>Quantum-secure printing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="case-studies">
            <h4>📊 Real-World Implementation Case Studies</h4>
            
            <div className="case-study-item">
              <h5>Case Study 1: Fortune 500 Input Device Standardization</h5>
              <div className="case-details">
                <p><strong>Background:</strong> Multinational corporation with 50,000+ employees faced productivity issues due to inconsistent input device performance and frequent hardware failures.</p>
                <p><strong>Challenge:</strong> Standardize input devices across global offices while maintaining user satisfaction and reducing IT support costs.</p>
                <p><strong>Solution:</strong> Implemented comprehensive testing protocol, selected enterprise-grade devices, and deployed centralized monitoring system.</p>
                <p><strong>Outcome:</strong> 40% reduction in IT tickets, 95% user satisfaction rate, and $2.3M annual savings in support costs.</p>
              </div>
            </div>
            
            <div className="case-study-item">
              <h5>Case Study 2: Hospital Network Printing Security Implementation</h5>
              <div className="case-details">
                <p><strong>Background:</strong> 1,200-bed hospital system required HIPAA-compliant printing infrastructure across 15 departments with strict security requirements.</p>
                <p><strong>Challenge:</strong> Deploy secure printing solution maintaining workflow efficiency while ensuring patient data protection and regulatory compliance.</p>
                <p><strong>Solution:</strong> Implemented authentication-based printing with encryption, audit trails, and automated document destruction.</p>
                <p><strong>Outcome:</strong> 100% HIPAA compliance achieved, zero security incidents, 25% reduction in document waste, full audit trail coverage.</p>
              </div>
            </div>
            
            <div className="case-study-item">
              <h5>Case Study 3: Software Conflict Resolution in Development Environment</h5>
              <div className="case-details">
                <p><strong>Background:</strong> Software development company with 200+ developers experienced frequent conflicts between development tools, IDEs, and system libraries.</p>
                <p><strong>Challenge:</strong> Resolve software conflicts without disrupting development workflows or requiring extensive system rebuilds.</p>
                <p><strong>Solution:</strong> Implemented containerized development environments with conflict detection automation and resolution protocols.</p>
                <p><strong>Outcome:</strong> 85% reduction in development environment issues, 60% faster conflict resolution time, improved developer productivity metrics.</p>
              </div>
            </div>
          </div>
          
          <div className="professional-resources">
            <h4>🎓 Advanced Professional Development</h4>
            <div className="resource-grid">
              <div className="resource-card">
                <h5>Certified Print Management Professional</h5>
                <p>Industry certification for enterprise print infrastructure management including security, optimization, and cost management.</p>
                <a href="#" className="resource-link">Learn More →</a>
              </div>
              
              <div className="resource-card">
                <h5>Human Interface Design Certification</h5>
                <p>Professional certification in ergonomic design and optimization of human-computer interfaces for enterprise environments.</p>
                <a href="#" className="resource-link">Learn More →</a>
              </div>
              
              <div className="resource-card">
                <h5>Software Conflict Analysis Workshop</h5>
                <p>Advanced workshop covering systematic approaches to software conflict detection, analysis, and resolution in enterprise environments.</p>
                <a href="#" className="resource-link">Learn More →</a>
              </div>
              
              <div className="resource-card">
                <h5>Enterprise Device Management</h5>
                <p>Comprehensive training in peripheral device lifecycle management including procurement, deployment, monitoring, and retirement.</p>
                <a href="#" className="resource-link">Learn More →</a>
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
