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
  <Path d="m2 2 8 8" />
  <Path d="m22 2-8 8" />
  <ellipse cx="12" cy="9" rx="10" ry="5" />
  <Path d="M7 13.4v7.9" />
  <Path d="M12 14v8" />
  <Path d="M17 13.4v7.9" />
  <Path d="M2 9v8a10 5 0 0 0 20 0V9" />
</Svg>
