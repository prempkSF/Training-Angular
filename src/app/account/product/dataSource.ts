export class ProductOrder {
  Image: string;
  ProductName: string;
  ProductID: number;
  CustomerID: string;
  OrderDate: Date;
  ShipAddress: string;
  ShipCountry: string;
  Stock: number; // New field for stock

  constructor(
    Image: string,
    ProductName: string,
    ProductID: number,
    CustomerID: string,
    OrderDate: Date,
    ShipAddress: string,
    ShipCountry: string,
    Stock: number // Accept stock as a parameter in the constructor
  ) {
    this.Image = Image;
    this.ProductName = ProductName;
    this.ProductID = ProductID;
    this.CustomerID = CustomerID;
    this.OrderDate = OrderDate;
    this.ShipAddress = ShipAddress;
    this.ShipCountry = ShipCountry;
    this.Stock = Stock; // Assign stock
  }
}





export let dataSource: ProductOrder[] = [
  new ProductOrder(
    "https://live.staticflickr.com/4455/36964443753_10feb3de3b_h.jpg",
    "Bonny", 999, "CID301", new Date(8364186e5), 'India', '59 rue de l Abbaye', 20 // Stock added here
  ),
  new ProductOrder(
    "https://live.staticflickr.com/2411/2081337596_a9a284076c_h.jpg",
    "Building Blocks", 1000, "CID302", new Date(836505e6), 'Luisenstr. 48', 'Germany', 15 // Stock added here
  ),
  new ProductOrder(
    "https://live.staticflickr.com/4064/4708860000_91de9ae6ae_b.jpg",
    "Toy Story", 1001, "CID303", new Date(8367642e5), 'Luisenstr. 48', 'Brazil', 30 // Stock added here
  ),
  new ProductOrder(
    "https://live.staticflickr.com/1681/25798832060_edb198b562_h.jpg",
    "Teddy", 1002, "CID304", new Date(8367642e5), '2, rue du Commerce', 'France', 25 // Stock added here
  ),
  new ProductOrder(
    "https://live.staticflickr.com/5056/5542589987_d88e54a1f8_h.jpg",
    "Dolly", 1003, "CID305", new Date(8368506e5), 'Boulevard Tirou, 255', 'Belgium', 50 // Stock added here
  ),
  new ProductOrder(
    "https://live.staticflickr.com/1261/1322767438_fb59f1c2fe_h.jpg",
    "Expresso", 1004, "CID306", new Date(836937e6), 'Rua do Paço, 67', 'Brazil', 18 // Stock added here
  ),
  new ProductOrder(
    "https://live.staticflickr.com/5100/5427758444_aa41a392b9_h.jpg",
    "Reitey", 1005, "CID307", new Date(8370234e5), 'Hauptstr. 31', 'Switzerland', 22 // Stock added here
  ),
  new ProductOrder(
    "https://live.staticflickr.com/4139/4874067340_bb54994e7e_h.jpg",
    "Inside Out", 1006, "CID308", new Date(8371098e5), 'Starenweg 5', 'Switzerland', 10 // Stock added here
  ),
  new ProductOrder(
    "https://live.staticflickr.com/5019/5423006073_e296fc2ff9_h.jpg",
    "Iron Man", 1007, "CID309", new Date(837369e6), 'Rua do Mercado, 12', 'India', 12 // Stock added here
  ),
  new ProductOrder(
    "https://live.staticflickr.com/6162/6168339958_dba80330af_b.jpg",
    "Echoo", 1008, "CID310", new Date(8374554e5), 'Carrera 22 con Ave. Carlos Soublette #8-35', 'Venezuela', 40 // Stock added here
  ),
  new ProductOrder(
    "https://live.staticflickr.com/4183/33662361524_4e8409a5f9_h.jpg",
    "Electro", 1009, "CID311", new Date(8375418e5), 'Kirchgasse 6', 'Austria', 60 // Stock added here
  ),
  new ProductOrder(
    "https://live.staticflickr.com/5553/14639700537_eab0997db3_z.jpg",
    "Washington R", 1010, "CID312", new Date(8376282e5), 'Sierras de Granada 9993', 'Mexico', 5 // Stock added here
  ),
  new ProductOrder(
    "https://live.staticflickr.com/4178/34463808396_4478a2a43c_h.jpg",
    "YardInk", 1011, "CID313", new Date(8377146e5), 'Mehrheimerstr. 369', 'Germany', 8 // Stock added here
  ),
  new ProductOrder(
    "https://live.staticflickr.com/8477/8269945950_e0fbe65382_z.jpg",
    "Maginto", 1012, "CID314", new Date(8377146e5), 'Rua da Panificadora, 12', 'Brazil', 35 // Stock added here
  ),
  new ProductOrder(
    "https://live.staticflickr.com/7862/46437992802_057f04bd06_b.jpg",
    "Valroint", 1013, "CID315", new Date(8379738e5), '2817 Milton Dr.', 'USA', 10 // Stock added here
  )
];
