import { PageWrapper } from "@/components/layout/page-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, MessageCircle, MapPin, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Services | Crow Marketing",
  description: "Explore our marketing services including promoter deployment, brand activation, and campaign support.",
};

export default function ServicesPage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="pt-32 pb-24 border-b border-black/5 dark:border-white/10">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <div className="max-w-3xl mx-auto">
             <span className="text-sm font-semibold tracking-widest uppercase text-zinc-500 mb-4 block">Our Expertise</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Everything you need to make an impact.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
              From boots on the ground to high-level strategy, we offer flexible solutions tailored for growing brands.
            </p>
          </div>
        </div>
      </section>

      {/* Services Iteration */}
      <section className="py-24 space-y-32">
        {/* Service 1 */}
        <div id="promoter" className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 scroll-m-32">
          <div className="flex-1 space-y-6">
            <div className="w-12 h-12 rounded-full border border-black/10 dark:border-white/20 flex items-center justify-center mb-6">
                 <MessageCircle className="text-zinc-900 dark:text-zinc-100" />
            </div>
            <h2 className="text-4xl font-bold tracking-tight">Promoter Deployment</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              You've built a great product, but how do you get it into people's hands? We provide highly-trained, engaging promoters who act as your brand ambassadors on the ground.
            </p>
            <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
              <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 shrink-0 text-black dark:text-white" /> Direct consumer engagement & sampling</li>
              <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 shrink-0 text-black dark:text-white" /> Retail store support & merchandising</li>
              <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 shrink-0 text-black dark:text-white" /> Rapid scaling during peak seasons or launches</li>
            </ul>
          </div>
          <div className="flex-1 w-full shrink-0">
             <div className="aspect-[4/3] bg-zinc-100 dark:bg-zinc-900 rounded-[2rem] border border-black/5 dark:border-white/10 flex items-center justify-center p-8 relative overflow-hidden">
                {/* Abstract visualization of people/promoters */}
                <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-zinc-200/50 dark:from-zinc-800/50 to-transparent"></div>
                <div className="flex gap-4 items-end h-full w-full pb-8 justify-center">
                   <div className="w-16 h-32 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                   <div className="w-16 h-48 bg-zinc-400 dark:bg-zinc-500 rounded-full"></div>
                   <div className="w-16 h-40 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                </div>
             </div>
          </div>
        </div>

        {/* Service 2 */}
        <div id="activation" className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row-reverse items-center gap-16 scroll-m-32">
          <div className="flex-1 space-y-6">
            <div className="w-12 h-12 rounded-full border border-black/10 dark:border-white/20 flex items-center justify-center mb-6">
                 <MapPin className="text-zinc-900 dark:text-zinc-100" />
            </div>
            <h2 className="text-4xl font-bold tracking-tight">Brand Activation & Roadshows</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Create memorable offline experiences that generate buzz. We handle everything from concept to logistics, so you can focus on the big picture.
            </p>
            <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
              <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 shrink-0 text-black dark:text-white" /> High-traffic popup conceptualization</li>
              <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 shrink-0 text-black dark:text-white" /> End-to-end event logistics & management</li>
              <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 shrink-0 text-black dark:text-white" /> Interactive booths to capture leads & sales</li>
            </ul>
          </div>
          <div className="flex-1 w-full shrink-0">
             <div className="aspect-[4/3] bg-zinc-100 dark:bg-zinc-900 rounded-[2rem] border border-black/5 dark:border-white/10 flex items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-black/5 dark:bg-white/10 rounded-full blur-3xl"></div>
                <div className="w-full max-w-sm aspect-video bg-white dark:bg-black rounded-xl shadow-2xl border border-black/10 dark:border-white/10 relative">
                   <div className="absolute -right-4 -bottom-4 w-3/4 aspect-video bg-zinc-50 dark:bg-zinc-950 rounded-xl shadow-xl border border-black/5 dark:border-white/5"></div>
                </div>
             </div>
          </div>
        </div>

        {/* Service 3 */}
        <div id="campaigns" className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 scroll-m-32">
          <div className="flex-1 space-y-6">
            <div className="w-12 h-12 rounded-full border border-black/10 dark:border-white/20 flex items-center justify-center mb-6">
                 <TrendingUp className="text-zinc-900 dark:text-zinc-100" />
            </div>
            <h2 className="text-4xl font-bold tracking-tight">Marketing Campaign Support</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Need a campaign launched yesterday? We act as your fractional marketing team to execute multi-channel campaigns precisely and efficiently.
            </p>
            <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
              <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 shrink-0 text-black dark:text-white" /> Digital & social media strategy execution</li>
              <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 shrink-0 text-black dark:text-white" /> Content creation & copywriting alignment</li>
              <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 shrink-0 text-black dark:text-white" /> Cross-channel performance tracking</li>
            </ul>
          </div>
          <div className="flex-1 w-full shrink-0">
             <div className="aspect-[4/3] bg-zinc-100 dark:bg-zinc-900 rounded-[2rem] border border-black/5 dark:border-white/10 flex items-center justify-center p-8 relative overflow-hidden">
                <div className="w-full h-full p-6 border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-2xl flex flex-col gap-4">
                   <div className="h-10 w-1/3 bg-zinc-200 dark:bg-zinc-800 rounded-lg"></div>
                   <div className="flex gap-4 h-full">
                      <div className="flex-1 bg-zinc-200 dark:bg-zinc-800 rounded-lg"></div>
                      <div className="w-1/3 bg-zinc-200 dark:bg-zinc-800 rounded-lg"></div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 border-t border-black/5 dark:border-white/10 bg-zinc-50 dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Not sure what you need?</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            Let's have a chat. We'll assess your current brand position and recommend the most effective strategy to get you where you want to be.
          </p>
          <Button size="lg" className="h-14 px-8" asChild>
            <Link href="/contact">
              Schedule a Call
            </Link>
          </Button>
        </div>
      </section>
    </PageWrapper>
  );
}
