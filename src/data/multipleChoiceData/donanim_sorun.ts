export default [
  {
    text: "POST kart anakart üzerinde genellikle hangi yuvaya takılır?",
    options: ["CPU Soketi", "PCI", "DIMM", "M.2", "SATA"],
    correct: "PCI",
  },
  {
    text: "POST kart ile test yaparken, neden bir PCI yuvasına takıp test ettikten sonra diğer yuvalara geçilir?",
    options: [
      "Her yuvada farklı hata kodları alındığı için",
      "Anakart sadece bir PCI yuvasını desteklediği için",
      "Her yuvanın voltajı farklı olduğu için",
      "Hangi yuvada arıza olduğunu belirlemek için",
      "POST kart sadece ilk PCI yuvasında çalışır"
    ],
    correct: "Hangi yuvada arıza olduğunu belirlemek için",
  },
    {
    "text": "Swap testi bilgisayarda hangi amaca hizmet eder?",
    "options": [
      "RAM modüllerini farklı slotlarda deneyerek arızalı olanı tespit etmek",
      "İşlemcinin sıcaklık kontrolünü yapmak",
      "Sabit diskin performansını ölçmek",
      "Ekran kartı belleğini test etmek",
      "Güç kaynağı voltajını kontrol etmek"
    ],
    "correct": "RAM modüllerini farklı slotlarda deneyerek arızalı olanı tespit etmek"
  },
  {
    text: "POST karttan çıkan ek kablolar anakartta genellikle nereye bağlanır?",
    options: [
      "Ses çıkışına",
      "USB portuna",
      "Güç kaynağına",
      "Anakartın buzzer veya debug pin header’ına",
      "RAM slotlarına"
    ],
    correct: "Anakartın buzzer veya debug pin header’ına",
  },
  {
    text: "POST kartun anakart üzerindeki pin header’ına bağlanan kablosu ne tür bir sinyal taşır?",
    options: ["Analog video sinyali", "UART seri haberleşme", "USB veri sinyali", "PCIe veri yolu", "Ses sinyali"],
    correct: "UART seri haberleşme",
  },
  {
    text: "Bilgisayar kasasındaki buzzer ne amaçla kullanılır?",
    options: [
      "Güç göstergesi için",
      "Sistem açılış ve hata uyarısı için bip sesi vermek",
      "Sistem soğutması için",
      "USB cihazlarının bağlantısını göstermek",
      "Ekran kartı sinyali vermek"
    ],
    correct: "Sistem açılış ve hata uyarısı için bip sesi vermek",
  },
  {
    text: "Swap testi bilgisayarda neyi test etmek için yapılır?",
    options: [
      "RAM modüllerinin performansını ölçmek",
      "İşlemcinin çalışma hızını artırmak",
      "RAM modüllerini farklı slotlarda test ederek arızalı olanı bulmak",
      "Sabit diskin okuma/yazma hızını ölçmek",
      "Ekran kartı belleğini test etmek"
    ],
    correct: "RAM modüllerini farklı slotlarda test ederek arızalı olanı bulmak",
  },
  {
    text: "POST kart üzerindeki LED kodları ne işe yarar?",
    options: [
      "Güç kaynağının voltaj değerlerini gösterir",
      "Anakart üzerindeki bileşenlerin sıcaklık değerlerini gösterir",
      "RAM kullanımını gösterir",
      "Ekran kartının model numarasını gösterir",
      "Bilgisayarın açılışında oluşan hataları sayısal kodlarla gösterir"

    ],
    correct: "Bilgisayarın açılışında oluşan hataları sayısal kodlarla gösterir",
  },
  {
    text: "POST kartın PCI yuvasına takılmasının en büyük avantajı nedir?",
    options: [
      "Anakartın tüm slotlarını aynı anda test edebilmek",
      "Yüksek hızda veri aktarımı sağlamak",
      "Isı dağılımını azaltmak",
      "Sistemin açılışında anlık hata takibi yapılabilmesi",
      "RAM’leri otomatik olarak test etmek"
    ],
    correct: "Sistemin açılışında anlık hata takibi yapılabilmesi",
  },
  [
  {
    "text": "Parçalanmış bir bilgisayarı tamir etmeye başlamadan önce yapılması gereken ilk adım nedir?",
    "options": [
      "İşletim sistemi kurmak veya güncellemek",
      "Tüm parçaların fiziksel durumunu kontrol etmek",
      "BIOS’u güncellemek",
      "Donanım birimlerini değiştirmek",
      "Kasa içini temizlemek"
    ],
    "correct": "Tüm parçaların fiziksel durumunu kontrol etmek"
  },
  {
    "text": "Tanımsız bir bilgisayarda arızalı RAM modülünü bulmak için hangi test uygulanır?",
    "options": [
      "Swap testi",
      "Disk testi",
      "CPU stres testi",
      "GPU benchmark testi",
      "Termal test"
    ],
    "correct": "Swap testi"
  }
]
];