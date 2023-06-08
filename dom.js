// Adding elements to the page
const body = document.body
// body.append("Hello World");...works because the text is a string.
const div = document.createElement("div")
// body.append(div) ..... cannot work since we need to use div is an element
// div.innerText = "Hello Everyone"
// div.textContent = "Hey Guys"

div.innerHTML = "<strong>It should be in bold</strong>"
// Always use .innerHTML to access elements within texts.
// Instead of using .innerHTML you can create an element  with text as follows

const strong = document.createElement('strong');
strong.innerText="Its nap time";
div.append(strong)


body.appendChild(div)

// You cannot use append.child while adding strings or other data types.... 
// append.child is only used when you want to append elements like divs and span and tags.
// Also you cannot append more than one item while using append.child.


