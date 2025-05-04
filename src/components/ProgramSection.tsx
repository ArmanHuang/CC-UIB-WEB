import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ProgramCardDescriptionProps {
  content: string;
}

const ProgramCardDescription: React.FC<ProgramCardDescriptionProps> = ({
  content,
}) => {
  const [text, setText] = useState(content);
  const [isFull, setIsFull] = useState(false);

  useEffect(() => {
    setText(isFull ? content : content.split(" ").slice(0, 60).join(" "));
  }, [content, isFull]);

  return (
    <div className="space-y-2">
      <p className="text-light text-sm xs2:text-base text-justify">
        {text}
        {content.split(" ").length > 60 && !isFull && " ..."}
      </p>
      {content.split(" ").length > 60 && (
        <div className="flex justify-end">
          <p
            className="w-fit text-sm text-light cursor-pointer"
            onClick={() => setIsFull(!isFull)}
          >
            {isFull ? "Read less" : "Read more"}
          </p>
        </div>
      )}
    </div>
  );
};

export const ProgramSection = () => {
  const [selectedYear, setSelectedYear] = useState<2024 | 2025>(2024);

  const cardStyle =
    "h-fit bg-gray-900 bg-opacity-70 rounded-2xl p-4 sm:p-6 md:p-8 space-y-4 hover:scale-[103%] transition-transform duration-300";
  const cardTitleStyle = "text-lg font-bold text-light";

  const programData: { [key in 2024 | 2025]: { title: string; content: string }[] } = {
    2024: [
      {
        title: "Basic Multimedia Class",
        content: "Pelatihan ini merupakan bentuk usaha untuk meningkatkan keterampilan individu dalam penggunaan alat dan teknik multimedia, mendorong kreativitas, meningkatkan produktivitas, mengembangkan pemahaman konsep multimedia, mempersiapkan untuk karir dalam bidang multimedia, dan menggunakan multimedia secara efektif untuk berbagai tujuan, dengan fokus pada pengalaman pengguna yang lebih baik serta perkembangan teknologi."
      },
      {
        title: "Basic Programming Class",
        content: "Pelatihan pemrograman Sitem informasi ini berfokus pada algoritma dan logika hal ini bertujuan untuk mengembangkan pemahaman mendalam tentang algoritma, meningkatkan kemampuan berpikir logis dan analitis, memperkuat kemampuan pemecahan masalah, meningkatkan efisiensi penulisan kode, memahami kompleksitas algoritma, mendukung persiapan untuk kompetisi pemrograman (jika relevan), mempersiapkan karir dalam pemrograman yang menekankan pemahaman algoritma, dan memberikan dasar teoritis yang kuat dalam pemrograman komputer."
      },
      {
        title: "Malam Keakraban",
        content: "Tujuan utama dari Makrab HMPS SI adalah mempererat hubungan antaranggota, membangun solidaritas, menyampaikan informasi, memberikan motivasi, memperluas jaringan, dan memberikan hiburan kepada anggota Himpunan Mahasiswa Program Studi Sistem Informasi."
      },
      {
        title: "Seminar/Webinar",
        content: "Seminar/webinar ini adalah untuk menyediakan platform untuk berbagi pengetahuan, memotivasi, dan mengedukasi anggota dan peserta mahasiswa prodi SI terkait dengan perkembangan, isu-isu, dan peluang dalam dunia teknologi informasi."
      },
      {
        title: "SI Internal Cup",
        content: "Memberikan kesempatan bagi mahasiswa untuk menunjukkan dan mengembangkan kemampuannya dalam bentuk lomba, serta memperluas jaringan relasi."
      }
    ],
    2025: [
      {
        title: "Webinar/Workshop Perkenalan SI Unlocking the Potential of Information Systems",
        content: "Program Seminar/Workshop Perkenalan Sistem Informasi (SI) bertujuan untuk meningkatkan pendalaman mahasiswa baru terkait dengan program studi Sistem Informasi (SI)."
      },
      {
        title: "CC Bootcamp.id",
        content: "Pada tahun 2024, CC Bootcamp.id berfokus pada pelatihan pemrograman dengan pendekatan hybrid yang menggabungkan sesi online dan offline. Tujuan utama dari program ini adalah untuk meningkatkan pemahaman mendalam peserta tentang algoritma dan logika, sambil memperkuat kemampuan pemecahan masalah dan efisiensi penulisan kode. Materi pelatihan disediakan dalam format yang dapat diakses ulang, memungkinkan peserta untuk mempelajari kembali dan mendalami topik sesuai kebutuhan mereka. Dengan menyediakan akses fleksibel ke materi dan sesi tatap muka, CC Bootcamp.id bertujuan untuk mempersiapkan peserta untuk kompetisi pemrograman dan karir di bidang pemrograman dengan cara yang lebih adaptif dan komprehensif dibandingkan dengan pelatihan offline penuh tahun lalu."
      },
      {
        title: "Workshop Perkenalan DKV & PSI",
        content: "Workshop Perkenalan DKV & PSI bertujuan untuk memperkenalkan peserta pada dasar-dasar Desain Komunikasi Visual (DKV) dan Pengembangan Sistem Informasi (PSI), serta meningkatkan keterampilan mereka dalam menggunakan alat dan teknik yang relevan dalam kedua bidang tersebut. Acara ini dirancang untuk mendorong kreativitas, meningkatkan pemahaman konsep DKV dan PSI, serta mempersiapkan peserta untuk karir yang sukses dengan memanfaatkan multimedia secara efektif. Fokus utama adalah pada pengembangan pengalaman pengguna yang optimal dan penyesuaian dengan tren serta teknologi terbaru di kedua bidang tersebut."
      },
      {
        title: "Makrab (malam keakraban)",
        content: "Tujuan utama dari Makrab HMPS SI adalah mempererat hubungan antaranggota, membangun solidaritas, menyampaikan informasi, memberikan motivasi, memperluas jaringan, dan memberikan hiburan kepada anggota Himpunan Mahasiswa Program Studi Sistem Informasi."
      },
      {
        title: "Baksos (Pelatihan Panti Asuhan)",
        content: "Bertujuan untuk meningkatkan kesadaran sosial dan rasa kepedulian mahasiswa terhadap masyarakat yang membutuhkan, khususnya melalui kegiatan pelatihan di sekolah dan bantuan kepada panti asuhan. Kegiatan ini bertujuan untuk memberikan edukasi serta pelatihan teknologi informasi kepada siswa sekolah, membekali mereka dengan keterampilan yang relevan di era digital. Selain itu, program ini juga berupaya meningkatkan kualitas hidup anak-anak di panti asuhan melalui bantuan material dan moral, serta memberikan dukungan pendidikan yang dapat membantu perkembangan mereka. Melalui kegiatan ini, diharapkan tercipta kerjasama yang baik antara mahasiswa dan masyarakat, sehingga dapat membangun relasi yang kuat dengan instansi seperti sekolah dan panti asuhan. Kegiatan ini juga bertujuan untuk menumbuhkan jiwa kepemimpinan, kerjasama, dan kerja tim di kalangan mahasiswa, membantu mereka mengembangkan karakter yang lebih baik dalam menghadapi tantangan di masa depan."
      },
      {
        title: "FIK CUP",
        content: "Memberikan kesempatan bagi mahasiswa untuk menunjukkan dan mengembangkan kemampuannya dalam bentuk lomba, serta memperluas jaringan relasi. Dimana pada tahun ini Tournament ini akan di selenggarakan collab dengan HMPS TI"
      },
      {
        title: "Artifest ",
        content:"Artifest yang diadakan oleh HMPS Program Studi Sistem Informasi dan Teknologi Informasi UIB bertujuan untuk mendorong kreativitas dan inovasi mahasiswa melalui wadah ekspresi seni dan teknologi. Acara ini diharapkan dapat meningkatkan keterampilan mahasiswa dalam bidang seni, desain, dan teknologi melalui berbagai kompetisi dan workshop, sekaligus memberikan pengalaman nyata dalam pengelolaan acara. Selain itu, Artifest bertujuan untuk mempererat relasi antar mahasiswa lintas program studi, dengan menumbuhkan kerja sama dalam acara seni dan budaya. Acara ini juga bertujuan untuk meningkatkan eksposur seni digital, menyoroti pentingnya seni dalam era teknologi informasi saat ini, serta memberikan kesempatan kepada mahasiswa untuk berjejaring dengan praktisi industri kreatif. Dengan demikian, Artifest diharapkan mampu menumbuhkan rasa apresiasi terhadap seni dan budaya, baik tradisional maupun modern, di kalangan mahasiswa dan masyarakat luas."
      }
    ]
  };

  return (
    <div className="w-full min-h-screen bg-grid-pattern bg-cover object-center">
      <div className="py-16 sm:py-20 md:py-28 space-y-14 sm:space-y-16 md:space-y-20">
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="font-bold text-6xl xs2:text-7xl lg:text-8xl xl:text-9xl text-center text-light"
        >
          Programs {selectedYear}
        </motion.p>
        
        {/* Year Selector */}
        <div className="flex justify-center gap-4 mb-4">
          {[2024, 2025].map((year) => (
            <button
              key={year}
              className={`px-4 py-2 rounded-full font-semibold ${
                selectedYear === year ? "bg-light text-dark" : "bg-white border border-light"
              }`}
              onClick={() => setSelectedYear(year as 2024 | 2025 )}
            >
              {year}
            </button>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
          className="px-4 xs3:px-8 sm:px-12 lg:px-36 xl:px-60 space-y-8 md:space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6"
        >
          {programData[selectedYear]?.map((program, index) => (
            <div key={index} className={cardStyle}>
              <h3 className={cardTitleStyle}>{program.title}</h3>
              <ProgramCardDescription content={program.content} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
