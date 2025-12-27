import React, { useState, useEffect } from 'react';
import "./scrollbutton.css"
import scrollbutton from "../images/scroll.png"

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className='scroll-button-body'>
        {
                        isVisible && (
                            <img src={scrollbutton} alt="" onClick={scrollToTop}  className='scroll-button'/>
                        )
        }
    </section>
  );
};

export default ScrollToTopButton;
