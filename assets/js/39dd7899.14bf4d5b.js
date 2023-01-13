"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[8583],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,v=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(v,i(i({ref:t},s),{},{components:r})):n.createElement(v,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),o=r(6010);const a="tabItem_Ymn6";function i(e){var t=e.children,r=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(7462),o=r(7294),a=r(6010),i=r(2389),l=r(7392),u=r(7094),c=r(2466);const s="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,r,i=e.lazy,d=e.block,m=e.defaultValue,v=e.values,f=e.groupId,y=e.className,b=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=v?v:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,l.l)(g,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(r=b.find((function(e){return e.props.default})))?void 0:r.props.value)?t:b[0].props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,u.U)(),j=x.tabGroupChoices,O=x.setTabGroupChoices,N=(0,o.useState)(k),T=N[0],w=N[1],I=[],E=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var C=j[f];null!=C&&C!==T&&g.some((function(e){return e.value===C}))&&w(C)}var S=function(e){var t=e.currentTarget,r=I.indexOf(t),n=g[r].value;n!==T&&(E(t),w(n),null!=f&&O(f,String(n)))},q=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,o=I.indexOf(e.currentTarget)+1;r=null!=(n=I[o])?n:I[0];break;case"ArrowLeft":var a,i=I.indexOf(e.currentTarget)-1;r=null!=(a=I[i])?a:I[I.length-1]}null==(t=r)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",s)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":d},y)},g.map((function(e){var t=e.value,r=e.label,i=e.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return I.push(e)},onKeyDown:q,onFocus:S,onClick:S},i,{className:(0,a.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=r?r:t)}))),i?(0,o.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,i.Z)();return o.createElement(d,(0,n.Z)({key:String(t)},e))}},262:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=(r(5488),r(5162),["components"]),l={title:"v0.10.x to v0.11.x"},u=void 0,c={unversionedId:"migration-guides/v0.10.x-to-v0.11.x",id:"migration-guides/v0.10.x-to-v0.11.x",title:"v0.10.x to v0.11.x",description:"@InjectQueryService",source:"@site/docs/migration-guides/v0.10.x-to-v0.11.x.mdx",sourceDirName:"migration-guides",slug:"/migration-guides/v0.10.x-to-v0.11.x",permalink:"/nestjs-query/docs/migration-guides/v0.10.x-to-v0.11.x",draft:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/migration-guides/v0.10.x-to-v0.11.x.mdx",tags:[],version:"current",frontMatter:{title:"v0.10.x to v0.11.x"},sidebar:"docs",previous:{title:"v0.12.x to v0.13.x",permalink:"/nestjs-query/docs/migration-guides/v0.12.x-to-v0.13.x"},next:{title:"v0.5.x to v0.6.x",permalink:"/nestjs-query/docs/migration-guides/v0.5.x-to-v0.6.x"}},s={},p=[{value:"<code>@InjectQueryService</code>",id:"injectqueryservice",level:3},{value:"New Features",id:"new-features",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"injectqueryservice"},(0,a.kt)("inlineCode",{parentName:"h3"},"@InjectQueryService")),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.11.x")," an new decorator was added ",(0,a.kt)("inlineCode",{parentName:"p"},"@InjectQueryService"),", this decorator replaces the ORM specific decorators:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@InjectTypeOrmQueryService")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@InjectSequelizeQueryService"))),(0,a.kt)("p",null,"To migrate replace all ",(0,a.kt)("inlineCode",{parentName:"p"},"@InjectTypeOrmQueryService")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@InjectSequelizeQueryService")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"@InjectQueryService"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You still need to import the ",(0,a.kt)("inlineCode",{parentName:"p"},"NestjsQueryTypeOrmModule")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"NestjsQuerySequelizeModule")," to use ",(0,a.kt)("inlineCode",{parentName:"p"},"@InjectQueryService"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { QueryService, InjectQueryService } from '@ptc-org/nestjs-query-core';\nimport { CRUDResolver } from '@ptc-org/nestjs-query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO) {\n  constructor(@InjectQueryService(TodoItemEntity) readonly service: QueryService<TodoItemEntity>) {\n    super(service);\n  }\n}\n")),(0,a.kt)("h2",{id:"new-features"},"New Features"),(0,a.kt)("p",null,"To see other non-breaking features checkout to ",(0,a.kt)("a",{parentName:"p",href:"/blog/2020/05/07/v0.11.0"},"v0.11.0 blog post")))}m.isMDXComponent=!0}}]);