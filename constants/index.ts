
export const groceryItems = [
    { value: "rice", label: "Rice" },
    { value: "wheat", label: "Wheat" },
    { value: "sugar", label: "Sugar" },
    { value: "salt", label: "Salt" },
    { value: "flour", label: "Flour" },
    { value: "lentils", label: "Lentils" },
    { value: "chickpeas", label: "Chickpeas" },
    { value: "red_kidney_beans", label: "Red Kidney Beans" },
    { value: "black_beans", label: "Black Beans" },
    { value: "quinoa", label: "Quinoa" },
    { value: "pasta", label: "Pasta" },
    { value: "noodles", label: "Noodles" },
    { value: "spaghetti", label: "Spaghetti" },
    { value: "olive_oil", label: "Olive Oil" },
    { value: "vegetable_oil", label: "Vegetable Oil" },
    { value: "peanut_oil", label: "Peanut Oil" },
    { value: "butter", label: "Butter" },
    { value: "ghee", label: "Ghee" },
    { value: "milk", label: "Milk" },
    { value: "yogurt", label: "Yogurt" },
    { value: "cheese", label: "Cheese" },
    { value: "eggs", label: "Eggs" },
    { value: "bread", label: "Bread" },
    { value: "oats", label: "Oats" },
    { value: "cornflakes", label: "Cornflakes" },
    { value: "honey", label: "Honey" },
    { value: "jam", label: "Jam" },
    { value: "peanut_butter", label: "Peanut Butter" },
    { value: "potatoes", label: "Potatoes" },
    { value: "onions", label: "Onions" },
    { value: "garlic", label: "Garlic" },
    { value: "ginger", label: "Ginger" },
    { value: "tomatoes", label: "Tomatoes" },
    { value: "cucumber", label: "Cucumber" },
    { value: "carrots", label: "Carrots" },
    { value: "bell_peppers", label: "Bell Peppers" },
    { value: "broccoli", label: "Broccoli" },
    { value: "spinach", label: "Spinach" },
    { value: "cabbage", label: "Cabbage" },
    { value: "cauliflower", label: "Cauliflower" },
    { value: "apples", label: "Apples" },
    { value: "bananas", label: "Bananas" },
    { value: "oranges", label: "Oranges" },
    { value: "grapes", label: "Grapes" },
    { value: "lemons", label: "Lemons" },
    { value: "strawberries", label: "Strawberries" },
    { value: "blueberries", label: "Blueberries" },
    { value: "watermelon", label: "Watermelon" },
    { value: "pineapple", label: "Pineapple" }
];

export const cashbookEntries: CashbookEntry[] = [
    {
        date: "2024-09-29",
        voucherNo: "V001",
        accName: "Cash Account",
        narration: "Payment received for services",
        debit: 0,
        credit: 1000,
    },
    {
        date: "2024-09-28",
        voucherNo: "V002",
        accName: "Sales Account",
        narration: "Sale of goods",
        debit: 5000,
        credit: 0,
    },
];

export const barcodeEntries: BarcodeEntry[] = [
    {
        date: "2024-09-29",
        itemName: "Soap",
        company: "CleanCo",
        size: "100g",
        barcode: "1234567890123",
        qty: 50,
        purchaseRate: 20,
        free: 2,
        saleRate: 25,
        mrp: 30,
        print: true,
    },
    {
        date: "2024-09-28",
        itemName: "Shampoo",
        company: "HairCare Inc.",
        size: "200ml",
        barcode: "9876543210987",
        qty: 100,
        purchaseRate: 150,
        free: 5,
        saleRate: 180,
        mrp: 200,
        print: false,
    },
];

export const menuData: MenuItem[] = [
    {
        label: 'File',
        items: [
            { label: 'Printer Settings' }, { label: 'Biltech Settings' }, { label: 'Exit' }
        ]
    },
    {
        label: 'Master',
        items: [
            {
                label: 'Accounts',
                items: [
                    { label: 'Accounts 1' },
                    { label: 'Accounts 2' },
                    { label: 'Accounts 3' },
                ]
            },
            {
                label: 'Customer',
                items: [
                    { label: 'Customer' },
                    { label: 'Type' },
                ]
            },
            {
                label: 'Supplier',
            },
            {
                label: 'Staff',
            },
            {
                label: 'Vehicle',
            },
            {
                label: 'Items',
                items: [
                    { label: 'Items 1' },
                    { label: 'Items 2' },
                ]
            },
            {
                label: 'Route',
            },
            {
                label: 'City',
            },
            {
                label: 'Town',
            },
            {
                label: 'District',
            },
            {
                label: 'Bill Type',
            },
            {
                label: 'Counter',
            },
            {
                label: 'User',
                items: [
                    { label: 'User 1' },
                    { label: 'User 2' },
                    { label: 'User 3' },
                ]
            },
        ]
    },
    {
        label: 'Transactions',
        items: [
            {
                label: 'Sales',
                items: [
                    { label: 'New' },
                    { label: 'Edit' },
                    { label: 'Cancel' },
                    { label: 'Reprint' },
                ]
            },
            {
                label: 'Sales Return',
                items: [
                    { label: 'Sales Return 1' },
                    { label: 'Sales Return 2' },
                    { label: 'Sales Return 3' },
                    { label: 'Sales Return 4' },
                ]
            },
            {
                label: 'Purchase',
                items: [
                    { label: 'Bill' },
                    { label: 'Edit' },
                    { label: 'Cancel' },
                ]
            },
            {
                label: 'Purchase Return',
                items: [
                    { label: 'Purchase Return 1' },
                    { label: 'Purchase Return 2' },
                    { label: 'Purchase Return 3' },
                    { label: 'Purchase Return 4' },
                ]
            },
            {
                label: 'Rent Issue',
                items: [
                    { label: 'Rent Issue 1' },
                    { label: 'Rent Issue 2' },
                    { label: 'Rent Issue 3' },
                    { label: 'Rent Issue 4' },
                ]
            },
            {
                label: 'Rent Return',
                items: [
                    { label: 'Rent Return 1' },
                    { label: 'Rent Return 2' },
                    { label: 'Rent Return 3' },
                    { label: 'Rent Return 4' },
                ]
            },
            {
                label: 'Order',
                items: [
                    { label: 'Order 1' },
                    { label: 'Order 2' },
                    { label: 'Order 3' },
                    { label: 'Order 4' },
                ]
            },
            {
                label: 'Items Add Less',
            },
            {
                label: 'Barcode',
            },
            {
                label: 'Accounts',
                items: [
                    { label: 'Receipt' },
                    { label: 'Payment' },
                    { label: 'Edit Rcpt/Pymt' },
                    { label: 'Cancel Rcpt/Pymt' },
                    { label: 'Jurnal Entry' },
                    { label: 'Cheque Register' },
                ]
            },
            {
                label: 'Debit Note',
                items: [
                    { label: 'Debit Note 1' },
                    { label: 'Debit Note 2' },
                    { label: 'Debit Note 3' },
                    { label: 'Debit Note 4' },
                ]
            },
            {
                label: 'Credit Note',
                items: [
                    { label: 'Credit Note 1' },
                    { label: 'Credit Note 2' },
                    { label: 'Credit Note 3' },
                    { label: 'Credit Note 4' },
                ]
            },
            {
                label: 'Staff',
                items: [
                    { label: 'Staff 1' },
                    { label: 'Staff 2' },
                    { label: 'Staff 3' },
                    { label: 'Staff 4' },
                ]
            },
        ]
    },
    {
        label: 'Reports',
        items: [
            {
                label: 'Sales',
            },
            {
                label: 'Sales Return',
            },
            {
                label: 'Purchase',
            },
            {
                label: 'Purchase Return',
            },
            {
                label: 'Rent Issue',
            },
            {
                label: 'Rent Return',
            },
            {
                label: 'Order',
            },
            {
                label: 'Items',
            },
            {
                label: 'Customer',
            },
            {
                label: 'Supplier',
            },
            {
                label: 'Staff',
            },
            {
                label: 'Accounts',
                items: [
                    { label: 'A/c Ledger' },
                    { label: 'Daybook' },
                    { label: 'Cashbook' },
                    { label: 'Rcpt/Pymt Report' },
                    { label: 'Cheque Register' },
                    { label: 'Chart of Accounts' },
                    { label: 'Trial Balance' },
                    { label: 'Balance Sheet' },
                    {
                        label: 'Profit Loss',
                        items: [
                            { label: 'Upto Date' },
                            { label: 'TPL Report' }
                        ]
                    }
                ]
            },
            {
                label: 'Sales',
            },
            {
                label: 'Profit Register',
            },
            {
                label: 'Barcode Register',
            },
            {
                label: 'Barcode Duplicity',
            },
            {
                label: 'Transaction Analysis',
            },
        ]
    },
    {
        label: 'Services',
        items: [
            {
                label: 'Calculator',
            },
            {
                label: 'Reminder',
            },
            {
                label: 'Calendar',
            },
            {
                label: 'Backup',
            },
            {
                label: 'Import',
            },
            {
                label: 'SMS',
            },
        ]
    },
    {
        label: 'Help',
    }
];