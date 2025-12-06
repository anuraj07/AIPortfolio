import { motion } from 'framer-motion';
import { RevealText } from './RevealText';

export const Experience = () => {
    // Grouped data structure for company-based timeline
    const groupedExperiences = [
        {
            company: "Fluke Corporation",
            location: "Bengaluru, Karnataka, India",
            logo: "F", // Placeholder for company logo logic
            roles: [
                {
                    title: "Software Engineer - 2",
                    type: "Full-time",
                    date: "Apr 2025 - Present",
                    duration: "9 mos",
                    location: "Hybrid",
                    description: ""
                },
                {
                    title: "Software Engineer",
                    type: "Full-time",
                    date: "Mar 2024 - Apr 2025",
                    duration: "1 yr 2 mos",
                    location: "Hybrid",
                    description: ""
                }
            ]
        },
        {
            company: "Awign",
            location: "Bengaluru, Karnataka, India",
            logo: "A",
            roles: [
                {
                    title: "Software Development Engineer - Android (SDE-2)",
                    type: "Full-time",
                    date: "Apr 2023 - Mar 2024",
                    duration: "1 yr",
                    location: "Hybrid",
                    description: "Android Jetpack, Hilt and +3 skills"
                },
                {
                    title: "Software Development Engineer - Android (SDE1)",
                    type: "Full-time",
                    date: "Nov 2021 - Apr 2023",
                    duration: "1 yr 6 mos",
                    location: "Hybrid",
                    description: "Retrofit, Problem Solving and +6 skills"
                },
                {
                    title: "Intern - Software Development",
                    type: "Internship",
                    date: "May 2021 - Nov 2021",
                    duration: "7 mos",
                    location: "Remote",
                    description: ""
                }
            ]
        },
        {
            company: "DOJO Sports",
            location: "Remote",
            logo: "D",
            roles: [
                {
                    title: "Android Developer - Intern",
                    type: "Internship",
                    date: "June 2020 - Oct 2020",
                    duration: "5 mos",
                    location: "Remote",
                    description: "Designed and Developed application for DOJO Sports. Translated and Built the designs and Wireframes into responsive UI and code."
                }
            ]
        },
        {
            company: "National Informatics Center",
            location: "Patna, Bihar",
            logo: "N",
            roles: [
                {
                    title: "Android Developer - Intern",
                    type: "Internship",
                    date: "July 2019 - July 2019",
                    duration: "1 mos",
                    location: "On-site",
                    description: "Worked on a project called POINT OF INSPECTION. Geo tagging location where crime rate is high."
                }
            ]
        }
    ];

    return (
        <section>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', marginBottom: '8rem' }}>
                <RevealText>
                    <h2 className="text-h2">Experience</h2>
                </RevealText>

                <div>
                    {groupedExperiences.map((companyData, companyIndex) => (
                        <div key={companyIndex} style={{ marginBottom: '3rem' }}>
                            {/* Company Header */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}
                            >
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    backgroundColor: '#333',
                                    borderRadius: '4px', // Square logo style like LinkedIn
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    fontSize: '1.2rem',
                                    marginRight: '1rem'
                                }}>
                                    {companyData.logo}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-main)', margin: 0 }}>
                                        {companyData.company}
                                    </h3>
                                    {companyData.roles.length > 1 && (
                                        <div className="text-small">{/* Could calculate total duration here if needed */}</div>
                                    )}
                                </div>
                            </motion.div>

                            {/* Roles Timeline */}
                            <div style={{ position: 'relative', paddingLeft: '24px' }}> {/* indent for timeline */}
                                {companyData.roles.map((role, roleIndex) => (
                                    <div key={roleIndex} style={{ position: 'relative', paddingBottom: roleIndex === companyData.roles.length - 1 ? '0' : '2.5rem' }}>

                                        {/* Vertical linking line for multiple roles in same company */}
                                        {companyData.roles.length > 1 && roleIndex !== companyData.roles.length - 1 && (
                                            <div style={{
                                                position: 'absolute',
                                                left: '-23px', // Align with dot center
                                                top: '24px',
                                                bottom: '-10px',
                                                width: '2px',
                                                backgroundColor: 'var(--border-color)'
                                            }}></div>
                                        )}

                                        {/* Timeline Dot */}
                                        <div style={{
                                            position: 'absolute',
                                            left: '-29px',
                                            top: '6px',
                                            width: '12px',
                                            height: '12px',
                                            borderRadius: '50%',
                                            backgroundColor: 'var(--border-color)', // Gray dot
                                            border: '2px solid var(--bg-color)' // separation from line
                                        }}></div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: roleIndex * 0.1 }}
                                        >
                                            <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', margin: '0 0 0.3rem 0' }}>
                                                {role.title}
                                            </h4>
                                            <div className="text-small" style={{ marginBottom: '0.5rem' }}>
                                                {role.type && <span>{role.type}</span>} <span>· {role.duration}</span>
                                            </div>
                                            <div className="text-small" style={{ marginBottom: '0.5rem', opacity: 0.7 }}>
                                                {role.date} · {role.location}
                                            </div>

                                            {role.description && (
                                                <p className="text-body" style={{ fontSize: '0.95rem', marginTop: '0.8rem' }}>
                                                    {role.description}
                                                </p>
                                            )}
                                        </motion.div>
                                    </div>
                                ))}
                            </div>

                            {/* Horizontal separator between companies */}
                            {companyIndex !== groupedExperiences.length - 1 && (
                                <div style={{
                                    marginTop: '2rem',
                                    height: '1px',
                                    backgroundColor: 'var(--border-color)',
                                    opacity: 0.5
                                }}></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
