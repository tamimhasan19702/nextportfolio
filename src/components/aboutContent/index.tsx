'use client';

import Brain from '@/components/brainSvg';
import Education from '@/components/education';
import Experience from '@/components/experience';
import Hobbies from '@/components/hobbies';
import PageHeader from '@/components/pageHeader';
import ScrollDownArrow from '@/components/scrollDownArrow';
import Skills from '@/components/skills';
import { motion, useScroll } from 'framer-motion';
import Image from 'next/image';
import type { About, Education as EducationDoc, Certification, Experience as ExperienceDoc, Hobby } from '@/payload-types';
import { RichText } from '@payloadcms/richtext-lexical/react';

type Props = {
  about: About;
};

const AboutContent = ({ about }: Props) => {
  const { scrollYProgress } = useScroll();

  const education = (about.education || []).filter(
    (v): v is EducationDoc => typeof v !== 'string'
  );
  const certifications = (about.certifications || []).filter(
    (v): v is Certification => typeof v !== 'string'
  );
  const experiences = (about.experiences || []).filter(
    (v): v is ExperienceDoc => typeof v !== 'string'
  );
  const hobbies = (about.hobbies || []).filter(
    (v): v is Hobby => typeof v !== 'string'
  );
  const skills = (about.skills || []).map((s) => s.skill || '');

  const signatureUrl =
    typeof about.signature === 'object' && about.signature?.url
      ? about.signature.url
      : '/signature.png';

  const titleParts = (() => {
    const parts = (about.title || "Tareq Monower").split(" ")
    if (parts.length < 2) {
      const last = parts.pop()
      return [<span key="all">{parts.join(" ")}</span>, <span key="last" className="text-transparent [-webkit-text-stroke:1.5px_black]">{last}</span>]
    }
    const last = parts.pop()
    return [...parts.map((p, i) => <span key={i}>{p} </span>), <span key="last" className="text-transparent [-webkit-text-stroke:1.5px_black]">{last}</span>]
  })()

  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}>
      {/* CONTAINER */}
      <div className="lg:flex">
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-16 md:gap-24 lg:gap-32 xl:gap-40 lg:w-3/5 lg:pr-0 xl:w-3/5 z-30 pb-24 sm:pb-35 lg:pb-40">
          {/* HEADER + SIGNATURE */}
          <div className="flex flex-col gap-6">
            <PageHeader
              eyebrow={about.overline || "About"}
              title={<>{titleParts}</>}
              description={about.description ? <RichText data={about.description} /> : undefined}
            />
            {signatureUrl ? (
              <div className="self-end">
                <Image src={signatureUrl} alt="Signature" width={200} height={200} />
              </div>
            ) : null}
            {/* SCROLL DOWN ARROW */}
            <ScrollDownArrow />
          </div>
          {/* EDUCATION & CERTIFICATIONS CONTAINER */}
          {(education.length > 0 || certifications.length > 0) && (
            <div className="flex flex-col gap-12 justify-center">
              <Education education={education} certifications={certifications} />
            </div>
          )}
          {/* EXPERIENCE CONTAINER */}
          {experiences.length > 0 && (
            <div className="flex flex-col gap-12 justify-center">
              <Experience experiences={experiences} />
            </div>
          )}
          {/* SKILLS CONTAINER */}
          {skills.length > 0 && (
            <div className="flex flex-col gap-12 justify-center">
              <Skills skills={skills} />
            </div>
          )}
          {/* HOBBIES CONTAINER */}
          {hobbies.length > 0 && (
            <div className="flex flex-col gap-12 justify-center">
              <Hobbies hobbies={hobbies} />
            </div>
          )}
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

export default AboutContent;
