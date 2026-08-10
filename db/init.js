import cds from '@sap/cds';

/**
 * no reuse dependency yet. This init ensures that there is still 
 * a min set of currencies
 */

export default async db => {
    const { Currencies } = cds.entities('sap.common');

    await db.run(
        cds.ql.UPSERT.into ( Currencies) .columns (
            [ 'code', 'symbol', 'name' ]
        ) .rows (
            [ 'EUR', '€', 'Euro' ],
            [ 'USD', '$', 'US Dollar' ],
            [ 'GBP', '£', 'British Pound' ],
            [ 'ILS', '₪', 'Shekel' ],
            [ 'JPY', '¥', 'Yen' ],
        )
    )
}