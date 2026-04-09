import { PageWrapper } from "@/components/layout/page-wrapper";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Selected Work | Crow Marketing",
  description: "View our portfolio of conceptual campaigns and past projects.",
};

export default function PortfolioPage() {
  return (
    <PageWrapper>
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Selected Work
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              A collection of conceptual projects and campaigns demonstrating our approach to brand activation and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32 border-b border-black/5 dark:border-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
            
            {/* Project 1 */}
            <div className="group block">
              <div className="relative aspect-[4/3] bg-zinc-100 dark:bg-zinc-900 rounded-[2rem] overflow-hidden mb-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 opacity-50 transition-opacity group-hover:opacity-100"></div>
                <div className="w-3/4 h-3/4 bg-white dark:bg-black shadow-lg rounded-xl transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1 relative overflow-hidden border border-black/5 dark:border-white/10">
                   <div className="absolute inset-x-0 bottom-0 h-1/2 bg-blue-50 dark:bg-blue-900/20"></div>
                   <div className="absolute top-4 left-4 w-1/3 h-4 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
                   <div className="absolute top-10 left-4 w-1/4 h-4 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
                </div>
              </div>
              <div className="flex gap-2 mb-3">
                 <span className="text-xs font-semibold px-2 py-1 bg-zinc-100 dark:bg-zinc-900 rounded-md text-zinc-600 dark:text-zinc-400">Brand Activation</span>
                 <span className="text-xs font-semibold px-2 py-1 bg-zinc-100 dark:bg-zinc-900 rounded-md text-zinc-600 dark:text-zinc-400">Tech</span>
              </div>
              <h2 className="text-3xl font-bold mb-3 group-hover:text-accent transition-colors">Nova Launch Campaign</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Conceptualizing and executing a high-footfall brand activation for a new tech startup in Singapore's CBD. The campaign involved experiential booths and direct promoter engagement.
              </p>
            </div>

            {/* Project 2 */}
            <div className="group block md:mt-16">
              <div className="relative aspect-[4/3] bg-zinc-100 dark:bg-zinc-900 rounded-[2rem] overflow-hidden mb-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 to-rose-50 dark:from-orange-900/20 dark:to-rose-900/20 opacity-50 transition-opacity group-hover:opacity-100"></div>
                <div className="w-3/4 h-3/4 bg-white dark:bg-black shadow-lg rounded-xl transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1 relative overflow-hidden border border-black/5 dark:border-white/10 flex flex-col justify-end p-4">
                   <div className="w-full h-1/2 bg-orange-50 dark:bg-orange-900/20 rounded-lg"></div>
                </div>
              </div>
              <div className="flex gap-2 mb-3">
                 <span className="text-xs font-semibold px-2 py-1 bg-zinc-100 dark:bg-zinc-900 rounded-md text-zinc-600 dark:text-zinc-400">Promoter Deployment</span>
                 <span className="text-xs font-semibold px-2 py-1 bg-zinc-100 dark:bg-zinc-900 rounded-md text-zinc-600 dark:text-zinc-400">F&B</span>
              </div>
              <h2 className="text-3xl font-bold mb-3 group-hover:text-accent transition-colors">FreshBite Sampling</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                A multi-location promoter deployment for a new healthy snack brand. Over 4 weekends, we successfully distributed 10,000+ samples driving significant retail conversion.
              </p>
            </div>

            {/* Project 3 */}
            <div className="group block">
              <div className="relative aspect-[4/3] bg-zinc-100 dark:bg-zinc-900 rounded-[2rem] overflow-hidden mb-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 opacity-50 transition-opacity group-hover:opacity-100"></div>
                <div className="w-3/4 h-3/4 bg-white dark:bg-black shadow-lg rounded-xl transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1 flex gap-2 p-4 border border-black/5 dark:border-white/10">
                   <div className="w-1/2 h-full bg-zinc-50 dark:bg-zinc-950 rounded bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.05)_50%,transparent_75%)]"></div>
                   <div className="w-1/2 h-full bg-zinc-50 dark:bg-zinc-950 rounded"></div>
                </div>
              </div>
              <div className="flex gap-2 mb-3">
                 <span className="text-xs font-semibold px-2 py-1 bg-zinc-100 dark:bg-zinc-900 rounded-md text-zinc-600 dark:text-zinc-400">Digital Campaign</span>
                 <span className="text-xs font-semibold px-2 py-1 bg-zinc-100 dark:bg-zinc-900 rounded-md text-zinc-600 dark:text-zinc-400">Lifestyle</span>
              </div>
              <h2 className="text-3xl font-bold mb-3 group-hover:text-accent transition-colors">Aura Rebrand Rollout</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We acted as the fractional marketing team for a lifestyle brand's pivot, executing a cohesive digital strategy across Meta and TikTok that doubled their average engagement rate.
              </p>
            </div>
            
            {/* Project 4 */}
            <div className="group block md:mt-16">
              <div className="relative aspect-[4/3] bg-zinc-50 dark:bg-zinc-950 rounded-[2rem] overflow-hidden mb-6 flex items-center justify-center border border-dashed border-black/10 dark:border-white/10">
                 <div className="text-center">
                    <p className="text-zinc-500 font-medium mb-4">Your Brand Here</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/contact">Start a Project</Link>
                    </Button>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 text-center">
         <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-6">Ready to see these results for your brand?</h2>
            <Button asChild size="lg" className="h-14 px-8 text-lg">
               <Link href="/contact">Get in touch <ArrowRight className="ml-2 w-5 h-5"/></Link>
            </Button>
         </div>
      </section>
    </PageWrapper>
  );
}
