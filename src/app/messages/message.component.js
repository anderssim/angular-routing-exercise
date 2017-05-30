"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var message_service_1 = require('../messages/message.service');
var MessageComponent = (function () {
    function MessageComponent(messageService, router) {
        this.messageService = messageService;
        this.router = router;
    }
    MessageComponent.prototype.close = function () {
        this.router.navigate([{ outlets: { popup: null } }]);
        this.messageService.isDisplayed = false;
    };
    MessageComponent = __decorate([
        core_1.Component({
            template: "\n        <div class=\"row\">\n            <h4 class=\"col-md-10\">Message Log</h4>\n            <span class=\"col-md-2\">\n                <a class=\"btn btn-default\"\n                    (click)=\"close()\">\n                    x\n                </a>\n            </span>\n        </div>\n        <div *ngFor=\"let message of messageService.messages; let i=index\">\n            <div *ngIf=\"i<10\" class=\"message-row\">\n                {{ message }}\n            </div>\n        </div>\n    ",
            styles: [
                '.message-row { margin-bottom: 10px }'
            ]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService, router_1.Router])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;
//# sourceMappingURL=message.component.js.map