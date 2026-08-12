using { sap.capire.bookshop as my } from '../db/schema';
service CatalogService @(path:'/browse') {

    //for displaying of lists of Books
    @readonly entity ListOfBooks as projection on my.Books{
        *, 
        author.name as author,
        currency.symbol as currency
    }
    excluding {descr};

    // for display in detail pages
    @readonly entity Books as projection on my.Books {
        *, //all fields with following denormalizations:
        author.name as author,
        genre.name as genre,
    } excluding {createdBy, modifiedBy};

    @requires: 'authenticated-user'
    action submitOrder ( book: Books:ID, quantity:Integer);
}

//serve via OData, HCQL, and REST
annotate CatalogService with @odata @hcql @rest;
