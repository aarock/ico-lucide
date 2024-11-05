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
  <Path d="M12 10V2" />
  <Path d="m4.93 10.93 1.41 1.41" />
  <Path d="M2 18h2" />
  <Path d="M20 18h2" />
  <Path d="m19.07 10.93-1.41 1.41" />
  <Path d="M22 22H2" />
  <Path d="m16 6-4 4-4-4" />
  <Path d="M16 18a4 4 0 0 0-8 0" />
</Svg>
