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
  <Path d="M11 8c2-3-2-3 0-6" />
  <Path d="M15.5 8c2-3-2-3 0-6" />
  <Path d="M6 10h.01" />
  <Path d="M6 14h.01" />
  <Path d="M10 16v-4" />
  <Path d="M14 16v-4" />
  <Path d="M18 16v-4" />
  <Path d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3" />
  <Path d="M5 20v2" />
  <Path d="M19 20v2" />
</Svg>
