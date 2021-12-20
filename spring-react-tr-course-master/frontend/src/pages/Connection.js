import { useTranslation } from 'react-i18next';
import Input from '../components/Input';
import React from 'react';
import ButtonWithProgress from '../components/ButtonWithProgress';
const Connection = () => {
    const { t } = useTranslation();

    const OnClickSend = (event) => {
        var userName = document.forms["form1"][0].value;
        var email = document.forms["form1"][1].value;
        if (userName == null || userName == "") {
            alert("İsim kısmı boş bırakılamaz");
            return false;
        }

        if (email == null || email == "") {
            alert("E-Mail kısmı boş bırakılamaz");
            return false;
        }
        window.alert('FORM GÖNDERİLDİ');
    }
    return (
        <body style={{ backgroundImage: 'url("https://i.pinimg.com/originals/24/f4/b4/24f4b4242f4153a7fcbc786a851ac6b1.png")' }}>
            <center><h2>Bizimle İletişime Geçin</h2><br></br></center>
            <div className="container" style={{ border: "2px", borderRadius: "8px", width: "270px" }} >
                <form name="form1" action="#" method="post" onsubmit="return validateForm()">

                    <div class="form-control" >
                        <input placeholder="Adınız Soyadınız" type="text" required autofocus></input>
                    </div><br></br>
                    <div class="form-control">
                        <input placeholder="E-Posta Adresiniz" type="email" required></input>
                    </div><br></br>
                    <div class="form-control">
                        <input placeholder="Konu" type="text" required></input>
                    </div><br></br>
                    <div class="form-control">
                        <textarea placeholder="Lütfen Mesajınızı Buraya Yazın.." required></textarea>
                    </div><br></br>
                    <center>
                        <div class="form-control" style={{ width: "140px" }}>

                            <button onClick={OnClickSend} name="submit" type="submit" id="submit">GÖNDER</button>
                        </div></center>
                </form>
            </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </body >
    );
};
export default Connection;