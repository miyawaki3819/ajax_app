// 文字を入力する要素を取得
// その要素に何らかのキーボード操作があった場合に、イベントが発火
// コンソールに表示
function count (){
  const articleText  = document.getElementById("article_text");
  articleText.addEventListener("keyup", () => {
    console.log(articleText.value);
  });
};

window.addEventListener('turbo:load', count);