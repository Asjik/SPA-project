// dodoać slider do opinii

export  function Opinion(){
    const section = document.createElement('section');
    section.setAttribute('class', 'page-section');
    const div = document.createElement('div');
    div.setAttribute('class', 'container');
    div.innerHTML=`
        <div class="text-center">
            <h2 class="section-heading text-uppercase">Opinie naszych gości</h2>
            <h3 class="section-subheading text-muted">Wszystkim naszym gościom dziękujemy za wspólnie spędzony czas i pozytywne opinie na temat pobytu w naszym Hotelu.</h3>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <div class="room-opinion">
                    <img class="mx-auto rounded-circle" src=https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="..." />
                    <h4>Jan Kowalski</h4>
                    <p class="text-muted">Czysto, świeżo i pachnąco. Ładny i przestronny pokój.</p>
                    <span class="fas fa-star checked"></span>
                    <span class="fas fa-star checked"></span>
                    <span class="fas fa-star checked"></span>
                    <span class="fas fa-star checked"></span>
                    <span class="fas fa-star checked"></span>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="room-opinion">
                    <img class="mx-auto rounded-circle" src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="..." />
                    <h4>Diana Kowalska</h4>
                    <p class="text-muted">Dobra cena, lokalizacja i obsługa.</p>
                    <span class="fas fa-star checked"></span>
                    <span class="fas fa-star checked"></span>
                    <span class="fas fa-star checked"></span>
                    <span class="fas fa-star checked"></span>
                    <span class="fas fa-star checked"></span>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="room-opinion">
                    <img class="mx-auto rounded-circle" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="..." />
                    <h4>Larry Parker</h4>
                    <p class="text-muted">Polecam. Z pewnością skorzystam w razie potrzeby z usług tego obiektu. Świetna lokalizacja.</p>
                    <span class="fas fa-star checked"></span>
                    <span class="fas fa-star checked"></span>
                    <span class="fas fa-star checked"></span>
                    <span class="fas fa-star checked"></span>
                    <span class="fas fa-star checked"></span>
                </div>
            </div>
        </div>
        
    `;
    section.append(div)
    return section
}


        
        