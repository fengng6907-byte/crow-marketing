import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 bg-zinc-50 dark:bg-[#0a0a0a] py-12 md:py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight mb-4 inline-block">
              Crow<span className="text-zinc-500">Marketing</span>
            </Link>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-sm text-sm leading-relaxed">
              A strategic growth partner for new brands in Singapore. We build premium brand perception and drive measurable growth.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wide uppercase text-black dark:text-white">Services</h4>
            <ul className="flex flex-col gap-3 text-sm text-zinc-500 dark:text-zinc-400">
              <li><Link href="/services#promoter" className="hover:text-black dark:hover:text-white transition-colors">Promoter Deployment</Link></li>
              <li><Link href="/services#activation" className="hover:text-black dark:hover:text-white transition-colors">Brand Activation</Link></li>
              <li><Link href="/services#campaigns" className="hover:text-black dark:hover:text-white transition-colors">Marketing Campaigns</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wide uppercase text-black dark:text-white">Company</h4>
            <ul className="flex flex-col gap-3 text-sm text-zinc-500 dark:text-zinc-400">
              <li><Link href="/about" className="hover:text-black dark:hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-black dark:hover:text-white transition-colors">Selected Work</Link></li>
              <li><Link href="/contact" className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1">Contact <ArrowUpRight size={14} /></Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-black/5 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Crow Marketing Singapore. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
