(()=>{"use strict";const e=()=>{const e=document.createElement("div");e.setAttribute("class","home"),e.setAttribute("id","homepage"),e.classList.add("active"),e.classList.add("panel"),e.innerHTML+="\n        <p>Welcome to our restaurant, We serve you:</p>\n        <ul>\n          <li>Breakfast</li>\n          <li>Lunch</li>\n          <li>Dinner</li>\n        </ul>\n        ",document.getElementById("content").appendChild(e)},t=()=>{const e=document.createElement("div");e.setAttribute("class","menu"),e.classList.add("panel"),e.setAttribute("id","menupage"),e.innerHTML='\n        <div class="breakfast-menu">\n          <h3>Breakfast</h3>\n          <span>Omelette</span>\n          <span>Coffee</span>\n          <span>Tea</span>\n          <span>Bread</span>\n        </div>\n        <div class="lunch-menu">\n          <h3>Lunch</h3>\n          <span>Burger</span>\n          <span>Pizza</span>\n          <span>Steak</span>\n          <span>Chicken panini</span>\n        </div>\n        <div class="dinner-menu">\n          <h3>Dinner</h3>\n          <span>Salad</span>\n          <span>Brown bread</span>\n          <span>Soup</span>\n          <span>White bread</span>\n        </div>\n        ',document.getElementById("content").appendChild(e)},n=()=>{const n=document.getElementById("content"),a=document.createElement("div");a.setAttribute("class","container");const s=document.createElement("nav"),c=document.createElement("h1");c.textContent="Le Chandelier";const d=document.createElement("div");d.setAttribute("class","nav-links");const i=document.createElement("span");i.setAttribute("class","active-link"),i.textContent="Home",i.setAttribute("data-target","#homepage");const l=document.createElement("span");l.textContent="Menu",l.setAttribute("data-target","#menupage");const o=document.createElement("span");o.textContent="Contact Us",o.setAttribute("data-target","#contactpage"),d.appendChild(i),d.appendChild(l),d.appendChild(o),s.appendChild(c),s.appendChild(d),a.appendChild(s),n.appendChild(a),e(),t();const r=document.querySelectorAll(".panel");d.addEventListener("click",(e=>{if("SPAN"==e.target.tagName){const t=document.querySelector(e.target.dataset.target);r.forEach((n=>{if(n==t){n.classList.add("active");const t=document.querySelectorAll(".nav-links span");e.target.classList.add("active-link"),t.forEach((t=>{t.textContent!==e.target.textContent&&t.classList.remove("active-link")}))}else n.classList.remove("active")}))}}))};document.addEventListener("DOMContentLoaded",(()=>{n()}))})();