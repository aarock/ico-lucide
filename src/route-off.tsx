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
  <Circle cx="6" cy="19" r="3" />
  <Path d="M9 19h8.5c.4 0 .9-.1 1.3-.2" />
  <Path d="M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12" />
  <Path d="m2 2 20 20" />
  <Path d="M21 15.3a3.5 3.5 0 0 0-3.3-3.3" />
  <Path d="M15 5h-4.3" />
  <Circle cx="18" cy="5" r="3" />
</Svg>
