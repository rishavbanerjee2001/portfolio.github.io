window.addEventListener("load",()=>{
    setTimeout(open,1000);
    function open(){
     document.querySelector(".popup").style.display = "block";
    }

    
});
document.querySelector("#close").addEventListener("click",()=>{
    document.querySelector(".popup").style.display = "none";
    
document.getElementById("btn").style.display = "block";

});

document.getElementById("btn").addEventListener('click',()=>{
    window.history.back();
})