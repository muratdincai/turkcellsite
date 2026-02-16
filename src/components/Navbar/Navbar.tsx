'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './Navbar.module.css';

export function Navbar() {
    const { language, setLanguage, t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const navItems = [
        { key: 'home', id: 'home' },
        { key: 'project', id: 'project' },
        { key: 'demo', id: 'demo' },
        { key: 'team', id: 'team' },
        { key: 'vision', id: 'vision' },
        { key: 'contact', id: 'contact' },
    ];

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <div className={styles.logo} onClick={() => scrollToSection('home')}>
                    <Image
                        src="/logo/Turk3Cell.png"
                        alt="Turk3cell Logo"
                        width={120}
                        height={40}
                        priority
                        style={{ objectFit: 'contain' }}
                    />
                </div>

                {/* Desktop navigation */}
                <div className={styles.desktopNav}>
                    <ul className={styles.navList}>
                        {navItems.map((item) => (
                            <li key={item.key}>
                                <button
                                    onClick={() => scrollToSection(item.id)}
                                    className={styles.navLink}
                                >
                                    {t.navbar[item.key as keyof typeof t.navbar]}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.languageToggle}>
                        <button
                            onClick={() => setLanguage('tr')}
                            className={`${styles.langButton} ${language === 'tr' ? styles.active : ''}`}
                        >
                            TR
                        </button>
                        <span className={styles.divider}>|</span>
                        <button
                            onClick={() => setLanguage('en')}
                            className={`${styles.langButton} ${language === 'en' ? styles.active : ''}`}
                        >
                            EN
                        </button>
                    </div>
                </div>

                {/* Mobile hamburger */}
                <button
                    className={styles.hamburger}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={isMobileMenuOpen ? styles.open : ''}></span>
                    <span className={isMobileMenuOpen ? styles.open : ''}></span>
                    <span className={isMobileMenuOpen ? styles.open : ''}></span>
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <ul className={styles.mobileNavList}>
                    {navItems.map((item) => (
                        <li key={item.key}>
                            <button
                                onClick={() => scrollToSection(item.id)}
                                className={styles.mobileNavLink}
                            >
                                {t.navbar[item.key as keyof typeof t.navbar]}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className={styles.mobileLangToggle}>
                    <button
                        onClick={() => { setLanguage('tr'); setIsMobileMenuOpen(false); }}
                        className={`${styles.langButton} ${language === 'tr' ? styles.active : ''}`}
                    >
                        TR
                    </button>
                    <span className={styles.divider}>|</span>
                    <button
                        onClick={() => { setLanguage('en'); setIsMobileMenuOpen(false); }}
                        className={`${styles.langButton} ${language === 'en' ? styles.active : ''}`}
                    >
                        EN
                    </button>
                </div>
            </div>
        </nav>
    );
}
