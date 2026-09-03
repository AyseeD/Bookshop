sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/UIComponent", "sap/ui/core/routing/History"], function(Controller, UIComponent, History){
    "use strict";

    const BaseController = Controller.extend("booksample.controller.BaseController",{
        /**Get the router
         * @returns The router
        */
        getRouter(){
            return UIComponent.getRouterFor(this);
        },

        /**Navigation back using if history exists the previous hash,
         * if no history nav back to landing page
         */
        onNavBack(){
            const history = History.getInstance();
            const previousHash = history.getPreviousHash();

            if(previousHash !== undefined)
                window.history.go(-1);
            else
                this.getRouter().navTo("landingPage", {}, true); //true = make sure hash is replaced
        }
    });

    return BaseController;
});