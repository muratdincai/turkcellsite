import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Team } from '@/components/Team/Team';

// Mock teamData - define inline in factory to avoid hoisting issues
vi.mock('@/content/translations', () => ({
    teamData: [
        {
            name: 'Murat Dinç',
            role_tr: 'Yapay Zeka Mühendisi',
            role_en: 'AI Engineer',
            bio_tr: 'Test bio TR',
            bio_en: 'Test bio EN',
            github_url: 'https://github.com/test',
            linkedin_url: 'https://linkedin.com/in/test',
            photo: '/murat/photo.jpg',
        },
        {
            name: 'Miray İncibaşaran',
            role_tr: 'İstatistik Mühendisi',
            role_en: 'Statistics Engineer',
            bio_tr: 'Test bio TR',
            bio_en: 'Test bio EN',
            github_url: 'https://github.com/test',
            linkedin_url: 'https://linkedin.com/in/test',
            photo: '/miray/photo.jpg',
        },
        {
            name: 'Muhammed Ekinci',
            role_tr: 'Yapay Zeka Mühendisi',
            role_en: 'AI Engineer',
            bio_tr: 'Test bio TR',
            bio_en: 'Test bio EN',
            github_url: 'https://github.com/test',
            linkedin_url: 'https://linkedin.com/in/test',
            photo: '/muhammed/photo.jpg',
        },
    ],
}));

vi.mock('@/contexts/LanguageContext', () => ({
    useLanguage: () => ({
        t: { team: { heading: 'Ekibimiz' } },
        language: 'tr',
    }),
}));

describe('Team Component', () => {
    it('renders 3 team member cards', () => {
        const { container } = render(<Team />);
        const cards = container.querySelectorAll('[class*="card"]');
        expect(cards.length).toBe(3);
    });

    it('displays correct Turkish role for Miray', () => {
        render(<Team />);
        expect(screen.getByText('İstatistik Mühendisi')).toBeInTheDocument();
    });

    it('displays correct Turkish role for Muhammed', () => {
        render(<Team />);
        const roles = screen.getAllByText('Yapay Zeka Mühendisi');
        // Should be 2 (Murat and Muhammed)
        expect(roles.length).toBe(2);
    });

    it('displays all team member names', () => {
        render(<Team />);
        expect(screen.getByText('Murat Dinç')).toBeInTheDocument();
        expect(screen.getByText('Miray İncibaşaran')).toBeInTheDocument();
        expect(screen.getByText('Muhammed Ekinci')).toBeInTheDocument();
    });
});
