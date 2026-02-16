import React, { HTMLAttributes } from 'react';
import styles from './SectionContainer.module.css';

interface SectionContainerProps extends HTMLAttributes<HTMLElement> {
    id?: string;
    children: React.ReactNode;
    className?: string;
}

export function SectionContainer({
    id,
    children,
    className = '',
    ...props
}: SectionContainerProps) {
    return (
        <section
            id={id}
            className={`${styles.section} ${className}`}
            {...props}
        >
            <div className={styles.container}>
                {children}
            </div>
        </section>
    );
}
