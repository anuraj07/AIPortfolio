import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { RevealText } from './RevealText';

export const Projects = () => {
    const projects = [
        {
            title: "Send WhatsApp Message",
            description: "Sometime it is very annoying to save a mobile number of a person to start a WhatsApp conversation with them. So, I made this Android app where users can type or paste the receiver’s number and press send and they are ready to start their conversation without saving the number.",
            link: "https://github.com/anuraj07/send_whatsapp_msg"
        },
        {
            title: "Encrypted Messenger",
            description: "One can encrypt and decrypt their messages using different algorithms such as AES, DES, and RSA, and hash their message using MD5. The app has also integrated with Google API voice-to-text.",
            link: "https://github.com/anuraj07/EncryptedMessenger"
        },
        {
            title: "JsonToonConverter",
            description: "JsonToonConverter is an intelligent, rules-driven visualization engine designed to transform structured JSON data into expressive toon-style illustrations, animated scenes, or stylized graphical assets. Instead of manually designing characters, objects, or environments, developers feed the system descriptive JSON input, and the converter automatically generates a vibrant, cartoon-like output that reflects the structure and semantics of the data.",
            link: "https://github.com/anuraj07/JsonToonConverter"
        },
        {
            title: "CoinFlip",
            description: "CoinFlip is a simple Kotlin-based utility that simulates a coin toss, generating a random Heads or Tails outcome. Ideal for basic randomness tests, decision-making, or learning Kotlin project structure.",
            link: "https://github.com/anuraj07/CoinFlip"
        }
    ];

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollPosition = container.scrollLeft;
            const cardWidth = container.firstElementChild ? (container.firstElementChild as HTMLElement).offsetWidth : 0;
            const gap = 32; // 2rem gap
            const totalItemWidth = cardWidth + gap;

            // Calculate active index based on scroll center
            const index = Math.round(scrollPosition / totalItemWidth);
            setActiveIndex(Math.min(Math.max(index, 0), projects.length - 1));
        }
    };

    const scrollToProject = (index: number) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = container.firstElementChild ? (container.firstElementChild as HTMLElement).offsetWidth : 0;
            const gap = 32;
            const targetPosition = index * (cardWidth + gap);

            container.scrollTo({
                left: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="projects" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingTop: '6rem',
            paddingBottom: '6rem'
        }}>
            <RevealText>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '4rem' }}>
                    <h2 className="text-h1" style={{ fontSize: '3.5rem', margin: 0 }}>My projects</h2>
                    <span style={{ fontSize: '3.5rem', color: '#3b82f6', lineHeight: 1 }}>.</span>
                </div>
            </RevealText>

            {/* Carousel Container */}
            <div
                ref={scrollContainerRef}
                onScroll={handleScroll}
                style={{
                    display: 'flex',
                    gap: '2rem',
                    overflowX: 'auto',
                    scrollSnapType: 'x mandatory',
                    paddingBottom: '3rem',
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                    scrollbarWidth: 'none', // FireFox
                    msOverflowStyle: 'none', // IE/Edge
                    cursor: 'grab'
                }}
                className="projects-carousel"
            >
                {/* Hide scrollbar for Chrome/Safari */}
                <style>{`
    .projects - carousel:: -webkit - scrollbar {
    display: none;
}
`}</style>

                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10 }} // Lift effect on hover
                        style={{
                            minWidth: '350px',
                            maxWidth: '400px',
                            flex: '0 0 auto',
                            scrollSnapAlign: 'center', // Center snap
                            backgroundColor: 'var(--card-bg)',
                            borderRadius: '24px',
                            padding: '2.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            border: '1px solid var(--border-color)',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                            height: '450px' // Fixed height for alignment
                        }}
                    >
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--text-main)' }}>
                                {project.title}
                            </h3>
                            <p className="text-body" style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                                {project.description}
                            </p>
                        </div>

                        <a
                            href={project.link}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: '#3b82f6', // Blue like the reference
                                fontWeight: 500,
                                fontSize: '1rem',
                                marginTop: '2rem',
                                textDecoration: 'none'
                            }}
                        >
                            Discover the project <ArrowRight size={18} />
                        </a>
                    </motion.div>
                ))}
            </div>

            {/* Pagination Dots */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', marginTop: '1rem' }}>
                {projects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollToProject(index)}
                        style={{
                            width: activeIndex === index ? '24px' : '8px',
                            height: '8px',
                            borderRadius: activeIndex === index ? '4px' : '50%',
                            backgroundColor: activeIndex === index ? 'var(--text-main)' : 'var(--text-secondary)',
                            opacity: activeIndex === index ? 0.8 : 0.5,
                            transition: 'all 0.3s ease',
                            border: 'none',
                            padding: 0,
                            cursor: 'pointer'
                        }}
                        aria-label={`Go to project ${index + 1} `}
                    />
                ))}
            </div>
        </section>
    );
};
