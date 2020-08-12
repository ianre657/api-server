(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(73)),i={id:"dev_container",title:"Develop Inside Container"},c={unversionedId:"dev_container",id:"dev_container",isDocsHomePage:!1,title:"Develop Inside Container",description:"Run the development server",source:"@site/docs/dev_container.md",permalink:"/plus/docs/dev_container",editUrl:"https://github.com/ianre657/plus/edit/master/docs/dev_container.md",sidebar:"someSidebar",previous:{title:"Develop with VSCode",permalink:"/plus/docs/ide_vscode"},next:{title:"Develop with PyCharm",permalink:"/plus/docs/ide_pycharm"}},b=[{value:"Run the development server",id:"run-the-development-server",children:[]},{value:"Shutdown the development server",id:"shutdown-the-development-server",children:[]},{value:"Attach to running container",id:"attach-to-running-container",children:[]},{value:"Run predefined scripts",id:"run-predefined-scripts",children:[]},{value:"Migrations",id:"migrations",children:[]}],l={rightToc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"run-the-development-server"},"Run the development server"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ docker-compose up\n")),Object(o.b)("p",null,"(or use ",Object(o.b)("inlineCode",{parentName:"p"},"make up")," as shorthand)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"additional options for running ",Object(o.b)("inlineCode",{parentName:"li"},"docker-compose"),":",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"--build"),": rebuild conatiner"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"-d"),": run in the background as daemon.")))),Object(o.b)("p",null,"The serivices will be hosted on ",Object(o.b)("inlineCode",{parentName:"p"},"localhost")," in the background. see the ports defined below:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"right"}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"URL"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"api-server"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"http://localhost:8888"}),"http://localhost:8888"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"api-server openAPI spec"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"http://localhost:8888/docs"}),"http://localhost:8888/docs"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"traefik dashboard"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"http://localhost:8090"}),"http://localhost:8090"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"pgAdmin"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"http://localhost:5050"}),"http://localhost:5050"))))),Object(o.b)("p",null,"Note: This would run our serer in the background, use ",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose up")," to run it in the foreground."),Object(o.b)("h3",{id:"shutdown-the-development-server"},"Shutdown the development server"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ docker-compose down\n")),Object(o.b)("p",null,"(or use ",Object(o.b)("inlineCode",{parentName:"p"},"make down")," as a shorthand)"),Object(o.b)("h3",{id:"attach-to-running-container"},"Attach to running container"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ docker-compose exe api-server bash\n")),Object(o.b)("p",null,"(or use ",Object(o.b)("inlineCode",{parentName:"p"},"make shell")," as a shorthand)"),Object(o.b)("h3",{id:"run-predefined-scripts"},"Run predefined scripts"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"you need to attach to running container to run these scripts."),Object(o.b)("p",{parentName:"div"},"See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#attach-to-running-container"}),"Attach to running container")))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Run tests"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),".test.sh\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Format code"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),".format.sh\n")))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Here we use a dot(",Object(o.b)("inlineCode",{parentName:"p"},"."),") as a prefix for naming our scripts to prevent from name collision and utilize tab-completion feature")),Object(o.b)("h3",{id:"migrations"},"Migrations"),Object(o.b)("p",null,"As during local development your app directory is mounted as a volume inside the container, you can also run the migrations with ",Object(o.b)("inlineCode",{parentName:"p"},"alembic")," commands inside the container and the migration code will be in your app directory (instead of being only inside the container). So you can add it to your git repository."),Object(o.b)("p",null,'Make sure you create a "revision" of your models and that you "upgrade" your database with that revision every time you change them. As this is what will update the tables in your database. Otherwise, your application will have errors.'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Start an interactive session in the backend container:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"$ docker-compose exec backend bash\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"If you created a new model in ",Object(o.b)("inlineCode",{parentName:"p"},"plus/app/models"),", make sure to import it in ",Object(o.b)("inlineCode",{parentName:"p"},"plus/app/models/base.py"),", that Python module (",Object(o.b)("inlineCode",{parentName:"p"},"base.py"),") that imports all the models will be used by Alembic.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"After changing a model (for example, adding a column), inside the container, create a revision, e.g.:"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),'$ alembic revision --autogenerate -m "Add column last_name to User model"\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Commit to the git repository the files generated in the alembic directory.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"After creating the revision, run the migration in the database (this is what will actually change the database):"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"$ alembic upgrade head\n")))}p.isMDXComponent=!0},73:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,m=s["".concat(i,".").concat(u)]||s[u]||d[u]||o;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);