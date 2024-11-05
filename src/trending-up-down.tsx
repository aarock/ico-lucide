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
  <Path d="M14.828 14.828 21 21" />
  <Path d="M21 16v5h-5" />
  <Path d="m21 3-9 9-4-4-6 6" />
  <Path d="M21 8V3h-5" />
</Svg>
