import{a as o,A as s,_ as r,S as m}from"./index-163d7ed7.js";import{p as h}from"./putPreloader-e7c17e25.js";import{P as d}from"./page-ac005db5.js";let i;const g=async()=>{const{dcId:e,token:u,tgAddr:n}=i;let a;try{o.managers.apiManager.setBaseDcId(e);const t=await o.managers.apiManager.invokeApi("auth.importWebTokenAuthorization",{api_id:s.id,api_hash:s.hash,web_auth_token:u},{dcId:e,ignoreErrors:!0});t._==="auth.authorization"&&(o.managers.apiManager.setUser(t.user),a=r(()=>import("./pageIm-c073f166.js"),["./pageIm-c073f166.js","./index-163d7ed7.js","./index-1a99fa35.css","./page-ac005db5.js"],import.meta.url))}catch(t){switch(t.type){case"SESSION_PASSWORD_NEEDED":{t.handled=!0,a=r(()=>import("./pagePassword-81a78a5e.js"),["./pagePassword-81a78a5e.js","./index-163d7ed7.js","./index-1a99fa35.css","./putPreloader-e7c17e25.js","./page-ac005db5.js","./button-710bc09d.js","./htmlToSpan-ba5aa810.js","./wrapEmojiText-07208a76.js","./loginPage-215a8892.js","./toggleDisability-6f5940d7.js"],import.meta.url);break}default:{console.error("authorization import error:",t);const p=m.authState._;p==="authStateSignIn"?a=r(()=>import("./pageSignIn-cfecdac5.js"),["./pageSignIn-cfecdac5.js","./index-163d7ed7.js","./index-1a99fa35.css","./putPreloader-e7c17e25.js","./page-ac005db5.js","./countryInputField-4b93d854.js","./button-710bc09d.js","./wrapEmojiText-07208a76.js","./scrollable-603a2443.js","./pageSignQR-edfbb276.js","./textToSvgURL-c6ebb454.js","./toggleDisability-6f5940d7.js"],import.meta.url):p==="authStateSignQr"&&(a=r(()=>import("./pageSignQR-edfbb276.js").then(_=>_.a),["./pageSignQR-edfbb276.js","./index-163d7ed7.js","./index-1a99fa35.css","./page-ac005db5.js","./button-710bc09d.js","./putPreloader-e7c17e25.js","./textToSvgURL-c6ebb454.js"],import.meta.url));break}}}location.hash=n?.trim()?"#?tgaddr="+encodeURIComponent(n):"",a&&a.then(t=>t.default.mount())},l=new d("page-signImport",!0,()=>{h(l.pageEl.firstElementChild,!0),g()},e=>{i=e,o.managers.appStateManager.pushToState("authState",{_:"authStateSignImport",data:i})});export{l as default};
//# sourceMappingURL=pageSignImport-52e61f42.js.map