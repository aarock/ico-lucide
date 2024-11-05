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
  <Rect x="16" y="16" width="6" height="6" rx="1" />
  <Rect x="2" y="16" width="6" height="6" rx="1" />
  <Rect x="9" y="2" width="6" height="6" rx="1" />
  <Path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
  <Path d="M12 12V8" />
</Svg>