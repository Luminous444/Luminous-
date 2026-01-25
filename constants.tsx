
import { PortfolioItem, ExperienceItem, AchievementItem, SkillItem } from './types';

export interface ExtendedSkillItem extends SkillItem {
  iconUrl: string;
  color: string;
}

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: '1',
    title: { id: 'poster event sekolah', en: 'school event poster' },
    category: { id: 'poster', en: 'poster' },
    description: { 
      id: 'desain poster kegiatan sekolah dengan konsep modern dan warna berani untuk menarik perhatian siswa.',
      en: 'modern school event poster design with bold colors to capture student attention.' 
    },
    image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bde7?q=80&w=800&auto=format&fit=crop',
    tags: ['affinity designer', 'layout']
  },
  {
    id: '2',
    title: { id: 'minimalist monogram logo', en: 'minimalist monogram logo' },
    category: { id: 'logo', en: 'logo' },
    description: { 
      id: 'eksplorasi logo monogram menggunakan bentuk geometris yang bersih dan modern.',
      en: 'monogram logo exploration using clean and modern geometric shapes.' 
    },
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop',
    tags: ['adobe illustrator', 'identity']
  },
  {
    id: '3',
    title: { id: 'motion graphic intro', en: 'motion graphic intro' },
    category: { id: 'motion', en: 'motion' },
    description: { 
      id: 'animasi pembuka menggunakan after effects dengan transisi dinamis.',
      en: 'dynamic intro animation created using after effects with fluid transitions.' 
    },
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
    tags: ['after effects', 'animation']
  },
  {
    id: '4',
    title: { id: 'branding concept x', en: 'branding concept x' },
    category: { id: 'branding', en: 'branding' },
    description: { 
      id: 'pengembangan identitas visual lengkap mulai dari logo hingga aset pendukung media sosial.',
      en: 'complete visual identity development from logo to supporting social media assets.' 
    },
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
    tags: ['photoshop', 'branding']
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-2',
    role: { id: 'author / illustrator', en: 'author / illustrator' },
    company: 'lomba komik digital fls3n',
    period: '2025',
    description: {
      id: [
        'membuat komik digital orisinal sebagai penulis dan ilustrator',
        'mengembangkan alur cerita, desain karakter, dan narasi visual',
        'mewakili sekolah dalam kompetisi komik digital fls3n'
      ],
      en: [
        'created original digital comic as author and illustrator',
        'developed storyline, character design, and visual narrative',
        'represented school in fls3n digital comic competition'
      ]
    }
  },
  {
    id: 'exp-1',
    role: { id: 'siswa desain komunikasi visual', en: 'student of visual communication design' },
    company: 'smk yadika bandar lampung',
    period: '2024 – present',
    description: {
      id: [
        'mempelajari dasar desain grafis, tipografi, dan teori warna',
        'mengerjakan proyek desain sekolah dan identitas visual',
        'mengoperasikan software desain standar industri kreatif'
      ],
      en: [
        'learning graphic design fundamentals, typography, and color theory',
        'working on school design projects and visual identities',
        'operating industry-standard creative design software'
      ]
    }
  }
];

export const ACHIEVEMENT_DATA: AchievementItem[] = [
  {
    id: 'ach-fls3n',
    title: { id: 'juara 1 – lomba komik digital fls3n', en: '1st place – fls3n digital comic competition' },
    subtitle: { id: 'tingkat kota / kabupaten — 2025', en: 'city / regency level — 2025' },
    icon: 'trophy'
  }
];

export const SKILL_DATA: ExtendedSkillItem[] = [
  { 
    name: 'affinity designer', 
    level: 90, 
    iconUrl: 'https://cdn.simpleicons.org/affinitydesigner/1B72BA',
    color: 'from-blue-600 to-blue-400'
  },
  { 
    name: 'adobe illustrator', 
    level: 85, 
    iconUrl: 'https://cdn.simpleicons.org/adobeillustrator/FF9A00',
    color: 'from-orange-600 to-yellow-500'
  },
  { 
    name: 'adobe photoshop', 
    level: 80, 
    iconUrl: 'https://cdn.simpleicons.org/adobephotoshop/31A8FF',
    color: 'from-blue-500 to-cyan-400'
  },
  { 
    name: 'adobe after effects', 
    level: 75, 
    iconUrl: 'https://cdn.simpleicons.org/adobeaftereffects/9999FF',
    color: 'from-purple-600 to-indigo-500'
  },
  { 
    name: 'coreldraw', 
    level: 85, 
    iconUrl: 'https://cdn.simpleicons.org/coreldraw/00A444',
    color: 'from-green-600 to-emerald-400'
  }
];
