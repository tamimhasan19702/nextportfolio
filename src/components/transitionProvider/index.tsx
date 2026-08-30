/** @format */
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../navbar';
import { usePathname } from 'next/navigation';
import type { TransitionProviderProps } from './interface';

const TransitionProvider = ({ children, navbar }: TransitionProviderProps) => {
	const pathName = usePathname();
	const displayText = pathName === '/' ? 'Tareq Monower' : pathName.substring(1);
	return (
		<AnimatePresence mode="wait">
			<div key={pathName} className="w-full min-h-screen no-scrollbar">
				<motion.div
					className="h-screen w-full fixed left-0 right-0 bg-black rounded-b-[100px] z-40"
					animate={{ height: '0vh' }}
					exit={{ height: '140vh' }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
				/>
				<motion.div
					className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center px-6"
					initial={{ opacity: 1 }}
					animate={{ opacity: 0 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.9, ease: 'easeOut' }}>
					<span className="text-center text-white text-4xl sm:text-6xl lg:text-8xl cursor-default capitalize">
						{displayText}
					</span>
				</motion.div>
				<motion.div
					className="h-screen w-full fixed left-0 right-0 bg-black rounded-t-[100px] bottom-0 z-30"
					initial={{ height: '140vh' }}
					animate={{ height: '0vh', transition: { delay: 0.5 } }}
				/>
				<div className="h-24">
					<Navbar navbar={navbar} />
				</div>

				{children}
			</div>
		</AnimatePresence>
	);
};

export default TransitionProvider;
