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
  <Path d="m15 15 6 6m-6-6v4.8m0-4.8h4.8" />
  <Path d="M9 19.8V15m0 0H4.2M9 15l-6 6" />
  <Path d="M15 4.2V9m0 0h4.8M15 9l6-6" />
  <Path d="M9 4.2V9m0 0H4.2M9 9 3 3" />
</Svg>
