import React, { useState, useEffect, useRef } from 'react';
import './LoadingScreen.css';

// 6s total — phase 1 says hello, phase 2 counts 1→11, then fade out.
const TOTAL_MS = 4000;
const HELLO_END_MS = 1000;
const FADE_OUT_MS = 700;
const COUNT_TO = 11;
// 1→8 zips through quickly and smoothly, 8→11 lingers
const FAST_PIVOT = 10;
const FAST_FRACTION = 0.20; // share of the count window spent on 1..7

const LoadingScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState('hello'); // 'hello' | 'count'
  const [number, setNumber] = useState(1);
  const [fadeOut, setFadeOut] = useState(false);
  const [visible, setVisible] = useState(true);

  const startRef = useRef(null);
  const rafRef = useRef(null);
  const completedRef = useRef(false);

  // Lock page scroll while the loader is up
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    const prevTouchAction = document.body.style.touchAction;
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.touchAction = prevTouchAction;
    };
  }, []);

  useEffect(() => {
    const fadeStartMs = TOTAL_MS - FADE_OUT_MS;
    const countStartMs = HELLO_END_MS;
    const countDurationMs = fadeStartMs - countStartMs;

    const tick = (now) => {
      if (startRef.current == null) startRef.current = now;
      const elapsed = now - startRef.current;

      // Phase
      if (elapsed < HELLO_END_MS) {
        setPhase('hello');
      } else {
        setPhase('count');
        const t = Math.min(1, (elapsed - countStartMs) / countDurationMs);
        // Two-speed pacing: 1..FAST_PIVOT in FAST_FRACTION of the window,
        // then FAST_PIVOT..COUNT_TO across the remaining time.
        let n;
        if (t < FAST_FRACTION) {
          const tt = t / FAST_FRACTION; // 0..1
          n = 1 + Math.floor(tt * (FAST_PIVOT - 1));
        } else {
          const tt = (t - FAST_FRACTION) / (1 - FAST_FRACTION); // 0..1
          n = FAST_PIVOT + Math.floor(tt * (COUNT_TO - FAST_PIVOT + 1));
        }
        n = Math.min(COUNT_TO, Math.max(1, n));
        setNumber(n);
      }

      // Trigger fade-out
      if (elapsed >= fadeStartMs) {
        setFadeOut(true);
      }

      // Done
      if (elapsed >= TOTAL_MS) {
        if (!completedRef.current) {
          completedRef.current = true;
          setVisible(false);
          if (onComplete) onComplete();
        }
        cancelAnimationFrame(rafRef.current);
        return;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!visible) return null;

  return (
    <div className={`ls-root ${fadeOut ? 'ls-fade' : ''}`}>
      {phase === 'hello' ? (
        <div className="ls-hello" key="hello">
          <span className="ls-hello-text">Hello</span>
        </div>
      ) : (
        <div className="ls-count" key={number}>
          {number}
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;
