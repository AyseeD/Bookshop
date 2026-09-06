sap.ui.define(["booksample/controller/BaseController"], function(BaseController){
    "use strict";

    const BookDetail = BaseController.extend("booksample.controller.BookDetail", {
        onInit(){
            const oRouter = this.getRouter();
            oRouter.getRoute("bookDetail").attachPatternMatched(this.onObjectMatched, this);
        },

        onObjectMatched(oEvent){
            const sBookId = oEvent.getParameter("arguments").bookId;

            this.getView().bindElement({
                path: `/Books(${sBookId})`
            });
        }
    });

    return BookDetail;
})