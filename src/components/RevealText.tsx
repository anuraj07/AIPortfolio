import React from 'react';
import { motion } from 'framer-motion';

interface RevealTextProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    style?: React.CSSProperties;
}

export const RevealText = ({ children, delay = 0, className, style }: RevealTextProps) => {
    return (
        <div style={{ overflow: 'hidden', ...style }} className={className}>
            <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
            >
                {children}
            </motion.div>
        </div>
    );
};
