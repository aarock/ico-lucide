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
  <Path d="M21 7h-3a2 2 0 0 1-2-2V2" />
  <Path d="M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z" />
  <Path d="M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15" />
  <Path d="M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11" />
</Svg>
