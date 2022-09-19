let bar = document.querySelector(".manu-button"),
    navItem =  document.querySelector("nav");

    bar.onclick = () => {
        navItem.classList.toggle("active")
    }