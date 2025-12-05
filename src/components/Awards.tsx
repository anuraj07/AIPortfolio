import { motion } from 'framer-motion';
import { RevealText } from './RevealText';

export const Awards = () => {
    const awards = [
        "Best Campaign Design | Cannes Lions, 2022",
        "Top Graphic Design Portfolio | AIGA Design Awards, 2021",
        "Emerging Art Director | Clio Awards, 2020"
    ];

    return (
        <section>
             <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
                <RevealText>
                    <h2 className="text-h2">Awards</h2>
                </RevealText>
                <div>
                     <ul style={{ listStyle: 'none' }}>
                        {awards.map((award, index) => (
                            <li key={index} style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    style={{ display: 'flex', alignItems: 'center' }}
                                >
                                    <span className="text-body" style={{ color: 'var(--text-main)' }}>{award}</span>
                                </motion.div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
