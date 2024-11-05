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
  <Path d="M7 3.34V5a3 3 0 0 0 3 3" />
  <Path d="M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
  <Path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
  <Path d="M12 2a10 10 0 1 0 9.54 13" />
  <Path d="M20 6V4a2 2 0 1 0-4 0v2" />
  <Rect width="8" height="5" x="14" y="6" rx="1" />
</Svg>
