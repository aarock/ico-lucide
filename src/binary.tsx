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
  <Rect x="14" y="14" width="4" height="6" rx="2" />
  <Rect x="6" y="4" width="4" height="6" rx="2" />
  <Path d="M6 20h4" />
  <Path d="M14 10h4" />
  <Path d="M6 14h2v6" />
  <Path d="M14 4h2v6" />
</Svg>
