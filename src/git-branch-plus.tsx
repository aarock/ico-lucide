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
  <Path d="M6 3v12" />
  <Path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
  <Path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
  <Path d="M15 6a9 9 0 0 0-9 9" />
  <Path d="M18 15v6" />
  <Path d="M21 18h-6" />
</Svg>
