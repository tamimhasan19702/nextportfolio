/** @format */

'use client';
import Brain from '@/components/brainSvg';
import Education from '@/components/education';
import Experience from '@/components/experience';
import Hobbies from '@/components/hobbies';
import ScrollDownArrow from '@/components/scrollDownArrow';
import Skills from '@/components/skills';
import PageHeader from '@/components/pageHeader';
import { motion, useScroll } from 'framer-motion';
import Image from 'next/image';

const AboutPage = () => {
	const { scrollYProgress } = useScroll();

	return (
		<motion.div
			className="h-full"
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}>
			{/* CONTAINER */}
			<div className="lg:flex">
{/* TEXT CONTAINER */}
			<div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-16 md:gap-24 lg:gap-32 xl:gap-40 lg:w-3/5 lg:pr-0 xl:w-3/5 z-30">
				{/* HEADER + SIGNATURE */}
				<div className="flex flex-col gap-6">
					<PageHeader
						eyebrow="About"
						title={
							<>
								Tareq{" "}
								<span className="text-transparent [-webkit-text-stroke:1.5px_black]">
									Monower
								</span>
							</>
						}
						description="Full Stack Developer crafting fast, accessible, and scalable web experiences with React, Next.js, TypeScript, and modern tooling."
					/>
					<div className="self-end">
						<Image src={"/signature.png"} alt="Signature" width={200} height={200} />
					</div>
					{/* SCROLL DOWN ARROW */}
					<ScrollDownArrow />
				</div>
				{/* EDUCATION & CERTIFICATIONS CONTAINER */}
				<div className="flex flex-col gap-12 justify-center">
					<Education />
				</div>
				{/* EXPERIENCE CONTAINER */}
				<div className="flex flex-col gap-12 justify-center">
					<Experience />
				</div>
				{/* SKILLS CONTAINER */}
				<div className="flex flex-col gap-12 justify-center">
					<Skills />
				</div>
				{/* HOBBIES CONTAINER */}
				<div className="flex flex-col gap-12 justify-center pb-48">
					<Hobbies />
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
