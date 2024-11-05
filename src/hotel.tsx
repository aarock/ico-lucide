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
  <Path d="M10 22v-6.57" />
  <Path d="M12 11h.01" />
  <Path d="M12 7h.01" />
  <Path d="M14 15.43V22" />
  <Path d="M15 16a5 5 0 0 0-6 0" />
  <Path d="M16 11h.01" />
  <Path d="M16 7h.01" />
  <Path d="M8 11h.01" />
  <Path d="M8 7h.01" />
  <Rect x="4" y="2" width="16" height="20" rx="2" />
</Svg>
