'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/Card/Card';
import styles from './Testimonials.module.css';

export function Testimonials() {
    const { t } = useLanguage();

    return (
        <section className={styles.testimonials}>
            <div className={styles.container}>
                <h2 className={styles.heading}>{t.testimonials.heading}</h2>
                <p className={styles.subtitle}>{t.testimonials.subtitle}</p>

                <div className={styles.grid}>
                    {t.testimonials.feedback.map((item, index) => (
                        <Card key={index} hover className={styles.card}>
                            <div className={styles.quoteMark}>"</div>
                            <p className={styles.quote}>{item.quote}</p>
                            <div className={styles.author}>
                                <div className={styles.avatar}>
                                    <span>{String.fromCharCode(65 + index)}.{String.fromCharCode(75 + index)}</span>
                                </div>
                                <p className={styles.role}>{item.role}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
