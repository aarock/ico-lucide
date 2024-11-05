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
  <Path d="M16 3h5v5" />
  <Path d="M8 3H3v5" />
  <Path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" />
  <Path d="m15 9 6-6" />
</Svg>
