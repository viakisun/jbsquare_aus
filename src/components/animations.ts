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

// Card section variants
export const cardList = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04
    }
  }
};

export const cardItem = {
  initial: { opacity: 0, y: 24, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1],
      opacity: { duration: 1.1, ease: "linear" }
    }
  },
  exit: {
    opacity: 0,
    y: 12,
    transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] }
  }
};
