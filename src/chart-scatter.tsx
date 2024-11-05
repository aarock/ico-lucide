import { Svg, Path, Circle, SvgProps } from "@aarock/ui-core"
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
  <Circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
  <Circle cx="18.5" cy="5.5" r=".5" fill="currentColor" />
  <Circle cx="11.5" cy="11.5" r=".5" fill="currentColor" />
  <Circle cx="7.5" cy="16.5" r=".5" fill="currentColor" />
  <Circle cx="17.5" cy="14.5" r=".5" fill="currentColor" />
  <Path d="M3 3v16a2 2 0 0 0 2 2h16" />
</Svg>
