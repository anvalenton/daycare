(this["webpackJsonpdaycare-schedule"]=this["webpackJsonpdaycare-schedule"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(9),c=n.n(r),s=(n(34),n(35),n(2)),i=(n(40),n(1)),o=function(e){var t=e.name,n=e.group;return Object(i.jsx)("div",{className:"employeename-subcontainer ".concat(n),children:Object(i.jsx)("span",{className:"employeename",children:t})})},u=(n(42),n(6)),m=n.n(u),d=function(e){var t=e.colorNum,n=e.startTime,a=e.endTime,r=e.className,c={1:"red",2:"blue",3:"yellow",4:"green"},u=Object(s.d)((function(e){return e.data}),s.b).filter((function(e){return e.group===t&&e.working}));return 0===u.length&&(u=[{name:"None"}]),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"shiftblock-container ".concat(r),children:[Object(i.jsx)("div",{className:"shiftblock-subcontainer-starttime time",children:n}),Object(i.jsx)("div",{className:"shiftblock-subcontainer-emp",children:u.map((function(e){return Object(i.jsx)(o,{name:e.name,group:c[t]},m()())}))}),Object(i.jsx)("div",{className:"time",children:a})]})})},l=function(e){for(var t=e.roomNum,n=e.aShift,a=e.bShift,r=e.roomData,c=Object(s.d)((function(e){return e.workingdays[0].shiftGrp})),o={A:1,B:2,C:3,D:4},u="7:00 AM",l="12:00 PM",j="12:00 PM",b="5:30 PM",O=[],f=0;f<5;f++)"B"===c?(O.push(Object(i.jsxs)("div",{className:"shiftblock-container-ampm",children:[Object(i.jsx)(d,{className:"amshiftblock",colorNum:o[a.am],startTime:u,endTime:l}),Object(i.jsx)(d,{className:"pmshiftblock",colorNum:o[a.pm],startTime:j,endTime:b})]},m()())),c="A"):(O.push(Object(i.jsxs)("div",{className:"shiftblock-container-ampm",children:[Object(i.jsx)(d,{className:"amshiftblock",colorNum:o[n.am],startTime:u,endTime:l}),Object(i.jsx)(d,{className:"pmshiftblock",colorNum:o[n.pm],startTime:j,endTime:b})]},m()())),c="B");return Object(i.jsxs)("div",{className:"room-container",children:[Object(i.jsx)("div",{className:"room-container-roomnum-container",children:Object(i.jsxs)("div",{className:"room-container-roomnum room".concat(t),children:["ROOM ",t]})}),Object(i.jsxs)("div",{className:"room-container-notes",children:[Object(i.jsx)("h2",{children:"ROOM DETAILS"}),r.notes]}),Object(i.jsx)("div",{className:"room-rows",children:O})]})},j=(n(43),n(3)),b=n(29),O=n(5),f=n.n(O),h=n(24),p=n(25),v=n.n(p),D=n(7),N=n.n(D);function y(e){return function(){var t=Object(h.a)(f.a.mark((function t(n){var a,r,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.post("https://app.fakejson.com/q",e);case 3:a=t.sent,r=a.data,(c=T())?n({type:"UPDATE_SCHEDULE",data:r}):c||n({type:"UPDATE_BUSINESS_CLOSE",isDaycareOpen:!1}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n(x(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}function x(e){throw new Error("API call did not work")}function E(e){var t=Object(b.a)(e);if(N()().format("M[/]YY")!==t[0].moDate){var n=t[0],a=n.shiftGrp,r=N()().add(7,"days").format("M[/]YY"),c="A"===a?"B":"A",s=Object(j.a)(Object(j.a)({},n),{},{moDate:r,shiftGrp:c});return t.push(s),t.shift(),{type:"UPDATE_WORKINGDAYS",updatedWorkDays:t}}}function T(){var e=new Date,t=e.getDay();if(!(t>0&&t<6))return!1;var n,a=e.getHours(),r=e.getMinutes();return a>=7&&a<=17&&(n=!(17===a&&r>=30)),n}var g=n(27),S=(n(64),function(){var e=Object(s.c)(),t=Object(s.d)((function(e){return e.workingdays}),s.b),n=E(t);return Object(a.useEffect)((function(){void 0===!n.length&&e(E(n))}),[e,n]),Object(i.jsx)("div",{className:"dayheader-container",children:Object(i.jsx)("div",{className:"days-container",children:t.map((function(e){return Object(i.jsxs)("div",{className:"wholeday-container",children:[Object(i.jsx)("div",{className:"day-container",children:e.day}),Object(i.jsx)("div",{children:e.moDate})]},m()())}))})})}),k={token:"apbFv44NakazHojFbikJLw",data:{name:"nameFirst",working:"numberBool",group:"numberInt|1,4",_repeat:8}},_=function(){var e=Object(s.c)(),t=Object(s.d)((function(e){return e.intervalID}),s.b),n=Object(s.d)((function(e){return e.isDaycareOpen}),s.b);Object(a.useEffect)((function(){e(y(k));var t=Object(g.a)((function(){e(y(k))}),3e5);return e({type:"UPDATE_INTERVAL_ID",intervalID:t}),clearInterval(t)}),[e]),Object(a.useEffect)((function(){n||clearInterval(t)}),[n,t]);return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"allrooms-container",children:[Object(i.jsx)(S,{}),Object(i.jsx)(l,{roomNum:"1",aShift:{am:"A",pm:"A"},bShift:{am:"B",pm:"B"},roomData:{notes:"Under 5 years old"},children:" "}),Object(i.jsx)(l,{roomNum:"2",aShift:{am:"A",pm:"B"},bShift:{am:"C",pm:"D"},roomData:{notes:"Over 5 years old"},children:"this is a room"})]})})},w=n(28),A=(n(65),function(){var e=N()().format("LTS"),t=Object(a.useState)(e),n=Object(w.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){var e=setInterval((function(){c(N()().format("LTS"))}),1e3);return function(){return clearInterval(e)}}),[]),Object(i.jsxs)("div",{className:"clock-container",children:[Object(i.jsx)("div",{className:"clock-date",children:N()().format("MMMM D YYYY")}),Object(i.jsx)("div",{className:"clock",children:r})]})});n(66);var I=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(A,{}),Object(i.jsx)(_,{})]})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},P={data:[{name:"Sam",working:!0,group:1},{name:"Mary",working:!0,group:2},{name:"Alexio",working:!0,group:3},{name:"Andrew",working:!0,group:4}],isDaycareOpen:!0,intervalID:null,workingdays:[{moDate:"8/23",day:"Monday",shiftGrp:"A"},{moDate:"8/24",day:"Tuesday",shiftGrp:"B"},{moDate:"8/25",day:"Wednesday",shiftGrp:"A"},{moDate:"8/26",day:"Thursday",shiftGrp:"B"},{moDate:"8/27",day:"Friday",shiftGrp:"A"}]};var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_SCHEDULE":return Object(j.a)(Object(j.a)({},e),{},{data:t.data});case"UPDATE_BUSINESS_CLOSE":return Object(j.a)(Object(j.a)({},e),{},{isDaycareOpen:t.isDaycareOpen});case"UPDATE_INTERVAL_ID":return Object(j.a)(Object(j.a)({},e),{},{intervalID:t.intervalID});case"UPDATE_WORKINGDAYS":return Object(j.a)(Object(j.a)({},e),{},{workingdays:t.updatedWorkDays});case"UPDATE_YESTERDAYSHIFTGROUP":return Object(j.a)(Object(j.a)({},e),{},{yesterdayShift:t.newShiftGroup});default:return e}},M=n(12),B=n(26),G=Object(M.c)(L,Object(M.b)(Object(M.a)(B.a),"undefined"===typeof window.__REDUX_DEVTOOLS_EXTENSION__?function(e){return e}:window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));c.a.render(Object(i.jsx)(s.a,{store:G,children:Object(i.jsx)(I,{})}),document.getElementById("root")),U()}},[[67,1,2]]]);
//# sourceMappingURL=main.3e40c846.chunk.js.map