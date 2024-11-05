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
  <Path d="M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2" />
  <Path d="M14.12 3.88 16 2" />
  <Path d="M22 13h-4v-2a4 4 0 0 0-4-4h-1.3" />
  <Path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
  <Path d="m2 2 20 20" />
  <Path d="M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13" />
  <Path d="M12 20v-8" />
  <Path d="M6 13H2" />
  <Path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
</Svg>
