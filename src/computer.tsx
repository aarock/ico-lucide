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
  <Rect width="14" height="8" x="5" y="2" rx="2" />
  <Rect width="20" height="8" x="2" y="14" rx="2" />
  <Path d="M6 18h2" />
  <Path d="M12 18h6" />
</Svg>
