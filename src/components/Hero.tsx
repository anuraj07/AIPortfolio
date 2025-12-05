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
                        <div style={{ width: '32px', height: '32px', background: '#ccc', borderRadius: '50%', overflow: 'hidden' }}>
                           <img src="https://placehold.co/100x100/333/fff?text=JR" alt="Jordan Reese" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <span>Jordan Reese</span>
                    </div>
                </RevealText>
                <RevealText delay={0.1}>
                    <a href="#" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>variant 2</a>
                </RevealText>
            </div>

            <div style={{ marginBottom: '3rem' }}>
                <RevealText delay={0.2}>
                    <h1 className="text-h1" style={{ margin: 0 }}>Senior Art Director</h1>
                </RevealText>
                <RevealText delay={0.3}>
                    <h1 className="text-h1" style={{ margin: 0 }}>and Graphic Designer</h1>
                </RevealText>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                <RevealText delay={0.4}>
                     <h2 className="text-h2" style={{ marginBottom: '1rem' }}>About</h2>
                     <p className="text-body" style={{ maxWidth: '480px' }}>
                        Jordan is an accomplished Art Director and Graphic Designer with a keen
                        eye for visual storytelling and a passion for creating impactful,
                        innovative, and memorable designs. With extensive experience leading
                        creative projects across branding, digital, and print media, Jordan
                        thrives on crafting engaging designs that connect with audiences and
                        deliver results.
                    </p>
                </RevealText>
            </div>

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
                    transition={{ duration: 0.6 }}
                    src="https://placehold.co/1200x800/dce0dd/1a2e1f?text=Portfolio+Highlight"
                    alt="Portfolio Highlight"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </motion.div>
        </section>
    );
};
