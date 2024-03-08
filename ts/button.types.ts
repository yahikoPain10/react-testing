export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "small" | "medium" | "large";


export interface ButtonProps {
  /** Button variant change the appearence of the button */
  $variant?: ButtonVariant;
  /**
   * Button size
   * Choose between a small, medium or large button
   * @example
   * ```jsx
   * <Button size="small">Hello, world</Button>
   * ```
   */
  $size: ButtonSize;
}