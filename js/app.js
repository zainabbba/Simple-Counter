let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let count = document.getElementById('count')
counter = 0
plus.addEventListener('click', (event) => {

    counter = counter + 1

    count.innerHTML = counter


})



minus.addEventListener('click', (event) => {

    counter--
    count.innerHTML = counter
})