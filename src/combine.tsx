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
  <Path d="M10 18H5a3 3 0 0 1-3-3v-1" />
  <Path d="M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" />
  <Path d="M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" />
  <Path d="m7 21 3-3-3-3" />
  <Rect x="14" y="14" width="8" height="8" rx="2" />
  <Rect x="2" y="2" width="8" height="8" rx="2" />
</Svg>
