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
  <Path d="M12 2a10 10 0 0 1 7.38 16.75" />
  <Path d="M12 8v8" />
  <Path d="M16 12H8" />
  <Path d="M2.5 8.875a10 10 0 0 0-.5 3" />
  <Path d="M2.83 16a10 10 0 0 0 2.43 3.4" />
  <Path d="M4.636 5.235a10 10 0 0 1 .891-.857" />
  <Path d="M8.644 21.42a10 10 0 0 0 7.631-.38" />
</Svg>