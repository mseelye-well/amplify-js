/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./require-new-password.component.ionic";
import * as i3 from "../../../providers/amplify.service";
var styles_RequireNewPasswordComponentIonic = [];
var RenderType_RequireNewPasswordComponentIonic = i0.ɵcrt({ encapsulation: 2, styles: styles_RequireNewPasswordComponentIonic, data: {} });
export { RenderType_RequireNewPasswordComponentIonic as RenderType_RequireNewPasswordComponentIonic };
function View_RequireNewPasswordComponentIonic_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 13, "div", [["class", "amplify-alert"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(2, 0, null, null, 10, "div", [["class", "amplify-alert-body"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(4, 0, null, null, 1, "span", [["class", "amplify-alert-icon"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u26A0"])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(7, 0, null, null, 1, "div", [["class", "amplify-alert-message"]], null, null, null, null, null)), (_l()(), i0.ɵted(8, null, ["", ""])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(10, 0, null, null, 1, "a", [["class", "amplify-alert-close"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onAlertClose() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["\u00D7"])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n  "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.errorMessage; _ck(_v, 8, 0, currVal_0); }); }
function View_RequireNewPasswordComponentIonic_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 36, "div", [["class", "amplify-authenticator amplify-authenticator-ionic"], ["data-test", "require-new-password-section"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n  "])), (_l()(), i0.ɵeld(2, 0, null, null, 30, "div", [["class", "amplify-form-body"], ["data-test", "require-new-password-body-section"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(4, 0, null, null, 1, "div", [["class", "amplify-form-header amplify-form-header-ionic"], ["data-test", "require-new-password-header-section"]], null, null, null, null, null)), (_l()(), i0.ɵted(5, null, ["\n      ", "\n    "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(7, 0, null, null, 9, "ion-list", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(9, 0, null, null, 6, "ion-item", [["lines", "none"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(11, 0, null, null, 1, "ion-label", [["class", "amplify-input-label amplify-input-label-ionic"], ["position", "stacked"]], null, null, null, null, null)), (_l()(), i0.ɵted(12, null, ["\n          ", "\n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(14, 0, [["password", 1]], null, 0, "ion-input", [["class", "amplify-form-input"], ["data-test", "require-new-password-new-password-input"], ["type", "password"]], null, [[null, "keyup"], [null, "keyup.enter"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keyup" === en)) {
        var pd_0 = (_co.setPassword(i0.ɵnov(_v, 14).value) !== false);
        ad = (pd_0 && ad);
    } if (("keyup.enter" === en)) {
        var pd_1 = (_co.onSubmit() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n\n    "])), (_l()(), i0.ɵted(-1, null, ["\n\n    "])), (_l()(), i0.ɵeld(18, 0, null, null, 13, "div", [["class", "amplify-form-actions"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(20, 0, null, null, 4, "div", [["class", "amplify-form-row"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(22, 0, null, null, 1, "ion-button", [["data-test", "require-new-password-back-to-sign-in-link"], ["expand", "block"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onSignIn() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(23, null, ["", ""])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(26, 0, null, null, 4, "div", [["class", "amplify-form-row"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(28, 0, null, null, 1, "ion-button", [["data-test", "require-new-password-submit-button"], ["expand", "block"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onSubmit() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["Submit"])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n  "])), (_l()(), i0.ɵted(-1, null, ["\n  "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_RequireNewPasswordComponentIonic_2)), i0.ɵdid(35, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.errorMessage; _ck(_v, 35, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.amplifyService.i18n().get("Reset your password"); _ck(_v, 5, 0, currVal_0); var currVal_1 = _co.amplifyService.i18n().get("Password"); _ck(_v, 12, 0, currVal_1); var currVal_2 = _co.amplifyService.i18n().get("Back to Sign In"); _ck(_v, 23, 0, currVal_2); }); }
export function View_RequireNewPasswordComponentIonic_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_RequireNewPasswordComponentIonic_1)), i0.ɵdid(2, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co._show; _ck(_v, 2, 0, currVal_0); }, null); }
export function View_RequireNewPasswordComponentIonic_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "amplify-auth-require-new-password-ionic", [], null, null, null, View_RequireNewPasswordComponentIonic_0, RenderType_RequireNewPasswordComponentIonic)), i0.ɵdid(1, 114688, null, 0, i2.RequireNewPasswordComponentIonic, [i3.AmplifyService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var RequireNewPasswordComponentIonicNgFactory = i0.ɵccf("amplify-auth-require-new-password-ionic", i2.RequireNewPasswordComponentIonic, View_RequireNewPasswordComponentIonic_Host_0, { authState: "authState", hide: "hide", data: "data" }, {}, []);
export { RequireNewPasswordComponentIonicNgFactory as RequireNewPasswordComponentIonicNgFactory };
//# sourceMappingURL=require-new-password.component.ionic.ngfactory.js.map