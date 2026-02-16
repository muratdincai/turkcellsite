'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './ProjectResources.module.css';

export function ProjectResources() {
    const { language } = useLanguage();

    const resources = [
        {
            titleTr: 'Demo ve Veri Klasörü',
            titleEn: 'Demo & Data Folder',
            url: 'https://drive.google.com/drive/folders/19hj1S_Qa7eJNtf_VzHpaKeYzFILyUYWh?usp=share_link',
        },
        {
            titleTr: 'Teknik Proje Raporu (PDF)',
            titleEn: 'Technical Project Report (PDF)',
            url: '/pdf/rapor.pdf',
        },
    ];

    return (
        <div className={styles.resourcesContainer}>
            <h3 className={styles.resourcesHeading}>
                {language === 'tr' ? 'Proje Kaynakları' : 'Project Resources'}
            </h3>
            <div className={styles.buttonGroup}>
                {resources.map((resource, index) => (
                    <a
                        key={index}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.resourceButton}
                    >
                        {language === 'tr' ? resource.titleTr : resource.titleEn}
                    </a>
                ))}
            </div>
        </div>
    );
}
