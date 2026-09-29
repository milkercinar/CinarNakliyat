"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "cinar_cookie_notice";
const ONE_YEAR = 365 * 24 * 60 * 60 * 1000;

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        setVisible(true);
        return;
      }

      const preference = JSON.parse(saved) as { expiresAt?: number };
      if (!preference.expiresAt || preference.expiresAt < Date.now()) {
        window.localStorage.removeItem(STORAGE_KEY);
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const acknowledge = () => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ acknowledgedAt: Date.now(), expiresAt: Date.now() + ONE_YEAR }),
      );
    } catch {
      // Gizli mod veya kapalı depolama halinde bildirim yine de kapatılabilir.
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside className="cookie-notice" role="region" aria-label="Çerez bilgilendirmesi">
      <div>
        <span className="cookie-label mono">GİZLİLİK / ÇEREZLER</span>
        <p>
          Bu site yalnızca temel işlevler ve bildirim tercihinizi hatırlamak için zorunlu
          tarayıcı depolaması kullanır. Analitik veya reklam çerezi kullanılmaz.
        </p>
        <div className="cookie-links mono">
          <Link href="/cerez-politikasi">ÇEREZ POLİTİKASI</Link>
          <Link href="/kvkk">KVKK AYDINLATMA METNİ</Link>
        </div>
      </div>
      <button type="button" className="cookie-ack mono" onClick={acknowledge}>
        ANLADIM
      </button>
    </aside>
  );
}
