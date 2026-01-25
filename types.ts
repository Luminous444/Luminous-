
export type Language = 'id' | 'en';

export interface PortfolioItem {
  id: string;
  title: Record<Language, string>;
  category: Record<Language, string>; // Changed to Record for translation
  description: Record<Language, string>;
  image: string;
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  role: Record<Language, string>;
  company: string;
  period: string;
  description: Record<Language, string[]>;
}

export interface AchievementItem {
  id: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  icon: string;
}

export interface SkillItem {
  name: string;
  level: number;
  icon?: string;
}
