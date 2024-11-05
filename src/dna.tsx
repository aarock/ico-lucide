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
  <Path d="m10 16 1.5 1.5" />
  <Path d="m14 8-1.5-1.5" />
  <Path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
  <Path d="m16.5 10.5 1 1" />
  <Path d="m17 6-2.891-2.891" />
  <Path d="M2 15c6.667-6 13.333 0 20-6" />
  <Path d="m20 9 .891.891" />
  <Path d="M3.109 14.109 4 15" />
  <Path d="m6.5 12.5 1 1" />
  <Path d="m7 18 2.891 2.891" />
  <Path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
</Svg>
