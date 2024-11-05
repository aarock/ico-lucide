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
  <Path d="M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" />
  <Path d="M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5" />
  <Circle cx="12" cy="12" r="3" />
  <Path d="m18 22-3-3 3-3" />
  <Path d="m6 2 3 3-3 3" />
</Svg>
