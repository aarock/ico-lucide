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
  <Path d="M7 18v-6a5 5 0 1 1 10 0v6" />
  <Path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" />
  <Path d="M21 12h1" />
  <Path d="M18.5 4.5 18 5" />
  <Path d="M2 12h1" />
  <Path d="M12 2v1" />
  <Path d="m4.929 4.929.707.707" />
  <Path d="M12 12v6" />
</Svg>
