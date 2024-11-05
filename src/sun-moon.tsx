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
  <Path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" />
  <Path d="M12 2v2" />
  <Path d="M12 20v2" />
  <Path d="m4.9 4.9 1.4 1.4" />
  <Path d="m17.7 17.7 1.4 1.4" />
  <Path d="M2 12h2" />
  <Path d="M20 12h2" />
  <Path d="m6.3 17.7-1.4 1.4" />
  <Path d="m19.1 4.9-1.4 1.4" />
</Svg>
