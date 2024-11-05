import { Svg, Path, Line, Rect, Circle, SvgProps } from "@aarock/ui-core"
export default ({ stroke, ...props }: SvgProps) => <Svg
  // xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  { ...props }>
  <Path d="M4 12h8" />
  <Path d="M4 18V6" />
  <Path d="M12 18V6" />
  <Path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" />
</Svg>