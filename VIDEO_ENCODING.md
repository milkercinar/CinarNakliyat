# Hero scrub asset

Source: [Mixkit orange heavy cargo transport](https://mixkit.co/free-stock-video/orange-heavy-cargo-transport-moving-on-the-road-2741/), downloaded under the [Mixkit Stock Video Free License](https://mixkit.co/license/#videoFree) for commercial use and stored at `public/truck-heavy.mp4`. This is representative footage, not a Çınar Nakliyat vehicle. The production page prefers the local all-keyframe `public/truck-scrub.mp4`; if it fails to load, it falls back to the source's 1080p Mixkit CDN clip. A matching local poster is shown while the first frame loads and for reduced-motion users.

To regenerate the seek-optimized video with FFmpeg:

```sh
ffmpeg -i public/truck-heavy.mp4 -vf "fps=24,scale=1920:-2" -c:v libx264 -preset slow -crf 20 -g 1 -keyint_min 1 -sc_threshold 0 -bf 0 -pix_fmt yuv420p -movflags +faststart -an public/truck-scrub.mp4
```

Every frame is independently decodable (`-g 1`, no B-frames), trading a larger file for accurate random access during scroll. Lenis and ScrollTrigger use GSAP's single ticker. The video is never autoplayed or looped.

The checked-in delivery file is 1920×1080 from a genuine 1080p source, trimmed to the 5.6 seconds in which the truck remains in frame. It uses CRF 23 to keep the all-keyframe file under 10 MB while retaining visibly more detail than the previous 720p source. To reproduce the shipped asset, add `-t 5.6` after the input and change `-crf 20` to `-crf 23` in the command above.
