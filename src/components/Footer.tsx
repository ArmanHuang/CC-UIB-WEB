export const Footer = () => {
  return (
    <footer className="bg-dark pt-40">
      <div className="w-full h-12 xs:h-14 bg-light bg-opacity-10"></div>
      <div className="w-full h-12 xs:h-14 bg-light bg-opacity-40"></div>
      <div className="w-full h-12 xs:h-14 bg-light bg-opacity-80"></div>
      <div className="w-full bg-light px-4 md:px-16 lg:px-20 xl:px-32 py-4 md:py-8 lg:py-12 xl:py-20 space-y-4 relative text-dark md:grid md:grid-cols-2 items-center">
        <p className="w-full font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          Join Us!
        </p>
        <div className="w-full grid grid-cols-2">
          <ul className="text-sm font-semibold sm:text-base xl:text-lg">
            <li>
              <a href="https://www.instagram.com/cc.uib" target="_blank">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/cc.uib" target="_blank">
                Contact Us
              </a>
            </li>
            <li>
              <a href="https://www.uib.ac.id/" target="_blank">
                UIB Website
              </a>
            </li>
          </ul>
          <p className="text-sm font-semibold sm:text-base xl:text-lg">
            Baloi-Sei Ladi, Jl. Gajah Mada, Tiban Indah, Kec. Sekupang, Kota
            Batam, Kepulauan Riau 29426
          </p>
        </div>
        <button
          className="absolute top-2 right-6 w-8 lg:w-12 aspect-square border-2 border-[#FF372A] bg-[#FF372A] bg-opacity-20 rounded-full text-xl text-[#FF372A] font-black"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          &uarr;
        </button>
      </div>
    </footer>
  );
};
