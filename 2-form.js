import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const s="feedback-form-state";let e={email:"",message:""};const t=document.querySelector(".feedback-form"),l=t.elements.email,o=t.elements.message,m=()=>{localStorage.setItem(s,JSON.stringify(e))},r=()=>{const a=localStorage.getItem(s);a&&(e=JSON.parse(a),l.value=e.email||"",o.value=e.message||"")};t.addEventListener("input",a=>{e[a.target.name]=a.target.value.trim(),m()});t.addEventListener("submit",a=>{if(a.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(s),e={email:"",message:""},t.reset()});r();
//# sourceMappingURL=2-form.js.map