const swetaList = [];
const submitSweta = () => {
    console.log(swetaList)
    const values = document.getElementById("task-assign-input").value;
    swetaList.push(values);
    const displayList = document.getElementById('swetaList');
    for (let i = 0; i < swetaList.length; i++) {
        displayList.append(swetaList);
    }
  //  displayList.appendChild(swetaList.map((s) => s))
}
