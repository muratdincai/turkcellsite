import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Testimonials } from '@/components/Testimonials/Testimonials';

// Mock LanguageContext
vi.mock('@/contexts/LanguageContext', () => ({
    useLanguage: () => ({
        t: {
            testimonials: {
                heading: 'Kullanıcı Yorumları',
                subtitle: 'Geri bildirimler anonimleştirilmiş ve kişisel verilerden arındırılmıştır.',
                feedback: [
                    {
                        quote: 'Canlı terminal ve adım adım ilerleyen yol haritası sayesinde sistemin ne yaptığını anlık takip edebildim.',
                        role: 'Operasyon Uzmanı (Anonim)',
                    },
                    {
                        quote: 'Sohbet ederken aynı anda PDFi sağ panelde doğrulayabilmek büyük fark yaratıyor.',
                        role: 'Analist (Anonim)',
                    },
                ],
            },
        },
        language: 'tr',
    }),
}));

describe('Testimonials Component', () => {
    it('renders without unescaped entity issues', () => {
        const { container } = render(<Testimonials />);

        // Check that quoteMark elements exist (use CSS module class pattern)
        const quoteMarks = container.querySelectorAll('[class*="quoteMark"]');
        expect(quoteMarks.length).toBeGreaterThan(0);

        // Verify content renders (entities should be decoded in DOM)
        expect(screen.getByText('Kullanıcı Yorumları')).toBeInTheDocument();
    });

    it('renders all testimonial cards', () => {
        const { container } = render(<Testimonials />);
        const cards = container.querySelectorAll('[class*="card"]');
        expect(cards.length).toBe(2);
    });
});
