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
  <Path d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16" />
  <Path d="M2 14h12" />
  <Path d="M22 14h-2" />
  <Path d="M12 20v-6" />
  <Path d="m2 2 20 20" />
  <Path d="M22 16V6a2 2 0 0 0-2-2H10" />
</Svg>
