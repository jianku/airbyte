"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[2124],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85284:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={description:"Keen is a fully managed event streaming and analytics platform."},l="Keen",p={unversionedId:"integrations/destinations/keen",id:"integrations/destinations/keen",title:"Keen",description:"Keen is a fully managed event streaming and analytics platform.",source:"@site/../docs/integrations/destinations/keen.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/keen",permalink:"/integrations/destinations/keen",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/integrations/destinations/keen.md",tags:[],version:"current",frontMatter:{description:"Keen is a fully managed event streaming and analytics platform."},sidebar:"mySidebar",previous:{title:"Kafka",permalink:"/integrations/destinations/kafka"},next:{title:"Local CSV",permalink:"/integrations/destinations/local-csv"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"Sync overview",id:"sync-overview",level:3},{value:"Output schema",id:"output-schema",level:4},{value:"Features",id:"features",level:4},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Keen Project",id:"keen-project",level:4},{value:"API Key and Project ID",id:"api-key-and-project-id",level:4},{value:"Timestamp Inference",id:"timestamp-inference",level:4},{value:"Setup the Keen destination in Airbyte",id:"setup-the-keen-destination-in-airbyte",level:3},{value:"CHANGELOG",id:"changelog",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"keen"},"Keen"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Airbyte Keen destination allows you to stream data from any Airbyte Source into ",(0,i.kt)("a",{parentName:"p",href:"https://keen.io?utm_campaign=Airbyte%20Destination%20Connector&utm_source=Airbyte%20Hosted%20Docs&utm_medium=Airbyte%20Hosted%20Docs&utm_term=Airbyte%20Hosted%20Docs&utm_content=Airbyte%20Hosted%20Docs"},"Keen")," for storage, analysis, and visualization. Keen is a flexible, fully managed event streaming and analytics platform that empowers anyone to ship custom, embeddable dashboards in minutes, not months."),(0,i.kt)("h3",{id:"sync-overview"},"Sync overview"),(0,i.kt)("h4",{id:"output-schema"},"Output schema"),(0,i.kt)("p",null,"Each replicated stream from Airbyte will output data into a corresponding event collection in Keen. Event collections store data in JSON format. Each collection will inherit the name from the stream with all non-alphanumeric characters removed, except for ",(0,i.kt)("inlineCode",{parentName:"p"},".\u2019, \u2018-\u2019, \u2018_\u2019,")," and whitespace characters. When possible, the connector will try to infer the timestamp value for the record and override the special field ",(0,i.kt)("inlineCode",{parentName:"p"},"keen.timestamp")," with it."),(0,i.kt)("h4",{id:"features"},"Features"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Deduped History"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"As this connector does not support dbt, we don't support this sync mode on this destination.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"To use the Keen destination, you'll first need to create a ",(0,i.kt)("a",{parentName:"p",href:"https://keen.io/users/signup?utm_campaign=Airbyte%20Destination%20Connector&utm_source=Airbyte%20Hosted%20Docs&utm_medium=Airbyte%20Hosted%20Docs&utm_term=Airbyte%20Hosted%20Docs&utm_content=Airbyte%20Hosted%20Docs"},"Keen account")," (if you don\u2019t already have one)."),(0,i.kt)("p",null,"Once you have a Keen account, you can use the following credentials to set up the connector"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A Keen Project ID"),(0,i.kt)("li",{parentName:"ul"},"A Keen Master API key associated with the project")),(0,i.kt)("p",null,"See the setup guide for more information about how to get started."),(0,i.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,i.kt)("h4",{id:"keen-project"},"Keen Project"),(0,i.kt)("p",null,"If you haven\u2019t set up a project to stream your data to:"),(0,i.kt)("p",null,"Login to the ",(0,i.kt)("a",{parentName:"p",href:"https://keen.io/"},"Keen application")," and add a new project. To do this, click the \u2018Add New\u2019 link next to the Projects label on the left-hand, side ribbon. Then, give the project a name."),(0,i.kt)("p",null,"You can think of a project as a data silo. The data in a project is completely separate from data in other projects. We recommend that you create separate projects for each of your applications and separate projects for Dev and Prod environments."),(0,i.kt)("p",null,"Now, head to the \u2018Access\u2019 section and grab your Project ID and Master API Key."),(0,i.kt)("p",null,"If you already have a project set up:"),(0,i.kt)("p",null,"Head to the \u2018Access\u2019 tab and grab your Project ID and Master API Key"),(0,i.kt)("h4",{id:"api-key-and-project-id"},"API Key and Project ID"),(0,i.kt)("p",null,"The Keen Connector uses the ",(0,i.kt)("a",{parentName:"p",href:"https://keen.io/docs/streams/kafka-streaming/kafka-inbound-cluster/?utm_campaign=Airbyte%20Destination%20Connector&utm_source=Airbyte%20Hosted%20Docs&utm_medium=Airbyte%20Hosted%20Docs&utm_term=Airbyte%20Hosted%20Docs&utm_content=Airbyte%20Hosted%20Docs"},"Keen Kafka Inbound Cluster")," to stream  data. It requires your ",(0,i.kt)("inlineCode",{parentName:"p"},"Project ID")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Master Key")," for  authentication. To get them, navigate to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Access")," tab from the left-hand, side panel and check the ",(0,i.kt)("inlineCode",{parentName:"p"},"Project Details")," section.\n",(0,i.kt)("strong",{parentName:"p"},"Important"),": This destination requires the Project's ",(0,i.kt)("strong",{parentName:"p"},"Master")," Key."),(0,i.kt)("h4",{id:"timestamp-inference"},"Timestamp Inference"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Infer Timestamp")," field lets you specify if you want the connector to infer the ",(0,i.kt)("a",{parentName:"p",href:"https://keen.io/docs/streams/overview/data-modeling-guide/#timestamp-data-type"},"keen.timestamp")," field based on the data from the event that occurred in the source application. This feature allows for historical data synchronization enabling you to fully leverage the power of Keen's time series analytics. By default, this property is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". If toggled off, ",(0,i.kt)("inlineCode",{parentName:"p"},"keen.timestamp")," will be set to the datetime when the data was recorded by Keen."),(0,i.kt)("h3",{id:"setup-the-keen-destination-in-airbyte"},"Setup the Keen destination in Airbyte"),(0,i.kt)("p",null,"Now, you should have all the parameters needed to configure Keen destination."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Project ID")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Master API Key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Infer Timestamp"))),(0,i.kt)("p",null,"Connect your first source and then head to the Keen application. You can seamlessly run ",(0,i.kt)("a",{parentName:"p",href:"https://keen.io/docs/compute/data-explorer-guide/?utm_campaign=Airbyte%20Destination%20Connector&utm_source=Airbyte%20Hosted%20Docs&utm_medium=Airbyte%20Hosted%20Docs&utm_term=Airbyte%20Hosted%20Docs&utm_content=Airbyte%20Hosted%20Docs"},"custom analysis")," on your data and ",(0,i.kt)("a",{parentName:"p",href:"https://keen.io/docs/visualize/dashboard-creator/dashboard-edition/?utm_campaign=Airbyte%20Destination%20Connector&utm_source=Airbyte%20Hosted%20Docs&utm_medium=Airbyte%20Hosted%20Docs&utm_term=Airbyte%20Hosted%20Docs&utm_content=Airbyte%20Hosted%20Docs"},"build interactive dashboards")," for key stakeholders."),(0,i.kt)("p",null,"If you have any questions, please reach out to us at ",(0,i.kt)("a",{parentName:"p",href:"mailto:team@keen.io"},"team@keen.io")," and we\u2019ll be happy to help!"),(0,i.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-30"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8809"},"#","8809")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-09-10"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5973"},"#","5973")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fix timestamp inference for complex schemas")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-08-18"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5339"},"#","5339")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Keen Destination Release!")))))}m.isMDXComponent=!0}}]);