import { useLayoutEffect } from 'react';
import { useLocation, useScrollRestoration } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const scrollRef = useScrollRestoration();

  useLayoutEffect(() => {
    const scrollPosition = scrollRef.current?.[pathname];
    if (scrollPosition) {
      window.scrollTo(scrollPosition.x, scrollPosition.y);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, scrollRef]);

  return null;
};

export default ScrollToTop;
