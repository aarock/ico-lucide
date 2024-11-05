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
  <Path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" />
  <Path d="M14 2v4a2 2 0 0 0 2 2h4" />
  <Path d="M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  <Path d="M7 16.5 8 22l-3-1-3 1 1-5.5" />
</Svg>
