import { motion } from 'framer-motion';
import { RevealText } from './RevealText';

export const Experience = () => {
    const experiences = [
        {
            role: "Senior Art Director",
            company: "Ogilvy & Mather",
            year: "Jan 2020 – Present",
            description: "Managed a team of designers, copywriters, and photographers to deliver projects under tight deadlines. Led the redesign of Coca-Cola's digital assets, improving usability and aesthetic consistency."
        },
        {
            role: "Graphic Designer",
            company: "Pentagram",
            year: "May 2015 – Dec 2019",
            description: "Designed comprehensive brand identities, including logos, packaging, and promotional materials. Collaborated with clients like Spotify and Airbnb to translate concepts into visually compelling campaigns."
        }
    ];

    return (
        <section>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', marginBottom: '4rem' }}>
                <RevealText>
                    <h2 className="text-h2">Experience</h2>
                </RevealText>
                <div>
                    {experiences.map((item, index) => (
                        <div key={index} style={{ marginBottom: '3rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '2rem' }}>
                             <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                             >
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-main)' }}>{item.role}</h3>
                                    <span className="text-small" style={{ color: 'var(--text-main)' }}>{item.year}</span>
                                </div>
                                <div className="text-small" style={{ marginBottom: '1rem', fontStyle: 'italic' }}>
                                    {item.company}
                                </div>
                                <p className="text-body" style={{ fontSize: '1rem' }}>
                                    {item.description}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
