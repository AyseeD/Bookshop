using { Currency, cuid,managed, sap } from '@sap/cds/common';
namespace sap.capire.bookshop; //custom namespace


entity Authors : managed {
    key ID: Integer;
    name: String @mandatory;
    dateOfBirth: Date;
    dateOfDeath: Date;
    placeOfBirth: String;
    placeOfDeath: String;
    books: Association to many Books on books.author = $self;
}

entity Books : managed { 
    key ID: Integer;
    title: localized String @mandatory;
    descr: localized String(2000);
    author: Association to Authors @mandatory;
    genre: Association to Genres;
    stock: Integer;
    price: Price;
    currency: Currency;
    image: String;
}

entity Genres : cuid, sap.common.CodeList {
    parent: Association to Genres;
    children: Composition of many Genres on children.parent = $self;
    icon: String
}

type Price : Decimal(9,2);

// - Fiori apps in bookstore annotate Books with @fiori.draft.enabled.
// - Because of that .csv data has to eagerly fill in ID_texts column.
annotate Books with @fiori.draft.enabled;