var arr = [
  {
    dp: "https://images.unsplash.com/photo-1634715400668-2be61c363042?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1721206624465-7d7691ebe50f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vZGFsfGVufDB8fDB8fHww",
  },

  {
    dp: "https://images.unsplash.com/photo-1721206625205-cc430d8aca9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG1vZGFsfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1721206625310-5fe6854961d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fG1vZGFsfGVufDB8fDB8fHww",
  },

  {
    dp: "https://images.unsplash.com/photo-1721103418127-c928ed247488?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1721206624412-cfa399668d46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU0fHx8ZW58MHx8fHx8",
  },

  {
    dp: "https://images.unsplash.com/photo-1723041885057-f7719a5ab188?q=80&w=1162&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1722934512188-2a8b587ceb18?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

var storiyan = document.querySelector("#storiyan")
var clutter = "";
arr.forEach(function (elem, idx) {
  clutter += `<div class="story">
                <img id="${idx}" src="${elem.dp}" alt=""> 
            </div>`;
});

document.querySelector("#storiyan").innerHTML = clutter;

storiyan.addEventListener("click", function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    }, 3000)
})
