// src/components/SmartImage.tsx
import React from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  /** true SOLO para la imagen LCP (hero) */
  priority?: boolean;
};

export default function SmartImage({
  priority = false,
  width,
  height,
  style,
  ...rest
}: Props) {
  // Calcula aspect-ratio solo si width/height son numéricos
  const w = typeof width === "number" ? width : width ? parseFloat(String(width)) : undefined;
  const h = typeof height === "number" ? height : height ? parseFloat(String(height)) : undefined;

  const styleWithAR =
    w && h && isFinite(w) && isFinite(h)
      ? { ...(style as React.CSSProperties), aspectRatio: `${w} / ${h}` }
      : style;

  return (
    <img
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      width={width}
      height={height}
      style={styleWithAR}
      {...rest}
    />
  );
}
