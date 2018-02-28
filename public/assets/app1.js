const apiKey = '75b135e0959c44819f3affb777ed8852';
const defaultSource = 'the-washington-post';
const sourceSelector = document.querySelector('#sources');
const newsArticles = document.querySelector('main');
var netowrkStatus = document.getElementById('netowrk-status');


Object.defineProperty(Object.prototype, 'watch', {
    value: function(prop, handler) {
        var setter = function(val) {
            return val = handler.call(this, val);
        };
        Object.defineProperty(this, prop, {
            set: setter
        });
    }
});

var obj = {};

obj.watch('prop', function(value) {
    console.log('test!', value);    
    console.log(netowrkStatus)
    if(value == "offline"){
      console.log("here")
      netowrkStatus.style.backgroundColor = 'rgb(255,221,74)';
      netowrkStatus.innerHTML = "<p align='center' class='toast-message'>Your network connection seems to be offline.  (You can still browse previously visited items though)</p>";

    }else{
      console.log("or here")
      netowrkStatus.style.backgroundColor = 'rgb(11,108,113)';
      netowrkStatus.innerHTML = "<p align='center' class='toast-message'>Hurray you are back online</p>";
      setTimeout(function(){ netowrkStatus.innerHTML = '' }, 3000);

    }
    
    
});


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () =>
        navigator.serviceWorker.register('sw.js')
        .then(registration => console.log('Service Worker registered'))
        .catch(err => 'SW registration failed'));
}

window.addEventListener('load', e => {
    sourceSelector.addEventListener('change', evt => updateNews(evt.target.value));
    updateNewsSources().then(() => {
        sourceSelector.value = defaultSource;
        updateNews();
    });
});

window.addEventListener('load', function() {
    function updateOnlineStatus(event) {
        if (navigator.onLine) {
            // handle online status
            console.log('online');
            obj.prop = 'online';

        } else {
            // handle offline status
            console.log('offline');
            obj.prop = 'offline';
        }
    }
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
});


window.addEventListener('online', () => updateNews(sourceSelector.value));

async function updateNewsSources() {
    const response = await fetch(`https://newsapi.org/v1/sources?apiKey=${apiKey}`);
    const json = await response.json();
    sourceSelector.innerHTML =
        json.sources
        .map(source => `<option value="${source.id}">${source.name}</option>`)
        .join('\n');
}

async function updateNews(source = defaultSource) {
    newsArticles.innerHTML = '';
    const response = await fetch(`https://newsapi.org/v1/articles?source=${source}&sortBy=top&apiKey=${apiKey}`);
    const json = await response.json();
    newsArticles.innerHTML =
        json.articles.map(createArticle).join('\n');
}

function createArticle(article) {
    return `
    <div class="article">
      <a href="${article.url}">
        <h2>${article.title}</h2>
        <img src="${article.urlToImage}" alt="${article.title}">
        <p>${article.description}</p>
      </a>
    </div>
  `;
}