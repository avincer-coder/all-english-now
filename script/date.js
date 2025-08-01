let currentYear = document.getElementById("currentYear");
let htmlLastModified = document.getElementById("lastModified");
let lastModified = document.lastModified;
const today = new Date();

currentYear.innerHTML = `<span> © ${today.getFullYear()} </span>`
htmlLastModified.innerHTML= `<span>Last Modification - ${lastModified}</span>`