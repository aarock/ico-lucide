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
  <Path d="m5.2 6.2 1.4 1.4" />
  <Path d="M2 13h2" />
  <Path d="M20 13h2" />
  <Path d="m17.4 7.6 1.4-1.4" />
  <Path d="M22 17H2" />
  <Path d="M22 21H2" />
  <Path d="M16 13a4 4 0 0 0-8 0" />
  <Path d="M12 5V2.5" />
</Svg>
