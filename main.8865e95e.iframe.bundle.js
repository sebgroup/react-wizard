(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{470:function(module,exports,__webpack_require__){__webpack_require__(471),__webpack_require__(628),__webpack_require__(629),__webpack_require__(837),__webpack_require__(832),__webpack_require__(841),__webpack_require__(842),__webpack_require__(838),__webpack_require__(835),__webpack_require__(843),__webpack_require__(834),__webpack_require__(836),__webpack_require__(844),module.exports=__webpack_require__(826)},538:function(module,exports){},629:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(332)},826:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(332).configure)([__webpack_require__(827),__webpack_require__(828)],module,!1)}).call(this,__webpack_require__(191)(module))},827:function(module,exports,__webpack_require__){var map={"./stories/Introduction.stories.mdx":833};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=827},828:function(module,exports,__webpack_require__){var map={"./stories/Wizard.stories.tsx":839,"./stories/WizardHeader.stories.tsx":840};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=828},829:function(module,exports,__webpack_require__){},831:function(module,exports,__webpack_require__){},833:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(0);var esm=__webpack_require__(13),dist_esm=__webpack_require__(447),blocks=__webpack_require__(448),code_brackets=__webpack_require__.p+"static/media/code-brackets.2e1112d7.svg",colors=__webpack_require__.p+"static/media/colors.a4bd0486.svg",comments=__webpack_require__.p+"static/media/comments.a3859089.svg",direction=__webpack_require__.p+"static/media/direction.b770f9af.svg",flow=__webpack_require__.p+"static/media/flow.edad2ac1.svg",assets_plugin=__webpack_require__.p+"static/media/plugin.d494b228.svg",repo=__webpack_require__.p+"static/media/repo.6d496322.svg",stackalt=__webpack_require__.p+"static/media/stackalt.dba9fbb3.svg";function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(blocks.a,{title:"components/Introduction",mdxType:"Meta"}),Object(esm.b)("style",null,"\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n"),Object(esm.b)("h1",{id:"welcome-to-storybook"},"Welcome to Storybook"),Object(esm.b)("p",null,"Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",Object(esm.b)("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),Object(esm.b)("p",null,"Browse example stories now by navigating to them in the sidebar.\nView their code in the ",Object(esm.b)("inlineCode",{parentName:"p"},"src/stories")," directory to learn how they work.\nWe recommend building UIs with a ",Object(esm.b)("a",{parentName:"p",href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer"},Object(esm.b)("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),Object(esm.b)("div",{className:"subheading"},"Configure"),Object(esm.b)("div",{className:"link-list"},Object(esm.b)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},Object(esm.b)("img",{src:assets_plugin,alt:"plugin"}),Object(esm.b)("span",null,Object(esm.b)("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),Object(esm.b)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},Object(esm.b)("img",{src:stackalt,alt:"Build"}),Object(esm.b)("span",null,Object(esm.b)("strong",null,"Build configuration"),"How to customize webpack and Babel")),Object(esm.b)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},Object(esm.b)("img",{src:colors,alt:"colors"}),Object(esm.b)("span",null,Object(esm.b)("strong",null,"Styling"),"How to load and configure CSS libraries")),Object(esm.b)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},Object(esm.b)("img",{src:flow,alt:"flow"}),Object(esm.b)("span",null,Object(esm.b)("strong",null,"Data"),"Providers and mocking for data libraries"))),Object(esm.b)("div",{className:"subheading"},"Learn"),Object(esm.b)("div",{className:"link-list"},Object(esm.b)("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},Object(esm.b)("img",{src:repo,alt:"repo"}),Object(esm.b)("span",null,Object(esm.b)("strong",null,"Storybook documentation"),"Configure, customize, and extend")),Object(esm.b)("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank"},Object(esm.b)("img",{src:direction,alt:"direction"}),Object(esm.b)("span",null,Object(esm.b)("strong",null,"In-depth guides"),"Best practices from leading teams")),Object(esm.b)("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},Object(esm.b)("img",{src:code_brackets,alt:"code"}),Object(esm.b)("span",null,Object(esm.b)("strong",null,"GitHub project"),"View the source and add issues")),Object(esm.b)("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},Object(esm.b)("img",{src:comments,alt:"comments"}),Object(esm.b)("span",null,Object(esm.b)("strong",null,"Discord chat"),"Chat with maintainers and the community"))),Object(esm.b)("div",{className:"tip-wrapper"},Object(esm.b)("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",Object(esm.b)("code",null,"src/stories/Introduction.stories.mdx")))}MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"components/Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>Object(esm.b)(dist_esm.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(esm.b)(MDXContent,null))};__webpack_exports__.default=componentMeta},839:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var objectSpread2=__webpack_require__(92),slicedToArray=__webpack_require__(450),objectWithoutProperties=__webpack_require__(210),esm=__webpack_require__(122),react=__webpack_require__(0),react_default=__webpack_require__.n(react),react_components_esm=__webpack_require__(449),classnames=__webpack_require__(3),classnames_default=__webpack_require__.n(classnames),jsx_runtime=(__webpack_require__(829),__webpack_require__(47)),_excluded=["children","toggle","onDismissed"],Wizard_Wizard=react_default.a.forwardRef((function(_ref,ref){var children=_ref.children,toggle=_ref.toggle,onDismissed=_ref.onDismissed,props=Object(objectWithoutProperties.a)(_ref,_excluded);return Object(jsx_runtime.jsx)(react_components_esm.a,{toggle:toggle,onBackdropDismiss:onDismissed,onEscape:onDismissed,fullscreen:!0,children:Object(jsx_runtime.jsx)("div",Object(objectSpread2.a)(Object(objectSpread2.a)({},props),{},{ref:ref,className:classnames_default()("wizard",props.className),children:children}))})})),src_Wizard_Wizard=react_default.a.memo(Wizard_Wizard);try{Wizard_Wizard.displayName="Wizard",Wizard_Wizard.__docgenInfo={description:"",displayName:"Wizard",props:{toggle:{defaultValue:null,description:"Wizard toggle.",name:"toggle",required:!0,type:{name:"boolean"}},onDismissed:{defaultValue:null,description:"Event triggered when Wizard is dimissed",name:"onDismissed",required:!1,type:{name:"(() => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Wizard/Wizard.tsx#Wizard"]={docgenInfo:Wizard_Wizard.__docgenInfo,name:"Wizard",path:"src/Wizard/Wizard.tsx#Wizard"})}catch(__react_docgen_typescript_loader_error){}var Wizard_stories_excluded=["ref"],Default=(__webpack_exports__.default={title:"components/Wizard",component:src_Wizard_Wizard,argTypes:{}},function Template(_ref){_ref.ref;var args=Object(objectWithoutProperties.a)(_ref,Wizard_stories_excluded),_React$useState=react_default.a.useState(args.toggle),_React$useState2=Object(slicedToArray.a)(_React$useState,2),toggle=_React$useState2[0],setToggle=_React$useState2[1];return react_default.a.useEffect((function(){setToggle(args.toggle)}),[args.toggle]),Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("div",{className:"w-100 text-center",children:Object(jsx_runtime.jsx)("button",{className:"btn",onClick:function onClick(){return setToggle(!0)},children:"Show Wizard"})}),Object(jsx_runtime.jsxs)(src_Wizard_Wizard,Object(objectSpread2.a)(Object(objectSpread2.a)({},args),{},{toggle:toggle,children:[Object(jsx_runtime.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(jsx_runtime.jsx)("h2",{children:"Wizard Title"}),Object(jsx_runtime.jsx)("button",{className:"btn",onClick:function onClick(){return setToggle(!1)},children:"X"})]}),Object(jsx_runtime.jsx)("div",{children:"Wizard content"})]}))]})}.bind({}));Default.args={toggle:!1,onDismissed:Object(esm.action)("dismissed")},Default.parameters=Object(objectSpread2.a)({storySource:{source:'({ ref, ...args }) => {\r\n  const [toggle, setToggle] = React.useState<boolean>(args.toggle);\r\n\r\n  React.useEffect(() => {\r\n    setToggle(args.toggle);\r\n  }, [args.toggle]);\r\n\r\n  return (\r\n    <>\r\n      <div className="w-100 text-center">\r\n        <button className="btn" onClick={() => setToggle(true)}>\r\n          Show Wizard\r\n        </button>\r\n      </div>\r\n      <Wizard {...args} toggle={toggle}>\r\n        <div className="d-flex justify-content-between">\r\n          <h2>Wizard Title</h2>\r\n          <button className="btn" onClick={() => setToggle(false)}>\r\n            X\r\n          </button>\r\n        </div>\r\n        <div>Wizard content</div>\r\n      </Wizard>\r\n    </>\r\n  );\r\n}'}},Default.parameters)},840:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var objectSpread2=__webpack_require__(92),jsx_runtime=(__webpack_require__(0),__webpack_require__(831),__webpack_require__(47)),WizardHeader_WizardHeader_WizardHeader=function WizardHeader(_ref){var heading=_ref.heading;return Object(jsx_runtime.jsx)("div",{className:"wizard-header",children:heading})},src_WizardHeader_WizardHeader=WizardHeader_WizardHeader_WizardHeader;try{WizardHeader_WizardHeader_WizardHeader.displayName="WizardHeader",WizardHeader_WizardHeader_WizardHeader.__docgenInfo={description:"",displayName:"WizardHeader",props:{heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/WizardHeader/WizardHeader.tsx#WizardHeader"]={docgenInfo:WizardHeader_WizardHeader_WizardHeader.__docgenInfo,name:"WizardHeader",path:"src/WizardHeader/WizardHeader.tsx#WizardHeader"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"components/WizardHeader",component:src_WizardHeader_WizardHeader,argTypes:{}};var Default=function Template(args){return Object(jsx_runtime.jsx)(src_WizardHeader_WizardHeader,Object(objectSpread2.a)({},args))}.bind({});Default.args={heading:"Wizard Header"},Default.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <WizardHeader {...args} />"}},Default.parameters)},844:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(852),types=__webpack_require__(850),esm=__webpack_require__(5),parameters=(__webpack_require__(822),{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}});function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(types.setGlobalRender)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[470,2,3]]]);