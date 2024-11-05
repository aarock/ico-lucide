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
  <Path d="M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1" />
  <Path d="M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1" />
  <Path d="M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5" />
  <Path d="M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1" />
  <Path d="M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1" />
  <Path d="M3.5 17.5 2 22l4.5-1.5" />
  <Path d="M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5" />
  <Path d="M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1" />
</Svg>
