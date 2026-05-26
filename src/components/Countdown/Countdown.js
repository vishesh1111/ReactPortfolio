import React, { useState, useEffect, useRef } from "react";
import "./Countdown.css";

const COUNTDOWN_TO = 21;
const TICK_INTERVAL = 100;

const Countdown = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState("hello-in");
  const intervalRef = useRef(null);

  useEffect(() => {
    // Step 1: Show hello after 100ms
    const t1 = setTimeout(() => setPhase("hello-visible"), 100);

    // Step 2: Start exiting hello after 1.9s
    const t2 = setTimeout(() => setPhase("hello-exit"), 1900);

    // Step 3: Switch to counting after 2.3s
    const t3 = setTimeout(() => setPhase("counting"), 2300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  // Start counting when phase switches to "counting"
  useEffect(() => {
    if (phase !== "counting") return;

    intervalRef.current = setInterval(() => {
      setCount((prev) => {
        const next = prev + 1;
        if (next >= COUNTDOWN_TO) {
          clearInterval(intervalRef.current);
        }
        return next;
      });
    }, TICK_INTERVAL);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [phase]);

  // When count hits 21, trigger exit sequence
  useEffect(() => {
    if (count < COUNTDOWN_TO) return;

    const exitTimer = setTimeout(() => {
      setPhase("exiting");
    }, 400);

    const doneTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 1000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [count, onComplete]);

  const isCounting =
    phase === "counting" || phase === "exiting";

  return (
    <div
      className={`countdown-overlay ${
        phase === "exiting" ? "countdown-exit" : ""
      }`}
    >
      {/* Hello */}
      <div
        className={`countdown-hello ${
          phase === "hello-visible" ? "visible" : ""
        } ${phase === "hello-exit" || isCounting ? "exiting" : ""}`}
      >
        <span className="countdown-hello-dot" />
        <span>Hello</span>
      </div>

      {/* Counter */}
      {isCounting && (
        <div className="countdown-counter visible">
          <div className="countdown-counter-inner">
            <span className="countdown-value">{count}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Countdown;
