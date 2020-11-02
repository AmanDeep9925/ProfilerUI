const body = document.getElementsByTagName("body")[0];
const togglerBtn = document.getElementById("toggler");
const profileCards = document.getElementsByClassName("profile-card");
const overviewCards = document.getElementsByClassName("overview-card");


let isToggled = false;
toggler.addEventListener("click", (e) => {
  const themeSwitcher = document.getElementById("switcher");
  if (!isToggled) {
    // console.log("dark");
    themeSwitcher.classList.remove("toggler");
    themeSwitcher.classList.add("dark-toggler");
    themeSwitcher.style.marginLeft = "20px";
    togglerBtn.style.backgroundColor = "hsl(146, 68%, 55%)";
    body.style.backgroundColor = "hsl(230, 17%, 14%)";
    body.style.color = "hsl(0, 0%, 100%)";

    for (let i = 0; i < profileCards.length; ++i) {
      profileCards[i].style.backgroundColor = "hsl(228, 28%, 20%)";
    }

    for (let i = 0; i < overviewCards.length; ++i) {
      overviewCards[i].style.backgroundColor = "hsl(228, 28%, 20%)";
    }

    isToggled = true;
  } else {
    // console.log("light");
    themeSwitcher.classList.add("toggler");
    themeSwitcher.classList.remove("dark-toggler");
    themeSwitcher.style.marginLeft = "0px";
    togglerBtn.style.backgroundColor = "hsl(230, 22%, 74%)";
    body.style.backgroundColor = "hsl(0, 0%, 100%)";
    body.style.color = "hsl(230, 17%, 14%)";

    for (let i = 0; i < profileCards.length; ++i) {
      profileCards[i].style.backgroundColor = "hsl(227, 47%, 96%)";
    }

    for (let i = 0; i < overviewCards.length; ++i) {
        overviewCards[i].style.backgroundColor = "hsl(227, 47%, 96%)";
      }

    isToggled = false;
  }
});
