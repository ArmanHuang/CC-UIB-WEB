import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const AboutSlide = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const responsiveTransform = () => {
    const breakpoints = [
      { min: 400, max: 460, transform: ["3%", "-72%"] },
      { min: 460, max: 570, transform: ["4%", "-68%"] },
      { min: 570, max: 640, transform: ["5%", "-64%"] },
      { min: 640, max: 750, transform: ["5%", "-60%"] },
      { min: 750, max: 768, transform: ["6%", "-52%"] },
      { min: 768, max: 870, transform: ["6%", "-64%"] },
      { min: 870, max: 1024, transform: ["6%", "-58%"] },
      { min: 1024, max: 1280, transform: ["2%", "-64%"] },
      { min: 1280, max: 1536, transform: ["2%", "-62%"] },
      { min: 1536, max: 1920, transform: ["2%", "-54%"] },
      { min: 1920, max: 2560, transform: ["2%", "-42%"] },
    ];

    for (const { min, max, transform } of breakpoints) {
      if (windowWidth >= min && windowWidth < max) return transform;
    }

    return ["2%", "-76%"];
  };

  const x = useTransform(scrollYProgress, [0, 1], responsiveTransform());

  useEffect(() => {
    const onResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ x }}
          className="flex items-center gap-6 sm:gap-10 lg:gap-16 xl:gap-28"
        >
          <div className="flex-shrink-0 w-[300px] xs3:w-[360px] md:w-[380px] lg:w-[600px] xl:w-[780px] lg:ml-20 xl:ml-40 font-semibold text-2xl xs3:text-3xl md:text-4xl lg:text-5xl xl:leading-snug text-light text-opacity-60">
            Computer Community or CC UIB– is where computer enthusiasts come
            together to learn and innovate. We aspire to be share knowledge and
            be a professional.
          </div>
          <div className="flex-shrink-0 w-[320px] xs3:w-[360px] md:w-[500px] lg:w-[600px] xl:w-[700px] h-full">
            <img
              src="/makrab.jpg"
              alt="HMPS 2025"
              className="w-full h-full object-cover content-center"
            />
          </div>
          <div className="flex-shrink-0 w-[325px] md:w-[500px] lg:w-[600px] rounded-2xl bg-[#273DFF] bg-opacity-30 p-6 md:p-8 lg:p-9 xl:p-10 space-y-4 xs3:space-y-5 md:space-y-6">
            <div>
              <p className="font-semibold text-2xl md:text-3xl lg:text-4xl text-light text-opacity-60">
                HMPS
              </p>
              <p className="font-semibold text-2xl md:text-3xl lg:text-4xl text-light">
                Visi
              </p>
            </div>
            <p className="text-light text-justify md:text-lg lg:text-2xl xl:text-3xl">
            Menjadikan HMPS SI sebagai organisasi mahasiswa yang adaptif, kolaboratif, dan berprestasi di era transformasi digital yang berkembang sangat pesat ini, dengan membekali mahasiswa SI dengan kompetensi dan karakter yang unggul, serta mempersiapkan mereka untuk berkontribusi secara aktif dalam pengembangan akademik dan non-akademik.
            </p>
          </div>
          <div className="flex-shrink-0 w-[350px] md:w-[520px] lg:w-[640px] rounded-2xl bg-[#273DFF] bg-opacity-60 p-6 md:p-8 lg:p-9 xl:p-10 space-y-4 xs3:space-y-5 md:space-y-6">
            <div>
              <p className="font-semibold text-2xl md:text-3xl lg:text-4xl text-light text-opacity-60">
                HMPS
              </p>
              <p className="font-semibold text-2xl md:text-3xl lg:text-4xl text-light">
                Misi
              </p>
            </div>
            <p className="text-light text-justify md:text-lg lg:text-2xl xl:text-3xl space-y-2">
            Misi HMPS SI adalah mempererat keharmonisan dan komunikasi antar anggota, menampung aspirasi kreatif dan inovatif, membentuk komunitas aktif dalam kegiatan organisasi dan perlombaan, menyelenggarakan pelatihan teknologi dan keterampilan digital, serta meningkatkan kolaborasi antar organisasi melalui event dan program pengembangan soft skills.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
