sap.ui.define(["booksample/controller/BaseController"], function (BaseController){
    "use strict";

    const SignUp = BaseController.extend("booksample.controller.SignUp", {
        onSignUpClick(){
            const router = this.getRouter();
            router.navTo("landingPage");
        }
    });

    return SignUp;
});