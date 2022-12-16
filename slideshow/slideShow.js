'use strict'

const images = [
    {'id': '1', 'url': './img/gato01.jpg'},
    {'id': '2', 'url': './img/gato02.jpg'},
    {'id': '3', 'url': './img/gato03.jpg'},
    {'id': '4', 'url': './img/gato04.jpg'},
    {'id': '5', 'url': './img/gato05.jpg'}
]

const containerItems = document.querySelector('#container-items')

const loadImages = (images, container) => {
    images.forEach (image => {
        container.innerHTML += `
        <div class='item'>
        <img src='${image.url}'
        </div>
        `
    })
}

loadImages(images, containerItems)

let items = document.querySelectorAll('.item')

const previus = () => {
    containerItems.appendChild(items[0])
    items = document.querySelectorAll('.item')
}

const next = () => {
    const lastItem = items[items.length - 1]
    containerItems.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.item')
}

document.querySelector('#previous').addEventListener('click', previus )
document.querySelector('#next').addEventListener('click', next )

