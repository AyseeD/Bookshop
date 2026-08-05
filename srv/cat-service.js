import cds from "@sap/cds";

export class CatalogService extends cds.ApplicationService{
    init() {
        //After READ handler on Book to add discount info
        this.after ('READ', 'Books', results => results.forEach(book => {
            if (book.stock > 111) book.title += ` -- 11% discount!`
        }));

        return super.init();
    }
}