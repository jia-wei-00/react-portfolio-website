import React from "react";
import styled from "styled-components";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";
import { Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVATAR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    avatar: AVATAR2,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    avatar: AVATAR3,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    avatar: AVATAR4,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <TestimonialsContainer className="container">
        <Swiper
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {data.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <Testimonial>
                  <div>
                    <img src={data.avatar} alt="Avatar" />
                  </div>
                  <h5>{data.name}</h5>
                  <small>{data.review}</small>
                </Testimonial>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </TestimonialsContainer>
    </section>
  );
};

export default Testimonials;

const TestimonialsContainer = styled.div`
  width: 35%;

  & > :first-child {
    padding-bottom: 4rem;
  }

  .swiper-pagination-clickable .swiper-pagination-bullet {
    background: var(--color-primary);
  }

  @media screen and (max-width: 1024px) {
    width: 60%;
  }

  @media screen and (max-width: 600px) {
    width: var(--container-width-sm);
  }
`;

const Testimonial = styled.article`
  background: var(--color-bg-variant);
  text-align: center;
  padding: 2rem;
  border-radius: 2rem;
  user-select: none;

  & > :first-child {
    width: 4rem;
    aspect-ratio: 1/1;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto 1rem;
    border: 0.4rem solid var(--color-primary-variant);
  }

  & > small {
    color: var(--color-light);
    font-weight: 300;
    display: block;
    width: 80%;
    margin: 0.8rem auto 0;
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 600px) {
    & > small {
      width: var(--container-width-sm);
    }
  }
`;
