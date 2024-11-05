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
  <Path d="m13.11 7.664 1.78 2.672" />
  <Path d="m14.162 12.788-3.324 1.424" />
  <Path d="m20 4-6.06 1.515" />
  <Path d="M3 3v16a2 2 0 0 0 2 2h16" />
  <Circle cx="12" cy="6" r="2" />
  <Circle cx="16" cy="12" r="2" />
  <Circle cx="9" cy="15" r="2" />
</Svg>
