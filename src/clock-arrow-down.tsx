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
  <Path d="M12.338 21.994A10 10 0 1 1 21.925 13.227" />
  <Path d="M12 6v6l2 1" />
  <Path d="m14 18 4 4 4-4" />
  <Path d="M18 14v8" />
</Svg>
