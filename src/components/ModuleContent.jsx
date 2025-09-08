import { useState } from 'react'
import './ModuleContent.css'

function ModuleContent({ module }) {
  const [activeSection, setActiveSection] = useState('overview')

  const moduleData = {
    'pc-trouble': {
      overview: {
        title: 'PC Trouble Fundamentals',
        content: `
          <div class="course-info">
            <h3>📚 Course Information</h3>
            <div class="info-grid">
              <div class="info-item"><strong>Credits:</strong> 3</div>
              <div class="info-item"><strong>Lecture Hours:</strong> 36</div>
              <div class="info-item"><strong>Laboratory Hours:</strong> 54</div>
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
          <p>The computer startup process involves six distinct phases, each critical for successful system initialization.</p>
          
          <div class="startup-phases">
            <div class="phase-card">
              <h4>Phase I: Power On</h4>
              <p>Power supply initialization and component power distribution</p>
            </div>
            <div class="phase-card">
              <h4>Phase II: POST (Power-On Self-Test)</h4>
              <p>Hardware component testing and basic system checks</p>
            </div>
            <div class="phase-card">
              <h4>Phase III: Startup Options</h4>
              <p>Boot device selection and startup configuration</p>
            </div>
            <div class="phase-card">
              <h4>Phase IV: Operating System Search</h4>
              <p>Locating and loading the operating system</p>
            </div>
            <div class="phase-card">
              <h4>Phase V: OS Initialization</h4>
              <p>Loading system services and drivers</p>
            </div>
            <div class="phase-card">
              <h4>Phase VI: User Sign-In</h4>
              <p>User authentication and desktop environment loading</p>
            </div>
          </div>
        `
      },
      lessons: {
        title: 'Learning Materials - Week 4',
        content: `
          <h3>📖 Week 4: Startup Problems Diagnosis</h3>
          
          <div class="lesson-objectives">
            <h4>Learning Objectives:</h4>
            <ul>
              <li>Power on the PC and diagnose power issues</li>
              <li>Diagnose hardware problems during POST</li>
              <li>Navigate and utilize startup tools</li>
              <li>Locate and troubleshoot operating system issues</li>
              <li>Resolve OS loading and initialization problems</li>
              <li>Troubleshoot user sign-in and authentication issues</li>
              <li>Manage startup programs and services</li>
            </ul>
          </div>

          <div class="troubleshooting-guide">
            <div class="issue-card">
              <h4>⚡ Phase I: Power Issues</h4>
              <p><strong>Common Symptoms:</strong></p>
              <ul>
                <li>No lights, fans, or sounds when power button pressed</li>
                <li>PC turns on briefly then shuts off</li>
                <li>Fans spin but no display</li>
              </ul>
              
              <p><strong>Troubleshooting Steps:</strong></p>
              <ol>
                <li>Check power cable connections</li>
                <li>Test power outlet with known working device</li>
                <li>Inspect PSU switch and connections</li>
                <li>Test with different power cable</li>
                <li>Check motherboard power connections</li>
                <li>Test PSU with multimeter or PSU tester</li>
              </ol>
            </div>
            
            <div class="issue-card">
              <h4>🔍 Phase II: POST Problems</h4>
              <p><strong>POST Beep Codes:</strong></p>
              <ul>
                <li><strong>1 short beep:</strong> Normal POST, system OK</li>
                <li><strong>2 short beeps:</strong> POST error, check memory</li>
                <li><strong>3 short beeps:</strong> Base memory failure</li>
                <li><strong>1 long, 2 short:</strong> Display adapter problem</li>
                <li><strong>1 long, 3 short:</strong> Enhanced display adapter problem</li>
              </ul>
              
              <p><strong>Troubleshooting Actions:</strong></p>
              <ul>
                <li>Remove and reseat RAM modules</li>
                <li>Test with single RAM stick</li>
                <li>Check graphics card connections</li>
                <li>Clear CMOS/BIOS settings</li>
                <li>Test with minimal hardware configuration</li>
              </ul>
            </div>

            <div class="issue-card">
              <h4>💿 Phase IV: OS Boot Problems</h4>
              <p><strong>Common Error Messages:</strong></p>
              <ul>
                <li>"Operating System Not Found"</li>
                <li>"Boot Device Not Found"</li>
                <li>"Invalid Boot Disk"</li>
                <li>"BOOTMGR is missing"</li>
              </ul>
              
              <p><strong>Solutions:</strong></p>
              <ul>
                <li>Check boot device priority in BIOS</li>
                <li>Verify hard drive connections</li>
                <li>Run startup repair from Windows installation media</li>
                <li>Rebuild boot configuration data (BCD)</li>
                <li>Check for disk errors using CHKDSK</li>
              </ul>
            </div>
          </div>

          <div class="resource-box">
            <h4>📚 Study Resources:</h4>
            <ul>
              <li><strong>Primary Text:</strong> Troubleshooting and Maintaining your PC by Dan Gookin (2017) - Chapter 4</li>
              <li><a href="https://infosec.co.il/wp-content/uploads/2020/06/02-Troubleshooting-Startup-Issues.pdf" class="resource-link" target="_blank">Startup Issues Troubleshooting Guide</a></li>
              <li><a href="https://www.youtube.com/@LinusTechTips" class="resource-link" target="_blank">Linus Tech Tips</a> - Boot problem tutorials</li>
            </ul>
          </div>
        `
      },
      laboratory: {
        title: 'Laboratory Activities',
        content: `
          <h3>🔬 Lab Activity: Startup Diagnosis Workshop</h3>
          
          <div class="lab-activity">
            <h4>Exercise 1: POST Analysis</h4>
            <p><strong>Objective:</strong> Interpret POST beep codes and diagnose hardware issues</p>
            
            <h5>Materials:</h5>
            <ul>
              <li>PCs with simulated POST failures</li>
              <li>POST card (if available)</li>
              <li>Multimeter for power testing</li>
              <li>Various RAM modules for testing</li>
            </ul>
            
            <h5>Procedure:</h5>
            <ol>
              <li>Document the beep pattern during startup</li>
              <li>Reference beep code chart to identify issue</li>
              <li>Perform appropriate hardware testing</li>
              <li>Replace or reseat components as needed</li>
              <li>Verify successful POST completion</li>
            </ol>
          </div>

          <div class="lab-activity">
            <h4>Exercise 2: Boot Sequence Configuration</h4>
            <p><strong>Objective:</strong> Configure BIOS/UEFI boot settings and troubleshoot boot issues</p>
            
            <h5>Tasks:</h5>
            <ol>
              <li>Access BIOS/UEFI setup</li>
              <li>Identify current boot device priority</li>
              <li>Change boot order to boot from USB</li>
              <li>Enable/disable secure boot</li>
              <li>Configure fast boot settings</li>
              <li>Save settings and test boot process</li>
            </ol>
          </div>

          <div class="lab-activity">
            <h4>Exercise 3: Windows Startup Repair</h4>
            <p><strong>Objective:</strong> Use Windows recovery tools to fix boot problems</p>
            
            <h5>Scenarios:</h5>
            <ul>
              <li>Missing BOOTMGR</li>
              <li>Corrupted BCD</li>
              <li>System file corruption</li>
              <li>Registry issues preventing startup</li>
            </ul>
            
            <h5>Tools to Use:</h5>
            <ul>
              <li>Windows Installation Media</li>
              <li>System Recovery Options</li>
              <li>Command Prompt (bootrec, sfc, chkdsk)</li>
              <li>System Restore</li>
            </ul>
          </div>
        `
      },
      quiz: {
        title: 'Startup Problems Quiz',
        content: `
          <h3>📝 Startup Problems Assessment</h3>
          <div class="quiz-container">
            <div class="question">
              <p><strong>Question 1:</strong> What does POST stand for in computer startup terminology?</p>
              <div class="quiz-options">
                <label><input type="radio" name="s1" value="a"> Program Operation System Test</label>
                <label><input type="radio" name="s1" value="b"> Power-On Self-Test</label>
                <label><input type="radio" name="s1" value="c"> Peripheral Output System Test</label>
                <label><input type="radio" name="s1" value="d"> Primary Operating System Trigger</label>
              </div>
            </div>
            
            <div class="question">
              <p><strong>Question 2:</strong> What does "1 long beep, 2 short beeps" typically indicate during POST?</p>
              <div class="quiz-options">
                <label><input type="radio" name="s2" value="a"> Memory failure</label>
                <label><input type="radio" name="s2" value="b"> Keyboard error</label>
                <label><input type="radio" name="s2" value="c"> Display adapter problem</label>
                <label><input type="radio" name="s2" value="d"> Hard drive failure</label>
              </div>
            </div>

            <div class="question">
              <p><strong>Question 3:</strong> If you see "BOOTMGR is missing" error, what is the most likely cause?</p>
              <div class="quiz-options">
                <label><input type="radio" name="s3" value="a"> RAM failure</label>
                <label><input type="radio" name="s3" value="b"> Corrupted boot configuration</label>
                <label><input type="radio" name="s3" value="c"> Power supply issue</label>
                <label><input type="radio" name="s3" value="d"> Graphics card problem</label>
              </div>
            </div>
            
            <button class="submit-quiz">Submit Quiz</button>
          </div>
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
      </div>
    </div>
  )
}

export default ModuleContent
