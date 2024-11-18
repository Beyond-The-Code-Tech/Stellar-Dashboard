import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Title } from '@tremor/react';
import { MessageSquare, User, Send } from 'lucide-react';
import { useTheme } from '../../../hooks/useTheme';

interface Comment {
  id: number;
  user: string;
  message: string;
  timestamp: string;
}

const initialComments: Comment[] = [
  {
    id: 1,
    user: 'Sarah Chen',
    message: 'Revenue growth looks promising for Q2',
    timestamp: '2 hours ago'
  },
  {
    id: 2,
    user: 'Alex Thompson',
    message: 'Should we adjust our Q3 predictions?',
    timestamp: '1 hour ago'
  }
];

export default function CollaborationTools() {
  const { theme } = useTheme();
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: comments.length + 1,
      user: 'You',
      message: newComment,
      timestamp: 'Just now'
    };

    setComments([...comments, comment]);
    setNewComment('');
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <Card className={`${theme.bgColor} p-6 rounded-xl shadow-xl`}>
        <div className="flex items-center justify-between mb-4">
          <Title className={theme.textColor}>Team Collaboration</Title>
          <MessageSquare className={`h-5 w-5 ${theme.textColor}`} />
        </div>

        <div className="space-y-4 max-h-[300px] overflow-y-auto">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <User className={`h-8 w-8 ${theme.textColor} opacity-75`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <p className={`text-sm font-medium ${theme.textColor}`}>{comment.user}</p>
                  <span className={`text-xs ${theme.textColor} opacity-50`}>{comment.timestamp}</span>
                </div>
                <p className={`text-sm ${theme.textColor} opacity-75`}>{comment.message}</p>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="mt-4 flex items-center space-x-2">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1 bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="p-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Send className="h-5 w-5 text-white" />
          </button>
        </form>
      </Card>
    </motion.div>
  );
}