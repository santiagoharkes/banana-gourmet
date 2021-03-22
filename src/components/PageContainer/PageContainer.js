import React from "react";

import { PageContainerStyled } from "./PageContainerElements";

const containerVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: "0vw",
    transition: {
      duration: 0.3,
      delay: 0.1,
    },
  },
  exit: {
    x: "-200vw",
    transition: { ease: "easeInOut" },
  },
};

function PageContainer({ children, bgColor }) {
  return (
    <PageContainerStyled
      bgColor={bgColor && bgColor}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </PageContainerStyled>
  );
}

export default PageContainer;
