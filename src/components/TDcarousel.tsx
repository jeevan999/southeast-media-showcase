import React, { useState, useEffect } from 'react';
import carouselAnimation from '@/assets/carousel-animation.jpg';
import carouselVfx from '@/assets/carousel-vfx.jpg';
import carouselAi from '@/assets/carousel-ai.jpg';

// --- Static CSS styles converted to a JS object for a simplified setup ---
const styles = {
  global: `
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background: #111;
      font-family: sans-serif;
      overflow: hidden; 
    }
  `,
  carouselContainer: {
    textAlign: 'center',
    width: '100%', 
  },
  carousel: {
    position: 'relative',
    width: '95vw',
    maxWidth: '1000px',
    height: '320px',
    margin: 'auto',
    perspective: '1000px',
  },
  cardBase: {
    position: 'absolute',
    top: '20px',
    left: '50%',
    width: '280px',
    height: '240px',
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    transition: 'all 0.5s ease',
    transformStyle: 'preserve-3d',
    boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    textShadow: '0 0 5px rgba(0,0,0,0.8)',
    padding: '15px',
    textAlign: 'center',
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '10px 0 5px',
  },
  cardSubtitle: {
    fontSize: '0.85rem',
    opacity: 0.9,
    margin: '5px 0',
    lineHeight: '1.3',
  },
  controls: {
    marginTop: '20px',
  },
};

// --- Transform definitions for clarity ---
// NOTE: These percentages are relative to the *increased* card width (350px)
const cardTransforms = {
  hidden: {
    transform: 'translateX(-50%) scale(0.6)', 
    opacity: 0,
    zIndex: 0,
  },
  active: {
    transform: 'translateX(-50%) scale(1.1) translateY(-10px)',
    opacity: 1,
    zIndex: 3,
  },
  left: {
    transform: 'translateX(-160%) rotateY(20deg) scale(0.8)',
    opacity: 0.6,
    zIndex: 2,
  },
  right: {
    transform: 'translateX(60%) rotateY(-20deg) scale(0.8)',
    opacity: 0.6,
    zIndex: 2,
  },
};

export const CardCarousel = () => {
  const cardData = [
    { id: 1, content: "Animation", subtitle: "Breathe life into your ideas with stunning 2D and 3D animations that captivate and engage audiences.", image: carouselAnimation },
    { id: 2, content: "VFX", subtitle: "Transform reality with cutting-edge visual effects that blur the line between imagination and reality.", image: carouselVfx },
    { id: 3, content: "AI Integration", subtitle: "Harness the power of artificial intelligence to create smarter, faster, and more innovative content.", image: carouselAi },
  ];
  const totalCards = cardData.length;

  const [currentIndex, setCurrentIndex] = useState(2);

  const getCardStyle = (index: number): React.CSSProperties => {
    let transformKey = 'hidden';

    if (index === currentIndex) {
      transformKey = 'active';
    } else if (index === (currentIndex - 1 + totalCards) % totalCards) {
      transformKey = 'left';
    } else if (index === (currentIndex + 1) % totalCards) {
      transformKey = 'right';
    }

    const imageUrl = cardData[index].image;
    
    return {
        ...styles.cardBase, 
        ...cardTransforms[transformKey],
        // Gradient overlay for better text contrast
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${imageUrl})`,
    } as React.CSSProperties;
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  useEffect(() => {
    document.body.style.cssText = styles.global;
    
    const intervalId = setInterval(() => {
      handleNext(); 
    }, 3000);

    return () => {
      document.body.style.cssText = '';
      clearInterval(intervalId);
    };
  }, [totalCards]); 


  return (
    <div style={styles.carouselContainer as React.CSSProperties}>
      <div style={styles.carousel as React.CSSProperties}>
        {cardData.map((card, index) => (
          <div
            key={card.id}
            style={getCardStyle(index)}
            className="card-item"
          >
            <p style={styles.cardTitle as React.CSSProperties}>
                {card.content}
            </p>
            <p style={styles.cardSubtitle as React.CSSProperties}>
                {card.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;