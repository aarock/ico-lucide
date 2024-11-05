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
  <Path d="M12 22v-6" />
  <Path d="M12 8V2" />
  <Path d="M4 12H2" />
  <Path d="M10 12H8" />
  <Path d="M16 12h-2" />
  <Path d="M22 12h-2" />
  <Path d="m15 19-3-3-3 3" />
  <Path d="m15 5-3 3-3-3" />
</Svg>
