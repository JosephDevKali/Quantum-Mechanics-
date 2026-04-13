// Initialize Particle Background
function initParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        container.appendChild(particle);
    }
}

// Navigation
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    window.scrollTo(0, 0);
    
    // Initialize simulations if entering that section
    if (sectionId === 'simulations') {
        setTimeout(() => loadSimulation('double-slit'), 100);
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Topics Data with Wikipedia Links
const topics = [
    {
        id: 'wave-particle',
        title: 'Wave-Particle Duality',
        color: 'cyan',
        content: 'Matter and light exhibit both wave-like and particle-like properties. The de Broglie wavelength λ = h/p connects momentum to wavelength.',
        image: 'https://kimi-web-img.moonshot.cn/img/thumbs.dreamstime.com/c16c9a3e7fa90031f911d23ad4feb2dd33e40191.jpg',
        wikiLink: 'https://en.wikipedia.org/wiki/Wave%E2%80%93particle_duality'
    },
    {
        id: 'uncertainty',
        title: 'Heisenberg Uncertainty',
        color: 'purple',
        content: 'ΔxΔp ≥ ℏ/2. Position and momentum cannot be simultaneously known with arbitrary precision. Fundamental limit of nature.',
        image: 'https://kimi-web-img.moonshot.cn/img/thumbs.dreamstime.com/31b7acf44706f5b0ecf0359452b721749e13a583.jpg',
        wikiLink: 'https://en.wikipedia.org/wiki/Uncertainty_principle'
    },
    {
        id: 'superposition',
        title: 'Quantum Superposition',
        color: 'pink',
        content: 'Particles exist in multiple states simultaneously until measured. Schrödinger\'s cat is both alive and dead until observed.',
        image: 'https://kimi-web-img.moonshot.cn/img/thumbs.dreamstime.com/c1953cebe136d5c798729002685a062c8086fc4e.jpg',
        wikiLink: 'https://en.wikipedia.org/wiki/Quantum_superposition'
    },
    {
        id: 'entanglement',
        title: 'Quantum Entanglement',
        color: 'green',
        content: 'Two particles become correlated such that measuring one instantly determines the state of the other, regardless of distance.',
        image: 'https://kimi-web-img.moonshot.cn/img/images.fineartamerica.com/82a7b096a7919c11fa240dc0701a3ad551780ff3.jpg',
        wikiLink: 'https://en.wikipedia.org/wiki/Quantum_entanglement'
    },
    {
        id: 'tunneling',
        title: 'Quantum Tunneling',
        color: 'yellow',
        content: 'Particles can pass through energy barriers higher than their total energy. Essential for nuclear fusion and scanning tunneling microscopy.',
        image: 'https://kimi-web-img.moonshot.cn/img/analyticalscience.wiley.com/f3cf9e4f65b9a5d0390b1d9b2b952568d344b8df.jpeg',
        wikiLink: 'https://en.wikipedia.org/wiki/Quantum_tunnelling'
    },
    {
        id: 'decoherence',
        title: 'Quantum Decoherence',
        color: 'red',
        content: 'Loss of quantum coherence due to interaction with environment. Explains the quantum-to-classical transition.',
        image: 'https://kimi-web-img.moonshot.cn/img/static.scientificamerican.com/fa4f3c04a18c69598a5ef03f6f7eed2cd0ba2324.jpg',
        wikiLink: 'https://en.wikipedia.org/wiki/Quantum_decoherence'
    }
];

// Populate Topics
function populateTopics() {
    const grid = document.getElementById('topics-grid');
    topics.forEach(topic => {
        const card = document.createElement('div');
        card.className = 'topic-card glass rounded-xl overflow-hidden cursor-pointer';
        card.onclick = () => showTopicDetail(topic.id);
        card.innerHTML = `
            <div class="h-48 overflow-hidden relative">
                <img src="${topic.image}" alt="${topic.title}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div class="absolute bottom-4 left-4">
                    <h3 class="font-orbitron text-2xl font-bold text-${topic.color}-400">${topic.title}</h3>
                </div>
            </div>
            <div class="p-6">
                <p class="text-gray-300 mb-4">${topic.content}</p>
                <div class="flex items-center justify-between">
                    <div class="flex items-center text-${topic.color}-400 text-sm font-bold">
                        <span>Explore Topic</span>
                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                    </div>
                    <a href="${topic.wikiLink}" class="text-xs text-gray-400 hover:text-${topic.color}-400 transition">Wikipedia →</a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function showTopicDetail(topicId) {
    const topic = topics.find(t => t.id === topicId);
    if (topic) {
        alert(`Loading detailed content for ${topic.title}...\n\nClick "Wikipedia →" for full article.`);
    }
}

// Q&A Data with Wikipedia References
const qaData = [
    {
        question: "What is the wave function collapse?",
        answer: "Wave function collapse is the reduction of the wave packet into a single eigenstate upon measurement. Before measurement, a quantum system exists in a superposition of all possible states. The act of measurement forces the system to 'choose' a definite state, with probability determined by the amplitude squared of the wave function.",
        wikiLink: "https://en.wikipedia.org/wiki/Wave_function_collapse"
    },
    {
        question: "Why can't we simultaneously know position and momentum?",
        answer: "The Heisenberg Uncertainty Principle arises from the wave nature of matter. A particle with definite position has a wave function localized in space (like a spike), which requires superposition of many momentum states (Fourier components). Conversely, a definite momentum requires a spread-out wave. This is a fundamental property of Fourier transforms, not a measurement limitation.",
        wikiLink: "https://en.wikipedia.org/wiki/Uncertainty_principle"
    },
    {
        question: "What is quantum entanglement used for?",
        answer: "Quantum entanglement enables quantum computing (qubit correlations), quantum cryptography (secure key distribution via BB84 protocol), quantum teleportation (transferring quantum states), and precision measurements in quantum metrology. Einstein called it 'spooky action at a distance'.",
        wikiLink: "https://en.wikipedia.org/wiki/Quantum_entanglement"
    },
    {
        question: "How does quantum tunneling work?",
        answer: "In quantum mechanics, particles are described by wave functions that extend into classically forbidden regions (where potential energy exceeds total energy). Though the wave function decays exponentially in these regions, if the barrier is thin enough, there's non-zero probability of finding the particle on the other side. This explains alpha decay and enables STM microscopes.",
        wikiLink: "https://en.wikipedia.org/wiki/Quantum_tunnelling"
    },
    {
        question: "What is the difference between bosons and fermions?",
        answer: "Bosons (integer spin) obey Bose-Einstein statistics and can occupy the same quantum state (leading to Bose-Einstein condensation). Fermions (half-integer spin) obey Pauli Exclusion Principle - no two identical fermions can occupy the same quantum state simultaneously. This explains electron shell structure in atoms.",
        wikiLink: "https://en.wikipedia.org/wiki/Spin%E2%80%93statistics_theorem"
    }
];

function populateQA() {
    const container = document.getElementById('qa-container');
    qaData.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'qa-item glass rounded-xl p-6 cursor-pointer';
        div.onclick = () => div.classList.toggle('active');
        div.innerHTML = `
            <div class="flex justify-between items-start">
                <h3 class="font-orbitron text-lg font-bold text-cyan-300 pr-4">${item.question}</h3>
                <svg class="w-6 h-6 text-cyan-500 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </div>
            <div class="qa-answer mt-4 text-gray-300 leading-relaxed border-t border-cyan-500/20 pt-4">
                <p class="mb-3">${item.answer}</p>
                <a href="${item.wikiLink}" class="text-sm text-cyan-400 hover:underline">Read more on Wikipedia →</a>
            </div>
        `;
        container.appendChild(div);
    });
}

function submitQuestion(e) {
    e.preventDefault();
    alert('Question submitted! Our quantum physicists will review it shortly.');
    e.target.reset();
}

// Simulations
let currentSim = null;
let animationId = null;

function loadSimulation(type) {
    const canvas = document.getElementById('simCanvas');
    const ctx = canvas.getContext('2d');
    const controls = document.getElementById('sim-controls');
    const info = document.getElementById('sim-info');
    
    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = 400;
    
    // Clear previous
    if (animationId) cancelAnimationFrame(animationId);
    
    // Update active button
    document.querySelectorAll('.sim-btn').forEach(btn => {
        btn.classList.remove('border-cyan-500', 'border-purple-500', 'border-pink-500');
    });
    
    switch(type) {
        case 'double-slit':
            runDoubleSlit(ctx, canvas, controls, info);
            break;
        case 'particle-box':
            runParticleBox(ctx, canvas, controls, info);
            break;
        case 'tunneling':
            runTunneling(ctx, canvas, controls, info);
            break;
        case 'harmonic':
            runHarmonic(ctx, canvas, controls, info);
            break;
        case 'spin':
            runSpin(ctx, canvas, controls, info);
            break;
        case 'uncertainty':
            runUncertainty(ctx, canvas, controls, info);
            break;
    }
}

function runDoubleSlit(ctx, canvas, controls, info) {
    info.innerHTML = '<strong>Double-Slit Experiment:</strong> Observe wave interference patterns. Particles behave as waves when unobserved, creating interference bands. <a href="https://en.wikipedia.org/wiki/Double-slit_experiment" class="text-cyan-400 underline ml-2">Learn more</a>';
    
    controls.innerHTML = `
        <div>
            <label class="block text-sm text-cyan-400 mb-1">Particle Speed</label>
            <input type="range" id="ds-speed" min="1" max="10" value="5" class="w-full accent-cyan-500">
        </div>
        <div>
            <label class="block text-sm text-cyan-400 mb-1">Slit Separation</label>
            <input type="range" id="ds-sep" min="20" max="100" value="50" class="w-full accent-cyan-500">
        </div>
        <div>
            <label class="block text-sm text-cyan-400 mb-1">Observation Mode</label>
            <button id="ds-observe" class="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded text-sm">Toggle Observer</button>
        </div>
    `;
    
    let particles = [];
    let observing = false;
    let speed = 5;
    let separation = 50;
    
    document.getElementById('ds-speed').oninput = (e) => speed = parseInt(e.target.value);
    document.getElementById('ds-sep').oninput = (e) => separation = parseInt(e.target.value);
    document.getElementById('ds-observe').onclick = () => {
        observing = !observing;
        info.innerHTML = observing ? 
            '<strong>Observation Active:</strong> Wave function collapsed! Interference pattern destroyed - particle behavior detected. <a href="https://en.wikipedia.org/wiki/Wave_function_collapse" class="text-cyan-400 underline ml-2">Learn more</a>' :
            '<strong>Double-Slit Experiment:</strong> Observe wave interference patterns. Particles behave as waves when unobserved. <a href="https://en.wikipedia.org/wiki/Double-slit_experiment" class="text-cyan-400 underline ml-2">Learn more</a>';
    };
    
    function animate() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw slits
        ctx.fillStyle = '#333';
        ctx.fillRect(canvas.width/2 - 5, 0, 10, canvas.height/2 - separation/2);
        ctx.fillRect(canvas.width/2 - 5, canvas.height/2 + separation/2, 10, canvas.height/2 - separation/2);
        
        // Add new particle
        if (Math.random() < 0.3) {
            particles.push({
                x: 0,
                y: canvas.height/2 + (Math.random() - 0.5) * 20,
                vx: speed,
                vy: observing ? 0 : (Math.random() - 0.5) * 2,
                detected: false
            });
        }
        
        // Update and draw particles
        ctx.fillStyle = observing ? '#ff006e' : '#00d4ff';
        particles = particles.filter(p => {
            p.x += p.vx;
            p.y += p.vy;
            
            if (!observing && p.x > canvas.width/2 && !p.detected) {
                p.vy += (Math.random() - 0.5) * 4; // Interference
                p.detected = true;
            }
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
            ctx.fill();
            
            return p.x < canvas.width;
        });
        
        animationId = requestAnimationFrame(animate);
    }
    animate();
}

function runParticleBox(ctx, canvas, controls, info) {
    info.innerHTML = '<strong>Particle in a Box:</strong> Quantized energy levels in infinite potential well. Eₙ = n²π²ℏ²/(2mL²) <a href="https://en.wikipedia.org/wiki/Particle_in_a_box" class="text-purple-400 underline ml-2">Learn more</a>';
    
    controls.innerHTML = `
        <div>
            <label class="block text-sm text-purple-400 mb-1">Quantum Number (n)</label>
            <input type="range" id="box-n" min="1" max="5" value="1" class="w-full accent-purple-500">
        </div>
        <div>
            <label class="block text-sm text-purple-400 mb-1">Superposition</label>
            <input type="range" id="box-mix" min="0" max="100" value="0" class="w-full accent-purple-500">
        </div>
        <div>
            <label class="block text-sm text-purple-400 mb-1">Time Evolution</label>
            <button id="box-pause" class="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded text-sm">Pause/Play</button>
        </div>
    `;
    
    let n = 1;
    let mix = 0;
    let time = 0;
    let paused = false;
    
    document.getElementById('box-n').oninput = (e) => n = parseInt(e.target.value);
    document.getElementById('box-mix').oninput = (e) => mix = parseInt(e.target.value) / 100;
    document.getElementById('box-pause').onclick = () => paused = !paused;
    
    function animate() {
        ctx.fillStyle = '#0a0a0f';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw box
        ctx.strokeStyle = '#9d4edd';
        ctx.lineWidth = 2;
        ctx.strokeRect(50, 50, canvas.width - 100, canvas.height - 100);
        
        // Draw wave function
        ctx.beginPath();
        ctx.strokeStyle = '#00d4ff';
        ctx.lineWidth = 3;
        
        for (let x = 0; x <= canvas.width - 100; x += 2) {
            let xNorm = x / (canvas.width - 100) * Math.PI;
            let psi1 = Math.sin(n * xNorm) * Math.cos(time);
            let psi2 = Math.sin((n+1) * xNorm) * Math.cos(time * (n+1)**2 / n**2);
            let psi = (1-mix) * psi1 + mix * psi2;
            let y = canvas.height/2 - psi * 100;
            
            if (x === 0) ctx.moveTo(50 + x, y);
            else ctx.lineTo(50 + x, y);
        }
        ctx.stroke();
        
        // Draw probability
        ctx.beginPath();
        ctx.fillStyle = 'rgba(0, 212, 255, 0.2)';
        for (let x = 0; x <= canvas.width - 100; x += 2) {
            let xNorm = x / (canvas.width - 100) * Math.PI;
            let psi1 = Math.sin(n * xNorm);
            let psi2 = Math.sin((n+1) * xNorm);
            let psi = (1-mix) * psi1 + mix * psi2;
            let prob = psi * psi * 100;
            
            ctx.fillRect(50 + x, canvas.height/2 - prob/2, 2, prob);
        }
        
        if (!paused) time += 0.05;
        animationId = requestAnimationFrame(animate);
    }
    animate();
}

function runTunneling(ctx, canvas, controls, info) {
    info.innerHTML = '<strong>Quantum Tunneling:</strong> Particle probability extends through barriers. Transmission probability ~ exp(-2κL) <a href="https://en.wikipedia.org/wiki/Quantum_tunnelling" class="text-pink-400 underline ml-2">Learn more</a>';
    
    controls.innerHTML = `
        <div>
            <label class="block text-sm text-pink-400 mb-1">Barrier Height</label>
            <input type="range" id="tun-height" min="50" max="200" value="100" class="w-full accent-pink-500">
        </div>
        <div>
            <label class="block text-sm text-pink-400 mb-1">Barrier Width</label>
            <input type="range" id="tun-width" min="20" max="100" value="40" class="w-full accent-pink-500">
        </div>
        <div>
            <label class="block text-sm text-pink-400 mb-1">Particle Energy</label>
            <input type="range" id="tun-energy" min="20" max="150" value="80" class="w-full accent-pink-500">
        </div>
    `;
    
    let barrierHeight = 100;
    let barrierWidth = 40;
    let particleEnergy = 80;
    let particles = [];
    
    document.getElementById('tun-height').oninput = (e) => barrierHeight = parseInt(e.target.value);
    document.getElementById('tun-width').oninput = (e) => barrierWidth = parseInt(e.target.value);
    document.getElementById('tun-energy').oninput = (e) => particleEnergy = parseInt(e.target.value);
    
    function animate() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        const barrierX = canvas.width / 2 - barrierWidth / 2;
        const barrierY = canvas.height / 2 - barrierHeight / 2;
        
        // Draw barrier
        ctx.fillStyle = 'rgba(255, 0, 110, 0.3)';
        ctx.fillRect(barrierX, barrierY, barrierWidth, barrierHeight);
        ctx.strokeStyle = '#ff006e';
        ctx.strokeRect(barrierX, barrierY, barrierWidth, barrierHeight);
        
        // Add particles
        if (Math.random() < 0.1) {
            particles.push({
                x: 20,
                y: canvas.height/2 + (Math.random() - 0.5) * 50,
                vx: 3,
                tunneled: false
            });
        }
        
        // Update particles
        ctx.fillStyle = '#00f5ff';
        particles = particles.filter(p => {
            // Check barrier collision
            if (p.x > barrierX && p.x < barrierX + barrierWidth && !p.tunneled) {
                if (Math.random() < Math.exp(-barrierWidth/30)) { // Tunnel probability
                    p.tunneled = true;
                    p.vx = 3;
                } else {
                    p.vx = -2; // Reflection
                }
            }
            
            p.x += p.vx;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
            ctx.fill();
            
            return p.x > 0 && p.x < canvas.width;
        });
        
        // Draw energy line
        ctx.strokeStyle = '#00ff00';
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(0, canvas.height/2 + particleEnergy/2);
        ctx.lineTo(canvas.width, canvas.height/2 + particleEnergy/2);
        ctx.stroke();
        ctx.setLineDash([]);
        
        animationId = requestAnimationFrame(animate);
    }
    animate();
}

function runHarmonic(ctx, canvas, controls, info) {
    info.innerHTML = '<strong>Quantum Harmonic Oscillator:</strong> Equally spaced energy levels. Wave functions involve Hermite polynomials. <a href="https://en.wikipedia.org/wiki/Quantum_harmonic_oscillator" class="text-green-400 underline ml-2">Learn more</a>';
    controls.innerHTML = '<div class="col-span-3 text-center text-gray-400">Interactive controls for harmonic oscillator simulation</div>';
    
    let time = 0;
    function animate() {
        ctx.fillStyle = '#0a0a0f';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw potential
        ctx.strokeStyle = '#444';
        ctx.beginPath();
        for (let x = -200; x < 200; x += 5) {
            let y = 0.005 * x * x;
            if (x === -200) ctx.moveTo(canvas.width/2 + x, canvas.height - 100 - y);
            else ctx.lineTo(canvas.width/2 + x, canvas.height - 100 - y);
        }
        ctx.stroke();
        
        // Draw wave functions for n=0,1,2
        [0, 1, 2].forEach(n => {
            ctx.strokeStyle = ['#00d4ff', '#9d4edd', '#ff006e'][n];
            ctx.beginPath();
            for (let x = -200; x < 200; x += 2) {
                let xi = x / 50;
                let psi = Math.exp(-xi*xi/2) * hermite(n, xi) * Math.cos(time * (n + 0.5));
                let y = canvas.height/2 - psi * 30 - n * 80;
                if (x === -200) ctx.moveTo(canvas.width/2 + x, y);
                else ctx.lineTo(canvas.width/2 + x, y);
            }
            ctx.stroke();
        });
        
        time += 0.03;
        animationId = requestAnimationFrame(animate);
    }
    animate();
}

function hermite(n, x) {
    if (n === 0) return 1;
    if (n === 1) return 2 * x;
    if (n === 2) return 4 * x * x - 2;
    return 0;
}

function runSpin(ctx, canvas, controls, info) {
    info.innerHTML = '<strong>Spin Measurement:</strong> Stern-Gerlach experiment. Spin-1/2 particles deflect according to quantization. <a href="https://en.wikipedia.org/wiki/Stern%E2%80%93Gerlach_experiment" class="text-yellow-400 underline ml-2">Learn more</a>';
    controls.innerHTML = '<div class="col-span-3 text-center text-gray-400">Spin orientation controls would appear here</div>';
    
    let angle = 0;
    function animate() {
        ctx.fillStyle = '#0a0a0f';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw magnetic field
        ctx.strokeStyle = '#444';
        for (let y = 50; y < canvas.height - 50; y += 30) {
            ctx.beginPath();
            ctx.moveTo(canvas.width/2 - 100, y);
            ctx.lineTo(canvas.width/2 + 100, y);
            ctx.stroke();
        }
        
        // Draw spin vector
        ctx.save();
        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.rotate(angle);
        
        ctx.strokeStyle = '#00d4ff';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -60);
        ctx.stroke();
        
        ctx.fillStyle = '#00d4ff';
        ctx.beginPath();
        ctx.arc(0, -60, 5, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
        
        angle += 0.02;
        animationId = requestAnimationFrame(animate);
    }
    animate();
}

function runUncertainty(ctx, canvas, controls, info) {
    info.innerHTML = '<strong>Uncertainty Principle:</strong> Trade-off between position and momentum precision. ΔxΔp ≥ ℏ/2 <a href="https://en.wikipedia.org/wiki/Uncertainty_principle" class="text-red-400 underline ml-2">Learn more</a>';
    controls.innerHTML = '<div class="col-span-3 text-center text-gray-400">Adjust wave packet width to see uncertainty relation</div>';
    
    let sigma = 30;
    function animate() {
        ctx.fillStyle = '#0a0a0f';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Position space
        ctx.fillStyle = 'rgba(0, 212, 255, 0.3)';
        for (let x = 0; x < canvas.width; x++) {
            let gauss = Math.exp(-Math.pow(x - canvas.width/2, 2) / (2 * sigma * sigma));
            ctx.fillRect(x, canvas.height/2 - gauss * 100, 1, gauss * 200);
        }
        
        // Momentum space (Fourier transform width ~ 1/sigma)
        let momSigma = 2000 / sigma;
        ctx.fillStyle = 'rgba(157, 78, 221, 0.3)';
        for (let k = 0; k < canvas.width; k++) {
            let gauss = Math.exp(-Math.pow(k - canvas.width/2, 2) / (2 * momSigma * momSigma));
            ctx.fillRect(k, canvas.height - 100 - gauss * 50, 1, gauss * 100);
        }
        
        // Labels
        ctx.fillStyle = '#00d4ff';
        ctx.font = '14px Rajdhani';
        ctx.fillText('Position Space (Δx)', 20, 30);
        ctx.fillStyle = '#9d4edd';
        ctx.fillText('Momentum Space (Δp)', 20, canvas.height - 20);
        
        animationId = requestAnimationFrame(animate);
    }
    animate();
}

// Notes Navigation with Wikipedia Links
function showNote(noteId) {
    const content = document.getElementById('note-content');
    const notes = {
        'postulates': {
            title: 'The Postulates of Quantum Mechanics',
            cmd: 'cat postulates.txt',
            body: `
                <div class="formula"><strong class="text-cyan-400">Postulate I:</strong> State specified by wave function Ψ(r,t)</div>
                <div class="formula"><strong class="text-purple-400">Postulate II:</strong> Observables ↔ Hermitian operators</div>
                <div class="formula"><strong class="text-pink-400">Postulate III:</strong> ⟨A⟩ = ∫ Ψ* Â Ψ d³r</div>
                <div class="formula"><strong class="text-green-400">Postulate IV:</strong> iℏ ∂Ψ/∂t = ĤΨ</div>
                <div class="mt-6 p-4 bg-cyan-900/20 border border-cyan-500/30 rounded-lg">
                    <h4 class="font-orbitron text-cyan-300 mb-2">Learn More</h4>
                    <a href="https://en.wikipedia.org/wiki/Postulates_of_quantum_mechanics" class="text-cyan-400 hover:underline text-sm">Postulates of Quantum Mechanics - Wikipedia</a>
                </div>
            `
        },
        'schrodinger': {
            title: 'The Schrödinger Equation',
            cmd: 'cat schrodinger_equation.txt',
            body: `
                <p class="mb-4">The time-dependent Schrödinger equation governs quantum dynamics:</p>
                <div class="formula">iℏ ∂Ψ/∂t = [-ℏ²/2m ∇² + V(r)] Ψ</div>
                <p class="mb-4">For time-independent potentials, we use separation of variables:</p>
                <div class="formula">Ψ(r,t) = ψ(r) e^(-iEt/ℏ)</div>
                <p>This leads to the time-independent Schrödinger equation:</p>
                <div class="formula">[-ℏ²/2m ∇² + V(r)] ψ = Eψ</div>
                <div class="mt-6 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
                    <h4 class="font-orbitron text-purple-300 mb-2">Learn More</h4>
                    <a href="https://en.wikipedia.org/wiki/Schr%C3%B6dinger_equation" class="text-purple-400 hover:underline text-sm">Schrödinger Equation - Wikipedia</a>
                </div>
            `
        },
        'operators': {
            title: 'Operators & Observables',
            cmd: 'cat operators.txt',
            body: `
                <p class="mb-4">Quantum operators are linear Hermitian operators representing physical observables:</p>
                <div class="formula">Position: x̂ = x<br/>Momentum: p̂ = -iℏ ∂/∂x<br/>Hamiltonian: Ĥ = p̂²/2m + V(x̂)</div>
                <p class="mb-4">Commutation relations:</p>
                <div class="formula">[x̂, p̂] = iℏ</div>
                <div class="mt-6 p-4 bg-pink-900/20 border border-pink-500/30 rounded-lg">
                    <h4 class="font-orbitron text-pink-300 mb-2">Learn More</h4>
                    <a href="https://en.wikipedia.org/wiki/Operator_(physics)" class="text-pink-400 hover:underline text-sm">Operator (Physics) - Wikipedia</a>
                </div>
            `
        },
        'hydrogen': {
            title: 'The Hydrogen Atom',
            cmd: 'cat hydrogen_atom.txt',
            body: `
                <p class="mb-4">The hydrogen atom is exactly solvable, yielding quantum numbers:</p>
                <div class="formula">n = 1, 2, 3... (principal)<br/>l = 0, 1, ..., n-1 (angular)<br/>m = -l, ..., l (magnetic)</div>
                <p>Energy levels depend only on n:</p>
                <div class="formula">Eₙ = -13.6 eV / n²</div>
                <div class="mt-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                    <h4 class="font-orbitron text-green-300 mb-2">Learn More</h4>
                    <a href="https://en.wikipedia.org/wiki/Hydrogen_atom" class="text-green-400 hover:underline text-sm">Hydrogen Atom - Wikipedia</a>
                </div>
            `
        },
        'perturbation': {
            title: 'Perturbation Theory',
            cmd: 'cat perturbation.txt',
            body: `
                <p class="mb-4">For Hamiltonians Ĥ = Ĥ₀ + λĤ', where Ĥ₀ is solvable:</p>
                <div class="formula">Eₙ = Eₙ⁰ + ⟨n|Ĥ'|n⟩ + Σ_{m≠n} |⟨m|Ĥ'|n⟩|²/(Eₙ⁰-Eₘ⁰) + ...</div>
                <p>Used for fine structure, Stark effect, and Zeeman effect calculations.</p>
                <div class="mt-6 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
                    <h4 class="font-orbitron text-yellow-300 mb-2">Learn More</h4>
                    <a href="https://en.wikipedia.org/wiki/Perturbation_theory_(quantum_mechanics)" class="text-yellow-400 hover:underline text-sm">Perturbation Theory - Wikipedia</a>
                </div>
            `
        },
        'scattering': {
            title: 'Scattering Theory',
            cmd: 'cat scattering.txt',
            body: `
                <p class="mb-4">Particle scattering described by cross-section σ:</p>
                <div class="formula">dσ/dΩ = |f(θ,φ)|²</div>
                <p>Born approximation for weak potentials:</p>
                <div class="formula">f(θ) = -m/(2πℏ²) ∫ V(r) e^{iq·r} d³r</div>
                <div class="mt-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                    <h4 class="font-orbitron text-red-300 mb-2">Learn More</h4>
                    <a href="https://en.wikipedia.org/wiki/Scattering_theory" class="text-red-400 hover:underline text-sm">Scattering Theory - Wikipedia</a>
                </div>
            `
        }
    };
    
    const note = notes[noteId];
    content.innerHTML = `
        <div class="terminal p-4 rounded-lg mb-6">
            <span class="text-cyan-400">root@quantum-nexus:~$</span> <span class="text-white">${note.cmd}</span>
        </div>
        <h2 class="font-orbitron text-3xl font-bold text-white mb-6">${note.title}</h2>
        <div class="space-y-4 text-gray-300 leading-relaxed">${note.body}</div>
    `;
}

// Admin Security
let failedAttempts = 0;
const correctCredentials = { user: 'admin', pass: 'quantum2026', code: '314159' };

function authenticateAdmin(e) {
    e.preventDefault();
    const user = document.getElementById('admin-user').value;
    const pass = document.getElementById('admin-pass').value;
    const code = document.getElementById('admin-2fa').value;
    
    if (user === correctCredentials.user && pass === correctCredentials.pass && code === correctCredentials.code) {
        document.getElementById('admin-login').classList.add('hidden');
        document.getElementById('admin-dashboard').classList.remove('hidden');
        addSecurityLog('Admin login successful', 'green');
        startVisitorCount();
    } else {
        failedAttempts++;
        document.getElementById('attempts').textContent = failedAttempts;
        addSecurityLog(`Failed login attempt - User: ${user}`, 'yellow');
        
        if (failedAttempts >= 3) {
            alert('SECURITY ALERT: Too many failed attempts. System locked for 5 minutes.');
            document.querySelector('button[type="submit"]').disabled = true;
        }
    }
}

function logoutAdmin() {
    document.getElementById('admin-login').classList.remove('hidden');
    document.getElementById('admin-dashboard').classList.add('hidden');
    document.getElementById('admin-user').value = '';
    document.getElementById('admin-pass').value = '';
    document.getElementById('admin-2fa').value = '';
}

function addSecurityLog(message, color) {
    const logs = document.getElementById('security-logs');
    const time = new Date().toISOString().replace('T', ' ').slice(0, 19);
    const entry = document.createElement('div');
    entry.className = `text-${color}-400`;
    entry.textContent = `[${time}] ${message}`;
    logs.insertBefore(entry, logs.firstChild);
}

function startVisitorCount() {
    setInterval(() => {
        const count = document.getElementById('visitor-count');
        count.textContent = Math.floor(1000 + Math.random() * 500);
    }, 3000);
}

// Initialize
window.onload = () => {
    initParticles();
    populateTopics();
    populateQA();
};

// Handle resize
window.onresize = () => {
    const canvas = document.getElementById('simCanvas');
    if (canvas && currentSim) {
        canvas.width = canvas.offsetWidth;
    }
};
