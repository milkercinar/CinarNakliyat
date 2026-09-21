"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CDN_SOURCE = "https://assets.mixkit.co/videos/2741/2741-1080.mp4";
const LOCAL_START = 0.8;
const LOCAL_END = 5.5;

export default function HeroVideo() {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [source, setSource] = useState("/truck-scrub.mp4");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Mobile browser chrome can resize the viewport mid-swipe; keep the pin stable.
    ScrollTrigger.config({ ignoreMobileResize: true });
    const hero = heroRef.current;
    const video = videoRef.current;
    if (!hero || !video) return;
    video.classList.remove("is-ready");

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let targetTime = 0;
    let lastTime = -1;
    let duration = 0;
    let isReady = false;
    const startTime = source === CDN_SOURCE ? 0 : LOCAL_START;

    const onMetadata = () => {
      duration = Number.isFinite(video.duration) ? video.duration : 0;
      video.pause();
      // Decode the first frame before scroll-driven seeking begins.
      targetTime = Math.min(startTime, duration);
      try { video.currentTime = targetTime; } catch { /* first frame pending */ }
      ScrollTrigger.refresh();
    };
    const onReady = () => {
      isReady = true;
      video.classList.add("is-ready");
      updateFrame();
    };
    const updateFrame = () => {
      if (!duration || !isReady || video.seeking) return;
      const frame = 1 / 24;
      const next = Math.min(Math.max(Math.round(targetTime / frame) * frame, 0.01), Math.max(0.01, duration - frame));
      if (Math.abs(next - lastTime) < frame * 0.5) return;
      lastTime = next;
      video.currentTime = next;
    };

    video.addEventListener("loadedmetadata", onMetadata);
    video.addEventListener("loadeddata", onReady);
    video.addEventListener("canplay", onReady);
    video.addEventListener("seeked", updateFrame);
    if (video.readyState >= 1) onMetadata();
    if (video.readyState >= 2) onReady();
    gsap.ticker.add(updateFrame);

    const media = gsap.matchMedia();
    const createNarrative = (mobile: boolean) => {
      const narrative = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: () => `+=${Math.round(hero.offsetHeight * (mobile ? 3.4 : 2.3))}`,
          pin: hero,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          scrub: 0.6,
          onUpdate(self) {
            const endTime = source === CDN_SOURCE ? duration : Math.min(LOCAL_END, duration);
            targetTime = startTime + self.progress * Math.max(0, endTime - startTime);
            // Mobile browsers can pause their animation clock between touch events.
            // Queue the frame from ScrollTrigger as well as from the shared GSAP ticker.
            updateFrame();
            if (progressRef.current) progressRef.current.style.transform = `scaleX(${self.progress})`;
          },
        },
      });

      if (mobile) {
        // Keep the opening message visible through more than one phone swipe.
        narrative
          .to(".hero-title", { yPercent: -12, opacity: 0, duration: 0.17 }, 0.43)
          .to(".hero-intro", { y: -20, opacity: 0, duration: 0.16 }, 0.45)
          .fromTo(".hero-outro", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.22 }, 0.62)
          .to(".hero-scroll", { opacity: 0.35, duration: 1, ease: "none" }, 0);
      } else {
        narrative
          .to(".hero-title", { yPercent: -18, opacity: 0, duration: 0.34 }, 0.34)
          .to(".hero-intro", { y: -30, opacity: 0, duration: 0.22 }, 0.38)
          .fromTo(".hero-outro", { y: 70, opacity: 0 }, { y: 0, opacity: 1, duration: 0.24 }, 0.66)
          .to(".hero-video", { objectPosition: "0% center", duration: 1, ease: "none" }, 0);
      }

      return () => {
        narrative.scrollTrigger?.kill();
        narrative.kill();
      };
    };

    media.add("(max-width: 760px)", () => createNarrative(true));
    media.add("(min-width: 761px)", () => createNarrative(false));

    return () => {
      media.revert();
      gsap.ticker.remove(updateFrame);
      video.removeEventListener("loadedmetadata", onMetadata);
      video.removeEventListener("loadeddata", onReady);
      video.removeEventListener("canplay", onReady);
      video.removeEventListener("seeked", updateFrame);
    };
  }, [source]);

  return (
    <section ref={heroRef} className="hero-shell" id="baslangic" aria-label="Çınar Nakliyat tanıtım">
      <div className="hero-frame">
        <video
          ref={videoRef}
          className="hero-video"
          src={source}
          poster="/truck-poster.jpg"
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          onError={(event) => {
            event.currentTarget.classList.remove("is-ready");
            if (source !== CDN_SOURCE) setSource(CDN_SOURCE);
          }}
        />
        <div className="hero-vignette" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="crosshair hero-crosshair-left" aria-hidden="true" />
        <div className="crosshair hero-crosshair-right" aria-hidden="true" />

        <div className="hero-content hero-intro site-container">
          <div className="eyebrow"><span className="signal-dot" /> 1980'DEN BERİ / AĞIR YÜK OPERASYONLARI</div>
          <h1 className="hero-title"><span>ÇINAR</span><em>NAKLİYAT</em></h1>
          <div className="hero-bottom-line">
            <p>1980&apos;den beri ağır yük taşımacılığı.<br />Karabük&apos;ten Türkiye&apos;nin 81 iline.</p>
            <a href="tel:+905323526514" className="hero-call"><span>SEVKİYAT & FİYAT HATTI</span><strong>+90 532 352 6514 <span aria-hidden="true">↗</span></strong></a>
          </div>
        </div>

        <div className="hero-outro site-container" aria-hidden="true">
          <div className="eyebrow">OPERASYON / 01</div>
          <p>YOL UZUN.<br /><span>GÜVEN TAM.</span></p>
          <div className="outro-rule" />
          <small>81 İLDE AĞIR YÜK ÇÖZÜMLERİ</small>
        </div>

        <div className="hero-telemetry mono" aria-hidden="true">
          <span>TR / KARABÜK MERKEZ · TEMSİLİ GÖRÜNTÜ</span><span>GPS SIGNAL <b className="online-dot" /> ACTIVE</span>
        </div>
        <div className="hero-scroll mono" aria-hidden="true">SCROLL TO EXPLORE <span>↓</span></div>
        <div className="hero-progress"><div ref={progressRef} /></div>
      </div>
    </section>
  );
}
