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
  <Path d="M2 22V12a10 10 0 1 1 20 0v10" />
  <Path d="M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8" />
  <Path d="M10 15h.01" />
  <Path d="M14 15h.01" />
  <Path d="M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z" />
  <Path d="m9 19-2 3" />
  <Path d="m15 19 2 3" />
</Svg>
