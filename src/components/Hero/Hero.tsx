'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/Button/Button';
import styles from './Hero.module.css';

export function Hero() {
    const { t } = useLanguage();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>{t.hero.title}</h1>
                    <p className={styles.subtitle}>{t.hero.subtitle}</p>
                    <div className={styles.cta}>
                        <Button variant="primary" onClick={() => scrollToSection('project')}>
                            {t.hero.ctaPrimary}
                        </Button>
                        <Button variant="secondary" onClick={() => scrollToSection('demo')}>
                            {t.hero.ctaSecondary}
                        </Button>
                    </div>
                </div>
                <div className={styles.visual}>
                    <div className={styles.networkAnimation}>
                        <svg viewBox="0 0 500 500" className={styles.svg}>
                            {/* Network nodes */}
                            <circle cx="100" cy="100" r="4" className={styles.node} />
                            <circle cx="250" cy="80" r="4" className={styles.node} />
                            <circle cx="400" cy="120" r="4" className={styles.node} />
                            <circle cx="150" cy="250" r="4" className={styles.node} />
                            <circle cx="350" cy="250" r="4" className={styles.node} />
                            <circle cx="100" cy="400" r="4" className={styles.node} />
                            <circle cx="400" cy="400" r="4" className={styles.node} />
                            <circle cx="250" cy="350" r="4" className={styles.node} />

                            {/* Connecting lines */}
                            <line x1="100" y1="100" x2="250" y2="80" className={styles.line} />
                            <line x1="250" y1="80" x2="400" y2="120" className={styles.line} />
                            <line x1="100" y1="100" x2="150" y2="250" className={styles.line} />
                            <line x1="400" y1="120" x2="350" y2="250" className={styles.line} />
                            <line x1="150" y1="250" x2="350" y2="250" className={styles.line} />
                            <line x1="150" y1="250" x2="100" y2="400" className={styles.line} />
                            <line x1="350" y1="250" x2="400" y2="400" className={styles.line} />
                            <line x1="100" y1="400" x2="250" y2="350" className={styles.line} />
                            <line x1="250" y1="350" x2="400" y2="400" className={styles.line} />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
