'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/Button/Button';
import { SectionContainer } from '@/components/SectionContainer/SectionContainer';
import styles from './Demo.module.css';

export function Demo() {
    const { t } = useLanguage();

    const handleOpenDemo = () => {
        window.open('https://drive.google.com/file/d/1DCWv69H-HB_5WPRYUl7nWUJtepNoX-Wo/view', '_blank');
    };

    return (
        <SectionContainer id="demo">
            <div className={styles.header}>
                <h2 className={styles.heading}>{t.demo.heading}</h2>
                <p className={styles.description}>{t.demo.description}</p>
            </div>

            <div className={styles.demoContainer}>
                <div
                    className={styles.videoPreview}
                    onClick={handleOpenDemo}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleOpenDemo()}
                    aria-label="Turk3cell Demo Video"
                >
                    <img
                        src="/ss/1.jpeg"
                        alt="Turk3cell Demo Preview"
                        className={styles.coverImage}
                    />
                    <div className={styles.playOverlay}>
                        <div className={styles.playButton}>
                            <svg viewBox="0 0 68 68" fill="none">
                                <circle cx="34" cy="34" r="34" fill="rgba(255, 194, 14, 0.9)" />
                                <path d="M27 22L47 34L27 46V22Z" fill="var(--color-primary-blue)" />
                            </svg>
                        </div>
                    </div>
                </div>

                <Button variant="primary" onClick={handleOpenDemo} className={styles.ctaButton}>
                    {t.demo.ctaButton}
                </Button>
            </div>
        </SectionContainer>
    );
}
