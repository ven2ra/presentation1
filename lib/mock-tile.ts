type Tone = "paper" | "ink" | "lime" | "coral";

const tones: Record<Tone, { bg: string; fg: string }> = {
  paper: { bg: "#F4EEDF", fg: "#141311" },
  ink: { bg: "#141311", fg: "#F4EEDF" },
  lime: { bg: "#D7F23A", fg: "#141311" },
  coral: { bg: "#FF5B32", fg: "#141311" },
};

/** Плоская SVG-«заглушка экрана» в брендовых цветах — вместо стоковых фото. */
export function mockScreenTile(tone: Tone, label: string) {
  const { bg, fg } = tones[tone];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="400" viewBox="0 0 320 400">
    <rect width="320" height="400" fill="${bg}"/>
    <rect x="14" y="14" width="292" height="372" fill="none" stroke="${fg}" stroke-width="3" opacity="0.9"/>
    <circle cx="34" cy="40" r="5" fill="${fg}" opacity="0.5"/>
    <circle cx="50" cy="40" r="5" fill="${fg}" opacity="0.3"/>
    <circle cx="66" cy="40" r="5" fill="${fg}" opacity="0.15"/>
    <rect x="30" y="72" width="120" height="12" fill="${fg}" opacity="0.4"/>
    <rect x="30" y="94" width="80" height="8" fill="${fg}" opacity="0.2"/>
    <rect x="30" y="152" width="260" height="138" fill="${fg}" opacity="0.06"/>
    <rect x="30" y="330" width="260" height="2" fill="${fg}" opacity="0.15"/>
    <text x="30" y="370" font-family="Arial, sans-serif" font-size="24" font-weight="800" fill="${fg}" letter-spacing="0.5">${label}</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
