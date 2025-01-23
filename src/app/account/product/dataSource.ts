export class ProductOrder {
    Image: string;
    ProductName: string;
    ProductID: number;
    CustomerID: string;
    EmployeeID: number;
    OrderDate: Date;
    ShipName: string;
    ShipCity: string;
    ShipAddress: string;
    ShipCountry: string;
  
    constructor(
      Image: string,
      ProductName: string,
      ProductID: number,
      CustomerID: string,
      EmployeeID: number,
      OrderDate: Date,
      ShipName: string,
      ShipCity: string,
      ShipAddress: string,
      ShipCountry: string
    ) {
      this.Image = Image;
      this.ProductName = ProductName;
      this.ProductID = ProductID;
      this.CustomerID = CustomerID;
      this.EmployeeID = EmployeeID;
      this.OrderDate = OrderDate;
      this.ShipName = ShipName;
      this.ShipCity = ShipCity;
      this.ShipAddress = ShipAddress;
      this.ShipCountry = ShipCountry;
    }
  }
  



export let dataSource: ProductOrder[] = [
    new ProductOrder(
      "https://live.staticflickr.com/4455/36964443753_10feb3de3b_h.jpg",
      "Bonny", 999, "CID301", 5, new Date(8364186e5),
      'Vins et alcools Chevalier', 'India', '59 rue de l Abbaye', 'France'
    ),
    new ProductOrder(
      "https://live.staticflickr.com/2411/2081337596_a9a284076c_h.jpg",
      "Building Blocks", 1000, "CID302", 6, new Date(836505e6),
      'Toms Spezialitäten', 'Münster', 'Luisenstr. 48', 'Germany'
    ),
    new ProductOrder(
      "https://live.staticflickr.com/4064/4708860000_91de9ae6ae_b.jpg",
      "Toy Story", 1001, "CID303", 4, new Date(8367642e5),
      'Toms Spezialitäten', 'Münster', 'Luisenstr. 48', 'Brazil'
    ),
    new ProductOrder(
      "https://live.staticflickr.com/1681/25798832060_edb198b562_h.jpg",
      "Teddy", 1002, "CID304", 3, new Date(8367642e5),
      'Victuailles en stock', 'Lyon', '2, rue du Commerce', 'France'
    ),
    new ProductOrder(
      "https://live.staticflickr.com/5056/5542589987_d88e54a1f8_h.jpg",
      "Dolly", 1003, "CID305", 4, new Date(8368506e5),
      'Suprêmes délices', 'Charleroi', 'Boulevard Tirou, 255', 'Belgium'
    ),
    new ProductOrder(
      "https://live.staticflickr.com/1261/1322767438_fb59f1c2fe_h.jpg",
      "Expresso", 1004, "CID306", 3, new Date(836937e6),
      'Hanari Carnes', 'Rio de Janeiro', 'Rua do Paço, 67', 'Brazil'
    ),
    new ProductOrder(
      "https://live.staticflickr.com/5100/5427758444_aa41a392b9_h.jpg",
      "Reitey", 1005, "CID307", 5, new Date(8370234e5),
      'Chop-suey Chinese', 'Bern', 'Hauptstr. 31', 'Switzerland'
    ),
    new ProductOrder(
      "https://live.staticflickr.com/4139/4874067340_bb54994e7e_h.jpg",
      "Inside Out", 1006, "CID308", 9, new Date(8371098e5),
      'Richter Supermarkt', 'Genève', 'Starenweg 5', 'Switzerland'
    ),
    new ProductOrder(
      "https://live.staticflickr.com/5019/5423006073_e296fc2ff9_h.jpg",
      "Iron Man", 1007, "CID309", 3, new Date(837369e6),
      'Wellington Importadora', 'Resende', 'Rua do Mercado, 12', 'India'
    ),
    new ProductOrder(
      "https://live.staticflickr.com/6162/6168339958_dba80330af_b.jpg",
      "Echoo", 1008, "CID310", 4, new Date(8374554e5),
      'HILARION-Abastos', 'San Cristóbal', 'Carrera 22 con Ave. Carlos Soublette #8-35', 'Venezuela'
    ),
    new ProductOrder(
      "https://live.staticflickr.com/4183/33662361524_4e8409a5f9_h.jpg",
      "Electro", 1009, "CID311", 1, new Date(8375418e5),
      'Ernst Handel', 'Graz', 'Kirchgasse 6', 'Austria'
    ),
    new ProductOrder(
      "https://live.staticflickr.com/5553/14639700537_eab0997db3_z.jpg",
      "Washington R", 1010, "CID312", 4, new Date(8376282e5),
      'Centro comercial Moctezuma', 'México D.F.', 'Sierras de Granada 9993', 'Mexico'
    ),
    new ProductOrder(
      "https://live.staticflickr.com/4178/34463808396_4478a2a43c_h.jpg",
      "YardInk", 1011, "CID313", 4, new Date(8377146e5),
      'Ottilies Käseladen', 'Köln', 'Mehrheimerstr. 369', 'Germany'
    ),
    new ProductOrder(
      "https://live.staticflickr.com/8477/8269945950_e0fbe65382_z.jpg",
      "Maginto", 1012, "CID314", 4, new Date(8377146e5),
      'Que Delícia', 'Rio de Janeiro', 'Rua da Panificadora, 12', 'Brazil'
    ),
    new ProductOrder(
      "https://live.staticflickr.com/7862/46437992802_057f04bd06_b.jpg",
      "Valroint", 1013, "CID315", 0, new Date(8379738e5),
      'Rattlesnake Canyon Grocery', 'Albuquerque', '2817 Milton Dr.', 'USA'
    )
  ];
  
  