(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{12:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),r=c.n(a),i=c(5),s=c.n(i),o=(c(12),c(3)),j=function(e){var t=e.bad,c=e.neutral,a=e.good,r=e.total,i=e.positivePercentage;return Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:["Good: ",a]}),Object(n.jsxs)("li",{children:["Neutral: ",c]}),Object(n.jsxs)("li",{children:["Bad: ",t]}),Object(n.jsxs)("li",{children:["Total: ",r]}),Object(n.jsxs)("li",{children:["Positive feedback: ",i,"%"]})]})},b=function(e){var t=e.message;return Object(n.jsx)("div",{children:t})},d=c(6),u=c.n(d),l=function(e){var t=e.options,c=e.onLeaveFeedback;return Object(n.jsx)(n.Fragment,{children:t.map((function(e){return Object(n.jsx)("button",{type:"button",name:e,onClick:c,children:e},u.a.generate())}))})},h=function(e){var t=e.title,c=e.children;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:t}),c]})};function O(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),c=t[0],r=t[1],i=Object(a.useState)(0),s=Object(o.a)(i,2),d=s[0],u=s[1],O=Object(a.useState)(0),v=Object(o.a)(O,2),x=v[0],f=v[1],k=function(){return c+d+x};return Object(n.jsx)("div",{children:Object(n.jsxs)(h,{title:"Please leave feedback",children:[Object(n.jsx)(l,{options:Object.keys(x,c,d),onLeaveFeedback:function(e){var t=e.target.name;switch(t){case"good":r(t+1);break;case"neutral":u(t+1);break;case"bad":f(t+1);break;default:return}}}),0===this.countTotalFeedback()?Object(n.jsx)(b,{message:"No feedback given"}):Object(n.jsx)(j,{good:c,neutral:d,bad:x,total:k(),positivePercentage:function(){var e=c/k()*100;return isNaN(e)?0:Math.round(e)}()})]})})}var v=function(){return Object(n.jsx)(O,{})};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.4ecc3c9a.chunk.js.map