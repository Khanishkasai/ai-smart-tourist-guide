import React from 'react';
import { Home, Globe, Bookmark, User, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface SidebarNavbarProps {
  onBack: () => void;
  activeTab?: string;
  onChangeTab?: (tab: string) => void;
}

export const SidebarNavbar: React.FC<SidebarNavbarProps> = ({
  onBack,
  activeTab = 'home',
  onChangeTab,
}) => {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'globe', icon: Globe, label: 'Globe' },
    { id: 'bookmark', icon: Bookmark, label: 'Bookmarks' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed left-6 top-6 bottom-6 flex flex-col items-center gap-6 z-50 pointer-events-auto select-none">
      {/* Top Back Arrow Action */}
      <motion.button
        whileHover={{ scale: 1.08, x: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={onBack}
        className="w-11 h-11 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-glass-low"
        aria-label="Go Back"
      >
        <ArrowLeft className="w-5 h-5" />
      </motion.button>

      {/* Floating Vertical Navigation Glass Pill */}
      <div className="flex-grow flex flex-col items-center justify-start py-5 px-2 rounded-2xl bg-[#0b0c10]/60 border border-white/10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] gap-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => onChangeTab?.(tab.id)}
              className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                isActive
                  ? 'bg-blue-500/20 text-blue-300 border border-blue-400/40 shadow-[0_0_15px_rgba(96,165,250,0.25)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'
              }`}
              title={tab.label}
              aria-label={tab.label}
            >
              <Icon className="w-5 h-5" />
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
