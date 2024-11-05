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
  <Path d="M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13" />
  <Path d="M18 8c0-2.5-2-2.5-2-5" />
  <Path d="m2 2 20 20" />
  <Path d="M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866" />
  <Path d="M22 8c0-2.5-2-2.5-2-5" />
  <Path d="M7 12v4" />
</Svg>
