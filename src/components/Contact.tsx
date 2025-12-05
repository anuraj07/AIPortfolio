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
                        <p className="text-body">New York City<br />United States</p>
                    </RevealText>
                </div>
                <div>
                    <RevealText delay={0.2}>
                        <h2 className="text-h2">Contact details</h2>
                    </RevealText>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        <RevealText delay={0.3}>
                            <a href="mailto:hello@jordanreese.com" style={{ textDecoration: 'underline', textUnderlineOffset: '4px', color: 'var(--text-main)', fontSize: '1.1rem' }}>hello@jordanreese.com</a>
                        </RevealText>
                        <RevealText delay={0.4}>
                            <a href="tel:453-485-6481" style={{ color: 'var(--text-secondary)' }}>453-485-6481</a>
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
                    flexDirection: 'column',
                    gap: '1rem',
                    borderTop: '1px solid var(--border-color)',
                    paddingTop: '3rem',
                    paddingBottom: '3rem',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)'
                }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <RevealText>
                        <div>© 2025 studio kismo</div>
                    </RevealText>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        {['Instagram', 'LinkedIn'].map((social, i) => (
                            <RevealText key={social} delay={0.1 * i} style={{ display: 'inline-block' }}>
                                <a href="#" style={{ transition: 'color 0.2s', color: 'var(--text-secondary)' }}>{social}</a>
                            </RevealText>
                        ))}
                    </div>
                 </div>
                 <RevealText delay={0.2}>
                    <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>
                        <a href="#">get this template</a>
                    </div>
                </RevealText>
            </footer>
        </section>
    );
};
