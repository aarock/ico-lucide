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
  <Path d="M6 8.32a7.43 7.43 0 0 1 0 7.36" />
  <Path d="M9.46 6.21a11.76 11.76 0 0 1 0 11.58" />
  <Path d="M12.91 4.1a15.91 15.91 0 0 1 .01 15.8" />
  <Path d="M16.37 2a20.16 20.16 0 0 1 0 20" />
</Svg>
