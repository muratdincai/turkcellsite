'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/Card/Card';
import { SectionContainer } from '@/components/SectionContainer/SectionContainer';
import { ProjectResources } from '@/components/ProjectResources/ProjectResources';
import styles from './Project.module.css';

export function Project() {
    const { t } = useLanguage();

    const cards = [
        {
            title: t.project.cards.ai.title,
            description: t.project.cards.ai.description,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            ),
        },
        {
            title: t.project.cards.realtime.title,
            description: t.project.cards.realtime.description,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
            ),
        },
        {
            title: t.project.cards.scalable.title,
            description: t.project.cards.scalable.description,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="20" x2="12" y2="10" />
                    <line x1="18" y1="20" x2="18" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="16" />
                </svg>
            ),
        },
    ];

    return (
        <SectionContainer id="project">
            <div className={styles.header}>
                <h2 className={styles.heading}>{t.project.heading}</h2>
                <p className={styles.description}>{t.project.description}</p>
            </div>

            <div className={styles.cardsGrid}>
                {cards.map((card, index) => (
                    <Card key={index} className={styles.card}>
                        <div className={styles.icon}>{card.icon}</div>
                        <h3 className={styles.cardTitle}>{card.title}</h3>
                        <p className={styles.cardDescription}>{card.description}</p>
                    </Card>
                ))}
            </div>

            <ProjectResources />
        </SectionContainer>
    );
}
