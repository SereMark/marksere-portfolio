import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * ScrambleText - A text effect component that scrambles characters before revealing the final text
 * Creates a hacker/terminal-like effect perfect for tech portfolios
 */
const ScrambleText = ({ text, className = '', delay = 0 }) => {
    const [display, setDisplay] = useState(text);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';

    useEffect(() => {
        let interval;
        let iteration = 0;
        let timeoutId;

        const scramble = () => {
            interval = setInterval(() => {
                setDisplay(
                    text
                        .split("")
                        .map((letter, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            return chars[Math.floor(Math.random() * chars.length)];
                        })
                        .join("")
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 30);
        };

        // Add delay before starting scramble animation
        timeoutId = setTimeout(scramble, delay);

        return () => {
            clearInterval(interval);
            clearTimeout(timeoutId);
        };
    }, [text, delay, chars]);

    return <span className={className}>{display}</span>;
};

ScrambleText.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    delay: PropTypes.number,
};

export default ScrambleText;
