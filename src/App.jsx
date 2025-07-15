import AboutSection from "./components/AboutSection";
import ContactTabs from "./components/ContactTabs";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import TechSection from "./components/TechSection";

function App() {
    return (
        <div className="isolate">
            <div className="main-wrapper min-h-dvh mx-auto w-full max-w-[1000px] text-slate-300 font-poppins">
                {/* header section  */}
                <Header />

                <div className="-translate-y-[60px]">
                    <HeroSection />
                    {/* <ContactTabs /> */}
                    <AboutSection />
                    <ProjectsSection />
                    <TechSection />
                </div>
            </div>

            <footer className="py-8 border-t border-neutral-900 flex justify-center text-neutral-300 backdrop-blur-md bg-neutral-950/15">
                <small>Rael De Vera@2025</small>
            </footer>

            <div className="fixed bottom-0 left-0 w-full -z-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="rgb(50,50,50,.10)"
                        fillOpacity="0.9"
                        d="M0,160L16,160C32,160,64,160,96,181.3C128,203,160,245,192,266.7C224,288,256,288,288,250.7C320,213,352,139,384,144C416,149,448,235,480,250.7C512,267,544,213,576,186.7C608,160,640,160,672,181.3C704,203,736,245,768,266.7C800,288,832,288,864,288C896,288,928,288,960,272C992,256,1024,224,1056,218.7C1088,213,1120,235,1152,229.3C1184,224,1216,192,1248,149.3C1280,107,1312,53,1344,58.7C1376,64,1408,128,1424,160L1440,192L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"
                    ></path>
                </svg>
            </div>
        </div>
    );
}

export default App;
