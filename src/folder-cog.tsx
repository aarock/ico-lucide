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
  <Circle cx="18" cy="18" r="3" />
  <Path d="M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3" />
  <Path d="m21.7 19.4-.9-.3" />
  <Path d="m15.2 16.9-.9-.3" />
  <Path d="m16.6 21.7.3-.9" />
  <Path d="m19.1 15.2.3-.9" />
  <Path d="m19.6 21.7-.4-1" />
  <Path d="m16.8 15.3-.4-1" />
  <Path d="m14.3 19.6 1-.4" />
  <Path d="m20.7 16.8 1-.4" />
</Svg>
