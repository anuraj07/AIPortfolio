import { motion } from 'framer-motion';
import { RevealText } from './RevealText';

export const Projects = () => {
    const projects = [
        {
            title: "Acco Campaign",
            description: "Revamped Acco’s brand with a bold, engaging campaign for global impact.",
            images: [
                "https://placehold.co/800x600/dce0dd/1a2e1f?text=Acco+Image+1",
                "https://placehold.co/800x600/dce0dd/1a2e1f?text=Acco+Image+2"
            ]
        },
        {
            title: "Luna Direction",
            description: "Crafted Luna’s creative direction to elevate brand identity and audience connection.",
            images: [
                "https://placehold.co/800x600/dce0dd/1a2e1f?text=Luna+Image+1",
                "https://placehold.co/800x600/dce0dd/1a2e1f?text=Luna+Image+2"
            ]
        }
    ];

    return (
        <section>
            <div style={{ marginBottom: '4rem' }}>
                <RevealText>
                    <h2 className="text-h2">Featured Projects</h2>
                </RevealText>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
                {projects.map((project, index) => (
                    <div key={index}>
                        <div style={{ marginBottom: '2rem' }}>
                            <RevealText delay={0.1}>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: 500, marginBottom: '0.5rem' }}>{project.title}</h3>
                            </RevealText>
                            <RevealText delay={0.2}>
                                <p className="text-body" style={{ maxWidth: '600px' }}>{project.description}</p>
                            </RevealText>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
                            {project.images.map((img, imgIndex) => (
                                <motion.div
                                    key={imgIndex}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2 + (imgIndex * 0.1) }}
                                    style={{ borderRadius: '8px', overflow: 'hidden', backgroundColor: '#eee' }}
                                >
                                    <motion.img
                                        src={img}
                                        alt={`${project.title} ${imgIndex + 1}`}
                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                        whileHover={{ scale: 1.03 }}
                                        transition={{ duration: 0.4 }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
