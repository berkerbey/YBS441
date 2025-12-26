    // --- VERİ SETİ (Kapsamlı - Tüm Haftalar) ---
    const allFlashcards = [
        // --- HAFTA 10-11: Temeller, Lojistik, KNN ---
        {
            category: "Lojistik Regresyon",
            icon: "fas fa-chart-line",
            front: "Lojistik Regresyon Nedir?",
            logic: "Lojistik Regresyon, ikili (binary) sınıflandırma problemlerinde kullanılan bir makine öğrenmesi algoritmasıdır. Adında 'regresyon' geçse de aslında bir sınıflandırma yöntemidir. Doğrusal regresyonun çıktısını [0,1] aralığına sıkıştırarak olasılık üretir ve bir eşik değeri (genellikle 0.5) ile karar verir.",
            formula: "<svg viewBox='0 0 350 100' xmlns='http://www.w3.org/2000/svg'><text x='20' y='30' font-size='13' fill='#4f46e5' font-weight='bold'>P(y=1|x) = σ(w·x + b)</text><text x='20' y='55' font-size='11' fill='#64748b'>Sigmoid fonksiyonu ile olasılık</text><text x='20' y='80' font-size='11' fill='#64748b'>Eşik: 0.5 → Sınıf 1 veya 0</text></svg>",
            note: "Doğrusal regresyon sürekli değerler tahmin eder, lojistik regresyon olasılık ve sınıf tahmin eder."
        },
        {
            category: "Lojistik Regresyon",
            icon: "fas fa-wave-square",
            front: "Sigmoid Fonksiyonu",
            logic: "Modelin ürettiği (-∞, +∞) aralığındaki sayıları alır, sihirli bir şekilde [0, 1] aralığına sıkıştırarak 'Olasılık' formatına sokar.",
            formula: "$$ \\sigma(z) = \\frac{1}{1 + e^{-z}} $$",
            note: "Aktivasyon fonksiyonu olarak da bilinir. Z=0 iken sonuç 0.5'tir."
        },
        {
            category: "Lojistik Regresyon",
            icon: "fas fa-percentage",
            front: "Odds (Bahis) Oranı",
            logic: "Bir olayın 'Olma' ihtimalinin, 'Olmama' ihtimaline oranıdır. Lojistik regresyon aslında bu oranın logaritması (Log-Odds) ile doğrusal ilişki kurar.",
            formula: "$$ \\text{Odds} = \\frac{P}{1-P} = \\frac{\\text{Olma Olasılığı}}{\\text{Olmama Olasılığı}} $$",
            note: "Beta katsayısı negatifse, değişken arttıkça Odds (olasılık) azalır."
        },
        {
            category: "Lojistik Regresyon",
            icon: "fas fa-calculator",
            front: "Log-Likelihood (Log-Olasılık)",
            logic: "Modelin ne kadar iyi olduğunu ölçen maliyet fonksiyonudur. Her tahminin olasılığını logaritma alıp toplar. Negatif değer alır, maksimize edilir (daha büyük = daha iyi).",
            formula: "$$ LL = \\sum [y_i \\log(p_i) + (1-y_i)\\log(1-p_i)] $$",
            note: "MLE (Maximum Likelihood Estimation) yöntemi ile optimize edilir."
        },
        {
            category: "Lojistik Regresyon",
            icon: "fas fa-layer-group",
            front: "Multiclass Lojistik Regresyon",
            logic: "İkiden fazla sınıf varsa (örn: Kedi, Köpek, Kuş) kullanılır. Her sınıf için ayrı bir lojistik regresyon modeli kurulur veya Softmax fonksiyonu ile tüm sınıfların olasılıkları toplamı 1 olur.",
            formula: "$$ P(y=k|x) = \\frac{e^{z_k}}{\\sum_{j=1}^{K} e^{z_j}} $$",
            note: "Softmax, sigmoid'in çok sınıflı versiyonudur."
        },
        {
            category: "Lojistik Regresyon",
            icon: "fas fa-chart-line",
            front: "MLE (Maximum Likelihood Estimation)",
            logic: "Lojistik regresyon parametrelerini bulmak için En Küçük Kareler (EKK) yerine MLE kullanılır. Amacı, gözlenen verinin olasılığını (likelihood) maksimize etmektir. Log-likelihood fonksiyonunu maksimize ederek en iyi katsayıları bulur.",
            formula: "$$ \\text{Maximize: } L(\\beta) = \\prod_{i=1}^{n} P(y_i|x_i)^{y_i} [1-P(y_i|x_i)]^{1-y_i} $$",
            note: "MLE, verinin gözlenme ihtimalini en yükseğe çıkarır. Gradient descent veya Newton-Raphson ile çözülür."
        },
        {
            category: "Lojistik Regresyon",
            icon: "fas fa-exchange-alt",
            front: "Odds Ratio (OR) Yorumu",
            logic: "Beta katsayısının yorumu doğrudan yapılmaz. Bunun yerine exp(β) = Odds Ratio hesaplanır. OR > 1 ise değişken artışı olayın gerçekleşme ihtimalini artırır. OR < 1 ise azaltır. OR = 2 ise '2 kat artış' demektir.",
            formula: "$$ OR = e^{\\beta} \\text{ (1 birim artışta kaç kat değişir?)} $$",
            note: "Lojistik regresyonda yüzde yorumları doğrudan β üzerinden yapılmaz. Odds Ratio ile 'kaç kat artar/azalır' yorumu yapılır."
        },
        {
            category: "Metrikler",
            icon: "fas fa-chart-bar",
            front: "Sınıflandırma Metrikleri Nedir?",
            logic: "Sınıflandırma metrikleri, bir modelin ne kadar iyi çalıştığını ölçen sayısal değerlerdir. Accuracy, Precision, Recall, F1-Score gibi metrikler modelin performansını farklı açılardan değerlendirir. Dengesiz veri setlerinde sadece Accuracy'ye bakmak yanıltıcı olabilir.",
            formula: "<svg viewBox='0 0 350 100' xmlns='http://www.w3.org/2000/svg'><rect x='15' y='15' width='70' height='28' fill='#10b981' opacity='0.3' stroke='#10b981'/><text x='50' y='33' font-size='11' fill='#10b981' text-anchor='middle' font-weight='bold'>TP</text><rect x='95' y='15' width='70' height='28' fill='#ef4444' opacity='0.3' stroke='#ef4444'/><text x='130' y='33' font-size='11' fill='#ef4444' text-anchor='middle' font-weight='bold'>FP</text><rect x='15' y='55' width='70' height='28' fill='#ef4444' opacity='0.3' stroke='#ef4444'/><text x='50' y='73' font-size='11' fill='#ef4444' text-anchor='middle' font-weight='bold'>FN</text><rect x='95' y='55' width='70' height='28' fill='#10b981' opacity='0.3' stroke='#10b981'/><text x='130' y='73' font-size='11' fill='#10b981' text-anchor='middle' font-weight='bold'>TN</text><text x='200' y='30' font-size='10' fill='#64748b'>Precision = TP/(TP+FP)</text><text x='200' y='48' font-size='10' fill='#64748b'>Recall = TP/(TP+FN)</text><text x='200' y='66' font-size='10' fill='#64748b'>F1 = 2·(P·R)/(P+R)</text></svg>",
            note: "Confusion Matrix tüm metriklerin temelidir. Her metrik farklı bir soruyu cevaplar."
        },
        {
            category: "Metrikler",
            icon: "fas fa-bullseye",
            front: "Recall (Duyarlılık)",
            logic: "Kapsayıcılık metriğidir. 'Gerçek suçluların yüzde kaçını yakaladım?' sorusunun cevabıdır. Hastalığı kaçırmanın maliyeti yüksekse (Kanser teşhisi) Recall'a bakılır.",
            formula: "$$ \\frac{TP}{TP + FN} $$",
            note: "Recall yüksekse FN (Gözden Kaçan) düşüktür."
        },
        {
            category: "Metrikler",
            icon: "fas fa-filter",
            front: "Precision (Kesinlik)",
            logic: "Güvenilirlik metriğidir. 'Suçlu dediklerimin yüzde kaçı gerçekten suçlu?' sorusunun cevabıdır. Yanlış alarm vermekten korkuyorsak (Spam filtresi) buna bakarız.",
            formula: "$$ \\frac{TP}{TP + FP} $$",
            note: "Precision yüksekse FP (Yanlış Alarm) düşüktür."
        },
        {
            category: "Metrikler",
            icon: "fas fa-balance-scale",
            front: "F1-Score",
            logic: "Recall ve Precision'ın 'Harmonik' ortalamasıdır. Aritmetik ortalama almaz çünkü biri çok düşükse sonucun da düşük çıkmasını (cezalandırmayı) isteriz.",
            formula: "$$ 2 \\cdot \\frac{Precision \\cdot Recall}{Precision + Recall} $$",
            note: "Dengesiz (Imbalanced) veri setlerinde Accuracy yerine kullanılır."
        },
        {
            category: "Metrikler",
            icon: "fas fa-check-circle",
            front: "Accuracy (Doğruluk)",
            logic: "Tüm tahminlerin yüzde kaçının doğru olduğudur. Dengesiz veri setlerinde yanıltıcı olabilir (örn: %99 hasta olmayan, %1 hasta → Herkese 'hasta değil' dersen %99 accuracy).",
            formula: "$$ \\frac{TP + TN}{TP + TN + FP + FN} $$",
            note: "Dengeli veri setlerinde kullanılır, imbalanced verilerde F1-Score tercih edilir."
        },
        {
            category: "Metrikler",
            icon: "fas fa-table",
            front: "Confusion Matrix (Karışıklık Matrisi)",
            logic: "Modelin tüm hata türlerini gösteren 2x2 tablodur. TP (Doğru Pozitif), TN (Doğru Negatif), FP (Yanlış Pozitif), FN (Yanlış Negatif) değerlerini içerir.",
            formula: "\\begin{bmatrix} TP & FP \\\\ FN & TN \\end{bmatrix}",
            note: "Tüm metrikler (Precision, Recall, F1) bu matristen hesaplanır."
        },
        {
            category: "Metrikler",
            icon: "fas fa-chart-area",
            front: "ROC-AUC Eğrisi",
            logic: "Modelin sınıfları ayırt etme yeteneğini ölçer. Eğri altındaki alan (AUC) 0-1 arasındadır. 1'e yakınsa mükemmel, 0.5'e yakınsa rastgele tahmin demektir. ROC eğrisi, True Positive Rate (TPR) ile False Positive Rate (FPR) arasındaki ilişkiyi gösterir. Eşik değeri değiştirildikçe noktalar çizilir ve eğri oluşur.",
            formula: "<svg viewBox='0 0 350 100' xmlns='http://www.w3.org/2000/svg'><defs><linearGradient id='aucGradient' x1='0%' y1='0%' x2='0%' y2='100%'><stop offset='0%' style='stop-color:#10b981;stop-opacity:0.3'/><stop offset='100%' style='stop-color:#10b981;stop-opacity:0.1'/></linearGradient></defs><line x1='30' y1='10' x2='30' y2='90' stroke='#64748b' stroke-width='1.5'/><line x1='30' y1='90' x2='320' y2='90' stroke='#64748b' stroke-width='1.5'/><text x='15' y='50' font-size='9' fill='#64748b' text-anchor='middle' transform='rotate(-90 15 50)'>TPR</text><text x='175' y='100' font-size='9' fill='#64748b' text-anchor='middle'>FPR</text><path d='M 30 90 L 35 85 L 40 80 L 50 70 L 70 55 L 100 40 L 150 25 L 200 15 L 250 10 L 300 8 L 320 7' fill='none' stroke='#10b981' stroke-width='2'/><path d='M 30 90 L 35 85 L 40 80 L 50 70 L 70 55 L 100 40 L 150 25 L 200 15 L 250 10 L 300 8 L 320 7 L 320 90 L 30 90' fill='url(#aucGradient)'/><line x1='30' y1='90' x2='320' y2='10' stroke='#ef4444' stroke-width='1.5' stroke-dasharray='3,3' opacity='0.6'/><text x='280' y='30' font-size='8' fill='#ef4444' font-style='italic'>Rastgele (AUC=0.5)</text><text x='175' y='25' font-size='10' fill='#10b981' font-weight='bold' text-anchor='middle'>AUC ≈ 0.95</text><text x='175' y='30' font-size='9' fill='#10b981' font-weight='bold' text-anchor='middle'>Mükemmel Model</text><circle cx='100' cy='40' r='3' fill='#4f46e5'/><text x='100' y='35' font-size='8' fill='#4f46e5' font-weight='bold'>Eşik</text></svg>",
            note: "Eşik değerini değiştirerek farklı Precision-Recall dengesi kurulabilir. AUC > 0.8 iyi, AUC > 0.9 mükemmel kabul edilir."
        },
        {
            category: "Metrikler",
            icon: "fas fa-shield-alt",
            front: "Specificity (Özgüllük)",
            logic: "'Hasta olmayanları ne kadar doğru tespit ettim?' sorusunun cevabıdır. Recall'ın negatif sınıf için versiyonudur.",
            formula: "$$ \\frac{TN}{TN + FP} $$",
            note: "Yanlış pozitifleri (FP) minimize etmek istediğimizde önemlidir."
        },
        {
            category: "Metrikler",
            icon: "fas fa-exclamation-triangle",
            front: "Type I & Type II Hatalar",
            logic: "Type I (False Positive): Gerçekte negatif olana pozitif demek. 'Yalancı alarm'. Type II (False Negative): Gerçekte pozitif olana negatif demek. 'Gözden kaçırma'. Kanser teşhisinde Type II daha tehlikelidir (hasta ölebilir).",
            formula: "<svg viewBox='0 0 350 100' xmlns='http://www.w3.org/2000/svg'><rect x='15' y='10' width='160' height='35' fill='#ef4444' opacity='0.2' stroke='#ef4444'/><text x='95' y='32' font-size='11' fill='#ef4444' text-anchor='middle' font-weight='bold'>Type I: FP (Yalancı Alarm)</text><rect x='15' y='55' width='160' height='35' fill='#f59e0b' opacity='0.2' stroke='#f59e0b'/><text x='95' y='77' font-size='11' fill='#f59e0b' text-anchor='middle' font-weight='bold'>Type II: FN (Gözden Kaçırma)</text><text x='200' y='32' font-size='10' fill='#64748b'>Sağlıklıya 'Hasta'</text><text x='200' y='77' font-size='10' fill='#64748b'>Hastaya 'Sağlıklı'</text></svg>",
            note: "Hangi hatanın maliyeti daha yüksekse, o hatayı minimize eden metriğe odaklanılır."
        },
        {
            category: "Metrikler",
            icon: "fas fa-chart-line",
            front: "Log Loss (Cross-Entropy Loss)",
            logic: "Modelin tahmin ettiği olasılıkların kalitesini ölçer. Sadece doğru/yanlış değil, modelin ne kadar 'emin' olduğunu da değerlendirir. Düşük olasılıkla doğru tahmin yapmak bile cezalandırılır. 0'a yakın değerler iyidir.",
            formula: "$$ L = -\\frac{1}{n} \\sum_{i=1}^{n} [y_i \\log(\\hat{p}_i) + (1-y_i)\\log(1-\\hat{p}_i)] $$",
            note: "Modelin güven seviyesini ölçer. Emin olmadan yapılan doğrular da, emin olup yapılan yanlışlar da skoru etkiler."
        },
        {
            category: "Metrikler",
            icon: "fas fa-balance-scale",
            front: "Imbalanced Data & Class Weight",
            logic: "Veri setinde sınıf dengesizliği varsa (örn: %99 sağlıklı, %1 hasta), model azınlık sınıfını görmezden gelir. Çözüm: Azınlık sınıfına daha yüksek ağırlık (class_weight) vererek hatalarının cezasını artırmak veya SMOTE gibi tekniklerle veri üretmek.",
            formula: "$$ \\text{Class Weight} = \\frac{n_{samples}}{n_{classes} \\times n_{class_i}} $$",
            note: "Dengesiz veride Accuracy yanıltıcıdır. F1-Score veya AUC kullanılmalı, class_weight ile model dengelenmelidir."
        },
        {
            category: "KNN",
            icon: "fas fa-users",
            front: "KNN (K-Nearest Neighbors) Nedir?",
            logic: "KNN, en yakın komşu algoritmasıdır. Yeni bir veri geldiğinde, eğitim setindeki en yakın K komşusuna bakar ve çoğunluğun sınıfını seçer. 'Lazy Learner' (tembel öğrenen) olarak adlandırılır çünkü eğitim aşamasında hiçbir şey öğrenmez, tüm hesaplamayı tahmin aşamasında yapar.",
            formula: "<svg viewBox='0 0 330 100' xmlns='http://www.w3.org/2000/svg'><circle cx='80' cy='50' r='5' fill='#3b82f6' stroke='#1e40af' stroke-width='2'/><text x='80' y='68' font-size='8' fill='#64748b' text-anchor='middle'>Yeni</text><circle cx='100' cy='45' r='3.5' fill='#10b981'/><circle cx='110' cy='55' r='3.5' fill='#10b981'/><circle cx='70' cy='60' r='3.5' fill='#ef4444'/><circle cx='140' cy='40' r='3.5' fill='#10b981' opacity='0.4'/><circle cx='50' cy='35' r='3.5' fill='#ef4444' opacity='0.4'/><line x1='80' y1='50' x2='100' y2='45' stroke='#94a3b8' stroke-dasharray='2,2' stroke-width='1.5'/><line x1='80' y1='50' x2='110' y2='55' stroke='#94a3b8' stroke-dasharray='2,2' stroke-width='1.5'/><line x1='80' y1='50' x2='70' y2='60' stroke='#94a3b8' stroke-dasharray='2,2' stroke-width='1.5'/><text x='200' y='25' font-size='10' fill='#4f46e5' font-weight='bold'>K=3 için:</text><text x='200' y='42' font-size='9' fill='#64748b'>En yakın 3 komşu</text><text x='200' y='58' font-size='9' fill='#10b981'>Yeşil: 2</text><text x='200' y='72' font-size='9' fill='#ef4444'>Kırmızı: 1</text><text x='200' y='86' font-size='9' fill='#4f46e5' font-weight='bold'>Sonuç: Yeşil</text></svg>",
            note: "K değeri genellikle tek sayı seçilir (beraberlik durumunu önlemek için). Mesafe ölçümü için Öklid veya Manhattan mesafesi kullanılır."
        },
        {
            category: "KNN",
            icon: "fas fa-users",
            front: "KNN Algoritması (Lazy Learner)",
            logic: "'Bana arkadaşını söyle, sana kim olduğunu söyleyeyim.' Yeni veri geldiğinde en yakın K komşusuna bakar, çoğunluk neyse onu seçer. Eğitim yapmaz, ezbercidir.",
            formula: "$$ d(x,y) = \\sqrt{\\sum (x_i - y_i)^2} $$",
            note: "Lazy Learner olduğu için eğitim süresi 0'dır ama tahmin süresi uzundur."
        },
        {
            category: "KNN",
            icon: "fas fa-ruler-combined",
            front: "KNN ve Normalizasyon",
            logic: "KNN mesafe ölçer. 'Maaş' (50.000) ile 'Yaş' (30) toplanırsa, maaş farkı yaşı yutar. Adil bir ölçüm için hepsini 0-1 arasına (Scaling) çekmeliyiz.",
            formula: "$$ X_{new} = \\frac{X - X_{min}}{X_{max} - X_{min}} $$",
            note: "Ölçekleme yapılmazsa büyük sayılara sahip özellikler sonucu tek başına belirler."
        },
        {
            category: "KNN",
            icon: "fas fa-weight-hanging",
            front: "Weighted KNN",
            logic: "Yakın komşulara daha fazla ağırlık verir. Uzak komşuların oyu daha az sayılır. Mesafe ile ters orantılı ağırlık kullanılır.",
            formula: "$$ w_i = \\frac{1}{d_i^2} $$",
            note: "Standart KNN'den daha hassas sonuçlar verir."
        },
        {
            category: "KNN",
            icon: "fas fa-ruler-combined",
            front: "Mesafe Metrikleri",
            logic: "KNN mesafe tabanlı çalışır. Öklid (L2): Düz çizgi mesafesi, en yaygın kullanılan. Manhattan (L1): Sadece yatay-dikey hareket, outlier'lara daha az duyarlı. Minkowski: Genel formül (p=1 Manhattan, p=2 Öklid). Hamming: Kategorik veriler için.",
            formula: "<svg viewBox='0 0 350 100' xmlns='http://www.w3.org/2000/svg'><text x='15' y='20' font-size='10' fill='#4f46e5' font-weight='bold'>Öklid (L2):</text><text x='15' y='33' font-size='9' fill='#64748b'>d = √(Σ(xi-yi)²)</text><text x='15' y='48' font-size='10' fill='#4f46e5' font-weight='bold'>Manhattan (L1):</text><text x='15' y='61' font-size='9' fill='#64748b'>d = Σ|xi-yi|</text><text x='15' y='76' font-size='10' fill='#4f46e5' font-weight='bold'>Minkowski:</text><text x='15' y='89' font-size='9' fill='#64748b'>d = (Σ|xi-yi|^p)^(1/p)</text><text x='200' y='20' font-size='10' fill='#10b981' font-weight='bold'>Hamming:</text><text x='200' y='33' font-size='9' fill='#64748b'>Kategorik veriler</text><text x='200' y='48' font-size='9' fill='#64748b'>Farklı değer sayısı</text><text x='200' y='65' font-size='9' fill='#f59e0b' font-weight='bold'>Öklid: En yaygın</text><text x='200' y='78' font-size='9' fill='#f59e0b'>Manhattan: Outlier'a</text><text x='200' y='91' font-size='9' fill='#f59e0b'>daha az duyarlı</text></svg>",
            note: "Veri türüne göre uygun mesafe metriği seçilir. Sayısal veri için Öklid, kategorik için Hamming kullanılır."
        },
        {
            category: "KNN",
            icon: "fas fa-sliders-h",
            front: "Optimal K Değeri Seçimi",
            logic: "K çok küçükse (K=1) gürültüye duyarlıdır (Overfitting). K çok büyükse (K=N) her şeyi aynı sınıfa atar (Underfitting). Pratik yöntemler: K=√N (karekök kuralı), Cross-Validation ile farklı K değerlerini test etmek, Elbow metodu (hata grafiğindeki dirsek noktası).",
            formula: "<svg viewBox='0 0 350 100' xmlns='http://www.w3.org/2000/svg'><text x='15' y='20' font-size='10' fill='#ef4444' font-weight='bold'>K=1:</text><text x='15' y='33' font-size='9' fill='#64748b'>Aşırı hassas</text><text x='15' y='46' font-size='9' fill='#64748b'>Overfitting riski</text><text x='15' y='62' font-size='10' fill='#10b981' font-weight='bold'>K=√N:</text><text x='15' y='75' font-size='9' fill='#64748b'>Pratik kural</text><text x='15' y='88' font-size='9' fill='#64748b'>N=100 → K≈10</text><text x='200' y='20' font-size='10' fill='#4f46e5' font-weight='bold'>Cross-Validation:</text><text x='200' y='33' font-size='9' fill='#64748b'>Farklı K değerleri</text><text x='200' y='46' font-size='9' fill='#64748b'>test edilir</text><text x='200' y='59' font-size='9' fill='#64748b'>En iyi performans</text><text x='200' y='72' font-size='9' fill='#64748b'>veren K seçilir</text><text x='200' y='88' font-size='9' fill='#f59e0b' font-weight='bold'>K genellikle tek sayı tercih edilir/text></svg>",
            note: "K değeri genellikle tek sayı seçilir. Grid Search Cross-validation ile optimal K bulunur. K=√N pratik bir başlangıç noktasıdır."
        },
        {
            category: "KNN",
            icon: "fas fa-cube",
            front: "Curse of Dimensionality (Boyut Laneti)",
            logic: "Özellik (boyut) sayısı arttıkça veri seyrelir, tüm noktalar birbirine eşit uzaklıkta görünür hale gelir. Mesafe hesaplamaları anlamını yitirir. KNN gibi mesafe tabanlı algoritmalar yüksek boyutlu veride başarısız olur.",
            formula: "<svg viewBox='0 0 350 100' xmlns='http://www.w3.org/2000/svg'><text x='20' y='25' font-size='12' fill='#4f46e5' font-weight='bold'>Boyut ↑ → Veri Seyrelir</text><text x='20' y='45' font-size='11' fill='#64748b'>Tüm noktalar eşit uzaklıkta</text><text x='20' y='65' font-size='11' fill='#64748b'>Mesafe anlamını yitirir</text><text x='20' y='85' font-size='10' fill='#ec4899' font-style='italic'>Çözüm: PCA, Feature Selection</text></svg>",
            note: "Çok sayıda öznitelikli veride KNN kullanmadan önce boyut indirgeme (PCA) veya özellik seçimi yapılmalıdır."
        },

        // --- HAFTA 12: Naive Bayes & Karar Ağaçları ---
        {
            category: "Naive Bayes",
            icon: "fas fa-dice",
            front: "Naive Bayes Nedir?",
            logic: "Naive Bayes, Bayes teoremine dayanan olasılıksal bir sınıflandırma algoritmasıdır. 'Naive' (saf) olarak adlandırılır çünkü özelliklerin birbirinden bağımsız olduğunu varsayar. Bu varsayım gerçekte yanlış olsa da, özellikle metin sınıflandırma (spam tespiti, duygu analizi) gibi problemlerde çok etkili çalışır.",
            formula: "<svg viewBox='0 0 350 100' xmlns='http://www.w3.org/2000/svg'><text x='20' y='30' font-size='13' fill='#4f46e5' font-weight='bold'>P(Sınıf|Özellikler) ∝</text><text x='20' y='55' font-size='11' fill='#64748b'>P(Sınıf) × P(Öz1|Sınıf) × P(Öz2|Sınıf) × ...</text><text x='20' y='80' font-size='10' fill='#ec4899' font-style='italic'>Özellikler bağımsız varsayılır</text></svg>",
            note: "Hesaplama maliyeti düşüktür ve büyük veri setlerinde hızlı çalışır. Multinomial (metin) ve Gaussian (sayısal) versiyonları vardır."
        },
        {
            category: "Naive Bayes",
            icon: "fas fa-dice",
            front: "Naive (Saf) Varsayımı",
            logic: "Algoritma 'saftır' çünkü özelliklerin birbirinden tamamen bağımsız olduğunu sanır (örn: 'Hava bulutlu' ile 'Yağmur' bağımsızdır der). Gerçekte yanlış olsa da pratikte iyi çalışır, katsayılar üzerine yorum yapmak yanıltıcı olsa da büyük olana göre sınıflandırma yapmak genelde isabetli olur.",
            formula: "$$ P(X|Y) = P(x_1|Y) \\cdot P(x_2|Y)... $$",
            note: "Bu varsayım hesaplama maliyetini inanılmaz düşürür."
        },
        {
            category: "Naive Bayes",
            icon: "fas fa-plus-circle",
            front: "Laplace Smoothing (Laplace Düzeltmesi)",
            logic: "Eğitimde hiç görülmeyen bir kelimenin olasılığı 0 olursa, tüm çarpımı 0 yapar. Bunu önlemek için paya +1, paydaya +V eklenerek 'küçük bir şans' verilir.",
            formula: "$$ \\frac{count + 1}{total + V} $$",
            note: "Zero Frequency (Sıfır Frekans) probleminin çözümüdür."
        },
        {
            category: "Naive Bayes",
            icon: "fas fa-calculator",
            front: "Underflow Problemi (Log-Uzayı)",
            logic: "Çok sayıda küçük olasılığı (0.0001) çarparsanız sayı bilgisayarın tutamayacağı kadar küçülür (0 olur). Bu yüzden olasılıkların Logaritması alınıp toplanır.",
            formula: "$$ \\log(a \\cdot b) = \\log(a) + \\log(b) $$",
            note: "Logaritma çarpma işlemini toplamaya çevirir, hassasiyet kaybını önler."
        },
        {
            category: "Naive Bayes",
            icon: "fas fa-brain",
            front: "Bayes Teoremi",
            logic: "Koşullu olasılığın temelidir. 'Hasta olma olasılığım nedir, test pozitif çıktıysa?' gibi soruları cevaplar. Önceki bilgiyi (Prior) yeni bilgiyle (Likelihood) birleştirir.",
            formula: "$$ P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)} $$",
            note: "Naive Bayes, bu teoremin özelliklerin bağımsız olduğu varsayımıyla uygulanmasıdır."
        },
        {
            category: "Naive Bayes",
            icon: "fas fa-file-alt",
            front: "Multinomial Naive Bayes",
            logic: "Metin sınıflandırmada kullanılır. Her kelimenin kaç kez geçtiğini (frekans) sayar. Spam tespiti, duygu analizi gibi problemlerde çok etkilidir.",
            formula: "$$ P(word|class) = \\frac{count(word, class) + 1}{count(class) + V} $$",
            note: "Laplace smoothing ile birlikte kullanılır."
        },
        {
            category: "Naive Bayes",
            icon: "fas fa-bell",
            front: "Gaussian Naive Bayes",
            logic: "Sürekli (sayısal) özellikler için kullanılır. Her özelliğin normal dağılım (Gaussian) gösterdiğini varsayar. Ortalama ve standart sapma ile olasılık hesaplar.",
            formula: "$$ P(x|y) = \\frac{1}{\\sqrt{2\\pi\\sigma^2}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}} $$",
            note: "Kategorik veriler için Multinomial, sürekli veriler için Gaussian kullanılır."
        },
        {
            category: "Karar Ağaçları",
            icon: "fas fa-tree",
            front: "Karar Ağaçları Nedir?",
            logic: "Karar ağaçları, if-then kurallarına dayanan hiyerarşik bir sınıflandırma yöntemidir. Kök düğümden başlayarak, her düğümde bir özellik üzerinde soru sorar ve dallara ayrılır. Yaprak düğümlerde sınıf kararı verilir. Anlaşılması kolay ve yorumlanabilir bir yöntemdir.",
            formula: "<svg viewBox='0 0 320 85' xmlns='http://www.w3.org/2000/svg'><rect x='140' y='3' width='32' height='18' fill='#4f46e5' opacity='0.3' stroke='#4f46e5'/><text x='156' y='16' font-size='8' fill='#4f46e5' text-anchor='middle' font-weight='bold'>Yaş>30?</text><line x1='156' y1='21' x2='105' y2='42' stroke='#94a3b8' stroke-width='1'/><line x1='156' y1='21' x2='215' y2='42' stroke='#94a3b8' stroke-width='1'/><rect x='85' y='42' width='32' height='18' fill='#10b981' opacity='0.3' stroke='#10b981'/><text x='101' y='55' font-size='7' fill='#10b981' text-anchor='middle'>Evet</text><rect x='200' y='42' width='32' height='18' fill='#ef4444' opacity='0.3' stroke='#ef4444'/><text x='216' y='55' font-size='7' fill='#ef4444' text-anchor='middle'>Hayır</text><line x1='101' y1='60' x2='72' y2='75' stroke='#94a3b8' stroke-width='1'/><line x1='101' y1='60' x2='130' y2='75' stroke='#94a3b8' stroke-width='1'/><rect x='58' y='75' width='28' height='15' fill='#f59e0b' opacity='0.5' stroke='#f59e0b'/><text x='72' y='85' font-size='7' fill='#f59e0b' text-anchor='middle'>A</text><rect x='118' y='75' width='28' height='15' fill='#3b82f6' opacity='0.5' stroke='#3b82f6'/><text x='132' y='85' font-size='7' fill='#3b82f6' text-anchor='middle'>B</text><text x='240' y='80' font-size='8' fill='#64748b' font-style='italic'>Yaprak: C</text></svg>",
            note: "Entropi veya Gini Impurity kullanarak en iyi bölme noktasını seçer. Overfitting'i önlemek için budama (pruning) yapılır."
        },
        {
            category: "Karar Ağaçları",
            icon: "fas fa-tree",
            front: "Entropi (Entropy)",
            logic: "Düzensizlik ve belirsizlik ölçüsüdür. Entropi yüksekse (1.0) ortam karışıktır (%50-%50). Entropi düşükse (0.0) ortam saftır (Herkes aynı sınıftan).",
            formula: "$$ H = -\\sum p_i \\log_2(p_i) $$",
            note: "Amaç, sorular sorarak Entropiyi 0'a indirmektir."
        },
        {
            category: "Karar Ağaçları",
            icon: "fas fa-info-circle",
            front: "Bilgi Kazancı (Information Gain)",
            logic: "Bir soruyu sorduktan sonra belirsizliğin (Entropinin) ne kadar azaldığıdır. Ağaç, her adımda en çok bilgiyi kazandıran soruyu sorar.",
            formula: "$$ IG = H(Parent) - H(Children)_{avg} $$",
            note: "Kök düğüm (Root Node) en yüksek bilgi kazancına sahip olandır."
        },
        {
            category: "Karar Ağaçları",
            icon: "fas fa-cut",
            front: "Budama (Pruning)",
            logic: "Ağaç çok derinleşirse veriyi ezberler (Overfitting). Gereksiz ve çok detaycı dalları keserek ağacı sadeleştirme işlemine budama denir.",
            formula: "$$ \\text{Karmaşıklık Azaltma} \\to \\text{Genelleştirme} $$",
            note: "Pre-pruning (erken durdurma) veya Post-pruning (sonradan kesme) yapılabilir."
        },
        {
            category: "Karar Ağaçları",
            icon: "fas fa-chart-pie",
            front: "Gini Impurity (Gini Safsızlığı)",
            logic: "Entropi gibi düzensizlik ölçüsüdür ama logaritma kullanmaz, daha hızlı hesaplanır. 0 (saf) ile 0.5 (karışık) arasında değer alır.",
            formula: "$$ Gini = 1 - \\sum p_i^2 $$",
            note: "Entropi ve Gini genellikle benzer sonuçlar verir, Gini daha hızlıdır."
        },
        {
            category: "Karar Ağaçları",
            icon: "fas fa-exclamation-triangle",
            front: "Overfitting ve Karar Ağaçları",
            logic: "Ağaç çok derinleşirse eğitim verisini mükemmel öğrenir ama yeni verilerde başarısız olur. Minimum örnek sayısı, maksimum derinlik gibi parametrelerle kontrol edilir.",
            formula: "$$ \\text{Yüksek Varyans} = \\text{Aşırı Öğrenme} $$",
            note: "Ağaç ne kadar derinse, o kadar fazla ezberler."
        },
        {
            category: "Karar Ağaçları",
            icon: "fas fa-info-circle",
            front: "Gain Ratio (C4.5)",
            logic: "ID3'ün zayıflığını düzeltir. Çok fazla değere sahip özellikleri (örn: TC No) seçmeyi önler. Information Gain'i Split Info'ya bölerek normalize eder. Split Info, özelliğin veriyi ne kadar eşit böldüğünü ölçer.",
            formula: "$$ \\text{Gain Ratio} = \\frac{\\text{Information Gain}}{\\text{Split Info}} $$",
            note: "Split Info yüksekse (özellik çok eşit bölerse) Gain Ratio düşer. Bu sayede çok değerli özellikler cezalandırılır."
        },
        {
            category: "Karar Ağaçları",
            icon: "fas fa-sitemap",
            front: "ID3 vs C4.5 vs CART",
            logic: "ID3: Sadece kategorik veri, Entropi kullanır. C4.5: Hem kategorik hem sayısal, Gain Ratio, eksik veri işler, budama yapar. CART: Gini kullanır, sadece binary (ikili) dallar, hem sınıflandırma hem regresyon.",
            formula: "<svg viewBox='0 0 360 100' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='5' width='100' height='35' fill='#3b82f6' opacity='0.3' stroke='#3b82f6'/><text x='60' y='25' font-size='10' fill='#3b82f6' text-anchor='middle' font-weight='bold'>ID3 (1979)</text><text x='60' y='38' font-size='8' fill='#64748b' text-anchor='middle'>Entropi, Kategorik</text><rect x='130' y='5' width='100' height='35' fill='#8b5cf6' opacity='0.3' stroke='#8b5cf6'/><text x='180' y='25' font-size='10' fill='#8b5cf6' text-anchor='middle' font-weight='bold'>C4.5 (1993)</text><text x='180' y='38' font-size='8' fill='#64748b' text-anchor='middle'>Gain Ratio, Sayısal</text><rect x='250' y='5' width='100' height='35' fill='#10b981' opacity='0.3' stroke='#10b981'/><text x='300' y='25' font-size='10' fill='#10b981' text-anchor='middle' font-weight='bold'>CART (1984)</text><text x='300' y='38' font-size='8' fill='#64748b' text-anchor='middle'>Gini, Binary</text><text x='180' y='75' font-size='10' fill='#64748b' text-anchor='middle'>Günümüzde CART en yaygın</text></svg>",
            note: "C4.5 ID3'ün gelişmiş versiyonudur. CART ise farklı bir yaklaşımla binary ağaçlar üretir."
        },
        // --- HAFTA 13: SVM & YSA ---
        {
            category: "SVM",
            icon: "fas fa-road",
            front: "SVM (Support Vector Machine) Nedir?",
            logic: "SVM, iki sınıfı ayıran en geniş marjine sahip hiper düzlemi bulmaya çalışan bir sınıflandırma algoritmasıdır. Sınırı belirleyen noktalara 'Destek Vektörleri' denir. Doğrusal olmayan problemler için kernel trick kullanarak veriyi daha yüksek boyutlu uzaya taşır.",
            formula: `
            <svg viewBox="0 0 350 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="SVM karar sınırı, marjin ve destek vektörleri gösterimi">
            <!-- Background -->
            <rect x="0" y="0" width="350" height="110" fill="white"/>

            <!-- Plot area frame (subtle) -->
            <rect x="18" y="14" width="214" height="82" rx="10" fill="#ffffff" stroke="#e2e8f0"/>

            <!-- Decision boundary and margins -->
            <!-- Margin lines -->
            <line x1="28" y1="38" x2="222" y2="38" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,4"/>
            <line x1="28" y1="72" x2="222" y2="72" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,4"/>
            <!-- Decision boundary (hyperplane) -->
            <line x1="28" y1="55" x2="222" y2="55" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>

            <!-- Margin double arrow (visualizes width) -->
            <line x1="236" y1="38" x2="236" y2="72" stroke="#4f46e5" stroke-width="1.8"/>
            <polygon points="236,34 231,41 241,41" fill="#4f46e5"/>
            <polygon points="236,76 231,69 241,69" fill="#4f46e5"/>

            <!-- Class points -->
            <!-- Blue class (left) -->
            <circle cx="62" cy="40" r="4.2" fill="#3b82f6"/>
            <circle cx="78" cy="48" r="4.2" fill="#3b82f6"/>
            <circle cx="56" cy="68" r="4.2" fill="#3b82f6"/>
            <circle cx="92" cy="63" r="4.2" fill="#3b82f6"/>

            <!-- Red class (right) -->
            <circle cx="168" cy="42" r="4.2" fill="#ef4444"/>
            <circle cx="186" cy="50" r="4.2" fill="#ef4444"/>
            <circle cx="172" cy="70" r="4.2" fill="#ef4444"/>
            <circle cx="198" cy="64" r="4.2" fill="#ef4444"/>

            <!-- Highlight support vectors (closest to margin lines) -->
            <!-- Blue support vectors (near y=38/72) -->
            <circle cx="62" cy="40" r="6.2" fill="none" stroke="#ec4899" stroke-width="2"/>
            <circle cx="56" cy="68" r="6.2" fill="none" stroke="#ec4899" stroke-width="2"/>
            <!-- Red support vectors -->
            <circle cx="168" cy="42" r="6.2" fill="none" stroke="#ec4899" stroke-width="2"/>
            <circle cx="172" cy="70" r="6.2" fill="none" stroke="#ec4899" stroke-width="2"/>

            <!-- Tiny ticks to show margin relationship -->
            <line x1="120" y1="38" x2="120" y2="55" stroke="#cbd5e1" stroke-width="1"/>
            <line x1="120" y1="55" x2="120" y2="72" stroke="#cbd5e1" stroke-width="1"/>

            <!-- Right-side legend & labels -->
            <text x="252" y="30" font-size="12" fill="#0f172a" font-weight="700">SVM</text>

            <line x1="252" y1="42" x2="278" y2="42" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>
            <text x="284" y="45" font-size="10" fill="#334155">Decision boundary</text>

            <line x1="252" y1="56" x2="278" y2="56" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,4"/>
            <text x="284" y="59" font-size="10" fill="#334155">Margin</text>

            <circle cx="265" cy="73" r="5.5" fill="none" stroke="#ec4899" stroke-width="2"/>
            <text x="284" y="76" font-size="10" fill="#334155">Support vectors</text>

            <!-- Margin text near arrow -->
            <text x="246" y="58" font-size="11" fill="#4f46e5" font-weight="700">margin</text>

            <!-- Optional faint axis labels (kept minimal) -->
            <text x="28" y="104" font-size="9" fill="#94a3b8">feature space (2D)</text>
            </svg>
            `,
            note: "Hard margin (hiç hata yok) veya soft margin (biraz hata kabul edilir) modları vardır. C parametresi hata toleransını kontrol eder."
        },
        {
        category: "SVM",
        icon: "fas fa-road",
        front: "SVM ve Marjin",
        logic: "SVM, iki sınıfı ayırırken karar sınırını (hiperdüzlem) öyle konumlandırır ki iki sınıfa en yakın örneklerle arasındaki mesafe (marjin) maksimum olsun. Bunu bir 'otoyol' gibi düşün: orta şerit karar sınırı, iki yandaki çizgiler marjin sınırlarıdır. Marjin genişledikçe model, sınıfları ayırırken daha 'rahat' bir tampon bölge bırakır; bu da genellikle genelleme açısından daha iyi davranışla ilişkilidir. Marjini fiilen belirleyen kritik örneklere destek vektörleri denir.",
        formula: `
        <svg viewBox="0 0 350 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="SVM marjin (otoyol) gösterimi: karar sınırı, marjin sınırları ve destek vektörleri">
            <!-- background -->
            <rect x="0" y="0" width="350" height="110" fill="#ffffff"/>

            <!-- plot frame -->
            <rect x="16" y="14" width="230" height="82" rx="10" fill="#ffffff" stroke="#e2e8f0"/>

            <!-- "Highway" = margin band -->
            <rect x="28" y="40" width="206" height="30" rx="8" fill="#e8f5ff" opacity="0.95"/>
            <!-- lane divider (decision boundary) -->
            <line x1="28" y1="55" x2="234" y2="55" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>

            <!-- margin borders -->
            <line x1="28" y1="40" x2="234" y2="40" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="6,4"/>
            <line x1="28" y1="70" x2="234" y2="70" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="6,4"/>

            <!-- margin width arrow -->
            <line x1="246" y1="40" x2="246" y2="70" stroke="#4f46e5" stroke-width="1.8"/>
            <polygon points="246,36 241,43 251,43" fill="#4f46e5"/>
            <polygon points="246,74 241,67 251,67" fill="#4f46e5"/>
            <text x="255" y="58" font-size="10.5" fill="#4f46e5" font-weight="700">Marjin</text>

            <!-- blue class (left/top-ish) -->
            <circle cx="70" cy="30" r="4.2" fill="#3b82f6"/>
            <circle cx="92" cy="34" r="4.2" fill="#3b82f6"/>
            <circle cx="62" cy="78" r="4.2" fill="#3b82f6"/>
            <circle cx="98" cy="76" r="4.2" fill="#3b82f6"/>

            <!-- red class (right/bottom-ish) -->
            <circle cx="180" cy="32" r="4.2" fill="#ef4444"/>
            <circle cx="202" cy="36" r="4.2" fill="#ef4444"/>
            <circle cx="176" cy="80" r="4.2" fill="#ef4444"/>
            <circle cx="210" cy="76" r="4.2" fill="#ef4444"/>

            <!-- support vectors: closest points to margin borders -->
            <circle cx="92" cy="34" r="6.2" fill="none" stroke="#ec4899" stroke-width="2"/>
            <circle cx="98" cy="76" r="6.2" fill="none" stroke="#ec4899" stroke-width="2"/>
            <circle cx="202" cy="36" r="6.2" fill="none" stroke="#ec4899" stroke-width="2"/>
            <circle cx="210" cy="76" r="6.2" fill="none" stroke="#ec4899" stroke-width="2"/>

            <!-- legend -->
            <text x="262" y="28" font-size="12" fill="#0f172a" font-weight="800">SVM</text>

            <rect x="262" y="34" width="16" height="10" rx="3" fill="#e8f5ff" stroke="#cbd5e1"/>
            <text x="284" y="43" font-size="10" fill="#334155">Marjin bandı</text>

            <line x1="262" y1="56" x2="278" y2="56" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>
            <text x="284" y="59" font-size="10" fill="#334155">Karar sınırı</text>

            <circle cx="270" cy="73" r="5.5" fill="none" stroke="#ec4899" stroke-width="2"/>
            <text x="284" y="76" font-size="10" fill="#334155">Destek vektörü</text>

            <!-- subtle caption -->
            <text x="28" y="104" font-size="9" fill="#94a3b8">En yakın örnekler marjini belirler.</text>
        </svg>
        `,
        note: "Sınırı (ve marjini) belirleyen kritik eğitim örneklerine destek vektörleri denir; bu örnekler değişirse karar sınırı da değişebilir."
        },
        {
            category: "SVM",
            icon: "fas fa-magic",
            front: "Kernel Trick (Çekirdek Hilesi)",
            logic: "Veri doğrusal ayrılamıyorsa (iç içe geçmişse), veriyi alıp daha yüksek bir boyuta (3D vb.) fırlatır (HAFTA 13 notlarındaki simülasyonlara bakınız). Orada araya bir kağıt (düzlem) sokarak ayırır.",
            formula: "$$ K(x,y) = \\langle \\phi(x), \\phi(y) \\rangle $$",
            note: "Karmaşık, non-linear verileri ayırmanın anahtarıdır."
        },
        {
            category: "SVM",
            icon: "fas fa-sliders-h",
            front: "C Parametresi (Ceza)",
            logic: "Modelin hata yapma korkusudur. C büyükse 'Asla hata yapma' der (Overfitting riski). C küçükse 'Biraz hata olabilir, yol geniş olsun' der (Underfitting riski).",
            formula: "$$ C \\text{ yüksek} = \\text{Sert Marjın} $$",
            note: "Soft Margin (Düşük C), gürültülü verilerde daha iyidir."
        },
        {
        category: "SVM",
        icon: "fas fa-compress",
        front: "Hard Margin vs Soft Margin (C Parametresi)",
        logic: "Hard Margin, eğitim verisinde hiçbir ihlale izin vermeden sınıfları tamamen ayıran en geniş marjini arar (yalnızca veriler gerçekten lineer ayrılabiliyorsa). Soft Margin ise marjini geniş tutmaya çalışırken bazı noktaların marjin bandını veya karar sınırını ihlal etmesine izin verir. Bu ihlaller 'slack' (ξ) ile ölçülür ve C parametresi bu ihlalleri ne kadar sert cezalandıracağını belirler: C büyüdükçe ihlale tolerans azalır (daha az hata, daha dar marjin riski); C küçüldükçe tolerans artar (daha geniş marjin, daha çok ihlal kabulü).",
        formula: "$$\\min_{\\mathbf{w}, b, \\boldsymbol\\xi}\\ \\frac{1}{2}\\lVert\\mathbf{w}\\rVert^2 + C\\sum_{i=1}^{n}\\xi_i \\quad \\text{s.t.}\\quad y_i(\\mathbf{w}^T\\mathbf{x}_i + b) \\ge 1-\\xi_i,\\ \\xi_i\\ge 0$$",
        formula_svg: `
        <svg viewBox="0 0 360 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hard vs Soft Margin SVM görseli: soft'ta ihlaller (slack) gösterimi">
            <rect x="0" y="0" width="360" height="130" fill="#ffffff"/>

            <!-- Two panels -->
            <rect x="14" y="16" width="160" height="98" rx="10" fill="#ffffff" stroke="#e2e8f0"/>
            <rect x="186" y="16" width="160" height="98" rx="10" fill="#ffffff" stroke="#e2e8f0"/>

            <!-- Titles -->
            <text x="94" y="34" font-size="12" font-weight="800" fill="#0f172a" text-anchor="middle">Hard Margin</text>
            <text x="266" y="34" font-size="12" font-weight="800" fill="#0f172a" text-anchor="middle">Soft Margin</text>

            <!-- Hard panel: margins + boundary -->
            <line x1="26" y1="56" x2="162" y2="56" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="6,4"/>
            <line x1="26" y1="82" x2="162" y2="82" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="6,4"/>
            <line x1="26" y1="69" x2="162" y2="69" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>

            <!-- Hard points (perfectly separable) -->
            <circle cx="52" cy="48" r="4" fill="#3b82f6"/>
            <circle cx="70" cy="52" r="4" fill="#3b82f6"/>
            <circle cx="62" cy="90" r="4" fill="#3b82f6"/>
            <circle cx="80" cy="88" r="4" fill="#3b82f6"/>

            <circle cx="126" cy="50" r="4" fill="#ef4444"/>
            <circle cx="144" cy="54" r="4" fill="#ef4444"/>
            <circle cx="120" cy="92" r="4" fill="#ef4444"/>
            <circle cx="148" cy="88" r="4" fill="#ef4444"/>

            <!-- support vectors highlight (closest to margins) -->
            <circle cx="70" cy="52" r="6" fill="none" stroke="#ec4899" stroke-width="2"/>
            <circle cx="80" cy="88" r="6" fill="none" stroke="#ec4899" stroke-width="2"/>
            <circle cx="144" cy="54" r="6" fill="none" stroke="#ec4899" stroke-width="2"/>
            <circle cx="148" cy="88" r="6" fill="none" stroke="#ec4899" stroke-width="2"/>

            <!-- Soft panel: margins + boundary -->
            <line x1="198" y1="56" x2="334" y2="56" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="6,4"/>
            <line x1="198" y1="82" x2="334" y2="82" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="6,4"/>
            <line x1="198" y1="69" x2="334" y2="69" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>

            <!-- Soft points (with violations) -->
            <circle cx="224" cy="48" r="4" fill="#3b82f6"/>
            <circle cx="242" cy="52" r="4" fill="#3b82f6"/>
            <circle cx="234" cy="90" r="4" fill="#3b82f6"/>
            <circle cx="252" cy="88" r="4" fill="#3b82f6"/>

            <circle cx="298" cy="50" r="4" fill="#ef4444"/>
            <circle cx="316" cy="54" r="4" fill="#ef4444"/>
            <circle cx="292" cy="92" r="4" fill="#ef4444"/>
            <circle cx="320" cy="88" r="4" fill="#ef4444"/>

            <!-- Violation examples: one blue inside margin band (near boundary), one red crosses boundary -->
            <circle cx="260" cy="72" r="4" fill="#3b82f6"/>
            <circle cx="286" cy="66" r="4" fill="#ef4444"/>

            <!-- Mark violations with arrows (slack) -->
            <line x1="260" y1="72" x2="260" y2="82" stroke="#f59e0b" stroke-width="1.8"/>
            <polygon points="260,86 255,79 265,79" fill="#f59e0b"/>
            <text x="266" y="84" font-size="9" fill="#b45309" font-weight="700">ξ</text>

            <line x1="286" y1="66" x2="286" y2="69" stroke="#f59e0b" stroke-width="1.8"/>
            <polygon points="286,73 281,66 291,66" fill="#f59e0b"/>
            <text x="292" y="76" font-size="9" fill="#b45309" font-weight="700">ξ</text>

            <!-- C scale hint -->
            <text x="266" y="112" font-size="9.5" fill="#334155">C ↑ : ihlale tolerans ↓</text>
            <text x="266" y="124" font-size="9.5" fill="#334155">C ↓ : marjin genişler, ihlal ↑</text>
        </svg>
        `,
        note: "Hard margin pratikte nadirdir (gürültü/aykırı değerler yüzünden). Soft margin, hataya kontrollü tolerans vererek daha sağlam (robust) bir sınır üretir. C parametresi büyüdükçe model eğitim hatasını daha fazla önemser; küçüldükçe marjini daha fazla önemser."
        },
        {
            category: "SVM",
            icon: "fas fa-circle",
            front: "RBF Kernel (Radial Basis Function)",
            logic: "En popüler kernel'dir. Veriyi sonsuz boyutlu uzaya taşır. Gamma parametresi ile kontrol edilir: Yüksek gamma = dar etki alanı (overfitting), Düşük gamma = geniş etki alanı.",
            formula: "$$ K(x,y) = e^{-\\gamma ||x-y||^2} $$",
            note: "Non-linear problemlerde genellikle en iyi sonucu verir."
        },
        {
            category: "SVM",
            icon: "fas fa-project-diagram",
            front: "Polynomial Kernel",
            logic: "Veriyi polinom derecesi kadar yüksek boyutlu uzaya taşır. Derece (degree) parametresi ile kontrol edilir. Düşük derece = basit eğriler, Yüksek derece = karmaşık eğriler.",
            formula: "$$ K(x,y) = (x^T y + c)^d $$",
            note: "RBF'den daha az esnek ama bazı problemlerde etkilidir."
        },
        {
            category: "SVM",
            icon: "fas fa-sliders-h",
            front: "SVM'de Normalizasyon Zorunluluğu",
            logic: "SVM mesafe tabanlı çalıştığı için özelliklerin ölçeğine çok duyarlıdır. 'Maaş' (50.000) ile 'Yaş' (30) arasındaki mesafe hesabında maaş domine eder. Mutlaka StandardScaler veya MinMaxScaler ile normalize edilmelidir.",
            formula: "<svg viewBox='0 0 350 100' xmlns='http://www.w3.org/2000/svg'><text x='20' y='25' font-size='12' fill='#ef4444' font-weight='bold'>Normalizasyon YOK:</text><text x='20' y='45' font-size='11' fill='#64748b'>Maaş: 50.000, Yaş: 30</text><text x='20' y='65' font-size='11' fill='#64748b'>Maaş farkı mesafeyi yutar</text><text x='20' y='85' font-size='10' fill='#64748b'>Adil olmayan ölçüm</text><text x='200' y='25' font-size='12' fill='#10b981' font-weight='bold'>Normalizasyon VAR:</text><text x='200' y='45' font-size='11' fill='#64748b'>Her ikisi de 0-1 arası</text><text x='200' y='65' font-size='11' fill='#64748b'>Adil mesafe hesabı</text><text x='200' y='85' font-size='10' fill='#10b981'>StandardScaler/MinMax</text></svg>",
            note: "SVM'e veri vermeden önce mutlaka StandardScaler veya MinMaxScaler kullanılmalıdır. Aksi halde büyük sayılı özellikler sonucu tek başına belirler."
        },
        {
            category: "SVM",
            icon: "fas fa-adjust",
            front: "Gamma Parametresi (RBF Kernel)",
            logic: "RBF kernel'de her veri noktasının etki alanını kontrol eder. Yüksek Gamma: Dar etki alanı, her nokta sadece yakın komşularını etkiler → Overfitting riski. Düşük Gamma: Geniş etki alanı, daha yumuşak sınırlar → Underfitting riski.",
            formula: "$$ K(x,y) = e^{-\\gamma ||x-y||^2} $$",
            note: "Gamma çok yüksekse karar sınırı her noktanın etrafından dolaşır, aşırı kıvrımlı olur. Optimum değer cross-validation ile bulunur."
        },
        {
            category: "Yapay Sinir Ağları",
            icon: "fas fa-project-diagram",
            front: "Yapay Sinir Ağları (YSA) Nedir?",
            logic: "Yapay Sinir Ağları, beynin nöron yapısından ilham alan makine öğrenmesi modelleridir. Katmanlar halinde organize edilmiş nöronlardan oluşur. Her nöron girdileri ağırlıklarla çarpar, toplar ve aktivasyon fonksiyonundan geçirir. Derin öğrenme (deep learning) bu yapıların çok katmanlı versiyonudur.",
            formula: "<svg viewBox='0 0 350 100' xmlns='http://www.w3.org/2000/svg'><circle cx='40' cy='30' r='9' fill='#3b82f6' opacity='0.3' stroke='#3b82f6'/><text x='40' y='35' font-size='9' fill='#3b82f6' text-anchor='middle' font-weight='bold'>X1</text><circle cx='40' cy='55' r='9' fill='#3b82f6' opacity='0.3' stroke='#3b82f6'/><text x='40' y='60' font-size='9' fill='#3b82f6' text-anchor='middle' font-weight='bold'>X2</text><circle cx='40' cy='80' r='9' fill='#3b82f6' opacity='0.3' stroke='#3b82f6'/><text x='40' y='85' font-size='9' fill='#3b82f6' text-anchor='middle' font-weight='bold'>X3</text><line x1='49' y1='30' x2='120' y2='45' stroke='#94a3b8' stroke-width='1'/><line x1='49' y1='55' x2='120' y2='55' stroke='#94a3b8' stroke-width='1'/><line x1='49' y1='80' x2='120' y2='65' stroke='#94a3b8' stroke-width='1'/><circle cx='150' cy='55' r='12' fill='#10b981' opacity='0.3' stroke='#10b981' stroke-width='2'/><text x='150' y='60' font-size='10' fill='#10b981' text-anchor='middle' font-weight='bold'>Σ</text><line x1='162' y1='55' x2='230' y2='55' stroke='#94a3b8' stroke-width='1'/><rect x='230' y='45' width='25' height='20' fill='#ec4899' opacity='0.3' stroke='#ec4899'/><text x='242' y='58' font-size='9' fill='#ec4899' text-anchor='middle' font-weight='bold'>f()</text><line x1='255' y1='55' x2='300' y2='55' stroke='#94a3b8' stroke-width='1'/><circle cx='320' cy='55' r='9' fill='#f59e0b' opacity='0.3' stroke='#f59e0b'/><text x='320' y='60' font-size='9' fill='#f59e0b' text-anchor='middle' font-weight='bold'>Y</text><text x='175' y='90' font-size='10' fill='#64748b'>Y = f(Σ wᵢ·xᵢ + b)</text></svg>",
            note: "Backpropagation ile öğrenir. Gradient descent ile ağırlıklar güncellenir. Derin ağlarda overfitting'i önlemek için dropout ve batch normalization kullanılır."
        },
        {
            category: "Yapay Sinir Ağları",
            icon: "fas fa-project-diagram",
            front: "Perceptron",
            logic: "Tek bir nöronun matematiksel modelidir. Girdileri alır, ağırlıklarla çarpar, toplar ve bir aktivasyon fonksiyonundan geçirip karar verir.",
            formula: "$$ y = f(\\sum w_i x_i + b) $$",
            note: "Tek katmanlı perceptron sadece doğrusal (linear) problemleri çözebilir."
        },
        {
            category: "Yapay Sinir Ağları",
            icon: "fas fa-bolt",
            front: "Aktivasyon Fonksiyonu (ReLU)",
            logic: "Ağa 'eğrisellik' (non-linearity) katar. Bu olmazsa, milyon tane nöron da koysan hepsi tek bir düz çizgi gibi davranır. Karmaşık şekilleri öğrenemez.",
            formula: "$$ f(x) = max(0, x) $$",
            note: "ReLU negatifleri 0 yapar, pozitifleri geçirir. En popüler fonksiyondur."
        },
        {
            category: "Yapay Sinir Ağları",
            icon: "fas fa-undo",
            front: "Backpropagation (Geri Yayılım)",
            logic: "Hatanın sorumlusunu bulmak için sondan başa gitmektir. Zincirleme türev alarak, her bir ağırlığın toplam hataya ne kadar katkı yaptığını hesaplar.",
            formula: "$$ \\frac{\\partial E}{\\partial w} $$ (Zincir Kuralı)",
            note: "Ağın öğrenmesini sağlayan motor budur."
        },
        {
            category: "Yapay Sinir Ağları",
            icon: "fas fa-level-down-alt",
            front: "Gradient Descent & Learning Rate",
            logic: "Hata dağının zirvesinden vadiye inmeye çalışmaktır. Eğim (Gradient) yönü gösterir, Learning Rate (Adım boyu) ne kadar hızlı gideceğini belirler.",
            formula: "$$ w_{new} = w_{old} - \\alpha \\cdot \\nabla J $$",
            note: "Learning rate çok büyükse hedefi ıskalar, çok küçükse varması sonsuza sürer."
        },
        {
            category: "Yapay Sinir Ağları",
            icon: "fas fa-bullseye",
            front: "Loss Function (Kayıp Fonksiyonu)",
            logic: "Modelin ne kadar yanlış olduğunu ölçer. Sınıflandırma için Cross-Entropy, Regresyon için MSE (Mean Squared Error) kullanılır. Amaç bu değeri minimize etmektir.",
            formula: "$$ L = -\\sum_{i=1}^{n} y_i \\log(\\hat{y}_i) + (1-y_i)\\log(1-\\hat{y}_i) $$",
            note: "Loss ne kadar düşükse, model o kadar iyidir."
        },
        {
            category: "Yapay Sinir Ağları",
            icon: "fas fa-redo",
            front: "Epoch, Batch, Iteration",
            logic: "Epoch: Tüm veri setinin bir kez eğitilmesi. Batch: Her seferde işlenen veri parçası. Iteration: Bir batch'in işlenmesi. 1000 örnek, batch=100 ise 1 epoch = 10 iteration.",
            formula: "$$ \\text{Epoch Başına İterasyon} = \\frac{\\text{Toplam Örnek}}{\\text{Batch Boyutu}} $$",
            note: "Batch size küçükse daha gürültülü ama daha hızlı öğrenir."
        },
        {
            category: "Yapay Sinir Ağları",
            icon: "fas fa-eraser",
            front: "Dropout Regularization",
            logic: "Overfitting'i önlemek için eğitim sırasında rastgele nöronları kapatır (dropout). Test sırasında tüm nöronlar açıktır. Ağın tek bir nörona bağımlı olmasını engeller.",
            formula: "$$ \\text{Dropout Oranı} = 0.2 \\to \\%20 \\text{ nöron kapatılır} $$",
            note: "Genellikle 0.2-0.5 arası değerler kullanılır."
        },
        {
            category: "Yapay Sinir Ağları",
            icon: "fas fa-balance-scale",
            front: "Batch Normalization",
            logic: "Her katmandaki aktivasyonları normalize eder (ortalama 0, standart sapma 1). Eğitimi hızlandırır, learning rate'i artırır, overfitting'i azaltır. Gradient flow'u iyileştirir.",
            formula: "$$ \\hat{x} = \\frac{x - \\mu}{\\sqrt{\\sigma^2 + \\epsilon}} $$",
            note: "Derin ağlarda neredeyse zorunludur."
        },
        {
            category: "Yapay Sinir Ağları",
            icon: "fas fa-exclamation-circle",
            front: "Vanishing Gradient Problemi",
            logic: "Derin ağlarda, hatanın geriye yayılırken (backpropagation) her katmanda küçülmesi ve sıfıra yaklaşması sorunudur. Sigmoid/Tanh gibi fonksiyonlar gradyanı küçültür. Sonuç: İlk katmanlar öğrenemez, sadece son katmanlar güncellenir.",
            formula: "<svg viewBox='0 0 350 100' xmlns='http://www.w3.org/2000/svg'><text x='20' y='30' font-size='12' fill='#4f46e5' font-weight='bold'>Gradient → 0 (Kaybolur)</text><text x='20' y='55' font-size='11' fill='#64748b'>İlk katmanlar öğrenemez</text><text x='20' y='80' font-size='11' fill='#64748b'>Çözüm: ReLU, Batch Norm</text></svg>",
            note: "ReLU aktivasyon fonksiyonu ve Batch Normalization bu sorunu hafifletir. ResNet gibi modern mimariler skip connection ile çözer."
        },
        {
            category: "Yapay Sinir Ağları",
            icon: "fas fa-seedling",
            front: "Weight Initialization",
            logic: "Ağırlıkların başlangıç değerleri çok önemlidir. Hepsi 0 ise tüm nöronlar aynı şeyi öğrenir (simetri problemi). Rastgele küçük değerler verilir. Xavier/He initialization gibi yöntemler katman boyutuna göre optimal başlangıç değerleri sağlar.",
            formula: "$$ W \\sim \\mathcal{N}(0, \\frac{2}{n_{in} + n_{out}}) \\text{ (Xavier)} $$",
            note: "Ağırlıklar 0'dan başlarsa gradient descent çalışmaz. Rastgele ama kontrollü başlangıç gerekir."
        },

        // --- HAFTA 14: Kümeleme ---
        {
            category: "Kümeleme",
            icon: "fas fa-object-group",
            front: "Kümeleme (Clustering) Nedir?",
            logic: "Kümeleme, etiketlenmemiş verileri benzer özelliklere sahip gruplara ayıran denetimsiz öğrenme (unsupervised learning) yöntemidir. Veriler arasındaki benzerliklere göre kümeler oluşturur. K-Means, Hiyerarşik Kümeleme ve DBSCAN gibi farklı algoritmaları vardır.",
            formula: "<svg viewBox='0 0 350 100' xmlns='http://www.w3.org/2000/svg'><circle cx='70' cy='40' r='5' fill='#3b82f6'/><circle cx='85' cy='48' r='5' fill='#3b82f6'/><circle cx='60' cy='55' r='5' fill='#3b82f6'/><circle cx='75' cy='65' r='5' fill='#3b82f6'/><circle cx='180' cy='40' r='5' fill='#ef4444'/><circle cx='195' cy='48' r='5' fill='#ef4444'/><circle cx='185' cy='55' r='5' fill='#ef4444'/><circle cx='200' cy='65' r='5' fill='#ef4444'/><circle cx='70' cy='50' r='25' fill='#10b981' stroke='#10b981' stroke-width='2' fill-opacity='0.3'/><text x='70' y='50' font-size='9' fill='#10b981' text-anchor='middle' font-weight='bold'>C1</text><circle cx='190' cy='55' r='25' fill='#f59e0b' stroke='#f59e0b' stroke-width='2' fill-opacity='0.3'/><text x='190' y='60' font-size='9' fill='#f59e0b' text-anchor='middle' font-weight='bold'>C2</text><text x='250' y='35' font-size='11' fill='#4f46e5' font-weight='bold'>Amaç:</text><text x='250' y='52' font-size='10' fill='#64748b'>Benzer verileri</text><text x='250' y='67' font-size='10' fill='#64748b'>aynı kümede</text><text x='250' y='82' font-size='10' fill='#64748b'>toplamak</text></svg>",
            note: "Kümeleme, veri keşfi, segmentasyon ve anomali tespiti gibi problemlerde kullanılır. K-Means için K sayısını önceden bilmek gerekir."
        },
        {
            category: "Kümeleme",
            icon: "fas fa-object-group",
            front: "K-Means Algoritması",
            logic: "Veriyi K adet merkeze (centroid) olan uzaklığına göre gruplar. Merkezleri sürekli kaydırarak en iyi konumu bulur. Yuvarlak kümeler arar.",
            formula: "$$ \\min \\sum_{i=1}^{n} ||x_i - \\mu_k||^2 $$",
            note: "K sayısını baştan vermeniz gerekir. Outlier'lara (aykırılara) karşı hassastır."
        },
        {
            category: "Kümeleme",
            icon: "fas fa-chart-line",
            front: "Elbow (Dirsek) Metodu",
            logic: "K-Means için 'Kaç küme (K) olmalı?' sorusunun cevabıdır. Hata grafiğinin (WCSS) kırılıp düzleşmeye başladığı nokta (dirsek) optimum sayıdır.",
            formula: "$$ \\text{WCSS} = \\sum_{k=1}^{K} \\sum_{x_i \\in C_k} ||x_i - \\mu_k||^2 $$",
            note: "Kırılma noktasından sonra küme eklemenin faydası azalır."
        },
        {
            category: "Kümeleme",
            icon: "fas fa-sitemap",
            front: "Hiyerarşik Kümeleme & Dendrogram",
            logic: "Verilerin soy ağacını çıkarır. Dendrogram grafiğinde, dalları istediğimiz yükseklikten keserek küme sayısını sonradan belirleyebiliriz.",
            formula: "$$ \\text{Aşağıdan Yukarıya Yaklaşım (Dendrogram)} $$",
            note: "K sayısını baştan bilmek zorunda değilsiniz."
        },
        {
            category: "Kümeleme",
            icon: "fas fa-link",
            front: "Linkage (Bağlantı) Türleri",
            logic: "İki küme arasındaki mesafe nasıl ölçülür? Single: En yakın iki nokta. Complete: En uzak iki nokta. Ward: Varyans artışını en aza indiren.",
            formula: "$$ \\text{Single, Complete, Average, Ward} $$",
            note: "Ward metodu genellikle en dengeli kümeleri oluşturur."
        },
        {
            category: "Kümeleme",
            icon: "fas fa-cloud",
            front: "DBSCAN Algoritması",
            logic: "Yoğunluk tabanlıdır. K-Means'in aksine 'K' sayısı istemez ve yuvarlak olmayan (hilal, yılan) şekilleri bulabilir. Gürültüyü (Noise) çöpe atar.",
            formula: "$$ \\text{Yoğunluk Tabanlı Kümeleme} $$",
            note: "Parametreleri: Epsilon (yarıçap) ve MinPts (minimum nokta)."
        },
        {
            category: "Kümeleme",
            icon: "fas fa-star-half-alt",
            front: "Silhouette Skoru",
            logic: "Kümelemenin kalitesini ölçer. 'Elemanlar kendi kümesine ne kadar yakın, diğer kümeye ne kadar uzak?' sorusuna -1 ile +1 arası puan verir.",
            formula: "$$ s = \\frac{b-a}{max(a,b)} $$",
            note: "+1 mükemmel, 0 kararsız, -1 yanlış kümeleme demektir."
        },
        {
            category: "Kümeleme",
            icon: "fas fa-crosshairs",
            front: "Centroid (Merkez Nokta)",
            logic: "K-Means'te her kümenin merkez noktasıdır. Kümedeki tüm noktaların ortalaması alınarak hesaplanır. Algoritma centroid'leri sürekli güncelleyerek en iyi konumu bulur.",
            formula: "$$ \\mu_k = \\frac{1}{|C_k|} \\sum_{x_i \\in C_k} x_i $$",
            note: "K-Means iteratif olarak centroid'leri optimize eder."
        },
        {
            category: "Kümeleme",
            icon: "fas fa-chart-line",
            front: "WCSS (Within-Cluster Sum of Squares)",
            logic: "Her noktanın kendi centroid'ine olan uzaklığının karesinin toplamıdır. K-Means bu değeri minimize etmeye çalışır. Elbow metodunda bu değer grafiğe çizilir.",
            formula: "$$ WCSS = \\sum_{k=1}^{K} \\sum_{x_i \\in C_k} ||x_i - \\mu_k||^2 $$",
            note: "WCSS azaldıkça kümeleme kalitesi artar."
        },
        {
            category: "Kümeleme",
            icon: "fas fa-arrow-up",
            front: "Agglomerative (Birleştirici) Kümeleme",
            logic: "Alt seviyeden başlar, her nokta ayrı kümedir. En yakın iki kümeyi birleştirerek yukarı çıkar. Dendrogram'ın altından üstüne doğru ilerler.",
            formula: "$$ \\text{Aşağıdan Yukarıya (Agglomerative)} $$",
            note: "Hiyerarşik kümelemenin en yaygın türüdür."
        },
        {
            category: "Kümeleme",
            icon: "fas fa-arrow-down",
            front: "Divisive (Bölücü) Kümeleme",
            logic: "Üst seviyeden başlar, tüm noktalar tek kümedir. En uygun yerde bölerek aşağı iner. Dendrogram'ın üstünden altına doğru ilerler.",
            formula: "$$ \\text{Yukarıdan Aşağıya} $$",
            note: "Agglomerative'den daha az kullanılır, daha pahalıdır."
        },
        {
            category: "Kümeleme",
            icon: "fas fa-cloud",
            front: "DBSCAN Parametreleri (Epsilon & MinPts)",
            logic: "Epsilon (ε): Bir noktanın etrafındaki yarıçap. MinPts: Bir noktanın 'çekirdek' (core) sayılması için etrafında en az kaç komşu olması gerektiği. Pratik kural: MinPts ≥ 2 × Boyut Sayısı (2D için MinPts=4).",
            formula: "<svg viewBox='0 0 400 120' xmlns='http://www.w3.org/2000/svg'><circle cx='100' cy='60' r='30' fill='#3b82f6' opacity='0.2' stroke='#3b82f6' stroke-width='2'/><circle cx='100' cy='60' r='5' fill='#3b82f6'/><text x='100' y='100' font-size='11' fill='#64748b' text-anchor='middle'>Epsilon yarıçapı</text><text x='250' y='40' font-size='12' fill='#4f46e5' font-weight='bold'>MinPts ≥ 2×Boyut</text><text x='250' y='65' font-size='11' fill='#64748b'>2D → MinPts = 4</text><text x='250' y='90' font-size='11' fill='#64748b'>3D → MinPts = 6</text></svg>",
            note: "Epsilon değeri k-distance grafiğindeki dirsek (elbow) noktasından seçilir. MinPts çok küçükse gürültüden etkilenir, çok büyükse kümeler birleşir."
        },
        {
            category: "Kümeleme",
            icon: "fas fa-circle",
            front: "DBSCAN: Core, Border, Noise",
            logic: "Core Point: Epsilon yarıçapında en az MinPts komşusu olan nokta. Border Point: Komşu sayısı MinPts'ten az ama bir core point'e yakın olan nokta. Noise Point: Ne core ne de border olan, hiçbir kümeye ait olmayan nokta (gürültü).",
            formula: "<svg viewBox='0 0 400 120' xmlns='http://www.w3.org/2000/svg'><circle cx='80' cy='50' r='8' fill='#10b981'/><text x='80' y='70' font-size='10' fill='#10b981' text-anchor='middle' font-weight='bold'>Core</text><circle cx='150' cy='50' r='8' fill='#f59e0b'/><text x='150' y='70' font-size='10' fill='#f59e0b' text-anchor='middle' font-weight='bold'>Border</text><circle cx='220' cy='50' r='8' fill='#ef4444'/><text x='220' y='70' font-size='10' fill='#ef4444' text-anchor='middle' font-weight='bold'>Noise</text><text x='200' y='100' font-size='11' fill='#64748b'>Noise = Gürültü (Outlier)</text></svg>",
            note: "DBSCAN'in en büyük avantajı gürültüyü (noise) otomatik olarak tespit edip kümelemeden ayırmasıdır."
        },
        {
            category: "Kümeleme",
            icon: "fas fa-chart-line",
            front: "k-distance Grafiği (Epsilon Seçimi)",
            logic: "DBSCAN için optimum Epsilon değerini bulmak için kullanılır. Her noktanın k. en yakın komşusuna olan mesafesi hesaplanır ve sıralanır. Grafiğin keskin bir şekilde büküldüğü 'Dirsek' (Elbow) noktası optimum Epsilon değeridir.",
            formula: "<svg viewBox='0 0 400 100' xmlns='http://www.w3.org/2000/svg'><path d='M 20 80 L 60 70 L 100 60 L 140 55 L 180 50 L 220 48 L 260 45 L 300 44' fill='none' stroke='#3b82f6' stroke-width='2'/><circle cx='180' cy='50' r='5' fill='#ef4444'/><text x='180' y='40' font-size='10' fill='#ef4444' font-weight='bold'>Dirsek</text><text x='200' y='70' font-size='11' fill='#64748b'>Bu noktadan sonra</text><text x='200' y='85' font-size='11' fill='#64748b'>mesafe aniden artar</text></svg>",
            note: "Dirsek noktasından önce mesafe yavaş artar (yoğun bölge), sonra aniden sıçrar (boşluk). Bu sıçrama noktası optimum Epsilon'dur."
        },
        {
            category: "Kümeleme",
            icon: "fas fa-link",
            front: "Complete Linkage vs Single Linkage",
            logic: "Single Linkage: İki küme arasındaki en yakın iki nokta arasındaki mesafe. Kümeleri gevşek tutar, zincirleme birleşme (chaining) yaratabilir. Complete Linkage: İki küme arasındaki en uzak iki nokta arasındaki mesafe. Kümeleri sıkı tutar, küresel kümeler oluşturur.",
            formula: "$$ \\text{Single: } d_{min}(C_i, C_j) = \\min_{x \\in C_i, y \\in C_j} d(x,y) $$",
            note: "Ward metodu varyans artışını minimize eder, genellikle en dengeli sonuçları verir."
        },

        // --- HAFTA 15: Birliktelik Kuralları ---
        {
            category: "Birliktelik",
            icon: "fas fa-shopping-cart",
            front: "Birliktelik Kuralları Nedir?",
            logic: "Birliktelik kuralları, veri setindeki öğeler arasındaki ilişkileri bulmak için kullanılan bir veri madenciliği tekniğidir. 'Ekmek alanların %70'i süt de alır' gibi kurallar üretir. Market sepet analizi (market basket analysis) en yaygın uygulama alanıdır. Support, Confidence ve Lift metrikleri ile kurallar değerlendirilir.",
            formula: "<svg viewBox='0 0 350 100' xmlns='http://www.w3.org/2000/svg'><rect x='15' y='20' width='55' height='35' fill='#3b82f6' opacity='0.3' stroke='#3b82f6'/><text x='42' y='42' font-size='10' fill='#3b82f6' text-anchor='middle' font-weight='bold'>Ekmek</text><text x='42' y='68' font-size='9' fill='#64748b' text-anchor='middle'>X</text><rect x='85' y='20' width='55' height='35' fill='#10b981' opacity='0.3' stroke='#10b981'/><text x='112' y='42' font-size='10' fill='#10b981' text-anchor='middle' font-weight='bold'>Süt</text><text x='112' y='68' font-size='9' fill='#64748b' text-anchor='middle'>Y</text><text x='170' y='38' font-size='14' fill='#4f46e5' font-weight='bold'>→</text><text x='220' y='25' font-size='11' fill='#4f46e5' font-weight='bold'>Kural: X → Y</text><text x='220' y='42' font-size='10' fill='#64748b'>Support: P(X∪Y)</text><text x='220' y='58' font-size='10' fill='#64748b'>Confidence: P(Y|X)</text><text x='220' y='74' font-size='10' fill='#64748b'>Lift: P(Y|X)/P(Y)</text><text x='220' y='90' font-size='9' fill='#ec4899' font-style='italic'>Lift > 1: Pozitif</text></svg>",
            note: "Apriori ve FP-Growth algoritmaları ile sık öğe kümeleri bulunur. Minimum support ve confidence eşikleri ile geçerli kurallar filtrelenir."
        },
        {
            category: "Birliktelik",
            icon: "fas fa-shopping-cart",
            front: "Support (Destek)",
            logic: "Bir ürünün popülerliğidir. 'Süt' toplam alışverişlerin yüzde kaçında var? Çok nadir ürünleri elemek için kullanılır.",
            formula: "$$ \\text{Support}(X) = \\frac{\\text{Frekans}(X)}{N} $$",
            note: "Minimum Support değeri altındaki ürünler kural oluşturmaz."
        },
        {
            category: "Birliktelik",
            icon: "fas fa-handshake",
            front: "Confidence (Güven)",
            logic: "Kuralın tutarlılığıdır. 'Ekmek alanların yüzde kaçı Süt de aldı?' sorusunun cevabıdır.",
            formula: "$$ \\text{Confidence}(X \\to Y) = \\frac{\\text{Support}(X \\cup Y)}{\\text{Support}(X)} $$",
            note: "Yüksek güven tek başına yeterli değildir (Lift kontrol edilmeli)."
        },
        {
            category: "Birliktelik",
            icon: "fas fa-balance-scale-right",
            front: "Lift (Kaldıraç)",
            logic: "İlişkinin gerçek gücüdür. 'Herkes su alıyor diye mi ekmek alan su aldı (Lift=1), yoksa ekmek aldığı için mi (Lift>1)?' ayrımını yapar.",
            formula: "$$ \\text{Lift}(X \\to Y) = \\frac{\\text{Support}(X \\cup Y)}{\\text{Support}(X) \\cdot \\text{Support}(Y)} $$",
            note: "Lift > 1 Pozitif, Lift < 1 Negatif (birbiriyle alakasız/rakip) ilişki."
        },
        {
            category: "Birliktelik",
            icon: "fas fa-network-wired",
            front: "Apriori Algoritması",
            logic: "Sık ürünleri bulmak için veritabanını defalarca tarar. 'Önce ikililere bak, sonra üçlülere...' mantığıyla çalışır ama yavaştır.",
            formula: "$$ \\text{Aday Üretimi (Candidate Generation)} $$",
            note: "Büyük veri setlerinde darboğaz (bottleneck) yaratır."
        },
        {
            category: "Birliktelik",
            icon: "fas fa-tree",
            front: "FP-Growth Algoritması",
            logic: "Apriori'nin hızlı alternatifidir. Veriyi sadece 2 kez okur, sıkıştırılmış bir ağaç (FP-Tree) oluşturur ve kuralları bu ağaçtan çıkarır.",
            formula: "$$ \\text{Aday Üretimi Yok (FP-Tree Kullanımı)} $$",
            note: "Büyük veritabanları için çok daha verimlidir."
        },
        {
            category: "Birliktelik",
            icon: "fas fa-box",
            front: "Frequent Itemset (Sık Öğe Kümesi)",
            logic: "Minimum Support eşiğini geçen ürün kombinasyonlarıdır. Örneğin {Ekmek, Süt} birlikte yeterince sık görülüyorsa frequent itemset'tir. Tüm kurallar bu kümelerden türetilir.",
            formula: "$$ \\text{Support}(X) \\geq \\text{MinSupport} $$",
            note: "Apriori algoritması önce frequent itemset'leri bulur."
        },
        {
            category: "Birliktelik",
            icon: "fas fa-arrow-right",
            front: "Association Rule (Birliktelik Kuralı)",
            logic: "X → Y formatındaki kurallardır. 'Ekmek alanlar Süt de alır' gibi. Her kuralın Support, Confidence ve Lift değerleri hesaplanır. Minimum eşikleri geçenler geçerli kuraldır.",
            formula: "$$ X \\to Y \\text{ (Eğer X ise Y)} $$",
            note: "Kuralın geçerli olması için hem Support hem Confidence eşiklerini geçmeli."
        },
        {
            category: "Birliktelik",
            icon: "fas fa-sliders-h",
            front: "Minimum Support & Confidence",
            logic: "Minimum Support: Bir ürünün ne kadar sık görülmesi gerektiğidir (örn: %5). Minimum Confidence: Bir kuralın ne kadar güvenilir olması gerektiğidir (örn: %70). Bu değerler çok düşükse çok fazla kural, çok yüksekse hiç kural bulunmaz.",
            formula: "$$ \\text{MinSupport} = 0.05, \\quad \\text{MinConfidence} = 0.7 $$",
            note: "Domain bilgisi ile ayarlanmalıdır."
        },
        {
            category: "Birliktelik",
            icon: "fas fa-tree",
            front: "FP-Tree (Frequent Pattern Tree)",
            logic: "FP-Growth algoritmasının kullandığı sıkıştırılmış ağaç yapısıdır. Veritabanını sadece 2 kez tarar. Ortak önekler (prefix) paylaşılır, sayaçlar artırılır. Apriori'nin aksine aday üretimi yapmaz, direkt ağaç üzerinde madencilik yapar.",
            formula: "<svg viewBox='0 0 400 120' xmlns='http://www.w3.org/2000/svg'><text x='50' y='30' font-size='13' fill='#4f46e5' font-weight='bold'>FP-Tree Yapısı:</text><text x='50' y='55' font-size='12' fill='#64748b'>Ortak önekler paylaşılır</text><text x='50' y='80' font-size='12' fill='#64748b'>Sayaçlar artırılır</text><text x='250' y='40' font-size='11' fill='#10b981' font-weight='bold'>Aday Üretimi YOK</text><text x='250' y='65' font-size='11' fill='#64748b'>Sadece 2 kez tarama</text><text x='250' y='90' font-size='11' fill='#64748b'>Apriori'den çok hızlı</text></svg>",
            note: "FP-Tree oluşturulduktan sonra, aşağıdan yukarıya (bottom-up) taranarak koşullu desen tabanları (conditional pattern bases) oluşturulur ve kurallar çıkarılır."
        },
        {
            category: "Birliktelik",
            icon: "fas fa-arrow-up",
            front: "FP-Growth: Bottom-Up Mining",
            logic: "FP-Tree'den kuralları çıkarma işlemi en az frekanslı öğeden başlayarak yukarıya doğru (bottom-up) yapılır. Her öğe için koşullu desen tabanı (conditional pattern base) oluşturulur ve sık öğe setleri türetilir.",
            formula: "<svg viewBox='0 0 400 100' xmlns='http://www.w3.org/2000/svg'><text x='50' y='30' font-size='13' fill='#4f46e5' font-weight='bold'>Bottom-Up Yaklaşım:</text><text x='50' y='55' font-size='12' fill='#64748b'>En az frekanslı → En çok</text><text x='50' y='80' font-size='12' fill='#64748b'>Koşullu desen tabanları</text><text x='250' y='40' font-size='11' fill='#10b981' font-weight='bold'>Apriori: Top-Down</text><text x='250' y='65' font-size='11' fill='#64748b'>FP-Growth: Bottom-Up</text></svg>",
            note: "Apriori yukarıdan aşağıya (1-li, 2-li, 3-lü setler) çalışırken, FP-Growth aşağıdan yukarıya çalışır ve daha verimlidir."
        },
        {
            category: "Birliktelik",
            icon: "fas fa-network-wired",
            front: "Apriori vs FP-Growth",
            logic: "Apriori: Her adımda aday setler üretir, veritabanını tekrar tekrar tarar (k kez). Büyük veride darboğaz yaratır. FP-Growth: Aday üretimi yapmaz, FP-Tree kullanır, veritabanını sadece 2 kez tarar. Çok daha hızlıdır.",
            formula: "<svg viewBox='0 0 400 120' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='160' height='40' fill='#ef4444' opacity='0.2' stroke='#ef4444'/><text x='100' y='45' font-size='12' fill='#ef4444' text-anchor='middle' font-weight='bold'>Apriori: k kez tarama</text><rect x='220' y='20' width='160' height='40' fill='#10b981' opacity='0.2' stroke='#10b981'/><text x='300' y='45' font-size='12' fill='#10b981' text-anchor='middle' font-weight='bold'>FP-Growth: 2 kez</text><text x='200' y='85' font-size='11' fill='#64748b' text-anchor='middle'>FP-Growth büyük veride çok daha hızlı</text></svg>",
            note: "Apriori'nin en büyük dezavantajı aday setleri (candidate generation) oluştururken çok fazla zaman ve işlem gücü harcamasıdır."
        }
    ];

    let currentCards = [...allFlashcards];
    let currentIndex = 0;

    // Element References
    const cardInner = document.getElementById('cardInner');
    const cardFrontText = document.getElementById('cardFrontText');
    const ansLogic = document.getElementById('ansLogic');
    const ansFormula = document.getElementById('ansFormula');
    const ansNote = document.getElementById('ansNote');
    const cardCategory = document.getElementById('cardCategory');
    const cardIcon = document.getElementById('cardIcon');
    const iconContainer = document.getElementById('iconContainer');
    const frontBorder = document.getElementById('frontBorder');
    const counter = document.getElementById('counter');
    const tagContainer = document.getElementById('tagContainer');

    // Initialize Tags
    function initTags() {
        // Unique categories
        const categories = [...new Set(allFlashcards.map(c => c.category))];
        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = "tag-pill px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 flex-shrink-0 whitespace-nowrap";
            btn.textContent = cat;
            btn.onclick = () => filterCards(cat, btn);
            tagContainer.appendChild(btn);
        });
    }

    function filterCards(category, btnElement) {
        // Reset styles
        document.querySelectorAll('.tag-pill').forEach(b => {
            b.className = "tag-pill px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 flex-shrink-0 whitespace-nowrap";
        });
        
        if (category === 'all') {
            document.querySelector('#tagContainer button:first-child').className += " active bg-brand text-white border-brand shadow-md";
            currentCards = [...allFlashcards];
        } else {
            btnElement.className += " active bg-brand text-white border-brand shadow-md";
            currentCards = allFlashcards.filter(c => c.category === category);
        }
        
        // Reset to first card and render immediately
        currentIndex = 0;
        renderCard();
    }

    function renderCard() {
        // Fade out animation
        const cardContainer = document.querySelector('.card-container');
        if (cardContainer) {
            cardContainer.style.opacity = '0';
            cardContainer.style.transform = 'scale(0.95)';
        }
        
        cardInner.classList.remove('is-flipped');
        
        setTimeout(() => {
            if (currentCards.length === 0) return;
            
            const data = currentCards[currentIndex];
            cardFrontText.textContent = data.front;
            cardCategory.textContent = data.category;
            
            // Backend Content
            ansLogic.textContent = data.logic;
            ansFormula.innerHTML = data.formula;
            ansNote.textContent = data.note;
            
            // Icon
            cardIcon.className = data.icon;
            
            // --- Theme Logic Based on Category ---
            let theme = { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-t-indigo-500" };
            
            if(data.category.includes("KNN")) theme = { bg: "bg-orange-50", text: "text-orange-600", border: "border-t-orange-500" };
            else if(data.category.includes("Metrik")) theme = { bg: "bg-red-50", text: "text-red-600", border: "border-t-red-500" };
            else if(data.category.includes("Bayes")) theme = { bg: "bg-purple-50", text: "text-purple-600", border: "border-t-purple-500" };
            else if(data.category.includes("Ağaç")) theme = { bg: "bg-green-50", text: "text-green-600", border: "border-t-green-500" };
            else if(data.category.includes("Küme")) theme = { bg: "bg-teal-50", text: "text-teal-600", border: "border-t-teal-500" };
            else if(data.category.includes("Birlik")) theme = { bg: "bg-amber-50", text: "text-amber-600", border: "border-t-amber-500" };
            else if(data.category.includes("Sinir")) theme = { bg: "bg-pink-50", text: "text-pink-600", border: "border-t-pink-500" };

            // Apply Theme
            iconContainer.className = `mb-6 sm:mb-8 w-20 h-20 sm:w-24 sm:h-24 rounded-3xl flex items-center justify-center text-4xl sm:text-5xl shadow-inner transition-all duration-500 ${theme.bg} ${theme.text}`;
            cardCategory.className = `absolute top-4 left-4 sm:top-6 sm:left-6 px-2 py-1 sm:px-3 sm:py-1 rounded-md text-[9px] sm:text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${theme.bg} ${theme.text}`;
            frontBorder.className = `flip-card-front p-6 sm:p-8 text-center relative border-t-8 transition-all duration-500 ${theme.border}`;

            // MathJax Refresh (only if formula is not SVG)
            if(window.MathJax && !data.formula.includes('<svg')) {
                MathJax.typesetPromise([ansFormula]).catch(() => {});
            }

            updateUI();
            
            // Fade in animation
            setTimeout(() => {
                if (cardContainer) {
                    cardContainer.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                    cardContainer.style.opacity = '1';
                    cardContainer.style.transform = 'scale(1)';
                }
            }, 50);
        }, 200);
    }

    function updateUI() {
        const newText = `${currentIndex + 1} / ${currentCards.length}`;
        if (counter.textContent !== newText) {
            counter.classList.add('updated');
            counter.textContent = newText;
            setTimeout(() => {
                counter.classList.remove('updated');
            }, 500);
        } else {
            counter.textContent = newText;
        }
    }

    function flipCard() {
        cardInner.classList.toggle('is-flipped');
    }

    function nextCard() {
        if (currentIndex < currentCards.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; 
        }
        renderCard();
    }

    function prevCard() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = currentCards.length - 1;
        }
        renderCard();
    }

    function shuffleCards(render = true) {
        for (let i = currentCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [currentCards[i], currentCards[j]] = [currentCards[j], currentCards[i]];
        }
        currentIndex = 0;
        if(render) renderCard();
    }

    // Keyboard Support
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault(); // Prevent scroll
            flipCard();
        }
        if (e.code === 'ArrowRight') nextCard();
        if (e.code === 'ArrowLeft') prevCard();
    });

    // Welcome Modal Functions
    function closeWelcomeModal() {
        const modal = document.getElementById('welcomeModal');
        const modalContent = modal.querySelector('div > div');
        modal.style.opacity = '0';
        modalContent.style.transform = 'scale(0.95)';
        setTimeout(() => {
            modal.style.pointerEvents = 'none';
            // Store in localStorage that user has seen the modal
            localStorage.setItem('welcomeModalSeen', 'true');
        }, 300);
    }

    function showWelcomeModal() {
        const modal = document.getElementById('welcomeModal');
        const modalContent = modal.querySelector('div > div');
        modal.style.pointerEvents = 'auto';
        setTimeout(() => {
            modal.style.opacity = '1';
            modalContent.style.transform = 'scale(1)';
        }, 10);
    }

    // Check if user has seen the modal before
    window.addEventListener('DOMContentLoaded', () => {
        const hasSeenModal = localStorage.getItem('welcomeModalSeen');
        if (!hasSeenModal) {
            setTimeout(() => {
                showWelcomeModal();
            }, 500); // Show after 500ms delay
        }
    });

    // Start
    initTags();
    renderCard();
