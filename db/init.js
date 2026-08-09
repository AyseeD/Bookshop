import cds from '@sap/cds';

/**
 * no reuse dependency yet. This init ensures that there is still 
 * a min set of currencies
 */

module.exports = cds.on('served', () =>
    UPSERT.into ('sap.common.Currencies') .columns (
        [ 'code', 'symbol', 'name' ]
    ) .rows (
        [ 'EUR', '€', 'Euro' ],
        [ 'USD', '$', 'US Dollar' ],
        [ 'GBP', '£', 'British Pound' ],
        [ 'ILS', '₪', 'Shekel' ],
        [ 'JPY', '¥', 'Yen' ],
    )
)