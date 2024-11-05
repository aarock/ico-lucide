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
  <Path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
  <Path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  <Path d="M4 2C2.8 3.7 2 5.7 2 8" />
  <Path d="M22 8c0-2.3-.8-4.3-2-6" />
</Svg>