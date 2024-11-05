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
  <Path d="M9 2v6" />
  <Path d="M15 2v6" />
  <Path d="M12 17v5" />
  <Path d="M5 8h14" />
  <Path d="M6 11V8h12v3a6 6 0 1 1-12 0Z" />
</Svg>
