// components/ScrollToTopButton.jsx
import { useEffect, useState } from 'react';

export default function ScrollUpButton() {
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

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // smooth scroll ✨
    });
  };

  return (
    isVisible && (
      <button className="scollupbutton" onClick={scrollUp} aria-label="Scroll back to top">
        ↑
      </button>
    )
  );
}
