// Ajaxによる処理が終了したあとに呼び出されるイベント
function post (){
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    const formData = new FormData(document.getElementById("form"));
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/articles", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      console.log(XHR.response.article);
    };
    e.preventDefault();
  });
};

window.addEventListener('turbo:load', post);