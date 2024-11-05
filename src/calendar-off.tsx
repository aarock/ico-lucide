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
  <Path d="M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18" />
  <Path d="M21 15.5V6a2 2 0 0 0-2-2H9.5" />
  <Path d="M16 2v4" />
  <Path d="M3 10h7" />
  <Path d="M21 10h-5.5" />
  <Path d="m2 2 20 20" />
</Svg>
