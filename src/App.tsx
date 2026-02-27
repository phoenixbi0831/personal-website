import { useMemo, useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { ExpertiseSection, expertiseAreas } from './components/ExpertiseSection';
import { AchievementsSection } from './components/AchievementsSection';
import { CoursesSection } from './components/CoursesSection';
import { ContactSection } from './components/ContactSection';

type ThemeKey = keyof typeof expertiseAreas;

export default function App() {
  const [activeTheme, setActiveTheme] = useState<ThemeKey>('cdp');

  const themeColors = useMemo(() => {
    const area = expertiseAreas[activeTheme];
    return {
      primary: area.color,
      soft: area.softColor
    };
  }, [activeTheme]);

  return (
    <div
      className="app-root"
      style={
        {
          // 使用 CSS 變數控制整站色系
          '--color-primary': themeColors.primary,
          '--color-primary-soft': themeColors.soft
        } as React.CSSProperties
      }
    >
      <header className="site-header">
        <div className="logo-mark">PT</div>
        <nav className="site-nav">
          <a href="#hero">關於我</a>
          <a href="#expertise">擅長領域</a>
          <a href="#achievements">個人成就</a>
          <a href="#courses">課程資訊</a>
          <a href="#contact">聯絡洽詢</a>
        </nav>
      </header>

      <main>
        <HeroSection />
        <ExpertiseSection activeKey={activeTheme} onChangeActiveKey={setActiveTheme} />
        <AchievementsSection />
        <CoursesSection />
        <ContactSection />
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Phoenix Tsai</span>
        <span className="footer-note">數據驅動成長 · CDP · EC &amp; O2O · 社群商務</span>
      </footer>
    </div>
  );
}

