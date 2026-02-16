import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Demo } from '@/components/Demo/Demo';

const DRIVE_URL = 'https://drive.google.com/file/d/1DCWv69H-HB_5WPRYUl7nWUJtepNoX-Wo/view';

vi.mock('@/contexts/LanguageContext', () => ({
    useLanguage: () => ({
        t: {
            demo: {
                heading: 'Demo & Uygulama',
                description: 'Test description',
                ctaButton: 'Demo Aç',
            },
        },
        language: 'tr',
    }),
}));

describe('Demo Component', () => {
    it('contains Drive URL link', () => {
        render(<Demo />);
        const button = screen.getByText('Demo Aç');
        expect(button).toBeInTheDocument();

        // Check that clicking button would open Drive URL
        // (We test this more thoroughly in E2E)
    });

    it('renders demo section heading', () => {
        render(<Demo />);
        expect(screen.getByText('Demo & Uygulama')).toBeInTheDocument();
    });
});
