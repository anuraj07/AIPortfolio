// import { motion } from 'framer-motion';
import { Laptop, Layers, Palette, FolderGit2 } from 'lucide-react'; // Added FolderGit2 for button icon if needed
import { RevealText } from './RevealText';

export const Services = () => {
    const services = [
        {
            icon: <Laptop size={32} style={{ color: 'var(--accent-color)' }} />, // Purple-ish icon
            title: "What I can do",
            description: "I can help develop solutions that will help you grow your business:",
            list: ["UI/UX Design", "Mobile App Development", "IOT device integration", "Database Design", "API Integration"]
        },
        {
            icon: <Layers size={32} style={{ color: 'var(--accent-color)' }} />,
            title: "Tools I Use",
            description: "I use the latest tools and technologies to build functional and scalable products:",
            list: ["Mobile App Development:\nKotlin, Java, Flutter", "Backend:\nSpring Boot, MongoDB, PostgreSQL", "Design:\nFigma, Zeplin"]
        },
        // {
        //     icon: <Palette size={32} style={{ color: 'var(--accent-color)' }} />,
        //     title: "UI/UX Design",
        //     description: "I am a designer first, developer second. I can help design clean and modern interfaces:",
        //     list: ["User-Centered Design", "Modern & Clean UI", "Responsive Layouts", "Wireframes & Prototypes"]
        // }
    ];

    return (
        <section style={{
            minHeight: '100vh',
            paddingTop: '6rem',
            paddingBottom: '6rem',
            position: 'relative' // For button placement
        }}>
            <RevealText>
                <h2 className="text-h2" style={{ color: 'var(--accent-color)', marginBottom: '1rem', display: 'none' }}>Services</h2>
                <h1 className="text-h1" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Building Digital Experiences</h1>
            </RevealText>

            <RevealText delay={0.1}>
                <p className="text-body" style={{ maxWidth: '600px', marginBottom: '4rem' }}>
                    I specialize in creating stunning user interfaces and developing high-quality applications that stand out.
                </p>
            </RevealText>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginBottom: '4rem'
            }}>
                {services.map((service, index) => (
                    <RevealText key={index} delay={0.2 + (index * 0.1)}>
                        <div style={{
                            background: 'var(--card-bg)', // Use theme variable
                            padding: '2.5rem',
                            borderRadius: '16px',
                            height: '100%',
                            border: '1px solid var(--border-color)',
                            transition: 'transform 0.2s ease',
                        }}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-main)' }}>
                                {service.title}
                            </h3>
                            <p className="text-small" style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                                {service.description}
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                {service.list.map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--text-main)' }}>
                                        <span style={{ color: 'var(--accent-color)', marginTop: '6px', fontSize: '1.2rem', lineHeight: 0 }}>•</span>
                                        <span style={{ whiteSpace: 'pre-line' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </RevealText>
                ))}
            </div>

            <div style={{ textAlign: 'right' }}>
                <RevealText delay={0.5}>
                    <a href="#projects" className="btn-primary" style={{ gap: '0.5rem' }}>
                        <FolderGit2 size={20} /> View My Projects
                    </a>
                </RevealText>
            </div>
        </section>
    );
};
