
import axios, * as others from 'axios';
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
        <header>Zaloguj się</header>
        <form id="reg-form">
            <input type="text" id="email-login" placeholder="Podaj swój adres e-mail">
            <input type="password" id="password-login" placeholder="Podaj hasło">
            <a href="#">Zapomniałeś hasła?</a>
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
            <input id="email-reg" type="text" placeholder="Podaj swój adres e-mail">
            <input id="password-reg" type="password" placeholder="Podaj hasło">
            <input id="password-reg-r" type="password" placeholder="Wpisz ponownie hasło">
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
        const userPasswod = divReg.querySelector("#password-reg");
        const userRepeatPasswod = divReg.querySelector("#password-reg-r");
        const btnReg = divReg.querySelector("#btn-reg");
        console.log(userEmail, userPasswod,userRepeatPasswod,btnReg);
        let userId = 0;
        
        const userLoginEmail =  divLog.querySelector("#email-login");
        const userLoginPasswod = divLog.querySelector("#password-login");
        const btnLogin = divLog.querySelector("#btn-login");
        console.log(userLoginEmail, userLoginPasswod, btnLogin);
        

        //pobieranie danych
        axios.get('http://localhost:3000/users')
            .then(resp => {
                data = resp.data;
                console.log('data', data)
                data.forEach(e => {
                    console.log(` ${e.id}, ${e.email}, ${e.password}`);
                    userId = e.id;
                });
                //logowanie
                btnLogin.addEventListener('click', (e) =>{
                    e.preventDefault();
                    console.log('click login');
                    let loginOk = false;
                    if((userLoginEmail.value.length > 0) && ((userLoginPasswod.value.length > 0))){
                        data.forEach(e => {
                            if((userLoginEmail.value === e.email) && (userLoginPasswod.value === e.password)){
                                loginOk = true;
                            }
                        });
                        if (loginOk){
                            alert('Zostałeś pomyślnie zalogowany');
                            /// przejdź do strony głownej
                        }
                        else{
                            alert('Niepoprawny e-mail lub hasło');
                        }
                    }
                    else{
                        alert('Uzupełnij wszytskie pola')
                    }
                    
                    
                })
            })
            .catch(error => {
                console.log(error);
            });
        
        //console.log('userData', usersData);
        
        // btnLogin.addEventListener('click', (e) =>{
        //     e.preventDefault();
        //     console.log('click login');
        //     if((userLoginEmail.value.length > 0) && ((userLoginPasswod.value.length > 0))){
        //         data.forEach(e => {
        //             if((userLoginEmail.value === e.email) && (userLoginPasswod.value === e.password)){
        //                 alert('Zostałeś pomyślnie zalogowany');
        //                 /// przejdź do strony głownej
        //             }
        //         });
        //     }
        //     else{
        //         alert('Uzupełnij wszytskie pola')
        //     }
            
            
        // })
        
    
        /// rejestracja zapisywanie danych do database.json
        btnReg.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('click registration')
        /// sprawdzenie, czy juz taki adres email jest w pliku
        data.forEach(e => {
            if(userLoginEmail.value === e.email){
                alert('Podany adres email już istnieje')
            }
        });
        if((userEmail.value.length > 0) 
        && (userPasswod.value.length > 0) 
        && (userRepeatPasswod.value.length > 0) 
        && (userRepeatPasswod.value === userPasswod.value)
        &&(usersData.includes("Mango"))){
            axios.post('http://localhost:3000/users', {
                id: userId + 1,
                email: userEmail.value,
                password: userPasswod.value,
            }).then(resp => {
            console.log(resp.data);
            }).catch(error => {
            console.log(error);
            });

        }
        else{
            alert('Uzupełnij wszytskie pola')
        }
        
        })

    

return div;
}