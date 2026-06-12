// src/components/layout/Background.jsx
import { useEffect, useRef } from 'react';

// Cores medievais: Branco de fusão, Ouro, Laranja Forja, Vermelho Carmim
const MEDIEVAL_COLORS = ['#FFFFFF', '#FFD700', '#FF4500', '#8B0000'];

const ambientParticles = Array.from({ length: 25 }, () => {
  const size = 1.5 + Math.random() * 2.5;
  return {
    left: `${Math.random() * 100}%`,
    bottom: `-${10 + Math.random() * 20}%`,
    size: `${size}px`,
    animationDelay: `${Math.random() * 8}s`,
    animationDuration: `${7 + Math.random() * 7}s`,
    color: MEDIEVAL_COLORS[Math.floor(Math.random() * (MEDIEVAL_COLORS.length - 1)) + 1],
    shadowSize: `${size * 2}px`,
    opacity: 0.1 + Math.random() * 0.2,
    blur: Math.random() > 0.6 ? "2px" : "0px",
  };
});

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: true });
    let sparks = [];
    let fireCores = [];
    let animationFrameId;

    let lastX = -1000;
    let lastY = -1000;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // ==========================================
    // 1. NÚCLEO DE FOGO (Mantido sutil)
    // ==========================================
    class FireCore {
      constructor(x, y) {
        this.x = x + (Math.random() - 0.5) * 2; 
        this.y = y + (Math.random() - 0.5) * 2;
        this.size = Math.random() * 4 + 2; 
        this.life = 1.0;
        this.decay = 0.1 + Math.random() * 0.05; 
      }

      update() {
        this.size *= 0.88; 
        this.y -= 0.3; 
        this.life -= this.decay;
      }

      draw() {
        if (this.life <= 0) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        let color = this.life > 0.6 ? `rgba(255, 215, 0, ${this.life})` : `rgba(255, 69, 0, ${this.life})`;
        ctx.fillStyle = color;
        ctx.fill();
      }
    }

    // ==========================================
    // 2. FAÍSCAS DE RASGO (Física Dinâmica)
    // ==========================================
    class TearSpark {
      constructor(x, y, dirX, dirY, mouseSpeed) {
        this.x = x;
        this.y = y;
        this.oldX = x;
        this.oldY = y;

        // Normaliza a direção para que funcione perfeitamente até em movimentos lentos
        const dist = Math.sqrt(dirX * dirX + dirY * dirY) || 1;
        const normX = dirX / dist;
        const normY = dirY / dist;

        const angle = Math.atan2(normY, normX) + (Math.random() - 0.5) * 0.8;
        
        // O SEGREDO: A força é baseada na velocidade do mouse.
        // Base de 1 a 3 (movimento lento) + bônus de velocidade (movimento rápido)
        const force = (Math.random() * 2 + 1) + Math.min(mouseSpeed * 0.2, 8); 

        this.vx = Math.cos(angle) * force;
        this.vy = Math.sin(angle) * force;

        this.life = 1.0;
        this.decayRate = 0.04 + Math.random() * 0.04; 
        this.thickness = Math.random() * 1.5 + 0.5; 
      }

      update() {
        this.oldX = this.x;
        this.oldY = this.y;

        this.x += this.vx;
        this.y += this.vy;

        this.vx *= 0.82; 
        this.vy *= 0.82; 
        this.vy += 0.8; // Gravidade puxa a faísca pra baixo

        this.life -= this.decayRate;
      }

      draw() {
        if (this.life <= 0) return;

        ctx.beginPath();
        ctx.moveTo(this.oldX, this.oldY);
        ctx.lineTo(this.x, this.y);

        ctx.lineWidth = this.thickness;
        ctx.lineCap = 'round';

        let color;
        if (this.life > 0.7) color = `rgba(255, 255, 255, ${this.life})`; 
        else if (this.life > 0.4) color = `rgba(255, 215, 0, ${this.life})`; 
        else color = `rgba(139, 0, 0, ${this.life})`; 

        ctx.strokeStyle = color;
        ctx.stroke();
      }
    }

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      if (lastX === -1000) {
        lastX = x;
        lastY = y;
        return;
      }

      const dx = x - lastX;
      const dy = y - lastY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Agora reage a movimentos MUITO lentos (qualquer distância maior que 0.5 pixel)
      if (distance > 0.5) {
        // Pelo menos 1 passo gerado, garantindo efeito mesmo quando devagar
        const steps = Math.max(1, Math.min(Math.floor(distance / 5), 15)); 
        
        for (let i = 0; i <= steps; i++) {
          const interpX = lastX + dx * (i / steps);
          const interpY = lastY + dy * (i / steps);

          if (fireCores.length < 30) {
            fireCores.push(new FireCore(interpX, interpY));
          }

          // Aumentei a taxa de faíscas e o limite global (agora até 45 faíscas ao mesmo tempo)
          if (Math.random() > 0.4 && sparks.length < 45) { 
            sparks.push(new TearSpark(interpX, interpY, dx, dy, distance));
          }
        }
      }

      lastX = x;
      lastY = y;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'screen'; 

      for (let i = fireCores.length - 1; i >= 0; i--) {
        fireCores[i].update();
        fireCores[i].draw();
        if (fireCores[i].life <= 0) fireCores.splice(i, 1);
      }

      for (let i = sparks.length - 1; i >= 0; i--) {
        sparks[i].update();
        sparks[i].draw();
        if (sparks[i].life <= 0) sparks.splice(i, 1);
      }

      ctx.globalCompositeOperation = 'source-over';
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#030101] pointer-events-none select-none">
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#030101] via-[#0A0303] to-[#030101] z-0" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_bottom,rgba(139,0,0,0.4),transparent_60%)] blur-[50px] z-10" />

      {ambientParticles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full mix-blend-screen z-20"
          style={{
            left: p.left,
            bottom: p.bottom,
            width: p.size,
            height: p.size,
            animationDelay: p.animationDelay,
            animationDuration: p.animationDuration,
            background: p.color,
            boxShadow: `0 0 ${p.shadowSize} ${p.color}`,
            opacity: p.opacity,
            filter: `blur(${p.blur})`,
            animationName: 'float-up',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            willChange: 'transform, opacity'
          }}
        />
      ))}
      
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-30"
      />
    </div>
  );
}