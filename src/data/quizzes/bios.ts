import type { Question } from "../../types"

export const bios: Question[] = [
 {
    text: "Bilgisayar açıldığında donanım bileşenlerini kontrol edip işletim sistemini başlatan yazılım ___ olarak adlandırılır.",
    answer: "BIOS",
  },
  {
    text: "BIOS ayarlarının saklandığı ve pil desteğiyle veri kaybını önleyen bellek türü ___ olarak bilinir.",
    answer: "CMOS",
  },
  {
    text: "Sistem saati, tarih bilgisi ve donanım yapılandırmaları ___ içinde saklanır.",
    answer: "CMOS belleği",
  },
  {
    text: "BIOS çalıştıktan sonra sistemdeki donanımların temel işlevlerini test eden sürece ___ denir.",
    answer: "POST (Power-On Self Test)",
  },
  {
    text: "BIOS’un sistem açılışında yüklediği ilk donanım, genellikle ___ birimidir.",
    answer: "ön yükleme (boot)",
  },
  {
    text: "Modern sistemlerde BIOS yerine daha gelişmiş olan ___ yazılımı kullanılır.",
    answer: "UEFI",
  },
  {
    text: "BIOS arayüzü üzerinden yapılabilecek işlemler arasında ___ sırasını değiştirme yer alır.",
    answer: "boot (ön yükleme)",
  },
  {
    text: "CMOS pili çıkarılırsa ya da boşalırsa, sistem açılışında tarih/saat bilgisi kaybolur ve ___ ekranı görülebilir.",
    answer: "ayar yapılandırma hatası",
  },
  {
    text: "BIOS yazılımı, anakart üzerindeki ___ yongasına kalıcı olarak yazılmıştır.",
    answer: "ROM",
  },
  {
    text: "BIOS güncelleme işlemi, sistem kararlılığı açısından riskli olabilir ve ___ olarak adlandırılır.",
    answer: "BIOS flash",
  },
  {
    text: "Sistem başlatılamıyor ve BIOS arayüzüne erişilemiyorsa, anakart üzerindeki ___ sıfırlanarak ayarlar fabrika varsayılanlarına döndürülebilir.",
    answer: "CMOS jumper",
  },
  {
    text: "BIOS ayarlarında yapılan değişikliklerin kalıcı olması için işlem sonunda ___ komutu seçilmelidir.",
    answer: "Save & Exit",
  },
  {
    text: "UEFI, klasik BIOS’a göre grafik arayüz desteği ve ___ kapasitesiyle öne çıkar.",
    answer: "büyük disk desteği (2 TB+)",
  },
  {
    text: "Bir sistemde BIOS’a erişmek için genellikle açılış sırasında ___ tuşuna basılır.",
    answer: "Del ya da F2",
  },
    {
    text: "UEFI sistemlerde güvenli açılışı (Secure Boot) devre dışı bırakmak gerekebilir; bu genellikle ___ kurulumu yapılırken istenir.",
    answer: "Linux",
  },
  {
    text: "BIOS güncellemesi başarısız olursa sistem ___ edilemez hale gelebilir.",
    answer: "başlatılamaz",
  },
  {
    text: "Bir sistemde POST sesi hiç gelmiyor ve görüntü yoksa, öncelikle ___ kontrol edilmelidir.",
    answer: "BIOS veya güç bağlantıları",
  },
  {
    text: "BIOS yazılımı güncelleme işlemi anakart üreticisinin ___ üzerinden yapılmalıdır.",
    answer: "resmî web sitesi",
  },
  {
    text: "BIOS üzerinden işlemcinin, belleğin ya da fanların davranışı üzerinde yapılan özel ayarlara ___ denir.",
    answer: "donanım yapılandırması",
  },
  {
    text: "Sistemin hangi aygıttan açılacağını belirleyen BIOS ayarı ___ menüsünde yer alır.",
    answer: "Boot Priority",
  },
  {
    text: "UEFI sistemlerde genellikle BIOS’a ek olarak ___ tabanlı kurtarma araçları da bulunur.",
    answer: "grafik arayüzlü",
  },
  {
    text: "Sistem açılırken BIOS ekranını hızlı geçmek için kullanılan seçenek ___ olarak adlandırılır.",
    answer: "Fast Boot",
  },
  {
    text: "BIOS üzerinden donanım tanımlanmazsa, sistem aygıtı tanımaz ve ___ hatası verebilir.",
    answer: "donanım algılanmadı",
  },
  {
    text: "BIOS’a yapılan müdahalelerden sonra sistem kararsız çalışıyorsa, ilk yapılacak işlem ___ olabilir.",
    answer: "varsayılan ayarlara dönmek",
  },
  {
    text: "CMOS’un içindeki verileri korumak için kullanılan pilin teknik adı ___’dir.",
    answer: "CR2032",
  }
];