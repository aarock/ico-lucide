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
  <Circle cx="12" cy="12" r="4" />
  <Path d="M12 2v2" />
  <Path d="M12 20v2" />
  <Path d="m4.93 4.93 1.41 1.41" />
  <Path d="m17.66 17.66 1.41 1.41" />
  <Path d="M2 12h2" />
  <Path d="M20 12h2" />
  <Path d="m6.34 17.66-1.41 1.41" />
  <Path d="m19.07 4.93-1.41 1.41" />
</Svg>
