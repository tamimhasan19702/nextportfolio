import HomeContent, { fallbackHero } from "@/components/homeContent";
import type { Hero } from "@/components/homeContent/interface";
import { getHome } from "@/lib/payload-cache";

const HomePage = async () => {
  let hero: Partial<Hero> = fallbackHero;

  try {
    const data = await getHome();
    if (data && "hero" in data && data.hero) {
      hero = { ...fallbackHero, ...data.hero };
    }
  } catch (err) {
    console.error("Failed to load home global from Payload", err);
  }

  return <HomeContent hero={hero} />;
};

export default HomePage;
