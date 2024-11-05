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
  <Path d="M10.1 2.182a10 10 0 0 1 3.8 0" />
  <Path d="M13.9 21.818a10 10 0 0 1-3.8 0" />
  <Path d="M17.609 3.721a10 10 0 0 1 2.69 2.7" />
  <Path d="M2.182 13.9a10 10 0 0 1 0-3.8" />
  <Path d="M20.279 17.609a10 10 0 0 1-2.7 2.69" />
  <Path d="M21.818 10.1a10 10 0 0 1 0 3.8" />
  <Path d="M3.721 6.391a10 10 0 0 1 2.7-2.69" />
  <Path d="M6.391 20.279a10 10 0 0 1-2.69-2.7" />
</Svg>
