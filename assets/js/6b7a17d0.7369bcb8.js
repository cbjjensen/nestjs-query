"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[9429],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(7294),r=n(6010);const a="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(7462),r=n(7294),a=n(6010),i=n(2389),l=n(7392),s=n(7094),p=n(2466);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n,i=e.lazy,m=e.block,c=e.defaultValue,h=e.values,y=e.groupId,g=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.l)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var T=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==T&&!v.some((function(e){return e.value===T})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+T+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var C=(0,s.U)(),I=C.tabGroupChoices,N=C.setTabGroupChoices,b=(0,r.useState)(T),O=b[0],w=b[1],x=[],j=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var D=I[y];null!=D&&D!==O&&v.some((function(e){return e.value===D}))&&w(D)}var R=function(e){var t=e.currentTarget,n=x.indexOf(t),o=v[n].value;o!==O&&(j(t),w(o),null!=y&&N(y,String(o)))},q=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o,r=x.indexOf(e.currentTarget)+1;n=null!=(o=x[r])?o:x[0];break;case"ArrowLeft":var a,i=x.indexOf(e.currentTarget)-1;n=null!=(a=x[i])?a:x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":m},g)},v.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return x.push(e)},onKeyDown:q,onFocus:R,onClick:R},i,{className:(0,a.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(f.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function c(e){var t=(0,i.Z)();return r.createElement(m,(0,o.Z)({key:String(t)},e))}},6391:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=(n(5488),n(5162),["components"]),l={title:"v0.22.x to v0.23.x"},s=void 0,p={unversionedId:"migration-guides/v0.22.x-to-v0.23.x",id:"migration-guides/v0.22.x-to-v0.23.x",title:"v0.22.x to v0.23.x",description:"Offset Paging Strategy [BREAKING CHANGE]",source:"@site/docs/migration-guides/v0.22.x-to-v0.23.x.mdx",sourceDirName:"migration-guides",slug:"/migration-guides/v0.22.x-to-v0.23.x",permalink:"/nestjs-query/docs/migration-guides/v0.22.x-to-v0.23.x",draft:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/migration-guides/v0.22.x-to-v0.23.x.mdx",tags:[],version:"current",frontMatter:{title:"v0.22.x to v0.23.x"},sidebar:"docs",previous:{title:"v0.23.x to v0.24.x",permalink:"/nestjs-query/docs/migration-guides/v0.23.x-to-v0.24.x"},next:{title:"v0.15.x to v0.16.x",permalink:"/nestjs-query/docs/migration-guides/v0.15.x-to-v0.16.x"}},u={},d=[{value:"Offset Paging Strategy BREAKING CHANGE",id:"offset-paging-strategy-breaking-change",level:2},{value:"Total Count with OFFSET Strategy",id:"total-count-with-offset-strategy",level:2},{value:"Relation Decorator Changes BREAKING CHANGE",id:"relation-decorator-changes-breaking-change",level:2},{value:"Authorizers",id:"authorizers",level:2},{value:"Hook Updates",id:"hook-updates",level:2},{value:"Registering DTOs When Using Custom Resolvers",id:"registering-dtos-when-using-custom-resolvers",level:2}],m={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"offset-paging-strategy-breaking-change"},"Offset Paging Strategy ","[BREAKING CHANGE]"),(0,a.kt)("p",null,"In previous versions of ",(0,a.kt)("inlineCode",{parentName:"p"},"nestjs-query")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"OFFSET")," paging strategy returned an array of nodes, this proved to not be\nextensible, especially when wanting to expose other attributes such as ",(0,a.kt)("inlineCode",{parentName:"p"},"totalCount"),", or paging meta such has\n",(0,a.kt)("inlineCode",{parentName:"p"},"hasNextPage")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"hasPreviousPage"),"."),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.23.0")," the graphql response now returns an ",(0,a.kt)("inlineCode",{parentName:"p"},"OffsetConnection")," that looks like the following"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type OffsetPageInfo {\n  hasNextPage: Boolean\n  hasPreviousPage: Boolean\n}\n\ntype TodoItemConnection {\n  pageInfo: OffsetPageInfo!\n  nodes: [TodoItem!]!\n}\n\ntype TodoItem {\n  id: ID!\n  title: String!\n  description: String\n  completed: Boolean!\n  created: DateTime!\n  updated: DateTime!\n}\n")),(0,a.kt)("h2",{id:"total-count-with-offset-strategy"},"Total Count with OFFSET Strategy"),(0,a.kt)("p",null,"In previous versions of the nestjs-query the ",(0,a.kt)("inlineCode",{parentName:"p"},"enableTotalCount")," option only worked with the ",(0,a.kt)("inlineCode",{parentName:"p"},"CURSOR")," paging strategy.\nIn ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.23.0")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"enableTotalCount")," option now also works with the ",(0,a.kt)("inlineCode",{parentName:"p"},"OFFSET")," paging strategy."),(0,a.kt)("p",null," When ",(0,a.kt)("inlineCode",{parentName:"p"},"enableTotalCount")," is set to true the following graphql schema will be generated"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type OffsetPageInfo {\n  hasNextPage: Boolean\n  hasPreviousPage: Boolean\n}\n\ntype TodoItemConnection {\n  totalCount: Int!\n  pageInfo: OffsetPageInfo!\n  nodes: [TodoItem!]!\n}\n\ntype TodoItem {\n  id: ID!\n  title: String!\n  description: String\n  completed: Boolean!\n  created: DateTime!\n  updated: DateTime!\n}\n")),(0,a.kt)("h2",{id:"relation-decorator-changes-breaking-change"},"Relation Decorator Changes ","[BREAKING CHANGE]"),(0,a.kt)("p",null,"In previous versions of ",(0,a.kt)("inlineCode",{parentName:"p"},"nestjs-query")," there were four relation decorators ",(0,a.kt)("inlineCode",{parentName:"p"},"@Relation"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"@FilterableRelation"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"@Connection"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"@FilterableConnection")," all four of the decorators have been changed to be more explicit in naming\nto be clear in what they are doing."),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.23.0")," the decorators have been renamed to be more explicit."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@Relation")," - A relation that is a single value (one-to-one, many-to-one)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@FilterableRelation")," - A ",(0,a.kt)("inlineCode",{parentName:"li"},"@Relation")," that enables filtering the parent by fields of the relation ",(0,a.kt)("inlineCode",{parentName:"li"},"DTO"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@UnPagedRelation")," - An array of relations (e.g, many-to-many, one-to-many) that returns all the related records."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@FilterableUnPagedRelation")," - An ",(0,a.kt)("inlineCode",{parentName:"li"},"@UnPagedRelation")," that enables filtering the parent by fields of the relation\n",(0,a.kt)("inlineCode",{parentName:"li"},"DTO"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@OffsetConnection")," - A connection that represents a collection (e.g, many-to-many, one-to-many) that uses ",(0,a.kt)("inlineCode",{parentName:"li"},"offset"),"\nbased pagination."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@FilterableOffsetConnection")," - An ",(0,a.kt)("inlineCode",{parentName:"li"},"@OffsetConnection")," that enables filtering the parent by fields of the connection\n",(0,a.kt)("inlineCode",{parentName:"li"},"DTO"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@CursorConnection")," - A connection that represents a collection (e.g, many-to-many, one-to-many) that uses ",(0,a.kt)("inlineCode",{parentName:"li"},"cursor"),"\nbased pagination."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@FilterableCursorConnection")," - A ",(0,a.kt)("inlineCode",{parentName:"li"},"@CursorConnection")," that enables filtering the parent by fields of the\nconnection ",(0,a.kt)("inlineCode",{parentName:"li"},"DTO"),".")),(0,a.kt)("p",null,"Below is a mapping of the old definition to the new one"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"In previous versions the ",(0,a.kt)("inlineCode",{parentName:"p"},"OFFSET")," paging strategy returned an array of relations, the new version returns an\n",(0,a.kt)("inlineCode",{parentName:"p"},"OffsetConnection"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"//old\n@Relation('subTasks', () => [TodoItem])\n//new\n@OffsetConnection('subTasks', () => TodoItem)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"//old\n@FilterableRelation('subTasks', () => [TodoItem])\n//new\n@FilterableOffsetConnection('subTasks', () => TodoItem)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"//old\n@Relation('subTasks', () => [TodoItem], {pagingStrategy: PagingStrategies.NONE})\n//new\n@UnPagedRelation('subTasks', () => TodoItem)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"//old\n@FilterableRelation('subTasks', () => [TodoItem], {pagingStrategy: PagingStrategies.NONE})\n//new\n@FilterableUnPagedRelation('subTasks', () => TodoItem)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"//old\n@Connection('subTasks', () => TodoItem)\n//new\n@CursorConnection('subTasks', () => TodoItem)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"//old\n@FilterableConnection('subTasks', () => TodoItem)\n//new\n@FilterableCursorConnection('subTasks', () => TodoItem)\n")),(0,a.kt)("h2",{id:"authorizers"},"Authorizers"),(0,a.kt)("p",null,"In previous versions of ",(0,a.kt)("inlineCode",{parentName:"p"},"nestjs-query")," the resolvers relied on an AuthorizerService to be injected and the filters\nwere created manually within the resolver."),(0,a.kt)("p",null,"In the latest version, we have transitioned to a interceptor/param decorator pattern. This provides:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Better separation of concerns, auth filters are now just params passed to the resolver method."),(0,a.kt)("li",{parentName:"ul"},"More flexibility when extending the resolvers to reuse the same logic that the auto-generated resolvers use\nwithout having to worry about internal implementation details."),(0,a.kt)("li",{parentName:"ul"},"Easier extension of the ",(0,a.kt)("inlineCode",{parentName:"li"},"CRUDResolver")," by not having to worry about injecting the authorizerService, it will\nautomatically add the interceptor and param decorators to auto generated methods, you just need to decorate your DTO."),(0,a.kt)("li",{parentName:"ul"},"Familiar patterns that are laid out in the core nestjs documentation.")),(0,a.kt)("p",null,"Old way"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { QueryService, InjectQueryService } from '@ptc-org/nestjs-query-core';\nimport { CRUDResolver } from '@ptc-org/nestjs-query-graphql';\nimport { Resolver, Query, Args } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver {\n  constructor(\n    @InjectQueryService(TodoItemEntity) readonly service: QueryService<TodoItemEntity>,\n    @InjectAuthorizer(TodoItemDTO) readonly authorizer: Authorizer<TodoItemDTO>\n  ) {}\n\n  @Query(() => TodoItemConnection)\n   async uncompletedTodoItems(@Args() query: TodoItemQuery, @Context() context: unknown): Promise<ConnectionType<TodoItemDTO>> {\n     // add the completed filter the user provided filter\n     const authFilter = this.authorizer.authorize(context);\n     const filter: Filter<TodoItemDTO> = mergeFilter(query.filter ?? {}, { completed: { is: false } });\n     const uncompletedQuery = mergeQuery(query, { filter: mergeFilter(filter, authFilter) });\n     return TodoItemConnection.createFromPromise(\n       (q) => this.service.query(q),\n       uncompletedQuery,\n       (q) => this.service.count(q),\n     );\n   }\n}\n")),(0,a.kt)("p",null,"New"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Filter, InjectQueryService, mergeFilter, mergeQuery, QueryService } from '@ptc-org/nestjs-query-core';\nimport { AuthorizerInterceptor, AuthorizerFilter, ConnectionType } from '@ptc-org/nestjs-query-graphql';\nimport { Args, Query, Resolver } from '@nestjs/graphql';\nimport { UseInterceptors } from '@nestjs/common';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemConnection, TodoItemQuery } from './types';\n\n@Resolver(() => TodoItemDTO)\n@UseInterceptors(AuthorizerInterceptor(TodoItemDTO))\nexport class TodoItemResolver {\n  constructor(@InjectQueryService(TodoItemEntity) readonly service: QueryService<TodoItemEntity>) {}\n\n  // Set the return type to the TodoItemConnection\n  @Query(() => TodoItemConnection)\n  async uncompletedTodoItems(\n    @Args() query: TodoItemQuery,\n    @AuthorizerFilter() authFilter: Filter<TodoItemDTO>,\n  ): Promise<ConnectionType<TodoItemDTO>> {\n    // add the completed filter the user provided filter\n    const filter: Filter<TodoItemDTO> = mergeFilter(query.filter ?? {}, { completed: { is: false } });\n    const uncompletedQuery = mergeQuery(query, { filter: mergeFilter(filter, authFilter) });\n    return TodoItemConnection.createFromPromise(\n      (q) => this.service.query(q),\n      uncompletedQuery,\n      (q) => this.service.count(q),\n    );\n  }\n}\n")),(0,a.kt)("h2",{id:"hook-updates"},"Hook Updates"),(0,a.kt)("p",null,"In previous versions of nestjs-query hooks were not very flexible, and could not be used by custom resolver endpoints."),(0,a.kt)("p",null,"In the latest version the hooks pipeline has been re-worked to enable the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hook decorators now accept either a hook funciton OR a custom hook class that can use dependency injection."),(0,a.kt)("li",{parentName:"ul"},"Reusing hooks in custom endpoints.")),(0,a.kt)("p",null,"As a demonstration of the flexibility of the new hooks implementation, lets use a hook in a custom endpoint (this\nwould not have been possible previously)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{14-15}","{14-15}":!0},"import { InjectQueryService, mergeFilter, QueryService, UpdateManyResponse } from '@ptc-org/nestjs-query-core';\nimport { HookTypes, HookInterceptor, MutationHookArgs, UpdateManyResponseType } from '@ptc-org/nestjs-query-graphql';\nimport { UseInterceptors } from '@nestjs/common';\nimport { Mutation, Resolver } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { UpdateManyTodoItemsArgs } from './types';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver {\n  constructor(@InjectQueryService(TodoItemEntity) readonly service: QueryService<TodoItemDTO>) {}\n\n  @Mutation(() => UpdateManyResponseType())\n  @UseInterceptors(HookInterceptor(HookTypes.BEFORE_UPDATE_MANY, TodoItemDTO))\n  markTodoItemsAsCompleted(@MutationHookArgs() { input }: UpdateManyTodoItemsArgs): Promise<UpdateManyResponse> {\n    return this.service.updateMany(\n      { ...input.update, completed: false },\n      mergeFilter(input.filter, { completed: { is: false } }),\n    );\n  }\n}\n")),(0,a.kt)("p",null,"The two important things are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"HookInterceptor")," in this example we reuse the ",(0,a.kt)("inlineCode",{parentName:"li"},"BEFORE_UPDATE_MANY")," hook on the ",(0,a.kt)("inlineCode",{parentName:"li"},"TodoItemDTO"),", the interceptor\nadds a DI hook instance to the context that can be used downstream by any guards or param decorators."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@MutationHookArgs")," will apply the correct hook to the args and provide it to the resolver endpoint.")),(0,a.kt)("p",null,"In this next example we can demonstrate the DI capability, we'll keep the example simple, but with ",(0,a.kt)("inlineCode",{parentName:"p"},"nestjs"),"'s DI\nfunctionality you can inject other services to look up information and transform the incoming request as much as you\nneed."),(0,a.kt)("p",null,"In this example we create a simple hook that will work for both ",(0,a.kt)("inlineCode",{parentName:"p"},"createOne")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"createMany")," endpoints to set the\n",(0,a.kt)("inlineCode",{parentName:"p"},"createdBy")," attribute. In this example we look up the userEmail from the ",(0,a.kt)("inlineCode",{parentName:"p"},"userService")," and set ",(0,a.kt)("inlineCode",{parentName:"p"},"createdBy")," attribute\non the input."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface CreatedBy {\n  createdBy: string;\n}\n\n@Injectable()\nexport class CreatedByHook<T extends CreatedBy>\n  implements BeforeCreateOneHook<T, GqlContext>, BeforeCreateManyHook<T, GqlContext> {\n  constructor(readonly userService: UserService) {}\n\n  run(instance: CreateManyInputType<T>, context: GqlContext): Promise<CreateManyInputType<T>>;\n  run(instance: CreateOneInputType<T>, context: GqlContext): Promise<CreateOneInputType<T>>;\n  async run(\n    instance: CreateOneInputType<T> | CreateManyInputType<T>,\n    context: GqlContext,\n  ): Promise<CreateOneInputType<T> | CreateManyInputType<T>> {\n    const createdBy = await this.userService.getUserEmail(context.req.userId);\n    if (Array.isArray(instance.input)) {\n      // eslint-disable-next-line no-param-reassign\n      instance.input = instance.input.map((c) => ({ ...c, createdBy }));\n      return instance;\n    }\n    // eslint-disable-next-line no-param-reassign\n    instance.input.createdBy = createdBy;\n    return instance;\n  }\n}\n")),(0,a.kt)("p",null,"Now we can use this generic hook on any DTO that has a ",(0,a.kt)("inlineCode",{parentName:"p"},"createdBy")," field"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@InputType('TodoItemInput')\n@BeforeCreateOne(CreatedByHook)\n@BeforeCreateMany(CreatedByHook)\nexport class TodoItemInputDTO {\n  @IsString()\n  @MaxLength(20)\n  @Field()\n  title!: string;\n\n  @IsBoolean()\n  @Field()\n  completed!: boolean;\n\n  // don't annotate with field because its set by the hook\n  createdBy!: string;\n}\n")),(0,a.kt)("h2",{id:"registering-dtos-when-using-custom-resolvers"},"Registering DTOs When Using Custom Resolvers"),(0,a.kt)("p",null,"In previous versions of ",(0,a.kt)("inlineCode",{parentName:"p"},"nestjs-query")," you could extend ",(0,a.kt)("inlineCode",{parentName:"p"},"CRUDResolver")," but there was not a way to set up the\nappropriate providers for many of the newer features (hooks, authorizers etc.)."),(0,a.kt)("p",null,"In the latest version you now have the option to register your DTOs with ",(0,a.kt)("inlineCode",{parentName:"p"},"@ptc-org/nestjs-query-graphql")," without it\ngenerating a resolver automatically."),(0,a.kt)("p",null,"In this example we create a custom resolver that extends ",(0,a.kt)("inlineCode",{parentName:"p"},"CRUDResolver"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.resolver.ts"',title:'"todo-item.resolver.ts"'},"import { QueryService, InjectQueryService } from '@ptc-org/nestjs-query-core';\nimport { CRUDResolver } from '@ptc-org/nestjs-query-graphql';\nimport { Resolver, Query, Args } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO) {\n  constructor(\n    @InjectQueryService(TodoItemEntity) readonly service: QueryService<TodoItemEntity>\n  ) {\n    super(service);\n  }\n}\n\n")),(0,a.kt)("p",null,"Because the ",(0,a.kt)("inlineCode",{parentName:"p"},"TodoItemResolver")," extends ",(0,a.kt)("inlineCode",{parentName:"p"},"CRUDResolver")," there is no need to have ",(0,a.kt)("inlineCode",{parentName:"p"},"nestjs-query")," also create a resolver,\ninstead you can specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"dtos")," option which just takes in ",(0,a.kt)("inlineCode",{parentName:"p"},"DTOClass"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"CreateDTOClass"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"UpdateDTOClass")," to\nset up all of additional providers to hooks, authorizers and other features."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.module.ts" {9,13}',title:'"todo-item.module.ts"',"{9,13}":!0},"import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { TodoItemResolver } from './todo-item.resolver'\n\n@Module({\n  providers: [TodoItemResolver],\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      dtos: [{ DTOClass: TodoItemDTO }],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n")))}c.isMDXComponent=!0}}]);