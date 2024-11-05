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
  <Circle cx="12" cy="5" r="1" />
  <Circle cx="19" cy="5" r="1" />
  <Circle cx="5" cy="5" r="1" />
  <Circle cx="12" cy="12" r="1" />
  <Circle cx="19" cy="12" r="1" />
  <Circle cx="5" cy="12" r="1" />
  <Circle cx="12" cy="19" r="1" />
  <Circle cx="19" cy="19" r="1" />
  <Circle cx="5" cy="19" r="1" />
</Svg>
