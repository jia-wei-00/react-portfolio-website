import React from "react";
import styled from "styled-components";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Final Year Project Mobile Game",
    preview: "https://jia-wei-00.github.io/Web-Resume/#/tridemic",
    demo: "https://jiawei01.itch.io/tridemic",
  },
  {
    id: 2,
    image: IMG2,
    title: "GameFi Project",
    demo: "https://jia-wei-00.github.io/blockchain/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Tesla Clone",
    demo: "https://jia-wei-00.github.io/tesla-clone/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Linkedin Clone",
    demo: "https://jia-wei-00.github.io/linkedin-clone/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Old Portfolio",
    demo: "https://jia-wei-00.github.io/Web-Resume/",
  },
  {
    id: 6,
    image: IMG6,
    title: "PHP Assessment",
    password: "(Username/Password: admin)",
    demo: "https://webproject1321.000webhostapp.com/index.php",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <PortfolioContainer className="container">
        {data.map((data, index) => {
          return (
            <PortfolioItem key={index}>
              <div>
                <img src={data.image} alt="" />
              </div>
              <h3>{data.title}</h3>
              {data.password && (
                <small className="text-light">{data.password}</small>
              )}
              <PortfolioItemCta>
                {data.preview && (
                  <a href={data.preview} target="_blank" className="btn">
                    Preview
                  </a>
                )}
                <a href={data.demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </PortfolioItemCta>
            </PortfolioItem>
          );
        })}
      </PortfolioContainer>
    </section>
  );
};

export default Portfolio;

const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const PortfolioItem = styled.article`
  background: var(--color-bg-variant);
  padding: 1.3rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);

  &:hover {
    border-color: var(--color-primary-variant);
    background: transparent;
  }

  & > h3 {
    margin: 1.2rem 0 0;
  }

  & > :first-child {
    border-radius: 1.5rem;
    overflow: hidden;
  }
`;

const PortfolioItemCta = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  & > a {
    margin-top: 2rem;
  }
`;
