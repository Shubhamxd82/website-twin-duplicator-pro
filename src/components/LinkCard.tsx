import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface LinkCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  delay?: number;
}

export const LinkCard = ({ title, description, icon: Icon, href, delay = 0 }: LinkCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full motion-safe:animate-fade-in motion-reduce:animate-none"
      style={{ animationDelay: `${delay}ms`, willChange: 'transform, opacity' }}
    >
      <div className="glass-card flex items-center gap-4 p-4 rounded-2xl backdrop-blur-none hover:backdrop-blur-sm bg-glass border border-glass-border shadow-glass transition-all duration-300 hover:scale-105 hover:shadow-glow">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
            <Icon className="w-6 h-6 text-text-white" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-text-white font-semibold text-lg group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
          <p className="text-text-white-secondary text-sm mt-1 group-hover:text-text-white transition-colors duration-300">
            {description}
          </p>
        </div>
        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <svg className="w-4 h-4 text-text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
};