'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionContainer } from '@/components/SectionContainer/SectionContainer';
import styles from './Vision.module.css';

export function Vision() {
    const { t } = useLanguage();
    const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
    const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

    const steps = [
        {
            number: '01',
            title: t.vision.steps.step1.title,
            description: t.vision.steps.step1.description,
        },
        {
            number: '02',
            title: t.vision.steps.step2.title,
            description: t.vision.steps.step2.description,
        },
        {
            number: '03',
            title: t.vision.steps.step3.title,
            description: t.vision.steps.step3.description,
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute('data-index'));
                        setVisibleSteps((prev) => [...new Set([...prev, index])]);
                    }
                });
            },
            { threshold: 0.2 }
        );

        stepRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <SectionContainer id="vision">
            <h2 className={styles.heading}>{t.vision.heading}</h2>

            <div className={styles.timeline}>
                {steps.map((step, index) => (
                    <div
                        key={index}
                        ref={(el) => { stepRefs.current[index] = el; }}
                        data-index={index}
                        className={`${styles.timelineItem} ${visibleSteps.includes(index) ? styles.visible : ''
                            }`}
                    >
                        <div className={styles.timelineNode}>
                            <div className={styles.nodeCircle}>
                                <span>{step.number}</span>
                            </div>
                            {index < steps.length - 1 && <div className={styles.timelineLine} />}
                        </div>
                        <div className={styles.timelineContent}>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDescription}>{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </SectionContainer>
    );
}
