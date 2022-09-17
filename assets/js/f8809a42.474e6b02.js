"use strict";(self.webpackChunk_rnx_kit_docsite=self.webpackChunk_rnx_kit_docsite||[]).push([[7296],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>s});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),k=p(n),s=r,c=k["".concat(o,".").concat(s)]||k[s]||m[s]||l;return n?a.createElement(c,i(i({ref:e},u),{},{components:n})):a.createElement(c,i({ref:e},u))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2461:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},i="config",d={unversionedId:"tools/config",id:"tools/config",title:"config",description:"",source:"@site/docs/tools/config.mdx",sourceDirName:"tools",slug:"/tools/config",permalink:"/rnx-kit/docs/tools/config",draft:!1,editUrl:"https://github.com/microsoft/rnx-kit/tree/main/docsite/docs/tools/config.mdx",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"cli",permalink:"/rnx-kit/docs/tools/cli"},next:{title:"dep-check",permalink:"/rnx-kit/docs/tools/dep-check"}},o={},p=[{value:"Schema",id:"schema",level:2},{value:"<code>KitConfig</code>",id:"kitconfig",level:3},{value:"<code>BundleConfig</code> inherits <code>BundleParameters</code>",id:"bundleconfig-inherits-bundleparameters",level:3},{value:"<code>AllPlatforms</code>",id:"allplatforms",level:3},{value:"<code>BundleParameters</code> inherits <code>BundlerPlugins</code>",id:"bundleparameters-inherits-bundlerplugins",level:3},{value:"<code>BundlerPlugins</code>",id:"bundlerplugins",level:3},{value:"<code>CyclicDetectorOptions</code>",id:"cyclicdetectoroptions",level:3},{value:"<code>DuplicateDetectorOptions</code>",id:"duplicatedetectoroptions",level:3},{value:"<code>TypeScriptValidationOptions</code>",id:"typescriptvalidationoptions",level:3},{value:"<code>ServerConfig</code> inherits <code>BundlerPlugins</code>",id:"serverconfig-inherits-bundlerplugins",level:3},{value:"API",id:"api",level:2},{value:"<code>getKitConfig({module, cwd})</code>",id:"getkitconfigmodule-cwd",level:3},{value:"<code>getBundleConfig(config, id)</code>",id:"getbundleconfigconfig-id",level:3},{value:"<code>getPlatformBundleConfig(bundle, platform)</code>",id:"getplatformbundleconfigbundle-platform",level:3},{value:"<code>getKitCapabilities(config)</code>",id:"getkitcapabilitiesconfig",level:3},{value:"<code>KitCapabilities</code>",id:"kitcapabilities",level:4}],u={toc:p};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"config"},"config"),(0,r.kt)("p",null,"Query for a package's configuration."),(0,r.kt)("p",null,"Configuration influences how the CLI behaves. If you're not using the CLI, and\ninstead using a specific tool programmatically, you can use this library to read\nconfiguration data and use it as tool input."),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("p",null,"Package configuration is under the top-level ",(0,r.kt)("inlineCode",{parentName:"p"},"rnx-kit")," entry in package.hson. It\nis of type ",(0,r.kt)("inlineCode",{parentName:"p"},"KitConfig"),"."),(0,r.kt)("h3",{id:"kitconfig"},(0,r.kt)("inlineCode",{parentName:"h3"},"KitConfig")),(0,r.kt)("p",null,"Configuration information for an rnx-kit package. This is retrieved from\n'rnx-kit' in package.json."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kitType"),(0,r.kt)("td",{parentName:"tr",align:null},'"app", "library", undefined'),(0,r.kt)("td",{parentName:"tr",align:null},"Library or App package. Used by the dependency manager when projecting capabilities into ",(0,r.kt)("inlineCode",{parentName:"td"},"dependencies"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"devDependencies"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"peerDependencies"),". Library package dependencies are private, in dev and peer. App package dependencies are public.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reactNativeVersion"),(0,r.kt)("td",{parentName:"tr",align:null},"string, undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"React Native version (or range) which this package supports.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reactNativeDevVersion"),(0,r.kt)("td",{parentName:"tr",align:null},"string, undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"React Native version to use during development of this package. If not specified, the minimum ",(0,r.kt)("inlineCode",{parentName:"td"},"reactNativeVersion")," is used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bundle"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BundleConfig"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"BundleConfig[]"),", undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies how the package is bundled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"server"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ServerConfig"),", undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies how the package's bundle server is configured.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"capabilities"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Capability[]"),", undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"List of ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rnx-kit/tree/main/packages/dep-check#capabilities"},"capabilities")," that this package needs. A capability is a well-known name (string).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customProfiles"),(0,r.kt)("td",{parentName:"tr",align:null},"string, undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to a file containing ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rnx-kit/tree/main/packages/dep-check#custom-profiles"},"custom profiles"),".")))),(0,r.kt)("h3",{id:"bundleconfig-inherits-bundleparameters"},(0,r.kt)("inlineCode",{parentName:"h3"},"BundleConfig")," inherits ",(0,r.kt)("inlineCode",{parentName:"h3"},"BundleParameters")),(0,r.kt)("p",null,"Defines how a package is bundled. Includes shared bundling parameters with\nplatform-specific overrides."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"string, undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier for this bundle definition. Only used as a reference within the build system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"targets"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AllPlatforms[]"),", undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"The platform(s) for which this package may be bundled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"platforms"),(0,r.kt)("td",{parentName:"tr",align:null},"{","[K in ",(0,r.kt)("inlineCode",{parentName:"td"},"AllPlatforms"),"]",": ",(0,r.kt)("inlineCode",{parentName:"td"},"BundleDefinition"),"}, undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"Platform-specific overrides for bundling parameters. Any parameter not listed in an override gets its value from the shared bundle definition, or falls back to defaults.")))),(0,r.kt)("h3",{id:"allplatforms"},(0,r.kt)("inlineCode",{parentName:"h3"},"AllPlatforms")),(0,r.kt)("p",null,'Union of: "ios", "android", "windows", "win32", "macos"'),(0,r.kt)("h3",{id:"bundleparameters-inherits-bundlerplugins"},(0,r.kt)("inlineCode",{parentName:"h3"},"BundleParameters")," inherits ",(0,r.kt)("inlineCode",{parentName:"h3"},"BundlerPlugins")),(0,r.kt)("p",null,"Parameters controlling how a bundle is constructed."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entryFile"),(0,r.kt)("td",{parentName:"tr",align:null},"string, undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to the .js file which is the entry-point for building the bundle. Either absolute, or relative to the package.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bundleOutput"),(0,r.kt)("td",{parentName:"tr",align:null},"string, undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to the output bundle file. Either absolute or relative to the package.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bundleEncoding"),(0,r.kt)("td",{parentName:"tr",align:null},"string, undefined"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings"},"Encoding scheme")," to use when writing the bundle file. Currently limited to UTF-8, UTF-16 (little endian), and 7-bit ASCII.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sourcemapOutput"),(0,r.kt)("td",{parentName:"tr",align:null},"string, undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to use when creating the bundle source map file. Either absolute, or relative to the package.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sourcemapSourcesRoot"),(0,r.kt)("td",{parentName:"tr",align:null},"string, undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to the package's source files. Used to make source-map paths relative and therefore portable.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sourcemapUseAbsolutePath"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean, undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"Controls whether or not SourceMapURL is reported as a full path or just a file name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"assetsDest"),(0,r.kt)("td",{parentName:"tr",align:null},"string, undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"Path where all bundle assets (strings, images, fonts, sounds, ...) are written. Either absolute, or relative to the package.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"indexedBundleFormat"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean, undefined"),(0,r.kt)("td",{parentName:"tr",align:null},'Force the "Indexed RAM" bundle file format, even when targeting Android. Only applies to the ',(0,r.kt)("inlineCode",{parentName:"td"},"rnx-ram-bundle")," command.")))),(0,r.kt)("h3",{id:"bundlerplugins"},(0,r.kt)("inlineCode",{parentName:"h3"},"BundlerPlugins")),(0,r.kt)("p",null,"Parameters controlling bundler plugins."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"detectCyclicDependencies"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean, ",(0,r.kt)("inlineCode",{parentName:"td"},"CyclicDetectorOptions"),", undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"Choose whether to detect cycles in the dependency graph. ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," uses defaults, while ",(0,r.kt)("inlineCode",{parentName:"td"},"CyclicDetectorOptions")," lets you control the detection process.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"detectDuplicateDependencies"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean, ",(0,r.kt)("inlineCode",{parentName:"td"},"DuplicateDetectorOptions"),", undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"Choose whether to detect duplicate packages in the dependency graph. ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," uses defaults, while ",(0,r.kt)("inlineCode",{parentName:"td"},"DuplicateDetectorOptions")," lets you control the detection process.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"typescriptValidation"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean, ",(0,r.kt)("inlineCode",{parentName:"td"},"TypeScriptValidationOptions"),", undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"Choose whether to type-check source files using TypeScript. ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," uses defaults, while ",(0,r.kt)("inlineCode",{parentName:"td"},"TypeScriptValidationOptions")," lets you control the validation process.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"treeShake"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean, undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"Choose whether to enable tree shaking.")))),(0,r.kt)("h3",{id:"cyclicdetectoroptions"},(0,r.kt)("inlineCode",{parentName:"h3"},"CyclicDetectorOptions")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"includeNodeModules"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean, undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"When scanning for circular dependencies, include all external packages from node_modules.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"linesOfContext"),(0,r.kt)("td",{parentName:"tr",align:null},"number, undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"When a cycle is detected, this controls the size of the module backtrace that is printed with the error message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"throwOnError"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean, undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether or not to throw an exception when a cycle is detected.")))),(0,r.kt)("h3",{id:"duplicatedetectoroptions"},(0,r.kt)("inlineCode",{parentName:"h3"},"DuplicateDetectorOptions")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ignoredModules"),(0,r.kt)("td",{parentName:"tr",align:null},"string[], undefined"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of modules to ignore when scanning for duplicate dependencies.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bannedModules"),(0,r.kt)("td",{parentName:"tr",align:null},"string[], undefined"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of modules that always cause a failure, regardless of whether or not they are duplicated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"throwOnError"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean, undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether or not to throw an exception when a duplicate or banned module is detected.")))),(0,r.kt)("h3",{id:"typescriptvalidationoptions"},(0,r.kt)("inlineCode",{parentName:"h3"},"TypeScriptValidationOptions")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"throwOnError"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean, undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Controls whether an error is thrown when type-validation fails.")))),(0,r.kt)("h3",{id:"serverconfig-inherits-bundlerplugins"},(0,r.kt)("inlineCode",{parentName:"h3"},"ServerConfig")," inherits ",(0,r.kt)("inlineCode",{parentName:"h3"},"BundlerPlugins")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"projectRoot"),(0,r.kt)("td",{parentName:"tr",align:null},"string, undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to the root of your react-native application. The bundle server uses this root path to resolve all web requests. The root path should contain your Babel config, otherwise Metro won't be able to find it. Either absolute, or relative to the package.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"assetPlugins"),(0,r.kt)("td",{parentName:"tr",align:null},"string[], undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"Additional asset plugins to be used by the Metro Babel transformer. Comma-separated list containing plugin modules and/or absolute paths to plugin packages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sourceExts"),(0,r.kt)("td",{parentName:"tr",align:null},"string[], undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"Additional source-file extensions to include when generating bundles. Comma-separated list, excluding the leading dot.")))),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"getkitconfigmodule-cwd"},(0,r.kt)("inlineCode",{parentName:"h3"},"getKitConfig({module, cwd})")),(0,r.kt)("p",null,"Query for a package's rnx-kit configuration."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"module"),(0,r.kt)("td",{parentName:"tr",align:null},"string, undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"Read package configuration from the named module. When given, this takes precedence over ",(0,r.kt)("inlineCode",{parentName:"td"},"cwd"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cwd"),(0,r.kt)("td",{parentName:"tr",align:null},"string, undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"Read package configuration from the given directory. Ignored when ",(0,r.kt)("inlineCode",{parentName:"td"},"module")," is given.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[Return]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KitConfig"),", null"),(0,r.kt)("td",{parentName:"tr",align:null},"Package configuration, or ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," if nothing was found.")))),(0,r.kt)("h3",{id:"getbundleconfigconfig-id"},(0,r.kt)("inlineCode",{parentName:"h3"},"getBundleConfig(config, id)")),(0,r.kt)("p",null,"Get a bundle configuration from the rnx-kit configuration."),(0,r.kt)("p",null,"If an id is given, search for the matching bundle definition. Otherwise, use the\nfirst bundle definition."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KitConfig")),(0,r.kt)("td",{parentName:"tr",align:null},"The package's rnx-kit configuration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"string, undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional identity of the target bundle configuration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[Return]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BundleDefinition")),(0,r.kt)("td",{parentName:"tr",align:null},"Bundle configuration, or ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")," if nothing was found")))),(0,r.kt)("h3",{id:"getplatformbundleconfigbundle-platform"},(0,r.kt)("inlineCode",{parentName:"h3"},"getPlatformBundleConfig(bundle, platform)")),(0,r.kt)("p",null,"Resolves the platform selector for a bundle configuration."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bundle"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BundleConfig")),(0,r.kt)("td",{parentName:"tr",align:null},"Bundle config to resolve (includes the optional platform selectors)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"platform"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AllPlatforms")),(0,r.kt)("td",{parentName:"tr",align:null},"Target platform")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[Return]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BundleDefinition")),(0,r.kt)("td",{parentName:"tr",align:null},"Bundle config containing platform-specific overrides")))),(0,r.kt)("h3",{id:"getkitcapabilitiesconfig"},(0,r.kt)("inlineCode",{parentName:"h3"},"getKitCapabilities(config)")),(0,r.kt)("p",null,"Get capability information from the package configuration."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KitConfig")),(0,r.kt)("td",{parentName:"tr",align:null},"Package configuration.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[Return]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KitCapabilities")),(0,r.kt)("td",{parentName:"tr",align:null},"Capability information.")))),(0,r.kt)("h4",{id:"kitcapabilities"},(0,r.kt)("inlineCode",{parentName:"h4"},"KitCapabilities")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kitType"),(0,r.kt)("td",{parentName:"tr",align:null},'"app", "library", undefined'),(0,r.kt)("td",{parentName:"tr",align:null},'"library"'),(0,r.kt)("td",{parentName:"tr",align:null},"Library or App package. Used by the dependency manager when projecting capabilities into ",(0,r.kt)("inlineCode",{parentName:"td"},"dependencies"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"devDependencies"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"peerDependencies"),". Library package dependencies are private, in dev and peer. App package dependencies are public.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reactNativeVersion"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"React Native version (or range) which this package supports.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reactNativeDevVersion"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Min version in reactNativeVersion"),(0,r.kt)("td",{parentName:"tr",align:null},"React Native version to use during development of this package. If not specified, the minimum ",(0,r.kt)("inlineCode",{parentName:"td"},"reactNativeVersion")," is used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"capabilities"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Capability[]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",{parentName:"tr",align:null},"List of ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rnx-kit/tree/main/packages/dep-check#capabilities"},"capabilities")," that this package needs. A capability is a well-known name (string).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customProfiles"),(0,r.kt)("td",{parentName:"tr",align:null},"string, undefined"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Path to a file containing ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rnx-kit/tree/main/packages/dep-check#custom-profiles"},"custom profiles"),".")))))}m.isMDXComponent=!0}}]);