navigator.platform.includes("Linux") ? document.querySelectorAll(".open-web-scraper")[0].classList.add("linux") : navigator.platform.includes("Mac") ? document.querySelectorAll(".open-web-scraper")[0].classList.add("mac") : navigator.platform.includes("Win") ? document.querySelectorAll(".open-web-scraper")[0].classList.add("windows") : document.querySelectorAll(".open-web-scraper")[0].classList.add("other"), 
1 === Math.round(Math.random()) ? document.querySelector(".btn-primary.test-a").classList.remove("hide") : document.querySelector(".btn-primary.test-b").classList.remove("hide");