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
  <Path d="M12 17v4" />
  <Path d="m15.2 4.9-.9-.4" />
  <Path d="m15.2 7.1-.9.4" />
  <Path d="m16.9 3.2-.4-.9" />
  <Path d="m16.9 8.8-.4.9" />
  <Path d="m19.5 2.3-.4.9" />
  <Path d="m19.5 9.7-.4-.9" />
  <Path d="m21.7 4.5-.9.4" />
  <Path d="m21.7 7.5-.9-.4" />
  <Path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
  <Path d="M8 21h8" />
  <Circle cx="18" cy="6" r="3" />
</Svg>
