import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <body style={{
      backgroundColor: "#fff5f7", backgroundImage: 'url("https://wallpaperaccess.com/full/6987807.jpg")', backgroundRepeat: "repeat",
      backgroundSize: "auto"
    }}>
      <center><br></br>

        <div style={{ border: "2px", borderRadius: "8px", width: "350px", height: "200px" }}>
          <img src="https://i.pinimg.com/originals/02/28/74/0228749d03812fc95700955e1a05d42e.gif" />
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <div style={{ border: "solid", borderRadius: "10px", width: "850px", height: "320px", fontFamily: "Times New Roman", fontSize: "18px", backgroundColor: "#fff2f7" }}>
          <p><h2>Neden Yoga Yapmalıyız?</h2></p>
          <p>Yoga, fiziksel ve zihinsel iyilik halini artırmak için nefes almaya odaklanan bir egzersiz şeklidir.</p>
          <p> Stresi azaltmak, sağlıklı kalmak, güç ve esnekliği artırmak için tasarlanmış bir dizi hareket, nefes egzersizleri ve meditasyon içerir.
            Amacı zihin ve bedende farkındalık ve uyum sağlamaktır.<p> Eski bir gelenek olan yoga pratiği birçok zihinsel ve fiziksel fayda sağlar.</p></p>
          <p> Kasları güçlendirir, solunum sistemini ve kalp sağlığı destekler, bağımlılık tedavisine yardımcı olur, stres, kaygı, depresyon ve kronik ağrıları
            azaltır, uyku düzenlerini iyileştirir, yaşam kalitesini arttırır.<p> Birçok ülkede çeşitli şekillerde uygulanan yoga,
              Batı’da bütüncül bir yaklaşım olarak tamamlayıcı ve alternatif tıp türü olarak kabul edilmektedir.</p>
          </p>
        </div><br></br><br></br>
        <div style={{ border: "solid", borderRadius: "10px", width: "850px", height: "600px", fontFamily: "Times New Roman", fontSize: "18px", backgroundColor: "#fff2f7" }}>
          <p>YENİ BAŞLAYANLAR İÇİN YOGA</p>
          <p>
            Yogaya yeni başlayanlardansanız, matınıza geçmeden önce yapmanız gerekenlere bir göz atmalısınız:
            Öncelikle yogaya yeni başlayanlardansanız, “Ayak parmaklarıma bile dokunamam, nasıl yoga yapabilirim?” gibi cümleler kurmayın. Yoga ayak parmaklarına dokunmaktan ya da bedenin kuzeydoğusuna 98 derece uzanmaktan ibaret değil. Yoga nefesinizi, bedeninizi ve zihninizi kullanarak, kendinizi birleştirmenin basit bir süreci. Bu nedenle yogaya başlamadan önce olumsuz düşüncelerinizden arının ve sadece rahatlayın.
            Yogaya yeni başlayacaksanız, her tekniği doğru bir şekilde yapabilmeniz için bir yoga eğitmeniyle başlamak en iyisi. Böylece yoga duruşlarını doğru bir şekilde öğrenip, olası incinme ve yaralanmaları önlemiş olursunuz.
            Yoga yaparken en rahat kıyafetlerinizi giyin. Fiziksel hareketlerinizi sınırlandıracak kıyafet ya da aksesuarlardan kaçının.
            Yoga yapmak için sabahın erken saatleri en uygun vakit olsa da, sabahları programınıza uygun değilse, günün herhangi bir saatinde de düzenli olarak yapmaya çalışabilirsiniz.
            Boş bir mide ya da son yemeğinizden en az 2-3 saat sonra yoga yapmak önerilir. Ayrıca, yoga uygulamanız sırasında vücuttan atılan toksinleri temizlemenize yardımcı olacağı için, gün içinde en az 2 ila 3 litre su içmeniz tavsiye edilir.
            Yoga yaparken nerede olursanız olun mutlu olun ve kendinizi yoga sınıfındaki diğer öğrencilerle karşılaştırmayın. Her vücut tipinin benzersiz olduğunu ve farklı insanların farklı seviyelerde olabileceğini unutmayın. Bazıları belirli bir yoga duruşunu kolayca yapabilirken, diğerlerinin biraz daha fazla zamana ve  pratik yapmaya ihtiyaçları olabilir. Bu nedenle, kendinizi baskı altında hissetmeyin ve kendinizi aşırı tüketmeyin. Yoga duruşlarında esnekliğiniz ve verimliliğiniz düzenli uygulamalarla gelişecektir. Antrenmanın ilk günlerinde kaslarda bir miktar ağrı hissederseniz, endişelenmeyin. Fakat acı devam ederse, eğitmeninizi bilgilendirin.
            Kendinize biraz zaman ayırın ve sizi daha esnek, sağlıklı, sakin, verimli ve gayretli hale getirecek sonuçlar için sabırlı olun.
          </p>
        </div><br></br><br></br>
        <div style={{ float: "center", width: "350px", height: "200px", border: "solid", borderRadius: "10px", backgroundColor: "#fff2f7" }} >
          <p><h2>Yoga Türleri</h2> </p>
          <ul>
            <li>
              <Link to="/karma">
                Karma Yoga
              </Link>
            </li>
            <li>
              <Link to="/bhakti">
                Bhakti Yoga
              </Link>
            </li>
            <li>
              <Link to="/hatha">
                Hatha Yoga
              </Link>
            </li>
          </ul>
        </div>
      </center><br></br><br></br><br></br>
    </body>

  );
};

export default HomePage;
