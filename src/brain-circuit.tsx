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
  <Path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
  <Path d="M9 13a4.5 4.5 0 0 0 3-4" />
  <Path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
  <Path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
  <Path d="M6 18a4 4 0 0 1-1.967-.516" />
  <Path d="M12 13h4" />
  <Path d="M12 18h6a2 2 0 0 1 2 2v1" />
  <Path d="M12 8h8" />
  <Path d="M16 8V5a2 2 0 0 1 2-2" />
  <Circle cx="16" cy="13" r=".5" />
  <Circle cx="18" cy="3" r=".5" />
  <Circle cx="20" cy="21" r=".5" />
  <Circle cx="20" cy="8" r=".5" />
</Svg>
