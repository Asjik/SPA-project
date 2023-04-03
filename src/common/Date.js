
export function Date(){
    // const div = document.createElement("div");
    // const today = Date();
    // const inputFrom = document.createElement("input");
    // inputFrom.setAttribute("type", "date");
    // inputFrom.setAttribute("id", "date-from");
    // inputFrom.setAttribute("name", "from");
    // inputFrom.setAttribute("value", today);
    // const inputTo = document.createElement("input");
    // inputTo.setAttribute("type", "date");
    // inputTo.setAttribute("id", "date-to");
    // inputTo.setAttribute("name", "to");
    // inputTo.setAttribute("value", today);
    //div.append(dateFrom);
    // div.append(dateTo);
    // div.innerHTML = `
    // <a class="btn btn-primary btn-xl text-uppercase" href="#services">Zarezerwuj pobyt</a>`;

   
    let userDateFrom = document.getElementById("date-from").value;
    let userDateTo = document.getElementById("date-to").value;
    let ToDate = new Date();
    const btn = document.getElementById('reservation');
    //console.log(userDateFrom, userDateTo)
    btn.addEventListener('click', function handleClick() {
        if (new Date(userDateFrom).getTime() <= ToDate.getTime()) {
            alert("Data od musi być większa lub równa dzisiejszej");
            return false;
        }
        if (new Date(userDateTo).getTime() <= ToDate.getTime()) {
            alert("Data do musi być większa lub równa dzisiejszej");
            return false;
        }
        if (new Date(userDateFrom).getTime() >= new Date(userDateTo).getTime()) {
            alert("Data od  musi być mniejsza lub równa dacie do");
            return false;
        }
        return true;
    });
    
    
}

