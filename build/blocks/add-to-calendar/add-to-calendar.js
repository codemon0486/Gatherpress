(()=>{const e=e=>{e.preventDefault();const t=e.target.nextElementSibling.style.display,n=document.querySelectorAll(".gp-add-to-calendar__list");for(let e=0;e<n.length;e++)n[e].style.display="none";e.target.nextElementSibling.style.display="none"===t?"flex":"none"};document.addEventListener("DOMContentLoaded",(()=>{(()=>{const t=document.querySelectorAll(".gp-add-to-calendar");for(let n=0;n<t.length;n++)t[n].querySelector(".gp-add-to-calendar__init").addEventListener("click",e,!1),document.addEventListener("click",(e=>{let{target:l}=e;l.closest(".gp-add-to-calendar")||(t[n].querySelector(".gp-add-to-calendar__list").style.display="none")}))})()}))})();