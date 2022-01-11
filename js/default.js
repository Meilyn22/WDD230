let modifiedDate = document.querySelector('#date')
let copy = document.querySelector('#copyright')

modifiedDate.textContent = new Date(document.lastModified)
copy.textContent = new Date().getFullYear()