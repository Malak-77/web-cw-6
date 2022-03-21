// دالة لتثبيت الوضع الليلي أو النهاري
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

// دالة للانتقال بين الوضعين
function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
}

// الوضع الافتراضي
(function () {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
    document.getElementById("slider").checked = false;
  } else {
    setTheme("theme-light");
    document.getElementById("slider").checked = true;
  }
})();



