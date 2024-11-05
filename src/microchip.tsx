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
  <Path d="M18 12h2" />
  <Path d="M18 16h2" />
  <Path d="M18 20h2" />
  <Path d="M18 4h2" />
  <Path d="M18 8h2" />
  <Path d="M4 12h2" />
  <Path d="M4 16h2" />
  <Path d="M4 20h2" />
  <Path d="M4 4h2" />
  <Path d="M4 8h2" />
  <Path d="M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z" />
</Svg>
