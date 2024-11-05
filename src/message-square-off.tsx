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
  <Path d="M21 15V5a2 2 0 0 0-2-2H9" />
  <Path d="m2 2 20 20" />
  <Path d="M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10" />
</Svg>
