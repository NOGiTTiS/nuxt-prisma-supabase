import{e as v,r as u,E as y,c as f,a as t,u as l,H as h,t as x,I as w,G as k,J as T,K as g,L as P,o as m}from"./DP3e9UH5.js";import{u as O}from"./ifNg6dYy.js";import{u as V}from"./L4vgTm4O.js";import{u as _}from"./DzwoSD2O.js";import"./IShi1APO.js";const E={class:"bg-base-200 h-[calc(100vh-50px)] flex items-center justify-center"},C={class:"card bg-base-100 shadow-xl max-w-md w-full p-6"},B={class:"form-control"},M=v({__name:"verify",setup(N){const a=u(""),s=u(""),o=u(!1),p=_(),d=y(),b=async()=>{var i;if(!a.value){s.value="Please enter the OTP.",o.value=!1;return}try{const{data:e,error:r}=await p.auth.verifyOtp({phone:localStorage.getItem("phone"),token:a.value,type:"sms"});if(r)throw r;const c=(i=e.session)==null?void 0:i.access_token;if(c){const n=O("auth_token");n.value=c,n.options={expires:7}}s.value="Verification successful!",o.value=!0,await new Promise(n=>setTimeout(n,1e3)),d.push("/backend/dashboard")}catch(e){e instanceof Error?(s.value=e.message,o.value=!1):(s.value="An unknown error occurred",o.value=!1)}};return V({title:"Verify OTP",meta:[{name:"keywords",content:"Verify OTP, Nuxt 3, Backend"},{name:"Description",content:"Verify OTP Nuxt 3,  IT Genius Engineering"}]}),(i,e)=>(m(),f("div",E,[t("div",C,[e[3]||(e[3]=t("h2",{class:"card-title text-2xl font-bold mb-6"},"Verify OTP",-1)),l(s)?(m(),f("p",{key:0,class:h([l(o)?"bg-success":"bg-error","p-3 rounded-lg text-white mb-4"])},x(l(s)),3)):w("",!0),t("form",{onSubmit:k(b,["prevent"])},[t("div",B,[e[1]||(e[1]=t("label",{class:"label"},[t("span",{class:"label-text"},"Enter OTP")],-1)),T(t("input",{"onUpdate:modelValue":e[0]||(e[0]=r=>P(a)?a.value=r:null),type:"text",class:"input input-bordered w-full",placeholder:"Enter OTP"},null,512),[[g,l(a)]])]),e[2]||(e[2]=t("div",{class:"form-control mt-6"},[t("button",{type:"submit",class:"btn btn-primary w-full"},"Verify OTP")],-1))],32)])]))}});export{M as default};
