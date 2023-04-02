import React, { useEffect, useState, Children, cloneElement } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './index.module.css';

const Carousel = ({ children }) => {
  const [pages, setPages] = useState([]);

  const handleLeftClick = () => {
    console.log('handleLeftClick');
  };
  const handleRightClick = () => {
    console.log('handleRightClick');
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
        <div className={styles.allPagesContainer}>{pages}</div>
      </div>
      <FaChevronRight className={styles.arrow} onClick={handleRightClick} />
    </div>
  );
};

export default Carousel;
