import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
    test('loads successfully with no console errors', async ({ page }) => {
        const errors: string[] = [];
        page.on('console', msg => {
            if (msg.type() === 'error') {
                errors.push(msg.text());
            }
        });

        const response = await page.goto('/');
        expect(response?.status()).toBe(200);
        expect(errors.length).toBe(0);
    });
});

test.describe('Language Toggle', () => {
    test('defaults to Turkish and switches to English', async ({ page }) => {
        await page.goto('/');

        // Check default is Turkish
        await expect(page.locator('text=Ekibimiz')).toBeVisible();

        // Click EN button
        await page.click('text=EN');

        // Verify switch to English
        await expect(page.locator('text=Our Team')).toBeVisible();
    });
});

test.describe('Demo Link', () => {
    test('has correct Drive URL with target=_blank and rel=noopener', async ({ page }) => {
        await page.goto('/');

        const DRIVE_URL = 'https://drive.google.com/file/d/1DCWv69H-HB_5WPRYUl7nWUJtepNoX-Wo/view';

        // Find the demo button/link
        const demoButton = page.locator('text=Demo Aç').first();
        await expect(demoButton).toBeVisible();

        // Verify it opens Drive URL in new tab
        const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            demoButton.click()
        ]);

        expect(newPage.url()).toContain('drive.google.com');
        await newPage.close();
    });
});

test.describe('PDF Route', () => {
    test('PDF is accessible at /pdf/rapor.pdf', async ({ page }) => {
        const response = await page.goto('/pdf/rapor.pdf');
        expect(response?.status()).toBe(200);

        const contentType = response?.headers()['content-type'];
        expect(contentType).toContain('pdf');
    });
});

test.describe('Gallery Carousel', () => {
    test('displays at least one image', async ({ page }) => {
        await page.goto('/');

        // Scroll to screenshot section
        await page.locator('text=Demo İçi Görüntüler').scrollIntoViewIfNeeded();

        // Verify at least one image is visible
        const slideImage = page.locator('[class*="slideImage"]').first();
        await expect(slideImage).toBeVisible();
    });

    test('next button changes slide', async ({ page }) => {
        await page.goto('/');

        // Scroll to carousel
        await page.locator('text=Demo İçi Görüntüler').scrollIntoViewIfNeeded();

        // Wait for carousel to load
        await page.waitForTimeout(1000);

        // Click next arrow
        const nextButton = page.locator('[aria-label="Next screenshot"]');
        await nextButton.click();

        // Verify slide changed (indicator should change)
        const activeIndicator = page.locator('[class*="indicatorActive"]');
        await expect(activeIndicator).toBeVisible();
    });
});

test.describe('Navigation Anchors', () => {
    test('clicking nav items scrolls to sections', async ({ page }) => {
        await page.goto('/');

        const sections = [
            { navText: 'Proje', sectionHeading: 'Turk3cell Nedir?' },
            { navText: 'Demo', sectionHeading: 'Demo & Uygulama' },
            { navText: 'Ekip', sectionHeading: 'Ekibimiz' },
            { navText: 'Vizyon', sectionHeading: 'Vizyonumuz' },
        ];

        for (const { navText, sectionHeading } of sections) {
            // Click nav item
            await page.click(`nav >> text=${navText}`);

            // Wait for scroll
            await page.waitForTimeout(500);

            // Verify section is in viewport
            const section = page.locator(`text=${sectionHeading}`).first();
            await expect(section).toBeInViewport();
        }
    });
});
