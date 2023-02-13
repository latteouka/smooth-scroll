import "./App.css";
import { Section } from "./components/Section";
import { useEffect, useRef } from "react";
import useWindowSize from "./utils/useWindowSize";
import Github from "./components/Github";

const skewConfigs = {
  ease: 0.07,
  current: 0,
  previous: 0,
  rounded: 0,
};

function App() {
  const size = useWindowSize();
  // ref
  const app = useRef<HTMLDivElement>(null);
  const scrollContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    requestAnimationFrame(() => scrolling());

    document.body.style.height = `${
      scrollContainer.current?.getBoundingClientRect().height
    }px`;
  }, [size.height]);

  const scrolling = () => {
    // smooth scrolling
    skewConfigs.current = window.scrollY;
    skewConfigs.previous +=
      (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;

    // variable for skew and scale
    const difference = skewConfigs.current - skewConfigs.rounded;
    const acceleration = difference / size.height;
    const velocity = acceleration;
    const skew = velocity * 5;

    // const scale = Math.max(1 + velocity / 2, 1);
    const scale = Math.min(1 + velocity / 7, 1);

    // apply transform
    scrollContainer.current!.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0) skewY(${skew}deg) scale(${scale})`;

    requestAnimationFrame(() => scrolling());
  };
  return (
    <div ref={app} className="App">
      <div ref={scrollContainer}>
        <Section className="section1" color="yellow">
          Section 1
        </Section>
        <Section className="section2" color="pink">
          Section 2
        </Section>
        <Section className="section3" color="blue">
          Section 3
        </Section>
        <Section className="section4" color="green">
          Section 4
        </Section>
        <Section className="section5" color="orange">
          Section 5
        </Section>
      </div>
      <Github />
    </div>
  );
}

export default App;
