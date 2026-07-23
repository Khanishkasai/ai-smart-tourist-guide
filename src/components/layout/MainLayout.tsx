import React from 'react';
import { Navbar } from './Navbar';
import { HeroBackground } from '../hero/HeroBackground';
import { EnvironmentalTheme } from '@/types';

interface MainLayoutProps {
  children: React.ReactNode;
  theme?: EnvironmentalTheme;
  onReset?: () => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  theme = 'default',
  onReset,
}) => {
  return (
    <div className="relative min-h-screen bg-[#08090C] text-[#F3F4F6] selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden font-sans">
      {/* Background Atmospheric Lighting & Mountain Shader Layer */}
      {/* <HeroBackground theme={theme} /> */}

      {/* Fixed Top Glass Navigation */}
      <Navbar onReset={onReset} />

      {/* Main Viewport Content Slot */}
      <main className="relative z-10">{children}</main>

      {/* Minimal Footer Signature */}
      <footer className="relative z-10 border-t border-white/5 py-6 px-6 text-center text-xs font-mono text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>SPATIAL TRAVEL PLATFORM • CRAFTED WITH AI INTELLIGENCE</div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>TERMS</span>
            <span>PRIVACY</span>
            <span className="text-blue-400">SPATIAL V1.0</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
