//* console.log to confirm our files have been linked

console.log('HELLO WORLD')

//* Use document.querySelector to select the DOM node (HTML element) with a class of 'title'

const textAtTheTop = document.querySelector('.title')

//*Use the .innerText property to change the title of the website

textAtTheTop.innerText = 'Super cool TODO List'

//*Use the .style property to change how the title looks

textAtTheTop.style = 'color: red; text-decoration: underline'

const header = document.querySelector('header')

header.style = 'background-color: #bada55'

//*You can also dig into the .style property to set specific styles.  Change the fontSize of our title
//*These are seen as inline styles so they override anything in your linked .css file

textAtTheTop.style.fontSize = '18px'

//*You can access .classList to receive a list of all the classes assigned to a specific element
//*.classList has built in .add, .remove, and .toggle methods to modify this list
//*Add the class 'dark-mode' to the header text

textAtTheTop.classList.add('dark-mode')

// const example = document.querySelector('.inner-html-example')

// example.innerHTML = `
//   <h2>Show me the money</h2>
//   <ul>
//     <li>MONEY</li>
//     <li>MONEY</li>
//     <li>MONEY</li>
//   </ul>
// `

textAtTheTop.addEventListener('click', logEvent)

textAtTheTop.addEventListener('mouseover', (e) => {
  textAtTheTop.classList.toggle('dark-mode')
})

//*Use document.getElementsByTagName to grab the form with an id of 'color-form' (Remember that this method returns a node list which you'll need to access with an index)

const form = document.getElementsByTagName('form')[0]

//*Write a function to change the background color of the div with a class of 'content-hold' to whatever is typed in to the color input.

function changeColor(e) {
  e.preventDefault()

  const colorInput = document.getElementById('color-input')

  const contentHold = document.querySelector('.content-hold')

  contentHold.style.backgroundColor = colorInput.value

  colorInput.value = ''
}

//*Use .addEventListener to attach the color change function to the submit event of the color-form

form.addEventListener('submit', changeColor)

//*Demonstrate event bubbling by attaching an event listener to the 'todo-hold' div.

header.addEventListener('click', (e) => {
  console.log('CLICKED ON THE HEADER')
})

function logEvent(e) {
  e.stopPropagation()

  console.log(e)
}

//*Complete the functionality of our todo list
//*Include a warning if the user attempts to submit an empty todo

const todoButton = document.getElementById('todo-button')

/*
  TODO: Capture the value of the todo input
  TODO: Create a new <li> element
  TODO: Attach the new element to my todo list
*/

function addTodo(e) {
  //We grab the input box to type our todos
  const todoInput = document.getElementById('todo-input')

  //We create a new, blank <li> element <li></li>
  const newLi = document.createElement('li')

  //We assign the innerText of that element <li>[your todo here]</li>
  newLi.innerText = todoInput.value

  //We tell the new <li> element to remove itself when it's double clicked
  newLi.addEventListener('dblclick', (e) => {
    newLi.remove()
  })

  //We grab the container where we want to attach our new <li>
  const todoList = document.getElementById('todo-list')

  //We attach our new <li> to the DOM as a child of our <ol>
  todoList.appendChild(newLi)

  //We reset the value of the todoInput
  todoInput.value = ''
}

todoButton.addEventListener('click', addTodo)
