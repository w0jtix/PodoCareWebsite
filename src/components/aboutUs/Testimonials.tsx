import { useMemo } from "react";
import { testimonialData } from "../../data/testimonials";
import { useCarouselTouch } from "../hooks/useCarouselTouch";
import { balancedShuffle } from "../utlis/balancedShuffle";
import star from "../../assets/google-star.svg"
import booksyIcon from "../../assets/booksy.png"
import googleIcon from "../../assets/google.png"

export function Testimonials () {

  const randomizedTestimonials = useMemo(() => {
    return balancedShuffle(testimonialData, 2);
  }, []);

  const extendedTestimonials = [
    ...randomizedTestimonials,
    ...randomizedTestimonials,
  ];

  const {
    trackRef,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onMouseEnter,
    onMouseLeave,
  } = useCarouselTouch(randomizedTestimonials.length, 392, 1);


  const sourceIcons: Record<string, string> = {
    google: googleIcon,
    booksy: booksyIcon
  }

  return (
    <section
      className="testimonials flex relative width-max align-items-center"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div ref={trackRef} className="testimonials-track flex">
        {extendedTestimonials.map((testimonial, index) => (
          <div
            key={`testimonial-${index}`}
            className={`testimonial-card flying flex-column space-between relative height-fit-content bounce-${
              (index % 3) + 1
            }`}
          >
            <p className="testimonial-text m-0">{testimonial.text}</p>
            <div className="flex space-between">
              <img
                className="testimonial-source-img border-radius-half"
                src={sourceIcons[testimonial.source.toLowerCase()]}
                alt="Review Source"
              ></img>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <img
                    key={starIndex}
                    className="star-img"
                    src={star}
                    alt="Star"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
