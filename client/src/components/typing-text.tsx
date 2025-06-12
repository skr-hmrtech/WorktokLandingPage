import { useState, useEffect } from 'react';

interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export default function TypingText({ text, className = '', speed = 100, delay = 0 }: TypingTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const startTyping = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTyping);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, isTyping]);

  return (
    <span className={`${className}`}>
      {displayText}
      <span className="animate-pulse text-green-500">|</span>
    </span>
  );
}