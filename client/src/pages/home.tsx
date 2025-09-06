import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { GraffitiBox } from "@/components/graffiti-box";
import { CountdownTimer } from "@/components/countdown-timer";
import { PokemonGame } from "@/components/pokemon-game";
import { Timeline } from "@/components/timeline";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo.png";
import flyImage from "../assets/fly.png";
import cseaImage from "../assets/csea.png";
import kecImage from "../assets/kec.png";
import idImage from "../assets/id.png";
import oneLegImage from "../assets/one-leg.png";
import devTeamImage from "../assets/dev-team.png";
import devTeam2Image from "../assets/dev-team2.png";
import GradualBlur from "@/components/GradualBlur";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollCount, setScrollCount] = useState(0);
  const [showSideQuest, setShowSideQuest] = useState(false);
  const [flyOffset, setFlyOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setFlyOffset(window.scrollY * 0.4);
    };
    window.addEventListener("scroll", handleScroll);

    let lastScrollY = 0;
    let scrollDirection = "";
    let lastDirection = "";

    const handleScrollCount = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) scrollDirection = "down";
      else scrollDirection = "up";
      if (
        scrollDirection !== lastDirection &&
        Math.abs(currentScrollY - lastScrollY) > 100
      ) {
        setScrollCount((prev) => {
          const newCount = prev + 1;
          if (newCount >= 3) setShowSideQuest(true);
          return newCount;
        });
        lastDirection = scrollDirection;
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScrollCount);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollCount);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Events", id: "events" },
    { label: "Contact Us", id: "contact" },
  ];

  const teamMembers = [
    { name: "Prasanndh Raju M R", role: "Secretary (CSEA)", number: "9876543210" },
    { name: "Samvardhini D", role: "Treasurer (CSEA)", number: "9876543210" },
    { name: "Pravin S", role: "Joint Secretary (CSEA)", number: "9876543210" },
    { name: "Divya K", role: "Secretary (CCC)", number: "9876543210" },
    { name: "Ragulandiran M", role: "Treasurer (CCC)", number: "9876543210" },
    { name: "Varshini S", role: "Joint Secretary (CCC)", number: "9876543210" },
  ];

  return (
    <div className="max-w-screen mx-auto">
      {/* Navigation */}
  <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-primary p-4">
  <div className="container mx-auto px-4 flex justify-between items-center">
         <img
            src={logo}
            alt="R2K25 Logo"
            className="h-20 w-auto object-contain"
          />
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nav-item px-4 py-2 font-semibold hover:text-primary-foreground"
              >
                {item.label}
              </button>
            ))}
            <Button className="nav-item bg-primary text-primary-foreground px-6 py-2 font-bold hover:bg-primary/90">
              Register
            </Button>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden nav-item px-3 py-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left nav-item px-4 py-2 font-semibold hover:text-primary-foreground"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://your-form-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="w-full nav-item bg-primary text-primary-foreground px-4 py-2 font-bold hover:bg-primary/90 mt-2">
                Register
              </Button>
            </a>
          </div>
        )}
      </nav>

      <GradualBlur
        target="page"
        position="top" // or "top"/"both" depending on effect
        height="9rem"
        strength={1}
        divCount={6}
        curve="bezier"
        exponential={true}
        opacity={0.2}
        animated={true}
        zIndex={9998}
      />
      <GradualBlur
        target="page"
        position="bottom" // or "top"/"both" depending on effect
        height="8rem"
        strength={1.5}
        divCount={6}
        curve="bezier"
        exponential={true}
        opacity={0.3}
        animated={true}
        zIndex={9998}
      />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden py-20 px-4"
      >
        <div className="text-center z-10">
          <div className="w-full flex justify-center -mt-10 mb-3 px-3">
            <img
              src={logo}
              alt="R2K25 Logo"
              className="w-full max-w-4xl h-auto object-contain"
            />
          </div>
          <CountdownTimer />
          <h1 className="title-font text-3xl sm:text-4xl md:text-6xl mt-8 mb-4 text-primary transform -rotate-1">
            20th September 2025
          </h1>
        </div>

        {/* Fly with parallax */}
        <div
          className="absolute z-0 pointer-events-none"
          style={{
            bottom: `calc(5vh + ${flyOffset}px)`,
            right: "5vw",
            width: "40vw",
            maxWidth: "300px",
            height: "auto",
          }}
        >
          <img src={flyImage} alt="Fly" className="w-full h-auto object-contain" />
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4 relative max-w-screen-lg mx-auto">
        {/* Random floating images */}
        <div
          className="absolute z-0 pointer-events-none"
          style={{
            bottom: `calc(50vh + ${flyOffset}px)`,
            left: "5vw",
            width: "30vw",
            maxWidth: "200px",
            height: "auto",
          }}
        >
          <img
            src={oneLegImage}
            alt="Fly"
            className="w-full h-auto object-contain"
          />
        </div>
        <h2 className="title-font text-3xl sm:text-4xl md:text-6xl text-center mb-16 text-primary transform -rotate-1">
          About Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-4 md:px-0">
          {/* About CSEA */}
          <GraffitiBox>
            <div className="w-full h-24 rounded-lg mb-4 flex items-center justify-center border-2 border-dashed border-red-400 overflow-hidden">
              <img src={cseaImage} alt="CSEA" className="w-full h-full object-contain" />
            </div>
            <h3 className="title-font text-2xl mb-4 text-primary">About CSEA</h3>
            <p className="content-font text-black leading-relaxed">
              The department of Computer Science and Engineering holding nearly 700 students has been successfully achieving its goal of identifying and appreciating the unique talents. The department is constantly striving to provide the best acadimecs to empower the practical knowledge of students so as to meet the changing industrial needs. The department brings out world class professionals in the field of computer science. After getting the autonomous status, the syllabus was made more advanced so that students came to know more about the latest cutting edge technologies.
            </p>
          </GraffitiBox>

          {/* About Renaissance */}
          <GraffitiBox>
            <div className="w-full h-24 rounded-lg mb-4 flex items-center justify-center border-2 border-dashed border-red-400 overflow-hidden">
              <img src={logo} alt="Renaissance" className="w-full h-full object-contain pt-2 pb-2" />
            </div>
            <h3 className="title-font text-2xl mb-4 text-primary">About Renaissance</h3>
            <p className="content-font text-black leading-relaxed">
              Renaissance is CSEA's flagship annual symposium ...
            </p>
          </GraffitiBox>

          {/* About KEC */}
          <GraffitiBox>
            <div className="w-full h-24 rounded-lg mb-4 flex items-center justify-center border-2 border-dashed border-red-400 overflow-hidden">
              <img src={kecImage} alt="KEC" className="w-full h-full object-contain" />
            </div>
            <h3 className="title-font text-2xl mb-4 text-primary">About KEC</h3>
            <p className="content-font text-black leading-relaxed">
              Kongu Engineering College affiliated to Anna University is located in Perundurai,Erode. It is accredited 'A' grade by National Assessment Accreditation Council.Over the past 40 years the instituton with its good infrastructure facility and excellent academic records has emerged as a center of excellence.The college with its quality education and peaceful environment provides continuous improvement and confidence for the students to face the real world challenges and mould their future.
            </p>
          </GraffitiBox>
        </div>
      </section>

      {/* Events Timeline */}
      <Timeline />

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 bg-muted/50 relative max-w-screen-lg mx-auto"
      >
        <div
          className="absolute z-0 pointer-events-none hidden sm:block"
          style={{
            bottom: `calc(30vh + ${flyOffset}px)`,
            left: "50vw",
            width: "20vw",
            maxWidth: "300px",
            height: "auto",
          }}
        >
          <img src={idImage} alt="Fly" className="w-full h-auto object-contain" />
        </div>
        <h2 className="title-font text-3xl sm:text-4xl md:text-6xl text-center mb-16 text-primary transform -rotate-1">
          Contact Us
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="sticker-card p-4 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full mb-2 mx-auto flex items-center justify-center border-2 border-dashed border-red-400">
                <div className="text-center text-white">
                  <div className="text-lg">👤</div>
                </div>
              </div>
              <div className="content-font font-bold text-sm">{member.name}</div>
              <div className="content-font text-xs text-muted-foreground">{member.role}</div>
              <div className="content-font text-xs text-muted-foreground">{member.number}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Side Quest Pokemon Game */}
      {showSideQuest && <PokemonGame />}

      {/* Footer */}
<footer className="relative bg-orange-50 text-black py-8 flex flex-col items-center overflow-hidden w-full">
        {/* Background GIF */}
        <div
          className="absolute inset-0 bg-center bg-cover opacity-10"
          style={{
            backgroundImage:
              "url('https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3gxMnRoMjBjYTN2bjE4eWFtbW42cHZtZ3A0dm84bW84YTNkNjZqZSZlcD12MV9faW50ZXJuYWxfZ2lmX2J5X2lkJmN0PWc/ynOdjXhKDFC2OUOaKx/giphy.gif')",
          }}
        ></div>

        {/* Content Wrapper (z-index so it's above the bg) */}
        <div className="relative z-10 container mx-auto flex flex-col space-y-12 sm:space-y-16 px-4 sm:px-0">
          {/* Senior Devs - Image Left, Content Right */}
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
            <img
              src={devTeamImage}
              alt="Senior Dev Team"
              className="w-full max-w-xl h-auto object-contain mb-6 md:mb-0"
            />
            <p className="content-font text-lg text-black text-center md:text-left">
  Developed by 
  <a href="https://www.linkedin.com/in/varunkumarn636/" target="_blank" rel="noopener noreferrer">Varun Kumar N</a>, 
  <a href="https://www.linkedin.com/in/yugabharathi21/" target="_blank" rel="noopener noreferrer">Yugabharathi J</a>, 
  <a href="https://www.linkedin.com/in/sweda-elangovan-274664320/" target="_blank" rel="noopener noreferrer">Sweda E</a>
</p>

          </div>

          {/* Junior Devs - Content Left, Image Right */}
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 md:flex-row-reverse">
            <img
              src={devTeam2Image}
              alt="Junior Dev Team"
              className="w-full max-w-xl h-auto object-contain mb-6 md:mb-0"
            />
           <p className="content-font text-lg text-black text-center md:text-left">
  Junior Devs: 
  <a href="https://www.linkedin.com/in/mithilesh-b-r-120b58363/" target="_blank" rel="noopener noreferrer">Mithilesh</a>
  <a href="https://www.linkedin.com/in/vishnuvardhankp/" target="_blank" rel="noopener noreferrer">Vishnuvardhan</a>
</p>

          </div>

          {/* Footer Title */}
          <div className="text-center mt-10">
            <span className="title-font text-2xl sm:text-3xl text-white opacity-50">
              kamala kannan is the name
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}