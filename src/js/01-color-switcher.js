function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }    
    let intervalId;
function changeBackgroundColor() {
     document.body.style.backgroundColor = getRandomHexColor();
}
document.querySelector('[data-start]').addEventListener('click',function() {
   this.disabled = true;
   document.querySelector('[data-stop]').disabled = false;
   intervalId = setInterval(changeBackgroundColor, 1000);
});
document.querySelector('[data-stop]').addEventListener('click',function() {
this.disabled = true;

document.querySelector('[data-start]').disabled = false;
clearInterval(intervalId);
});