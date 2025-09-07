import React, { useEffect, useRef } from 'react';

const GalaxyBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Enhanced star properties with more variety
    const stars: Array<{
      x: number;
      y: number;
      radius: number;
      opacity: number;
      twinkleSpeed: number;
      color: string;
      pulseOffset: number;
      brightness: number;
    }> = [];

    // Create more attractive stars with variety
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.9 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.008,
        color: ['#ffffff', '#b0e0e6', '#ffd700', '#ff69b4', '#98fb98', '#dda0dd'][Math.floor(Math.random() * 6)],
        pulseOffset: Math.random() * Math.PI * 2,
        brightness: Math.random() * 0.5 + 0.5
      });
    }

    // More frequent shooting stars for attraction
    const shootingStars: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      color: string;
      thickness: number;
    }> = [];

    // Create shooting star more frequently
    const createShootingStar = () => {
      if (Math.random() < 0.003) { // Increased frequency
        const colors = ['#ffffff', '#00bfff', '#ff1493', '#ffd700', '#00ff7f'];
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.4,
          vx: (Math.random() - 0.5) * 8,
          vy: Math.random() * 5 + 2,
          life: 0,
          maxLife: Math.random() * 100 + 80,
          color: colors[Math.floor(Math.random() * colors.length)],
          thickness: Math.random() * 2 + 1
        });
      }
    };

    // Animation loop
    let animationFrame: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create more vibrant galaxy gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.5, 0,
        canvas.width * 0.5, canvas.height * 0.5, Math.max(canvas.width, canvas.height) * 0.7
      );
    
     
      gradient.addColorStop(1, 'rgba(5, 5, 25, 0.9)'); // Very dark
      

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      

      // Draw and animate enhanced stars
      stars.forEach(star => {
        // Enhanced twinkling with pulse effect
        const pulse = Math.sin(time * star.twinkleSpeed + star.pulseOffset) * 0.4;
        star.opacity = Math.max(0.2, Math.min(1, star.brightness + pulse));

        ctx.save();
        ctx.globalAlpha = star.opacity;
        ctx.fillStyle = star.color;
        
        // Add subtle glow for brighter stars
        if (star.opacity > 0.2) {
          ctx.shadowColor = star.color;
          ctx.shadowBlur = star.radius * 3;
        }
        
        // Dynamic star size based on brightness
        const currentRadius = star.radius * (0.4 + star.opacity * 0.2);
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
        
        // Add cross sparkle for very bright stars
        if (star.opacity > 0.8) {
          ctx.strokeStyle = star.color;
          ctx.lineWidth = 0.8;
          ctx.globalAlpha = star.opacity * 0.6;
          ctx.beginPath();
          ctx.moveTo(star.x - currentRadius * 2.5, star.y);
          ctx.lineTo(star.x + currentRadius * 2.5, star.y);
          ctx.moveTo(star.x, star.y - currentRadius * 2.5);
          ctx.lineTo(star.x, star.y + currentRadius * 2.5);
          ctx.stroke();
        }
        
        ctx.restore();
      });

      // Create and animate colorful shooting stars
      createShootingStar();
      
      shootingStars.forEach((star, index) => {
        star.x += star.vx;
        star.y += star.vy;
        star.life++;

        const alpha = 1 - (star.life / star.maxLife);
        if (alpha <= 0) {
          shootingStars.splice(index, 1);
          return;
        }

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = star.color;
        ctx.lineWidth = star.thickness;
        ctx.shadowColor = star.color;
        ctx.shadowBlur = 8;
        
        // Create gradient trail
        const gradient = ctx.createLinearGradient(
          star.x, star.y,
          star.x - star.vx * 15, star.y - star.vy * 15
        );
        gradient.addColorStop(0, star.color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.strokeStyle = gradient;
        
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x - star.vx * 15, star.y - star.vy * 15);
        ctx.stroke();
        
        ctx.restore();
      });

      // Add floating particles for magic effect
      ctx.save();
      ctx.globalAlpha = 0.4;
      for (let i = 0; i < 8; i++) {
        const x = (Math.sin(time * 0.001 + i * 0.5) * canvas.width * 0.4) + canvas.width * 0.5;
        const y = (Math.cos(time * 0.0008 + i * 0.3) * canvas.height * 0.3) + canvas.height * 0.5;
        const size = Math.sin(time * 0.002 + i) * 0.5 + 1;
        
        ctx.fillStyle = ['#ff69b4', '#00bfff', '#ffd700', '#98fb98'][i % 4];
        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = 4;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      time++;
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
      <canvas 
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: 'block' }}
      />
      
      {/* Enhanced fallback gradient */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: `
            radial-gradient(ellipse at center, 
              rgba(75, 0, 130, 0.4) 0%, 
              rgba(50, 20, 80, 0.6) 20%, 
              rgba(25, 25, 112, 0.7) 40%, 
              rgba(15, 15, 60, 0.8) 60%, 
              rgba(5, 5, 25, 0.9) 80%, 
              rgba(0, 0, 0, 1) 100%
            )
          `,
          zIndex: -1
        }}
      >
        {/* Enhanced static stars as fallback */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: ['#ffffff', '#b0e0e6', '#ffd700', '#ff69b4', '#98fb98'][Math.floor(Math.random() * 5)],
              opacity: Math.random() * 0.8 + 0.2,
              animation: `pulse ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
              boxShadow: `0 0 ${Math.random() * 6 + 2}px currentColor`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default GalaxyBackground;