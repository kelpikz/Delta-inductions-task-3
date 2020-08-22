const showAction = () => {
  document.querySelector("#deleteItem > .formDiv").hidden = false;
  document.querySelector("#deleteItem button").onclick = null;
  document.querySelector("#deleteItem button").style.margin = "5px";
  document.querySelector("#deleteItem").style.padding = "5px";
  document.querySelector("#deleteItem").style.marginTop = "15px";
  document.querySelector("#deleteItem").style.width = "fit-content";
  document.querySelector("#deleteItem").style.border = "solid 0.3px #555";
  document.querySelector("#deleteItem button").type = "submit";
};
