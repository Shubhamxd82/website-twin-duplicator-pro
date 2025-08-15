import { LucideIcon } from 'lucide-react';

interface SocialIconProps {
  icon: LucideIcon;
  href: string;
  delay?: number;
}

export const SocialIcon = ({ icon: Icon, href, delay = 0 }: SocialIconProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group motion-safe:animate-scale-in motion-reduce:animate-none"
      style={{ animationDelay: `${delay}ms`, willChange: 'transform, opacity' }}
    >
      <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-glow">
        <Icon className="w-6 h-6 text-text-white group-hover:text-white transition-colors duration-300" />
      </div>
    </a>
  );
};