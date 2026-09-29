import Link from "next/link";
import type { ReactNode } from "react";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  lead: string;
  children: ReactNode;
};

export default function LegalPage({ eyebrow, title, lead, children }: LegalPageProps) {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <Link className="legal-brand" href="/" aria-label="Çınar Nakliyat ana sayfa">
          <span className="brand-symbol">Ç<span>N</span></span>
          <span className="brand-word">ÇINAR<br /><b>NAKLİYAT</b></span>
        </Link>
        <Link className="legal-back mono" href="/">ANA SAYFA ↗</Link>
      </header>

      <article className="legal-wrap">
        <div className="legal-kicker mono"><i className="square" /> {eyebrow}</div>
        <h1>{title}</h1>
        <p className="legal-lead">{lead}</p>
        <div className="legal-updated mono">SON GÜNCELLEME / 29.09.2026</div>
        {children}
      </article>

      <footer className="legal-footer mono">
        <span>© 2026 ÇINAR NAKLİYAT · KARABÜK</span>
        <div>
          <Link href="/kvkk">KVKK</Link>
          <Link href="/cerez-politikasi">ÇEREZ POLİTİKASI</Link>
        </div>
      </footer>
    </main>
  );
}
