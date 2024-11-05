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
  <Path d="M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2" />
  <Path d="M10 22H8" />
  <Path d="M16 22h-2" />
  <Circle cx="8" cy="8" r="2" />
  <Path d="M9.414 9.414 12 12" />
  <Path d="M14.8 14.8 18 18" />
  <Circle cx="8" cy="16" r="2" />
  <Path d="m18 6-8.586 8.586" />
</Svg>
