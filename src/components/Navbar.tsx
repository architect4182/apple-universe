import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';

export interface NavbarProps {
  theme?: 'dark' | 'light';
  activePage?: 'mac' | 'ipad' | 'iphone' | 'watch' | 'vision' | 'airpods' | 'tv' | 'entertainment' | 'accessories';
}

export const Navbar: React.FC<NavbarProps> = ({ theme = 'dark', activePage }) => {
  const isDark = theme === 'dark';
  
  // Theme-based classes
  const textClass = isDark ? 'text-white' : 'text-zinc-900';
  const mutedTextClass = isDark ? 'text-white/30' : 'text-zinc-900/30';
  const logoInvertClass = isDark ? '' : 'invert';
  
  // Helper for active link styling
  const getLinkClass = (pageName: string) => {
    const isActive = activePage === pageName;
    if (isActive) {
      return `hover:opacity-100 transition-opacity ${isDark ? 'text-white drop-shadow-md' : 'text-zinc-900/100 drop-shadow-md'}`;
    }
    return 'hover:opacity-100 transition-opacity';
  };

  return (
    <nav className={`absolute top-0 left-0 right-0 z-50 px-8 py-4 flex items-center justify-between ${textClass} text-xs`}>
      <div className="flex items-center gap-8 w-full">
        <div className="flex items-center gap-4 cursor-pointer group">
          <img
            src="/images/apple.svg"
            alt="Apple"
            className={`w-4 h-4 opacity-80 group-hover:opacity-100 transition-opacity ${logoInvertClass}`}
          />
          <span className={`${mutedTextClass} font-light text-xs group-hover:text-current transition-colors`}>|</span>
          <span className={`opacity-70 font-semibold tracking-widest text-[11px] uppercase group-hover:opacity-100 transition-colors`}>Chai's Studio</span>
        </div>
        <div className="hidden md:flex flex-1 justify-center gap-8 font-medium tracking-wide opacity-80">
          <a href="#" className="hover:opacity-100 transition-opacity">Store</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Mac</a>
          <a href="#" className="hover:opacity-100 transition-opacity">iPad</a>
          <Link to="/iphone" className={getLinkClass('iphone')}>iPhone</Link>
          <a href="#" className="hover:opacity-100 transition-opacity">Watch</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Vision</a>
          <Link to="/" className={getLinkClass('airpods')}>AirPods</Link>
          <a href="#" className="hover:opacity-100 transition-opacity">TV & Home</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Entertainment</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Accessories</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Support</a>
        </div>
        <div className="flex items-center gap-6 opacity-80">
          <Search className="w-4 h-4 cursor-pointer hover:opacity-100 transition-opacity" />
          <ShoppingBag className="w-4 h-4 cursor-pointer hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </nav>
  );
};
