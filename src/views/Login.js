
import axios, * as others from 'axios';
let userData = []
export function Login(){
    // login form
    const div = document.createElement('div');
    div.classList.add('container-login');
    const input = document.createElement('input');
    input.setAttribute('id', 'check');
    input.setAttribute('type', 'checkbox');
    div.append(input);
    const divLog = document.createElement('div');
    divLog.setAttribute('class', 'login form');

    divLog.innerHTML=`
        <header>Formularz kontaktowy</header>
        <form id="reg-form">
            <input type="text" id="email-login" placeholder="Podaj swój adres e-mail">
            <input type="password" id="password-login" placeholder="Podaj hasło">
            <div><span id="veri-text-login"></span></div>
            <a href="#">Zapomniałeś hasła?</a>
            <div class="popup">
                <span class="popuptext" id="myPopup">A Simple Popup!</span>
            </div>
            <input type="submit" id="btn-login" class="button" value="Zaloguj się">
        </form>
        <div class="signup">
            <span class="signup">Nie masz konta?
                <label for="check">Zarejestruj się</label>
            </span>
        </div>
  
    `;

    ///registration form
    const divReg = document.createElement('div');
    divReg.setAttribute('class', 'registration form')
    divReg.innerHTML=`
    <header>Zarejestruj się</header>
        <form id="register_form">
            <input id="name-reg" type="text" placeholder="Imię">
            <input id="surname-reg" type="text" placeholder="Nazwisko">
            <input id="email-reg" type="text" placeholder="Adres e-mail">
            <input id="password-reg" type="password" placeholder="Hasło">
            <input id="password-reg-r" type="password" placeholder="Wpisz ponownie hasło">
            <span id="veri-text"></span>
            <input type="button" id="btn-reg" class="button" value="Zarejestruj się">
        </form>
        <div class="signup">
            <span class="signup">Masz już konto?
                <label for="check">Login</label>
            </span>
        </div>
    `;
        div.append(input);
        div.append(divLog);
        div.append(divReg);

        /// rejestracja
        const userEmail =  divReg.querySelector("#email-reg");
        const userPassword = divReg.querySelector("#password-reg");
        const userName =  divReg.querySelector("#name-reg");
        const userSurname = divReg.querySelector("#surname-reg");
        const userRepeatPassword = divReg.querySelector("#password-reg-r");
        const validation = divReg.querySelector("#veri-text");
        const btnReg = divReg.querySelector("#btn-reg");
        console.log(userEmail, userPassword,userRepeatPassword,btnReg);
        let userId = 0;
        
        //logowanie
        const userLoginEmail =  divLog.querySelector("#email-login");
        const userLoginPassword = divLog.querySelector("#password-login");
        const validationLogin = divLog.querySelector("#veri-text-login");
        const btnLogin = divLog.querySelector("#btn-login");
        const popup = divLog.querySelector("#myPopup");
        console.log(userLoginEmail, userLoginPassword, btnLogin);
        

        //pobieranie danych
        axios.get('http://localhost:3000/users')
            .then(resp => {
                data = resp.data;
                userId = data[data.length-1].id
                userData = data.map((emialAddress) => emialAddress.email); // same adresy email
                //logowanie
                btnLogin.addEventListener('click', (e) =>{
                    e.preventDefault();
                    console.log('click login');
                    let loginOk = false;
                    let name = '';
                    let surname = ''
                    validationLogin.style.color ='red';
                    if((userLoginEmail.value.length > 0) && ((userLoginPassword.value.length > 0))){
                        data.forEach(e => {
                            if((userLoginEmail.value === e.email) && (userLoginPassword.value === e.password)){ // sprawdzenia email i hasła
                                loginOk = true;
                                name = e.name;
                                surname = e.surname;
                            }
                        });
                        if (loginOk){
                            validationLogin.style.color ='green';
                            popup.innerHTML=`Zostałeś pomyślnie zalogowany ${name} ${surname}`;
                            popup.classList.toggle("show");
                            setTimeout(function(){ 
                                location.href = "http://localhost:1234";
                            }, 2000);
                            
                        }
                        else{
                            
                            validationLogin.innerHTML = 'Niepoprawny e-mail lub hasło';
                        }
                    }
                    else{
                        validationLogin.innerHTML = 'Uzupełnij wszytskie pola';
                        
                    }
                })
            })
            .catch(error => {
                console.log(error);
            });
        
        /// walidacja : hasło dłuższe między 4 - 10 znaków, musi zawierać jedną cyfrę, jedną wielką i małą literę, muszą być takie same   
        function CheckPassword(inputTxt) { 
            console.log('inputTxt', inputTxt)
            const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,10}$/;
            if(inputTxt.match(passw)) { 
                if (userRepeatPassword.value === userPassword.value){
                    return true;
                }
                else{
                    validation.style.color ='red';
                    validation.innerHTML = "Hasła nie są takie same";
                    console.log(userRepeatPassword.value);
                    console.log(userPassword.value);
                    return false; 
                }
            }
            else{ 
                validation.style.color ='red';
                validation.innerHTML = "Hasło musi zawierać od 4-10 znaków, jedną cyfrę i jedną wielką literę!"
                return false;
            }
        }


        /// rejestracja zapisywanie danych do database.json
        btnReg.addEventListener('click', (e) => {
            e.preventDefault();
            //console.log('click registration')
            //console.log('userData', userData);
            let passwordOk =  true;
        
            validation.style.color ='red';
            if((!userName.value.length > 0) && (!userSurname.value.length > 0)){ 
                validation.innerHTML = "Uzupełnij imię i nazwisko";
                passwordOk = false;
            }
            if(!userEmail.value.length > 0){ 
                validation.innerHTML = "Uzupełnij adres e-mail";
                passwordOk = false;
            }
            if(!CheckPassword(userPassword.value)){
                console.log('userPassword.valueuser',userPassword.value);
                passwordOk = false;
            }
            if(!CheckPassword(userRepeatPassword.value)){
                console.log('userRepeatPassword.value',userRepeatPassword.value);
                passwordOk = false;
            }
            userData.forEach(e => {
                if(userEmail.value === e){
                    console.log('(userEmail.value', userEmail.value);
                    validation.innerHTML = "Podany adres email już istnieje";
                    passwordOk = false;
                }
            });
            console.log(passwordOk);
            
            if(passwordOk){
                axios.post('http://localhost:3000/users', {
                    id: userId + 1,
                    name: userName.value,
                    surname: userSurname.value,
                    email: userEmail.value,
                    password: userPassword.value,
                }).then(resp => {
                    console.log(resp.data);
                }).catch(error => {
                    console.log(error);
                });
                validation.style.color ='green';
                validation.innerHTML = "Poprawnie dodany użytkownik";
                setTimeout(function(){ 
                    location.href = "http://localhost:1234";
                }, 2000);

        }
    })

return div;
}