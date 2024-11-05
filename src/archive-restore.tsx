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
  <Rect width="20" height="5" x="2" y="3" rx="1" />
  <Path d="M4 8v11a2 2 0 0 0 2 2h2" />
  <Path d="M20 8v11a2 2 0 0 1-2 2h-2" />
  <Path d="m9 15 3-3 3 3" />
  <Path d="M12 12v9" />
</Svg>
