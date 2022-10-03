import React from "react";

const withIconComponent = (Component) => {
  return function IconComponent(props) {
    return <Component {...props} />;
  }
};

export default withIconComponent;