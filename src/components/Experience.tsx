import { motion } from 'framer-motion';
import { RevealText } from './RevealText';

export const Experience = () => {
    return (
        <section>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                <div>
                    <RevealText>
                        <h2 className="text-h2">Experience</h2>
                    </RevealText>
                    <ul className="text-body" style={{ marginTop: '2rem' }}>
                        {[
                            { role: "Senior Designer", company: "Studio Alpha", year: "2020 - Present" },
                            { role: "Art Director", company: "Creative Agency", year: "2018 - 2020" },
                            { role: "Designer", company: "Design Firm", year: "2015 - 2018" }
                        ].map((item, index) => (
                            <li
                                key={index}
                                style={{
                                    marginBottom: '1.5rem',
                                    paddingBottom: '1.5rem',
                                    borderBottom: '1px solid var(--border-color)'
                                }}
                            >
                                <div style={{ overflow: 'hidden' }}>
                                    <motion.div
                                        initial={{ y: "100%" }}
                                        whileInView={{ y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                            <strong style={{ color: 'var(--text-main)', fontWeight: 600 }}>{item.role}</strong>
                                            <span className="text-small">{item.year}</span>
                                        </div>
                                        <div className="text-small" style={{ opacity: 1, color: 'var(--text-secondary)' }}>
                                            {item.company}
                                        </div>
                                    </motion.div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <RevealText delay={0.2}>
                        <h2 className="text-h2">Awards</h2>
                    </RevealText>
                    <ul className="text-body" style={{ marginTop: '2rem' }}>
                        {['Awwwards Site of the Day', 'Best UI Design 2023', 'Type Directors Club'].map((award, index) => (
                            <li key={index} style={{ marginBottom: '1.2rem', overflow: 'hidden' }}>
                                <motion.div
                                    initial={{ y: "150%" }}
                                    whileInView={{ y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 + (index * 0.1) }}
                                    style={{ display: 'flex', alignItems: 'center' }}
                                >
                                    <span style={{
                                        width: '6px',
                                        height: '6px',
                                        background: 'var(--text-main)',
                                        borderRadius: '50%',
                                        marginRight: '12px',
                                        opacity: 0.4
                                    }}></span>
                                    {award}
                                </motion.div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
