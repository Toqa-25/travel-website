// video functions
let videoButtons = [...document.querySelectorAll(".video-control span")],
    video = document.getElementById("video")
videoButtons.map(videoButton => {
    videoButton.onclick = (e) => {
        videoButtons.map(videoButton => {
            videoButton.classList.remove("active")
        })
        let currentButton = e.currentTarget
        currentButton.classList.add("active")
        video.src = currentButton.dataset.src
    }
})

// ReadMore Function
let readMoreBtn = document.querySelector(".show-more-btn"),
 moreText = document.querySelector(".more-text")

 readMoreBtn.onclick = function (){
    console.log("no")
    moreText.classList.toggle("show")
    if(moreText.classList.contains("show")){
        readMoreBtn.innerHTML = "show less"
    }else{
        readMoreBtn.innerHTML = "show more..."
    }
 }