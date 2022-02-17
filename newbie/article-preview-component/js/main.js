const share_buttons = document.getElementsByClassName("share-button");
const share_contents = document.getElementsByClassName("share-content");
const share_buttons_icon = document.getElementsByClassName("share-button--icon");

for (let i = 0; i < share_buttons.length; i++) {
  share_buttons[i].addEventListener("click", (e) => {
    share_buttons[i].classList.toggle("active");
    share_contents[i].classList.toggle("active");
    share_buttons_icon[i].classList.toggle("active");
  });
}
