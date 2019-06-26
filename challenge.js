document.addEventListener("DOMContentLoaded", () => {


// timer increments 1 per sec
timer = f => {
    return setInterval(f => {
        let getCounter = document.getElementById("counter")
        counterInt = parseInt(getCounter.innerText);
        getCounter.innerText = counterInt + 1;
        },     
    1000)   
}
let interval = timer()


minus = document.getElementById("-");
plus = document.getElementById("+");
heart = document.getElementById("<3");
pause = document.getElementById("pause");

minus.addEventListener("click",f => {
    let getCounter = document.getElementById("counter");
    counterInt = parseInt(getCounter.innerText);
    getCounter.innerText = counterInt - 1;
})

plus.addEventListener("click",f => {
    let getCounter = document.getElementById("counter");
    counterInt = parseInt(getCounter.innerText);
    getCounter.innerText = counterInt + 1;
})

pause.addEventListener("click", f => {
    clearInterval(interval);
    pause.innerHTML = "resume";
})
// we need a way of resuming the counter


 

// add a comment
  
    document.getElementById("comment-form").addEventListener("submit", newComment);  
    // create a new list item on click of add
    function newComment(e) {
      e.preventDefault();
  
      const createLi = document.createElement("li");
      const inputValue = document.getElementById("new-comment-text").value;
      const newItemText = document.createTextNode(inputValue);
      createLi.appendChild(newItemText)
      document.getElementById("list").appendChild(createLi);
      document.getElementById("new-comment-text").value = "";

      // Click on a close button to hide the current comment item
      const close = document.getElementsByClassName("close");
      const span = document.createElement("SPAN");
      const cross = document.createTextNode(" x");
      span.className = "close";
      span.style.color = "red"
      span.appendChild(cross);
      createLi.appendChild(span);
  
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
        }
      }
    } 
  });
  
  
  