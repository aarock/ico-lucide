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
  <Path d="m16 6-4-4-4 4" />
  <Path d="M12 2v8" />
  <Rect width="20" height="8" x="2" y="14" rx="2" />
  <Path d="M6 18h.01" />
  <Path d="M10 18h.01" />
</Svg>
