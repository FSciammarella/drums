const samples = ["tom-1", "tom-2", "tom-3", "tom-4","crash","snare","kick-bass"];
const btnList = document.querySelectorAll(".drum"); 
for (let i =0; i<btnList.length; i++){
    // const sample = new Audio("sounds/"+samples[i]+".mp3");
    let btn = btnList[i];
    btn.addEventListener("click",(e)=>{
        const sample = new Audio("sounds/"+samples[i]+".mp3")
        // alert(e.target.classList+" was clicked!")
        sample.play()
    });
}
document.addEventListener("keypress",(e)=>{
    document.querySelector("."+e.key).click();
console.log("keypressed: +", e.key);
})