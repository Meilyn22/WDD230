let modifiedDate = document.querySelector('#date')
let copy = document.querySelector('#copyright')

modifiedDate.innerHTML = (document.lastModified)
copy.textContent = new Date().getFullYear()