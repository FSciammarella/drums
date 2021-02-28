const samples = ["tom-1", "tom-2", "tom-3", "tom-4", "crash", "snare", "kick-bass"];
const buttons = "asdfjkl"
const btnList = document.querySelectorAll(".drum");

function buttonAnimation(btn) {
    btn.classList.toggle("pressed");
    setTimeout(function (btn) {
        btn.classList.toggle("pressed")
    }, 100, btn);
}
for (let i = 0; i < btnList.length; i++) {
    let btn = btnList[i];
    btn.addEventListener("click", function (e) {
        const sample = new Audio("sounds/" + samples[i] + ".mp3");
        buttonAnimation(this);
        sample.play();
    });
}
document.addEventListener("keydown", (e) => {
    if (buttons.includes(e.key)) {
        document.querySelector("." + e.key).click();
    }
})