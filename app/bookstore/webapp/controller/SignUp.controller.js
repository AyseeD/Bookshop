sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/core/UIComponent"], function (Controller, UIComponent){
    "use strict";

    return Controller.extend("booksample.controller.SignUp", {
        onSignUpClick(){
            const router = UIComponent.getRouterFor(this);
            router.navTo("landingPage");
        }
    });
});