export const boldFadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.99] }
};

export const staggerParent = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    }
  }
};

export const buttonPress = {
  whileTap: { scale: 0.95 }
};
