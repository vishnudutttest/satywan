(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3486)}])},6037:function(t,e,r){"use strict";r.d(e,{a:function(){return h}});var n=r(7568),s=r(6042),a=r(9534),u=r(4051),o=r.n(u),i=r(8100),c=r(6906),f=r(7294),p=r(1163),h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.middleware,r=t.redirectIfAuthenticated,u=(0,p.useRouter)(),h=(0,i.ZP)("/api/user",(function(){return c.Z.get("/api/user").then((function(t){return t.data})).catch((function(t){if(409!==t.response.status)throw t;u.push("/verify-email")}))})),l=h.data,d=h.error,v=h.mutate,w=function(){return c.Z.get("/sanctum/csrf-cookie")},m=function(){var t=(0,n.Z)(o().mark((function t(e){var r,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.setErrors,n=(0,a.Z)(e,["setErrors"]),t.next=3,w();case 3:r([]),c.Z.post("/register",n).then((function(){return v()})).catch((function(t){if(422!==t.response.status)throw t;r(Object.values(t.response.data.errors).flat())}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=(0,n.Z)(o().mark((function t(e){var r,n,s;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.setErrors,n=e.setStatus,s=(0,a.Z)(e,["setErrors","setStatus"]),t.next=3,w();case 3:r([]),n(null),c.Z.post("/login",s).then((function(){return v()})).catch((function(t){if(422!==t.response.status)throw t;r(Object.values(t.response.data.errors).flat())}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=(0,n.Z)(o().mark((function t(e){var r,n,s;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.setErrors,n=e.setStatus,s=e.email,t.next=3,w();case 3:r([]),n(null),c.Z.post("/forgot-password",{email:s}).then((function(t){return n(t.data.status)})).catch((function(t){if(422!==t.response.status)throw t;r(Object.values(t.response.data.errors).flat())}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Z=function(){var t=(0,n.Z)(o().mark((function t(e){var r,n,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.setErrors,n=e.setStatus,i=(0,a.Z)(e,["setErrors","setStatus"]),t.next=3,w();case 3:r([]),n(null),c.Z.post("/reset-password",(0,s.Z)({token:u.query.token},i)).then((function(t){return u.push("/login?reset="+btoa(t.data.status))})).catch((function(t){if(422!==t.response.status)throw t;r(Object.values(t.response.data.errors).flat())}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(t){var e=t.setStatus;c.Z.post("/email/verification-notification").then((function(t){return e(t.data.status)}))},b=function(){var t=(0,n.Z)(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(d){t.next=3;break}return t.next=3,c.Z.post("/logout").then((function(){return v()}));case 3:window.location.pathname="/";case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,f.useEffect)((function(){"guest"===e&&r&&l&&u.push(r),"auth"===e&&d&&b()}),[l,d]),{user:l,register:m,login:x,forgotPassword:g,resetPassword:Z,resendEmailVerification:k,logout:b}}},6906:function(t,e,r){"use strict";var n=r(9669),s=r.n(n)().create({baseURL:"http://satywan.rohtakshoes.com/Finance/public/",headers:{"X-Requested-With":"XMLHttpRequest"},withCredentials:!0});e.Z=s},3486:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return p}});var n=r(5893),s=r(9008),a=r.n(s),u=r(1664),o=r.n(u),i=r(7294),c=r(6037),f=r(1163);function p(){var t=(0,c.a)({middleware:"guest"}).user,e=(0,f.useRouter)();return(0,i.useEffect)((function(){t||e.push("/login")})),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a(),{children:(0,n.jsx)("title",{children:"Laravel"})}),(0,n.jsx)("div",{className:"relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0",children:(0,n.jsx)("div",{className:"hidden fixed top-0 right-0 px-6 py-4 sm:block",children:t?(0,n.jsx)(o(),{href:"/dashboard",children:(0,n.jsx)("a",{className:"ml-4 text-sm text-gray-700 underline",children:"Dashboard"})}):""})})]})}}},function(t){t.O(0,[57,774,888,179],(function(){return e=5557,t(t.s=e);var e}));var e=t.O();_N_E=e}]);