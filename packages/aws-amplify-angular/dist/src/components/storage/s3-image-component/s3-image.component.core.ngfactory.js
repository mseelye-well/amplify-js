/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "./s3-image.component.core";
import * as i2 from "../../../providers/amplify.service";
var styles_S3ImageComponentCore = [];
var RenderType_S3ImageComponentCore = i0.ɵcrt({ encapsulation: 2, styles: styles_S3ImageComponentCore, data: {} });
export { RenderType_S3ImageComponentCore as RenderType_S3ImageComponentCore };
export function View_S3ImageComponentCore_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["\n  "])), (_l()(), i0.ɵeld(1, 0, null, null, 0, "img", [["class", "amplify-image"]], [[8, "src", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onImageClicked() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["\n"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵinlineInterpolate(1, "", _co.url, ""); _ck(_v, 1, 0, currVal_0); }); }
export function View_S3ImageComponentCore_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "amplify-s3-image-core", [], null, null, null, View_S3ImageComponentCore_0, RenderType_S3ImageComponentCore)), i0.ɵdid(1, 114688, null, 0, i1.S3ImageComponentCore, [i2.AmplifyService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var S3ImageComponentCoreNgFactory = i0.ɵccf("amplify-s3-image-core", i1.S3ImageComponentCore, View_S3ImageComponentCore_Host_0, { data: "data", path: "path", options: "options" }, { selected: "selected" }, []);
export { S3ImageComponentCoreNgFactory as S3ImageComponentCoreNgFactory };
//# sourceMappingURL=s3-image.component.core.ngfactory.js.map