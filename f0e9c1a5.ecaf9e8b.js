/*! For license information please see f0e9c1a5.ecaf9e8b.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{210:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return m}));var r=n(1),s=n(6),a=(n(0),n(220)),i=n(224),o=n(223),l={title:"Assemblers"},c={id:"concepts/assemblers",title:"Assemblers",description:"Assemblers are used to translate your DTO into the underlying database type and back.",source:"@site/docs/concepts/assemblers.mdx",permalink:"/nestjs-query/docs/concepts/assemblers",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/concepts/assemblers.mdx",sidebar:"docs",previous:{title:"Services",permalink:"/nestjs-query/docs/concepts/services"},next:{title:"Services",permalink:"/nestjs-query/docs/persistence/services"}},b=[{value:"When to use Assemblers",id:"when-to-use-assemblers",children:[]},{value:"Why?",id:"why",children:[{value:"Resolvers",id:"resolvers",children:[]},{value:"Services",id:"services",children:[]},{value:"Assemblers",id:"assemblers",children:[]},{value:"Why not use the assembler in the resolver?",id:"why-not-use-the-assembler-in-the-resolver",children:[]}]},{value:"ClassTransformerAssembler",id:"classtransformerassembler",children:[]},{value:"AbstractAssembler",id:"abstractassembler",children:[{value:"Converting the Query",id:"converting-the-query",children:[]},{value:"Converting the DTO",id:"converting-the-dto",children:[]},{value:"Converting the Entity",id:"converting-the-entity",children:[]}]},{value:"AssemblerQueryService",id:"assemblerqueryservice",children:[]},{value:"Registering Your Assembler",id:"registering-your-assembler",children:[]}],u={rightToc:b};function m(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Assemblers are used to translate your DTO into the underlying database type and back."),Object(a.b)("h2",{id:"when-to-use-assemblers"},"When to use Assemblers"),Object(a.b)("p",null,"In most cases an Assembler will not be required because your Entity and DTO will be the same shape."),Object(a.b)("p",null,"The only time you need to define an assembler is when the DTO and Entity are different. The most common scenarios are"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Additional computed fields and you do not want to include the business logic in your DTO definition."),Object(a.b)("li",{parentName:"ul"},"Different field names because of poorly named columns in the database or to make a DB change passive to the end user.")),Object(a.b)("h2",{id:"why"},"Why?"),Object(a.b)("p",null,"Separation of concerns."),Object(a.b)("h3",{id:"resolvers"},"Resolvers"),Object(a.b)("p",null,"Your resolvers only concern is dealing with graphql and translating the request (a DTO) into something the service cares about."),Object(a.b)("p",null,"The resolver should not care about how it is persisted. The underlying Entity ",Object(a.b)("strong",{parentName:"p"},"could")," have additional fields that you do not want to expose in your API, or it may be persisted into multiple stores."),Object(a.b)("p",null,"By separating the resolver from the persistence layer you can evolve your API separate from your database model."),Object(a.b)("h3",{id:"services"},"Services"),Object(a.b)("p",null,"The services concern are operating on a DTO, preventing the leaking of persistence details to the API."),Object(a.b)("p",null," In ",Object(a.b)("inlineCode",{parentName:"p"},"nestjs-query")," services can be composed. In the case of assemblers information is translated using the assembler and delegated to an underlying service."),Object(a.b)("p",null," This alleviates any awkwardness around passing in a DTO and receiving a different object type back. Instead, your service can use an assembler to alleviate these concerns."),Object(a.b)("h3",{id:"assemblers"},"Assemblers"),Object(a.b)("p",null,"The assembler provides a single, testable, place to provide a translation between the DTO and entity, and vice versa."),Object(a.b)("h3",{id:"why-not-use-the-assembler-in-the-resolver"},"Why not use the assembler in the resolver?"),Object(a.b)("p",null,"The resolvers concern is translating graphql requests into the specified DTO."),Object(a.b)("p",null,"The services concern is accepting and returning a DTO based contract. when using an assembler to translate between the DTO and underlying entities."),Object(a.b)("p",null,"If you follow this pattern you ",Object(a.b)("strong",{parentName:"p"},"could")," use the same service with other transports (rest, microservices, etc) as long as the request can be translated into a DTO."),Object(a.b)("h2",{id:"classtransformerassembler"},"ClassTransformerAssembler"),Object(a.b)("p",null,"In most cases the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/typestack/class-transformer"}),"class-transformer")," package will properly map back and forth. Because of this there is a ",Object(a.b)("inlineCode",{parentName:"p"},"ClassTransformerAssembler")," that leverages the ",Object(a.b)("inlineCode",{parentName:"p"},"plainToClass")," method."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"NOTE")," The ",Object(a.b)("inlineCode",{parentName:"p"},"ClassTransformerAssembler")," is the default implementation if an ",Object(a.b)("inlineCode",{parentName:"p"},"Assembler")," is not manually defined."),Object(a.b)("p",null,"If you find yourself in a scenario where you need to compute values and you dont want to add the business logic to your DTO you can extend the ",Object(a.b)("inlineCode",{parentName:"p"},"ClassTransformerAssembler"),"."),Object(a.b)("p",null,"Lets take a simple example, where we have ",Object(a.b)("inlineCode",{parentName:"p"},"TodoItemDTO")," and we want to compute the ",Object(a.b)("inlineCode",{parentName:"p"},"age"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todo-item.assembler.ts"',title:'"todo-item.assembler.ts"'}),"import { Assembler, ClassTransformerAssembler } from '@nestjs-query/core';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n// `@Assembler` decorator will register the assembler with `nestjs-query` and\n// the QueryService service will be able to auto discover it.\n@Assembler(TodoItemDTO, TodoItemEntity)\nexport class TodoItemAssembler extends ClassTransformerAssembler<TodoItemDTO, TodoItemEntity> {\n  convertToDTO(entity: TodoItemEntity): TodoItemDTO {\n    const dto = super.convertToDTO(entity);\n    // compute the age\n    dto.age = Date.now() - entity.created.getMilliseconds();\n    return dto;\n  }\n}\n")),Object(a.b)("p",null,"While this example is fairly trivial, the same pattern should apply for more complex scenarios."),Object(a.b)("h2",{id:"abstractassembler"},"AbstractAssembler"),Object(a.b)("p",null,"To create your own ",Object(a.b)("inlineCode",{parentName:"p"},"Assembler")," extend the ",Object(a.b)("inlineCode",{parentName:"p"},"AbstractAssembler"),"."),Object(a.b)("p",null,"Lets assume we have the following ",Object(a.b)("inlineCode",{parentName:"p"},"UserDTO"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="user.dto.ts"',title:'"user.dto.ts"'}),"import { FilterableField } from '@nestjs-query/query-graphql';\nimport { ObjectType } from '@nestjs/graphql';\n\n@ObjectType('User')\nclass UserDTO {\n  @FilterableField()\n  firstName!: string;\n\n  @FilterableField()\n  lastName!: string;\n\n  @FilterableField()\n  emailAddress!: string;\n}\n\n")),Object(a.b)("p",null,"But you inherited a DB schema that has names that are not as user friendly."),Object(a.b)(i.a,{defaultValue:"typeorm",groupId:"orm",values:[{label:"TypeOrm",value:"typeorm"},{label:"Sequelize",value:"sequelize"}],mdxType:"Tabs"},Object(a.b)(o.a,{value:"typeorm",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="user.entity.ts"',title:'"user.entity.ts"'}),"import {Entity, Column} from 'typeorm'\n\n@Entity()\nclass UserEntity {\n  @Column()\n  first!: string;\n\n  @Column()\n  last!: string;\n\n  @Column()\n  email!: string;\n}\n"))),Object(a.b)(o.a,{value:"sequelize",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="user.entity.ts"',title:'"user.entity.ts"'}),"import { Table, Column, Model } from 'sequelize-typescript';\n\n@Table\nexport class UserEntity extends Model<UserEntity> {\n   @Column\n   first!: string;\n\n   @Column\n   last!: string;\n\n   @Column\n   email!: string;\n}\n\n")))),Object(a.b)("p",null,"To properly translate the ",Object(a.b)("inlineCode",{parentName:"p"},"UserDTO")," into the ",Object(a.b)("inlineCode",{parentName:"p"},"UserEntity")," and back you can extend an ",Object(a.b)("inlineCode",{parentName:"p"},"Assembler")," that the ",Object(a.b)("inlineCode",{parentName:"p"},"QueryService")," will use."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="user.assembler.ts"',title:'"user.assembler.ts"'}),"import { AbstractAssembler, Assembler, Query, transformQuery } from '@nestjs-query/core';\nimport { UserDTO } from './dto/user.dto';\nimport { UserEntity } from './user.entity';\n\n// `@Assembler` decorator will register the assembler with `nestjs-query` and\n// the QueryService service will be able to auto discover it.\n@Assembler(UserDTO, UserEntity)\nexport class UserAssembler extends AbstractAssembler<UserDTO, UserEntity> {\n  convertQuery(query: Query<UserDTO>): Query<UserEntity> {\n    return transformQuery(query, {\n      firstName: 'first',\n      lastName: 'last',\n      emailAddress: 'email',\n    });\n  }\n\n  convertToDTO(entity: UserEntity): UserDTO {\n    const dto = new UserDTO();\n    dto.firstName = entity.first;\n    dto.lastName = entity.last;\n    return dto;\n  }\n\n  convertToEntity(dto: UserDTO): UserEntity {\n    const entity = new UserEntity();\n    entity.first = dto.firstName;\n    entity.last = dto.lastName;\n    return entity;\n  }\n}\n\n")),Object(a.b)("p",null,"The first thing to look at is the ",Object(a.b)("inlineCode",{parentName:"p"},"@Assembler")," decorator. It will register the assembler with ",Object(a.b)("inlineCode",{parentName:"p"},"nestjs-query")," so ",Object(a.b)("inlineCode",{parentName:"p"},"QueryServices")," can look it up later."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"@Assembler(UserDTO, UserEntity)\n")),Object(a.b)("h3",{id:"converting-the-query"},"Converting the Query"),Object(a.b)("p",null,"Next the ",Object(a.b)("inlineCode",{parentName:"p"},"convertQuery")," method."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"convertQuery(query: Query<UserDTO>): Query<UserEntity> {\n  return transformQuery(query, {\n    firstName: 'first',\n    lastName: 'last',\n    emailAddress: 'email',\n  });\n}\n")),Object(a.b)("p",null,"This method leverages the ",Object(a.b)("inlineCode",{parentName:"p"},"transformQuery")," function from ",Object(a.b)("inlineCode",{parentName:"p"},"@nestjs-query/core"),". This method will remap all fields specified in the field map to correct field name."),Object(a.b)("p",null,"In this example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"{\n  filter: {\n    firstName: { eq: 'Bob' },\n    lastName: { eq: 'Yukon' },\n    emailAddress: { eq: 'bob@yukon.com' }\n  }\n}\n")),Object(a.b)("p",null,"Would be transformed into."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"{\n  filter: {\n    first: { eq: 'Bob' },\n    last: { eq: 'Yukon' },\n    email: { eq: 'bob@yukon.com' }\n  }\n}\n")),Object(a.b)("h3",{id:"converting-the-dto"},"Converting the DTO"),Object(a.b)("p",null,"The next piece is the ",Object(a.b)("inlineCode",{parentName:"p"},"convertToDTO"),", which will convert the entity into a the correct DTO."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"convertToDTO(entity: UserEntity): UserDTO {\n  const dto = new UserDTO();\n  dto.firstName = entity.first;\n  dto.lastName = entity.last;\n  return dto;\n}\n")),Object(a.b)("h3",{id:"converting-the-entity"},"Converting the Entity"),Object(a.b)("p",null,"The next piece is the ",Object(a.b)("inlineCode",{parentName:"p"},"convertToEntity"),", which will convert the DTO into a the correct entity."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"convertToEntity(dto: UserDTO): UserEntity {\n  const entity = new UserEntity();\n  entity.first = dto.firstName;\n  entity.last = dto.lastName;\n  return entity;\n}\n")),Object(a.b)("p",null,"This is a pretty basic example but the same pattern should apply to more complex scenarios."),Object(a.b)("h2",{id:"assemblerqueryservice"},"AssemblerQueryService"),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"This section only applies if you are manually defining your Resolver.\nIf you are using the ",Object(a.b)("inlineCode",{parentName:"p"},"NestjsQueryGraphQLModule")," an ",Object(a.b)("inlineCode",{parentName:"p"},"AssemblerQueryService")," will automatically be created."))),Object(a.b)("p",null,"To use your assembler you need to create an ",Object(a.b)("inlineCode",{parentName:"p"},"AssemblerQueryService")," that will wrap a ",Object(a.b)("inlineCode",{parentName:"p"},"QueryService")," to translate back and forth."),Object(a.b)("p",null,"This example wraps a ",Object(a.b)("inlineCode",{parentName:"p"},"QueryService")," to assemble to ",Object(a.b)("inlineCode",{parentName:"p"},"UserDTO")," and ",Object(a.b)("inlineCode",{parentName:"p"},"UserEntity"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="user.service.ts"',title:'"user.service.ts"'}),"import { AssemblerQueryService, InjectQueryService, QueryService } from '@nestjs-query/core';\nimport { UserDTO } from './user.dto';\nimport { UserAssembler } from './user.assembler';\nimport { UserEntity } from './user.entity';\n\n@QueryService(UserDTO)\nexport class UserService extends AssemblerQueryService<UserDTO, UserEntity> {\n  constructor(\n    assembler: UserAssembler,\n    @InjectQueryService(UserEntity) queryService: QueryService<UserEntity>,\n  ) {\n    super(assembler, queryService);\n  }\n}\n")),Object(a.b)("p",null,"Your resolver should then use the ",Object(a.b)("inlineCode",{parentName:"p"},"UserService")," to fetch records."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="user.resolver.ts"',title:'"user.resolver.ts"'}),"import { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { UserDTO } from './user.dto';\nimport { UserService } from './user.service';\n\n@Resolver(() => UserDTO)\nexport class UserResolver extends CRUDResolver(UserDTO) {\n  constructor(readonly service: UserService) {\n    super(service);\n  }\n}\n")),Object(a.b)("h2",{id:"registering-your-assembler"},"Registering Your Assembler"),Object(a.b)("p",null,"Don't forget to register your ",Object(a.b)("inlineCode",{parentName:"p"},"Assembler")," and ",Object(a.b)("inlineCode",{parentName:"p"},"QueryService")," with your module."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="user.module.ts"',title:'"user.module.ts"'}),"@Module({\n  providers: [/*Other providers*/, UserAssembler, UserService],\n  // ...other module options\n})\nexport class UserModule {}\n")))}m.isMDXComponent=!0},220:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),s=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=s.a.createContext({}),b=function(e){var t=s.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},u=function(e){var t=b(e.components);return s.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=b(n),p=r,d=u["".concat(i,".").concat(p)]||u[p]||m[p]||a;return n?s.a.createElement(d,o({ref:t},c,{components:n})):s.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return s.a.createElement.apply(null,i)}return s.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},221:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=s.apply(null,r);i&&e.push(i)}else if("object"===a)for(var o in r)n.call(r,o)&&r[o]&&e.push(o)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(r=function(){return s}.apply(t,[]))||(e.exports=r)}()},222:function(e,t,n){"use strict";var r=n(0);const s=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});t.a=s},223:function(e,t,n){"use strict";var r=n(0),s=n.n(r);t.a=function(e){return s.a.createElement("div",null,e.children)}},224:function(e,t,n){"use strict";var r=n(0),s=n.n(r),a=n(222);var i=function(){return Object(r.useContext)(a.a)},o=n(221),l=n.n(o),c=n(93),b=n.n(c);const u=37,m=39;t.a=function(e){const{block:t,children:n,defaultValue:a,values:o,groupId:c}=e,{tabGroupChoices:p,setTabGroupChoices:d}=i(),[y,O]=Object(r.useState)(a);if(null!=c){const e=p[c];null!=e&&e!==y&&O(e)}const h=e=>{O(e),null!=c&&d(c,e)},v=[];return s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},o.map(({value:e,label:t})=>s.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":y===e,className:l()("tab-item",b.a.tabItem,{"tab-item--active":y===e}),key:e,ref:e=>v.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case m:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(v,e.target,e),onFocus:()=>h(e),onClick:()=>h(e)},t))),s.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===y)[0]))}}}]);