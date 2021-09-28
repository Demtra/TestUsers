async function getImages() {
    //let url = `https://api.github.com/repos/Demtra/demtra.github.io/contents/pages/${user}/img/bg-img`;
    let url = `https://api.github.com/repos/Demtra/Haya-Alsuofy/contents/img/bg-img`;

    let options = {
        headers: {
            'Accept': 'application/vnd.github.v3+json',
            'Authorization': 'token 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'
        }
    };
    let isExist = true;
    //const myList = document.getElementById('githubimgs');
    const myRequest = new Request(url, options);
    //let maincon = `<div id="xgithubimgs" class="row alime-portfolio"></div>`;
    //myList.insertAdjacentHTML('beforeend', maincon);
    //let maindiv = document.getElementById('xgithubimgs');
    var sd = await fetch(myRequest);

    if (sd.status == 200) {
        let data = await sd.json();
        return data;


    } else { return false; }


}

async function createDiv(data) {
    let gDiv = document.getElementById('gDiv');
    let temp = document.createElement('div');
    let gallery = `
    <div id="gallery" class="alime-portfolio-area section-padding-80 clearfix">
    <div id="githubimgs" class="container-fluid">
        <header class="section-header">
            <h2>Gallery</h2>
            <p>I have very excited photos from my work.
            </p>
        </header>

        <div id="xgithubimgs" class="row alime-portfolio">

        </div>

    </div>
</div>
    `;
    temp.insertAdjacentHTML('afterbegin', gallery);
    let maindiv = temp.querySelector('#xgithubimgs');
    data.forEach(function(item) {
        let imgdiv = `
        <div class="col-12 col-sm-6 col-lg-3 single_gallery_item nature mb-30 wow fadeInUp" data-wow-delay="100ms">
                        <div class="single-portfolio-content">
                            <img src="${item.path}" alt="Haya Alsuofy - Egyptian Model">
                            <div class="hover-content">
                                <a href="${item.path}">+</a>
                            </div>
                        </div>
                    </div>
        `;
        maindiv.insertAdjacentHTML('afterbegin', imgdiv);
        setTimeout(function() {
            console.log("hello")

        }, 1000);
    });

    gDiv.appendChild(temp);



}