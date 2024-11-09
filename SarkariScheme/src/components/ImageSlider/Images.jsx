import Carousel from "./Carousel";

const slides = [
  "https://www.myscheme.gov.in/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F1-full.webp&w=3840&q=75",
  "https://www.myscheme.gov.in/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F2-full.webp&w=3840&q=75",
];

function Images() {
  return (
    <div>
      <Carousel autoslide={true}>
        {slides.map((slide, index) => ( // Add unique key to each img element
          <img key={index} src={slide} alt={`Slide ${index}`} />
        ))}
      </Carousel>
    </div>
  );
}

export default Images;
