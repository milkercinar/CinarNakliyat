"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CDN_SOURCE = "https://assets.mixkit.co/videos/28787/28787-720.mp4";

export default function HeroVideo() {
  const heroRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [source, setSource] = useState("/truck-scrub.mp4");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const hero = heroRef.current;
    const frame = frameRef.current;
    const video = videoRef.current;
    if (!hero || !frame || !video) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let targetTime = 0;
    let lastTime = -1;
    let duration = 0;

    const onMetadata = () => {
      duration = Number.isFinite(video.duration) ? video.duration : 0;
      video.pause();
      try { video.currentTime = 0.01; } catch { /* first frame pending */ }
      ScrollTrigger.refresh();
    };
    const updateFrame = () => {
      if (!duration || video.seeking || video.readyState < 2) return;
      const next = Math.min(Math.max(targetTime, 0.01), Math.max(0.01, duration - 0.01));
      // A 24fps all-keyframe file needs at most one seek per decoded frame.
      if (Math.abs(next - lastTime) < 1 / 24 && Math.abs(next - duration) > 1 / 24) return;
      lastTime = next;
      video.currentTime = next;
    };

    video.addEventListener("loadedmetadata", onMetadata);
    if (video.readyState >= 1) onMetadata();
    gsap.ticker.add(updateFrame);

    const trigger = ScrollTrigger.create({
      trigger: hero,
      start: "top top",
      end: "+=230%",
      pin: hero,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate(self) {
        targetTime = self.progress * duration;
        if (progressRef.current) progressRef.current.style.transform = `scaleX(${self.progress})`;
      },
    });

    const narrative = gsap.timeline({
      scrollTrigger: { trigger: hero, start: "top top", end: "+=230%", scrub: 0.6 },
    });
    narrative
      .to(".hero-title", { yPercent: -18, opacity: 0, duration: 0.34 }, 0.34)
      .to(".hero-intro", { y: -30, opacity: 0, duration: 0.22 }, 0.38)
      .fromTo(".hero-outro", { y: 70, opacity: 0 }, { y: 0, opacity: 1, duration: 0.24 }, 0.66)
      .to(".hero-video", { scale: 1.08, duration: 1, ease: "none" }, 0);

    return () => {
      trigger.kill();
      narrative.scrollTrigger?.kill();
      narrative.kill();
      gsap.ticker.remove(updateFrame);
      video.removeEventListener("loadedmetadata", onMetadata);
    };
  }, [source]);

  return (
    <section ref={heroRef} className="hero-shell" id="baslangic" aria-label="Çınar Nakliyat tanıtım">
      <div ref={frameRef} className="hero-frame">
        <video
          ref={videoRef}
          className="hero-video"
          src={source}
          poster="/truck-poster.jpg"
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          onError={() => { if (source !== CDN_SOURCE) setSource(CDN_SOURCE); }}
        />
        <div className="hero-vignette" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="crosshair hero-crosshair-left" aria-hidden="true" />
        <div className="crosshair hero-crosshair-right" aria-hidden="true" />

        <div className="hero-content hero-intro site-container">
          <div className="eyebrow"><span className="signal-dot" /> 1980'DEN BERİ / AĞIR YÜK OPERASYONLARI</div>
          <h1 className="hero-title">YÜKÜN<br /><em>AĞIRI</em><span className="title-period">.</span></h1>
          <div className="hero-bottom-line">
            <p>Demirden mermere. Şehirden şehre.<br />Her sevkiyatta aynı kararlılık.</p>
            <a href="tel:+905469690233" className="hero-call"><span>SEVKİYAT & FİYAT HATTI</span><strong>0546 969 0233 <span aria-hidden="true">↗</span></strong></a>
          </div>
        </div>

        <div className="hero-outro site-container" aria-hidden="true">
          <div className="eyebrow">OPERASYON / 01</div>
          <p>YOL UZUN.<br /><span>GÜVEN TAM.</span></p>
          <div className="outro-rule" />
          <small>81 İLDE AĞIR YÜK ÇÖZÜMLERİ</small>
        </div>

        <div className="hero-telemetry mono" aria-hidden="true">
          <span>TR / 41.0082° N — 28.9784° E</span><span>GPS SIGNAL <b className="online-dot" /> ACTIVE</span>
        </div>
        <div className="hero-scroll mono" aria-hidden="true">SCROLL TO EXPLORE <span>↓</span></div>
        <div className="hero-progress"><div ref={progressRef} /></div>
      </div>
    </section>
  );
}
