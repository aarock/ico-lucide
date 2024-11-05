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
  <Path d="M12 20h.01" />
  <Path d="M2 8.82a15 15 0 0 1 20 0" />
  <Path d="M5 12.859a10 10 0 0 1 14 0" />
  <Path d="M8.5 16.429a5 5 0 0 1 7 0" />
</Svg>
