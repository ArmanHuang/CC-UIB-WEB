import { forwardRef } from "react";
import { motion } from "framer-motion";
import { AboutSlide } from "./AboutSlide";

export const AboutSection = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="min-h-screen bg-dark flex flex-col" ref={ref}>
      <div className="flex items-center justify-center pt-24 md:pt-32 lg:pt-44">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-light"
        >
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            <p className="font-bold text-5xl xs3:text-6xl sm:text-7xl lg:text-8xl">
              Computer
            </p>
            <p className="-rotate-12 w-16 md:w-20 xl:w-28 aspect-square rounded-full bg-[#FF372A] flex items-center justify-center text-2xl md:text-4xl font-semibold">
              25
            </p>
          </div>
          <p className="font-bold text-5xl xs3:text-6xl sm:text-7xl lg:text-8xl ml-3">
            Community
          </p>
        </motion.div>
      </div>
      <AboutSlide />

      {/* DEVNOTE: old slide div, delete it soon */}
      {/* <div className="h-full md:w-[90vw] xl:w-[85vw] md:ml-auto px-4 md:px-0 snap-y overflow-y-auto md:overflow-y-hidden space-y-6 md:space-y-0 md:flex md:snap-x md:overflow-x-auto md:gap-10">
        <div className="md:flex-shrink-0 md:w-[380px] lg:w-[600px] xl:w-[780px] md:flex snap-center font-semibold text-2xl md:text-4xl lg:text-5xl xl:leading-snug text-light text-opacity-60">
          Computer Community or CC UIB– is where computer enthusiasts come
          together to learn and innovate. We aspire to be share knowledge and be
          a professional.
        </div>
        <div className="md:flex-shrink-0 md:flex md:w-[500px] lg:w-[600px] xl:w-[700px] snap-start">
          <img
            src="https://dummyimage.com/hd1080"
            alt="Dummy Image"
            className="w-full h-full object-cover content-center"
          />
        </div>
        <div className="md:flex-shrink-0 md:w-[500px] lg:w-[600px] snap-center rounded-2xl bg-[#273DFF] bg-opacity-30 p-6 space-y-4">
          <div>
            <p className="font-semibold text-3xl lg:text-4xl text-light text-opacity-60">
              HMPS
            </p>
            <p className="font-semibold text-3xl lg:text-4xl text-light">
              Visi
            </p>
          </div>
          <p className="text-light text-lg text-justify lg:text-xl  xl:text-2xl">
            Membangun HMPS SI menjadi sebuah organisasi yang mampu bekerja sama,
            mandiri, bertanggung jawab, kritis, serta menjadi wadah sebagai
            ikatan antar mahasiswa untuk mencapai keunggulan akademik dan
            non-akademik dalam era transformasi digital.
          </p>
        </div>
        <div className="md:flex-shrink-0 md:w-[500px] lg:w-[600px] snap-center rounded-2xl bg-[#273DFF] bg-opacity-60 p-6 space-y-4">
          <div>
            <p className="font-semibold text-3xl lg:text-4xl text-light text-opacity-60">
              HMPS
            </p>
            <p className="font-semibodl text-3xl lg:text-4xl text-light">
              Misi
            </p>
          </div>
          <p className="text-light text-lg text-justify lg:text-xl xl:text-2xl">
            Meningkatkan kolaborasi antar mahasiswa dalam kerja sama. Membentuk
            organisasi yang transparan dan bertanggung jawab dalam melaksanakan
            tugas dan kegiatan. Menginspirasi setiap anggota organisasi untuk
            memiliki jiwa mandiri yang kreatif dan berpikiran kritis.
          </p>
        </div>
      </div> */}
    </div>
  );
});
