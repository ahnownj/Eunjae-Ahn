import { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Image from 'next/image';

const HeroSection = styled.section`
  min-height: 100vh;
  padding-top: 2rem;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const FullScreenImage = styled.div`
  width: 100%;
  max-width: 100vw;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  background: white;
  cursor: pointer;
`;

export default function Home() {
  const images = ["/img/IMG_4215.png", "/img/IMG_7266.png", "/img/IMG_9286.png", "/img/IMG_7033.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <Layout>
      <FullScreenImage onClick={toggleImage}>
        <Image
          src={images[currentIndex]}
          alt="Fullscreen Image"
          layout="intrinsic"
          width={1920}
          height={1080}
        />
      </FullScreenImage>
      <HeroSection>
        <HeroContent>
          {/* 아래로 스크롤되는 콘텐츠 예시 */}
          <p style={{ color: 'black' }}>
            아래로 스크롤 가능한 콘텐츠를 여기에 넣을 수 있어요!
          </p>
        </HeroContent>
      </HeroSection>
    </Layout>
  );
}
