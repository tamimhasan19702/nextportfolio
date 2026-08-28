/** @format */

'use client';
import Biography from '@/components/biography';
import Brain from '@/components/brainSvg';
import Experience from '@/components/experience';
import Skills from '@/components/skills';
import { motion, useInView, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const AboutPage = () => {
	const { scrollYProgress } = useScroll();

	const skillRef = useRef();
	// const isSkillRefInView = useInView(skillRef, {once:true});
	const isSkillRefInView = useInView(skillRef, { margin: '-100px' });

	const experienceRef = useRef();
	const isExperienceRefInView = useInView(experienceRef, { margin: '-100px' });

	return (
		<motion.div
			className="h-full"
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}>
			{/* CONTAINER */}
			<div className="lg:flex">
				{/* TEXT CONTAINER */}
				<div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-3/5 lg:pr-0 xl:w-3/5 z-30">
					{/* BIOGRAPHY CONTAINER */}
					<Biography />
					{/* SKILLS CONTAINER */}
					<div className="flex flex-col gap-12 justify-center" ref={skillRef}>
						<Skills isSkillRefInView={isSkillRefInView} />
					</div>
					{/* EXPERIENCE CONTAINER */}
					<div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
						<Experience isExperienceRefInView={isExperienceRefInView} />
					</div>
				</div>
				{/* SVG CONTAINER */}
				<div className="hidden lg:block lg:w-2/5 xl:w-2/5 relative z-50">
					<div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
						<Brain scrollYProgress={scrollYProgress} />
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default AboutPage;
