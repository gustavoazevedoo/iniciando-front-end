const modalOverlay = document.querySelector(".modal-overlay")
const posts = document.querySelectorAll(".post")
const modal = document.querySelector(".modal")


for (let post of posts) {
    post.addEventListener('click', function() {
        const postId = post.getAttribute("id")
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = `https://blog.rocketseat.com.br/${postId}`
    })
}

document.querySelector(".close-modal").addEventListener('click', function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
    modal.classList.remove("maximizado")
})

document.querySelector(".maximize-modal").addEventListener('click', function() {
    if(modal.classList.contains("maximizado")) {
        modal.classList.remove("maximizado")
    } else {
    modal.classList.add("maximizado")
    }
})


