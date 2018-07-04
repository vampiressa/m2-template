'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function') {
    r = Reflect.decorate(decorators, target, key, desc);
  }
  else {
    for (var i = decorators.length - 1; i >= 0; i--) {
      if (d = decorators[i]) {
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
    }
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, '__esModule', {value: true});
var core_1 = require('@angular/core');
var patterns_constants_1 = require('@core/constants/patterns.constants');
var OauthService = /** @class */ (function () {
  function OauthService(router) {
    this.router = router;
    this._regex = window.location.href.match(patterns_constants_1.PatternsConstant.token);
    this._urlToken = this._regex ? this._regex[1] : null;
    this._storageToken = localStorage.getItem('token');
  }

  OauthService.prototype.init = function () {
    // local dev
    // localStorage.setItem('token', 'ukA8sz6V9f7V88ya3jJ24giHSMGCNzKk');
    // prod bitrix
    if (this._urlToken) {
      localStorage.setItem('token', this._urlToken);
      // get user info
    }
    else {
      this.router.stateService.go('404');
    }
  };
  OauthService = __decorate([
    core_1.Injectable()
  ], OauthService);
  return OauthService;
}());
exports.OauthService = OauthService;
