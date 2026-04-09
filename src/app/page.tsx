import { PageWrapper } from "@/components/layout/page-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, RefreshCcw, Rocket } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 md:pt-40 md:pb-48">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100 via-white to-white dark:from-zinc-900 dark:via-black dark:to-black"></div>
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
            Launch.<br className="md:hidden"/> Grow.<br className="md:hidden"/> Scale.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl leading-relaxed">
            A strategic growth partner for new brands and startups in Singapore. We provide the team, strategy, and execution you need to succeed.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="w-full sm:w-auto h-14 px-8 text-lg">
              <Link href="/contact">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto h-14 px-8 text-lg">
              <Link href="/services">
                Explore Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-24 bg-zinc-50 dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Built for the Modern Entrepreneur</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg">We understand the challenges of starting up. Our services are designed to be agile, impactful, and scalable.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-black p-8 rounded-3xl border border-black/5 dark:border-white/10 shadow-sm transition-transform hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center mb-6">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Speed to Market</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">Rapid deployment of promoters and marketing campaigns to get your brand in front of customers fast.</p>
            </div>
            
            <div className="bg-white dark:bg-black p-8 rounded-3xl border border-black/5 dark:border-white/10 shadow-sm transition-transform hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center mb-6">
                <RefreshCcw size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Total Flexibility</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">No rigid retainers. Scale your marketing support up or down based on your current business needs.</p>
            </div>
            
            <div className="bg-white dark:bg-black p-8 rounded-3xl border border-black/5 dark:border-white/10 shadow-sm transition-transform hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center mb-6">
                <Rocket size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Startup Friendly</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">We speak your language. Practical, ROI-focused strategies without the traditional agency fluff.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Preview */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Sample Campaigns</h2>
              <p className="text-xl text-zinc-600 dark:text-zinc-400">Discover how we translate disruptive ideas into real-world brand experiences.</p>
            </div>
            <Button variant="outline" asChild className="hidden md:flex">
              <Link href="/portfolio">View all work</Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/portfolio" className="group block">
              <div className="relative aspect-[4/3] bg-zinc-100 dark:bg-zinc-900 rounded-3xl overflow-hidden mb-6 flex items-center justify-center border border-black/5 dark:border-white/10">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 opacity-50 transition-opacity group-hover:opacity-100"></div>
                {/* Placeholder for an actual image */}
                <div className="w-3/4 h-3/4 bg-white dark:bg-black shadow-2xl rounded-xl transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1"></div>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">Tech Startup Launch</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Brand Activation &bull; CBD Roadshow</p>
            </Link>
            
            <Link href="/portfolio" className="group block">
              <div className="relative aspect-[4/3] bg-zinc-100 dark:bg-zinc-900 rounded-3xl overflow-hidden mb-6 flex items-center justify-center border border-black/5 dark:border-white/10">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 to-rose-50 dark:from-orange-900/20 dark:to-rose-900/20 opacity-50 transition-opacity group-hover:opacity-100"></div>
                <div className="w-3/4 h-3/4 bg-white dark:bg-black shadow-2xl rounded-xl transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"></div>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">F&B Brand Sampling</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Promoter Deployment &bull; 4 Locations</p>
            </Link>
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Button variant="outline" asChild className="w-full">
              <Link href="/portfolio">View all work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white dark:bg-white dark:text-black">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Ready to make noise?</h2>
          <Button size="lg" variant="outline" className="bg-white text-black hover:bg-zinc-100 dark:bg-black dark:text-white dark:hover:bg-zinc-900 border-none h-14 px-8 text-lg" asChild>
            <Link href="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </section>
    </PageWrapper>
  );
}
