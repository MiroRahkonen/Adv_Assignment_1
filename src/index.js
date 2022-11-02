import "./styles.css";

if (document.readyState !== "loading") {
  generateItems();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    generateItems();
  });
}

async function generateItems() {
  const div = document.getElementById("app");
  let entries = document.createElement("list");

  let imgurl = "https://dog.ceo/api/breed/pug/images/random";
  var res = await fetch(imgurl);
  var imgdata = await res.json();
  var imgsrc = imgdata.message;

  let wikiurl = "https://en.wikipedia.org/api/rest_v1/page/summary/pug";
  let wikires = await fetch(wikiurl);
  let wiki = await wikires.json();
  let summary = wiki.extract;

  let entry1 = document.createElement("div");
  entry1.innerHTML = `<div class="container">
                          <div class="wiki-item" >
                            <h1 class="wiki-header">Pug</h1>
                            <div class="wiki-content">
                            <p class="wiki-text">
                              ${summary}
                            </p>
                            <div class="img-container">
                              <img class="wiki-img" src="${imgsrc}">
                            </div>
                          </div>
                        </div>
                      </div>`;

  imgurl = "https://dog.ceo/api/breed/rottweiler/images/random";
  res = await fetch(imgurl);
  imgdata = await res.json();
  imgsrc = imgdata.message;

  wikiurl = "https://en.wikipedia.org/api/rest_v1/page/summary/rottweiler";
  wikires = await fetch(wikiurl);
  wiki = await wikires.json();
  summary = wiki.extract;

  let entry2 = document.createElement("div");
  entry2.innerHTML = `<div class="container">
                          <div class="wiki-item" >
                            <h1 class="wiki-header">Rottweiler</h1>
                            <div class="wiki-content">
                            <p class="wiki-text">
                            ${summary}
                            </p>
                            <div class="img-container">
                              <img class="wiki-img" src="${imgsrc}">
                            </div>
                          </div>
                        </div>
                      </div>`;

  imgurl = "https://dog.ceo/api/breed/eskimo/images/random";
  res = await fetch(imgurl);
  imgdata = await res.json();
  imgsrc = imgdata.message;

  wikiurl = "https://en.wikipedia.org/api/rest_v1/page/summary/eskimo";
  wikires = await fetch(wikiurl);
  wiki = await wikires.json();
  summary = wiki.extract;

  let entry3 = document.createElement("div");
  entry3.innerHTML = `<div class="container">
                          <div class="wiki-item" >
                            <h1 class="wiki-header">Eskimo</h1>
                            <div class="wiki-content">
                            <p class="wiki-text">
                            ${summary}
                            </p>
                            <div class="img-container">
                              <img class="wiki-img" src="${imgsrc}">
                            </div>
                          </div>
                        </div>
                      </div>`;

  imgurl = "https://dog.ceo/api/breed/havanese/images/random";
  res = await fetch(imgurl);
  imgdata = await res.json();
  imgsrc = imgdata.message;

  wikiurl = "https://en.wikipedia.org/api/rest_v1/page/summary/havanese";
  wikires = await fetch(wikiurl);
  wiki = await wikires.json();
  summary = wiki.extract;

  let entry4 = document.createElement("div");
  entry4.innerHTML = `<div class="container">
                      <div class="wiki-item" >
                        <h1 class="wiki-header">Havanese</h1>
                        <div class="wiki-content">
                        <p class="wiki-text">
                        ${summary}
                        </p>
                        <div class="img-container">
                          <img class="wiki-img" src="${imgsrc}">
                        </div>
                      </div>
                    </div>
                  </div>`;

  imgurl = "https://dog.ceo/api/breed/beagle/images/random";
  res = await fetch(imgurl);
  imgdata = await res.json();
  imgsrc = imgdata.message;

  wikiurl = "https://en.wikipedia.org/api/rest_v1/page/summary/beagle";
  wikires = await fetch(wikiurl);
  wiki = await wikires.json();
  summary = wiki.extract;

  let entry5 = document.createElement("div");
  entry5.innerHTML = `<div class="container">
                  <div class="wiki-item" >
                    <h1 class="wiki-header">Beagle</h1>
                    <div class="wiki-content">
                    <p class="wiki-text">
                    ${summary}
                    </p>
                    <div class="img-container">
                      <img class="wiki-img" src="${imgsrc}">
                    </div>
                  </div>
                </div>
              </div>`;

  div.appendChild(entry1);
  div.appendChild(entry2);
  div.appendChild(entry3);
  div.appendChild(entry4);
  div.appendChild(entry5);
}
