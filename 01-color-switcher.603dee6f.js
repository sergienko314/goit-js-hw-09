const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),o=document.querySelector("body");t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,clearInterval(l),console.log("stop interval")})),e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,l=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,console.log("start interval")}),1e3)})),t.disabled=!0;let l=null;console.log(o);
//# sourceMappingURL=01-color-switcher.603dee6f.js.map
