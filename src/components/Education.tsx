import { motion } from 'framer-motion';
import { RevealText } from './RevealText';

export const Education = () => {
    const education = [
        {
            degree: "Bachelor of Engineering in Computer Science",
            school: "Global Academy of Technology",
            year: "Graduated: 2021"
        }
    ];

    return (
        <section>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
                <RevealText>
                    <h2 className="text-h2">Education</h2>
                </RevealText>
                <div>
                    {education.map((item, index) => (
                        <div key={index} style={{ marginBottom: '2.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem' }}>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                                    {item.degree}
                                </h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                                    <span className="text-small" style={{ color: 'var(--text-secondary)' }}>{item.school}</span>
                                    <span className="text-small" style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>{item.year}</span>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
