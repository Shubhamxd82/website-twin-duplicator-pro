import * as React from 'react';
import type { LucideProps } from 'lucide-react';

// Custom "Link Shortener" icon compatible with LucideIcon type
// Stylized broken chain with sparks, inherits currentColor from parent
export const LinkShortenerIcon = React.forwardRef<SVGSVGElement, LucideProps>(
  ({ color = 'currentColor', size = 24, strokeWidth = 2, className, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Left broken link segment */}
      <path d="M8.5 8.5l-2 2a3 3 0 0 0 0 4.24 3 3 0 0 0 4.24 0l2-2" />
      {/* Right broken link segment */}
      <path d="M15.5 15.5l2-2a3 3 0 0 0 0-4.24 3 3 0 0 0-4.24 0l-2 2" />
      {/* Break details */}
      <path d="M11 11l-1 1M13 13l1-1" />
      {/* Sparks */}
      <path d="M12 6v2M6 12h2M18 12h-2M12 18v-2" />
    </svg>
  )
);

LinkShortenerIcon.displayName = 'LinkShortenerIcon';
