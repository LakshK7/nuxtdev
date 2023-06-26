import{a as h,e as I,o as p,f as v,l as t,G as D,t as m,u,i as y,m as l,j as P,r as i,k as r,w as d,H,I as L,s as V,c as $,J as j,K as E,v as N,x as B}from"./entry.e054c00c.js";const G=["innerHTML"],J=h({__name:"Modal",props:{selectedCard:Number,cardTitle:String},setup(s){const e=s;let o=I(()=>{if(e.selectedCard==1)return`
    <ul class = "modal-content">
        <li> Collaborated with a team of 5 members to develop a healthcare analytics application using Vue 3, Vite, and the composition API  </li>
        <li> Created an online dashboard for a Haitian clinic to visualize and streamline patient data from 2019 to 2022 using Python Dash </li>
        <li> Executed web scraping projects to collect unstructured data and performed extensive pattern and string matching </li>
    </ul>
    `;if(e.selectedCard==2)return`
    <ul class = "modal-content">
        <li> Executed various administrative tasks including managing department databases, files, and inventory, in addition to client-side responsibilities such as answering emails and resolving inquiries. Coordinated student employment, adjunct faculty filing </li>
    </ul>
    `;if(e.selectedCard==3)return`
    <ul class = "modal-content">
        <li> Structured and maintained two data engineering pipelines, using BS4, Selenium  </li>
        <li> Leveraged nltk library to implement keyword matching with inflected words in text extracted from 578 PDF files leveraging Azure’s Computer Vision API </li>
        <li> Developed a web dashboard operating Python Dash, to visualize the company's HPC resource usage and allocation </li>
    </ul>
    `;if(e.selectedCard==4)return`
    <ul class = "modal-content">
        <li> Course Assistant for a Visualization class in the Finance and Risk Engineering department, based around dashboarding using Python Dash </li>
        <li> Conducted office hours, graded assignments and projects for over 20 students </li>
        <li> Assisted students with setting up dash and understanding various topics such as bootstrap, HTML CSS, and callback functions </li>
    </ul>
    `;if(e.selectedCard==5)return`
    <ul class = "modal-content">
        <li> Worked as a web dev intern and helped the company setup set up an online ERP platform for a client firm </li>
        <li> Worked on some front-end technologies using basic HTML, CSS and vanilla Js </li> 
    </ul>
    `});return(c,n)=>(p(),v("div",null,[t("div",{class:"modal-overlay",onClick:n[2]||(n[2]=_=>c.$emit("close-modal"))},[t("div",{class:"modal",onClick:n[1]||(n[1]=D(()=>{},["stop"]))},[t("h6",null,m(u(e).cardTitle),1),t("div",{class:"modal-content",innerHTML:u(o)},null,8,G),t("button",{onClick:n[0]||(n[0]=_=>c.$emit("close-modal"))},"Back")])])]))}});const z=y(J,[["__scopeId","data-v-9f3c21c6"]]),C=s=>(N("data-v-311eb62e"),s=s(),B(),s),F=C(()=>t("h1",{class:"heading"},"Experience",-1)),W={class:"dates"},R=["src"],K=C(()=>t("p",{class:"bottomTag"},"Click for Details",-1)),O=h({__name:"workexp",setup(s){let e=l(!1),o=l(0);const c=l(["Analysis Group","NYU Tandon","Analysis Group","NYU Tandon","Innoway Technologies"]),n=l(["Data Science Intern","Office Assistant","Data Science Intern","Course Assistant","Web Dev Intern"]),_=l(["Feb 2023 - Apr 2023","Oct 2021 - Dec 2022","Jun 2022 - Aug 2022","Jan 2022 - Mar 2022","May 2020 - Jun 2020"]),k=l(["Analysis-Group-Logo.png","nyutandon.jpg","Analysis-Group-Logo.png","nyutandon.jpg","innoway.jpeg"]);function w(f){e.value=!0,o.value=f,console.log(o.value)}return P({title:"My Portfolio | Work Experience",meta:[{name:"description",content:"My work exp"}]}),(f,g)=>{const b=i("v-card-title"),x=i("v-card"),M=i("v-col"),S=i("v-row"),A=i("v-container"),T=i("v-main");return p(),v("div",null,[r(T,null,{default:d(()=>[F,r(A,{class:"cardcols"},{default:d(()=>[r(S,{class:"cardcols"},{default:d(()=>[(p(),v(H,null,L(5,a=>r(M,{cols:"4",key:a},{default:d(()=>[r(x,{class:"workcard",height:"300",onClick:U=>w(a),elevation:"4"},{default:d(()=>[r(b,{class:"title"},{default:d(()=>[V(m(c.value[a-1])+" - ",1),t("p",null,m(n.value[a-1]),1),t("p",W,m(_.value[a-1]),1)]),_:2},1024),t("img",{src:k.value[a-1],class:"images"},null,8,R),K]),_:2},1032,["onClick"])]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}),u(e)==!0?(p(),$(z,{key:0,onCloseModal:g[0]||(g[0]=a=>j(e)?e.value=!1:e=!1),selectedCard:u(o),cardTitle:c.value[u(o)-1]},null,8,["selectedCard","cardTitle"])):E("",!0)])}}});const q=y(O,[["__scopeId","data-v-311eb62e"]]);export{q as default};
