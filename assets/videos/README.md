# Supplementary videos

The source-provided prediction clips are included with these exact names:

- `tennis_demo.mp4`
- `badminton_demo.mp4`
- `table_tennis_demo.mp4`

The files use H.264 video, a browser-compatible pixel format, and fast-start metadata. The page displays the corresponding image in `assets/posters/` before playback and falls back to that image if a video cannot be loaded.

The `edge/` directory contains the browser-ready RK3588 RKNN/NPU deployment demonstrations:

- `edge/badminton_rk3588.mp4`
- `edge/table_tennis_rk3588.mp4`
- `edge/tennis_rk3588.mp4`

These clips are displayed in the Edge deployment section with separate poster images. Their overlays report model-inference throughput, not full camera-to-display latency.
