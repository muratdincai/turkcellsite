import React, { HTMLAttributes } from 'react';
import styles from './Card.module.css';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    hover?: boolean;
}

export function Card({ children, hover = true, className = '', ...props }: CardProps) {
    return (
        <div
            className={`${styles.card} ${hover ? styles.hover : ''} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}
