export class ProductOrder {
  Image: string;
  ProductName: string;
  ProductID: number;
  CustomerID: string;
  OrderDate: Date;
  ShipAddress: string;
  ShipCountry: string;
  Stock: number; // Existing stock field
  Category: string; // New category field

  constructor(
    Image: string,
    ProductName: string,
    ProductID: number,
    CustomerID: string,
    OrderDate: Date,
    ShipAddress: string,
    ShipCountry: string,
    Stock: number, // Accept stock as a parameter in the constructor
    Category: string // Accept category as a parameter in the constructor
  ) {
    this.Image = Image;
    this.ProductName = ProductName;
    this.ProductID = ProductID;
    this.CustomerID = CustomerID;
    this.OrderDate = OrderDate;
    this.ShipAddress = ShipAddress;
    this.ShipCountry = ShipCountry;
    this.Stock = Stock; // Assign stock
    this.Category = Category; // Assign category
  }

  ToObject(): object {
    return {
      image: this.Image,
      productName: this.ProductName,
      productID: this.ProductID,
      customerID: this.CustomerID,
      orderDate: this.OrderDate,
      shipAddress: this.ShipAddress,
      shipCountry: this.ShipCountry,
      stock: this.Stock,
      category: this.Category // Include category in the returned object
    };
  }
}


export let dataSource: ProductOrder[] = [
  new ProductOrder(
    "https://live.staticflickr.com/4455/36964443753_10feb3de3b_h.jpg",
    "Bonny", 999, "CID301", new Date(1704070800000), 'California, USA', '123 Toy Street, San Francisco, CA', 5, 'Kid'
  ),
  new ProductOrder(
    "https://live.staticflickr.com/2411/2081337596_a9a284076c_h.jpg",
    "Building Blocks", 1000, "CID302", new Date(1704157200000), 'Ontario, Canada', '456 Play Avenue, Toronto, Ontario', 0, 'Infant'
  ),
  new ProductOrder(
    "https://live.staticflickr.com/4064/4708860000_91de9ae6ae_b.jpg",
    "Toy Story", 1001, "CID303", new Date(1704243600000), 'New South Wales, Australia', '789 Fun Street, Sydney, NSW', 30, 'Toddler'
  ),
  new ProductOrder(
    "https://live.staticflickr.com/1681/25798832060_edb198b562_h.jpg",
    "Teddy", 1002, "CID304", new Date(1704330000000), 'Berlin, Germany', '101 Happy Lane, Berlin', 245, 'Kid'
  ),
  new ProductOrder(
    "https://live.staticflickr.com/5056/5542589987_d88e54a1f8_h.jpg",
    "Dolly", 1003, "CID305", new Date(1704416400000), 'London, UK', '202 Teddy Road, London', 50, 'Infant'
  ),
  new ProductOrder(
    "https://live.staticflickr.com/1261/1322767438_fb59f1c2fe_h.jpg",
    "Expresso", 1004, "CID306", new Date(1704502800000), 'Tokyo, Japan', '303 Toyo Street, Shibuya, Tokyo', 189, 'Toddler'
  ),
  new ProductOrder(
    "https://live.staticflickr.com/5100/5427758444_aa41a392b9_h.jpg",
    "Reitey", 1005, "CID307", new Date(1704589200000), 'Paris, France', '404 Le Petit Boulevard, Paris', 272, 'Kid'
  ),
  new ProductOrder(
    "https://live.staticflickr.com/4139/4874067340_bb54994e7e_h.jpg",
    "Inside Out", 1006, "CID308", new Date(1704675600000), 'Madrid, Spain', '505 Calle de la Risa, Madrid', 10, 'Infant'
  ),
  new ProductOrder(
    "https://live.staticflickr.com/5019/5423006073_e296fc2ff9_h.jpg",
    "Iron Man", 1007, "CID309", new Date(1704762000000), 'Rome, Italy', '606 Viale del Sole, Rome', 12, 'Toddler'
  ),
  new ProductOrder(
    "https://live.staticflickr.com/6162/6168339958_dba80330af_b.jpg",
    "Echoo", 1008, "CID310", new Date(1704848400000), 'Barcelona, Spain', '707 Plaza de la Luna, Barcelona', 40, 'Kid'
  ),
  new ProductOrder(
    "https://live.staticflickr.com/4183/33662361524_4e8409a5f9_h.jpg",
    "Electro", 1009, "CID311", new Date(1704934800000), 'Cape Town, South Africa', '808 Greenfield Drive, Cape Town', 670, 'Infant'
  ),
  new ProductOrder(
    "https://live.staticflickr.com/5553/14639700537_eab0997db3_z.jpg",
    "Washington R", 1010, "CID312", new Date(1705021200000), 'Tokyo, Japan', '909 Sakura Street, Tokyo', 5, 'Toddler'
  ),
  new ProductOrder(
    "https://live.staticflickr.com/4178/34463808396_4478a2a43c_h.jpg",
    "YardInk", 1011, "CID313", new Date(1705107600000), 'New York, USA', '101 Park Avenue, New York, NY', 68, 'Kid'
  ),
  new ProductOrder(
    "https://live.staticflickr.com/8477/8269945950_e0fbe65382_z.jpg",
    "Maginto", 1012, "CID314", new Date(1705194000000), 'Rome, Italy', '202 Colosseo Street, Rome', 35, 'Infant'
  ),
  new ProductOrder(
    "https://live.staticflickr.com/7862/46437992802_057f04bd06_b.jpg",
    "Valroint", 1013, "CID315", new Date(1705280400000), 'Berlin, Germany', '303 Alexanderplatz, Berlin', 10, 'Toddler'
  )
];



