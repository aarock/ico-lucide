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
  <Path d="M2 10s3-3 3-8" />
  <Path d="M22 10s-3-3-3-8" />
  <Path d="M10 2c0 4.4-3.6 8-8 8" />
  <Path d="M14 2c0 4.4 3.6 8 8 8" />
  <Path d="M2 10s2 2 2 5" />
  <Path d="M22 10s-2 2-2 5" />
  <Path d="M8 15h8" />
  <Path d="M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
  <Path d="M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
</Svg>
