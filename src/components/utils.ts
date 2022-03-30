import { BorderRadius } from "../utils"

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