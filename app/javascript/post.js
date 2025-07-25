// レスポンスのうち、コントローラー側で指定したjson形式のデータを変数に代入
// 今回投稿したデータを追加する要素を取得
// フォーム投稿の際にテキストを入力した、テキストエリアを取得
// 追加する要素を定義
// 親要素に直前で定義した要素を追加
// フォームの入力欄を空にする
function post (){
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    const formData = new FormData(document.getElementById("form"));
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/articles", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      const item = XHR.response.article;
      const contentsArea = document.getElementById("contents_area");
      const articleText = document.getElementById("article_text");
      const HTML = `
        <div class="article">
          ${ item.text }
        </div>`;
      contentsArea.insertAdjacentHTML("afterbegin", HTML);
      articleText.value = "";
    };
    e.preventDefault();
  });
};

window.addEventListener('turbo:load', post);