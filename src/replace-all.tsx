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
  <Path d="M14 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" />
  <Path d="M14 4a2 2 0 0 1 2-2" />
  <Path d="M16 10a2 2 0 0 1-2-2" />
  <Path d="M20 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" />
  <Path d="M20 2a2 2 0 0 1 2 2" />
  <Path d="M22 8a2 2 0 0 1-2 2" />
  <Path d="m3 7 3 3 3-3" />
  <Path d="M6 10V5a 3 3 0 0 1 3-3h1" />
  <Rect x="2" y="14" width="8" height="8" rx="2" />
</Svg>
