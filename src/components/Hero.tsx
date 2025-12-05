import { motion } from 'framer-motion';
import { RevealText } from './RevealText';

const imageReveal = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as any, delay: 0.2 } }
};

export const Hero = () => {
    return (
        <section style={{ paddingTop: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
                <RevealText>
                    <div style={{ fontWeight: 600, fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <div style={{ width: '28px', height: '28px', background: '#ccc', borderRadius: '50%' }}></div>
                        <span>Civio</span>
                    </div>
                </RevealText>
                <RevealText delay={0.1}>
                    <a href="#" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', transition: 'color 0.2s' }}>variant 2</a>
                </RevealText>
            </div>

            <div style={{ marginBottom: '2rem' }}>
                <RevealText delay={0.2}>
                    <h1 className="text-h1" style={{ margin: 0 }}>Senior Art Director</h1>
                </RevealText>
                <RevealText delay={0.3}>
                    <h1 className="text-h1" style={{ margin: 0 }}>and Graphic Designer</h1>
                </RevealText>
            </div>

            <RevealText delay={0.4} style={{ marginBottom: '4rem' }}>
                <p className="text-body" style={{ maxWidth: '480px', lineHeight: 1.7 }}>
                    Specializing in branding and digital design. Based in New York.
                    Currently available for freelance projects.
                </p>
            </RevealText>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={imageReveal}
                style={{
                    width: '100%',
                    height: '600px',
                    backgroundColor: '#ebebeb',
                    borderRadius: '12px',
                    overflow: 'hidden',
                }}
            >
                <motion.img
                    whileHover={{ scale: 1.05 }}
                    src="https://placehold.co/1200x800/dcdcdc/999999?text=Portfolio+Key+Visual"
                    alt="Portfolio Highlight"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </motion.div>
        </section>
    );
};
