// 入力した文字の数をコンソールに出力
function count (){
  const articleText  = document.getElementById("article_text");
  articleText.addEventListener("keyup", () => {
    console.log(articleText.value.length);
  });
};

window.addEventListener('turbo:load', count);