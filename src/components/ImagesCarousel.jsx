import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import styled from "@emotion/styled";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const StyledImg = styled.img`
  width: 512px;
  height: 384px;
  object-fit: cover;
`;

const ImagesCarousel = ({ images }) => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={images.length}
      className="flex gap-xl"
    >
      <ButtonBack
        style={{
          border: "none",
          background: "none",
          fontSize: "24px",
        }}
      >
        <GrFormPrevious />
      </ButtonBack>
      <Slider style={{ width: "512px", height: " 384px " }}>
        {images.map((image, index) => (
          <Slide index={index} key={index}>
            <StyledImg src={image} />
          </Slide>
        ))}
      </Slider>

      <ButtonNext
        style={{
          border: "none",
          background: "none",
          fontSize: "24px",
        }}
      >
        <GrFormNext />
      </ButtonNext>
    </CarouselProvider>
  );
};

export default ImagesCarousel;
