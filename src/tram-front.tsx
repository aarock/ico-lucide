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
  <Rect width="16" height="16" x="4" y="3" rx="2" />
  <Path d="M4 11h16" />
  <Path d="M12 3v8" />
  <Path d="m8 19-2 3" />
  <Path d="m18 22-2-3" />
  <Path d="M8 15h.01" />
  <Path d="M16 15h.01" />
</Svg>
