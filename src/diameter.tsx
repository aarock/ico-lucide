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
  <Circle cx="19" cy="19" r="2" />
  <Circle cx="5" cy="5" r="2" />
  <Path d="M6.48 3.66a10 10 0 0 1 13.86 13.86" />
  <Path d="m6.41 6.41 11.18 11.18" />
  <Path d="M3.66 6.48a10 10 0 0 0 13.86 13.86" />
</Svg>
