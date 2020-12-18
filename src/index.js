import "./styles.css";

const onClickAdd = () => {
  //text-boxの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  // li生成

  const li = document.createElement("li");
  li.innerText = inputText;

  // button生成
  //delete
  const completeButton = document.createElement("button");
  completeButton.innerText = "complete";
  completeButton.addEventListener("click", () => {
    deletelist(deleteButton.parentNode);
  });
  //complete
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.addEventListener("click", () => {});

  //div 要素追加
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了に追加する
  document.getElementById("incomplate-list").appendChild(div);
};

//指定の要素を削除する
const deletelist = (target) => {
  document.getElementById("incomplate-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
