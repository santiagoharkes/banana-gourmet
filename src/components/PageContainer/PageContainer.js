import React from "react";

import { useMenu } from "Context/Menu/MenuContext";
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
  const { isVisible } = useMenu();

  return (
    <PageContainerStyled
      bgColor={bgColor && bgColor}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={isVisible && "overflow-hidden"}
    >
      {children}
    </PageContainerStyled>
  );
}

export default PageContainer;
