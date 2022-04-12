console.log("this is my index file");
// feab4a5abb6b4c319bbbf841eeb941ad

let source = 'the-times-of-india';
let apikey = 'feab4a5abb6b4c319bbbf841eeb941ad';
let newsaccordion = document.getElementById('newsaccordion');

//grab the news container
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newshtml="";
        articles.forEach(function(element,index) {
            console.log(element,index);
            let news = `<div class="card">
                        <div class="card-header bg-dark" id="heading${index}"">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}""
                                    aria-expanded="true" aria-controls="collapse${index}">
                                    <b><i>Breaking news ${index+1}: </i></b>${element["title"]}; 
                                </button>
                            </h2>
                        </div>

                        <div id="collapse${index}" class="collapse" aria-labelledby="headingOne"
                            data-parent="#newsaccordion">
                            <div class="card-body bg-secondary" bg-light>
                               ${element["description"]}.<a href="${element['url']}" target="_blank">Read more here</a>
                                </div>
                            </div>
                        </div>`;
            newshtml+=news;

        });
        newsaccordion.innerHTML=newshtml;
    }
    else
        console.log("something went wrong");
}

xhr.send();

