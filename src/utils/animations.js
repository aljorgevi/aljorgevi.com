export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export const pageAnimation3 = {
  hidden: {
    opacity: 0,
    rotation: 0.06,
    transition: { delay: 1 },
  },
  show: {
    opacity: 1,
    rotation: 0.06,
    transition: { delay: 0.5 },
  },
  exit: {
    opacity: 0,
    rotation: 0.06,
    transition: {
      duration: 0.4,
    },
  },
}

export const pageAnimation2 = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  show: {
    opacity: 1,
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
}

/*
      initial={{
            opacity: 0,
            x: -200
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          exit={{
            opacity: 0,
            x: 200
          }}
          transition={{
            type: "spring",
            mass: 0.35,
            stiffness: 75,
            duration: 0.3
          }}
*/
