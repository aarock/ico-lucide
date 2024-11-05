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
  <Path d="M14 14v2" />
  <Path d="M14 20v2" />
  <Path d="M14 2v2" />
  <Path d="M14 8v2" />
  <Path d="M2 15h8" />
  <Path d="M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2" />
  <Path d="M2 9h8" />
  <Path d="M22 15h-4" />
  <Path d="M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" />
  <Path d="M22 9h-4" />
  <Path d="M5 3v18" />
</Svg>
