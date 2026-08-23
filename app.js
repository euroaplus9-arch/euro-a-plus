const products = {
    1: { nameKey: 'product1_name', specsKey: 'product1_specs', descKey: 'product1_desc', img: 'images/plitka.jpg', price: 30, oldPrice: 45, priceFormatted: '30 ₾', oldPriceFormatted: '45 ₾' },
    2: { nameKey: 'product2_name', specsKey: 'product2_specs', descKey: 'product2_desc', img: 'images/plitkae.jpg', price: 30, oldPrice: 45, priceFormatted: '30 ₾', oldPriceFormatted: '45 ₾' },
    3: { nameKey: 'product3_name', specsKey: 'product3_specs', descKey: 'product3_desc', img: 'images/plitkaz.jpg', price: 30, oldPrice: 45, priceFormatted: '30 ₾', oldPriceFormatted: '45 ₾' },
    4: { nameKey: 'cement1_name', specsKey: 'cement1_specs', descKey: 'cement1_desc', img: 'images/cement1.jpg', price: 13, oldPrice: 18, priceFormatted: '13 ₾', oldPriceFormatted: '18 ₾' },
    5: { nameKey: 'cement2_name', specsKey: 'cement2_specs', descKey: 'cement2_desc', img: 'images/cement2.jpg', price: 12, oldPrice: 17, priceFormatted: '12 ₾', oldPriceFormatted: '17 ₾' }
};

let cart = JSON.parse(localStorage.getItem('euroCart') || '{}');

for (let id in cart) {
    if (cart[id] <= 0) {
        delete cart[id];
    }
}
saveCart();

const translations = {
    ka: {
        city:"📍 თბილისი", contacts:"კონტაქტები",
        search_placeholder:"ფილების ძებნა...", search_btn:"🔍 ძებნა", cart:"კალათა",
        tiles_nav:"მაღაზია", contacts_nav:"კონტაქტები",
        hero_title:"პრემიუმ ფილები და ცემენტები", hero_desc:"კერამიკული ფილების და ცემენტის ფართო არჩევანი თქვენი სახლისთვის. მიწოდება მთელ საქართველოში.", hero_btn:"პროდუქციის ნახვა ↓",
        popular_title:"🔥 პოპულარული პროდუქტები",
        category_tiles:"ფილები",
        category_cement:"ცემენტები",
        filter_label:"📋 დალაგება:",
        filter_default:"ნაგულისხმევი",
        filter_price_desc:"💰 ძვირიდან იაფისკენ",
        filter_price_asc:"💰 იაფიდან ძვირისკენ",
        filter_name_asc:"🔤 ა-დან ჰ-მდე",
        filter_name_desc:"🔤 ჰ-დან ა-მდე",
        product1_name:"Amazon Light Gray", product1_specs:"ზომა: 60×120 სმ • ფერი: ღია ნაცრისფერი • Super Nano Polished • წარმოება: ირანი", product1_desc:"ელეგანტური ფილა Amazon Light Gray Super Nano Polished საფარით. იდეალურია მისაღები ოთახის, საძინებლისა და სამზარეულოსთვის.",
        product2_name:"Luna", product2_specs:"ზომა: 60×120 სმ • ფერი: თეთრი • Super Nano Polished • წარმოება: ირანი", product2_desc:"მდიდრული ფილა Luna Super Nano Polished საფარით. არეკლავს შუქს, აფართოებს სივრცეს.",
        product3_name:"Amazon Dark Gray", product3_specs:"ზომა: 60×120 სმ • ფერი: მუქი ნაცრისფერი • Super Nano Polished • წარმოება: ირანი", product3_desc:"სტილური ფილა Amazon Dark Gray Super Nano Polished საფარით. იდეალურია თანამედროვე ინტერიერისთვის.",
        cement1_name:"WASP S-9 Universal", cement1_specs:"წონა: 25 კგ • სიმტკიცე: M500 • ტიპი: უნივერსალური • წარმოება: ირანი", cement1_desc:"მაღალი ხარისხის უნივერსალური ცემენტი WASP S-9. იდეალურია ყველა სახის სამშენებლო სამუშაოებისთვის.",
        cement2_name:"WASP S-7 Standard", cement2_specs:"წონა: 25 კგ • სიმტკიცე: M400 • ტიპი: სტანდარტული • წარმოება: ირანი", cement2_desc:"სტანდარტული ცემენტი WASP S-7. შესანიშნავი არჩევანი საშუალო დატვირთვის სამშენებლო სამუშაოებისთვის.",
        add_to_cart:"კალათაში", details:"დეტალურად", added:"დაემატა",
        cart_title:"კალათა", empty_cart:"კალათა ცარიელია", total:"ჯამი", remove:"წაშლა",
        order_details:"შეკვეთის გაფორმება", your_name:"თქვენი სახელი", your_phone:"თქვენი ტელეფონი",
        name_placeholder:"მაგ: ანა", phone_placeholder:"+995 555 35 29 93",
        submit_order:"შეკვეთის გაგზავნა", order_success:"✅ შეკვეთა გაგზავნილია! ჩვენ დაგიკავშირდებით.",
        form_subtitle:"შეავსეთ მონაცემები და ჩვენ დაგიკავშირდებით დასადასტურებლად",
        back_to_shop:"მაღაზიაში დაბრუნება", description_title:"აღწერა",
        page_title:"კონტაქტები", address_title:"მისამართი", phone_title:"ტელეფონი", email_title:"ელ. ფოსტა",
        hours_title:"სამუშაო საათები",
        hours_work:"ორშ-კვ: 09:00–19:00",
        footer_desc:"ფილები და ცემენტები საქართველოში",
        copyright:"© 2026 EURO A PLUS. ყველა უფლება დაცულია.", no_results:"😕 ვერაფერი მოიძებნა"
    },
    ru: {
        city:"📍 Тбилиси", contacts:"Контакты",
        search_placeholder:"Поиск плитки...", search_btn:"🔍 Найти", cart:"Корзина",
        tiles_nav:"Магазин", contacts_nav:"Контакты",
        hero_title:"Премиальная плитка и цементы", hero_desc:"Широкий выбор керамической плитки и цемента для вашего дома. Доставка по всей Грузии.", hero_btn:"Смотреть товары ↓",
        popular_title:"🔥 Популярные товары",
        category_tiles:"Плитка",
        category_cement:"Цементы",
        filter_label:"📋 Сортировать:",
        filter_default:"По умолчанию",
        filter_price_desc:"💰 Сначала дорогие",
        filter_price_asc:"💰 Сначала дешёвые",
        filter_name_asc:"🔤 От А до Я",
        filter_name_desc:"🔤 От Я до А",
        product1_name:"Amazon Light Gray", product1_specs:"Размер: 60×120 см • Цвет: светло-серый • Super Nano Polished • Производство: Иран", product1_desc:"Элегантная плитка Amazon Light Gray с покрытием Super Nano Polished. Идеально подходит для гостиной, спальни и кухни.",
        product2_name:"Luna", product2_specs:"Размер: 60×120 см • Цвет: белый • Super Nano Polished • Производство: Иран", product2_desc:"Роскошная плитка Luna с покрытием Super Nano Polished. Отражает свет, визуально расширяет пространство.",
        product3_name:"Amazon Dark Gray", product3_specs:"Размер: 60×120 см • Цвет: тёмно-серый • Super Nano Polished • Производство: Иран", product3_desc:"Стильная плитка Amazon Dark Gray с покрытием Super Nano Polished. Идеальный выбор для современного интерьера.",
        cement1_name:"WASP S-9 Universal", cement1_specs:"Вес: 25 кг • Прочность: M500 • Тип: универсальный • Производство: Иран", cement1_desc:"Высококачественный универсальный цемент WASP S-9. Идеален для всех видов строительных работ.",
        cement2_name:"WASP S-7 Standard", cement2_specs:"Вес: 25 кг • Прочность: M400 • Тип: стандартный • Производство: Иран", cement2_desc:"Стандартный цемент WASP S-7. Отличный выбор для строительных работ со средней нагрузкой.",
        add_to_cart:"В корзину", details:"Подробнее", added:"Добавлено",
        cart_title:"Корзина", empty_cart:"Корзина пуста", total:"Итого", remove:"Удалить",
        order_details:"Оформить заказ", your_name:"Ваше имя", your_phone:"Ваш телефон",
        name_placeholder:"Например: Анна", phone_placeholder:"+995 555 35 29 93",
        submit_order:"Отправить заказ", order_success:"✅ Заказ отправлен! Мы свяжемся с вами.",
        form_subtitle:"Заполните данные, и мы свяжемся с вами для подтверждения",
        back_to_shop:"Вернуться в магазин", description_title:"Описание",
        page_title:"Контакты", address_title:"Адрес", phone_title:"Телефон", email_title:"E-mail",
        hours_title:"Часы работы",
        hours_work:"Пн–Вс: 09:00–19:00",
        footer_desc:"Плитка и цементы в Грузии",
        copyright:"© 2026 EURO A PLUS. Все права защищены.", no_results:"😕 Ничего не найдено"
    },
    en: {
        city:"📍 Tbilisi", contacts:"Contacts",
        search_placeholder:"Search tiles...", search_btn:"🔍 Search", cart:"Cart",
        tiles_nav:"Shop", contacts_nav:"Contacts",
        hero_title:"Premium Tiles & Cements", hero_desc:"Wide selection of ceramic tiles and cement for your home. Delivery across Georgia.", hero_btn:"View products ↓",
        popular_title:"🔥 Popular Products",
        category_tiles:"Tiles",
        category_cement:"Cements",
        filter_label:"📋 Sort by:",
        filter_default:"Default",
        filter_price_desc:"💰 Price: High to Low",
        filter_price_asc:"💰 Price: Low to High",
        filter_name_asc:"🔤 A to Z",
        filter_name_desc:"🔤 Z to A",
        product1_name:"Amazon Light Gray", product1_specs:"Size: 60×120 cm • Color: light gray • Super Nano Polished • Made in Iran", product1_desc:"Elegant Amazon Light Gray tile with Super Nano Polished coating. Perfect for living room, bedroom and kitchen.",
        product2_name:"Luna", product2_specs:"Size: 60×120 cm • Color: white • Super Nano Polished • Made in Iran", product2_desc:"Luxurious Luna tile with Super Nano Polished coating. Reflects light and visually expands the space.",
        product3_name:"Amazon Dark Gray", product3_specs:"Size: 60×120 cm • Color: dark gray • Super Nano Polished • Made in Iran", product3_desc:"Stylish Amazon Dark Gray tile with Super Nano Polished coating. Perfect for modern interior.",
        cement1_name:"WASP S-9 Universal", cement1_specs:"Weight: 25 kg • Strength: M500 • Type: universal • Made in Iran", cement1_desc:"High-quality universal WASP S-9 cement. Ideal for all types of construction works.",
        cement2_name:"WASP S-7 Standard", cement2_specs:"Weight: 25 kg • Strength: M400 • Type: standard • Made in Iran", cement2_desc:"Standard WASP S-7 cement. Great choice for medium-load construction works.",
        add_to_cart:"Add to Cart", details:"Details", added:"Added",
        cart_title:"Cart", empty_cart:"Cart is empty", total:"Total", remove:"Remove",
        order_details:"Place Order", your_name:"Your Name", your_phone:"Your Phone",
        name_placeholder:"e.g. Anna", phone_placeholder:"+995 555 35 29 93",
        submit_order:"Submit Order", order_success:"✅ Order sent! We will contact you.",
        form_subtitle:"Fill in the details and we will contact you for confirmation",
        back_to_shop:"Back to shop", description_title:"Description",
        page_title:"Contacts", address_title:"Address", phone_title:"Phone", email_title:"Email",
        hours_title:"Working Hours",
        hours_work:"Mon–Sun: 09:00–19:00",
        footer_desc:"Tiles & Cements in Georgia",
        copyright:"© 2026 EURO A PLUS. All rights reserved.", no_results:"😕 Nothing found"
    },
    tr: {
        city:"📍 Tiflis", contacts:"İletişim",
        search_placeholder:"Fayans ara...", search_btn:"🔍 Ara", cart:"Sepet",
        tiles_nav:"Mağaza", contacts_nav:"İletişim",
        hero_title:"Premium Fayans ve Çimentolar", hero_desc:"Eviniz için geniş seramik fayans ve çimento seçimi. Gürcistan genelinde teslimat.", hero_btn:"Ürünleri gör ↓",
        popular_title:"🔥 Popüler Ürünler",
        category_tiles:"Fayans",
        category_cement:"Çimentolar",
        filter_label:"📋 Sırala:",
        filter_default:"Varsayılan",
        filter_price_desc:"💰 Önce pahalı",
        filter_price_asc:"💰 Önce ucuz",
        filter_name_asc:"🔤 A'dan Z'ye",
        filter_name_desc:"🔤 Z'den A'ya",
        product1_name:"Amazon Light Gray", product1_specs:"Ebat: 60×120 cm • Renk: açık gri • Super Nano Polished • Üretim: İran", product1_desc:"Şık Amazon Light Gray fayans Super Nano Polished kaplamalı. Oturma odası, yatak odası ve mutfak için ideal.",
        product2_name:"Luna", product2_specs:"Ebat: 60×120 cm • Renk: beyaz • Super Nano Polished • Üretim: İran", product2_desc:"Lüks Luna fayans Super Nano Polished kaplamalı. Işığı yansıtır, alanı görsel olarak genişletir.",
        product3_name:"Amazon Dark Gray", product3_specs:"Ebat: 60×120 cm • Renk: koyu gri • Super Nano Polished • Üretim: İran", product3_desc:"Şık Amazon Dark Gray fayans Super Nano Polished kaplamalı. Modern iç mekanlar için ideal.",
        cement1_name:"WASP S-9 Universal", cement1_specs:"Ağırlık: 25 kg • Dayanım: M500 • Tip: üniversal • Üretim: İran", cement1_desc:"Yüksek kaliteli üniversal WASP S-9 çimento. Her türlü inşaat işi için ideal.",
        cement2_name:"WASP S-7 Standard", cement2_specs:"Ağırlık: 25 kg • Dayanım: M400 • Tip: standart • Üretim: İran", cement2_desc:"Standart WASP S-7 çimento. Orta yük için inşaat işleri için harika bir seçim.",
        add_to_cart:"Sepete Ekle", details:"Detaylar", added:"Eklendi",
        cart_title:"Sepet", empty_cart:"Sepet boş", total:"Toplam", remove:"Kaldır",
        order_details:"Sipariş Ver", your_name:"Adınız", your_phone:"Telefonunuz",
        name_placeholder:"Örn: Anna", phone_placeholder:"+995 555 35 29 93",
        submit_order:"Siparişi Gönder", order_success:"✅ Sipariş gönderildi! Sizinle iletişime geçeceğiz.",
        form_subtitle:"Bilgileri doldurun, onay için sizinle iletişime geçelim",
        back_to_shop:"Mağazaya dön", description_title:"Açıklama",
        page_title:"İletişim", address_title:"Adres", phone_title:"Telefon", email_title:"E-posta",
        hours_title:"Çalışma Saatleri",
        hours_work:"Pzt–Paz: 09:00–19:00",
        footer_desc:"Gürcistan'da fayans ve çimentolar",
        copyright:"© 2026 EURO A PLUS. Tüm hakları saklıdır.", no_results:"😕 Hiçbir şey bulunamadı"
    },
    az: {
        city:"📍 Tbilisi", contacts:"Əlaqə",
        search_placeholder:"Kafel axtar...", search_btn:"🔍 Axtar", cart:"Səbət",
        tiles_nav:"Mağaza", contacts_nav:"Əlaqə",
        hero_title:"Premium Kafel və Sementlər", hero_desc:"Eviniz üçün geniş keramik kafel və sement seçimi. Bütün Gürcüstan üzrə çatdırılma.", hero_btn:"Məhsullara bax ↓",
        popular_title:"🔥 Populyar Məhsullar",
        category_tiles:"Kafel",
        category_cement:"Sementlər",
        filter_label:"📋 Sırala:",
        filter_default:"Susmaya görə",
        filter_price_desc:"💰 Əvvəl bahalı",
        filter_price_asc:"💰 Əvvəl ucuz",
        filter_name_asc:"🔤 A-dan Z-yə",
        filter_name_desc:"🔤 Z-dən A-ya",
        product1_name:"Amazon Light Gray", product1_specs:"Ölçü: 60×120 sm • Rəng: açıq boz • Super Nano Polished • İstehsal: İran", product1_desc:"Zərif Amazon Light Gray kafel Super Nano Polished örtüklü. Qonaq otağı, yataq otağı və mətbəx üçün ideal.",
        product2_name:"Luna", product2_specs:"Ölçü: 60×120 sm • Rəng: ağ • Super Nano Polished • İstehsal: İran", product2_desc:"Dəbdəbəli Luna kafel Super Nano Polished örtüklü. İşığı əks etdirir, məkanı vizual olaraq genişləndirir.",
        product3_name:"Amazon Dark Gray", product3_specs:"Ölçü: 60×120 sm • Rəng: tünd boz • Super Nano Polished • İstehsal: İran", product3_desc:"Stil Amazon Dark Gray kafel Super Nano Polished örtüklü. Müasir interyer üçün ideal.",
        cement1_name:"WASP S-9 Universal", cement1_specs:"Çəki: 25 kq • Möhkəmlik: M500 • Tip: universal • İstehsal: İran", cement1_desc:"Yüksək keyfiyyətli universal WASP S-9 sementi. Bütün növ tikinti işləri üçün ideal.",
        cement2_name:"WASP S-7 Standard", cement2_specs:"Çəki: 25 kq • Möhkəmlik: M400 • Tip: standart • İstehsal: İran", cement2_desc:"Standart WASP S-7 sementi. Orta yüklü tikinti işləri üçün əla seçim.",
        add_to_cart:"Səbətə At", details:"Ətraflı", added:"Əlavə edildi",
        cart_title:"Səbət", empty_cart:"Səbət boşdur", total:"Cəmi", remove:"Sil",
        order_details:"Sifariş Ver", your_name:"Adınız", your_phone:"Telefonunuz",
        name_placeholder:"Məs: Anna", phone_placeholder:"+995 555 35 29 93",
        submit_order:"Sifarişi Göndər", order_success:"✅ Sifariş göndərildi! Sizinlə əlaqə saxlayacağıq.",
        form_subtitle:"Məlumatları doldurun, təsdiq üçün sizinlə əlaqə saxlayaq",
        back_to_shop:"Mağazaya qayıt", description_title:"Təsvir",
        page_title:"Əlaqə", address_title:"Ünvan", phone_title:"Telefon", email_title:"E-poçt",
        hours_title:"İş Saatları",
        hours_work:"B.e.-Baz: 09:00–19:00",
        footer_desc:"Gürcüstanda kafel və sementlər",
        copyright:"© 2026 EURO A PLUS. Bütün hüquqlar qorunur.", no_results:"😕 Heç nə tapılmadı"
    },
    fa: {
        city:"📍 تفلیس", contacts:"تماس",
        search_placeholder:"جستجوی کاشی...", search_btn:"🔍 جستجو", cart:"سبد خرید",
        tiles_nav:"فروشگاه", contacts_nav:"تماس",
        hero_title:"کاشی و سیمان درجه یک", hero_desc:"انتخاب گسترده کاشی و سرامیک و سیمان برای خانه شما. ارسال به سراسر گرجستان.", hero_btn:"مشاهده محصولات ↓",
        popular_title:"🔥 محصولات محبوب",
        category_tiles:"کاشی",
        category_cement:"سیمان",
        filter_label:"📋 مرتب‌سازی:",
        filter_default:"پیش‌فرض",
        filter_price_desc:"💰 گران‌ترین اول",
        filter_price_asc:"💰 ارزان‌ترین اول",
        filter_name_asc:"🔤 از الف تا ی",
        filter_name_desc:"🔤 از ی تا الف",
        product1_name:"Amazon Light Gray", product1_specs:"ابعاد: ۶۰×۱۲۰ سانتی‌متر • رنگ: خاکستری روشن • Super Nano Polished • ساخت: ایران", product1_desc:"کاشی شیک Amazon Light Gray با پوشش Super Nano Polished. ایده‌آل برای اتاق نشیمن، اتاق خواب و آشپزخانه.",
        product2_name:"Luna", product2_specs:"ابعاد: ۶۰×۱۲۰ سانتی‌متر • رنگ: سفید • Super Nano Polished • ساخت: ایران", product2_desc:"کاشی لوکس Luna با پوشش Super Nano Polished. نور را منعکس می‌کند و فضا را بزرگتر نشان می‌دهد.",
        product3_name:"Amazon Dark Gray", product3_specs:"ابعاد: ۶۰×۱۲۰ سانتی‌متر • رنگ: خاکستری تیره • Super Nano Polished • ساخت: ایران", product3_desc:"کاشی شیک Amazon Dark Gray با پوشش Super Nano Polished. ایده‌آل برای دکوراسیون مدرن.",
        cement1_name:"WASP S-9 Universal", cement1_specs:"وزن: ۲۵ کیلوگرم • مقاومت: M500 • نوع: جهانی • ساخت: ایران", cement1_desc:"سیمان جهانی با کیفیت بالا WASP S-9. ایده‌آل برای تمام انواع کارهای ساختمانی.",
        cement2_name:"WASP S-7 Standard", cement2_specs:"وزن: ۲۵ کیلوگرم • مقاومت: M400 • نوع: استاندارد • ساخت: ایران", cement2_desc:"سیمان استاندارد WASP S-7. انتخاب عالی برای کارهای ساختمانی با بار متوسط.",
        add_to_cart:"افزودن به سبد", details:"جزئیات", added:"اضافه شد",
        cart_title:"سبد خرید", empty_cart:"سبد خرید خالی است", total:"مجموع", remove:"حذف",
        order_details:"ثبت سفارش", your_name:"نام شما", your_phone:"تلفن شما",
        name_placeholder:"مثلا: آنا", phone_placeholder:"+۹۹۵ ۵۵۵ ۳۵ ۲۹ ۹۳",
        submit_order:"ارسال سفارش", order_success:"✅ سفارش ارسال شد! با شما تماس خواهیم گرفت.",
        form_subtitle:"اطلاعات را پر کنید، برای تایید با شما تماس می‌گیریم",
        back_to_shop:"بازگشت به فروشگاه", description_title:"توضیحات",
        page_title:"تماس", address_title:"آدرس", phone_title:"تلفن", email_title:"ایمیل",
        hours_title:"ساعات کاری",
        hours_work:"دوشنبه–یکشنبه: ۰۹:۰۰–۱۹:۰۰",
        footer_desc:"کاشی و سیمان در گرجستان",
        copyright:"© 2026 EURO A PLUS. کلیه حقوق محفوظ است.", no_results:"😕 چیزی پیدا نشد"
    }
};

function getLang() {
    let lang = localStorage.getItem('euroAplusLang');
    if (!lang) {
        lang = 'ka';
        localStorage.setItem('euroAplusLang', 'ka');
    }
    return lang;
}

function t(key) {
    let lang = getLang();
    if (translations[lang] && translations[lang][key]) return translations[lang][key];
    if (translations['ka'] && translations['ka'][key]) return translations['ka'][key];
    return key;
}

function saveCart() {
    for (let id in cart) {
        if (cart[id] <= 0) {
            delete cart[id];
        }
    }
    localStorage.setItem('euroCart', JSON.stringify(cart));
    updateCartBadge();
}

function updateCartBadge() {
    const count = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
    document.querySelectorAll('#cartBadge').forEach(el => {
        el.textContent = count || '';
    });
}

function addToCart(id) {
    if (!cart[id]) cart[id] = 0;
    cart[id]++;
    saveCart();
    updateCartBadge();
}

function removeFromCart(id) {
    delete cart[id];
    saveCart();
    updateCartBadge();
    renderCartPage();
}

function changeQuantity(id, delta) {
    if (!cart[id]) return;
    cart[id] += delta;
    if (cart[id] <= 0) {
        delete cart[id];
    }
    saveCart();
    updateCartBadge();
    renderCartPage();
}

function getCartTotal() {
    let total = 0;
    for (let id in cart) {
        if (products[id]) {
            total += products[id].price * cart[id];
        }
    }
    return total;
}

function renderCartPage() {
    const container = document.getElementById('cartItems');
    const totalContainer = document.getElementById('cartTotal');
    if (!container) return;
    
    const ids = Object.keys(cart);
    if (ids.length === 0) {
        container.innerHTML = `<div class="cart-empty">🛒 ${t('empty_cart')}<br><a href="index.html">← ${t('back_to_shop')}</a></div>`;
        if (totalContainer) totalContainer.textContent = '';
        return;
    }
    
    let html = '';
    let total = 0;
    ids.forEach(id => {
        const p = products[id];
        if (!p) return;
        const qty = cart[id];
        const subtotal = p.price * qty;
        total += subtotal;
        html += `
            <div class="cart-item">
                <img src="${p.img}" alt="${t(p.nameKey)}">
                <div class="cart-item-info">
                    <div class="cart-item-name">${t(p.nameKey)}</div>
                    <div class="cart-item-price">${p.price} ₾ × ${qty} = ${subtotal} ₾</div>
                </div>
                <div class="cart-item-actions">
                    <button class="qty-btn" onclick="changeQuantity(${id}, -1)">−</button>
                    <span class="qty-num">${qty}</span>
                    <button class="qty-btn" onclick="changeQuantity(${id}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${id})">${t('remove')}</button>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    if (totalContainer) {
        totalContainer.textContent = `${t('total')}: ${total} ₾`;
    }
}

function switchLanguage(lang) {
    localStorage.setItem('euroAplusLang', lang);
    
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.value = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
    
    document.querySelectorAll('[data-lang-key-placeholder]').forEach(el => {
        const key = el.getAttribute('data-lang-key-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    document.documentElement.lang = lang;
    
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    if (window.location.pathname.includes('product.html') && productId) {
        loadProductPage();
    }
    if (window.location.pathname.includes('contacts.html')) {
        loadContactsPage();
    }
    if (window.location.pathname.includes('cart.html')) {
        renderCartPage();
    }
}

function loadProductPage() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    if (!id || !products[id]) return;
    
    const p = products[id];
    document.getElementById('productName').textContent = t(p.nameKey);
    document.getElementById('productSpecs').textContent = t(p.specsKey);
    document.getElementById('productPrice').textContent = p.priceFormatted;
    document.getElementById('productOldPrice').textContent = p.oldPriceFormatted;
    document.getElementById('productDescription').textContent = t(p.descKey);
    document.getElementById('breadcrumbName').textContent = t(p.nameKey);
    document.getElementById('productImg').src = p.img;
    document.title = 'EURO A PLUS — ' + t(p.nameKey);
    
    const cartBtn = document.getElementById('addToCartBtn');
    if (cartBtn) {
        cartBtn.onclick = function() {
            addToCart(id);
            this.innerHTML = '✅ ' + t('added');
            setTimeout(() => {
                this.innerHTML = '🛒 ' + t('add_to_cart');
            }, 1200);
        };
    }
}

function loadContactsPage() {
    document.getElementById('pageTitle').textContent = t('page_title');
    document.getElementById('address_title').textContent = t('address_title');
    document.getElementById('phone_title').textContent = t('phone_title');
    document.getElementById('email_title').textContent = t('email_title');
    document.getElementById('hours_title').textContent = t('hours_title');
    document.getElementById('hours_work').textContent = t('hours_work');
    document.title = 'EURO A PLUS — ' + t('page_title');
}

function attachGlobalEvents() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    if (searchInput) {
        searchInput.oninput = function() { filterProducts(this.value); };
        searchInput.onkeydown = function(e) { if (e.key === 'Enter') filterProducts(this.value); };
    }
    if (searchBtn) {
        searchBtn.onclick = function() { 
            const input = document.getElementById('searchInput');
            if (input) filterProducts(input.value);
        };
    }
    
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.onclick = function(e) {
            e.stopPropagation();
            e.preventDefault();
            const id = parseInt(this.getAttribute('data-id'));
            addToCart(id);
            const originalText = this.innerHTML;
            this.innerHTML = '✅ ' + t('added');
            setTimeout(() => {
                this.innerHTML = originalText;
            }, 1200);
        };
    });
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.onclick = function() {
            switchLanguage(this.getAttribute('data-lang'));
        };
    });
    
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.onclick = function() {
            mobileMenu.classList.toggle('active');
        };
    }
    
    document.querySelectorAll('#mobileMenu a, .nav-links a').forEach(link => {
        link.onclick = function() {
            if (mobileMenu) mobileMenu.classList.remove('active');
        };
    });
}

function filterProducts(q) {
    q = q.toLowerCase().trim();
    let found = 0;
    document.querySelectorAll('.product-card').forEach(card => {
        const searchText = card.getAttribute('data-search') || '';
        if (q === '' || searchText.toLowerCase().includes(q)) {
            card.style.display = '';
            found++;
        } else {
            card.style.display = 'none';
        }
    });
    const nr = document.getElementById('noResults');
    if (nr) {
        nr.style.display = (found === 0 && q !== '') ? 'block' : 'none';
        if (found === 0 && q !== '') nr.textContent = t('no_results');
    }
}

function sortProducts(sortType) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll('.product-card'));
    if (cards.length === 0) return;
    
    let sortedCards = [...cards];
    switch(sortType) {
        case 'price_desc':
            sortedCards.sort((a, b) => parseFloat(b.dataset.price) - parseFloat(a.dataset.price));
            break;
        case 'price_asc':
            sortedCards.sort((a, b) => parseFloat(a.dataset.price) - parseFloat(b.dataset.price));
            break;
        case 'name_asc':
            sortedCards.sort((a, b) => a.dataset.search.localeCompare(b.dataset.search));
            break;
        case 'name_desc':
            sortedCards.sort((a, b) => b.dataset.search.localeCompare(a.dataset.search));
            break;
        default: return;
    }
    
    cards.forEach(c => c.classList.add('sorting'));
    setTimeout(() => {
        grid.innerHTML = '';
        sortedCards.forEach((card, i) => {
            card.classList.remove('sorting');
            card.style.animationDelay = (i * 0.08) + 's';
            card.classList.add('appear');
            grid.appendChild(card);
        });
        setTimeout(() => {
            document.querySelectorAll('.product-card.appear').forEach(c => c.classList.remove('appear'));
        }, 700);
    }, 500);
}

// ============================================================
// ===== КАТЕГОРИИ =====
// ============================================================

let currentCategory = 'tiles';

function switchCategory(category) {
    const grid = document.getElementById('productsGrid');
    const tabs = document.querySelectorAll('.category-tab');
    const noResults = document.getElementById('noResults');
    
    tabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.category === category);
    });
    
    const cards = grid.querySelectorAll('.product-card');
    let visibleCount = 0;
    
    cards.forEach(card => {
        const cardCategory = card.dataset.category;
        const shouldShow = cardCategory === category;
        
        if (shouldShow) {
            card.style.display = '';
            visibleCount++;
            card.style.animation = 'none';
            setTimeout(() => {
                card.style.animation = 'cardFadeIn 0.5s ease forwards';
            }, 10);
        } else {
            card.style.display = 'none';
        }
    });
    
    if (noResults) {
        if (visibleCount === 0) {
            noResults.style.display = 'block';
            noResults.textContent = t('no_results');
        } else {
            noResults.style.display = 'none';
        }
    }
    
    currentCategory = category;
    localStorage.setItem('euroCategory', category);
}

// ============================================================
// ===== DOM CONTENT LOADED =====
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    switchLanguage(getLang());
    updateCartBadge();
    attachGlobalEvents();
    
    if (window.location.pathname.includes('product.html')) loadProductPage();
    if (window.location.pathname.includes('contacts.html')) loadContactsPage();
    if (window.location.pathname.includes('cart.html')) {
        renderCartPage();
        
        document.getElementById('submitOrder')?.addEventListener('click', function() {
            const name = document.getElementById('userName').value.trim();
            const phone = document.getElementById('userPhone').value.trim();
            const msg = document.getElementById('orderMessage');
            if (!name || !phone) {
                msg.textContent = '⚠️ გთხოვთ შეავსოთ სახელი და ტელეფონი!';
                msg.style.display = 'block';
                msg.className = 'error';
                return;
            }
            msg.textContent = t('order_success');
            msg.style.display = 'block';
            msg.className = 'success';
            cart = {};
            saveCart();
            updateCartBadge();
            renderCartPage();
            document.getElementById('userName').value = '';
            document.getElementById('userPhone').value = '';
        });
    }
    
    document.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener('click', e => e.preventDefault());
    });

    const sortSelect = document.getElementById('sortFilter');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            sortProducts(this.value);
            localStorage.setItem('euroSortType', this.value);
        });
        const saved = localStorage.getItem('euroSortType');
        if (saved) { sortSelect.value = saved; sortProducts(saved); }
    }

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const sortType = document.getElementById('sortFilter')?.value || 'default';
            sortProducts(sortType);
            filterProducts(this.value);
        });
    }

    // ===== КАТЕГОРИИ =====
    const categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.dataset.category;
            switchCategory(category);
            
            const searchInput = document.getElementById('searchInput');
            if (searchInput && searchInput.value) {
                const sortType = document.getElementById('sortFilter')?.value || 'default';
                sortProducts(sortType);
                filterProducts(searchInput.value);
            }
        });
    });
    
    const savedCategory = localStorage.getItem('euroCategory') || 'tiles';
    switchCategory(savedCategory);
});