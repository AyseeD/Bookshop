using { sap.capire.bookshop as my } from '../db/schema';
service CatalogService @(path:'/browse') {

    //for displaying of lists of Books
    @readonly entity ListOfBook as projection on Books{
        *, currency.symbol as currency
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
