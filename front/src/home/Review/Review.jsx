
import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import {Marginer}  from "../../components/marginer";
import { Reviewcard } from "../../components/reviewCard";
import { SectionTitle } from "../../components/sectionTitle";
import Assets from "../../assets/index.js"
import IMG1 from "../../assets/bk.png"
import IMG2 from "../../assets/profile1.jpg"
import IMG3 from "../../assets/profile.jpg"
import IMG4 from "../../assets/bk.png"
import "pure-react-carousel/dist/react-carousel.es.css";


const ReviewsContainer = styled(Element)`
  height: 700px;
 display: flex;
  flex-direction: column;
  align-items: center;
  
  
`;

const StyledCarouselProvider = styled(CarouselProvider)`
  width: 60%;

  @media screen and (max-width: 960px) {
    width: 95%;
  }
`;

const StyledSlide = styled(Slide)`
  .carousel__inner-slide {
    display: flex;
    justify-content: center;
  }

  
  
 
`;

const StyledDotGroup = styled(DotGroup)`
  margin: auto;
  display: flex;
  justify-content: center;
  button {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #cc9898;
    border: none;
    outline: none;
    &:not(:last-of-type) {
      margin-right: 3px;
    }
  }

  .carousel__dot--selected {
    background-color: #3a3737;
  }
`;

export function Review(props) {
 
  return (
    <ReviewsContainer>
          <Marginer direction="vertical" margin="1em" />
      <SectionTitle>What others are saying about us</SectionTitle>
      <Marginer direction="vertical" margin="2em" />
      <StyledCarouselProvider
        naturalSlideWidth={170}
        naturalSlideHeight={ 190}
        totalSlides={4}
        visibleSlides={ 2}
        dragEnabled={false}
      >
        <Slider>
          <StyledSlide index={0}>
            <Reviewcard
              reviewText="አስኳላ የማጠናክሪያ ት/ቤት በመግባቴ በጣም ደስተጝ ነኘ፣ አስኳላ ትምርቴን ቀላል አና ግልት ኣድርጎልኝኣል፥ልዩ መምህራንን አና ግዙፍ የተግባር ክፍሎችም ኣሉት,  "
              username="Biruk ashagri"
              userImgUrl={IMG1}
            />
          </StyledSlide>
          <StyledSlide index={1}>
            <Reviewcard
              reviewText=" አስኳላ የማጠናክሪያ ት/ቤት በመግባቴ በጣም ደስተጝ ነኘ፣ አስኳላ ትምርቴን ቀላል አና ግልት ኣድርጎልኝኣል፥ልዩ መምህራንን አና ግዙፍ የተግባር ክፍሎችም ኣሉት , "
              username="selomon kahan"
              userImgUrl={IMG2}
            />
          </StyledSlide>
          <StyledSlide index={2}>
            <Reviewcard
              reviewText=" I very gratfull for joining askuall school,it just made education simple and clear with amazing teachers and practical classes."
              username="semira kebede"
              userImgUrl={IMG3}
            />
          </StyledSlide>
          <StyledSlide index={3}>
            <Reviewcard
              reviewText=" አስኳላ የማጠናክሪያ ት/ቤት በመግባቴ በጣም ደስተጝ ነኘ፣ አስኳላ ትምርቴን ቀላል አና ግልት ኣድርጎልኝኣል፥ልዩ መምህራንን አና ግዙፍ የተግባር ክፍሎችም ኣሉት, "
              username="bulcha gebeyehu"
              userImgUrl={IMG4}
            />
          </StyledSlide>
        </Slider>
        <StyledDotGroup />
      </StyledCarouselProvider>
    </ReviewsContainer>
  );
}
export default Review;