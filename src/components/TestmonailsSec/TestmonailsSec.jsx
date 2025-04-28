
import { useState, useEffect } from "react";
import CardTestmonails from "../CardTestmonails/CardTestmonails";
import TitleComponent from "../TitleComponent/TitleComponent";
import { TestmonailData } from "../../data/TestmonailData";
import "./TestmonailsSec.css";

const TestmonailsSec = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(window.innerWidth <= 1100 ? 1 : 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev < TestmonailData.length - cardsToShow ? prev + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : TestmonailData.length - cardsToShow
    );
  };

  const getVisibleCards = () => {
    return TestmonailData.slice(currentIndex, currentIndex + cardsToShow);
  };

  return (
    <section className="testmonails-sec px-168 m-bottom">
      <TitleComponent
        desc1="Their Happy Words 🤗"
        title="Our Testimonials"
        desc2="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
      />

      <div className="testimonial-slider-container">
        <button onClick={prevSlide} className="nav-btn prev-btn">
          <img src="/assets/imgs/Vector(Stroke).svg" alt="Previous" />
        </button>

        <div className="testimonial-slider m-bottom">
          {getVisibleCards().map((testimonial, index) => (
            <CardTestmonails
              key={index}
              name={testimonial.name}
              text={testimonial.text}
              image={testimonial.image}
            />
          ))}
        </div>

        <div className="buttons-wrap">
          <button onClick={prevSlide} className="nav-btn prev-btn2">
            <img src="/assets/imgs/Vector(Stroke).svg" alt="Previous" />
          </button>

          <button onClick={nextSlide} className="nav-btn next-btn2">
            <img src="/assets/imgs/Vector(Stroke)(1).svg" alt="Next" />
          </button>
        </div>

        <button onClick={nextSlide} className="nav-btn next-btn">
          <img src="/assets/imgs/Vector(Stroke)(1).svg" alt="Next" />
        </button>
      </div>
    </section>
  );
};

export default TestmonailsSec;
