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

  //complete
  const completeButton = document.createElement("button");
  completeButton.innerText = "complete";
  completeButton.addEventListener("click", () => {
    //完了に追加する処理
    deletelist(deleteButton.parentNode);
    const addTarget = completeButton.parentNode;
    //テキストの取得
    const text = addTarget.firstElementChild.innerText;
    //div以下を初期化する
    addTarget.textContent = null;

    //li生成
    const li = document.createElement("li");
    li.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "back";

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了に追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //delete
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.addEventListener("click", () => {
    deletelist(deleteButton.parentNode);
  });

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
