import navbar from './nav.js'

document.addEventListener('DOMContentLoaded', function(){
    const content = document.getElementById("content")
    content.append(navbar())
})



