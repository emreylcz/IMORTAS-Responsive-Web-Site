/*-----------------------------------*\
/*-----------------------------------*\
/*-----------------------------------*\
#emreylcz - emre.yolcu16@gmail.com
/*-----------------------------------*/
/*-----------------------------------*/
/*-----------------------------------*/

/*-----------------------------------*\
  #LOADİNG
\*-----------------------------------*/

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

// loader.addEventListener("transitionend", () => {
//    document.body.removeChild("#loader");
// })
})

/*-----------------------------------*\
  #NAVBAR
\*-----------------------------------*/

window.addEventListener("scroll", function(){
    var header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 0);
})

/*-----------------------------------*\
  #AOS
\*-----------------------------------*/

AOS.init({
    duration: 800,
    easing: 'slide',
    once: false
});

/*-----------------------------------*\
  #WOW
\*-----------------------------------*/

wow = new WOW(
    {
    boxClass:     'wow',
    animateClass: 'animated', 
    offset:       0,          
    mobile:       false,      
    live:         true        
}
)
wow.init();

/*-----------------------------------*\
  #BUTTON
\*-----------------------------------*/

var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }


/*-----------------------------------*\
  #TEXT - DATE CONVERT
\*-----------------------------------*/

function typeChange(e,type,newType){
    if(type=='text'){
        e.type = newType;
    } else if (type=="date") {
        if(e.value != null)
            e.type = newType;
    }
}

/*-----------------------------------*\
  #TOP ARROW
\*-----------------------------------*/

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#DAA520 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

/*-----------------------------------*\
  #İŞ BAŞVURU FORMU
\*-----------------------------------*/

function SendEmail(){
    let ad = document.getElementById("ad").value;
    let soyad = document.getElementById("soyad").value;
    let cinsiyet = document.getElementById("cinsiyet").value;
    let dogumtarih = document.getElementById("dogumtarih").value;
    let dogumyeri = document.getElementById("dogumyeri").value;
    let uyruk = document.getElementById("uyruk").value;
    let ehliyet = document.getElementById("ehliyet").value;
    let ehliyetvar = document.getElementById("ehliyetvar").value;
    let askerlik = document.getElementById("askerlik").value;
    let tecil = document.getElementById("tecil").value;
    let adres = document.getElementById("adres").value;
    let ceptelefon = document.getElementById("ceptelefon").value;
    let mail = document.getElementById("mail").value;
    let egitim = document.getElementById("egitim").value;
    let liseokul = document.getElementById("liseokul").value;
    let lisebolum = document.getElementById("lisebolum").value;
    let liseyil = document.getElementById("liseyil").value;
    let uniokul = document.getElementById("uniokul").value;
    let unibolum = document.getElementById("unibolum").value;
    let uniyil = document.getElementById("uniyil").value;

    let body = "<img src='https://www.techpilot.de/servlets/ImageConnector?cid=108247&imgType=logo&lngCode=de&rHeight=200&rWidth=220'><label style='font-size:20px; color:black;'><h3 style='color:black;font-weight:600;'>İmortaş İş Başvuru Formu</h3> <br>" 

    + "<b style='color:goldenrod;'>Kişisel Bilgileri</b> <br>" 
    + "Adı: " + ad + "<br>"
    + "Soyadı: " + soyad + "<br>"
    + "Cinsiyeti: " + cinsiyet + "<br>"
    + "Doğum Tarihi: " + dogumtarih + "<br>"
    + "Doğum Yeri: " + dogumyeri + "<br>"
    + "Uyruğu: " + uyruk + "<br>"
    + "Ehliyet Durumu: " + ehliyet + " - (Ehliyeti varsa) --> " + ehliyetvar + "<br>"
    + "Askerlik Durumu: " + askerlik + " - (Tecilli ise nedeni) --> " + tecil + "<br><br>"
    
    + "<b style='color:goldenrod;'>Adres Bilgileri</b> <br>" 
    + "Adresi: " + adres + "<br>"
    + "Cep Telefonu: " + ceptelefon + "<br>"
    + "Mail Adresi: " + mail + "<br><br>"

    + "<b style='color:goldenrod;'>Eğitim Bilgileri</b> <br>"
    + "Eğitim Durumu: " + egitim + "<br>"
    + "Lise Adı: " + liseokul + "<br>"
    + "Lise Bölüm Adı: " + lisebolum + "<br>"
    + "Lise Mezuniyet Yılı: " + liseyil + "<br>"
    + "Üniversite Adı: " + uniokul + "<br>"
    + "Üniversite Bölüm Adı: " + unibolum + "<br>"
    + "Üniversite Mezuniyet Yılı: " + uniyil + "<br></label>"

    var kontrol1 = document.forms["basvurukontrol"]["ad"].value;
    var kontrol2 = document.forms["basvurukontrol"]["soyad"].value;
    var kontrol3 = document.forms["basvurukontrol"]["cinsiyet"].value;
    var kontrol4 = document.forms["basvurukontrol"]["dogumtarih"].value;
    var kontrol5 = document.forms["basvurukontrol"]["dogumyeri"].value;
    var kontrol6 = document.forms["basvurukontrol"]["uyruk"].value;
    var kontrol9 = document.forms["basvurukontrol"]["adres"].value;
    var kontrol10 = document.forms["basvurukontrol"]["ceptelefon"].value;
    var kontrol11 = document.forms["basvurukontrol"]["mail"].value;
    
    //Tüm boş alan kontrolleri
    if (kontrol1 == "" || kontrol2 == "" || kontrol3 == "" || kontrol4 == "" || kontrol5 == "" || kontrol6 == "" || kontrol9 == "" || kontrol10 == "" || kontrol11 == "") {
        swal("Lütfen Boş Alan Bırakmayınız","","info");
        return false;
    }

    //Ehliyet Durumu
    if(ehliyet == "Ehliyet Durumu Seç *"){
        swal("Ehliyet Durumu Boş Bırakılmaz","","error");
        return false;
    }

    if(ehliyet == "Var" && ehliyetvar == ""){
        swal("Ehliyet Sınıfı Girmediniz","","info");
        return false;
    }

    if(ehliyet == "Yok" && ehliyetvar != ""){
        swal("Ehliyet Durumu Yok Seçtiniz, Ehliyet Sınıfı Giremezsiniz.","","error");
        return false;
    }

    // Askerlik Durumu
    if(askerlik == "Askerlik Durumu Seç *"){
        swal("Askerlik Durumu Boş Bırakılmaz","","error");
        return false;
    }

    if(askerlik == "Tecilli" && tecil == ""){
        swal("Tecil Nedeni Girmediniz","","info");
        return false;
    }

    if(askerlik == "Yapmamış" || askerlik == "Yapmış" || askerlik == "Yükümlü Değil"){
        if(tecil != ""){
            swal("Tecilli Değilsiniz, Tecil Nedeni Dolduramazsınız","","info");
            return false;
        }
    }

    //Eğitim Durumu
    if(egitim == "Eğitim Durumu Seç *"){
        swal("Eğitim Durumu Boş Bırakılmaz","","error");
        return false;
    }

    //Lise Boş Kontrol
    if(egitim == "Lise" || egitim == "EML"){
        if(liseokul == "" || lisebolum == "" || liseyil == ""){
            swal("Lise Bilgilerinizi Eksik Doldurdunuz","","info");
            return false;
        } 
    }

    //Lise Seçili İken Üniversite Seçme Kontrol
    if(egitim == "Lise" || egitim == "EML"){
        if(uniokul != "" || unibolum != "" || uniyil != ""){
            swal("Eğitim Durumunuzu Lise Seçtiniz, Üniversite Alanı Dolduramazsınız","","error");
            return false;
        }
    }

    //Ünvieriste Boş Kontrol
    if(egitim == "MYO" || egitim == "Ön Lisans" || egitim == "Yüksek Lisans" || egitim == "Doktora"){
        if(uniokul == "" || unibolum == "" || uniyil == ""){
            swal("Üniversite Bilgilerinizi Eksik Doldurdunuz","","info");
            return false;
        }    
    }
    
    Email.send({
    SecureToken : "2648e1ae-0544-46f8-8920-387410283cf2",
    To : 'info@imortas.com.tr',
    From : "mail@emreyolcu.com.tr",
    Subject : "İMORTAŞ İş Başvuru Formu",
    Body : body
    }).then(
        message => 	swal("İş Başvuru Formunu Başarılı Şekilde Gönderdiniz.","","success")
    );
    document.forms[0].reset(); //reset
}

/*-----------------------------------*\
  #İLETİŞİM FORMU
\*-----------------------------------*/

function SendEmail2(){
    let talep = document.getElementById("talep").value;
    let ad = document.getElementById("ad").value;
    let soyad = document.getElementById("soyad").value;
    let telefon = document.getElementById("telefon").value;
    let mail = document.getElementById("mail").value;
    let mesaj = document.getElementById("mesaj").value;

    let body = "<img src='https://www.techpilot.de/servlets/ImageConnector?cid=108247&imgType=logo&lngCode=de&rHeight=200&rWidth=220'><label style='font-size:20px; color:black;'><h3 style='color:black;font-weight:600;'>İmortaş İletşim Formu</h3> <br>" 

    + "<b style='color:goldenrod;'>İletişim Bilgileri</b> <br>" 
    + "İletişim Sebepi: " + talep + "<br>"
    + "Adı: " + ad + "<br>"
    + "Soyadı: " + soyad + "<br>"
    + "Telefon Numarası: " + telefon + "<br>"
    + "Mail Adresi: " + mail + "<br>"
    + "Mesajı: " + mesaj + "<br>"

    var kontrol1 = document.forms["basvurukontrol2"]["ad"].value;
    var kontrol2 = document.forms["basvurukontrol2"]["soyad"].value;
    var kontrol3 = document.forms["basvurukontrol2"]["telefon"].value;
    var kontrol4 = document.forms["basvurukontrol2"]["mail"].value;
    var kontrol5 = document.forms["basvurukontrol2"]["mesaj"].value;
    
    //Tüm boş alan kontrolleri
    if (kontrol1 == "" || kontrol2 == "" || kontrol3 == "" || kontrol4 == "" || kontrol5 == "") {
        swal("Lütfen Boş Alan Bırakmayınız","","info");
        return false;
    }
    
    Email.send({
    SecureToken : "2648e1ae-0544-46f8-8920-387410283cf2",
    To : 'info@imortas.com.tr',
    From : "mail@emreyolcu.com.tr",
    Subject : "İMORTAŞ İletişim Formu",
    Body : body
    }).then(
        message => 	swal("İletişim Formunuz Başarılı Şekilde Gönderdiniz.","","success")
    );
    document.forms[0].reset(); //reset
}

/*-----------------------------------*\
  #İLETİŞİM FORMU İNGİLİZCE
\*-----------------------------------*/

function SendEmail2en(){
    let talep = document.getElementById("talep").value;
    let ad = document.getElementById("ad").value;
    let soyad = document.getElementById("soyad").value;
    let telefon = document.getElementById("telefon").value;
    let mail = document.getElementById("mail").value;
    let mesaj = document.getElementById("mesaj").value;

    let body = "<img src='https://www.techpilot.de/servlets/ImageConnector?cid=108247&imgType=logo&lngCode=de&rHeight=200&rWidth=220'><label style='font-size:20px; color:black;'><h3 style='color:black;font-weight:600;'>İmortaş İletşim Formu</h3> <br>" 

    + "<b style='color:goldenrod;'>İletişim Bilgileri</b> <br>" 
    + "İletişim Sebepi: " + talep + "<br>"
    + "Adı: " + ad + "<br>"
    + "Soyadı: " + soyad + "<br>"
    + "Telefon Numarası: " + telefon + "<br>"
    + "Mail Adresi: " + mail + "<br>"
    + "Mesajı: " + mesaj + "<br>"

    var kontrol1 = document.forms["basvurukontrol2en"]["ad"].value;
    var kontrol2 = document.forms["basvurukontrol2en"]["soyad"].value;
    var kontrol3 = document.forms["basvurukontrol2en"]["telefon"].value;
    var kontrol4 = document.forms["basvurukontrol2en"]["mail"].value;
    var kontrol5 = document.forms["basvurukontrol2en"]["mesaj"].value;
    
    //Tüm boş alan kontrolleri
    if (kontrol1 == "" || kontrol2 == "" || kontrol3 == "" || kontrol4 == "" || kontrol5 == "") {
        swal("Please do not leave empty fields.","","info");
        return false;
    }
    
    Email.send({
    SecureToken : "2648e1ae-0544-46f8-8920-387410283cf2",
    To : 'info@imortas.com.tr',
    From : "mail@emreyolcu.com.tr",
    Subject : "İMORTAŞ İletişim Formu",
    Body : body
    }).then(
        message => 	swal("You have successfully submitted your contact form.","","success")
    );
    document.forms[0].reset(); //reset
}

/*-----------------------------------*\
/*-----------------------------------*\
/*-----------------------------------*\
#emreylcz - emre.yolcu16@gmail.com
/*-----------------------------------*/
/*-----------------------------------*/
/*-----------------------------------*/






