import { useState, useEffect } from 'react';
import Button from '../Button';
import CircleStatsSection from './CircleStatsSection';
import EntryPicture from './EntryPicture';
import { redirectTo } from '../utlis/navigation';
import { AppTab } from '../../data/appTabs';
import { useIsMobile } from '../hooks/useIsMobile';

export interface ResponsiveHomeCarouselProps {
  onTriggerHeaderAnimation?: () => void;
}

export function HomeCarousel({ 
  onTriggerHeaderAnimation
}: ResponsiveHomeCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [headerAnimationTriggered, setHeaderAnimationTriggered] = useState(false);

  const isMobileView = useIsMobile();

  const handleCirclesComplete = () => {
    setShowButton(true);    
    if (!headerAnimationTriggered) {
      onTriggerHeaderAnimation?.();
      setHeaderAnimationTriggered(true);     
      if (isMobileView) {
        setTimeout(() => {
          setCurrentSlide(1);
        }, 8000);
      }
    } else {
      if (isMobileView) {
        setTimeout(() => {
          setCurrentSlide(1);
        }, 5000);
      }
    }
  };

  useEffect(() => {
    if (!isMobileView) return;

    let timer: number;

    if (currentSlide === 1) {
      // On s2 wait 5 seconds then go back to circles
      timer = setTimeout(() => {
        setCurrentSlide(0);
      }, 10000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [currentSlide, isMobileView]);

  // desktop-layout
  if (!isMobileView) {
    return (
      <div className="body-row-container flex width-max justify-center">
        <div className="circles-onload flex-column width-half">
          <div className="home-entry-circles flex-grow justify-center align-items-center">
            <CircleStatsSection onDone={handleCirclesComplete} />
          </div>
          <div
            className={`flex justify-center button-fade-in ${
              showButton ? "visible" : ""
            }`}
          >
            {showButton && (
              <Button
                text={"Poznaj nasz zespół"}
                disableImage={true}
                backgroundVersion={"dark"}
                onClick={() => redirectTo(AppTab.O_NAS)}
                shiny={true}
              />
            )}
          </div>
        </div>
        <EntryPicture />
      </div>
    );
  }

  // mobile-layout (<1024px)
  return (
    <div className="body-row-container flex width-max justify-center">
      <div className="home-carousel-container width-max relative">
        <div 
          className="home-carousel-track flex align-items-start justify-center height-max"
          style={{
            transform: `translateX(-${currentSlide * 50}%)`,
          }}
        >
          {/* S1: Circles */}
          <div className="home-carousel-slide width-half height-max relative">
            <div className="slide-content s1 width-max flex-column align-items-center justify-center">
               <div className="circles-onload flex-column width-max">
          <div className="home-entry-circles width-max flex-grow justify-center align-items-center">
            <CircleStatsSection onDone={handleCirclesComplete} />
          </div>
          <div
            className={`flex justify-center button-fade-in ${
              showButton ? "visible" : ""
            }`}
          >
            {showButton && (
              <Button
                text={"Poznaj naszą ofertę"}
                disableImage={true}
                backgroundVersion={"dark"}
                onClick={() => redirectTo(AppTab.USLUGI)}
                shiny={true}
                
              />
            )}
          </div>
        </div>
            </div>
          </div>

          {/* S2: EntryPicture */}
          <div className="home-carousel-slide width-half height-max relative">
            <div className="slide-content s2 flex-column height-max align-items-center justify-start">
              <div className="entry-picture-container">
                <EntryPicture />
              </div>
              <div className="flex justify-center">
                <Button
                  text={"Poznaj nasz zespół"}
                  disableImage={true}
                  backgroundVersion={"light"}
                  onClick={() => redirectTo(AppTab.O_NAS)}
                  shiny={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-carousel-indicators flex absolute">
        <div className={`carousel-indicator ${currentSlide === 0 ? 'active' : ''}`} />
        <div className={`carousel-indicator ${currentSlide === 1 ? 'active' : ''}`} />
      </div>
    </div>
  );
}

export default HomeCarousel;