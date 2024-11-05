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
  <Path d="M18.36 6.64A9 9 0 0 1 20.77 15" />
  <Path d="M6.16 6.16a9 9 0 1 0 12.68 12.68" />
  <Path d="M12 2v4" />
  <Path d="m2 2 20 20" />
</Svg>
