export interface Product {
  name: string,
  features: string[],
  images: string[],
  subUrls: string[]
  price: price,
  id: string,
  mainUrl:string,
  category:string,
  offerPrice:number,
  rawPrice:number
}

interface price {
  actual: string,
  offer: string
}

// export const PRODUCTS: Product[] = [
//   {
//     "name": "PURELLA SLEEK",
//     "id": "1",
//     "features": [
//       "UV + UF + Alkaline + Copper",
//       "Dual Sealing protection for tank",
//       "Interactive LED Display",
//       "5 stages of purification",
//       "Long Filter life upto 7200* liters",
//       "Purifies upto 3000* TDS",
//       "ISI Ceritified Purifier",
//       "Drip Tray",
//       "Zero Water Wastage",
//       "NSF WPS & ROHs Certified filter",
//       "401 x 177 x 271 mm (LxWxH)"
//     ],
//     "desc": "",
//     "colors": [
//       "white"
//     ],
//     "images": ["PURELLA_SLEEK.png"],
//     "isRecommended": true,
//     "price": {
//       "actual": "10000.00",
//       "offer": "9000.00"
//     }
//   },
//   {
//     "id": "2",
//     "name": "PURELLA SUPRA+",
//     "features": [
//       "Min. 40% Water Recovery",
//       "Smart LED Display",
//       "Long Filter life upto 7200* liters",
//       "8.5 litre water capacity",
//       "Purifies upto 3000* TDS",
//       "ISI Ceritified Purifier",
//       "NSF WPS & ROHs Certified filter",
//       "8 Stages of advanced Purification",
//       "33.8 x 31.4 x 49.6 wxdxh (cm)"
//     ],
//     "desc": "",
//     "colors": [
//       "brown",
//       "black",
//       "purple"
//     ],
//     "images": ["Supra-Brown.jpeg", "Supra-Black.jpeg", "Supra-Purple.jpeg"],
//     "isRecommended": true,
//     "price": {
//       "actual": "10000.00",
//       "offer": "9000.00"
//     }
//   },
//   {
//     "id": "3",
//     "name": "CRS CORAL",
//     "features": [
//       "Tabel top adn wall mount",
//       "9 litre water storage",
//       "Float Clamp & Tap included with cabinet",
//       "master packing of 2pcs",
//       "Front assembly"
//     ],
//     "desc": "",
//     "colors": [
//       "black",
//       "white"
//     ],
//     "images": ["crs_coral_white.jpg", "crs_coral_black.jpg"],
//     "isRecommended": false,
//     "price": {
//       "actual": "10000.00",
//       "offer": "9000.00"
//     }
//   },
//   {
//     "id": "4",
//     "name": "BLUESIS 25 LPH",
//     "features": [
//       "25 LPH RO + UR + Auto TDS Controller",
//       "Toughten glass fully cover skid",
//       "Mix Water Housing Auto TDS",
//       "24V 3.5 AMP SMPS",
//       "100 GPD Pump 1nos (auto TDS)",
//       "300 GM Membrane housing 2nos",
//       "300 GPD Pump 1nos",
//       "100 GPD Membrane 2500 TDS 2nos"
//     ],
//     "desc": "",
//     "colors": [
//       "black",
//       "white"
//     ],
//     "images": ["BLUESIS_25_LPH.jpg", "BLUESIS_25_LPH1.jpg", "BLUESIS_25_LPH2.jpg"],
//     "isRecommended": true,
//     "price": {
//       "actual": "10000.00",
//       "offer": "9000.00"
//     }
//   },
//   {
//     "id": "5",
//     "name": "BLUESIS UNDER SINK WATER PURIFIER",
//     "features": [
//       "Pressure tnk 4 GLN",
//       "10 inch Sediment filer",
//       "10 inch Pre carbon  filer",
//       "10 inch alkaline filer",
//       "4 inch UF filer",
//       "Auto TDS Controller",
//       "Toughten glass fully cover skid",
//       "Mix Water Housing Auto TDS",
//       "24V 3.5 AMP SMPS",
//       "100 GPD Pump ",
//       "300 GM Membrane housing"
//     ],
//     "desc": "",
//     "colors": [
//       "black",
//       "white"
//     ],
//     "images": ["BLUESIS_UNDER-SINK.jpg"],
//     "isRecommended": false,
//     "price": {
//       "actual": "10000.00",
//       "offer": "9000.00"
//     }
//   },
//   {
//     "id": "6",
//     "name": "BLUESIS COMMERCIAL 25 LPH RO SYSTEM",
//     "features": [
//       "25 LPG (Fully cover skid)",
//       "Pressure tnk 4 GLN",
//       "10 inch CTO filer",
//       "10 inch GAC  filer",
//       "10 inch PP filer",
//       "4 inch Post Carbon filer",
//       "90 GPD Membrane 2500 TDS 2nos",
//       "300 GM Membrane housing 2nos",
//       "300 GPD Pump 1nos",
//       "24V 3.5 AMP SMPS",
//       "Pressure Gauge IMP",
//       "LED Power & LP Switch (Organic)"
//     ],
//     "desc": "",
//     "colors": [
//       "white"
//     ],
//     "images": ["BLUESIS_COMMERCIAL_25_LPH.jpg"],
//     "isRecommended": false,
//     "price": {
//       "actual": "10000.00",
//       "offer": "9000.00"
//     }
//   },
//   {
//     "id": "7",
//     "name": "BLUESIS COMMERCIAL 50 LPH RO SYSTEM",
//     "features": [
//       "50 LPG (Fully cover skid)",
//       "20 inch CTO filer",
//       "20 inch GAC  filer",
//       "20 inch PP filer",
//       "10 inch Post Carbon filer",
//       "90 GPD Membrane 2500 TDS 4nos",
//       "300 GM Membrane housing 4nos",
//       "300 GPD Pump 2nos",
//       "24V 3.5 AMP SMPS 2nos",
//       "Pressure Gauge IMP 2nos",
//       "LED Power & LP Switch (Organic)"
//     ],
//     "desc": "",
//     "colors": [
//       "white"
//     ],
//     "images": ["BLUESIS_COMMERCIAL_25_LPH2.jpg"],
//     "isRecommended": false,
//     "price": {
//       "actual": "10000.00",
//       "offer": "9000.00"
//     }
//   },
//   {
//     "id": "8",
//     "name": "PROLIFE FIESTA",
//     "features": [
//       "Anti-bacterial Membrane",
//       "High TDS Membrane",
//       "Self Suction Booster Pump",
//       "Advanced Copper Filter",
//       "ABS Body with full thermocol",
//       "Efficent for under 125GPD",
//       "Increase input pressure upto 125psi",
//       "RO + UV + UF",
//       "14 litre water storage",
//       "38 x 27 x 50.5 cm",
//       "Wall Mounted",
//       "15-20 liters/Hour purifcation capacity",
//       "24 Voltage "
//     ],
//     "desc": "",
//     "colors": [
//       "black",
//       "white",
//       "blue"
//     ],
//     "images": ["prolife-fiesta-black.jpg", "prolife-fiesta-blue.jpg", "prolife-fiesta-white.jpg"],
//     "isRecommended": true,
//     "price": {
//       "actual": "10000.00",
//       "offer": "9000.00"
//     }
//   },
//   {
//     "id": "9",
//     "name": "PROLIFE ACCENT",
//     "features": [
//       "Anti-bacterial Membrane",
//       "High TDS Membrane",
//       "Self Suction Booster Pump",
//       "Advanced Copper Filter",
//       "12 litre water storage",
//       "RO + UV + TDS + MINERALS + UF",
//       "38 x 27 x 50.5 cm",
//       "Wall Mounted",
//       "15-20 liters/Hour purifcation capacity",
//       "ABS Body material",
//       "Smart Indicator"
//     ],
//     "desc": "",
//     "colors": [
//       "white"
//     ],
//     "images": ["prolife-accent-white.jpg",],
//     "isRecommended": false,
//     "price": {
//       "actual": "10000.00",
//       "offer": "9000.00"
//     }
//   },
//   {
//     "id": "10",
//     "name": "PROLIFE ASTA",
//     "features": [
//       "Anti-bacterial Membrane",
//       "High TDS Membrane",
//       "Self Suction Booster Pump",
//       "Advanced Copper Filter",
//       "14 litre water storage",
//       "RO + UV",
//       "38 x 27 x 50.5 cm",
//       "Wall Mounted",
//       "15-20 liters/Hour purifcation capacity",
//       "24 Voltage ",
//       "ABS Body material",
//       "Smart Indicator"
//     ],
//     "desc": "",
//     "colors": [
//       "black",
//       "white",
//       "blue"
//     ],
//     "images": ["prolife-asta-black.jpg", "prolife-asta-blue.jpg", "prolife-asta-white.jpg"],
//     "isRecommended": true,
//     "price": {
//       "actual": "10000.00",
//       "offer": "9000.00"
//     }
//   },
//   {
//     "id": "11",
//     "name": "PROLIFE VIBER",
//     "features": [
//       "Anti-bacterial Membrane",
//       "High TDS Membrane",
//       "Self Suction Booster Pump",
//       "Advanced Copper Filter",
//       "15 litre water storage",
//       "RO + UV + UF",
//       "38 x 27 x 50.5 cm",
//       "Wall Mounted",
//       "15-20 liters/Hour purifcation capacity",
//       "24 Voltage ",
//       "ABS Body material",
//       "Smart Indicator",
//       "Works upto 4000 PPM"
//     ],
//     "desc": "",
//     "colors": [
//       "black",
//       "white",
//       "blue"
//     ],
//     "images": ["prolife-viber-black.jpg", "prolife-viber-blue.jpg", "prolife-viber-white.jpg"],
//     "isRecommended": true,
//     "price": {
//       "actual": "10000.00",
//       "offer": "9000.00"
//     }
//   },
//   {
//     "id": "12",
//     "name": "PROLIFE COMMERCIAL",
//     "features": [
//       "50 / 75 / 100 LPH available",
//       "Stainless steel frame",
//       "High TDS Membrane",
//       "Self Suction Booster Pump",
//       "Advanced Copper Filter",
//       "Smart LED indicators",
//       "Imported Double O'ring Housing",
//       "15-20 liters/Hour purifcation capacity",
//       "220 Voltage ",
//       "Microfiber filter material"
//     ],
//     "desc": "",
//     "colors": [
//     ],
//     "images": ["prolife-commercial.jpg"],
//     "isRecommended": false,
//     "price": {
//       "actual": "10000.00",
//       "offer": "9000.00"
//     }
//   },
//   {
//     "id": "13",
//     "name": "BLUESIS 25 LPH",
//     "features": [
//       "25 LPH RO + UR + Auto TDS Controller",
//       "Toughten glass fully cover skid",
//       "Mix Water Housing Auto TDS",
//       "24V 3.5 AMP SMPS",
//       "Advanced Copper Filter",
//       "Smart LED indicators",
//       "14 litre water storage",
//       "Wall mounted"
//     ],
//     "desc": "",
//     "colors": [
//       "black",
//       "white"
//     ],
//     "images": ["BLUESIS_COPPER1.jpg", "BLUESIS_COPPER2.jpg", "BLUESIS_COPPER3.jpg"],
//     "isRecommended": false,
//     "price": {
//       "actual": "10000.00",
//       "offer": "9000.00"
//     }
//   },
//   {
//     "id": "14",
//     "name": "BLUESIS GLAN",
//     "features": [
//       "Reverse osmosis Purification",
//       "Smart LED indicators",
//       "10 litre water storage",
//       "6 stage of water purification",
//       "ABS Food grader material",
//       "Wall mounted"
//     ],
//     "desc": "",
//     "colors": [
//       "black",
//       "white"
//     ],
//     "images": ["bluesis_glan_black.jpg", "bluesis_glan_white.jpg"],
//     "isRecommended": true,
//     "price": {
//       "actual": "10000.00",
//       "offer": "9000.00"
//     }
//   }
// ]