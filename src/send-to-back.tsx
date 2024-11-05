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
  <Rect x="14" y="14" width="8" height="8" rx="2" />
  <Rect x="2" y="2" width="8" height="8" rx="2" />
  <Path d="M7 14v1a2 2 0 0 0 2 2h1" />
  <Path d="M14 7h1a2 2 0 0 1 2 2v1" />
</Svg>
