import { memo } from 'react';
import { LucideIcon } from 'lucide-react';

interface LinkCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export const LinkCard = memo(({ title, description, icon: Icon, href }: LinkCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full"
    >
      <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20 transition-colors duration-200">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
            <Icon className="w-6 h-6 text-text-white" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-text-white font-semibold text-lg">
            {title}
          </h3>
          <p className="text-text-white-secondary text-sm mt-1">
            {description}
          </p>
        </div>
        <div className="flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-200">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <svg className="w-4 h-4 text-text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
});