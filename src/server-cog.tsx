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
  <Circle cx="12" cy="12" r="3" />
  <Path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5" />
  <Path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5" />
  <Path d="M6 6h.01" />
  <Path d="M6 18h.01" />
  <Path d="m15.7 13.4-.9-.3" />
  <Path d="m9.2 10.9-.9-.3" />
  <Path d="m10.6 15.7.3-.9" />
  <Path d="m13.6 15.7-.4-1" />
  <Path d="m10.8 9.3-.4-1" />
  <Path d="m8.3 13.6 1-.4" />
  <Path d="m14.7 10.8 1-.4" />
  <Path d="m13.4 8.3-.3.9" />
</Svg>
