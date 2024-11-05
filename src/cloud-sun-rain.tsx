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
  <Path d="M12 2v2" />
  <Path d="m4.93 4.93 1.41 1.41" />
  <Path d="M20 12h2" />
  <Path d="m19.07 4.93-1.41 1.41" />
  <Path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
  <Path d="M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" />
  <Path d="M11 20v2" />
  <Path d="M7 19v2" />
</Svg>
