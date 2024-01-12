const myLabel = document.getElementById("myLabel");

update();

function update() {
  let date = new Date();
  myLabel.innerHTML = formatTime(date);

  function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hours >= 12 ? "pm" : "am";

    hours = hours % 12 || 12; 

    return `${hours}:${minutes}:${seconds} ${amOrPm}`;
  }
}
