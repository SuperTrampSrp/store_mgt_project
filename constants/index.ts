import { MenuItem } from "@/types";
export const menuData: MenuItem[] = [
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
                submenu: ['Customer 1', 'Customer 2', 'Customer 3']
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
                submenu: ['Sales 1', 'Sales 2', 'Sales 3']
            },
            {
                title: 'Sales Return',
                submenu: ['Sales Return 1', 'Sales Return 2', 'Sales Return 3']
            },
            {
                title: 'Purchase',
                submenu: ['Purchase 1', 'Purchase 2', 'Purchase 3']
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
                submenu: ['Accounts 1', 'Accounts 2', 'Accounts 3']
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
    {
        "name": "Rice",
        "qty": 2,
        "unit": "kg",
        "rate": 50,
        "discPercent": 5,
        "disc": 5,
        "value": 95,
        "cgstPercent": 2.5,
        "cgst": 2.38,
        "sgstPercent": 2.5,
        "sgst": 2.38,
        "total": 99.76
    },
    {
        "name": "Wheat Flour",
        "qty": 5,
        "unit": "kg",
        "rate": 30,
        "discPercent": 10,
        "disc": 15,
        "value": 135,
        "cgstPercent": 2.5,
        "cgst": 3.38,
        "sgstPercent": 2.5,
        "sgst": 3.38,
        "total": 141.76
    },
    {
        "name": "Sugar",
        "qty": 3,
        "unit": "kg",
        "rate": 40,
        "discPercent": 0,
        "disc": 0,
        "value": 120,
        "cgstPercent": 2.5,
        "cgst": 3,
        "sgstPercent": 2.5,
        "sgst": 3,
        "total": 126
    },
    {
        "name": "Cooking Oil",
        "qty": 2,
        "unit": "litre",
        "rate": 150,
        "discPercent": 5,
        "disc": 15,
        "value": 285,
        "cgstPercent": 2.5,
        "cgst": 7.13,
        "sgstPercent": 2.5,
        "sgst": 7.13,
        "total": 299.26
    },
    {
        "name": "Milk",
        "qty": 6,
        "unit": "litre",
        "rate": 50,
        "discPercent": 0,
        "disc": 0,
        "value": 300,
        "cgstPercent": 2.5,
        "cgst": 7.5,
        "sgstPercent": 2.5,
        "sgst": 7.5,
        "total": 315
    }
]

