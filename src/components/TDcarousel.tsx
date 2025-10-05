import React, { useState, useEffect } from 'react';
import workai from '@/assets/work-ai.jpg';
import vfx from '@/assets/vfx.png';
import animation from '@/assets/animation.png';

// --- Static CSS styles converted to a JS object for a simplified setup ---
// NOTE: I've updated cardBase to remove the old linear-gradient background.
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
    }
  `,
  carouselContainer: {
    textAlign: 'center',
  },
  carousel: {
    position: 'relative',
    width: '600px',
    height: '250px',
    margin: 'auto',
    perspective: '1000px',
  },
  cardBase: {
    position: 'absolute',
    top: '25px',
    left: '50%',
    width: '300px',
    height: '200px',
    // Removed linear-gradient, will be added dynamically
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    transition: 'all 0.5s ease',
    transformStyle: 'preserve-3d',
    boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
    // Added background properties for the image
    backgroundSize: 'cover', // Sets the size to cover
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    textShadow: '0 0 5px rgba(0, 0, 0, 0.8)', // Ensures text is visible over the image
  },
  controls: {
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    margin: '0 10px',
    border: 'none',
    borderRadius: '8px',
    background: '#2575fc',
    color: 'white',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background 0.3s',
  }
};

// --- Transform definitions for clarity ---
const cardTransforms = {
  hidden: {
    transform: 'translateX(-50%) scale(0.8)',
    opacity: 0,
    zIndex: 0,
  },
  active: {
    transform: 'translateX(-50%) scale(1.3) translateY(-20px)',
    opacity: 1,
    zIndex: 3,
  },
  left: {
    transform: 'translateX(-200%) rotateY(30deg) scale(0.9)',
    opacity: 0.7,
    zIndex: 2,
  },
  right: {
    transform: 'translateX(100%) rotateY(-30deg) scale(0.9)',
    opacity: 0.7,
    zIndex: 2,
  },
};

export const CardCarousel = () => {
  // 1. Updated cardData with image URLs
  const cardData = [
    { id: 1, content: "Animation", image: animation },
    { id: 2, content: "VFX", image: vfx },
    { id: 3, content: "AI Integration", image: workai },
  ];
  const totalCards = cardData.length;

  // Initial state is 2, which is the 3rd card ("AI Integration")
  const [currentIndex, setCurrentIndex] = useState(2);

  // 2. Updated getCardStyle to include the background image
  const getCardStyle = (index:any) => {
    let transformKey = 'hidden';

    if (index === currentIndex) {
      transformKey = 'active'; // Center
    } else if (index === (currentIndex - 1 + totalCards) % totalCards) {
      transformKey = 'left'; // Immediate Left
    } else if (index === (currentIndex + 1) % totalCards) {
      transformKey = 'right'; // Immediate Right
    }

    // Get the image URL for the current card
    const imageUrl = cardData[index].image;
    
    // Combine base styles, transform, and the new background image property
    return {
        ...styles.cardBase, 
        ...cardTransforms[transformKey],
        backgroundImage: `url(${imageUrl})`, // Dynamic background image
    } as React.CSSProperties; // Assert as CSSProperties for TypeScript
  };

  // Handler for auto-play (Next)
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  // Auto-play and global styles setup
  useEffect(() => {
    document.body.style.cssText = styles.global;
    
    // Auto-play logic
    const intervalId = setInterval(() => {
      handleNext(); 
    }, 3000);

    return () => {
      document.body.style.cssText = '';
      clearInterval(intervalId);
    };
  // totalCards is constant, so dependency array is safe
  }, [totalCards]); 


  return (
    <div style={styles.carouselContainer as React.CSSProperties}>
      <div style={styles.carousel as React.CSSProperties}>
        {cardData.map((card, index) => (
          <div
            key={card.id}
            // Use the updated getCardStyle
            style={getCardStyle(index)}
            className="card-item"
          >
            {/* The content text remains visible */}
            {card.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;