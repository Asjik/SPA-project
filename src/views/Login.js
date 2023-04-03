
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
    <div class="login form">
        <header>Zaloguj się</header>
        <form action="#">
            <input type="text" placeholder="Podaj swój adres e-mail">
            <input type="password" placeholder="Podaj hasło">
            <a href="#">Zapomniałeś hasła?</a>
            <input type="button" class="button" value="Zaloguj się">
        </form>
        <div class="signup">
            <span class="signup">Nie masz konta?
                <label for="check">Zarejestruj się</label>
            </span>
        </div>
    </div>
    `;

    ///registration form
    const divReg = document.createElement('div');
    divReg.setAttribute('class', 'registration form')
    divReg.innerHTML=`
    <header>Zarejestruj się</header>
        <form action="#">
            <input type="text" placeholder="Podaj swój adres e-mail">
            <input type="password" placeholder="Podaj hasło">
            <input type="password" placeholder="Wpisz ponownie hasło">
            <input type="button" class="button" value="Zarejestruj się">
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

return div;
}