# Hero scrub asset

Source: [Mixkit cargo truck driving on the highway](https://mixkit.co/free-stock-video/cargo-truck-driving-on-the-highway-28787/), stored at `public/truck-heavy.mp4`. The production page prefers the local all-keyframe `public/truck-scrub.mp4`; if it is absent, it falls back to Mixkit's CDN clip. A local poster is shown while the first frame loads and for reduced-motion users.

To regenerate the seek-optimized video with FFmpeg:

```sh
ffmpeg -i public/truck-heavy.mp4 -vf "fps=24,scale=1920:-2" -c:v libx264 -preset slow -crf 20 -g 1 -keyint_min 1 -sc_threshold 0 -bf 0 -pix_fmt yuv420p -movflags +faststart -an public/truck-scrub.mp4
```

Every frame is independently decodable (`-g 1`, no B-frames), trading a larger file for accurate random access during scroll. Lenis and ScrollTrigger use GSAP's single ticker. The video is never autoplayed or looped.

The checked-in delivery file uses the source's native 1280px width and the same all-keyframe settings at CRF 30 to fit the hosting source-size limit (about 9 MB). To reproduce it, replace `scale=1920:-2` with `scale=1280:-2` and `-crf 20` with `-crf 30` in the command above. The source itself is 1280×720; upscaling to 1920 does not create extra image detail.
