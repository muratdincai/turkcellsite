'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './Screenshots.module.css';

const IMAGES = ['/ss/1.jpeg', '/ss/2.jpeg', '/ss/3.jpeg'];
const AUTO_SLIDE_INTERVAL = 4500; // 4.5 seconds

export function Screenshots() {
    const { t } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, []);

    const goToPrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
    }, []);

    const goToSlide = useCallback((index: number) => {
        setCurrentIndex(index);
    }, []);

    // Auto-slide functionality
    useEffect(() => {
        if (!isPaused) {
            intervalRef.current = setInterval(goToNext, AUTO_SLIDE_INTERVAL);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isPaused, goToNext]);

    // Touch/swipe handlers for mobile
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            goToNext();
        } else if (isRightSwipe) {
            goToPrev();
        }

        setTouchStart(0);
        setTouchEnd(0);
    };

    return (
        <section className={styles.screenshots}>
            <div className={styles.container}>
                <h2 className={styles.heading}>{t.screenshots.heading}</h2>

                <div
                    className={styles.carouselContainer}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        className={styles.carouselTrack}
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {IMAGES.map((img, index) => (
                            <div key={index} className={styles.carouselSlide}>
                                <img
                                    src={img}
                                    alt={`Demo screenshot ${index + 1}`}
                                    className={styles.slideImage}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        className={`${styles.arrow} ${styles.arrowLeft}`}
                        onClick={goToPrev}
                        aria-label="Previous screenshot"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>

                    <button
                        className={`${styles.arrow} ${styles.arrowRight}`}
                        onClick={goToNext}
                        aria-label="Next screenshot"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>

                    {/* Dot Indicators */}
                    <div className={styles.indicators}>
                        {IMAGES.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.indicator} ${index === currentIndex ? styles.indicatorActive : ''
                                    }`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to screenshot ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
