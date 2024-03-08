import type { ButtonProps } from "./button.types";

/** 
 * The button component
 * Used to trigger actions
 */
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      data-size={props.$size}
      data-variant={props.$variant}
    />
  )
}

export default Button;