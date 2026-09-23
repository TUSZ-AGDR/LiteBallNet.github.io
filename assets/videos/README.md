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
- `edge/live_rk3588_prototype.mp4`

These clips are displayed in the Edge deployment section with separate poster images. The first three are sport-specific RKNN inference demonstrations. `live_rk3588_prototype.mp4` is a browser-optimized recording of a live RK3588 prototype running the tennis, table-tennis, and badminton pipelines. Product-oriented standby screens are omitted so the public page remains focused on the paper. Their overlays report model-inference throughput, not full camera-to-display latency.
