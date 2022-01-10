import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <body style={{
      backgroundColor: "#fff0fa"
    }}>
      <center><br></br>
        <img src="https://cdn.dribbble.com/users/614270/screenshots/4046303/yoga_drib01.gif" width="600px" height="400px" />

        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <div style={{ border: "solid", borderRadius: "10px", width: "850px", height: "320px", fontFamily: "Times New Roman", fontSize: "18px", backgroundColor: "#fff2f7" }}>
          <p><h2>NEDEN YOGA?</h2></p>
          <p>Yoga, fiziksel ve zihinsel iyilik halini artırmak için nefes almaya odaklanan bir egzersiz şeklidir.</p>
          <p> Stresi azaltmak, sağlıklı kalmak, güç ve esnekliği artırmak için tasarlanmış bir dizi hareket, nefes egzersizleri ve meditasyon içerir.
            Amacı zihin ve bedende farkındalık ve uyum sağlamaktır.<p> Eski bir gelenek olan yoga pratiği birçok zihinsel ve fiziksel fayda sağlar.</p></p>
          <p> Kasları güçlendirir, solunum sistemini ve kalp sağlığı destekler, bağımlılık tedavisine yardımcı olur, stres, kaygı, depresyon ve kronik ağrıları
            azaltır, uyku düzenlerini iyileştirir, yaşam kalitesini arttırır.<p> Birçok ülkede çeşitli şekillerde uygulanan yoga,
              Batı’da bütüncül bir yaklaşım olarak tamamlayıcı ve alternatif tıp türü olarak kabul edilmektedir.</p>
          </p>
        </div><br></br><br></br>
        <img src="https://cdn.dribbble.com/users/614270/screenshots/4048172/yoga_drib02.gif" width="600px" height="400px" /><br></br><br></br><br></br>
        <div style={{ border: "solid", borderRadius: "10px", width: "850px", height: "600px", fontFamily: "Times New Roman", fontSize: "18px", backgroundColor: "#fff2f7" }}>
          <p><h2>YOGAYA DAİR</h2></p>
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
        <div style={{ float: "center", width: "350px", height: "200px", border: "solid", borderRadius: "10px", fontFamily: "Times New Roman", backgroundColor: "#fff2f7", fontSize: "20px" }} >
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
        </div><br></br><br></br>
        <img src="https://cdn.dribbble.com/users/3097534/screenshots/11937583/media/5faf91e3bbcfb47271d0bf2e87b4d2aa.gif" width="600px" height="450px"></img><br></br> <br></br><br></br>
        <div style={{ float: "center", width: "800px", height: "1950px", border: "solid", borderRadius: "10px", backgroundColor: "#fff2f7", fontFamily: "Times New Roman", fontSize: "18px" }} >
          <p><h2>Yeni Başlayanlar İçin 9 Tavsiye</h2></p>
          <p> 1.Neredeyseniz orada başlayın
            Size uygun ders hakkında öneri almak için gideceğiniz merkez ile bağlantıya geçin. Spor geçmişinizi açıklayın ve herhangi bir sakatlanmanız ya da sınırınız olup olmadığı hakkında bilgilendirin. Nazik derslerde bile eğitmenler arasında farklılıklar bulunur. Merkezin sahibi ya da yöneticisi size en uygun başlangıç noktasını bulmanızda yardımcı olabilir.

            En iyisi temel pozları, düzeltmeleri ve nefesin esaslarını öğrenebileceğiniz başlangıç derslerinden başlamaktır. Eğer başlangıç dersleri yoksa daha yumuşak derslerden başlanılmasını öneririm. Bu dersler daha yavaştır böylece rahat bir şekilde pozlar ve nefes öğrenilebilir. Pek çok öğrenci için yumuşak yoga uygulamalarının temeli olacakken bazıları sonunda fiziksel olarak daha yoğun dersler isteyeceklerdir. Ama neredeyse her zaman yeni bir disiplin öğrenirken ağırdan almak, hazır olmadığınız bir derse atlamaktan yeğdir.
          </p><p>
            2. Erken varın

            Ders başlamadan 15 dakika önce gelmeye çalışın. Bu size yerleşmek, lavaboları belirlemek ve ortamın enerjisine uyumlanmak için zaman verecektir. Bir yoga dersine hızlıca dalmak matınıza gerginlik taşıyacaktır. Dersime yeni katılan öğrenciler çoğunlukla ilk derslerinden önce gergin olduklarını itiraf ederler ve bu gayet normaldir. Başlangıç stresine geç kalmayı da eklemeyin.
          </p> <p>
            3. Kendinizi tanıtın

            Mutlaka kendinizi tanıtın ve eğitmene yogada yeni olduğunuzu bildirin. Ben her zaman yeni öğrenciyle kısa bir sohbet yaparım ve herhangi bir fiziksel ya da duygusal endişelerinin olup olmadığını sorarım. Bu konuda utangaç olmayın, engelleriniz hakkında konuşmak size yarayacaktır. Örneğin eğitmeniniz size belli pozlarda yardımcı olacak düzeltmeler/modifikasyonlar sunabilir.
          </p> <p>
            4. Güzel bir yer seçin

            Yıllarca eğitim alanında çalıştıktan sonra şunu fark ettim ki pek çok insan sınıfın arka taraflarına geçme eğilimi gösteriyor. Yoga dersleri buna bir istisna oluşturmuyor, pek çok yeni başlayan öğrenci arka sırayı tercih ediyor. Lakin stüdyonun düzeni ve dersteki insan sayısına göre bu en iyi seçenek olmayabilir. Bunun yerine eğitmeni en iyi şekilde görebildiğiniz ve duyabildiğiniz yere matınızı serin.
          </p> <p>
            5. Bir niyet belirleyin

            Çoğu yoga dersi pozlara geçmeden önce bir nefes alma ve merkezlenme şansıyla başlar. Ayrıca eğitmen ders için bir tema ya da niyet belirleyebilir. Bu süreci kendi niyetinizi belirlemek için kulanın. Örneğin, tüm ders boyunca derin bir şekilde nefesinize odaklanmaya karar verebilirsiniz ya da kendinize veya diğerlerini yargılamamaya karar verebilirsiniz. Bedeninizle ilgilenmek için yogayı kullanma fırsatını elde ettiğiniz için şükran duymak da uygulamanızı temellendirmek için başka bir seçenek. Neye odaklanırsanız odaklanın ilham gerektiğinde onu zihninize çağırın ya da yoga dersine gelmek için odağınızı hatırlayın.
          </p> <p>
            6. Bedeninizi dinleyin

            Yogadaki en ünlü parolalardan biri "bedeninizi dinleyin"dir. Ben yeni bir öğrenciyken bunun ne demek olduğunu tam olarak anlayamıyordum. Uygulamanızda ilerledikçe bedeninizle olan bağınızın derinleşmesi onu dinlemeyi kolaylaştırıyor. Bu süreç zarfında yoganın canınızı yakmaması gerektiğini hatırlayın. Eğer keskin bir acı hissederseniz zaman kaybetmeden başlangıç pozunuza geri dönün (çocuk pozu, dağ ya da oturma)

            Bedeninizde yeni hisler, engeller ya da açılmalar fark edebilirsiniz. Bunlar tamamen normal ve yararlıdır. Eğer hissettiğinizin güvenli olduğundan emin olamıyorsanız temkinli olmayı tercih edin ve pozdan çıkın. Bunlara ek olarak nefesinizi bir belirteç olarak kullanın. Eğer nefesiniz düzensizse, yarım yarım hale gelirse ya da nefesinizi tutuyorsanız bu sınırlarınızı aştığınız anlamına gelebilir.  Uygulamanıza dönmeden önce biraz bekleyin ve bir kaç derin nefes alın.
          </p > <p>
            7. Gözler matın üstünde

            Ben bir lise öğrencisiyken 10. sınıf İngilizce öğretmenim dersten sonra sınıfta kalmamı istedi. Sınav kağıtlarını her dağıttığında hemen kendi notuma bakıp sonra diğerlerinkilerini görmek için etrafa bakındığımı söyledi. "Eğer kendini diğerleri ile karşılaştırmaya devam edersen kendini delirtirsin." dedi. Yirmi yıl sonra bu bilge nasihati hatırlıyorum.

            Yoga yarış değildir. Not yoktur. Kazanma ya da kaybetme yoktur. Biz sürece odaklıyız, mükemmelliğe değil. Komşun sandalye pozunda senden daha aşağı inebildiyse ne olmuş? Büyük olasılıkla senden daha uzun zamandır çalışıyordur ya da bedeni farklı bir şekilde kurulmuştur. Gözlerinizi kendi matınızda tutun ve böylece derse bedeninize ve sizin ihtiyacınıza daha iyi hizmet edecek şekilde devam etmeye odaklanın.
          </p > <p>
            8. Savasana'nızın keyfini sürün

            Yeni ya da eski pek çok öğrenci için savasana dersin en zorlu pozu olabilir. Çoğumuz sürekli hareket halinde olmaya alışığız ve dikkatimizi dağıtacak hiçbir hareket olmadan, kendi kendimize ve kendi düşüncelerimizle baş başa yatmak yeni bir deneyim olabilir. Neredeyseniz oradan başlayın ve deneyimlerinizi yargılamaktan kaçının.

            Pek çok yeni öğrenci düşüncelerini durduramadıkları için savasanada stres olduklarını gelip bana söylüyor. Ama kişinin düşüncelerini savasanada durdurması gerektiği bir yanlış anlamadır. Onları durdurmaya çalışmaktan ziyade sadece onları fark edin, bırakın ve tekrardan nefesinize odaklanın. Savasana esnasında pek çok düşünceye yakalanabilirsiniz, nefesinize dönmeye devam edin ve her seferinde bedeninizi gevşetin.
          </p > <p>
            9. Geri gelmeye devam edin

            Yoga birikimli bir uygulamadır. Aldığınız her dersle yaşamınıza olan etkisi artmaya devam edecektir. Genellikle insanların daha ilk dersten sonra yüzlerinin aydınlandığını görürüm. Ama size bu etkiyi hemen yapmadıysa ona biraz zaman tanıyın. Size uygun olanını bulana kadar farklı ders stillerini ve farklı eğitmenleri deneyin. Çaba ve devamlılıkla yoganın pek çok hediyesini siz de elde etmeye başlayacaksınız!

            Annem artık bana soru göndermiyor. Bunun yerine derslerden öğrendiklerine ve yoganın ona verdiği hediyelere dair minnet ve heyecan içeren mesajlar atıyor. Eğer yeni başlayan biriyseniz yeni bir şey öğrenmenin zevkine varın. Süreç içerisinde ihtiyaçlarınızı onurlandırın, gerek duyduğunuz desteği arayın ve her şeyin zamanı gelince gerçekleştiğini hatırlayın.
          </p >
        </div >
      </center><br></br><br></br><br></br>
    </body>

  );
};

export default HomePage;
