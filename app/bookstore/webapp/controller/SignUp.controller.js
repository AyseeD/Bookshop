sap.ui.define(["booksample/controller/BaseController"], function (BaseController){
    "use strict";

    const SignUp = BaseController.extend("booksample.controller.SignUp", {
        /**Navigate back to the landing page after sign up */
        onSignUpClick(){
            const router = this.getRouter();
            router.navTo("landingPage");
        }
    });

    return SignUp;
});