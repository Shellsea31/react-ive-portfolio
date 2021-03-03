(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Random Password","alt":"random-password","image":"https://user-images.githubusercontent.com/70654835/99455253-72de0080-28dc-11eb-8952-39fc62626858.png","github":"https://github.com/Shellsea31/Password_Generator","live":"https://shellsea31.github.io/Password_Generator/"},{"id":2,"name":"Villagers 101","alt":"animal-crossing","image":"https://user-images.githubusercontent.com/70654835/106370494-5b28ec80-630f-11eb-8adf-a9276be1bb49.png","github":"https://github.com/Shellsea31/i-heart-villagers","live":"https://radiant-woodland-55913.herokuapp.com/"},{"id":3,"name":"Piknik","alt":"piknik_project","image":"https://user-images.githubusercontent.com/71571952/99150242-ed422280-2647-11eb-8f38-e357a72de8a7.png","github":"https://github.com/Shellsea31/Piknik","live":"https://shellsea31.github.io/Piknik/"},{"id":4,"name":"Employee Tracker","alt":"Employee-Tracker","image":"https://user-images.githubusercontent.com/70654835/101710189-d83d9100-3a45-11eb-822d-f6dc8bcca61b.png","github":"https://github.com/Shellsea31/Employee_Summary","live":"https://github.com/Shellsea31/Employee_Summary"}]')},,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(3),r=a.n(n),i=(a(10),a(5)),l=(a(11),a(0)),o=function(e){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",name:"name",children:"Shelsy Barrera"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(l.jsxs)("ul",{className:"navbar-nav",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("button",{onClick:function(t){return e.nav(t.target.name)},className:"btn",name:"about",children:"About Me"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("button",{onClick:function(t){return e.nav(t.target.name)},className:"btn",name:"projects",children:"Projects"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("button",{onClick:function(t){return e.nav(t.target.name)},className:"btn",name:"contact",children:"Contact"})})]})})]})})},d=function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{style:{margin:"25px"},className:"row",children:[Object(l.jsx)("img",{style:{height:"300px",width:"auto"},className:"float-left",id:"image",src:"https://avatars.githubusercontent.com/u/70654835?s=460&u=aea06b3c752ee1ecf1b49ee0f91df119208fa516&v=4",alt:"PictureShelsy"}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("p",{children:"Hi! My name is Shelsy Barrera and I'm a 21 year old student from San Jose, CA. On this site you'll find examples of some of my best work since I've started the Berkley Coding Bootcamp. This program has definitely challenged me, and I've learned a lot about self discipline and determination. I've accomplished tasks in time I never thought possible."})}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("p",{children:"Straight out of highschool, I studied Medical Assisting for two years and quickly realized it wasn't my career of choice. I graduated nonetheless and began a part time job. When I found an opportunity to study Web Development, I was very excited because it is a topic that has always intrigued me. I'm thankful for this opportunity and I will strive to absorb as much as I can. Click \"Projects\" up top to see what I'm all about!"})})]})})},h=function(){var e={backgroundColor:"white"},t={color:"black",textDecoration:"none"};return Object(l.jsxs)("div",{className:"col-sm-12",style:{padding:"100px"},children:[Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("h2",{style:e,align:"center",children:"Reach Out"}),Object(l.jsx)("h6",{children:"Email: elainesbarrera@gmail.com"}),Object(l.jsx)("h6",{children:"Phone number: 408-642-4079"})]}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("h2",{style:e,align:"center",children:"My Work"}),Object(l.jsx)("a",{href:"https://github.com/Shellsea31",style:t,target:"blank",children:"Github"}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/shelsy-barrera-4410231b6/",style:t,target:"blank",children:"LinkedIn"}),Object(l.jsx)("a",{href:"https://docs.google.com/document/d/1vV4jDBcuY_0QXU0iHZJo-9g8CfQjo_h_kTtgaRRlS4Q/edit?usp=sharing",style:t,target:"blank",children:"Resume"})]})]})},b=a(4),j=function(e){var t={color:"black"};return Object(l.jsx)("div",{className:"col-sm-6",children:Object(l.jsxs)("div",{className:"card border-dark mb-3",children:[e.children,Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h4",{className:"card-title",children:e.project.name}),Object(l.jsxs)("p",{children:["Visit the repository"," ",Object(l.jsx)("a",{className:"a-repo",href:e.project.github,style:t,target:"blank",children:"here"})]}),Object(l.jsxs)("p",{children:["Visit the deployed app"," ",Object(l.jsx)("a",{className:"a-repo",href:e.project.live,style:t,target:"blank",children:"here"})]})]})]})})},m=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("img",{src:e.image,className:"card-img-top img-fluid",alt:e.alt})})},u=function(e){var t;switch(e.reducer){case"About":t=Object(l.jsx)(d,{});break;case"Projects":t=Object(l.jsx)("div",{className:"row",children:b.map((function(e,t){return Object(l.jsx)(j,{project:e,children:Object(l.jsx)(m,{image:e.image,alt:e.alt})},t)}))});break;case"Contact":t=Object(l.jsx)(h,{});break;default:console.log("no reducer")}return Object(l.jsxs)("main",{className:"cardContainer container",children:[Object(l.jsx)("section",{className:"row",children:Object(l.jsx)("div",{className:"col-sm-12",children:Object(l.jsx)("div",{className:"page-header",children:Object(l.jsx)("h1",{children:e.reducer})})})}),Object(l.jsx)("section",{className:"container",children:t})]})},g=function(){return Object(l.jsx)("footer",{className:"bg-light",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("span",{className:"text-muted",children:["This app was created and designed by"," ",Object(l.jsx)("span",{children:Object(l.jsx)("a",{href:"https://github.com/Shellsea31",style:{color:"black",textDecoration:"none"},target:"blank",children:"@Shellsea31"})})," ","on Github"]})})})};var p=function(){var e=Object(s.useReducer)((function(e,t){switch(t){case"about":return"About";case"projects":return"Projects";case"contact":return"Contact"}}),"About"),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{nav:function(e){c(e)}}),Object(l.jsx)(u,{reducer:a}),Object(l.jsx)(g,{})]})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),n(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),x()}],[[13,1,2]]]);
//# sourceMappingURL=main.702e53fc.chunk.js.map