import { Date } from "./Date";

export function Banner() {
    const section = document.createElement('section');
    section.classList.add('banners');
    const div = document.createElement('div');
    div.classList.add('slideshow-container')
    div.innerHTML= `
        <div class="mySlides fade">
            <img id="img-1" src="https://images.unsplash.com/photo-1514163161321-f4f7c2a90296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Image 1"/>
        </div> 
            <div class="mySlides fade">
            <img id="img-2" src="https://images.unsplash.com/photo-1482100199117-a4a38a64e7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="Image 2"/>
        </div> 
        <div class="mySlides fade">
            <img id="img-3" src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Image 3"/>
        </div> 
    `;

    let slideIndex = 0;
    showSlides();

    function showSlides() {
    let i;
    let slides = div.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
    }
    
    section.append(div)
    section.append(Date())
return section;

}