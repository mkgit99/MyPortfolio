import Image from '../../assets/home-image.svg';
import { HeroContainer, HeroBg, ImageAnim } from './HeroElements';

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <ImageAnim src={Image} alt="Hero main animation"></ImageAnim>
      </HeroBg>
    </HeroContainer>
  );
};

export default HeroSection;
