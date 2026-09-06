sap.ui.define(["booksample/controller/BaseController"], function(BaseController){
    "use strict";

    const BookList = BaseController.extend("booksample.controller.BookList", {
        /**When an item in the booklist is clicked open book detail page */
        onBookListPress(oEvent){
            const oItem = oEvent.getSource();

            const oBook = oItem.getBindingContext().getObject();

            const router = this.getRouter();
            router.navTo("bookDetail", {
                bookId: oBook.ID
            });
        }
    });
    
    return BookList;
});