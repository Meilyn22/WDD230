let date = document.querySelector('#date')
let copy = document.querySelector('#copy')
copy.textContent = '2022 .:|:. Samson O. Idoko .:|:. Idaho'
let options =  {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour : "2-digit",
    minute : "2-digit",
    second:"2-digit" 
}
date.textContent = 'Last updated: ' + new Date(document.lastModified).toLocaleString('en-US', options).replace(",", " ")
