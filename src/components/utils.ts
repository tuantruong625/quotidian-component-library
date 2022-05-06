import { BorderRadius, Typography } from "../utils"

export const handleBorderRadius = (size: string) => {
  switch (size) {
    case "sm":
      return `${BorderRadius.sm}`
    case "md":
      return `${BorderRadius.md}`
    case "lg":
      return `${BorderRadius.lg}`
    case "full":
      return `${BorderRadius.full}`
    default:
      return `${BorderRadius.none}`
  }
}

export const handleHeadingSize = (size: string) => {
  switch (size) {
    case "xs":
      return `${Typography.xsmall}`
    case "sm":
      return `${Typography.small}`
    case "md":
      return `${Typography.body}`
    case "lg":
      return `${Typography.heading3}`
    case "xl":
      return `${Typography.heading2}`
    default:
      return `${Typography.heading1}`
  }
}