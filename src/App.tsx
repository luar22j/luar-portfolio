import Background from "./components/Background";
import SocialMedia from "./components/SocialMedia";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <Background>
      <div className="flex flex-col items-center min-h-screen lg:px-[100px]">
        <div className="flex flex-col h-screen justify-center md:gap-[200px] gap-[100px]">
          <Profile />
          <SocialMedia />
        </div>
        <div className="flex flex-col items-center justify-center md:gap-[200px] gap-[100px]">
          <div className="flex lg:flex-row flex-col lg:gap-8 md:gap-[200px] gap-[100px]">
            <About />
            <Experience />
          </div>
          <Education />
          <Projects />
          <Footer />
        </div>
      </div>
    </Background>
  );
}

export default App;
