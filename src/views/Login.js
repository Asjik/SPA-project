
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
        <header>Login</header>
        <form action="#">
            <input type="text" placeholder="Enter your email">
            <input type="password" placeholder="Enter your password">
            <a href="#">Forgot password?</a>
            <input type="button" class="button" value="Login">
        </form>
        <div class="signup">
            <span class="signup">Don't have an account?
                <label for="check">Signup</label>
            </span>
        </div>
    </div>
    `;

    ///registration form
    const divReg = document.createElement('div');
    divReg.setAttribute('class', 'registration form')
    divReg.innerHTML=`
    <header>Signup</header>
        <form action="#">
            <input type="text" placeholder="Enter your email">
            <input type="password" placeholder="Create a password">
            <input type="password" placeholder="Confirm your password">
            <input type="button" class="button" value="Signup">
        </form>
        <div class="signup">
            <span class="signup">Already have an account?
                <label for="check">Login</label>
            </span>
        </div>
    `;
    
    
    div.append(input);
    div.append(divLog);
    div.append(divReg);

return div;
}