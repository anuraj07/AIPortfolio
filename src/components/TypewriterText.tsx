import { motion } from 'framer-motion';

interface TypewriterTextProps {
    text: string;
    delay?: number;
    className?: string;
    style?: React.CSSProperties;
}

export const TypewriterText = ({ text, delay = 0, className, style }: TypewriterTextProps) => {
    // Split text into characters
    const characters = Array.from(text);

    const container = {
        hidden: { opacity: 0 },
        visible: () => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: delay }
        })
    };

    const child = {
        visible: {
            opacity: 1,
            display: "inline-block", // Required for transform to work if we added it, but mostly for spacing
        },
        hidden: {
            opacity: 0,
            display: "inline-block",
        }
    };

    return (
        <motion.span
            style={{ display: 'inline', ...style }} // Inline to flow with other text if needed
            className={className}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {characters.map((char, index) => (
                <motion.span variants={child} key={index} style={{ whiteSpace: 'pre' }}>
                    {char}
                </motion.span>
            ))}
        </motion.span>
    );
};
