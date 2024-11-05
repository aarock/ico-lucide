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
  <Path d="M2 12h6" />
  <Path d="M22 12h-6" />
  <Path d="M12 2v2" />
  <Path d="M12 8v2" />
  <Path d="M12 14v2" />
  <Path d="M12 20v2" />
  <Path d="m19 9-3 3 3 3" />
  <Path d="m5 15 3-3-3-3" />
</Svg>
