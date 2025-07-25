// フォームの投稿ボタンをクリックしたら、
// 投稿したフォームの情報をAjaxで送信できる形に変更し、
// Ajaxに利用するオブジェクトを生成
// Ajaxに関する情報を初期化し、URIを設定
// レスポンスとして求めるデータ形式を指定
// Ajaxで送信
function post (){
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    const formData = new FormData(document.getElementById("form"));
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/articles", true);
    XHR.responseType = "json";
    XHR.send(formData);
    e.preventDefault();
  });
};

window.addEventListener('turbo:load', post);