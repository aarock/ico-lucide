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
  <Path d="M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8" />
  <Path d="m17 6-2.891-2.891" />
  <Path d="M2 15c3.333-3 6.667-3 10-3" />
  <Path d="m2 2 20 20" />
  <Path d="m20 9 .891.891" />
  <Path d="M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1" />
  <Path d="M3.109 14.109 4 15" />
  <Path d="m6.5 12.5 1 1" />
  <Path d="m7 18 2.891 2.891" />
  <Path d="M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16" />
</Svg>
