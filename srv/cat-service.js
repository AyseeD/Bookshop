import cds from "@sap/cds";

export class CatalogService extends cds.ApplicationService{
    init() {
        const {Books} = cds.entities ('sap.capire.bookshop');

        //After READ handler on Book to add discount info
        this.after ('READ', 'Books', results => results.forEach(book => {
            if (book.stock > 111) book.title += ` -- 11% discount!`
        }));

        //action handler for submitOrder
        this.on ('submitOrder', async req => {
            let { book:id, quantity } = req.data
            let affected = await UPDATE (Books,id)
            .with `stock = stock - ${quantity}`
            .where `stock >= ${quantity}`
            if (!affected) req.error `${quantity} exceeds stock for book #${id}`
        })

        return super.init();
    }
    
}