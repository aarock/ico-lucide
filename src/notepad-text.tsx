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
  <Path d="M8 2v4" />
  <Path d="M12 2v4" />
  <Path d="M16 2v4" />
  <Rect width="16" height="18" x="4" y="4" rx="2" />
  <Path d="M8 10h6" />
  <Path d="M8 14h8" />
  <Path d="M8 18h5" />
</Svg>
