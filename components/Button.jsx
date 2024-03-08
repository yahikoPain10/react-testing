import React from "react";
import { ThemeContext } from "../__tests__/button.test";

/** @type {React.FC} */

const Button = (props) => {
  
  const {theme, setTheme} = React.useContext(ThemeContext);

  const handleClick = (e) => {
    setTheme(theme === "light" ? "dark" : "light");
    props.onClick(e);
  }

  React.useEffect(() => {
    return () => console.log("Button Unmounted");
  }, []);


  return (
    <button
      children={props.children}
      onClick={handleClick}
      data-theme={theme}
    />
  )

}

Button.displayName = "Button";

Button.defaultProps = {
  children: "orewa",
  onClick: () => {}
}

export default Button;