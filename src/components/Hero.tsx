import React from 'react';
import { motion } from 'framer-motion';
import { RevealText } from './RevealText';
import portfolioHighlight from '../assets/portfolio_highlight.jpg';

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
                            <img src="https://placehold.co/100x100/333/fff?text=AD" alt="Anuraj Deep" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <span>Anuraj Deep</span>
                    </div>
                </RevealText>
            </div>

            <div style={{ marginBottom: '3rem' }}>
                <RevealText delay={0.2}>
                    <h1 className="text-h1" style={{ margin: 0 }}>Software Engineer - 2,</h1>
                </RevealText>
                <RevealText delay={0.3}>
                    <h1 className="text-h1" style={{ margin: 0 }}>Android Developer</h1>
                </RevealText>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                <RevealText delay={0.4}>
                    <h2 className="text-h2" style={{ marginBottom: '1rem' }}>About</h2>
                    <p className="text-body" style={{ maxWidth: '480px' }}>
                        Hello! I'm an Android developer who enjoys creating high-quality applications. I contribute considerable knowledge in Kotlin, Android SDK, and prominent architectural patterns such as MVP, MVVM, and MVI to any project I work on. My knowledge includes coroutines, dependency injection, and Jetpack libraries like Navigation and Compose, which allow me to create highly efficient and engaging user experiences. I also have a strong understanding of SQL and Room, allowing me to manage data easily. I take satisfaction in producing high-quality solutions by developing clean, maintainable code. I'm committed to exceeding expectations and providing a seamless user experience, whether developing a new app or improving an existing one. Let's work together to make your app ideas a reality.
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
                    backgroundColor: '#dce0dd',
                    borderRadius: '12px',
                    overflow: 'hidden',
                }}
            >
                <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={portfolioHighlight}
                    alt="Portfolio Highlight"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </motion.div>
        </section>
    );
};
