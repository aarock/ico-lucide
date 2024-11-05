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
  <Circle cx="5" cy="6" r="3" />
  <Path d="M5 9v12" />
  <Path d="m15 9-3-3 3-3" />
  <Path d="M12 6h5a2 2 0 0 1 2 2v3" />
  <Path d="M19 15v6" />
  <Path d="M22 18h-6" />
</Svg>
