export const boldFadeIn = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
};

export const staggerBold = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};
