import { motion } from 'framer-motion';
import { RevealText } from './RevealText';
import { TypewriterText } from './TypewriterText';
import portfolioHighlight from '../assets/portfolio_highlight.jpg';
import './Hero.css';

const imageReveal = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as any, delay: 0.2 } }
};

const stats = [
    { value: "4+", label: "Years of\nExperience" },
    { value: "10+", label: "Projects\nCompleted" },
    { value: "96%", label: "Positive\nFeedback" }, // Placeholder based on ref
    { value: "4+", label: "Technologies\nMastered" }
];

export const Hero = () => {
    return (
        <section className="hero-section">
            {/* Main Content Grid */}
            <div className="hero-grid">

                {/* Left Column: Text & CTA */}
                <div>
                    <h1 className="text-h1" style={{ fontSize: '3rem', lineHeight: '1.1', marginBottom: '1.5rem', minHeight: '160px' }}>
                        <TypewriterText text="Hey, I'm" delay={0.2} /> <span style={{ color: 'var(--text-secondary)' }}><TypewriterText text="Anuraj Deep" delay={0.5} /></span>
                        <br />
                        <TypewriterText text="a software engineer from" delay={1} /> <span style={{ fontStyle: 'italic' }}><TypewriterText text="Bengaluru" delay={1.75} /></span>
                    </h1>

                    <RevealText delay={0.2}>
                        <p className="text-body" style={{ maxWidth: '90%', marginBottom: '2.5rem' }}>
                            I create high-quality applications with a focus on Kotlin, Android SDK, and scalable architectures.
                            Committed to exceeding expectations and providing seamless user experiences.
                        </p>
                    </RevealText>

                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                        <RevealText delay={0.2}>
                            <a href="#contact" className="btn-primary" style={{ padding: '16px 32px' }}>
                                Hire Me
                            </a>
                        </RevealText>
                        <RevealText delay={0.6}>
                            <a href="https://drive.google.com/uc?export=download&id=1RtaKiWLIbBxZxiSVw56YSV8s3pyi0Htk" style={{ fontSize: '1rem', color: 'var(--text-main)', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                                Download Resume
                            </a>
                        </RevealText>
                    </div>
                </div>

                {/* Right Column: Image */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={imageReveal}
                    className="hero-image-container"
                >
                    <motion.img
                        // whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                        src={portfolioHighlight}
                        alt="Anuraj Deep"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </motion.div>
            </div>

            {/* Bottom Row: Stats */}
            <div className="hero-stats">
                {stats.map((stat, index) => (
                    <RevealText key={index} delay={0.5 + (index * 0.1)}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                                {stat.value}
                            </div>
                            <div className="text-small" style={{ fontSize: '0.9rem', whiteSpace: 'pre-line', lineHeight: '1.4' }}>
                                {stat.label}
                            </div>
                        </div>
                    </RevealText>
                ))}
            </div>
        </section>
    );
};
