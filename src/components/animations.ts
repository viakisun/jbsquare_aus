export const fadeInUp = {
  initial: { opacity: 0, y: 120 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 2.4, ease: [0.22, 1, 0.36, 1] }
};

export const slideInLeft = {
  initial: { opacity: 0, x: -120 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 2.4, ease: [0.22, 1, 0.36, 1] }
};

export const slideInRight = {
  initial: { opacity: 0, x: 120 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 2.4, ease: [0.22, 1, 0.36, 1] }
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
