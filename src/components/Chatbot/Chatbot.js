import React, { useState, useRef, useEffect } from 'react';
import useChatbot from '../../hooks/useChatbot';
import './Chatbot.css';

const QUICK_ACTIONS = [
  {
    key: 'me',
    label: 'Me',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    key: 'projects',
    label: 'Projects',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
      </svg>
    ),
  },
  {
    key: 'skills',
    label: 'Skills',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
      </svg>
    ),
  },
  {
    key: 'fun',
    label: 'Fun',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="6" x2="10" y1="11" y2="11" />
        <line x1="8" x2="8" y1="9" y2="13" />
        <line x1="15" x2="15.01" y1="12" y2="12" />
        <line x1="18" x2="18.01" y1="10" y2="10" />
        <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
      </svg>
    ),
  },
  {
    key: 'contact',
    label: 'Contact',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
        <rect x="2" y="4" width="20" height="16" rx="2" />
      </svg>
    ),
  },
];

// Fallback inline SVG that displays if /chatbot-avatar.png isn't present.
// Save your custom robot image to public/chatbot-avatar.png to override.
const FallbackAvatar = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="cb-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#dfe6f5" />
      </linearGradient>
    </defs>
    <rect x="14" y="14" width="36" height="26" rx="10" fill="url(#cb-body)" stroke="#1a2238" strokeWidth="2" />
    <rect x="19" y="20" width="26" height="14" rx="6" fill="#0f1a33" />
    <path d="M24 26 q3 4 6 0" stroke="#5fe1e6" strokeWidth="2.4" fill="none" strokeLinecap="round" />
    <path d="M34 26 q3 4 6 0" stroke="#5fe1e6" strokeWidth="2.4" fill="none" strokeLinecap="round" />
    <path d="M30 31 q2 1.5 4 0" stroke="#5fe1e6" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    <path d="M22 42 q10 7 20 0 v6 q-10 5 -20 0 z" fill="url(#cb-body)" stroke="#1a2238" strokeWidth="2" />
    <line x1="24" y1="46" x2="40" y2="46" stroke="#5fe1e6" strokeWidth="1.5" />
    <circle cx="32" cy="11" r="2" fill="#1a2238" />
    <line x1="32" y1="13" x2="32" y2="14" stroke="#1a2238" strokeWidth="2" />
  </svg>
);

const ChatAvatar = ({ size = 56 }) => {
  const [errored, setErrored] = useState(false);
  const src = `${process.env.PUBLIC_URL || ''}/chatbot-avatar.png`;
  if (errored) {
    return (
      <span className="chatbot-avatar-fallback" style={{ width: size, height: size }}>
        <FallbackAvatar />
      </span>
    );
  }
  return (
    <img
      src={src}
      alt="Chat assistant"
      className="chatbot-avatar-img"
      width={size}
      height={size}
      onError={() => setErrored(true)}
      draggable={false}
    />
  );
};

const Chatbot = () => {
  const { messages, isLoading, sendMessage } = useChatbot();
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, open]);

  // Focus input when panel opens
  useEffect(() => {
    if (open && inputRef.current) {
      const t = setTimeout(() => inputRef.current.focus(), 250);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    sendMessage(trimmed);
    setInput('');
  };

  const handleQuickAction = (key) => {
    if (isLoading) return;
    sendMessage(key, true);
  };

  return (
    <>
      {/* Floating launcher (bottom-right, circular avatar) */}
      <button
        type="button"
        className={`chatbot-launcher ${open ? 'is-open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        aria-expanded={open}
      >
        <span className="chatbot-launcher-pulse" aria-hidden="true" />
        <span className="chatbot-launcher-avatar">
          <ChatAvatar size={56} />
        </span>
      </button>

      {/* Floating chat panel */}
      <div
        className={`chatbot-panel ${open ? 'is-open' : ''}`}
        role="dialog"
        aria-label="Chat with Vishesh's assistant"
        aria-hidden={!open}
      >
        <div className="chatbot-panel-header">
          <div className="chatbot-panel-identity">
            <span className="chatbot-panel-avatar">
              <ChatAvatar size={36} />
            </span>
            <div className="chatbot-panel-meta">
              <strong>Vishesh's Assistant</strong>
              <span><span className="chatbot-status-dot" /> Online</span>
            </div>
          </div>
          <button
            type="button"
            className="chatbot-panel-close"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="chatbot-panel-body">
          {/* Greeting bubble (only when no messages yet) */}
          {messages.length === 0 && (
            <div className="chatbot-greeting">
              <div className="chatbot-message assistant">
                Hey! I'm Vishesh's assistant. Ask me anything, or tap a chip below.
              </div>
            </div>
          )}

          {/* Messages */}
          {messages.length > 0 && (
            <div className="chatbot-messages">
              {messages.map((msg) => (
                <div key={msg.id} className={`chatbot-message ${msg.role}`}>
                  {msg.content}
                </div>
              ))}
              {isLoading && (
                <div className="chatbot-typing">
                  <span className="chatbot-typing-dot" />
                  <span className="chatbot-typing-dot" />
                  <span className="chatbot-typing-dot" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        <div className="chatbot-panel-footer">
          {/* Quick-action pills */}
          <div className="chatbot-pills">
            {QUICK_ACTIONS.map((action) => (
              <button
                key={action.key}
                className="chatbot-pill"
                onClick={() => handleQuickAction(action.key)}
                disabled={isLoading}
              >
                {action.icon}
                <span>{action.label}</span>
              </button>
            ))}
          </div>

          {/* Input */}
          <form className="chatbot-input-wrapper" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              className="chatbot-input"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
            />
            <button
              type="submit"
              className="chatbot-send"
              disabled={!input.trim() || isLoading}
              aria-label="Send message"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
