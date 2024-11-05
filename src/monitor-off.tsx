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
  <Path d="M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2" />
  <Path d="M22 15V5a2 2 0 0 0-2-2H9" />
  <Path d="M8 21h8" />
  <Path d="M12 17v4" />
  <Path d="m2 2 20 20" />
</Svg>
