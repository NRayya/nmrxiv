import{_ as f,L as y,v as b,aV as j,aW as k,r as M,l as i,o,c as C,w as _,m as e,a,ao as L,u as g,t as c,n as r,p as d,q as D,s as V}from"./app.e0b65b09.js";import R from"./Index.6b1a928e.js";import z from"./Details.665d3dd5.js";import"./StudyCard.91d9e6d3.js";import"./MailIcon.4a8590e2.js";import"./Activity.0ffdcad3.js";const B={components:{Link:y,AppLayout:b,StudyIndex:R,ProjectDetails:z,StarIcon:j,AccessDialogue:k},props:["project","studies","team","members","availableRoles","projectPermissions","projectRole"],data(){return{}},setup(){return{projectDetailsElement:M(null)}},methods:{toogleStarred(){axios.post(route("projects.toggle-starred",project)).then(h=>{})},toggleDetails(){this.projectDetailsElement.toggleDetails()}},computed:{canDeleteProject(){return this.projectRole=="owner"},editable(){if(this.projectRole)return this.projectRole=="creator"||this.projectRole=="owner"||this.projectRole=="collaborator"}}},S={class:"bg-white border-b"},H={class:"px-12"},A={class:"flex flex-nowrap justify-between py-6"},E={class:""},P={class:"flex pr-20 items-center text-sm text-gray-700 uppercase font-bold tracking-widest"},I={class:"inline-flex items-center mt-3"},N=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"w-4 h-4"},[e("path",{d:"M4 15a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7a1 1 0 0 1 .7.3L13.42 5H21a1 1 0 0 1 .9 1.45L19.61 11l2.27 4.55A1 1 0 0 1 21 17h-8a1 1 0 0 1-.7-.3L10.58 15H4z",class:"fill-current text-gray-400"}),e("rect",{width:"2",height:"20",x:"2",y:"2",rx:"1",class:"fill-current text-gray-600"})],-1),Z=e("span",{class:"ml-2"},"View details",-1),T=[N,Z],q={key:0,class:"inline-flex items-center"},F=e("svg",{class:"h-3 w-3 ml-7 text-green-400 inline",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",width:"512",height:"512"},[e("g",{id:"globe"},[e("path",{d:"M53.85,47.85A27,27,0,0,1,24,57.8V56l3-3V49l4-4V42l4,4h5l2-2h8Z"}),e("path",{d:"M42,20.59v2.56L38.07,27H31l-5.36,5.26L31,37.51v5.06L27.44,39H22.86L16,32.11V24.2L11.8,20h-4A27,27,0,0,1,32,5a26.55,26.55,0,0,1,7.06.94L36,9H30v4l4,4h4.33Z"}),e("path",{d:"M32,60A28,28,0,1,1,60,32,28,28,0,0,1,32,60ZM32,6A26,26,0,1,0,58,32,26,26,0,0,0,32,6Z"})])],-1),W=e("span",{class:"ml-2"},"Public",-1),G=[F,W],J={key:1,class:"inline-flex ml-7 items-center"},K=e("svg",{class:"h-3 w-3 text-gray-400 inline",version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{"enable-background":"new 0 0 512 512"},"xml:space":"preserve"},[e("g",null,[e("g",null,[e("path",{d:`M437.333,192h-32v-42.667C405.333,66.99,338.344,0,256,0S106.667,66.99,106.667,149.333V192h-32
                                C68.771,192,64,196.771,64,202.667v266.667C64,492.865,83.135,512,106.667,512h298.667C428.865,512,448,492.865,448,469.333
                                V202.667C448,196.771,443.229,192,437.333,192z M287.938,414.823c0.333,3.01-0.635,6.031-2.656,8.292
                                c-2.021,2.26-4.917,3.552-7.948,3.552h-42.667c-3.031,0-5.927-1.292-7.948-3.552c-2.021-2.26-2.99-5.281-2.656-8.292l6.729-60.51
                                c-10.927-7.948-17.458-20.521-17.458-34.313c0-23.531,19.135-42.667,42.667-42.667s42.667,19.135,42.667,42.667
                                c0,13.792-6.531,26.365-17.458,34.313L287.938,414.823z M341.333,192H170.667v-42.667C170.667,102.281,208.948,64,256,64
                                s85.333,38.281,85.333,85.333V192z`})])]),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g")],-1),O=e("span",{class:"ml-2"},"Private",-1),Q=[K,O],U={class:"capitalize inline-flex pr-4 ml-7 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"},X={key:0},Y=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 py-1 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})],-1),$=[Y],ee={key:1},te=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 py-1 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1),se=[te],oe={key:2},le=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 py-1 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"})],-1),re=[le],ne={key:0,class:"flex-nowrap"},ie=g(" Project\xA0Settings "),ae={class:"p-12"},ce={class:"mb-4"},de={class:"relative"},ge=e("div",{class:"absolute inset-0 flex items-center","aria-hidden":"true"},[e("div",{class:"w-full border-t border-gray-300"})],-1),he={class:"relative flex items-center justify-between"},_e=e("span",{class:"pr-3 text-lg bg-gray-100 font-medium text-gray-500"}," Description ",-1),me=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",class:"w-4 h-4 mr-2 text-gray-600"},[e("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"})],-1),ue=e("span",null,"Edit",-1),pe=[me,ue],xe={class:"mt-1 text-md text-gray-900 space-y-5"},we={class:"mb-4"},ve={class:"relative"},fe=e("div",{class:"absolute inset-0 flex items-center","aria-hidden":"true"},[e("div",{class:"w-full border-t border-gray-300"})],-1),ye={class:"relative flex items-center justify-between"},be=e("span",{class:"pr-3 text-lg bg-gray-100 font-medium text-gray-500"}," Tags ",-1),je=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",class:"w-4 h-4 mr-2 text-gray-600"},[e("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"})],-1),ke=e("span",null,"Edit",-1),Me=[je,ke],Ce={class:"mt-1 text-md text-gray-900 space-y-5"},Le={class:"inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800"},De=e("svg",{class:"-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400",fill:"currentColor",viewBox:"0 0 8 8"},[e("circle",{cx:"4",cy:"4",r:"3"})],-1),Ve=e("div",{class:"relative py-5"},[e("div",{class:"absolute inset-0 flex items-center","aria-hidden":"true"},[e("div",{class:"w-full border-t border-gray-300"})])],-1);function Re(h,n,t,ze,Be,s){const m=i("StarIcon"),u=i("access-dialogue"),p=i("project-details"),x=i("Link"),w=i("study-index"),v=i("app-layout");return o(),C(v,{title:t.project.name},{header:_(()=>[e("div",S,[e("div",H,[e("div",A,[e("div",E,[e("div",P,[a(m,{onClick:s.toogleStarred,class:L([t.project.starred?"text-yellow-400":"text-gray-200","h-5 w-5 flex-shrink-0 -ml-1 mr-1"]),"aria-hidden":"true"},null,8,["onClick","class"]),g(" "+c(t.project.name),1)]),e("div",I,[a(u,{"available-roles":t.availableRoles,role:t.projectRole,team:t.team,members:t.members,project:t.project,model:"project"},null,8,["available-roles","role","team","members","project"]),e("a",{onClick:n[0]||(n[0]=(...l)=>s.toggleDetails&&s.toggleDetails(...l)),class:"cursor-pointer hover:text-teal-900 inline-flex items-center ml-7"},T),e("a",null,[t.project.is_public?(o(),r("span",q,G)):(o(),r("span",J,Q))]),a(p,{role:t.projectRole,ref:"projectDetailsElement",project:t.project},null,8,["role","project"]),e("span",U,[t.projectRole=="reviewer"?(o(),r("span",X,$)):d("",!0),t.projectRole=="collaborator"?(o(),r("span",ee,se)):d("",!0),t.projectRole=="owner"||t.projectRole=="creator"?(o(),r("span",oe,re)):d("",!0),g(" "+c(t.projectRole),1)])])]),s.canDeleteProject?(o(),r("div",ne,[a(x,{href:h.route("dashboard.project.settings",t.project.id),class:"text-sm flex-nowrap text-gray-800 font-bold"},{default:_(()=>[ie]),_:1},8,["href"])])):d("",!0)])])])]),default:_(()=>[e("div",ae,[e("div",null,[e("div",ce,[e("div",de,[ge,e("div",he,[_e,e("button",{type:"button",onClick:n[1]||(n[1]=(...l)=>s.toggleDetails&&s.toggleDetails(...l)),class:"inline-flex items-center shadow-sm px-4 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},pe)])]),e("dd",xe,[e("p",null,c(t.project.description),1)])]),e("div",we,[e("div",ve,[fe,e("div",ye,[be,e("button",{type:"button",onClick:n[2]||(n[2]=(...l)=>s.toggleDetails&&s.toggleDetails(...l)),class:"inline-flex items-center shadow-sm px-4 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},Me)])]),e("dd",Ce,[e("p",null,[(o(!0),r(V,null,D(t.project.tags,l=>(o(),r("span",{class:"mr-2",key:l.id},[e("span",Le,[De,g(" "+c(l.name.en),1)])]))),128))])])]),Ve,a(w,{editable:s.editable,project:t.project,studies:t.studies},null,8,["editable","project","studies"])])])]),_:1},8,["title"])}var Ne=f(B,[["render",Re]]);export{Ne as default};