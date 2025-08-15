import { memo } from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialIconProps {
  icon: LucideIcon;
  href: string;
}

export const SocialIcon = memo(({ icon: Icon, href }: SocialIconProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors duration-200">
        <Icon className="w-6 h-6 text-text-white" />
      </div>
    </a>
  );
});