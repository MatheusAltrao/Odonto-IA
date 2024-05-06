'use client';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { CornerDownLeft, Loader } from 'lucide-react';
import { FormEvent, useState } from 'react';
import ReactMarkdown from 'react-markdown';

type MessageType = {
  type: 'user' | 'ia';
  content: string;
  id?: string;
  isBold?: boolean;
  isTitle?: boolean;
};

type ChoiceType = {
  message: { content: string };
};

const Chat = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setMessages((prev) => [...prev, { type: 'user', content: prompt }]);
    setPrompt('');

    const response = await fetch('/api/chat-gpt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    setIsLoading(false);
    const result = await response.json();
    setMessages((prev) => [
      ...prev,
      ...result.choices.map((choice: ChoiceType) => ({
        type: 'ia',
        content: choice.message.content,
      })),
    ]);
  };

  return (
    <div className=" h-full rounded-xl bg-muted/50 w-full grid grid-rows-[1fr_5fr_1fr]">
      <Header />

      <div className="row-span-6 p-4 gap-4 flex flex-1 flex-col   overflow-y-auto ">
        {messages.map((msg, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            key={index}
            className={`message-${msg.type}`}
          >
            <ReactMarkdown
              className={
                'space-y-5 prose prose-p:text-base prose-h1:text-2xl prose-h2:text-lg prose-a:text-blue-500 '
              }
            >
              {msg.content}
            </ReactMarkdown>
          </motion.div>
        ))}

        {isLoading && (
          <Loader
            className="animate-spin text-primary"
            size={20}
          />
        )}
      </div>

      <div className="p-4">
        <form
          onSubmit={handleSendMessage}
          className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
        >
          <Label
            htmlFor="message"
            className="sr-only"
          >
            Message
          </Label>
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            id="message"
            placeholder="Quantos dentes temos na boca?"
            className="min-h-28 resize-none font-medium border-0 p-3 shadow-none focus-visible:ring-0"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage(e);
              }
            }}
          />
          <div className="flex items-center p-3 pt-0">
            <Button
              disabled={prompt.length == 0}
              type="submit"
              size="sm"
              className={`ml-auto gap-1.5 ${prompt.length == 0 ? 'opacity-60' : 'opacity-100'}`}
            >
              Enviar
              <CornerDownLeft className="size-3.5" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
