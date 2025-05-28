import Background from "./components/Background";
import SocialMedia from "./components/SocialMedia";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Background>
        <div className="flex flex-col items-center min-h-screen lg:px-[100px] gap-[100px]">
          <div className="flex flex-col h-screen -mt-2 justify-center md:gap-[200px] gap-[100px]">
            <Profile />
            <SocialMedia />
          </div>
          <div className="flex flex-col gap-[200px]">
            <About />
            <Experience />
            <Projects />
          </div>
          <Footer />
        </div>
      </Background>
    </>
  );
}

export default App;
