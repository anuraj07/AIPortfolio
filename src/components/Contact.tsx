import React from 'react';
import { motion } from 'framer-motion';
import { RevealText } from './RevealText';

export const Contact = () => {
    return (
        <section>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '8rem' }}>
                <div>
                    <RevealText>
                        <h2 className="text-h2">Location</h2>
                    </RevealText>
                    <RevealText delay={0.1}>
                        <p className="text-body">New York, NY<br />United States</p>
                    </RevealText>
                </div>
                <div>
                    <RevealText delay={0.2}>
                        <h2 className="text-h2">Contact details</h2>
                    </RevealText>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        <RevealText delay={0.3}>
                            <a href="mailto:hello@example.com" style={{ textDecoration: 'underline', textUnderlineOffset: '4px', color: 'var(--text-main)' }}>hello@civio.design</a>
                        </RevealText>
                        <RevealText delay={0.4}>
                            <a href="tel:+1234567890" style={{ color: 'var(--text-secondary)' }}>+1 (555) 123-4567</a>
                        </RevealText>
                    </div>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '8rem', overflow: 'hidden' }}>
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <a href="#" className="btn-primary" style={{ fontSize: '1.2rem', padding: '24px 48px', borderRadius: '12px' }}>
                        Download PDF Resume
                    </a>
                </motion.div>
            </div>

            <footer
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid var(--border-color)',
                    paddingTop: '3rem',
                    paddingBottom: '3rem',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)'
                }}
            >
                <RevealText>
                    <div>© 2025 studio kismo</div>
                </RevealText>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    {['Instagram', 'LinkedIn', 'Twitter'].map((social, i) => (
                        <RevealText key={social} delay={0.1 * i} style={{ display: 'inline-block' }}>
                            <a href="#" style={{ transition: 'color 0.2s', color: 'var(--text-secondary)' }}>{social}</a>
                        </RevealText>
                    ))}
                </div>
            </footer>
        </section>
    );
};
