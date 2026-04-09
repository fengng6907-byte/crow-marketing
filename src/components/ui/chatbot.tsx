"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  role: "user" | "bot";
  content: string;
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-msg",
      role: "bot",
      content: "Hi! How can I help you grow your brand today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading, isOpen]);

  const sendMessage = async (messageText: string) => {
    try {
      // In a real application, consider moving the URL to .env.local
      // e.g., const url = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;
      const res = await fetch("https://your-n8n-url/webhook/crow-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "sendMessage",
          sessionId: "crow-user123",
          chatInput: messageText,
        }),
      });

      if (!res.ok) throw new Error("Network response was not ok");

      const data = await res.json();
      return data.message || "I received your message but no response content was found.";
    } catch (error) {
      console.error("Chat error:", error);
      return "I'm having trouble connecting right now. Please test my webhook configuration or contact us directly!";
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    
    // Add User Message
    const newMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: userMessage,
    };
    
    setMessages((prev) => [...prev, newMessage]);
    setIsLoading(true);

    // Call webhook
    const botResponseText = await sendMessage(userMessage);

    // Add Bot Message
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "bot",
      content: botResponseText,
    };

    setMessages((prev) => [...prev, botMessage]);
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[350px] shadow-2xl rounded-2xl overflow-hidden bg-white dark:bg-[#1a1a1a] border border-black/10 dark:border-white/10 flex flex-col"
            style={{ maxHeight: "calc(100vh - 120px)", height: "500px" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-black text-white dark:bg-white dark:text-black">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <h3 className="font-semibold text-sm">Crow Assistant</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-zinc-50 dark:bg-[#0a0a0a]"
            >
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={cn(
                    "max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed",
                    msg.role === "user" 
                      ? "bg-black text-white dark:bg-white dark:text-black self-end rounded-br-sm" 
                      : "bg-white text-black dark:bg-[#1f1f1f] dark:text-white self-start rounded-bl-sm border border-black/5 dark:border-white/5"
                  )}
                >
                  {msg.content}
                </div>
              ))}
              
              {isLoading && (
                 <div className="bg-white text-black dark:bg-[#1f1f1f] dark:text-white self-start rounded-2xl rounded-bl-sm border border-black/5 dark:border-white/5 px-4 py-3 flex gap-1">
                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce"></span>
                 </div>
              )}
            </div>

            {/* Input Area */}
            <form 
              onSubmit={handleSubmit}
              className="p-3 bg-white dark:bg-[#1a1a1a] border-t border-black/5 dark:border-white/5 flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask us anything..."
                className="flex-1 bg-zinc-100 dark:bg-black/50 border-transparent focus:ring-0 focus:border-transparent rounded-full px-4 text-sm outline-none"
                disabled={isLoading}
              />
              <button 
                type="submit" 
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center disabled:opacity-50 transition-opacity flex-shrink-0"
              >
                {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} className="ml-0.5" />}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-black text-white dark:bg-white dark:text-black shadow-lg shadow-black/20 dark:shadow-white/10 flex items-center justify-center transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </>
  );
}
