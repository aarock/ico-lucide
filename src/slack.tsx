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
  <Rect width="3" height="8" x="13" y="2" rx="1.5" />
  <Path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" />
  <Rect width="3" height="8" x="8" y="14" rx="1.5" />
  <Path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" />
  <Rect width="8" height="3" x="14" y="13" rx="1.5" />
  <Path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" />
  <Rect width="8" height="3" x="2" y="8" rx="1.5" />
  <Path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" />
</Svg>