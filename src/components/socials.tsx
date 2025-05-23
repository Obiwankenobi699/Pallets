'use client';

import { motion } from 'framer-motion';
import LinkedinIcon from '@/assets/icons/linkedin.svg';
import TwitterIcon from '@/assets/icons/twitter.svg';
import MailIcon from '@/assets/icons/mail.svg';
import Link from 'next/link';
import { ANIMATION_DURATION } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function Socials({ className }: { className?: string }) {

    const iconVariants = {
        hidden: { opacity: 0, scale: 0.3 },
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.2,
                duration: ANIMATION_DURATION.MEDIUM,
                ease: 'easeOut',
            },
        }),
    };


    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className={cn('flex items-center gap-5 z-10 justify-center', className)}
        >
            <Link
                href="mailto:pallets.community@gmail.com"
                target="_blank"
                aria-label="Email Pallets LLC"
            >
                <motion.div custom={0} variants={iconVariants}>
                    <MailIcon
                        className="fill-theme-primary hover:scale-125 transition-transform duration-200 delay-0"
                        style={{ fill: 'var(--theme-primary)', width: '30px', height: '30px', marginTop: '-3px' }}
                        aria-hidden="true"
                    />
                </motion.div>
            </Link>
            <Link
                href="https://www.linkedin.com/in/palletsx4/"
                target="_blank"
                aria-label="Pallets LLC's LinkedIn profile (opens in a new tab)"
            >
                <motion.div custom={1} variants={iconVariants}>
                    <LinkedinIcon
                        className="fill-theme-primary hover:scale-125 transition-transform duration-200 delay-0"
                        aria-hidden="true"
                    />
                </motion.div>
            </Link>


            <Link
                href="https://x.com/palletsx4"
                target="_blank"
                aria-label="Pallets LLC's Twitter profile (opens in a new tab)"
            >
                <motion.div custom={2} variants={iconVariants}>
                    <TwitterIcon
                        className="fill-theme-primary hover:scale-125 transition-transform duration-200 delay-0"
                        aria-hidden="true"
                    />
                </motion.div>
            </Link>
        </motion.div>
    );
}
