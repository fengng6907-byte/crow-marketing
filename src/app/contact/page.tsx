"use client";

import { PageWrapper } from "@/components/layout/page-wrapper";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <PageWrapper>
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="grid md:grid-cols-2 gap-16 item-start max-w-6xl mx-auto">
            
            {/* Contact Details side */}
            <div className="space-y-12">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                  Let's Talk.
                </h1>
                <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
                  Whether you have a specific project in mind or just want to explore how we can help your brand grow, we're ready to listen.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-black/10 dark:border-white/20 flex flex-shrink-0 items-center justify-center">
                    <Mail size={20} className="text-zinc-600 dark:text-zinc-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-wide uppercase text-zinc-500 mb-1">Email Us</h3>
                    <a href="mailto:hello@crowmarketing.sg" className="text-lg font-medium hover:text-accent transition-colors">hello@crowmarketing.sg</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-black/10 dark:border-white/20 flex flex-shrink-0 items-center justify-center">
                    <MapPin size={20} className="text-zinc-600 dark:text-zinc-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-wide uppercase text-zinc-500 mb-1">Visit Us</h3>
                    <p className="text-lg font-medium">
                      CBD District, <br/>
                      Singapore
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="bg-white dark:bg-[#0a0a0a] p-8 md:p-12 rounded-[2rem] border border-black/5 dark:border-white/10 shadow-xl relative overflow-hidden">
              {isSubmitted ? (
                 <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-zinc-50 dark:bg-zinc-900 z-10">
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
                       <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                       </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Received</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-6">Thank you for reaching out. A strategist will get back to you within 24 hours.</p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">Send another message</Button>
                 </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      placeholder="Jane Doe"
                      className="w-full bg-transparent border-0 border-b border-black/20 dark:border-white/20 px-0 py-3 text-lg focus:ring-0 focus:border-black dark:focus:border-white transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      placeholder="jane@company.com"
                      className="w-full bg-transparent border-0 border-b border-black/20 dark:border-white/20 px-0 py-3 text-lg focus:ring-0 focus:border-black dark:focus:border-white transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Company (Optional)</label>
                    <input 
                      type="text" 
                      id="company" 
                      placeholder="Your Startup Ltd."
                      className="w-full bg-transparent border-0 border-b border-black/20 dark:border-white/20 px-0 py-3 text-lg focus:ring-0 focus:border-black dark:focus:border-white transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none" 
                    />
                  </div>
                  
                  <div className="space-y-2 pt-2">
                    <label htmlFor="message" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">How can we help?</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      required
                      placeholder="Tell us about your brand and project..."
                      className="w-full bg-transparent border-0 border-b border-black/20 dark:border-white/20 px-0 py-3 text-lg focus:ring-0 focus:border-black dark:focus:border-white transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none resize-none" 
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full h-14 text-lg" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
            
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
