import * as React from 'react';
import type { LucideProps } from 'lucide-react';

// New "Link Shortener" icon: diagonal broken chain with lightning cut and angled sparks
// Matches LucideIcon signature and inherits currentColor
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
      {/* Left chain segment (bottom-left) */}
      <path d="M9.25 14.75l-1.6-1.6a3 3 0 0 1 0-4.24 3 3 0 0 1 4.24 0l1.6 1.6" />
      {/* Right chain segment (top-right) */}
      <path d="M14.75 9.25l1.6 1.6a3 3 0 0 1 0 4.24 3 3 0 0 1-4.24 0l-1.6-1.6" />

      {/* Lightning cut through the break */}
      <path d="M10.5 8.5l1.3 1.3-1 1.7 2.2.5-1.5 2.5" />

      {/* Angled sparks around the break */}
      <path d="M8.6 7l.9.9" />
      <path d="M16 7.5l-.9.9" />
      <path d="M17 13.9l-1-.9" />
      <path d="M7 13.9l1-.9" />
    </svg>
  )
);

LinkShortenerIcon.displayName = 'LinkShortenerIcon';
