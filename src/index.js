import navbar from './nav.js'
import home from './home.js'

document.addEventListener('DOMContentLoaded', function(){
    const content = document.getElementById("content")
    content.append(navbar(), home())
})



