"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[6877],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),c=o,b=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return n?r.createElement(b,a(a({ref:t},p),{},{components:n})):r.createElement(b,a({ref:t},p))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294),o=n(6010);const i="tabItem_Ymn6";function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,a),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(7462),o=n(7294),i=n(6010),a=n(2389),l=n(7392),s=n(7094),u=n(2466);const p="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n,a=e.lazy,m=e.block,c=e.defaultValue,b=e.values,y=e.groupId,v=e.className,f=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=b?b:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),T=(0,l.l)(h,(function(e,t){return e.value===t.value}));if(T.length>0)throw new Error('Docusaurus error: Duplicate values "'+T.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,s.U)(),N=k.tabGroupChoices,I=k.setTabGroupChoices,O=(0,o.useState)(g),C=O[0],j=O[1],D=[],S=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var w=N[y];null!=w&&w!==C&&h.some((function(e){return e.value===w}))&&j(w)}var q=function(e){var t=e.currentTarget,n=D.indexOf(t),r=h[n].value;r!==C&&(S(t),j(r),null!=y&&I(y,String(r)))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,o=D.indexOf(e.currentTarget)+1;n=null!=(r=D[o])?r:D[0];break;case"ArrowLeft":var i,a=D.indexOf(e.currentTarget)-1;n=null!=(i=D[a])?i:D[D.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},v)},h.map((function(e){var t=e.value,n=e.label,a=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return D.push(e)},onKeyDown:E,onFocus:q,onClick:q},a,{className:(0,i.Z)("tabs__item",d,null==a?void 0:a.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),a?(0,o.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function c(e){var t=(0,a.Z)();return o.createElement(m,(0,r.Z)({key:String(t)},e))}},5036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>y,frontMatter:()=>u,metadata:()=>d,toc:()=>c});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=n(5488),l=n(5162),s=["components"],u={title:"Subscriptions"},p=void 0,d={unversionedId:"graphql/subscriptions",id:"graphql/subscriptions",title:"Subscriptions",description:"Before reading this it is recommended to read the nestjs graphql subscriptions docs.",source:"@site/docs/graphql/subscriptions.mdx",sourceDirName:"graphql",slug:"/graphql/subscriptions",permalink:"/nestjs-query/docs/graphql/subscriptions",draft:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/graphql/subscriptions.mdx",tags:[],version:"current",frontMatter:{title:"Subscriptions"},sidebar:"docs",previous:{title:"Aggregations",permalink:"/nestjs-query/docs/graphql/aggregations"},next:{title:"Relations",permalink:"/nestjs-query/docs/graphql/relations"}},m={},c=[{value:"Enabling Subscriptions",id:"enabling-subscriptions",level:2},{value:"Enabling/Disabling Individual Subscriptions",id:"enablingdisabling-individual-subscriptions",level:3},{value:"Filtering Subscriptions",id:"filtering-subscriptions",level:2},{value:"Custom PubSub Provider",id:"custom-pubsub-provider",level:2}],b={toc:c};function y(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Before reading this it is recommended to read the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/graphql/subscriptions"},"nestjs graphql subscriptions docs"),".")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"nestjs-query")," includes out of the box subscription support. When enabling subscriptions the following subscriptions will be created"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"created{ObjectName}")," - published when the ",(0,i.kt)("inlineCode",{parentName:"li"},"createOne")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"createMany")," mutation is called."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"updatedOne{ObjectName}"),"  - published when the ",(0,i.kt)("inlineCode",{parentName:"li"},"updateOne")," mutation is called."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"updatedMany{ObjectName}")," - published when ",(0,i.kt)("inlineCode",{parentName:"li"},"updateMany")," mutation is called."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deletedOne{ObjectName}")," - published when the ",(0,i.kt)("inlineCode",{parentName:"li"},"deleteOne")," mutation is called."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deletedMany{ObjectName}"),"  - published when ",(0,i.kt)("inlineCode",{parentName:"li"},"deleteMany")," mutation is called.")),(0,i.kt)("h2",{id:"enabling-subscriptions"},"Enabling Subscriptions"),(0,i.kt)("p",null,"You can enable subscriptions through the auto-generated resolver using the ",(0,i.kt)("inlineCode",{parentName:"p"},"NestjsQueryGraphQLModule")," or by manually defining your resolver."),(0,i.kt)("p",null,"In both cases you need to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"enableSubscriptions")," option to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("p",null,"In the below example the following subscriptions will be exposed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"createdTodoItem")," - published when the ",(0,i.kt)("inlineCode",{parentName:"li"},"createOne")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"createMany")," mutation is called."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"updatedOneTodoItem"),"  - published when the ",(0,i.kt)("inlineCode",{parentName:"li"},"updateOne")," mutation is called."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"updatedManyTodoItems")," - published when ",(0,i.kt)("inlineCode",{parentName:"li"},"updateMany")," mutation is called."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deletedOneTodoItem")," - published when the ",(0,i.kt)("inlineCode",{parentName:"li"},"deleteOne")," mutation is called."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deletedManyTodoItems"),"  - published when ",(0,i.kt)("inlineCode",{parentName:"li"},"deleteMany")," mutation is called.")),(0,i.kt)(a.Z,{defaultValue:"module",values:[{label:"NestjsQueryGraphQLModule",value:"module"},{label:"CRUDResolver",value:"resolver"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"module",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.module.ts" {17}',title:'"todo-item.module.ts"',"{17}":!0},"import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemInputDTO } from './todo-item.input';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      resolvers: [{\n        DTOClass: TodoItemDTO,\n        EntityClass: TodoItemEntity,\n        CreateDTOClass: TodoItemInputDTO,\n        UpdateDTOClass: TodoItemInputDTO,\n        enableSubscriptions: true,\n      }],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n"))),(0,i.kt)(l.Z,{value:"resolver",mdxType:"TabItem"},(0,i.kt)("p",null,"When manually defining your resolver you must also provide a readonly ",(0,i.kt)("inlineCode",{parentName:"p"},"pubSub")," property. In this the default ",(0,i.kt)("inlineCode",{parentName:"p"},"PubSub")," implementation is injected."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.resolver.ts" {13,17}',title:'"todo-item.resolver.ts"',"{13,17}":!0},"import { QueryService, InjectQueryService } from '@ptc-org/nestjs-query-core';\nimport { CRUDResolver, InjectPubSub } from '@ptc-org/nestjs-query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { PubSub } from 'graphql-subscriptions';\nimport { TodoItemInputDTO } from './todo-item.input';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Resolver()\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO, {\n  CreateDTOClass: TodoItemInputDTO,\n  UpdateDTOClass: TodoItemInputDTO,\n  enableSubscriptions: true,\n}) {\n  constructor(\n      @InjectQueryService(TodoItemEntity) readonly service: QueryService<TodoItemEntity>,\n      @InjectPubSub() readonly pubSub: PubSub\n  ) {\n    super(service);\n  }\n}\n")))),(0,i.kt)("h3",{id:"enablingdisabling-individual-subscriptions"},"Enabling/Disabling Individual Subscriptions"),(0,i.kt)("p",null,"You also have the option to selectively enable or disable individual subscriptions."),(0,i.kt)("p",null,"In this example the ",(0,i.kt)("inlineCode",{parentName:"p"},"updatedMany")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"deletedMany")," subscriptions are disabled."),(0,i.kt)(a.Z,{defaultValue:"module",values:[{label:"NestjsQueryGraphQLModule",value:"module"},{label:"CRUDResolver",value:"resolver"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"module",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.module.ts" {18-19}',title:'"todo-item.module.ts"',"{18-19}":!0},"import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemInputDTO } from './dto/todo-item-input.dto';\nimport { TodoItemUpdateDTO } from './dto/todo-item-update.dto';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      resolvers: [\n        {\n          DTOClass: TodoItemDTO,\n          EntityClass: TodoItemEntity,\n          CreateDTOClass: TodoItemInputDTO,\n          UpdateDTOClass: TodoItemUpdateDTO,\n          enableSubscriptions: true,\n          update: { many: { enableSubscriptions: false } },\n          delete: { many: { enableSubscriptions: false } },\n        },\n      ],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n\n"))),(0,i.kt)(l.Z,{value:"resolver",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.resolver.ts" {14-15}',title:'"todo-item.resolver.ts"',"{14-15}":!0},"import { QueryService, InjectQueryService } from '@ptc-org/nestjs-query-core';\nimport { CRUDResolver, InjectPubSub } from '@ptc-org/nestjs-query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { PubSub } from 'graphql-subscriptions';\nimport { TodoItemInputDTO } from './todo-item.input';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Resolver()\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO, {\n  CreateDTOClass: TodoItemInputDTO,\n  UpdateDTOClass: TodoItemInputDTO,\n  enableSubscriptions: true,\n  update: { many: { enableSubscriptions: false } },\n  delete: { many: { enableSubscriptions: false } },\n}) {\n  constructor(\n      @InjectQueryService(TodoItemEntity) readonly service: QueryService<TodoItemEntity>,\n      @InjectPubSub() readonly pubSub: PubSub\n  ) {\n    super(service);\n  }\n}\n")))),(0,i.kt)("h2",{id:"filtering-subscriptions"},"Filtering Subscriptions"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"created"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"updatedOne")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"deletedOne")," subscriptions all for a ",(0,i.kt)("inlineCode",{parentName:"p"},"Filter")," to be passed in filter for events that match the criteria"),(0,i.kt)("p",null,"The filter your provide is the same type that is used when querying for records."),(0,i.kt)("p",null,"For example to filter for all created ",(0,i.kt)("inlineCode",{parentName:"p"},"TodoItems")," where the like starts with ",(0,i.kt)("inlineCode",{parentName:"p"},"Foo")," and is completed, you could do the following."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'subscription {\n  createdTodoItem(\n    input: { filter: { title: { like: "Foo%" }, completed: { is: true } } }\n  ) {\n    id\n    title\n    description\n    completed\n    created\n    updated\n  }\n}\n')),(0,i.kt)("h2",{id:"custom-pubsub-provider"},"Custom PubSub Provider"),(0,i.kt)("p",null,"You can override the default ",(0,i.kt)("inlineCode",{parentName:"p"},"PubSub")," implementation by creating your own provider and providing it to ",(0,i.kt)("inlineCode",{parentName:"p"},"nestjs-query"),"."),(0,i.kt)("p",null,"Below is an example provider."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="redis-pub-sub.provider.ts"',title:'"redis-pub-sub.provider.ts"'},"import { pubSubToken } from '@ptc-org/nestjs-query-graphql';\nimport { RedisPubSub } from 'graphql-redis-subscriptions';\nimport Redis from 'ioredis';\nimport { Provider } from '@nestjs/common';\n\nexport class RedisPubSubProvider {\n  static provider(): Provider {\n    return {\n      provide: pubSubToken(),\n      useValue: new RedisPubSub({\n        publisher: new Redis(),\n        subscriber: new Redis(),\n      }),\n    };\n  }\n}\n\n")),(0,i.kt)("p",null,"In order to let ",(0,i.kt)("inlineCode",{parentName:"p"},"nestjs-query")," know about the provider you can set the ",(0,i.kt)("inlineCode",{parentName:"p"},"pubSub")," option."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item/todo-item.module.ts" {14}',title:'"todo-item/todo-item.module.ts"',"{14}":!0},"import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemInputDTO } from './dto/todo-item-input.dto';\nimport { TodoItemUpdateDTO } from './dto/todo-item-update.dto';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { RedisPubSubProvider } from '../redis-pub-sub.provider';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      pubSub: RedisPubSubProvider.provider(),\n      resolvers: [\n        {\n          DTOClass: TodoItemDTO,\n          EntityClass: TodoItemEntity,\n          CreateDTOClass: TodoItemInputDTO,\n          UpdateDTOClass: TodoItemUpdateDTO,\n          enableSubscriptions: true,\n        },\n      ],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n")))}y.isMDXComponent=!0}}]);