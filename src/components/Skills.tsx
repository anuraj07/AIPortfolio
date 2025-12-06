import { motion } from 'framer-motion';
import { RevealText } from './RevealText';

export const Skills = () => {
    const skills = [
        {
            category: "Branding & Identity",
            details: "Logo design, typography, packaging, and style guides."
        },
        {
            category: "UI/UX Design",
            details: "Wireframing, prototyping, user research, and responsive web design."
        },
        {
            category: "Project Management",
            details: "Team leadership, client relations, and deadline management."
        }
    ];

    return (
        <section>
             <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
                <RevealText>
                    <h2 className="text-h2">Skills</h2>
                </RevealText>
                <div>
                    {skills.map((item, index) => (
                        <div key={index} style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem' }}>
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                                    {item.category}
                                </h3>
                                <p className="text-body" style={{ fontSize: '1rem' }}>
                                    {item.details}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
