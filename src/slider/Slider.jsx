import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";

// Define your slider data here (you can import this from a data.js file)
const sliderItems = [
  {
    id: 1,
    img: "https://colorlib.com/wp/wp-content/uploads/sites/2/1_best-portfolio-websites.jpg.webp",
    title: "Personal Portfolio Website",
    desc: "Personal",
    bg: "f5fafd",
  },
  {
    id: 2,
    // img: "https://colorlib.com/wp/wp-content/uploads/sites/2/1_best-portfolio-websites.jpg.webp",
    img: "https://alvarotrigo.com/blog/assets/imgs/2021-11-20/aralani-photography-website.jpeg",
    title: "Professional Portfolio Website",
    desc: "Being professional",
    bg: "fcf1ed",
  },
  {
    id: 3,
    img: "https://colorlib.com/wp/wp-content/uploads/sites/2/7_best-portfolio-websites.jpg.webp",
    title: "E-commerce Portfolio Website",
    desc: "Ecommerce Websites",
    bg: "fbf0f4",
  },
];

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row; 
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  ${(props) => props.direction === "left" && "left: 10px;"}
  ${(props) => props.direction === "right" && "right: 10px;"}
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} alt={item.title} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>USE NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
