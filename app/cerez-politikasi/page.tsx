import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Çerez Politikası | Çınar Nakliyat",
  description: "Çınar Nakliyat internet sitesi çerez ve tarayıcı depolama politikası.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      eyebrow="YASAL / 02"
      title="ÇEREZ POLİTİKASI"
      lead="Bu politika, Çınar Nakliyat internet sitesinde kullanılan çerezleri ve benzer tarayıcı teknolojilerini açıklar."
    >
      <section className="legal-section">
        <h2>01 / Çerez nedir?</h2>
        <p>
          Çerezler ve benzer teknolojiler, bir internet sitesini ziyaret ettiğinizde cihazınızda
          saklanabilen küçük kayıtlardır. Sitenin çalışması, tercihlerinizin hatırlanması veya açık
          rızanız bulunması hâlinde ölçüm ve pazarlama amaçları için kullanılabilirler.
        </p>
      </section>

      <section className="legal-section">
        <h2>02 / Bu sitede ne kullanılıyor?</h2>
        <p>
          Bu sitede analitik, reklam veya davranışsal pazarlama çerezi kullanılmamaktadır. Yalnızca
          çerez bilgilendirmesini gördüğünüzü hatırlamak için birinci taraf, zorunlu bir tarayıcı
          yerel depolama kaydı kullanılır.
        </p>
        <div className="legal-table-wrap">
          <table className="legal-table">
            <thead><tr><th>Kayıt</th><th>Tür</th><th>Amaç</th><th>Süre</th></tr></thead>
            <tbody>
              <tr>
                <td>cinar_cookie_notice</td>
                <td>Birinci taraf yerel depolama / zorunlu</td>
                <td>Bilgilendirme tercihini hatırlamak</td>
                <td>12 ay</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="legal-section">
        <h2>03 / Dış bağlantılar ve teknik istekler</h2>
        <p>
          Yol tarifi bağlantısı yalnızca sizin tıklamanız üzerine Google Maps&apos;i yeni sekmede açar;
          açılan hizmetin kendi gizlilik ve çerez kuralları geçerlidir. Site barındırma, içerik
          dağıtımı ve dışarıdan yüklenen yazı tipi gibi teknik hizmetlerde hizmet sağlayıcılar IP
          adresi ve standart erişim kayıtlarını teknik olarak işleyebilir. Bu kayıtlar Çınar Nakliyat
          tarafından reklam profili oluşturmak amacıyla kullanılmaz.
        </p>
      </section>

      <section className="legal-section">
        <h2>04 / Tercihlerinizi yönetme</h2>
        <p>
          Tarayıcınızın ayarlarından çerezleri ve site verilerini silebilir veya depolamayı
          engelleyebilirsiniz. Zorunlu depolamayı silerseniz çerez bilgilendirmesi bir sonraki
          ziyaretinizde yeniden gösterilir. İleride analitik veya pazarlama teknolojisi eklenirse,
          gerekli olduğu ölçüde önceden açık rızanız istenir ve bu politika güncellenir.
        </p>
      </section>

      <section className="legal-section">
        <h2>05 / İletişim ve güncellemeler</h2>
        <p>
          Sorularınız için <a href="tel:+905323526514">+90 532 352 6514</a> numarasından bize
          ulaşabilirsiniz. Teknolojiler veya mevzuat değiştiğinde politika güncellenebilir; güncel
          tarih sayfanın üst kısmında gösterilir.
        </p>
      </section>
    </LegalPage>
  );
}
