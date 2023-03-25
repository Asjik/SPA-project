

export function AboutUs(){
    const section = document.createElement('section');
    section.setAttribute('class', 'page-section');
    const div = document.createElement('div');
    div.setAttribute('class', 'container');
    div.innerHTML=`
    <div class="text-center">
        <h2 class="section-heading text-uppercase">Spa dla programistów</h2>
        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
    </div>
    <div class="row text-center">
        <div class="col-md-4">
            <span class="icon-element fa-stack fa-4x">
                <i class="fas fa-house fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">Niezależne apartamenty</h4>
            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div class="col-md-4">
            <span class="icon-element fa-stack fa-4x">
                <i class="fas fa-location-dot fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">Dogodna lokalizacja</h4>
            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div class="col-md-4">
            <span class="icon-element fa-stack fa-4x">
                <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">Wygodna strefa do pracy</h4>
            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
    </div>
    
    `;
    section.append(div)
    return section

}