!function(){var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),o=document.querySelector("body");t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,clearInterval(n),console.log("stop interval")})),e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,n=setInterval((function(){o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),console.log("start interval")}),1e3)})),t.disabled=!0;var n=null;console.log(o)}();
//# sourceMappingURL=01-color-switcher.4606cdee.js.map
