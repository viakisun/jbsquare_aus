export const fadeInUp = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 4.0, ease: [0.6, 0.05, -0.01, 0.99] }
};

export const slideInLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 4.0, ease: [0.6, 0.05, -0.01, 0.99] }
};

export const slideInRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 4.0, ease: [0.6, 0.05, -0.01, 0.99] }
};

export const staggerParent = {
  animate: {
    transition: {
      staggerChildren: 0.12,
    }
  }
};

export const buttonPress = {
  whileTap: { scale: 0.95 }
};
