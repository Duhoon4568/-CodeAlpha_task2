let images = document.querySelectorAll(".image-container img");
let viewImage = document.querySelector(".view-image");
let fullImage = document.querySelector(".view-image img");
let closeBtn = document.querySelector(".view-image span");
for(let image of images){
    image.addEventListener("click",function(e){
        console.log(e);
        viewImage.style.display = "flex";
        fullImage.src = e.target.src;
    })
}
closeBtn.addEventListener('click',function(){
    viewImage.style.display = "none";
})