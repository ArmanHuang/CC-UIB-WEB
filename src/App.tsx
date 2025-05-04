import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";
import { GallerySlide } from "./components/GallerySlide";
import { Header } from "./components/Header";
import { PeopleSlide } from "./components/PeopleSlide";
import { ProgramSection } from "./components/ProgramSection";

const App = () => {
  const [headerTheme, setHeaderTheme] = useState<"light" | "dark">("light");
  const [headerActive, setHeaderActive] = useState<string>("home");
  const [heroScale, setHeroScale] = useState<number>(1);
  const [heroBg, setHeroBg] = useState<string>("");
  const [isScrollBreak, setIsScrollBreak] = useState<boolean>(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollTo = (section: string) => {
    if (section === "home") {
      heroRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (section === "about") {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (section === "gallery") {
      galleryRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const breakStart = 400;
      const breakEnd = 1000;
      const heroHeight = heroRef.current?.offsetHeight || 0;
      const aboutStart = aboutRef.current!.offsetTop - 200 || 0;
      const galleryStart = galleryRef.current?.offsetTop || 0;
      const galleryEnd = galleryStart + (galleryRef.current?.offsetHeight || 0);
      let scaleIncrease: number = 0;

      if (scrollY < breakStart) {
        scaleIncrease = scrollY / 1000;
        setIsScrollBreak(false);
        setHeroBg(`rgba(17,17,17, 0)`);
        setHeaderTheme("light");
        setHeaderActive("home");
      } else {
        if (scrollY >= breakStart) {
          scaleIncrease =
            scrollY >= breakEnd
              ? (scrollY - (breakEnd - breakStart)) / 1000
              : breakStart / 1000;
          setIsScrollBreak(true);
          const opacity = Math.min(
            (scrollY - breakEnd) / ((heroHeight - breakEnd) * 0.75)
          );
          setHeroBg(`rgba(17,17,17,${opacity})`);

          if (scrollY >= heroHeight - 200) {
            setHeaderTheme("dark");
          } else {
            setHeaderTheme("light");
          }

          if (scrollY >= aboutStart && scrollY < galleryStart) {
            setHeaderActive("about");
          } else if (scrollY >= galleryStart && scrollY < galleryEnd) {
            setHeaderActive("gallery");
          } else {
            setHeaderActive("home");
          }
        }
      }

      const newScale = 1 + scaleIncrease;
      setHeroScale(newScale);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="scroll-smooth">
      <Header scrollTo={scrollTo} theme={headerTheme} active={headerActive} />
      <div ref={heroRef} className="relative h-[300vh] bg-light">
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          {isScrollBreak && (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute top-1/3 xs:top-40 sm:top-1/4 lg:top-1/4 xl:top-1/4 w-full flex justify-center"
            >
              <div className="text-[#3C3F3C]">
                <div className="flex items-center gap-3">
                  <p className="font-bold text-5xl md:text-7xl xl:text-8xl">
                    Computer
                  </p>
                  <p className="-rotate-12 w-16 md:w-20 xl:w-28 aspect-square rounded-full text-light bg-[#FF372A] flex items-center justify-center text-2xl md:text-4xl font-semibold">
                    25
                  </p>
                </div>
                <p className="font-bold text-5xl md:text-7xl xl:text-8xl ml-3">
                  Community
                </p>
              </div>
            </motion.div>
          )}
          <div
            className="absolute bottom-0 w-full flex justify-center"
            style={{ transform: `scale(${heroScale})` }}
          >
            <img
              src="/hero.webp"
              alt="UIB"
              className="w-1/2 xs3:w-1/3 md:w-1/5 xl:w-1/6"
              loading="eager"
            />
          </div>
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{ backgroundColor: heroBg }}
        ></div>
      </div>
      <AboutSection ref={aboutRef} />
      <ProgramSection />
      <PeopleSlide />
      <GallerySlide ref={galleryRef} />
      <Footer />
    </main>
  );
};

export default App;
