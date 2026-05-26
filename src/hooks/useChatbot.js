import { useState, useCallback } from 'react';

// Pre-defined responses for quick-action buttons
const QUICK_RESPONSES = {
  me: "Hi! I'm Vishesh — a passionate full-stack developer who loves building beautiful frontends and scalable websites. I also know a bit of cybersecurity! I'm always excited about learning new tech and taking on interesting projects. Want to know more about my skills or projects?",
  projects: "I've worked on some cool projects including blockchain clones, portfolio QR-card generators, and weather apps. I love building things that combine creativity with solid engineering. You can check out my GitHub for more: github.com/vishesh1111",
  skills: "My tech stack includes React, JavaScript, HTML/CSS, Node.js, and more. I'm proficient in frontend development with frameworks like React and have experience with backend technologies too. I'm always expanding my skills!",
  fun: "When I'm not coding, you'll find me exploring new technologies, contributing to open source, or diving into cybersecurity challenges. I believe in continuous learning and love to experiment with new tools and frameworks!",
  contact: "You can reach me at vvishesh53@gmail.com. I'm also on GitHub (vishesh1111), LinkedIn, and Stack Overflow. Feel free to reach out for project collaborations, job opportunities, or just a friendly chat!",
};

// Fallback responses for general questions
const FALLBACK_RESPONSES = [
  "That's a great question! I'm currently running on a mock system, but once my RAG backend is connected, I'll be able to give you much more detailed answers. In the meantime, try the quick-action buttons above!",
  "Interesting! I'd love to help with that. My full AI capabilities will be available soon — for now, feel free to explore using the quick buttons above.",
  "Thanks for asking! I'm a placeholder chatbot right now, but soon I'll have full context about Vishesh's portfolio. Try clicking 'Me', 'Projects', or 'Skills' for some quick info!",
];

const useChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(async (text, isQuickAction = false) => {
    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 600));

    let responseText;

    if (isQuickAction) {
      const key = text.toLowerCase().replace(/tell me about |what are your |how can i |what do you do for /g, '').trim();
      responseText = QUICK_RESPONSES[key] || FALLBACK_RESPONSES[0];
    } else {
      // Check if the message matches any quick-action topic
      const lowerText = text.toLowerCase();
      if (lowerText.includes('about') || lowerText.includes('who') || lowerText.includes('yourself')) {
        responseText = QUICK_RESPONSES.me;
      } else if (lowerText.includes('project') || lowerText.includes('work') || lowerText.includes('built')) {
        responseText = QUICK_RESPONSES.projects;
      } else if (lowerText.includes('skill') || lowerText.includes('tech') || lowerText.includes('stack')) {
        responseText = QUICK_RESPONSES.skills;
      } else if (lowerText.includes('contact') || lowerText.includes('email') || lowerText.includes('reach')) {
        responseText = QUICK_RESPONSES.contact;
      } else if (lowerText.includes('fun') || lowerText.includes('hobby') || lowerText.includes('free time')) {
        responseText = QUICK_RESPONSES.fun;
      } else {
        responseText = FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
      }
    }

    const botMessage = {
      id: Date.now() + 1,
      role: 'assistant',
      content: responseText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMessage]);
    setIsLoading(false);
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  return { messages, isLoading, sendMessage, clearMessages };
};

export default useChatbot;
