import React, { useState } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../../hooks/useTheme';

export default function VoiceCommands() {
  const { theme } = useTheme();
  const [isListening, setIsListening] = useState(false);
  const [feedback, setFeedback] = useState('');

  const toggleListening = () => {
    if (!isListening) {
      if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        setIsListening(true);
        setFeedback('Listening...');
        
        // Simulate voice command processing
        setTimeout(() => {
          setIsListening(false);
          setFeedback('Command processed!');
          setTimeout(() => setFeedback(''), 2000);
        }, 3000);
      } else {
        setFeedback('Voice recognition not supported');
        setTimeout(() => setFeedback(''), 2000);
      }
    } else {
      setIsListening(false);
      setFeedback('');
    }
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleListening}
        className={`p-2 rounded-lg ${
          isListening ? 'bg-purple-600' : 'bg-gray-700'
        } hover:bg-purple-700 transition-colors`}
      >
        {isListening ? (
          <Mic className="h-5 w-5 text-white" />
        ) : (
          <MicOff className="h-5 w-5 text-white" />
        )}
      </motion.button>
      
      {feedback && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full mt-2 right-0 bg-black/80 text-white text-sm py-1 px-3 rounded-lg whitespace-nowrap"
        >
          {feedback}
        </motion.div>
      )}
    </div>
  );
}