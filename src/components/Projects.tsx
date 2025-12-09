import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { RevealText } from './RevealText';

export const Projects = () => {
    const projects = [
        {
            title: "BioResistanceAI",
            description: "Faced with the rise of bacterial resistance, predicting the effectiveness of antibiotics is becoming crucial. Using genomic data, it is possible to anticipate the resistance of a bacterial strain, thus avoiding the need for culturing.",
            link: "#"
        },
        {
            title: "ExtremePrecipit",
            description: "Faced with the increased risks associated with climate change, accurately predicting extreme rainfall is becoming essential. This project utilizes a high-resolution climate model.",
            link: "#"
        },
        {
            title: "Niveo",
            description: "Faced with the increasing variability of snow conditions and the challenges of safety in the mountains, having reliable and real-time visualization of snow data is becoming essential.",
            link: "#"
        },
        {
            title: "EcoTrack",
            description: "A comprehensive solution for tracking and reducing carbon footprints for small to medium enterprises. Features real-time dashboard analytics and actionable insights.",
            link: "#"
        }
    ];

    const scrollContainerRef = useRef<HTMLDivElement>(null);

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
                    .projects-carousel::-webkit-scrollbar {
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
                            scrollSnapAlign: 'center',
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

            {/* Pagination Dots (Visual only for now) */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', marginTop: '1rem' }}>
                <div style={{ width: '24px', height: '8px', borderRadius: '4px', backgroundColor: 'var(--text-main)', opacity: 0.8 }}></div>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--text-secondary)', opacity: 0.5 }}></div>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--text-secondary)', opacity: 0.5 }}></div>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--text-secondary)', opacity: 0.5 }}></div>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--text-secondary)', opacity: 0.5 }}></div>
            </div>

        </section>
    );
};
