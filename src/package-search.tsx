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
  <Path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
  <Path d="m7.5 4.27 9 5.15" />
  <polyline points="3.29 7 12 12 20.71 7" />
  <Line x1="12" x2="12" y1="22" y2="12" />
  <Circle cx="18.5" cy="15.5" r="2.5" />
  <Path d="M20.27 17.27 22 19" />
</Svg>
