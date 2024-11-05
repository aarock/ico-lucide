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
  <Path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
  <Path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
  <Path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
  <Path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
</Svg>
