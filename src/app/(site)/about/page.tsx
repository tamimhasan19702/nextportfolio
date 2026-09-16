/** @format */

import AboutContent from "@/components/aboutContent";
import { getAbout } from "@/lib/payload-cache";
import type { About } from "@/payload-types";

const AboutPage = async () => {
  const about = await getAbout();

  return <AboutContent about={about as About} />;
};

export default AboutPage;
