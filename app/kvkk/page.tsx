import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Çınar Nakliyat",
  description: "Çınar Nakliyat internet sitesi kişisel verilerin işlenmesine ilişkin aydınlatma metni.",
};

export default function KvkkPage() {
  return (
    <LegalPage
      eyebrow="YASAL / 01"
      title="KVKK AYDINLATMA METNİ"
      lead="Bu metin, internet sitemizi ziyaretiniz ve bizimle iletişiminiz sırasında işlenebilecek kişisel veriler hakkında 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında bilgi vermek amacıyla hazırlanmıştır."
    >
      <section className="legal-section">
        <h2>01 / Veri sorumlusu</h2>
        <p>
          Bu internet sitesi bakımından veri sorumlusu ve site işletmecisi Çınar Nakliyat&apos;tır.
          İletişim adresimiz Fevzi Çakmak Caddesi, Işıthan İş Hanı 4/404, Karabük Merkez,
          Türkiye; telefon numaramız <a href="tel:+905323526514">+90 532 352 6514</a>&apos;tür.
        </p>
      </section>

      <section className="legal-section">
        <h2>02 / İşlenen veriler</h2>
        <p>Hizmetin niteliğine göre aşağıdaki veriler sınırlı olarak işlenebilir:</p>
        <ul>
          <li>Site erişimine ilişkin IP adresi, cihaz/tarayıcı bilgisi, tarih-saat ve sunucu kayıtları,</li>
          <li>Telefonla bizimle iletişime geçmeniz halinde ad-soyad, telefon ve gönüllü olarak ilettiğiniz yük, güzergâh ve hizmet talebi bilgileri,</li>
          <li>Çerez bilgilendirmesini gördüğünüzü hatırlayan tarayıcı tercih kaydı.</li>
        </ul>
        <p>Sitede çevrim içi iletişim formu, üyelik alanı veya çevrim içi ödeme sistemi bulunmamaktadır.</p>
      </section>

      <section className="legal-section">
        <h2>03 / İşleme amaçları</h2>
        <p>
          Veriler; sitenin güvenli ve kesintisiz çalıştırılması, teknik sorunların giderilmesi,
          bilgi güvenliğinin sağlanması, telefonla iletilen taşıma ve fiyat taleplerinin
          değerlendirilmesi, operasyon planlaması, sözleşme süreçlerinin yürütülmesi ve hukuki
          yükümlülüklerin yerine getirilmesi amaçlarıyla işlenebilir.
        </p>
      </section>

      <section className="legal-section">
        <h2>04 / Toplama yöntemi ve hukuki sebep</h2>
        <p>
          Veriler siteye erişim sırasında elektronik ortamda sunucu kayıtları ve tarayıcı
          depolaması yoluyla; iletişim kurulması halinde ise telefon üzerinden toplanır. İşleme,
          somut duruma göre KVKK&apos;nın 5/2 maddesindeki sözleşmenin kurulması veya ifası, hukuki
          yükümlülüğün yerine getirilmesi ve temel haklara zarar vermemek kaydıyla meşru menfaat
          hukuki sebeplerine dayanır.
        </p>
      </section>

      <section className="legal-section">
        <h2>05 / Aktarım</h2>
        <p>
          Kişisel veriler, amaçla sınırlı ve gerekli olduğu ölçüde barındırma ve bilgi teknolojisi
          hizmeti sağlayıcılarına, taşıma hizmetinin yürütülmesinde görev alan iş ortaklarına ve
          hukuken yetkili kamu kurumlarına aktarılabilir. Yurt dışına aktarım söz konusu olduğunda
          KVKK&apos;nın 9. maddesinde öngörülen şart ve güvenceler uygulanır.
        </p>
      </section>

      <section className="legal-section">
        <h2>06 / Saklama süresi</h2>
        <p>
          Veriler, işleme amacının gerektirdiği süre ile ilgili mevzuattaki zorunlu saklama süreleri
          boyunca tutulur; süre sonunda silinir, yok edilir veya anonim hâle getirilir. Çerez
          bildirimi tercih kaydı en fazla 12 ay saklanır.
        </p>
      </section>

      <section className="legal-section">
        <h2>07 / KVKK kapsamındaki haklarınız</h2>
        <p>KVKK&apos;nın 11. maddesi uyarınca;</p>
        <ul>
          <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme ve işlenmişse bilgi talep etme,</li>
          <li>İşleme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme,</li>
          <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
          <li>Eksik veya yanlış işlenen verilerin düzeltilmesini isteme,</li>
          <li>Kanundaki şartlar dâhilinde silme veya yok etme talebinde bulunma,</li>
          <li>Düzeltme ve silme işlemlerinin aktarılan üçüncü kişilere bildirilmesini isteme,</li>
          <li>Otomatik sistemlerle analiz sonucu aleyhinize bir sonucun ortaya çıkmasına itiraz etme,</li>
          <li>Kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde giderim talep etme</li>
        </ul>
        <p>haklarına sahipsiniz.</p>
      </section>

      <section className="legal-section">
        <h2>08 / Başvuru</h2>
        <p>
          Taleplerinizi kimliğinizi ve talebinizi açıklayan imzalı bir dilekçeyle yukarıdaki şirket
          adresine iletebilirsiniz. Bilgi almak için <a href="tel:+905323526514">+90 532 352 6514</a>
          numarasını arayabilirsiniz. Başvurunuzda gereksiz özel nitelikli kişisel veri paylaşmamanızı
          öneririz.
        </p>
      </section>
    </LegalPage>
  );
}
