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
  <Rect width="18" height="7" x="3" y="3" rx="1" />
  <Rect width="7" height="7" x="3" y="14" rx="1" />
  <Rect width="7" height="7" x="14" y="14" rx="1" />
</Svg>
