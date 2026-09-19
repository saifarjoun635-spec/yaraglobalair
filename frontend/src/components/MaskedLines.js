import { motion } from 'framer-motion';

export const MaskedLines = ({ lines, className = '', lineClassName = '', delay = 0, as: Tag = 'span' }) => (
    <Tag className={className}>
        {lines.map((line, i) => (
            <span key={i} className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
                <motion.span
                    className={`block will-change-transform ${lineClassName}`}
                    initial={{ y: '112%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.95, delay: delay + i * 0.13, ease: [0.16, 1, 0.3, 1] }}
                >
                    {line}
                </motion.span>
            </span>
        ))}
    </Tag>
);

export default MaskedLines;
