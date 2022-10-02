const btns = document.querySelectorAll(".btn");
const storeProducts = document.querySelectorAll(".store-product");

// const search = document.getElementById(search);

for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    e.preventDefault();

    const filter = e.target.dataset.filter;

    storeProducts.forEach((product) => {
      if (product.classList.contains(filter)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
}

let navlist =
  document.querySelector(".nav-list") || document.querySelector(".navli");
let openicon = document.querySelector(".bx-menu");
let closeicon = document.querySelector(".close-icon");

openicon.addEventListener("click", show);

function show() {
  navlist.style.display = "flex";
  navlist.style.top = "0";
}

closeicon.addEventListener("click", shut);

function shut() {
  navlist.style.top = "-100%";
}

const chk = document.getElementById("chk");
function getCookie(name) {
  var temp = name + "=";
  var split = document.cookie.split(";");
  for (var i = 0; i < split.length; i++) {
    var c = split[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(temp) == 0) return c.substring(temp.length, c.length);
  }
  return null;
}

let theme = getCookie("theme");
getComputedStyle(document.documentElement).getPropertyValue("--font");
getComputedStyle(document.documentElement).getPropertyValue("--background");
getComputedStyle(document.documentElement).getPropertyValue("--teambackground");
getComputedStyle(document.documentElement).getPropertyValue("--nav");
getComputedStyle(document.documentElement).getPropertyValue("--footer");
getComputedStyle(document.documentElement).getPropertyValue("--footer-img");
getComputedStyle(document.documentElement).getPropertyValue("--nav-logo");
getComputedStyle(document.documentElement).getPropertyValue("--border");
getComputedStyle(document.documentElement).getPropertyValue("--foot");
getComputedStyle(document.documentElement).getPropertyValue("--main");
getComputedStyle(document.documentElement).getPropertyValue("--popup");
console.log("here", theme);
if (theme === "dark") {
  document.getElementById("chk").checked = true;
  document.documentElement.style.setProperty("--font", "#FFFFFF");
  document.documentElement.style.setProperty("--background", "#000");
  document.documentElement.style.setProperty("--main", "#000000be");
  document.documentElement.style.setProperty("--foot", "#dcdcdc");
  document.documentElement.style.setProperty("--teambackground", "#191919");
  document.documentElement.style.setProperty("--nav", "#000");
  document.documentElement.style.setProperty("--footer", "#6C6C6C");
  document.documentElement.style.setProperty("--popup", "#dcdcdc ");
  document.documentElement.style.setProperty(
    "--border",
    "rgba(69, 69, 69, 0.6)"
  );
  document.documentElement.style.setProperty(
    "--footer-img",
    "url(./assets/vector-3-dark.png)"
  );
  document.documentElement.style.setProperty(
    "--nav-logo",
    "url(./assets/TEDxSIESGST_without_bg_white-1.png)"
  );
  document.documentElement.style.setProperty(
    "--mainbg",
    "url(./assets/-copy.png)"
  );
  console.log("first");
} else {
  console.log("in here");
  document.getElementById("chk").checked = false;
}
chk.addEventListener("change", () => {
  if (chk.checked) {
    document.documentElement.style.setProperty("--font", "#FFFFFF");
    document.documentElement.style.setProperty("--foot", "#dcdcdc");
    document.documentElement.style.setProperty("--background", "#000");
    document.documentElement.style.setProperty("--main", "#000000be");
    document.documentElement.style.setProperty("--teambackground", "#191919");
    document.documentElement.style.setProperty("--nav", "#000");
    document.documentElement.style.setProperty("--footer", "#6C6C6C");
    document.documentElement.style.setProperty("--popup", "#dcdcdc");
    document.documentElement.style.setProperty(
      "--border",
      "rgba(69, 69, 69, 0.6)"
    );
    document.documentElement.style.setProperty(
      "--footer-img",
      "url(./assets/vector-3-dark.png)"
    );
    document.documentElement.style.setProperty(
      "--nav-logo",
      "url(./assets/TEDxSIESGST_without_bg_white-1.png)"
    );
    document.documentElement.style.setProperty(
      "--mainbg",
      "url(./assets/-copy.png)"
    );
    document.cookie = "theme=dark";
  } else {
    document.documentElement.style.setProperty("--font", "#3F3F3F");
    document.documentElement.style.setProperty("--foot", "#000");
    document.documentElement.style.setProperty("--background", "#fff");
    document.documentElement.style.setProperty("--main", "#cbcbcbac");
    document.documentElement.style.setProperty("--teambackground", "#fff");
    document.documentElement.style.setProperty("--nav", "#fff");
    document.documentElement.style.setProperty("--footer", "#0f0f0f");
    document.documentElement.style.setProperty("--popup", "rgb(42, 42, 42)");
    document.documentElement.style.setProperty(
      "--border",
      "rgba(0, 0, 0, 0.4)"
    );
    document.documentElement.style.setProperty(
      "--footer-img",
      "url(./assets/vector-3-light.png)"
    );
    document.documentElement.style.setProperty(
      "--nav-logo",
      "url(./assets/TEDxSIESGST_without_bg_black-1.png)"
    );
    document.documentElement.style.setProperty(
      "--mainbg",
      "url(./assets/output-onlinepngtools.png)"
    );
    document.cookie = "theme=light";
  }
});
function register() {
  alert("The registrations will start soon!!");
}

HTMLImports.whenReady(() => {
  Polymer({
    is: 'my-app',

    listeners: {
      'open-dialog': 'handleOpenDialog'
    },
    
    handleOpenDialog: function(e) {
      const target = e.detail;
      const dialog = this.$$(target);
      if (dialog) {
        dialog.opened = true;
      }
    }
  });
  
  Polymer({
    is: 'my-view1',
    open: function(e) {
      const target = e.target.dataset.target;
      this.fire('open-dialog', target);
    }
  });
});
