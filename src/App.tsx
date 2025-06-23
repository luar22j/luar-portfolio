import Background from "./components/Background";
import SocialMedia from "./components/SocialMedia";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
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
                  <Projects />
                  <Footer />
                </div>
              </div>
            </Background>
          }
        />
        <Route
          path="/cv"
          element={
            <iframe
              src="/documents/luar-jaen-sole-cv.pdf"
              title="CV PDF"
              style={{ width: "100vw", height: "100vh", border: "none" }}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
