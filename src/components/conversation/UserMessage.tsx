import React, { memo } from 'react';
import { MessageBubble } from './MessageBubble';

interface UserMessageProps {
  content: string;
}

export const UserMessage: React.FC<UserMessageProps> = memo(({ content }) => {
  return (
    <MessageBubble variant="user">
      <p className="text-sm font-medium leading-relaxed">{content}</p>
    </MessageBubble>
  );
});
