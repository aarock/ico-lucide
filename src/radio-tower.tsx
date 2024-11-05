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
  <Path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9" />
  <Path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5" />
  <Circle cx="12" cy="9" r="2" />
  <Path d="M16.2 4.8c2 2 2.26 5.11.8 7.47" />
  <Path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1" />
  <Path d="M9.5 18h5" />
  <Path d="m8 22 4-11 4 11" />
</Svg>
