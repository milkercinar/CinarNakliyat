"use client";

import { useState } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import HeroVideo from "@/components/HeroVideo";

const services = [
  { id: "01", title: "DEMİR & ÇELİK", sub: "SANAYİNİN OMURGASI", detail: "Profil, sac, kütük ve yapısal çelik sevkiyatları. Yüke uygun sabitleme ve güzergâh planlamasıyla ağır sanayi taşımacılığı." },
  { id: "02", title: "HURDA METAL", sub: "DÖNGÜYÜ HAREKETE GEÇİRİRİZ", detail: "Hurda demir ve metal yüklerinin tesisler arası güvenli, düzenli ve operasyonel gerekliliklere uygun nakliyesi." },
  { id: "03", title: "MERMER & GRANİT", sub: "TONLARCA HASSASİYET", detail: "Mermer ve granit blokların ağırlık merkezine, istifine ve yol koşullarına göre özenle planlanan taşımacılığı." },
  { id: "04", title: "AĞIR & GABARİ YÜK", sub: "SINIRLARIN ÖTESİNDE", detail: "Şehir içi ve şehirler arası hacimli, ağır yükler için sevkiyat öncesi değerlendirme ve koordineli taşıma çözümleri." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main>
      <SmoothScroll />
      <header className="topbar">
        <div className="site-container topbar-inner">
          <a className="brand" href="#baslangic" aria-label="Çınar Nakliyat, başlangıç"><span className="brand-symbol">Ç<span>N</span></span><span className="brand-word">ÇINAR<br /><b>NAKLİYAT</b></span></a>
          <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Ana menü">
            <a href="#hakkimizda" onClick={() => setMenuOpen(false)}>KURUMSAL</a>
            <a href="#hizmetler" onClick={() => setMenuOpen(false)}>UZMANLIKLAR</a>
            <a href="#operasyon" onClick={() => setMenuOpen(false)}>OPERASYON</a>
            <a href="#iletisim" onClick={() => setMenuOpen(false)}>İLETİŞİM</a>
          </nav>
          <a className="nav-call" href="tel:+905323526514"><span className="signal-dot" /> +90 532 352 6514 <b>↗</b></a>
          <button className="menu-button" type="button" aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
        </div>
      </header>

      <HeroVideo />

      <div className="data-ticker mono" aria-label="Şirket performans verileri"><div className="ticker-track">{Array.from({ length: 2 }).map((_, i) => <span key={i}>ÇINAR NAKLİYAT <i>✳</i> 1980'DEN GÜNÜMÜZE <i>✳</i> 81 İL KAPSAMA <i>✳</i> AĞIR YÜKTE GÜVEN <i>✳</i> </span>)}</div></div>

      <section className="manifesto section-pad" id="hakkimizda">
        <div className="site-container">
          <div className="section-heading mono"><span><i className="square" /> 001 / KİMİZ</span><span>ÇINAR NAKLİYAT © 1980</span></div>
          <div className="manifesto-layout">
            <div className="manifesto-aside mono"><span>45+ YIL<br />SAHADA.</span><div className="vertical-line" /><span>KARABÜK<br />TÜRKİYE</span></div>
            <div><h2>YÜK BÜYÜDÜKÇE<br /><span>SORUMLULUĞUMUZ</span><br />DA BÜYÜR<span className="orange">.</span></h2><div className="manifesto-copy"><p>1980'den bu yana ağır yük taşımacılığının her aşamasında sahadayız. Demir-çelik, hurda ve mermer gibi yüklerde, yolun her kilometresini planlı bir operasyon olarak görüyoruz.</p><p>Tecrübemiz bir sayıdan ibaret değil. Her teslimatta verilen sözün arkasında durmak, Çınar Nakliyat'ın çalışma biçimi.</p></div></div>
          </div>
        </div>
      </section>

      <section className="metrics" aria-label="Rakamlarla Çınar Nakliyat">
        <div className="site-container metrics-grid">
          <div className="metric"><span className="metric-index mono">01 / KÖKLÜ GEÇMİŞ</span><strong>1980<span>→</span></strong><p>Bugüne uzanan deneyim</p></div>
          <div className="metric"><span className="metric-index mono">02 / ERİŞİM</span><strong>81<span> İL</span></strong><p>Türkiye çapında kapsama</p></div>
          <div className="metric"><span className="metric-index mono">03 / GÜVEN</span><strong>%99.8</strong><p>Hasarsız sevkiyat</p></div>
          <div className="metric"><span className="metric-index mono">04 / SAHA DENEYİMİ</span><strong>5.000<span>+</span></strong><p>Tamamlanan ağır yük seferi</p></div>
        </div>
      </section>

      <section className="services section-pad" id="hizmetler">
        <div className="site-container">
          <div className="section-heading mono"><span><i className="square" /> 002 / UZMANLIK ALANLARI</span><span>DOĞRU YÜK. DOĞRU PLAN.</span></div>
          <div className="services-lead"><h2>HER TONUN<br /><em>BİR PLANI VAR.</em></h2><p>Yükünüzün niteliği ne olursa olsun, sevkiyatın her adımı sağlam bir planla başlar.</p></div>
          <div className="service-list">{services.map((s) => <article className="service-row" key={s.id}><span className="service-num mono">/{s.id}</span><div className="service-main"><span className="service-sub mono">{s.sub}</span><h3>{s.title}</h3></div><p>{s.detail}</p><span className="service-arrow" aria-hidden="true">↗</span></article>)}</div>
        </div>
      </section>

      <section className="operation" id="operasyon">
        <div className="operation-media"><img className="operation-photo" src="/volvo-fh.jpg" alt="Karayolundaki Volvo FH 520 çekici; Çınar Nakliyat filosuna ait olmayan temsili fotoğraf" /><div className="media-label mono"><span>VOLVO FH / TEMSİLİ GÖRSEL</span><span>AĞIR YÜK OPERASYONLARI</span></div><span className="media-cross" aria-hidden="true">+</span><a className="media-credit" href="https://commons.wikimedia.org/wiki/File:Volvo_FH_520,_North_Fremantle,_2020_(01).jpg" target="_blank" rel="noopener noreferrer">Fotoğraf: Bahnfrend · CC BY-SA 4.0 · Kırpılarak kullanılmıştır ↗</a></div>
        <div className="operation-content"><div className="section-heading mono"><span><i className="square" /> 003 / OPERASYON</span><span>SAHADAN VERİ</span></div><div className="operation-main"><span className="operation-kicker mono">GÜZERGÂHTAN TESLİMATA</span><h2>HER ADIMI<br /><em>TAKİPTE.</em></h2><p>Sevkiyat planlaması, aktif GPS takibi ve 7/24 telemetriyle yükünüzün yolculuğu kontrol altında. İhtiyaç duyduğunuz anda doğrudan ekibimize ulaşın.</p><div className="system-status mono"><span className="online-dot" /> SİSTEM DURUMU: AKTİF <span>7/24 TELEMETRİ & GPS</span></div></div></div>
      </section>

      <section className="contact section-pad" id="iletisim"><div className="site-container"><div className="section-heading mono"><span><i className="square" /> 004 / İLETİŞİM</span><span>KARABÜK&apos;TEN TÜM TÜRKİYE&apos;YE</span></div><div className="contact-content"><div><span className="contact-kicker mono">SEVKİYAT & FİYAT HATTI</span><h2>YÜKÜNÜZÜ<br /><em>KONUŞALIM.</em></h2><p className="contact-intro">Yükün türünü, teslimat noktasını ve planladığınız tarihi bize iletin. Taşıma seçeneklerini doğrudan birlikte değerlendirelim.</p><a className="contact-primary" href="tel:+905323526514"><span>+90 532 352 6514</span><span aria-hidden="true">↗</span></a></div><div className="contact-action"><div className="contact-detail"><span className="mono">DOĞRUDAN İLETİŞİM</span><p>Sevkiyat planlaması ve fiyat görüşmesi için ekibimizi arayın.</p></div><div className="contact-detail"><span className="mono">ŞİRKET MERKEZİ</span><address>Fevzi Çakmak Caddesi<br />Işıthan İş Hanı 4/404<br />Karabük Merkez, Türkiye</address></div><a href="https://www.google.com/maps/search/?api=1&query=Fevzi+%C3%87akmak+Caddesi+I%C5%9F%C4%B1than+%C4%B0%C5%9F+Han%C4%B1+4%2F404+Karab%C3%BCk+Merkez" target="_blank" rel="noopener noreferrer" className="map-link mono">KONUMU GÖRÜNTÜLE <span aria-hidden="true">↗</span></a></div></div><footer className="footer mono"><span>© {new Date().getFullYear()} ÇINAR NAKLİYAT · KARABÜK</span><a href="#baslangic">BAŞA DÖN ↑</a></footer></div></section>
    </main>
  );
}
