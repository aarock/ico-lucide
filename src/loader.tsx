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
  <Path d="M12 2v4" />
  <Path d="m16.2 7.8 2.9-2.9" />
  <Path d="M18 12h4" />
  <Path d="m16.2 16.2 2.9 2.9" />
  <Path d="M12 18v4" />
  <Path d="m4.9 19.1 2.9-2.9" />
  <Path d="M2 12h4" />
  <Path d="m4.9 4.9 2.9 2.9" />
</Svg>
