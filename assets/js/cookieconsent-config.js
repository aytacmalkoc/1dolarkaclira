import "https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.0/dist/cookieconsent.umd.js";

CookieConsent.run({
  hideFromBots: true,
  cookie: {
    name: "cc_cookie",
  },
  currLang: "tr",
  guiOptions: {
    consentModal: {
      layout: "cloud",
      position: "bottom right",
      equalWeightButtons: true,
      flipButtons: false,
    },
    preferencesModal: {
      layout: "box",
      position: "right",
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
      enabled: false,
    },
    analytics: {
      enabled: true,
    },
  },
  language: {
    default: "tr",
    autoDetect: "browser",
    translations: {
      tr: {
        consentModal: {
          title: "🍪 Çerez Kullanımı",
          description:
            "Size en iyi deneyimi sağlamak amacıyla, cihaz bilgilerini depolamak ve/veya bunlara erişmek için çerezler gibi teknolojiler kullanıyoruz. Bu teknolojilere izin vermek, bu sitedeki gezinme davranışı veya benzersiz kimlikler gibi verileri işlememize olanak tanıyacaktır. Onay vermemek veya onayı geri çekmek belirli özellikleri ve işlevleri olumsuz etkileyebilir.",
          closeIconLabel: "",
          acceptAllBtn: "Tümünü Kabul Et",
          acceptNecessaryBtn: "Tümünü Reddet",
          showPreferencesBtn: "İzinleri Yönet",
          footer: "",
        },
        preferencesModal: {
          title: "İzinleri Yönet",
          closeIconLabel: "Kapat",
          acceptAllBtn: "Tümünü Kabul Et",
          acceptNecessaryBtn: "Tümünü Reddet",
          savePreferencesBtn: "İzinleri Kaydet",
          serviceCounterLabel: "Hizmet|Hizmetler",
          sections: [
            {
              title: "Gizlilik Seçimleriniz",
              description:
                "Herhangi bir web sitesini ziyaret ettiğinizde, bu site çoğunlukla çerezler biçiminde olmak üzere tarayıcınızda bilgi saklayabilir veya alabilir. Kişisel Çerez Hizmetlerinizi buradan kontrol edin.",
            },
            {
              title: "Analiz",
              description:
                "Analiz çerezleri, bilgileri anonim olarak toplayıp raporlayarak web sitesi sahiplerinin, ziyaretçilerin web siteleri ile nasıl etkileşimde bulunduğunu anlamalarına yardımcı olur.",
              linkedCategory: "analytics",
              cookieTable: {
                headers: {
                  name: "Çerez",
                  domain: "Alan Adı",
                  type: "Tür",
                  desc: "Açıklama",
                  exp: "Süre",
                },
                body: [
                  {
                    name: "_ga",
                    domain: ".1dolarkaclira.com",
                    type: "Analytics",
                    desc: "Google Analytics bu çerezi ziyaretçi, oturum ve kampanya verilerini hesaplamak ve sitenin analitik raporu için site kullanımını izlemek için ayarlar. Çerez bilgileri anonim olarak saklar ve benzersiz ziyaretçileri tanımak için rastgele bir sayı atar.",
                    exp: "1 yıl 1 ay 4 gün",
                  },
                  {
                    name: "_ga_*",
                    domain: ".1dolarkaclira.com",
                    type: "Analytics",
                    desc: "Google Analytics bu çerezi sayfa görüntülerini depolamak ve saymak için ayarlar.",
                    exp: "1 yıl 1 ay 4 gün",
                  },
                ],
              },
            },
            {
              title: "Detaylı Bilgi & İletişim",
              description:
                'Çerezlere ve tercihlerinize ilişkin herhangi bir sorunuz için lütfen <a class="cc__link" href="mailto:bilgi@1dolarkaclira.com">bize ulaşın</a>.',
            },
          ],
        },
      },
    },
  },
});
