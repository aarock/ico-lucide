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
  <Path d="M20.34 17.52a10 10 0 1 0-2.82 2.82" />
  <Circle cx="19" cy="19" r="2" />
  <Path d="m13.41 13.41 4.18 4.18" />
  <Circle cx="12" cy="12" r="2" />
</Svg>
