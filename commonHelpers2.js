import"./assets/styles-9cbd970f.js";import{i as n}from"./assets/vendor-77e16229.js";document.querySelector("input[name=delay]");document.querySelector("button");const r=document.querySelector(".form"),c={title:"✅",titleSize:"24px",messageColor:"white",messageSize:"16px",backgroundColor:"lightgreen",position:"topRight",timeout:3e3},m={title:"❌",titleSize:"24px",messageColor:"white",messageSize:"16px",backgroundColor:"rgba(225, 0, 0, 0.3)",position:"topRight",timeout:3e3};r.addEventListener("submit",u);function u(e){e.preventDefault();const{delay:t,state:o}=e.target.elements,i=t.value,l=o.value;a(i,l).then(s=>{console.log(s)}).catch(s=>{console.log(s)}),r.reset()}function a(e,t){return new Promise((o,i)=>{setTimeout(()=>{t==="fulfilled"?o(n.show({...c,message:`Fulfilled promise in ${e}ms`})):i(n.show({...m,message:`Rejected promise in ${e}ms`}))},e)})}
//# sourceMappingURL=commonHelpers2.js.map
