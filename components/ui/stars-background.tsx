"use client";
import { cn } from "@/lib/utils";
import React, {
  useState,
  useEffect,
  useRef,
  RefObject,
  useCallback, memo,
} from "react";
import {useTheme} from "next-themes";

interface StarProps {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number | null;
  fadeInProgress: number; // Add this to track fade-in progress (0-1)
}

interface StarBackgroundProps {
  starDensity?: number;
  allStarsTwinkle?: boolean;
  twinkleProbability?: number;
  minTwinkleSpeed?: number;
  maxTwinkleSpeed?: number;
  className?: string;
  theme?: string | undefined;
  style?: React.CSSProperties;
}

export const StarsBackground: React.FC<StarBackgroundProps> = ({
  starDensity = 0.00015,
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  minTwinkleSpeed = 0.5,
  maxTwinkleSpeed = 1,
  className, theme = 'dark',
    style = {},
}) => {
  const [stars, setStars] = useState<StarProps[]>([]);

  const canvasRef: RefObject<HTMLCanvasElement | null> =
    useRef<HTMLCanvasElement>(null);

  const generateStars = useCallback(
    (width: number, height: number): StarProps[] => {
      const area = width * height;
      const numStars = Math.floor(area * starDensity);
      return Array.from({ length: numStars }, () => {
        const shouldTwinkle =
          allStarsTwinkle || Math.random() < twinkleProbability;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 0.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.5,
          twinkleSpeed: shouldTwinkle
            ? minTwinkleSpeed +
              Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
            : null,
          fadeInProgress: 0, // Initialize to 0 (fully transparent)
        };
      });
    },
    [
      starDensity,
      allStarsTwinkle,
      twinkleProbability,
      minTwinkleSpeed,
      maxTwinkleSpeed,
    ]
  );

  useEffect(() => {
    const updateStars = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        setStars(generateStars(width, height));
      }
    };

    updateStars();

    const resizeObserver = new ResizeObserver(updateStars);
    if (canvasRef.current) {
      resizeObserver.observe(canvasRef.current);
    }

    return () => {
      if (canvasRef.current) {
        resizeObserver.unobserve(canvasRef.current);
      }
    };
  }, [
    starDensity,
    allStarsTwinkle,
    twinkleProbability,
    minTwinkleSpeed,
    maxTwinkleSpeed,
    generateStars,
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const fadeInDuration = 300; // Duration of the fade-in animation in ms
    const startTime = Date.now(); // Capture when rendering starts

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;

      stars.forEach((star) => {
        // Update the fade-in progress based on elapsed time
        if (star.fadeInProgress < 1) {
          star.fadeInProgress = Math.min(1, elapsedTime / fadeInDuration);
        }

        // Calculate the current opacity with fade-in applied
        let currentOpacity = star.opacity;

        if (star.twinkleSpeed !== null) {
          currentOpacity =
            0.5 +
            Math.abs(Math.sin((currentTime * 0.001) / star.twinkleSpeed) * 0.5);
        }

        // Apply the fade-in progress
        currentOpacity *= star.fadeInProgress;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = theme === 'dark'
          ? `rgba(255, 255, 255, ${currentOpacity})`
          : `rgba(0, 0, 0, ${currentOpacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [stars, theme]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("h-full w-full absolute inset-0 ", className)}
      style={style}
    />
  );
};
