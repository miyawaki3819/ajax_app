// ページ読み取り完了後に実行
function post() {
  console.log("非同期投稿を実装");
}

window.addEventListener('turbo:load', post);

// ファイルが読み取られたタイミングで実行
// console.log("非同期投稿を実装");