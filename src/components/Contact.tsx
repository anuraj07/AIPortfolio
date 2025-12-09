// import { motion } from 'framer-motion';
import { RevealText } from './RevealText';
import { Github, Linkedin, Mail, Youtube, Instagram, BookText, Phone } from 'lucide-react';

export const Contact = () => {
    const socialLinks = [
        // { name: 'X', icon: <Twitter size={20} />, url: 'https://twitter.com/yourhandle' }, // Placeholder URL
        { name: 'Github', icon: <Github size={20} />, url: 'https://github.com/anuraj07' },
        { name: 'Email', icon: <Mail size={20} />, url: 'mailto:deep.anuraj10@gmail.com' },
        { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/anuraj-deep-2407/' },
        { name: 'Youtube', icon: <Youtube size={20} />, url: 'https://www.youtube.com/@anurajdeep' },
        { name: 'Instagram', icon: <Instagram size={20} />, url: 'https://www.instagram.com/anu_raj07' },
        { name: 'Medium', icon: <BookText size={20} />, url: 'https://medium.com/@anuraj_deep' }
    ];

    return (
        <section id="contact" style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            paddingTop: '4rem',
            paddingBottom: '2rem'
        }}>
            <RevealText>
                <h1 className="text-h1" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Keep In Touch.</h1>
            </RevealText>

            <RevealText delay={0.1}>
                <p className="text-body" style={{ marginBottom: '2rem', fontSize: '1.2rem' }}>
                    Contact Me <span style={{ color: 'var(--accent-color)' }}>Feel free to reach out!</span>.
                    <br />
                    I'd love to hear from you about your project.
                </p>
            </RevealText>

            {/* Distinct Phone Design */}
            <RevealText delay={0.15}>
                <a href="tel:+917903811835" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: 'var(--text-main)',
                    marginBottom: '3rem',
                    padding: '12px 28px',
                    borderRadius: '50px',
                    border: '2px solid var(--accent-color)',
                    textDecoration: 'none',
                    transition: 'transform 0.2s'
                }}
                    className="phone-btn"
                >
                    <Phone size={24} style={{ fill: 'var(--accent-color)', stroke: 'none' }} />
                    <span>+91 79038 11835</span>
                </a>
            </RevealText>

            <div style={{
                display: 'flex',
                gap: '1.5rem',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginBottom: '8rem'
            }}>
                {socialLinks.map((social, index) => (
                    <RevealText key={index} delay={0.2 + (index * 0.1)}>
                        <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.8rem',
                                backgroundColor: 'var(--card-bg)', // Adapts to theme
                                color: 'var(--text-main)',
                                padding: '16px 32px',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                fontWeight: 500,
                                border: '1px solid var(--border-color)',
                                transition: 'all 0.2s ease'
                            }}
                            className="social-btn" // Can add hover effect in global css if needed
                        >
                            {social.icon} {social.name}
                        </a>
                    </RevealText>
                ))}
            </div>

            <footer style={{ marginTop: 'auto', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <RevealText delay={0.5}>
                    <p style={{ marginBottom: '0.5rem' }}>Designed and Developed by Anuraj Deep.</p>
                    <p>Built with <span style={{ color: 'var(--accent-color)' }}>React & Vite</span></p>
                </RevealText>
            </footer>
        </section>
    );
};
