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
  <Path d="M22 5V2l-5.89 5.89" />
  <Circle cx="16.6" cy="15.89" r="3" />
  <Circle cx="8.11" cy="7.4" r="3" />
  <Circle cx="12.35" cy="11.65" r="3" />
  <Circle cx="13.91" cy="5.85" r="3" />
  <Circle cx="18.15" cy="10.09" r="3" />
  <Circle cx="6.56" cy="13.2" r="3" />
  <Circle cx="10.8" cy="17.44" r="3" />
  <Circle cx="5" cy="19" r="3" />
</Svg>
