sap.ui.define(["booksample/controller/BaseController"], function(BaseController){
    "use strict";

    const BookList = BaseController.extend("booksample.controller.BookList", {
        /**When an item in the booklist is clicked open book detail page */
        onBookListPress(){
            const router = this.getRouter();
            router.navTo("bookDetail");
        }
    });
});