// GO!
//Task 1 	
var Task1Button = document.querySelector("#Task1Button")
var nav1 = document.querySelector(".nav-menu")

var navState = {
  showing: true,
}

var toggleNav = function() {
 
  if (navState.showing) {
    nav1.style.opacity = 0
    navState.showing = false
    Task1Button.innerText = 'Show Nav'
  }
  else {
    nav1.style.opacity = 1
    navState.showing = true
    Task1Button.innerText = 'Hide Nav'
  }
}

Task1Button.addEventListener('click',toggleNav) 

//Task 2

var inputEl = document.querySelector('input')

var itemsListUl = document.querySelector(".guest-list")

var addName = function(keyEvent) {
  console.log(keyEvent)

  var inputEl = keyEvent.srcElement
  if (keyEvent.keyCode === 13) {

      var userInput = inputEl.value
      var newLi = document.createElement('li')
      newLi.textContent = userInput
      itemsListUl.appendChild(newLi)
      inputEl.value = ''
  }
  
}
inputEl.addEventListener('keydown',addName)

// var guestListEl = document.querySelector('#guest-list') {
//   // var listItems = guestListEl.querySelectorAll('li.inactive')
//   // for (var i = 0; i < listItems.length; i ++) {
//   //   // userListEl.removeChild(listItems[i])  
//   //   if (inactiveShowing) {
//   //       listItems[i].style.display = 'none'
//   //     }
//   //   else {
//   //     listItems[i].style.display = 'list-item'
//   //   }
//   // }
//   // if (inactiveShowing) inactiveShowing = false
//   // else inactiveShowing = true
// })



