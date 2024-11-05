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
  <Path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z" />
  <Path d="M5 3a2 2 0 0 0-2 2" />
  <Path d="M19 3a2 2 0 0 1 2 2" />
  <Path d="M5 21a2 2 0 0 1-2-2" />
  <Path d="M9 3h1" />
  <Path d="M9 21h2" />
  <Path d="M14 3h1" />
  <Path d="M3 9v1" />
  <Path d="M21 9v2" />
  <Path d="M3 14v1" />
</Svg>
