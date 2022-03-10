export const brightness = (hex: string) => {
  // Isolate rgb from hex code
  const rHex = hex.substring(0, 2);
  const gHex = hex.substring(2, 4);
  const bHex = hex.substring(4);

  // Convert to rgb
  const rRgb = parseInt(rHex, 16);
  const gRgb = parseInt(gHex, 16);
  const bRgb = parseInt(bHex, 16);

  // Calculate brightness
  return Math.round((rRgb * 299 + gRgb * 587 + bRgb * 114) / 1000);
};
