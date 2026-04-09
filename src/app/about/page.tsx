import { PageWrapper } from "@/components/layout/page-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Target, Lightbulb, Users } from "lucide-react";

export const metadata = {
  title: "About | Crow Marketing",
  description: "Learn more about Crow Marketing, our mission, and why we exist.",
};

export default function AboutPage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="pt-32 pb-24 border-b border-black/5 dark:border-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              We exist to help new brands <span className="text-zinc-400">succeed</span>.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
              Crow Marketing was founded on a simple premise: startups and new businesses need high-caliber marketing execution without the overhead of a traditional agency.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-zinc-50 dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Story</h2>
            <div className="space-y-4 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
              <p>
                In Singapore's fast-paced market, launching a brand is harder than ever. Many entrepreneurs have incredible products but lack the specialized team to drive awareness and generate that crucial initial traction.
              </p>
              <p>
                Traditional agencies often demand massive retainers, while building an in-house team takes time that new founders don't have. We saw a gap for a strategic growth partner that could drop in, deploy rapidly, and act as an extension of the founding team.
              </p>
              <p>
                Today, Crow Marketing provides agile, impactful marketing support. From deploying promoters on the ground to orchestrating full-scale digital campaigns, we do whatever it takes to get your brand noticed.
              </p>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-square bg-zinc-200 dark:bg-zinc-800 rounded-3xl overflow-hidden flex items-center justify-center p-8">
               <div className="w-full h-full bg-white dark:bg-black rounded-2xl shadow-xl flex items-center justify-center text-zinc-300 dark:text-zinc-700">
                  {/* Subtle graphic or founder image placeholder */}
                  <Target size={120} strokeWidth={1} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-16">What Drives Us</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
             <div className="space-y-4">
               <div className="w-12 h-12 rounded-full border border-black/10 dark:border-white/20 flex items-center justify-center">
                 <Target size={24} className="text-zinc-900 dark:text-zinc-100" />
               </div>
               <h3 className="text-2xl font-bold">Results Over Fluff</h3>
               <p className="text-zinc-600 dark:text-zinc-400">
                 We don't do vanity metrics. We focus on measurable outcomes that actually impact your bottom line—sales, footfall, and genuine engagement.
               </p>
             </div>
             
             <div className="space-y-4">
               <div className="w-12 h-12 rounded-full border border-black/10 dark:border-white/20 flex items-center justify-center">
                 <Lightbulb size={24} className="text-zinc-900 dark:text-zinc-100" />
               </div>
               <h3 className="text-2xl font-bold">Agile Execution</h3>
               <p className="text-zinc-600 dark:text-zinc-400">
                 The market shifts daily. Our agile approach allows us to pivot strategies rapidly and capitalize on emerging opportunities without bureaucratic delays.
               </p>
             </div>
             
             <div className="space-y-4">
               <div className="w-12 h-12 rounded-full border border-black/10 dark:border-white/20 flex items-center justify-center">
                 <Users size={24} className="text-zinc-900 dark:text-zinc-100" />
               </div>
               <h3 className="text-2xl font-bold">True Partnership</h3>
               <p className="text-zinc-600 dark:text-zinc-400">
                 We treat your budget like our own. You get a transparent, dedicated team that celebrates your wins and navigate challenges together.
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white dark:bg-white dark:text-black">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Let's write your success story.</h2>
          <Button size="lg" className="bg-white text-black hover:bg-zinc-100 dark:bg-black dark:text-white dark:hover:bg-zinc-900 h-14 px-8" asChild>
            <Link href="/contact">
              Talk to Us <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </PageWrapper>
  );
}
