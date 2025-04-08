import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRef } from 'react';
import './AppGame.css';

const AppGame = () => {
     const appGames = [
        {
          id: 1,
          image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-link%2Fgames%2Fgame-6.webp&w=640&q=75",
        },
        {
          id: 2,
          image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-letters%2Fgames%2Fgame-9.webp&w=640&q=75",
        },
        {
          id: 3,
          image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-count%2Fgames%2Fgame-5.webp&w=640&q=75",
        },
        {
          id: 4,
          image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-link%2Fgames%2Fgame-1.webp&w=640&q=75",
        },
        {
          id: 5,
          image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-letters%2Fgames%2Fgame-7.webp&w=640&q=75",
          
        },
        {
          id: 6,
          image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-letters%2Fgames%2Fgame-6.webp&w=640&q=75",
          
        }
      ];

      const sliderRef = useRef(null);

      const scroll = (direction) => {
        const container = sliderRef.current;
        const scrollAmount = 226; // Width of card (210px) + gap (16px)
        
        if (container) {
          const currentScroll = container.scrollLeft;
          const newScroll = direction === 'left' 
            ? currentScroll - scrollAmount 
            : currentScroll + scrollAmount;
            
          container.scrollTo({
            left: newScroll,
            behavior: 'smooth'
          });
        }
      };

    return (
        <div className="app-games">
          <h2 className="section-title centered">Free In-App Games</h2>
          <p className="section-subtitle">To play, download the complimentary Plugo app</p>

          <div className="games-slider">
            <button className="slider-btn prev" onClick={() => scroll('left')}>
              <FaChevronLeft />
            </button>

            <div className="games-container" ref={sliderRef}>
              {appGames.map((game) => (
                <div key={game.id} className="game-card">
                  <div className="game-icon">
                    <img src={game.image} alt={game.title} />
                  </div>
                </div>
              ))}
            </div>

            <button className="slider-btn next" onClick={() => scroll('right')}>
              <FaChevronRight />
            </button>
          </div>
        </div>
    )
}

export default AppGame;