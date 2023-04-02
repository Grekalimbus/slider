import React, { useEffect, useState, Children, cloneElement } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './index.module.css';

const Carousel = ({ children }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  const handleLeftClick = () => {
    const newOffset = offset + 100;
    setOffset((prevState) => (prevState = Math.min(newOffset, 0)));
  };
  const handleRightClick = () => {
    const newOffset = offset - 100;
    const maxOffset = -(100 * (pages.length - 1));
    console.log(maxOffset);
    setOffset((prevState) => (prevState = Math.max(newOffset, maxOffset)));
  };

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: '100%',
            minWidth: '100%',
            maxWidth: '100%',
          },
        });
      })
    );
  }, []);
  return (
    <div className={styles.mainContainer}>
      <FaChevronLeft className={styles.arrow} onClick={handleLeftClick} />
      <div className={styles.window}>
        <div className={styles.allPagesContainer} style={{ transform: `translateX(${offset}%)` }}>
          {pages}
        </div>
      </div>
      <FaChevronRight className={styles.arrow} onClick={handleRightClick} />
    </div>
  );
};

export default Carousel;
