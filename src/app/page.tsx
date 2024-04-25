'use client';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CornerDownLeft, Loader } from 'lucide-react';
import { FormEvent, useState } from 'react';

type MessageType = {
  type: 'user' | 'ia';
  content: string;
};

type ChoiceType = {
  message: { content: string };
};

export default function Home() {
  const [choices, setChoices] = useState<ChoiceType[]>([]);
  const [prompt, setPrompt] = useState<string>('');
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setMessages((prev) => [...prev, { type: 'user', content: prompt }]);

    const response = await fetch('/api/chat-gpt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });
    setPrompt('');
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
    <div className="h-screen w-screen overflow-hidden max-w-[900px] mx-auto p-4 flex flex-1 ">
      <div className=" rounded-xl bg-muted/50 w-full grid grid-rows-[1fr_5fr_1fr]">
        <Header />

        <div className="row-span-6 p-4 gap-4 flex flex-1 flex-col max-h-[300px]  overflow-y-auto ">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message-${msg.type} `}
            >
              <p className="text-sm break-words font-medium">{msg.content}</p>
            </div>
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
              placeholder="Type your message here..."
              className="min-h-28 resize-none font-medium border-0 p-3 shadow-none focus-visible:ring-0"
            />
            <div className="flex items-center p-3 pt-0">
              <Button
                disabled={prompt.length == 0}
                type="submit"
                size="sm"
                className={`ml-auto gap-1.5 ${prompt.length == 0 ? 'opacity-60' : 'opacity-100'}`}
              >
                Send Message
                <CornerDownLeft className="size-3.5" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
