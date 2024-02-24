const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let n=null;t.addEventListener("click",(()=>{clearInterval(n),n=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(()=>{clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.0a37a266.js.map
