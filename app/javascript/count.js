// 入力されている文字数をカウント
// 文字を置き換えたい部分の要素を取得
// 取得した要素に対して、${countVal}文字を、innerHTMLを用いて置き換
function count (){
  const articleText  = document.getElementById("article_text");
  articleText.addEventListener("keyup", () => {
    const countVal = articleText.value.length;
    const charNum  = document.getElementById("char_num");
    charNum.innerHTML = `${countVal}文字`;
  });
};

window.addEventListener('turbo:load', count);