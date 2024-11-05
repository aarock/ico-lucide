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
  <Path d="M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3" />
  <Path d="M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3" />
  <Line x1="4" x2="20" y1="12" y2="12" />
</Svg>
