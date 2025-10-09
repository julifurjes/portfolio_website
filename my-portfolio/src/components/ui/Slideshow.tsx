'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface SlideshowProps {
  folderPath: string;
}

export default function Slideshow({ folderPath }: SlideshowProps) {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/slideshow-images?folder=${encodeURIComponent(folderPath)}`);
        if (response.ok) {
          const data = await response.json();
          setImages(data.images || []);
        }
      } catch (error) {
        console.error('Failed to load slideshow images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, [folderPath]);


  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  if (isLoading) {
    return (
      <div className="slideshow-loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="slideshow-container">
      <div className="slideshow">
        {images.map((image, index) => (
          <div
            key={image}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              style={{ objectFit: 'contain' }}
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            className="slideshow-btn prev"
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            className="slideshow-btn next"
            onClick={goToNext}
            aria-label="Next slide"
          >
            ›
          </button>

          <div className="slideshow-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}

      <style jsx>{`
        .slideshow-loading {
          width: 100%;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(139, 146, 255, 0.2);
          border-top-color: rgba(139, 146, 255, 0.8);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .slideshow-container {
          position: relative;
          width: 100%;
          height: 500px;
        }

        .slideshow {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.6s ease-in-out;
          pointer-events: none;
        }

        .slide.active {
          opacity: 1;
          pointer-events: auto;
        }

        .slideshow-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.6);
          font-size: 3rem;
          width: auto;
          height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          z-index: 10;
          padding: 0;
          line-height: 1;
        }

        .slideshow-btn:hover {
          color: rgba(255, 255, 255, 1);
        }

        .slideshow-btn.prev {
          left: -50px;
        }

        .slideshow-btn.next {
          right: -50px;
        }

        .slideshow-indicators {
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 10;
        }

        .indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          padding: 0;
        }

        .indicator:hover {
          background: rgba(255, 255, 255, 0.5);
        }

        .indicator.active {
          background: rgba(139, 146, 255, 0.9);
          transform: scale(1.3);
        }

        @media (max-width: 1024px) {
          .slideshow-container {
            height: 400px;
          }

          .slideshow-btn.prev {
            left: -40px;
          }

          .slideshow-btn.next {
            right: -40px;
          }
        }

        @media (max-width: 768px) {
          .slideshow-container {
            height: 350px;
          }

          .slideshow-btn {
            font-size: 2.5rem;
          }

          .slideshow-btn.prev {
            left: 10px;
          }

          .slideshow-btn.next {
            right: 10px;
          }

          .slideshow-indicators {
            bottom: 10px;
          }
        }

        @media (max-width: 480px) {
          .slideshow-loading {
            height: 250px;
          }

          .slideshow-container {
            height: 250px;
          }

          .slideshow-btn {
            font-size: 2rem;
          }

          .slideshow-btn.prev {
            left: 5px;
          }

          .slideshow-btn.next {
            right: 5px;
          }

          .slideshow-indicators {
            bottom: 5px;
          }

          .indicator {
            width: 7px;
            height: 7px;
          }
        }
      `}</style>
    </div>
  );
}
