sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller){
    "use strict";

    Controller.extend("booksample.controller.LandingPage", {
        onMenuPress(){
            const oSideNav = this.byId("sideNav"),
                bVisible = oSideNav.getVisible();

            oSideNav.setVisible(!bVisible);
        }
    });
});