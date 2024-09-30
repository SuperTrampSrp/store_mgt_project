export const menuData: MenuItemProps[] = [
    {
        title: 'File',
        submenu: [
            {
                title: 'Printer Settings',
            },
            {
                title: 'Biltech Settings'
            },
            {
                title: 'Exit'
            }
        ]
    },
    {
        title: 'Master',
        submenu: [
            {
                title: 'Accounts',
                submenu: ['Accounts 1', 'Accounts 2', 'Accounts 3']
            },
            {
                title: 'Customer',
                submenu: ['Customer', 'Type',]
            },
            {
                title: 'Supplier',
            },
            {
                title: 'Staff',
            },
            {
                title: 'Vehicle',
            },
            {
                title: 'Items',
                submenu: ['Items 1', 'Items 2', 'Items 3']
            },
            {
                title: 'Route',
            },
            {
                title: 'City',
            },
            {
                title: 'Town',
            },
            {
                title: 'District',
            },
            {
                title: 'Bill Type',
            },
            {
                title: 'Counter',
            },
            {
                title: 'User',
                submenu: ['User 1', 'User 2', 'User 3']
            },

        ]
    },
    {
        title: 'Transactions',
        submenu: [
            {
                title: 'Sales',
                submenu: ['New', 'Edit', 'Cancel', 'Reprint']
            },
            {
                title: 'Sales Return',
                submenu: ['Sales Return 1', 'Sales Return 2', 'Sales Return 3']
            },
            {
                title: 'Purchase',
                submenu: ['Bill', 'Edit', 'Cancel']
            },
            {
                title: 'Purchase Return',
                submenu: ['Purchase Return 1', 'Purchase Return 2', 'Purchase Return 3']
            },
            {
                title: 'Rent Issue',
                submenu: ['Rent Issue 1', 'Rent Issue 2', 'Rent Issue 3']
            },
            {
                title: 'Rent Return',
                submenu: ['Rent Return 1', 'Rent Return 2', 'Rent Return 3']
            },
            {
                title: 'Order',
                submenu: ['Order 1', 'Order 2', 'Order 3']
            },
            {
                title: 'Items Add Less',
            },
            {
                title: 'Barcode',
            },
            {
                title: 'Accounts',
                submenu: ['Receipt', 'Payment', 'Edit Rcpt/Pymt', 'Cancel Rcpt/Pymt', 'Jurnal Entry', 'Cheque Register']
            },
            {
                title: 'Debit Note',
                submenu: ['Debit Note 1', 'Debit Note 2', 'Debit Note 3']
            },
            {
                title: 'Credit Note',
                submenu: ['Credit Note 1', 'Credit Note 2', 'Credit Note 3']
            },
            {
                title: 'Staff',
                submenu: ['Staff 1', 'Staff 2', 'Staff 3']
            },

        ]
    },
    {
        title: 'Reports',
        submenu: [
            {
                title: 'Sales',
            },
            {
                title: 'Sales Return',
            },
            {
                title: 'Purchase',
            },
            {
                title: 'Purchase Return',
            },
            {
                title: 'Rent Issue',
            },
            {
                title: 'Rent Return',
            },
            {
                title: 'Order',
            },
            {
                title: 'Items',
            },
            {
                title: 'Customer',
            },
            {
                title: 'Supplier',
            },
            {
                title: 'Staff',
            },
            {
                title: 'Accounts',
                submenu: ['A/c Ledger', 'Daybook', 'Cashbook', 'Rcpt/Pymt Report', 'Cheque Register', 'Chart of Accounts', 'Trial Balance', 'Balance Sheet', 'Profit Loss']
            },
            {
                title: 'Sales',
            },
            {
                title: 'Profit Register',
            },
            {
                title: 'Barcode Register',
            },
            {
                title: 'Barcode Duplicity',
            },
            {
                title: 'Transaction Analysis',
            },

        ]
    },
    {
        title: 'Utilites',
        submenu: [
            {
                title: 'Calculator',
            },
            {
                title: 'Reminder',
            },
            {
                title: 'Calendar',
            },
            {
                title: 'Backup',
            },
            {
                title: 'Import',
            },
            {
                title: 'SMS',
            },

        ]
    },
    {
        title: 'Help',
    },
];



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

