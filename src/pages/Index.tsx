import { Mail, Instagram, Twitter, MessageCircle, Send, Heart, User, Sparkles, Youtube, Music, DollarSign, Link2 } from 'lucide-react';
import { LinkCard } from '@/components/LinkCard';
import { SocialIcon } from '@/components/SocialIcon';
import avatarImage from '@/assets/avatar.jpg';

const Index = () => {
  const links = [
    {
      title: "Help and Support",
      description: "Take Care of yourself!",
      icon: Heart,
      href: "#"
    },
    {
      title: "Know Your Worth", 
      description: "A book that Can Help You Change",
      icon: User,
      href: "#"
    },
    {
      title: "Spotify Profile",
      description: "Some Playlists (Not For All)",
      icon: Music,
      href: "https://spotify.com"
    },
    {
      title: "For Movies & Webseries",
      description: "Join & Request (Everyone Can Join)",
      icon: Send,
      href: "#"
    },
    {
      title: "Link Shortener",
      description: "Create, Share & Earn Money",
      icon: Link2,
      href: "#"
    },
    {
      title: "YouTube Channels",
      description: "Community",
      icon: Youtube,
      href: "https://youtube.com"
    },
    {
      title: "Make Your Own Page",
      description: "Click and Sign up to get $20 credit!",
      icon: Sparkles,
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Mail, href: "mailto:hello@shubham.com" },
    { icon: Instagram, href: "https://instagram.com" },
    { icon: Twitter, href: "https://twitter.com" },
    { icon: MessageCircle, href: "#" },
    { icon: Send, href: "#" }
  ];

  return (
    <div className="min-h-screen bg-hero bg-cover bg-center bg-no-repeat bg-fixed relative">
      
      {/* Subscribe button */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10">
        <button className="px-6 py-2 bg-white/20 backdrop-blur-none md:backdrop-blur-sm border border-white/30 rounded-full text-text-white font-medium text-sm hover:bg-white/30 transition-all duration-300">
          Subscribe
        </button>
      </div>

      {/* Share button */}
      <div className="absolute top-6 right-6 z-10">
        <button className="w-10 h-10 bg-white/20 backdrop-blur-none md:backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-text-white hover:bg-white/30 transition-all duration-300">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
          </svg>
        </button>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20" style={{ contentVisibility: 'auto' }}>
        <div className="w-full max-w-md space-y-8">
          
          {/* Profile section */}
          <div className="text-center space-y-4 motion-safe:animate-fade-in motion-reduce:animate-none">
            <div className="relative inline-block motion-safe:animate-float motion-reduce:animate-none" style={{ willChange: 'transform' }}>
              <img 
                src={avatarImage} 
                alt="Shubham profile photo"
                width={96}
                height={96}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-24 h-24 rounded-full border-4 border-white/30 shadow-xl"
              />
              {/* Online status indicator */}
              <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-text-white mb-1">
                Shubham :)
              </h1>
              <p className="text-text-white-secondary text-sm">
                {links.length} links
              </p>
            </div>

            {/* Social icons */}
            <div className="flex justify-center gap-3">
              {socialLinks.map((social, index) => (
                <SocialIcon 
                  key={index}
                  icon={social.icon}
                  href={social.href}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>

          {/* Links section */}
          <div className="space-y-4">
            {links.map((link, index) => (
              <LinkCard
                key={index}
                title={link.title}
                description={link.description}
                icon={link.icon}
                href={link.href}
                delay={(index + 1) * 150}
              />
            ))}
          </div>

        </div>
      </div>

      {/* Footer - Nexus Shubhu branding */}
      <div className="relative z-10 pb-2 pt-16">
        <div className="text-center motion-safe:animate-fade-in motion-reduce:animate-none" style={{ animationDelay: '1000ms' }}>
          <div className="flex items-center justify-center gap-2 text-text-white-secondary">
            <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium flex items-center justify-center gap-1">
              Design with{" "}
              <Heart className="w-4 h-4 text-red-400 fill-red-400 animate-pulse" />
              {" "}by{" "}
              <a 
                href="https://shubhlinks.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-text-white transition-colors duration-300"
              >
                Nexus_Shubhu
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom right CTA */}
      <div className="fixed bottom-6 right-6 z-20">
        <button className="bg-white/20 backdrop-blur-none md:backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-text-white text-sm font-medium hover:bg-white/30 transition-all duration-300 flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          Try for free!
        </button>
      </div>

    </div>
  );
};

export default Index;
