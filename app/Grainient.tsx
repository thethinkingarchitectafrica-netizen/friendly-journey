import type { CSSProperties } from "react";

type GrainientProps = {
  colors?: string[];
  angle?: number;
  flow?: number;
  silk?: number;
  grainAmount?: number;
};

export default function Grainient({
  colors = ["#120f17", "#2a0f0a", "#9a3412", "#f97316", "#fed7aa"],
  angle = 55,
  flow = 0.8,
  silk = 0.35,
  grainAmount = 0.08,
}: GrainientProps) {
  const style = {
    "--grainient-angle": `${angle}deg`,
    "--grainient-colors": colors.join(", "),
    "--grainient-flow-duration": `${Math.max(8, 24 / Math.max(flow, 0.1))}s`,
    "--grainient-silk": silk,
    "--grainient-grain": grainAmount,
  } as CSSProperties;

  return <div className="grainient" style={style} aria-hidden="true" />;
}
