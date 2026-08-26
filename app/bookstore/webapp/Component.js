sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel", "sap/ui/Device"], function (UIComponent, JSONModel, Device){
    "use strict";

    const Component = UIComponent.extend("booksample.Component",{
        metadata: {
            "interfaces": ["sap.ui.core.IAsyncContentCreation"],
            "manifest": "json"
        },
        init(){
            //call init of parent
            UIComponent.prototype.init.call(this);

            //set device model
            const deviceModel = new JSONModel(Device);
            deviceModel.setDefaultBindingMode("OneWay");
            this.setModel(deviceModel, "device");

            this.getRouter().initialize();
        }
    });
    return Component;
});