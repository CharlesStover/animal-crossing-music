(this["webpackJsonpanimal-crossing-music"]=this["webpackJsonpanimal-crossing-music"]||[]).push([[0],{12:function(n,e,t){},13:function(n,e,t){"use strict";t.r(e);var o=t(0),c=t(5),r=t.n(c),s=["animal-crossing","animal-crossing/cherry-blossom-festival","animal-crossing/snow","animal-crossing-new-horizons","animal-crossing-new-horizons/rain","animal-crossing-new-horizons/snow","animal-crossing-new-leaf","animal-crossing-new-leaf/rain","animal-crossing-new-leaf/snow","animal-crossing-wild-world","animal-crossing-wild-world/rain","animal-crossing-wild-world/snow"];function i(){return n=0,e=s.length-1,Math.floor(Math.random()*(e+1))+n;var n,e}function a(){const n=i();return s[n]}function u(n){let e;do{e=a()}while(e===n);return e}function l(n){return n.toString().padStart(2,"0")}var d=t(1);function m({muted:n,onMount:e}){const{handleEnded:t,ref:c,src:r}=function({onMount:n}){const e=(new Date).getHours(),t=Object(o.useRef)(null),[c,r]=Object(o.useState)(a);return Object(o.useLayoutEffect)((()=>{null!==t.current&&n(t.current)}),[n]),{ref:t,src:`./music/${c}/${l(e)}.ogg`,handleEnded:Object(o.useCallback)((()=>{r(u)}),[])}}({onMount:e});return Object(d.jsx)("audio",{autoPlay:!0,controls:!1,loop:!1,muted:n,onEnded:t,ref:c,src:r})}var f=t(2),j=t.n(f);function b(){const n=new Date,e=n.getHours(),t=n.getMinutes(),c=n.getSeconds(),r=j()(),s=Object(o.useRef)(null),[i,a]=function(){const n=j()();return Object(o.useEffect)((()=>{const e=new ResizeObserver(n);return e.observe(document.body),()=>{e.disconnect()}}),[n]),[Object(o.useMemo)((()=>Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)),[]),Object(o.useMemo)((()=>Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)),[])]}();return Object(o.useEffect)((()=>{const n=window.setInterval(r,1e3);return()=>{window.clearInterval(n)}}),[r]),Object(o.useLayoutEffect)((()=>{const n=s.current;if(null===n)return;const e=()=>{const e=n.getBoundingClientRect();return e.height<.85*a&&e.width<.85*i};let t=0;for(;e();)t++,n.style.setProperty("font-size",`${t}px`);n.style.setProperty("font-size",t-1+"px")}),[a,i]),{displayRef:s,time:`${[e,t,c].map(l).join(":")}`}}var h=t(4),w=t.n(h);function g(){const{displayRef:n,time:e}=b();return Object(d.jsx)("div",{className:w.a.root,children:Object(d.jsx)("span",{ref:n,children:Object(d.jsx)("span",{className:w.a.time,children:e})})})}function O(n){return!n}var p=t(6),x=t.n(p);function M(){const{handleAudioMount:n,handleMainClick:e,muted:t}=function(){const n=Object(o.useRef)(null),[e,t]=Object(o.useState)(!1);return{muted:e,handleAudioMount:Object(o.useCallback)((e=>{n.current=e}),[]),handleMainClick:Object(o.useCallback)((()=>{null!==n.current&&(n.current.paused?n.current.play():t(O))}),[])}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,{muted:t,onMount:n}),Object(d.jsx)("main",{className:x.a.main,onClick:e,children:Object(d.jsx)(g,{})})]})}t(12);r.a.render(Object(d.jsx)(o.StrictMode,{children:Object(d.jsx)(M,{})}),document.getElementById("root"))},4:function(n,e,t){n.exports={root:"clock_root__23mSH",time:"clock_time__3DBlu"}},6:function(n,e,t){n.exports={main:"app_main__zAhuu"}}},[[13,1,2]]]);
//# sourceMappingURL=main.96da0045.chunk.js.map