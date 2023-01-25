"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[2311],{2342:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294),o=r(6010);const a="tabItem_Ymn6";function s(e){var t=e.children,r=e.hidden,s=e.className;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,s),hidden:r},t)}},7303:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(7462),o=r(7294),a=r(6010),s=r(5730),l=r(636),i=r(6602),u=r(3735);const m="tabList__CuJ",c="tabItem_LNqP";function p(e){var t,r,s=e.lazy,p=e.block,d=e.defaultValue,v=e.values,y=e.groupId,f=e.className,b=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=v?v:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,l.l)(g,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var T=null===d?d:null!=(t=null!=d?d:null==(r=b.find((function(e){return e.props.default})))?void 0:r.props.value)?t:b[0].props.value;if(null!==T&&!g.some((function(e){return e.value===T})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+T+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.U)(),j=k.tabGroupChoices,O=k.setTabGroupChoices,I=(0,o.useState)(T),N=I[0],C=I[1],D=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var w=j[y];null!=w&&w!==N&&g.some((function(e){return e.value===w}))&&C(w)}var Q=function(e){var t=e.currentTarget,r=D.indexOf(t),n=g[r].value;n!==N&&(E(t),C(n),null!=y&&O(y,String(n)))},S=function(e){var t,r=null;switch(e.key){case"Enter":Q(e);break;case"ArrowRight":var n,o=D.indexOf(e.currentTarget)+1;r=null!=(n=D[o])?n:D[0];break;case"ArrowLeft":var a,s=D.indexOf(e.currentTarget)-1;r=null!=(a=D[s])?a:D[D.length-1]}null==(t=r)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",m)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},f)},g.map((function(e){var t=e.value,r=e.label,s=e.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return D.push(e)},onKeyDown:S,onClick:Q},s,{className:(0,a.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":N===t})}),null!=r?r:t)}))),s?(0,o.cloneElement)(b.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function d(e){var t=(0,s.Z)();return o.createElement(p,(0,n.Z)({key:String(t)},e))}},2901:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=(r(7303),r(2342),["components"]),l={title:"v0.11.2",author:"Doug Martin",author_title:"Creator",author_url:"https://github.com/tripss",author_image_url:"https://avatars1.githubusercontent.com/u/361261?v=4",tags:["releases","patch"]},i=void 0,u={permalink:"/nestjs-query/blog/2020/05/13/v0.11.2",editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/blog/blog/2020-05-13-v0.11.2.mdx",source:"@site/blog/2020-05-13-v0.11.2.mdx",title:"v0.11.2",description:"@InjectAssemblerQueryService",date:"2020-05-13T00:00:00.000Z",formattedDate:"May 13, 2020",tags:[{label:"releases",permalink:"/nestjs-query/blog/tags/releases"},{label:"patch",permalink:"/nestjs-query/blog/tags/patch"}],readingTime:1.84,hasTruncateMarker:!1,authors:[{name:"Doug Martin",title:"Creator",url:"https://github.com/tripss",imageURL:"https://avatars1.githubusercontent.com/u/361261?v=4"}],frontMatter:{title:"v0.11.2",author:"Doug Martin",author_title:"Creator",author_url:"https://github.com/tripss",author_image_url:"https://avatars1.githubusercontent.com/u/361261?v=4",tags:["releases","patch"]},nextItem:{title:"v0.11.0",permalink:"/nestjs-query/blog/2020/05/07/v0.11.0"}},m={authorsImageUrls:[void 0]},c=[{value:"<code>@InjectAssemblerQueryService</code>",id:"injectassemblerqueryservice",level:2},{value:"Example",id:"example",level:3},{value:"Using Assemblers in auto-generated Resolver",id:"using-assemblers-in-auto-generated-resolver",level:2},{value:"Using Services in auto-generated Resolver",id:"using-services-in-auto-generated-resolver",level:2}],p={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"injectassemblerqueryservice"},(0,a.kt)("inlineCode",{parentName:"h2"},"@InjectAssemblerQueryService")),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.11.1")," a new ",(0,a.kt)("inlineCode",{parentName:"p"},"@InjectAssemblerQueryService")," decorator has been introduced to reduce boiler plate code related to creating an ",(0,a.kt)("inlineCode",{parentName:"p"},"AssemblerQueryService"),"."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"Define your assembler"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.assembler.ts"',title:'"todo-item.assembler.ts"'},"import { Assembler, ClassTransformerAssembler } from '@ptc-org/nestjs-query-core';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Assembler(TodoItemDTO, TodoItemEntity)\nexport class TodoItemAssembler extends ClassTransformerAssembler<TodoItemDTO, TodoItemEntity> {\n  convertToDTO(entity: TodoItemEntity): TodoItemDTO {\n    const dto = super.convertToDTO(entity);\n    dto.age = Date.now() - entity.created.getMilliseconds();\n    return dto;\n  }\n}\n\n")),(0,a.kt)("p",null,"Now, instead of defining an ",(0,a.kt)("inlineCode",{parentName:"p"},"AssemblerQueryService")," you can use the decorator."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.resolver.ts" {8}',title:'"todo-item.resolver.ts"',"{8}":!0},"import { QueryService, InjectAssemblerQueryService } from '@ptc-org/nestjs-query-core';\nimport { CRUDResolver } from '@ptc-org/nestjs-query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO) {\n  constructor(@InjectAssemblerQueryService(TodoItemAssembler) readonly service: QueryService<TodoItemDTO>) {\n    super(service);\n  }\n}\n")),(0,a.kt)("h2",{id:"using-assemblers-in-auto-generated-resolver"},"Using Assemblers in auto-generated Resolver"),(0,a.kt)("p",null,"There is a new ",(0,a.kt)("inlineCode",{parentName:"p"},"AssemblerClass")," option when using the ",(0,a.kt)("inlineCode",{parentName:"p"},"NestjsQueryGraphQLModule")," to generate your resolver to using a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"Assembler"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"When using the AssemblerClass option you don't need to specify the entity.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.module.ts" {12-13,17-18}',title:'"todo-item.module.ts"',"{12-13,17-18}":!0},"import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { TodoItemAssembler } from './todo-item.assembler';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      // Register the assembler\n      assemblers: [TodoItemAssembler],\n      resolvers: [\n        {\n          DTOClass: TodoItemDTO,\n          // specify the assembler type to use.\n          AssemblerClass: TodoItemAssembler,\n        },\n      ],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n\n")),(0,a.kt)("h2",{id:"using-services-in-auto-generated-resolver"},"Using Services in auto-generated Resolver"),(0,a.kt)("p",null,"There is a new ",(0,a.kt)("inlineCode",{parentName:"p"},"ServiceClass")," option when using the ",(0,a.kt)("inlineCode",{parentName:"p"},"NestjsQueryGraphQLModule")," to generate your resolver to a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryService"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"When using the ServiceClass option you don't need to specify the entity.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.module.ts" {12-13,17-18}',title:'"todo-item.module.ts"',"{12-13,17-18}":!0},"import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { TodoItemService } from './todo-item.service';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      // Register the the custom QueryService\n      services: [TodoItemService],\n      resolvers: [\n        {\n          DTOClass: TodoItemDTO,\n          // specify the QueryService type to use.\n          ServiceClass: TodoItemService,\n        },\n      ],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n")))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,v=p["".concat(i,".").concat(d)]||p[d]||c[d]||a;return r?n.createElement(v,s(s({ref:t},m),{},{components:r})):n.createElement(v,s({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);