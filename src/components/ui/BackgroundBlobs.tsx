const PRIMARY_BLOB = { backgroundColor: "var(--blob-primary)" };
const SECONDARY_BLOB = { backgroundColor: "var(--blob-secondary)" };

export function BackgroundBlobs() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[110vh] overflow-hidden"
    >
      {/* Solid-color circles blurred via `filter: blur()`, not
          radial-gradient — per the approved Claude Design export. Both
          --blob-primary and --blob-secondary resolve to the same near-black
          purple in dark mode and to distinct lavender tones in light mode,
          so a single set of elements works for both themes.

          Reference gave exact px sizes/blur/opacity for a ~900px-tall
          single-hero mockup: blob 1 (top-center, overlapping the navbar)
          420x300 blur 70 opacity .85; blob 2 (lower-right) 460x460 blur 100
          opacity .80; blob 3 (lower-left) 380x340 blur 100 opacity .50. Our
          global layer spans a taller viewport, so positions below are
          proportional rather than literal, preserving the same relative
          composition. Sizes/blur scale down below `md` for mobile
          performance; opacity stays constant across breakpoints. */}
      <div
        style={PRIMARY_BLOB}
        className="blob-drift-1 absolute top-[-4%] left-[46%] h-[130px] w-[180px] -translate-x-1/2 rounded-full opacity-85 blur-[30px] md:h-[300px] md:w-[420px] md:blur-[70px]"
      />
      <div
        style={PRIMARY_BLOB}
        className="blob-drift-2 absolute top-[55%] right-[-8%] h-[200px] w-[200px] rounded-full opacity-80 blur-[45px] md:h-[460px] md:w-[460px] md:blur-[100px]"
      />
      <div
        style={SECONDARY_BLOB}
        className="blob-drift-3 absolute bottom-[2%] left-[-6%] h-[170px] w-[150px] rounded-full opacity-50 blur-[45px] md:h-[340px] md:w-[380px] md:blur-[100px]"
      />
    </div>
  );
}
