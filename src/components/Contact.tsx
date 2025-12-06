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
                        <p className="text-body">Bengaluru, Karnataka<br />India</p>
                    </RevealText>
                </div>
                <div>
                    <RevealText delay={0.2}>
                        <h2 className="text-h2">Contact details</h2>
                    </RevealText>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        <RevealText delay={0.3}>
                            <a href="mailto:deep.anuraj10@gmail.com" style={{ textDecoration: 'underline', textUnderlineOffset: '4px', color: 'var(--text-main)', fontSize: '1.1rem' }}>deep.anuraj10@gmail.com</a>
                        </RevealText>
                        <RevealText delay={0.4}>
                            <a href="tel:+91-7903811835" style={{ color: 'var(--text-secondary)' }}>+91-7903811835</a>
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
                    <a href="https://drive.google.com/file/d/1RtaKiWLIbBxZxiSVw56YSV8s3pyi0Htk/view?usp=drive_link" className="btn-primary" style={{ fontSize: '1.2rem', padding: '24px 48px', borderRadius: '12px' }}>
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
                        <div>© 2026</div>
                    </RevealText>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        {[
                            { name: 'Github', url: 'https://github.com/anuraj07' },
                            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anuraj-deep-2407/' },
                            { name: 'Instagram', url: 'https://www.instagram.com/anu_raj07' }
                        ].map((social, i) => (
                            <RevealText key={social.name} delay={0.1 * i} style={{ display: 'inline-block' }}>
                                <a
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ transition: 'color 0.2s', color: 'var(--text-secondary)' }}
                                >
                                    {social.name}
                                </a>
                            </RevealText>
                        ))}
                    </div>
                </div>
            </footer>
        </section>
    );
};
