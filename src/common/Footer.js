export function Footer(){
    const div = document.createElement('div');
    div.setAttribute("class", ".site-footer__top");
    const footer = document.createElement('footer');
    footer.setAttribute("class", "footer mt-auto py-4");

    div.innerHTML=`
    <div class="site-footer__container">
        <div class="site-footer__address">
            <address
                class="footer-address"
                itemscope=""
                itemtype="https://schema.org/Hotel">
                <span class="footer-address__line">
                <span class="site-footer__title" itemprop="name">Hotel Bukowy Park</span>
                    <span
                        itemprop="address"
                        itemscope=""
                        itemtype="https://schema.org/PostalAddress">
                        <span itemprop="streetAddress">ul. Parkowa 11</span>,<br />
                        <span itemprop="postalCode">57-320</span>
                        <span itemprop="addressLocality"> Polanica-Zdrój</span>,
                        <span itemprop="addressCountry">Polska</span>
                    </span>
                </span>
                <span class="footer-address__line">
                    <a href="tel:+48748665609">
                        <span itemprop="telephone">+48 74 866 56 09</span>
                    </a>
                    <a href="mailto:recepcja@bukowypark.pl" title="recepcja@bukowypark.pl">
                        <span itemprop="email">recepcja@bukowypark.pl</span>
                    </a>
                </span>
            </address>
        </div>
        <div class="site-footer__prizes">
            <h3 class="site-footer__title">Nagrody hotelu</h3>
            <div class="prizes__hld">
                <i class="fa-solid fa-award"></i>
                <i class="fa-solid fa-medal"></i>
                <i class="fa-solid fa-crown"></i>
            </div>
        </div>
    </div>
 
    <div class="row align-items-center">
        <div class="col-lg-4 text-lg-start">Copyright © IT SPA. All rights reserved.</div>
        <div class="col-lg-4 my-3 my-lg-0">
            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        </div>
        <div class="col-lg-4 text-lg-end">
            <a class="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
            <a class="link-dark text-decoration-none" href="#!">Terms of Use</a>
        </div>
    </div>
    `;
    footer.append(div)
    return footer;
}
