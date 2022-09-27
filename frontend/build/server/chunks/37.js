"use strict";
exports.id = 37;
exports.ids = [37];
exports.modules = {

/***/ 6037:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5941);
/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6906);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__]);
swr__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useAuth = ({ middleware , redirectIfAuthenticated  } = {})=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { data: user , error , mutate  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])("/api/user", ()=>_lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get("/api/user").then((res)=>res.data).catch((error)=>{
            if (error.response.status !== 409) throw error;
            router.push("/verify-email");
        }));
    const csrf = ()=>_lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get("/sanctum/csrf-cookie");
    const register = async ({ setErrors , ...props })=>{
        await csrf();
        setErrors([]);
        _lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post("/register", props).then(()=>mutate()).catch((error)=>{
            if (error.response.status !== 422) throw error;
            setErrors(Object.values(error.response.data.errors).flat());
        });
    };
    const login = async ({ setErrors , setStatus , ...props })=>{
        await csrf();
        setErrors([]);
        setStatus(null);
        _lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post("/login", props).then(()=>mutate()).catch((error)=>{
            if (error.response.status !== 422) throw error;
            setErrors(Object.values(error.response.data.errors).flat());
        });
    };
    const forgotPassword = async ({ setErrors , setStatus , email  })=>{
        await csrf();
        setErrors([]);
        setStatus(null);
        _lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post("/forgot-password", {
            email
        }).then((response)=>setStatus(response.data.status)).catch((error)=>{
            if (error.response.status !== 422) throw error;
            setErrors(Object.values(error.response.data.errors).flat());
        });
    };
    const resetPassword = async ({ setErrors , setStatus , ...props })=>{
        await csrf();
        setErrors([]);
        setStatus(null);
        _lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post("/reset-password", {
            token: router.query.token,
            ...props
        }).then((response)=>router.push("/login?reset=" + btoa(response.data.status))).catch((error)=>{
            if (error.response.status !== 422) throw error;
            setErrors(Object.values(error.response.data.errors).flat());
        });
    };
    const resendEmailVerification = ({ setStatus  })=>{
        _lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post("/email/verification-notification").then((response)=>setStatus(response.data.status));
    };
    const logout = async ()=>{
        if (!error) {
            await _lib_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post("/logout").then(()=>mutate());
        }
        window.location.pathname = "/login";
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (middleware === "guest" && redirectIfAuthenticated && user) router.push(redirectIfAuthenticated);
        if (middleware === "auth" && error) logout();
    }, [
        user,
        error
    ]);
    return {
        user,
        register,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const axios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: "http://localhost:8000",
    headers: {
        "X-Requested-With": "XMLHttpRequest"
    },
    withCredentials: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios);


/***/ })

};
;