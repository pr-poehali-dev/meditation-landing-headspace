import React, { useRef, useEffect } from "react";

const AnimatedCircles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Circles configuration
    const circles = [
      {
        x: canvas.width * 0.5,
        y: canvas.height * 0.5,
        radius: canvas.width * 0.2,
        color: "#9B87F5",
        pulseSpeed: 0.01,
        pulseAmount: 20,
        phase: 0,
      },
      {
        x: canvas.width * 0.65,
        y: canvas.height * 0.35,
        radius: canvas.width * 0.1,
        color: "#D6BCFA",
        pulseSpeed: 0.015,
        pulseAmount: 15,
        phase: Math.PI / 3,
      },
      {
        x: canvas.width * 0.35,
        y: canvas.height * 0.65,
        radius: canvas.width * 0.12,
        color: "#4B0082",
        pulseSpeed: 0.02,
        pulseAmount: 10,
        phase: Math.PI / 1.5,
      },
      {
        x: canvas.width * 0.75,
        y: canvas.height * 0.65,
        radius: canvas.width * 0.08,
        color: "#8B5CF6",
        pulseSpeed: 0.025,
        pulseAmount: 8,
        phase: Math.PI,
      },
      {
        x: canvas.width * 0.25,
        y: canvas.height * 0.3,
        radius: canvas.width * 0.06,
        color: "#7E69AB",
        pulseSpeed: 0.03,
        pulseAmount: 5,
        phase: Math.PI / 2,
      },
    ];

    let animationFrameId: number;
    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw glowing stars first (behind circles)
      for (let i = 0; i < 30; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 1.5 + 0.5;

        // Star glow effect
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius * 3);
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.8)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.beginPath();
        ctx.arc(x, y, radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Star core
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.fill();
      }

      // Draw each circle with pulsating effect
      circles.forEach((circle) => {
        const pulseOffset =
          Math.sin(time * circle.pulseSpeed + circle.phase) *
          circle.pulseAmount;
        const currentRadius = circle.radius + pulseOffset;

        ctx.beginPath();
        ctx.arc(circle.x, circle.y, currentRadius, 0, Math.PI * 2);

        // Create gradient for each circle
        const gradient = ctx.createRadialGradient(
          circle.x,
          circle.y,
          0,
          circle.x,
          circle.y,
          currentRadius,
        );

        gradient.addColorStop(0, `${circle.color}99`); // Semi-transparent
        gradient.addColorStop(1, `${circle.color}11`); // Almost transparent

        ctx.fillStyle = gradient;
        ctx.fill();

        // Add glow effect
        ctx.shadowColor = circle.color;
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, currentRadius * 0.9, 0, Math.PI * 2);
        ctx.fillStyle = `${circle.color}33`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full aspect-square">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-3/4 md:w-2/3 aspect-[1/2] rounded-3xl overflow-hidden border-4 border-white/20 shadow-lg">
          <img
            src="https://source.unsplash.com/random/600x1200?meditation,stars,night"
            alt="Meditation App"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedCircles;
