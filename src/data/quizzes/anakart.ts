import type { Question } from "../../types";

export const anakart: Question[] = [
  {
    text: "İşlemcinin anakarta fiziksel olarak bağlandığı yuvaya ___ denir.",
    answer: "işlemci soketi",
  },
  {
    text: "___ tipi soketlerde işlemcinin pinleri işlemcinin kendisindedir.",
    answer: "PGA (Pin Grid Array)",
  },
  {
    text: "Intel işlemcilerde soket üzerindeki pinler anakartta bulunur; bu tip sokete ___ denir.",
    answer: "LGA (Land Grid Array)",
  },
  {
    text: "İşlemci soket türü ile ___ uyumluluğu birebir olmalıdır, aksi takdirde çalışmaz.",
    answer: "anakart",
  },
  {
    text: "Dizüstü bilgisayarlarda kullanılan RAM tipi ___ olarak adlandırılır.",
    answer: "SO-DIMM",
  },
  {
    text: "RAM modüllerinin anakarta takıldığı yuvaya ___ denir.",
    answer: "DIMM slotu",
  },
  {
    text: "RAM yuvalarının çiftli çalışması için aynı türde iki RAM ___ olarak takılmalıdır.",
    answer: "çift kanal (dual channel)",
  },
  {
    text: "RAM slotlarının sayısı, anakartın ___ kapasitesini belirler.",
    answer: "maksimum bellek",
  },
  {
    text: "Anakartın veri akışını yöneten temel kontrol birimi ___ olarak adlandırılır.",
    answer: "yongaseti / chipset",
  },
  {
    text: "Chipset, anakarttaki bileşenlerin birbiriyle ___ kurmasını sağlar.",
    answer: "iletişim",
  },
  {
    text: "Modern sistemlerde genellikle tek bir ana chipset vardır ve buna ___ denir.",
    answer: "PCH (Platform Controller Hub)",
  },
  {
    text: "Eski anakartlarda kuzey ve güney köprüsü olarak bilinen iki ana ___ vardı.",
    answer: "yongaseti",
  },
  {
    text: "Kuzey köprüsü, CPU, RAM ve ___ ile doğrudan bağlantılıydı.",
    answer: "GPU",
  },
  {
    text: "Güney köprüsü, USB portları, ses kartı ve ___ gibi çevresel birimleri yönetirdi.",
    answer: "sabit disk",
  },
  {
    text: "Bilgisayar bileşenleri arasında veri taşıyan yollar ___ olarak adlandırılır.",
    answer: "veri yolu",
  },
  {
    text: "___ veri yolu, CPU ile RAM arasındaki iletişimi sağlar.",
    answer: "sistem veri yolu (FSB)",
  },
  {
    text: "PCI Express (PCIe), günümüzde en yaygın kullanılan ___ veri yoludur.",
    answer: "genişletme",
  },
  {
    text: "___ veri yolu, sabit disklerle işlemci arasında bağlantı kurmak için kullanılır.",
    answer: "SATA",
  },
  {
    text: "PCIe x16 yuvası genellikle ___ için kullanılır.",
    answer: "ekran kartı",
  },
    {
    text: "Anakart üzerinde PCIe yuvalarının hızını belirleyen faktör ___ ve versiyon (örneğin PCIe 3.0, 4.0) parametreleridir.",
    answer: "x (lane) sayısı, ",
  },
  {
    text: "FSB (Front Side Bus) yerine modern anakartlarda kullanılan ve CPU ile yonga seti arasındaki iletişimi sağlayan bağlantı teknolojisi ___ olarak adlandırılır.",
    answer: "DMI (Direct Media Interface)",
  },
  {
    text: "Anakart üzerindeki RAM denetleyicisi bazı modern işlemcilerde ___ olarak işlemciye entegre edilmiştir.",
    answer: "bellek denetleyicisi (Memory Controller)",
  },
    {
    text: "PCIe bağlantılarında, veri iletim hızı artarsa, gecikme süresi ___.",
    answer: "azalır",
  },
    {
    text: "Modern anakartlarda CPU ile yonga seti arasındaki iletişim, eski FSB yerine ___ adlı teknoloji ile sağlanır.",
    answer: "DMI",
  },
    {
    text: "Anakart üzerindeki VRM (___) modülü, işlemciye stabil voltaj sağlamaktan sorumludur.",
    answer: "Voltage Regulator Module",
  },
    {
    text: "M.2 slotu genellikle ___ protokolünü kullanarak yüksek hızlı SSD’lerin bağlanmasını sağlar.",
    answer: "PCIe NVMe",
  },
    {
    text: "BIOS yongası anakart üzerinde genellikle ___ türü bir belleğe sahiptir.",
    answer: "Flash ROM",
  },
    {
    text: "Modern anakartlarda kuzey köprüsü ve güney köprüsü fonksiyonlarını tek bir yonga olan ___ üstlenir.",
    answer: "PCH",
  },
    {
    text: "Anakart üzerindeki CMOS pili genellikle ___ Volt değerindedir.",
    answer: "3",
  },
    {
    text: "Dual channel RAM konfigürasyonu, ___ artışı sağlar.",
    answer: "bant genişliği",
  },
    {
    text: "PCIe x16 yuvasındaki 'x16' ifadesi, yuva üzerinde bulunan ___ sayısını belirtir.",
    answer: "lane(şerit)",
  },
    {
    text: "Anakart üzerindeki ___ kullanılarak CMOS belleği sıfırlanabilir ve BIOS ayarları fabrika değerlerine döner.",
    answer: "jumper",
  },
  {
    text: "VRM modülü işlemciye verdiği voltajı gerilim ve ___ ile sürekli kontrol eder.",
    answer: "akım",
  },
    {
    text: "İşlemcinin yüksek güç çekişine bağlı olarak VRM modülü ___ kullanarak ısınmayı önler.",
    answer: "soğutucu (heatsink)",
  },
  {
    text: "VRM devresi, işlemciye ___ voltaj sağlar ve bu voltajın dalgalanmalarını azaltır.",
    answer: "kararlı",
  }
];
