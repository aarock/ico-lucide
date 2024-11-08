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
  <Path d="M14 2v4a2 2 0 0 0 2 2h4" />
  <Path d="m3.2 12.9-.9-.4" />
  <Path d="m3.2 15.1-.9.4" />
  <Path d="M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5" />
  <Path d="m4.9 11.2-.4-.9" />
  <Path d="m4.9 16.8-.4.9" />
  <Path d="m7.5 10.3-.4.9" />
  <Path d="m7.5 17.7-.4-.9" />
  <Path d="m9.7 12.5-.9.4" />
  <Path d="m9.7 15.5-.9-.4" />
  <Circle cx="6" cy="14" r="3" />
</Svg>
