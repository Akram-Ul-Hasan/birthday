import { useEffect, useRef } from "react";
import img1 from "../src/assets/bd1.jpg";
import img2 from "../src/assets/bg2.jpg";
import lottie from "lottie-web";
import animationData from "../src/assets/bd1.json";
import animationData1 from "../src/assets/bd.json";
import Design from "./components/Design";
import { TypeAnimation } from "react-type-animation";

const App = () => {
  const containerRef = useRef(null);
  const container1Ref = useRef(null);
  const container2Ref = useRef(null);

  useEffect(() => {
    let anim = null;
    let anim1 = null;

    let anim2 = null;

    if (containerRef.current) {
      anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }
    if (container1Ref.current) {
      anim1 = lottie.loadAnimation({
        container: container1Ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData1,
      });
    }

    if (container2Ref.current) {
      anim2 = lottie.loadAnimation({
        container: container2Ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData1,
      });
    }

    if (anim) {
      anim.play();
    }
    if (anim1) {
      anim.play();
    }

    if (anim2) {
      anim2.play();
    }

    return () => {
      if (anim) {
        anim.destroy();
      }
      if (anim1) {
        anim1.destroy();
      }
      if (anim2) {
        anim2.destroy();
      }
    };
  }, []);

  const audioRef = useRef(null);

  const handleClick = () => {
    // Play the audio
    audioRef.current.play();

    // Scroll to the bottom of the page
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <div className="w">
      <div
        className="hero min-h-screen w-fit"
        style={{
          backgroundImage: `url(${img1})`,
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div className="flex items-center justify-evenly my-20">
              <div className="w-full" ref={container1Ref} />
              <h1 className=" text-2xl font-bold text-white">
                Happy Birthday To You My Love
              </h1>

              <div className="w-full" ref={container2Ref} />
            </div>
            <p className="mb-5 text-white w-full text-center">
              Happy Birthday to the most amazing, <br /> beautiful, and loving
              girlfriend <br /> in the world! <br />
              On this special day, <br /> I want to shower you <br /> with all
              the love, joy, <br /> and happiness you deserve.
            </p>
            <div>
              <button className="btn btn-outline" onClick={handleClick}>
                Click me
              </button>
              <audio autoPlay loop ref={audioRef}>
                <source src="/Romantic-Birthday.mp3" type="audio/mpeg" />
              </audio>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-96" ref={containerRef} />
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full h-[600px] bg-banner-bg bg-no-repeat bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${img2})`,
        }}
      >
        <div>
          <div className="flex justify-center items-center pt-80">
            <TypeAnimation
              sequence={[
                "You are my light and warmth, completing my heart.", // Types 'One'
                2000, // Waits 1s
                "Your love guides and heals me through life's challenges", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Your presence is a precious gift I cherish every day", // Types 'Three' without deleting 'Two'
                2000, // Waits 2s
                "You anchor and nourish my heart, giving me strength",
                2000,
                "You hold a special place no one else can fill",
                2000,
                "Your love is a remedy that soothes all pain",
                2000,
                "With you, I feel invincible and capable of anything",
                2000,
                "Your love transforms my world into magic",
                2000,
                "Being with you completes my soul",
                2000,
                "Your love brings peace and harmony to my life",
                2000,
                "You mend my brokenness and turn tears into smiles",
                2000,
                "Your presence is a beautiful blessing I'm grateful for",
                2000,
                () => {
                  console.log("Sequence completed");
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "2em", display: "inline-block" }}
            />
          </div>
          <Design></Design>
        </div>
      </div>
    </div>
  );
};

export default App;
