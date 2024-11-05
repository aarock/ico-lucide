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
  <Path d="M12 17h2" />
  <Path d="M12 22h2" />
  <Path d="M12 2h2" />
  <Path d="M18 22h1a1 1 0 0 0 1-1" />
  <Path d="M18 2h1a1 1 0 0 1 1 1v1" />
  <Path d="M20 15v2h-2" />
  <Path d="M20 8v3" />
  <Path d="M4 11V9" />
  <Path d="M4 19.5V15" />
  <Path d="M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8" />
  <Path d="M8 22H6.5a1 1 0 0 1 0-5H8" />
</Svg>
