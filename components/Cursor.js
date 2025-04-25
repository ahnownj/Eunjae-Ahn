import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const Cursor = styled.div`
  font-size: 90px;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
`;

const CustomCursor = () => {
  const [positions, setPositions] = useState([]);
  const [emojis, setEmojis] = useState([]);
  const emojiIndexRef = useRef(0);

  useEffect(() => {
    // 동물 이모지 자동 가져오기
    const fetchEmojis = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/amio/emoji.json/master/emoji.json');
        const data = await response.json();
        const animalEmojis = data
          .filter(emoji => emoji.category.includes('animal'))
          .map(emoji => emoji.char);
        setEmojis(animalEmojis);
      } catch (error) {
        console.error('이모지 데이터를 불러오는 중 오류 발생:', error);
      }
    };
    
    fetchEmojis();
  }, []);

  useEffect(() => {
    let timer;
    const onMouseMove = (e) => {
      if (!timer && emojis.length > 0) {
        timer = setTimeout(() => {
          setPositions(prev => {
            const randomIndex = Math.floor(Math.random() * emojis.length);
            const newPositions = [...prev, { 
              x: e.clientX, 
              y: e.clientY,
              emoji: emojis[randomIndex]
            }];
            emojiIndexRef.current = randomIndex;
            if (newPositions.length > 10) {
              return newPositions.slice(1);
            }
            return newPositions;
          });
          timer = null;
        }, 200);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [emojis]);

  return (
    <>
      {positions.map((pos, index) => (
        <Cursor
          key={index}
          style={{ transform: `translate(${pos.x - 12}px, ${pos.y - 12}px)` }}
        >
          {pos.emoji}
        </Cursor>
      ))}
    </>
  );
};

export default CustomCursor;