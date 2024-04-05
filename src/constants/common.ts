export const PAGE_LIMIT = 10;
export const PAGE_LIMIT_HOME = 3;
export const EN = "en";
export const VI = "vi";
export const UP = "up";

export const LINK = {
  HOME: "",
  ABOUT: "about",
  SERVICES: "services",
  CONTACT: "contact",
  EN: "en",
  VI: "vi",
};

export const fadeIn = (direction?: string) => {
  let offset = { x: 0, y: 0 };

  if (direction === "up") {
    offset.y = -150;
  } else if (direction === "left") {
    offset.x = -150;
  } else if (direction === "right") {
    offset.x = 150;
  } else {
    offset.y = 150;
  }

  return {
    offscreen: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
    },
    onscreen: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 0.2,
      },
    },
  };
};

export const flipInX = {
  offscreen: { opacity: 0, rotateX: -90 },
  onscreen: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 1.5,
      delay: 0.2,
    },
  },
};

export const scaleVariant = {
  offscreen: { opacity: 0, scale: 0.8 },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
      delay: 0.2,
    },
  },
};

export const opacityVariant = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 0.3,
    },
  },
};
