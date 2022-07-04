"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/makeTransaction";
exports.ids = ["pages/api/makeTransaction"];
exports.modules = {

/***/ "@solana/web3.js":
/*!**********************************!*\
  !*** external "@solana/web3.js" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@solana/web3.js");

/***/ }),

/***/ "bignumber.js":
/*!*******************************!*\
  !*** external "bignumber.js" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("bignumber.js");

/***/ }),

/***/ "bs58":
/*!***********************!*\
  !*** external "bs58" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("bs58");

/***/ }),

/***/ "@solana/spl-token":
/*!************************************!*\
  !*** external "@solana/spl-token" ***!
  \************************************/
/***/ ((module) => {

module.exports = import("@solana/spl-token");;

/***/ }),

/***/ "@solana/wallet-adapter-base":
/*!**********************************************!*\
  !*** external "@solana/wallet-adapter-base" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = import("@solana/wallet-adapter-base");;

/***/ }),

/***/ "(api)/./lib/addresses.ts":
/*!**************************!*\
  !*** ./lib/addresses.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shopAddress\": () => (/* binding */ shopAddress),\n/* harmony export */   \"usdcAddress\": () => (/* binding */ usdcAddress),\n/* harmony export */   \"couponAddress\": () => (/* binding */ couponAddress)\n/* harmony export */ });\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/web3.js */ \"@solana/web3.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_0__);\n\n// Your shop wallet\nconst shopAddress = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(\"5jihQavcfDS3PSyDqFxtznhTSD26TCrjx1TrXPbB4jkV\");\n// This is same for everyone | USDC SPL Token address\nconst usdcAddress = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(\"Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr\");\n// This is your token/coupon address\nconst couponAddress = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(\"5P3giWpPBrVKL8QP8roKM7NsLdi3ie1Nc2b5r9mGtvwb\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYWRkcmVzc2VzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTRDO0FBRTVDLG1CQUFtQjtBQUNaLE1BQU1DLFdBQVcsR0FBRyxJQUFJRCxzREFBUyxDQUFDLDhDQUE4QyxDQUFDO0FBQ3hGLHFEQUFxRDtBQUM5QyxNQUFNRSxXQUFXLEdBQUcsSUFBSUYsc0RBQVMsQ0FBQyw4Q0FBOEMsQ0FBQztBQUN4RixvQ0FBb0M7QUFDN0IsTUFBTUcsYUFBYSxHQUFHLElBQUlILHNEQUFTLENBQUMsOENBQThDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYWRkcmVzc2VzLnRzPzllNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHVibGljS2V5IH0gZnJvbSBcIkBzb2xhbmEvd2ViMy5qc1wiO1xyXG5cclxuLy8gWW91ciBzaG9wIHdhbGxldFxyXG5leHBvcnQgY29uc3Qgc2hvcEFkZHJlc3MgPSBuZXcgUHVibGljS2V5KCc1amloUWF2Y2ZEUzNQU3lEcUZ4dHpuaFRTRDI2VENyangxVHJYUGJCNGprVicpXHJcbi8vIFRoaXMgaXMgc2FtZSBmb3IgZXZlcnlvbmUgfCBVU0RDIFNQTCBUb2tlbiBhZGRyZXNzXHJcbmV4cG9ydCBjb25zdCB1c2RjQWRkcmVzcyA9IG5ldyBQdWJsaWNLZXkoJ0doOVp3RW1kTEo4RHNjS05Ua1RxUGJOd0xOTkJqdVN6YUc5VnAyS0d0S0pyJylcclxuLy8gVGhpcyBpcyB5b3VyIHRva2VuL2NvdXBvbiBhZGRyZXNzXHJcbmV4cG9ydCBjb25zdCBjb3Vwb25BZGRyZXNzID0gbmV3IFB1YmxpY0tleSgnNVAzZ2lXcFBCclZLTDhRUDhyb0tNN05zTGRpM2llMU5jMmI1cjltR3R2d2InKVxyXG5cclxuIl0sIm5hbWVzIjpbIlB1YmxpY0tleSIsInNob3BBZGRyZXNzIiwidXNkY0FkZHJlc3MiLCJjb3Vwb25BZGRyZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/addresses.ts\n");

/***/ }),

/***/ "(api)/./lib/calculatePrice.ts":
/*!*******************************!*\
  !*** ./lib/calculatePrice.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ calculatePrice)\n/* harmony export */ });\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bignumber.js */ \"bignumber.js\");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products */ \"(api)/./lib/products.ts\");\n\n\nfunction calculatePrice(query) {\n    let amount = new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(0);\n    for (let [id, quantity] of Object.entries(query)){\n        const product = _products__WEBPACK_IMPORTED_MODULE_1__.products.find((p)=>p.id === id\n        );\n        if (!product) continue;\n        const price = product.priceUsd;\n        const productQuantity = new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(quantity);\n        amount = amount.plus(productQuantity.multipliedBy(price));\n    }\n    return amount;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvY2FsY3VsYXRlUHJpY2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFxQztBQUVDO0FBRXZCLFNBQVNFLGNBQWMsQ0FBQ0MsS0FBcUIsRUFBYTtJQUN2RSxJQUFJQyxNQUFNLEdBQUcsSUFBSUoscURBQVMsQ0FBQyxDQUFDLENBQUM7SUFDN0IsS0FBSyxJQUFJLENBQUNLLEVBQUUsRUFBRUMsUUFBUSxDQUFDLElBQUlDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDTCxLQUFLLENBQUMsQ0FBRTtRQUNoRCxNQUFNTSxPQUFPLEdBQUdSLG9EQUFhLENBQUNVLENBQUFBLENBQUMsR0FBSUEsQ0FBQyxDQUFDTixFQUFFLEtBQUtBLEVBQUU7UUFBQSxDQUFDO1FBQy9DLElBQUksQ0FBQ0ksT0FBTyxFQUFFLFNBQVM7UUFFdkIsTUFBTUcsS0FBSyxHQUFHSCxPQUFPLENBQUNJLFFBQVE7UUFDOUIsTUFBTUMsZUFBZSxHQUFHLElBQUlkLHFEQUFTLENBQUNNLFFBQVEsQ0FBVztRQUN6REYsTUFBTSxHQUFHQSxNQUFNLENBQUNXLElBQUksQ0FBQ0QsZUFBZSxDQUFDRSxZQUFZLENBQUNKLEtBQUssQ0FBQyxDQUFDO0tBQzFEO0lBRUQsT0FBT1IsTUFBTTtDQUNkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL2NhbGN1bGF0ZVByaWNlLnRzP2ViY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJpZ051bWJlciBmcm9tIFwiYmlnbnVtYmVyLmpzXCI7XHJcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSBcInF1ZXJ5c3RyaW5nXCI7XHJcbmltcG9ydCB7IHByb2R1Y3RzIH0gZnJvbSBcIi4vcHJvZHVjdHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhbGN1bGF0ZVByaWNlKHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSk6IEJpZ051bWJlciB7XHJcbiAgbGV0IGFtb3VudCA9IG5ldyBCaWdOdW1iZXIoMCk7XHJcbiAgZm9yIChsZXQgW2lkLCBxdWFudGl0eV0gb2YgT2JqZWN0LmVudHJpZXMocXVlcnkpKSB7XHJcbiAgICBjb25zdCBwcm9kdWN0ID0gcHJvZHVjdHMuZmluZChwID0+IHAuaWQgPT09IGlkKVxyXG4gICAgaWYgKCFwcm9kdWN0KSBjb250aW51ZTtcclxuXHJcbiAgICBjb25zdCBwcmljZSA9IHByb2R1Y3QucHJpY2VVc2RcclxuICAgIGNvbnN0IHByb2R1Y3RRdWFudGl0eSA9IG5ldyBCaWdOdW1iZXIocXVhbnRpdHkgYXMgc3RyaW5nKVxyXG4gICAgYW1vdW50ID0gYW1vdW50LnBsdXMocHJvZHVjdFF1YW50aXR5Lm11bHRpcGxpZWRCeShwcmljZSkpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gYW1vdW50XHJcbn1cclxuIl0sIm5hbWVzIjpbIkJpZ051bWJlciIsInByb2R1Y3RzIiwiY2FsY3VsYXRlUHJpY2UiLCJxdWVyeSIsImFtb3VudCIsImlkIiwicXVhbnRpdHkiLCJPYmplY3QiLCJlbnRyaWVzIiwicHJvZHVjdCIsImZpbmQiLCJwIiwicHJpY2UiLCJwcmljZVVzZCIsInByb2R1Y3RRdWFudGl0eSIsInBsdXMiLCJtdWx0aXBsaWVkQnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/calculatePrice.ts\n");

/***/ }),

/***/ "(api)/./lib/products.ts":
/*!*************************!*\
  !*** ./lib/products.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"products\": () => (/* binding */ products)\n/* harmony export */ });\nconst products = [\n    {\n        id: \"1 ticket\",\n        name: \"One Hockey Match Tickets\",\n        description: \"Vaasan Sport VS HIFK\",\n        unitName: \"ticket\",\n        priceSol: 0.16,\n        priceUsd: 16\n    },\n    {\n        id: \"2 tickets\",\n        name: \"Two Hockey Match Tickets\",\n        description: \"Vaasan Sport VS HIFK\",\n        unitName: \"tickets\",\n        priceSol: 0.32,\n        priceUsd: 32\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJvZHVjdHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLFFBQVEsR0FBRztJQUN0QjtRQUNFQyxFQUFFLEVBQUUsVUFBVTtRQUNkQyxJQUFJLEVBQUUsMEJBQTBCO1FBQ2hDQyxXQUFXLEVBQUUsc0JBQXNCO1FBQ25DQyxRQUFRLEVBQUUsUUFBUTtRQUNsQkMsUUFBUSxFQUFFLElBQUk7UUFDZEMsUUFBUSxFQUFFLEVBQUU7S0FDYjtJQUNEO1FBQ0VMLEVBQUUsRUFBRSxXQUFXO1FBQ2ZDLElBQUksRUFBRSwwQkFBMEI7UUFDaENDLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkNDLFFBQVEsRUFBRSxTQUFTO1FBQ25CQyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxRQUFRLEVBQUUsRUFBRTtLQUNiO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvcHJvZHVjdHMudHM/MWFkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHJvZHVjdHMgPSBbXHJcbiAge1xyXG4gICAgaWQ6ICcxIHRpY2tldCcsXHJcbiAgICBuYW1lOiAnT25lIEhvY2tleSBNYXRjaCBUaWNrZXRzJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnVmFhc2FuIFNwb3J0IFZTIEhJRksnLFxyXG4gICAgdW5pdE5hbWU6ICd0aWNrZXQnLCAvLyBzaG93cyBhZnRlciB0aGUgcHJpY2UsIGVnLiAwLjA1IFNPTC90cmF5XHJcbiAgICBwcmljZVNvbDogMC4xNixcclxuICAgIHByaWNlVXNkOiAxNixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnMiB0aWNrZXRzJyxcclxuICAgIG5hbWU6ICdUd28gSG9ja2V5IE1hdGNoIFRpY2tldHMnLFxyXG4gICAgZGVzY3JpcHRpb246ICdWYWFzYW4gU3BvcnQgVlMgSElGSycsXHJcbiAgICB1bml0TmFtZTogJ3RpY2tldHMnLFxyXG4gICAgcHJpY2VTb2w6IDAuMzIsXHJcbiAgICBwcmljZVVzZDogMzIsXHJcbiAgfVxyXG5dXHJcbiJdLCJuYW1lcyI6WyJwcm9kdWN0cyIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidW5pdE5hbWUiLCJwcmljZVNvbCIsInByaWNlVXNkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/products.ts\n");

/***/ }),

/***/ "(api)/./pages/api/makeTransaction.ts":
/*!**************************************!*\
  !*** ./pages/api/makeTransaction.ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/spl-token */ \"@solana/spl-token\");\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"@solana/wallet-adapter-base\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/web3.js */ \"@solana/web3.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_addresses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/addresses */ \"(api)/./lib/addresses.ts\");\n/* harmony import */ var _lib_calculatePrice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/calculatePrice */ \"(api)/./lib/calculatePrice.ts\");\n/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bs58 */ \"bs58\");\n/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bs58__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_spl_token__WEBPACK_IMPORTED_MODULE_0__, _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__]);\n([_solana_spl_token__WEBPACK_IMPORTED_MODULE_0__, _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction get(res) {\n    res.status(200).json({\n        label: \"Events and Match Tickets\",\n        icon: \"https://freesvg.org/img/ticket.png\"\n    });\n}\nasync function post(req, res) {\n    try {\n        // We pass the selected items in the query, calculate the expected cost\n        const amount = (0,_lib_calculatePrice__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(req.query);\n        if (amount.toNumber() === 0) {\n            res.status(400).json({\n                error: \"Can't checkout with charge of 0\"\n            });\n            return;\n        }\n        // We pass the reference to use in the query\n        const { reference  } = req.query;\n        if (!reference) {\n            res.status(400).json({\n                error: \"No reference provided\"\n            });\n            return;\n        }\n        // We pass the buyer's public key in JSON body\n        const { account  } = req.body;\n        if (!account) {\n            res.status(400).json({\n                error: \"No account provided\"\n            });\n            return;\n        }\n        // We get the shop private key from .env - this is the same as in our script\n        const shopPrivateKey = process.env.SHOP_PRIVATE_KEY;\n        if (!shopPrivateKey) {\n            res.status(500).json({\n                error: \"Shop private key not available\"\n            });\n        }\n        const shopKeypair = _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.Keypair.fromSecretKey(bs58__WEBPACK_IMPORTED_MODULE_5___default().decode(shopPrivateKey));\n        const buyerPublicKey = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.PublicKey(account);\n        const shopPublicKey = shopKeypair.publicKey;\n        const network = _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletAdapterNetwork.Devnet;\n        const endpoint = (0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.clusterApiUrl)(network);\n        const connection = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.Connection(endpoint);\n        // Get the buyer and seller coupon token accounts\n        // Buyer one may not exist, so we create it (which costs SOL) as the shop account if it doesn't\n        const buyerCouponAccount = await (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_0__.getOrCreateAssociatedTokenAccount)(connection, shopKeypair, _lib_addresses__WEBPACK_IMPORTED_MODULE_3__.couponAddress, buyerPublicKey);\n        const shopCouponAddress = await (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_0__.getAssociatedTokenAddress)(_lib_addresses__WEBPACK_IMPORTED_MODULE_3__.couponAddress, shopPublicKey);\n        // If the buyer has atleast 5 coupons, they can use them and get a discount\n        const buyerGetsCouponDiscount = buyerCouponAccount.amount >= 5;\n        // Get details about the USDC token\n        const usdcMint = await (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_0__.getMint)(connection, _lib_addresses__WEBPACK_IMPORTED_MODULE_3__.usdcAddress);\n        // Get the buyer's USDC token account address\n        const buyerUsdcAddress = await (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_0__.getAssociatedTokenAddress)(_lib_addresses__WEBPACK_IMPORTED_MODULE_3__.usdcAddress, buyerPublicKey);\n        // Get the shop's USDC token account address\n        const shopUsdcAddress = await (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_0__.getAssociatedTokenAddress)(_lib_addresses__WEBPACK_IMPORTED_MODULE_3__.usdcAddress, shopPublicKey);\n        // Get a recent blockhash to include in the transaction\n        const { blockhash  } = await connection.getLatestBlockhash(\"finalized\");\n        const transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.Transaction({\n            recentBlockhash: blockhash,\n            // The buyer pays the transaction fee\n            feePayer: buyerPublicKey\n        });\n        // If the buyer has the coupon discount, divide the amount is USDC by 2\n        const amountToPay = buyerGetsCouponDiscount ? amount.dividedBy(2) : amount;\n        // Create the instruction to send USDC from the buyer to the shop\n        const transferInstruction = (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_0__.createTransferCheckedInstruction)(buyerUsdcAddress, _lib_addresses__WEBPACK_IMPORTED_MODULE_3__.usdcAddress, shopUsdcAddress, buyerPublicKey, amountToPay.toNumber() * 10 ** (await usdcMint).decimals, usdcMint.decimals);\n        // Add the reference to the instruction as a key\n        // This will mean this transaction is returned when we query for the reference\n        transferInstruction.keys.push({\n            pubkey: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.PublicKey(reference),\n            isSigner: false,\n            isWritable: false\n        });\n        // Create the instruction to send the coupon from the shop to the buyer\n        const couponInstruction = buyerGetsCouponDiscount ? // The coupon instruction is to send 5 coupons from the buyer to the shop\n        (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_0__.createTransferCheckedInstruction)(buyerCouponAccount.address, _lib_addresses__WEBPACK_IMPORTED_MODULE_3__.couponAddress, shopCouponAddress, buyerPublicKey, 5, 0) : // The coupon instruction is to send 1 coupon from the shop to the buyer\n        (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_0__.createTransferCheckedInstruction)(shopCouponAddress, _lib_addresses__WEBPACK_IMPORTED_MODULE_3__.couponAddress, buyerCouponAccount.address, shopPublicKey, 1, 0);\n        // Add the shop as a signer to the coupon instruction\n        // If the shop is sendit a coupon, it already will be a signer\n        // But if the buyer is sending the coupons, the shop won't be a signer automatically\n        // It's a useful security to have the shop sign the transaction\n        couponInstruction.keys.push({\n            pubkey: shopPublicKey,\n            isSigner: true,\n            isWritable: false\n        });\n        // Add the instruction to the transaction\n        transaction.add(transferInstruction, couponInstruction);\n        // Sign the transaction as the shop, which is required to transfer coupon\n        // We must partial sign because the transfer instruction still requires the user\n        transaction.partialSign(shopKeypair);\n        // Serialize the transaction and convert to base64 to return it\n        const serializedTransaction = transaction.serialize({\n            // We will need the buyer to sign this transaction after it's returned to them\n            requireAllSignatures: false\n        });\n        const base64 = serializedTransaction.toString(\"base64\");\n        // Insert into database: reference, amount\n        const message = buyerGetsCouponDiscount ? \"50% Discount! Next Ticket\" : \"Thanks for your order!\";\n        // Return the serialized transaction\n        res.status(200).json({\n            transaction: base64,\n            message\n        });\n    } catch (err) {\n        console.error(err);\n        res.status(500).json({\n            error: \"error creating transaction\"\n        });\n    }\n}\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        return get(res);\n    } else if (req.method === \"POST\") {\n        return await post(req, res);\n    } else {\n        return res.status(405).json({\n            error: \"Method not allowed\"\n        });\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWFrZVRyYW5zYWN0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEySTtBQUN6RTtBQUN5QjtBQUVkO0FBQ3hCO0FBQzVCO0FBb0J6QixTQUFTYyxHQUFHLENBQUNDLEdBQWdELEVBQUU7SUFDM0RBLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFDakJDLEtBQUssRUFBRSwwQkFBMEI7UUFDakNDLElBQUksRUFBRSxvQ0FBb0M7S0FDN0MsQ0FBQztDQUNMO0FBRUQsZUFBZUMsSUFBSSxDQUNmQyxHQUFtQixFQUNuQk4sR0FBNkQsRUFDL0Q7SUFDRSxJQUFJO1FBQ0EsdUVBQXVFO1FBQ3ZFLE1BQU1PLE1BQU0sR0FBR1YsK0RBQWMsQ0FBQ1MsR0FBRyxDQUFDRSxLQUFLLENBQUM7UUFDeEMsSUFBSUQsTUFBTSxDQUFDRSxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDekJULEdBQUcsQ0FBQ0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVRLEtBQUssRUFBRSxpQ0FBaUM7YUFBQyxDQUFDO1lBQ2pFLE9BQU07U0FDVDtRQUVELDRDQUE0QztRQUM1QyxNQUFNLEVBQUVDLFNBQVMsR0FBRSxHQUFHTCxHQUFHLENBQUNFLEtBQUs7UUFDL0IsSUFBSSxDQUFDRyxTQUFTLEVBQUU7WUFDWlgsR0FBRyxDQUFDQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRVEsS0FBSyxFQUFFLHVCQUF1QjthQUFFLENBQUM7WUFDeEQsT0FBTTtTQUNUO1FBRUQsOENBQThDO1FBQzlDLE1BQU0sRUFBRUUsT0FBTyxHQUFFLEdBQUdOLEdBQUcsQ0FBQ08sSUFBSTtRQUM1QixJQUFJLENBQUNELE9BQU8sRUFBRTtZQUNWWixHQUFHLENBQUNDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFUSxLQUFLLEVB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RyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFUSxLQUFLLEVBQUUsNEJBQTRCO1NBQUcsQ0FBQztLQUNqRTtDQUNKO0FBRWMsZUFBZWtELE9BQU8sQ0FDakN0RCxHQUFtQixFQUNuQk4sR0FBMEYsRUFDNUY7SUFDRSxJQUFJTSxHQUFHLENBQUN1RCxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ3RCLE9BQU85RCxHQUFHLENBQUNDLEdBQUcsQ0FBQztLQUNsQixNQUFNLElBQUlNLEdBQUcsQ0FBQ3VELE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDaEMsT0FBTyxNQUFNeEQsSUFBSSxDQUFDQyxHQUFHLEVBQUVOLEdBQUcsQ0FBQztLQUM1QixNQUFNO1FBQ0gsT0FBT0EsR0FBRyxDQUFDQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFUSxLQUFLLEVBQUUsb0JBQW9CO1NBQUMsQ0FBQztLQUM5RDtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL21ha2VUcmFuc2FjdGlvbi50cz81N2E4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRyYW5zZmVyQ2hlY2tlZEluc3RydWN0aW9uLCBnZXRBc3NvY2lhdGVkVG9rZW5BZGRyZXNzLCBnZXRNaW50LCBnZXRPckNyZWF0ZUFzc29jaWF0ZWRUb2tlbkFjY291bnQgfSBmcm9tIFwiQHNvbGFuYS9zcGwtdG9rZW5cIlxyXG5pbXBvcnQgeyBXYWxsZXRBZGFwdGVyTmV0d29yayB9IGZyb20gXCJAc29sYW5hL3dhbGxldC1hZGFwdGVyLWJhc2VcIlxyXG5pbXBvcnQgeyBjbHVzdGVyQXBpVXJsLCBDb25uZWN0aW9uLCBLZXlwYWlyLCBQdWJsaWNLZXksIFRyYW5zYWN0aW9ufSBmcm9tIFwiQHNvbGFuYS93ZWIzLmpzXCJcclxuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCJcclxuaW1wb3J0IHsgY291cG9uQWRkcmVzcywgc2hvcEFkZHJlc3MsIHVzZGNBZGRyZXNzIH0gZnJvbSBcIi4uLy4uL2xpYi9hZGRyZXNzZXNcIlxyXG5pbXBvcnQgY2FsY3VsYXRlUHJpY2UgZnJvbSBcIi4uLy4uL2xpYi9jYWxjdWxhdGVQcmljZVwiXHJcbmltcG9ydCBiYXNlNTggZnJvbSBcImJzNThcIlxyXG5cclxuZXhwb3J0IHR5cGUgTWFrZVRyYW5zYWN0aW9uSW5wdXREYXRhID0ge1xyXG4gICAgYWNjb3VudDogc3RyaW5nLFxyXG59XHJcblxyXG50eXBlIE1ha2VUcmFuc2FjdGlvbkdldFJlc3BvbnNlID0ge1xyXG4gICAgbGFiZWw6IHN0cmluZyxcclxuICAgIGljb246IHN0cmluZyxcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTWFrZVRyYW5zYWN0aW9uT3V0cHV0RGF0YSA9IHtcclxuICAgIHRyYW5zYWN0aW9uOiBzdHJpbmcsXHJcbiAgICBtZXNzYWdlOiBzdHJpbmcsXHJcbn1cclxuXHJcbnR5cGUgRXJyb3JPdXRwdXQgPSB7XHJcbiAgICBlcnJvcjogc3RyaW5nXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldChyZXM6IE5leHRBcGlSZXNwb25zZTxNYWtlVHJhbnNhY3Rpb25HZXRSZXNwb25zZT4pIHtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICBsYWJlbDogXCJFdmVudHMgYW5kIE1hdGNoIFRpY2tldHNcIixcclxuICAgICAgICBpY29uOiBcImh0dHBzOi8vZnJlZXN2Zy5vcmcvaW1nL3RpY2tldC5wbmdcIlxyXG4gICAgfSlcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcG9zdChcclxuICAgIHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcbiAgICByZXM6IE5leHRBcGlSZXNwb25zZTxNYWtlVHJhbnNhY3Rpb25PdXRwdXREYXRhIHwgRXJyb3JPdXRwdXQ+XHJcbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBXZSBwYXNzIHRoZSBzZWxlY3RlZCBpdGVtcyBpbiB0aGUgcXVlcnksIGNhbGN1bGF0ZSB0aGUgZXhwZWN0ZWQgY29zdFxyXG4gICAgICAgIGNvbnN0IGFtb3VudCA9IGNhbGN1bGF0ZVByaWNlKHJlcS5xdWVyeSlcclxuICAgICAgICBpZiAoYW1vdW50LnRvTnVtYmVyKCkgPT09IDApIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogXCJDYW4ndCBjaGVja291dCB3aXRoIGNoYXJnZSBvZiAwXCJ9KVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFdlIHBhc3MgdGhlIHJlZmVyZW5jZSB0byB1c2UgaW4gdGhlIHF1ZXJ5XHJcbiAgICAgICAgY29uc3QgeyByZWZlcmVuY2UgfSA9IHJlcS5xdWVyeVxyXG4gICAgICAgIGlmICghcmVmZXJlbmNlKSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IFwiTm8gcmVmZXJlbmNlIHByb3ZpZGVkXCIgfSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBXZSBwYXNzIHRoZSBidXllcidzIHB1YmxpYyBrZXkgaW4gSlNPTiBib2R5XHJcbiAgICAgICAgY29uc3QgeyBhY2NvdW50IH0gPSByZXEuYm9keSBhcyBNYWtlVHJhbnNhY3Rpb25JbnB1dERhdGFcclxuICAgICAgICBpZiAoIWFjY291bnQpIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogXCJObyBhY2NvdW50IHByb3ZpZGVkXCJ9KVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFdlIGdldCB0aGUgc2hvcCBwcml2YXRlIGtleSBmcm9tIC5lbnYgLSB0aGlzIGlzIHRoZSBzYW1lIGFzIGluIG91ciBzY3JpcHRcclxuICAgICAgICBjb25zdCBzaG9wUHJpdmF0ZUtleSA9IHByb2Nlc3MuZW52LlNIT1BfUFJJVkFURV9LRVkgYXMgc3RyaW5nXHJcbiAgICAgICAgaWYgKCFzaG9wUHJpdmF0ZUtleSkge1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBcIlNob3AgcHJpdmF0ZSBrZXkgbm90IGF2YWlsYWJsZVwiIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNob3BLZXlwYWlyID0gS2V5cGFpci5mcm9tU2VjcmV0S2V5KGJhc2U1OC5kZWNvZGUoc2hvcFByaXZhdGVLZXkpKVxyXG5cclxuICAgICAgICBjb25zdCBidXllclB1YmxpY0tleSA9IG5ldyBQdWJsaWNLZXkoYWNjb3VudClcclxuICAgICAgICBjb25zdCBzaG9wUHVibGljS2V5ID0gc2hvcEtleXBhaXIucHVibGljS2V5XHJcblxyXG4gICAgICAgIGNvbnN0IG5ldHdvcmsgPSBXYWxsZXRBZGFwdGVyTmV0d29yay5EZXZuZXRcclxuICAgICAgICBjb25zdCBlbmRwb2ludCA9IGNsdXN0ZXJBcGlVcmwobmV0d29yaylcclxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gbmV3IENvbm5lY3Rpb24oZW5kcG9pbnQpXHJcblxyXG4gICAgICAgIC8vIEdldCB0aGUgYnV5ZXIgYW5kIHNlbGxlciBjb3Vwb24gdG9rZW4gYWNjb3VudHNcclxuICAgICAgICAvLyBCdXllciBvbmUgbWF5IG5vdCBleGlzdCwgc28gd2UgY3JlYXRlIGl0ICh3aGljaCBjb3N0cyBTT0wpIGFzIHRoZSBzaG9wIGFjY291bnQgaWYgaXQgZG9lc24ndFxyXG4gICAgICAgIGNvbnN0IGJ1eWVyQ291cG9uQWNjb3VudCA9IGF3YWl0IGdldE9yQ3JlYXRlQXNzb2NpYXRlZFRva2VuQWNjb3VudChcclxuICAgICAgICAgICAgY29ubmVjdGlvbixcclxuICAgICAgICAgICAgc2hvcEtleXBhaXIsIC8vIHNob3AgcGF5cyB0aGUgZmVlIHRvIGNyZWF0ZSBpdFxyXG4gICAgICAgICAgICBjb3Vwb25BZGRyZXNzLCAvLyB3aGljaCB0b2tlbiB0aGUgYWNjb3VudCBpcyBmb3JcclxuICAgICAgICAgICAgYnV5ZXJQdWJsaWNLZXksIC8vIHdobyB0aGUgdG9rZW4gYWNjb3VudCBiZWxvbmdzIHRvICh0aGUgYnV5ZXIpXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICBjb25zdCBzaG9wQ291cG9uQWRkcmVzcyA9IGF3YWl0IGdldEFzc29jaWF0ZWRUb2tlbkFkZHJlc3MoY291cG9uQWRkcmVzcywgc2hvcFB1YmxpY0tleSlcclxuXHJcbiAgICAgICAgLy8gSWYgdGhlIGJ1eWVyIGhhcyBhdGxlYXN0IDUgY291cG9ucywgdGhleSBjYW4gdXNlIHRoZW0gYW5kIGdldCBhIGRpc2NvdW50XHJcbiAgICAgICAgY29uc3QgYnV5ZXJHZXRzQ291cG9uRGlzY291bnQgPSBidXllckNvdXBvbkFjY291bnQuYW1vdW50ID49IDVcclxuXHJcbiAgICAgICAgLy8gR2V0IGRldGFpbHMgYWJvdXQgdGhlIFVTREMgdG9rZW5cclxuICAgICAgICBjb25zdCB1c2RjTWludCA9IGF3YWl0IGdldE1pbnQoY29ubmVjdGlvbiwgdXNkY0FkZHJlc3MpXHJcbiAgICAgICAgLy8gR2V0IHRoZSBidXllcidzIFVTREMgdG9rZW4gYWNjb3VudCBhZGRyZXNzXHJcbiAgICAgICAgY29uc3QgYnV5ZXJVc2RjQWRkcmVzcyA9IGF3YWl0IGdldEFzc29jaWF0ZWRUb2tlbkFkZHJlc3ModXNkY0FkZHJlc3MsIGJ1eWVyUHVibGljS2V5KVxyXG4gICAgICAgIC8vIEdldCB0aGUgc2hvcCdzIFVTREMgdG9rZW4gYWNjb3VudCBhZGRyZXNzXHJcbiAgICAgICAgY29uc3Qgc2hvcFVzZGNBZGRyZXNzID0gYXdhaXQgZ2V0QXNzb2NpYXRlZFRva2VuQWRkcmVzcyh1c2RjQWRkcmVzcywgc2hvcFB1YmxpY0tleSlcclxuXHJcbiAgICAgICAgLy8gR2V0IGEgcmVjZW50IGJsb2NraGFzaCB0byBpbmNsdWRlIGluIHRoZSB0cmFuc2FjdGlvblxyXG4gICAgICAgIGNvbnN0IHsgYmxvY2toYXNoIH0gPSBhd2FpdCAoY29ubmVjdGlvbi5nZXRMYXRlc3RCbG9ja2hhc2goJ2ZpbmFsaXplZCcpKVxyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IG5ldyBUcmFuc2FjdGlvbih7XHJcbiAgICAgICAgICAgIHJlY2VudEJsb2NraGFzaDogYmxvY2toYXNoLFxyXG4gICAgICAgICAgICAvLyBUaGUgYnV5ZXIgcGF5cyB0aGUgdHJhbnNhY3Rpb24gZmVlXHJcbiAgICAgICAgICAgIGZlZVBheWVyOiBidXllclB1YmxpY0tleSxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBJZiB0aGUgYnV5ZXIgaGFzIHRoZSBjb3Vwb24gZGlzY291bnQsIGRpdmlkZSB0aGUgYW1vdW50IGlzIFVTREMgYnkgMlxyXG4gICAgICAgIGNvbnN0IGFtb3VudFRvUGF5ID0gYnV5ZXJHZXRzQ291cG9uRGlzY291bnQgPyBhbW91bnQuZGl2aWRlZEJ5KDIpIDogYW1vdW50XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgaW5zdHJ1Y3Rpb24gdG8gc2VuZCBVU0RDIGZyb20gdGhlIGJ1eWVyIHRvIHRoZSBzaG9wXHJcbiAgICAgICAgY29uc3QgdHJhbnNmZXJJbnN0cnVjdGlvbiA9IGNyZWF0ZVRyYW5zZmVyQ2hlY2tlZEluc3RydWN0aW9uKFxyXG4gICAgICAgICAgICBidXllclVzZGNBZGRyZXNzLCAvLyBzb3VyY2VcclxuICAgICAgICAgICAgdXNkY0FkZHJlc3MsIC8vIG1pbnQgKHRva2VuIGFkZHJlc3MpXHJcbiAgICAgICAgICAgIHNob3BVc2RjQWRkcmVzcywgLy8gZGVzdGluYXRpb25cclxuICAgICAgICAgICAgYnV5ZXJQdWJsaWNLZXksIC8vIG93bmVyIG9mIHNvdXJjZSBhZGRyZXNzXHJcbiAgICAgICAgICAgIGFtb3VudFRvUGF5LnRvTnVtYmVyKCkgKiAoMTAgKiogKGF3YWl0IHVzZGNNaW50KS5kZWNpbWFscyksIC8vIGFtb3VudCB0byB0cmFuc2ZlciAoaW4gdW5pdHMgb2YgdGhlIFVTREMgdG9rZW4pXHJcbiAgICAgICAgICAgIHVzZGNNaW50LmRlY2ltYWxzLCAvLyBkZWNpbWFscyBvZiB0aGUgVVNEQyB0b2tlblxyXG4gICAgICAgICkgXHJcblxyXG4gICAgICAgIC8vIEFkZCB0aGUgcmVmZXJlbmNlIHRvIHRoZSBpbnN0cnVjdGlvbiBhcyBhIGtleVxyXG4gICAgICAgIC8vIFRoaXMgd2lsbCBtZWFuIHRoaXMgdHJhbnNhY3Rpb24gaXMgcmV0dXJuZWQgd2hlbiB3ZSBxdWVyeSBmb3IgdGhlIHJlZmVyZW5jZVxyXG4gICAgICAgIHRyYW5zZmVySW5zdHJ1Y3Rpb24ua2V5cy5wdXNoKHtcclxuICAgICAgICAgICAgcHVia2V5OiBuZXcgUHVibGljS2V5KHJlZmVyZW5jZSksXHJcbiAgICAgICAgICAgIGlzU2lnbmVyOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNXcml0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBpbnN0cnVjdGlvbiB0byBzZW5kIHRoZSBjb3Vwb24gZnJvbSB0aGUgc2hvcCB0byB0aGUgYnV5ZXJcclxuICAgICAgICBjb25zdCBjb3Vwb25JbnN0cnVjdGlvbiA9IGJ1eWVyR2V0c0NvdXBvbkRpc2NvdW50ID9cclxuICAgICAgICAvLyBUaGUgY291cG9uIGluc3RydWN0aW9uIGlzIHRvIHNlbmQgNSBjb3Vwb25zIGZyb20gdGhlIGJ1eWVyIHRvIHRoZSBzaG9wXHJcbiAgICAgICAgICAgIGNyZWF0ZVRyYW5zZmVyQ2hlY2tlZEluc3RydWN0aW9uKFxyXG4gICAgICAgICAgICBidXllckNvdXBvbkFjY291bnQuYWRkcmVzcywgLy8gc291cmNlIGFjY291bnQgKGNvdXBvbilcclxuICAgICAgICAgICAgY291cG9uQWRkcmVzcywgLy8gdG9rZW4gYWRkcmVzcyAoY291cG9uKVxyXG4gICAgICAgICAgICBzaG9wQ291cG9uQWRkcmVzcywgLy8gZGVzdGluYXRpb24gYWNjb3VudCAoY291cG9uKVxyXG4gICAgICAgICAgICBidXllclB1YmxpY0tleSwgLy8gb3duZXIgb2Ygc291cmNlIGFjY291bnRdXHJcbiAgICAgICAgICAgIDUsIC8vIGFtb3VudCB0byB0cmFuc2ZlclxyXG4gICAgICAgICAgICAwLCAvLyBkZWNpbWFscyBvZiB0aGUgdG9rZW4gLSB3ZSBrbm93IHRoaXMgaXMgMFxyXG4gICAgICAgICkgOlxyXG4gICAgICAgIC8vIFRoZSBjb3Vwb24gaW5zdHJ1Y3Rpb24gaXMgdG8gc2VuZCAxIGNvdXBvbiBmcm9tIHRoZSBzaG9wIHRvIHRoZSBidXllclxyXG4gICAgICAgIGNyZWF0ZVRyYW5zZmVyQ2hlY2tlZEluc3RydWN0aW9uKFxyXG4gICAgICAgICAgICBzaG9wQ291cG9uQWRkcmVzcywgLy8gc291cmNlIGFjY291bnQgKGNvdXBvbilcclxuICAgICAgICAgICAgY291cG9uQWRkcmVzcywgLy8gdG9rZW4gYWRkcmVzcyAoY291cG9uKVxyXG4gICAgICAgICAgICBidXllckNvdXBvbkFjY291bnQuYWRkcmVzcywgLy8gZGVzdGluYXRpb24gYWNjb3VudCAoY291cG9uKVxyXG4gICAgICAgICAgICBzaG9wUHVibGljS2V5LCAvLyBvd25lciBvZiBzb3VyY2UgYWNjb3VudFxyXG4gICAgICAgICAgICAxLCAvLyBhbW91bnQgdG8gdHJhbnNmZXJcclxuICAgICAgICAgICAgMCwgLy8gZGVjaW1hbHMgb2YgdGhlIHRva2VuIC0gd2Uga25vdyB0aGlzIGlzIDBcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIC8vIEFkZCB0aGUgc2hvcCBhcyBhIHNpZ25lciB0byB0aGUgY291cG9uIGluc3RydWN0aW9uXHJcbiAgICAgICAgLy8gSWYgdGhlIHNob3AgaXMgc2VuZGl0IGEgY291cG9uLCBpdCBhbHJlYWR5IHdpbGwgYmUgYSBzaWduZXJcclxuICAgICAgICAvLyBCdXQgaWYgdGhlIGJ1eWVyIGlzIHNlbmRpbmcgdGhlIGNvdXBvbnMsIHRoZSBzaG9wIHdvbid0IGJlIGEgc2lnbmVyIGF1dG9tYXRpY2FsbHlcclxuICAgICAgICAvLyBJdCdzIGEgdXNlZnVsIHNlY3VyaXR5IHRvIGhhdmUgdGhlIHNob3Agc2lnbiB0aGUgdHJhbnNhY3Rpb25cclxuICAgICAgICBjb3Vwb25JbnN0cnVjdGlvbi5rZXlzLnB1c2goe1xyXG4gICAgICAgICAgICBwdWJrZXk6IHNob3BQdWJsaWNLZXksXHJcbiAgICAgICAgICAgIGlzU2lnbmVyOiB0cnVlLFxyXG4gICAgICAgICAgICBpc1dyaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBBZGQgdGhlIGluc3RydWN0aW9uIHRvIHRoZSB0cmFuc2FjdGlvblxyXG4gICAgICAgIHRyYW5zYWN0aW9uLmFkZCh0cmFuc2Zlckluc3RydWN0aW9uLCBjb3Vwb25JbnN0cnVjdGlvbilcclxuXHJcbiAgICAgICAgLy8gU2lnbiB0aGUgdHJhbnNhY3Rpb24gYXMgdGhlIHNob3AsIHdoaWNoIGlzIHJlcXVpcmVkIHRvIHRyYW5zZmVyIGNvdXBvblxyXG4gICAgICAgIC8vIFdlIG11c3QgcGFydGlhbCBzaWduIGJlY2F1c2UgdGhlIHRyYW5zZmVyIGluc3RydWN0aW9uIHN0aWxsIHJlcXVpcmVzIHRoZSB1c2VyXHJcbiAgICAgICAgdHJhbnNhY3Rpb24ucGFydGlhbFNpZ24oc2hvcEtleXBhaXIpXHJcblxyXG4gICAgICAgIC8vIFNlcmlhbGl6ZSB0aGUgdHJhbnNhY3Rpb24gYW5kIGNvbnZlcnQgdG8gYmFzZTY0IHRvIHJldHVybiBpdFxyXG4gICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRUcmFuc2FjdGlvbiA9IHRyYW5zYWN0aW9uLnNlcmlhbGl6ZSh7XHJcbiAgICAgICAgICAgIC8vIFdlIHdpbGwgbmVlZCB0aGUgYnV5ZXIgdG8gc2lnbiB0aGlzIHRyYW5zYWN0aW9uIGFmdGVyIGl0J3MgcmV0dXJuZWQgdG8gdGhlbVxyXG4gICAgICAgICAgICByZXF1aXJlQWxsU2lnbmF0dXJlczogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IGJhc2U2NCA9IHNlcmlhbGl6ZWRUcmFuc2FjdGlvbi50b1N0cmluZygnYmFzZTY0JylcclxuXHJcbiAgICAgICAgLy8gSW5zZXJ0IGludG8gZGF0YWJhc2U6IHJlZmVyZW5jZSwgYW1vdW50XHJcblxyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBidXllckdldHNDb3Vwb25EaXNjb3VudCA/IFwiNTAlIERpc2NvdW50ISBOZXh0IFRpY2tldFwiIDogXCJUaGFua3MgZm9yIHlvdXIgb3JkZXIhXCJcclxuICAgICAgICBcclxuICAgICAgICAvLyBSZXR1cm4gdGhlIHNlcmlhbGl6ZWQgdHJhbnNhY3Rpb25cclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uOiBiYXNlNjQsXHJcbiAgICAgICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuXHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ2Vycm9yIGNyZWF0aW5nIHRyYW5zYWN0aW9uJywgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuICAgIHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcbiAgICByZXM6IE5leHRBcGlSZXNwb25zZTxNYWtlVHJhbnNhY3Rpb25HZXRSZXNwb25zZSB8IE1ha2VUcmFuc2FjdGlvbk91dHB1dERhdGEgfCBFcnJvck91dHB1dD5cclxuKSB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xyXG4gICAgICAgIHJldHVybiBnZXQocmVzKVxyXG4gICAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgICByZXR1cm4gYXdhaXQgcG9zdChyZXEsIHJlcylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6IFwiTWV0aG9kIG5vdCBhbGxvd2VkXCJ9KVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImNyZWF0ZVRyYW5zZmVyQ2hlY2tlZEluc3RydWN0aW9uIiwiZ2V0QXNzb2NpYXRlZFRva2VuQWRkcmVzcyIsImdldE1pbnQiLCJnZXRPckNyZWF0ZUFzc29jaWF0ZWRUb2tlbkFjY291bnQiLCJXYWxsZXRBZGFwdGVyTmV0d29yayIsImNsdXN0ZXJBcGlVcmwiLCJDb25uZWN0aW9uIiwiS2V5cGFpciIsIlB1YmxpY0tleSIsIlRyYW5zYWN0aW9uIiwiY291cG9uQWRkcmVzcyIsInVzZGNBZGRyZXNzIiwiY2FsY3VsYXRlUHJpY2UiLCJiYXNlNTgiLCJnZXQiLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwibGFiZWwiLCJpY29uIiwicG9zdCIsInJlcSIsImFtb3VudCIsInF1ZXJ5IiwidG9OdW1iZXIiLCJlcnJvciIsInJlZmVyZW5jZSIsImFjY291bnQiLCJib2R5Iiwic2hvcFByaXZhdGVLZXkiLCJwcm9jZXNzIiwiZW52IiwiU0hPUF9QUklWQVRFX0tFWSIsInNob3BLZXlwYWlyIiwiZnJvbVNlY3JldEtleSIsImRlY29kZSIsImJ1eWVyUHVibGljS2V5Iiwic2hvcFB1YmxpY0tleSIsInB1YmxpY0tleSIsIm5ldHdvcmsiLCJEZXZuZXQiLCJlbmRwb2ludCIsImNvbm5lY3Rpb24iLCJidXllckNvdXBvbkFjY291bnQiLCJzaG9wQ291cG9uQWRkcmVzcyIsImJ1eWVyR2V0c0NvdXBvbkRpc2NvdW50IiwidXNkY01pbnQiLCJidXllclVzZGNBZGRyZXNzIiwic2hvcFVzZGNBZGRyZXNzIiwiYmxvY2toYXNoIiwiZ2V0TGF0ZXN0QmxvY2toYXNoIiwidHJhbnNhY3Rpb24iLCJyZWNlbnRCbG9ja2hhc2giLCJmZWVQYXllciIsImFtb3VudFRvUGF5IiwiZGl2aWRlZEJ5IiwidHJhbnNmZXJJbnN0cnVjdGlvbiIsImRlY2ltYWxzIiwia2V5cyIsInB1c2giLCJwdWJrZXkiLCJpc1NpZ25lciIsImlzV3JpdGFibGUiLCJjb3Vwb25JbnN0cnVjdGlvbiIsImFkZHJlc3MiLCJhZGQiLCJwYXJ0aWFsU2lnbiIsInNlcmlhbGl6ZWRUcmFuc2FjdGlvbiIsInNlcmlhbGl6ZSIsInJlcXVpcmVBbGxTaWduYXR1cmVzIiwiYmFzZTY0IiwidG9TdHJpbmciLCJtZXNzYWdlIiwiZXJyIiwiY29uc29sZSIsImhhbmRsZXIiLCJtZXRob2QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/makeTransaction.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/makeTransaction.ts"));
module.exports = __webpack_exports__;

})();