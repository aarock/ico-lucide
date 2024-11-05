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
  <Path d="M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2" />
  <Path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" />
  <Path d="M10 20h4" />
  <Circle cx="16" cy="20" r="2" />
  <Circle cx="8" cy="20" r="2" />
</Svg>
