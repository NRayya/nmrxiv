import{o as s,c as l,e as t,_ as h,k as u,g as a,b as c,a as e,t as d,d as f}from"./app.640fc03a.js";function m(n,r){return s(),l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[t("path",{"fill-rule":"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z","clip-rule":"evenodd"})])}function v(n,r){return s(),l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[t("path",{d:"M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"})])}function p(n,r){return s(),l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[t("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),t("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})])}const g={components:{LockClosedIcon:m,LockOpenIcon:v,MailIcon:p,PencilIcon:u},setup(){},props:["study"],data(){return{}},methods:{}},y={key:0,class:"flex flex-col rounded-lg shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 overflow-hidden"},w={style:{"min-height":"140px"},class:"flex-1 bg-white p-3 flex flex-col justify-between"},b={class:"flex-1"},k=["href"],I={class:"text-lg font-semibold text-gray-900 line-clamp-2"},C={class:"mt-2 text-sm text-gray-500 line-clamp-4"},V={class:"-mt-px border-t flex divide-x divide-gray-200"},B={class:"w-0 flex-1 flex"},L={key:0,class:"relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"},z=e("span",{class:"ml-3"},"Public",-1),M={key:1,class:"relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"},P=e("span",{class:"ml-1"},"Private",-1),j={class:"-ml-px w-0 flex-1 flex"},H={class:"relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"},N=e("span",{class:"ml-3"},"Edit",-1);function O(n,r,o,S,A,E){const i=a("LockOpenIcon"),_=a("LockClosedIcon"),x=a("PencilIcon");return o.study?(s(),c("div",y,[e("div",w,[e("div",b,[e("a",{href:"/studys/"+o.study.slug,class:"block"},[e("p",I,d(o.study.name),1),e("p",C,d(o.study.description),1)],8,k)])]),e("div",V,[e("div",B,[o.study.is_public?(s(),c("a",L,[t(i,{class:"w-3 h-3 text-green-600"}),z])):(s(),c("a",M,[t(_,{class:"w-3 h-3 text-teal-600"}),P]))]),e("div",j,[e("a",H,[t(x,{class:"w-3 h-3 text-green-600"}),N])])])])):f("",!0)}var D=h(g,[["render",O]]);export{D as S};