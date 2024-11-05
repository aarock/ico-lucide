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
  <Path d="M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z" />
  <Path d="M18 11V4H6v7" />
  <Path d="M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4" />
  <Path d="M22 11V9" />
  <Path d="M2 11V9" />
  <Path d="M6 4V2" />
  <Path d="M18 4V2" />
  <Path d="M10 4V2" />
  <Path d="M14 4V2" />
</Svg>
