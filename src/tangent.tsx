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
  <Circle cx="17" cy="4" r="2" />
  <Path d="M15.59 5.41 5.41 15.59" />
  <Circle cx="4" cy="17" r="2" />
  <Path d="M12 22s-4-9-1.5-11.5S22 12 22 12" />
</Svg>
