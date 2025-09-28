const foods = [
  // Fast Food
  { id: 1, name: "Burger", category: "Fast Food", price: 150, image: "https://images.unsplash.com/photo-1550547660-d9450f859349" },
  { id: 2, name: "Pizza", category: "Fast Food", price: 200, image: "https://images7.alphacoders.com/596/596343.jpg" },
  { id: 3, name: "Fries", category: "Fast Food", price: 80, image: "https://static.vecteezy.com/system/resources/previews/027/536/411/non_2x/delicious-french-fries-on-a-white-background-photo.jpg" },
  { id: 4, name: "Hot Dog", category: "Fast Food", price: 120, image: "https://wallpaperbat.com/img/1286678-food-hot-dog-hd-wallpaper.png" },

  // Meat
  { id: 5, name: "Grilled Chicken", category: "Meat", price: 220, image: "https://img.freepik.com/fotos-premium/gegrilltes-haehnchen-halbgebackenes-haehnchen-mit-zitrone-und-gewuerzen-koestliches-saftiges-haehnchen-gegrilltes-gefluegel_811830-832.jpg" },
  { id: 6, name: "Steak", category: "Meat", price: 350, image: "https://img.freepik.com/premium-photo/beef-steak-hd-wallpaper-photographic-image_993236-274.jpg" },
  { id: 7, name: "Bacon", category: "Meat", price: 340, image: "https://img.freepik.com/premium-photo/bacon-high-quality-4k-hdr_889056-20977.jpg" },
  { id: 8, name: "Fish", category: "Meat", price: 499, image: "https://1.bp.blogspot.com/-dmr7TvaMJ7c/WRyLh1RZjlI/AAAAAAAAIF4/uPHo3WFtctE8ZS34-s0mkRyNRkU-2-SzgCLcB/s1600/0000000000000000000000A%2B%25281%2529.jpg" },
  { id: 9, name: "Prawn curry", category: "Meat", price: 250, image: "https://i.ytimg.com/vi/SxUKfbLcSsk/maxresdefault.jpg" },
  { id: 10, name: "BBQ Ribs", category: "Meat", price: 170, image: "https://www.cloughbanefarm.com/wp-content/uploads/2021/03/1lb-Pork-BBQ-Spare-Ribs-1.jpg" },
  { id: 11, name: "Butter Chicken", category: "Meat", price: 280, image: "https://www.cookingclassy.com/wp-content/uploads/2021/01/butter-chicken-3.jpg" },
  { id: 12, name: "Chicken Biriyani", category: "Meat", price: 550, image: "https://wallpapercave.com/wp/wp7556203.jpg" },

  // Vegetarian
  { id: 13, name: "Paneer Butter Masala", category: "Vegetarian", price: 270, image: "https://img.freepik.com/premium-photo/delicious-paneer-butter-masala-photography_928503-851.jpg?w=2000" },
  { id: 14, name: "Veg Sandwich", category: "Vegetarian", price: 80, image: "https://3.bp.blogspot.com/-gCbo2_sjCls/WOYS2jgd1hI/AAAAAAAAqTw/t3nMycGpadI-qhy4PdLEDTjc3jHOdmlNwCLcB/s1600/02-DSC_0097.JPG" },
  { id: 15, name: "Salad", category: "Vegetarian", price: 100, image: "https://images7.alphacoders.com/365/365378.jpg" },
   { id: 16, name: "veg pulao", category: "Vegetarian", price: 300, image: "https://4.bp.blogspot.com/-qWzc-7lpAXk/WIEb8Z55zmI/AAAAAAAACdE/iewzgRqTP2Q-TdRenIB3zLueuE9rW2nIQCLcB/s1600/vegetable%2Bpulao.JPG" },
    { id: 17, name: "palak paneer", category: "Vegetarian", price: 450, image: "https://www.corriecooks.com/wp-content/uploads/2022/06/Palak-Paneer-instant-pot.jpg" },
     { id: 18, name: "daal chawal", category: "Vegetarian", price: 240, image: "https://i.ytimg.com/vi/8gJgnrxpKUw/maxresdefault.jpg" },
      { id: 19, name: "paratha", category: "Vegetarian", price: 100, image: "https://www.scratchingcanvas.com/wp-content/uploads/2019/04/Laccha-Paratha-Easy.3.jpg" },

  // Desserts
  { id: 20, name: "Ice Cream", category: "Desserts", price: 90, image: "https://www.baltana.com/files/wallpapers-2/Ice-Cream-Chocolate-Wallpaper-HD-08394.jpg" },
  { id: 21, name: "Chocolate Cake", category: "Desserts", price: 200, image: "https://freedesignfile.com/upload/2017/01/Delicious-chocolate-cake-HD-picture-03.jpg" },
  { id: 22, name: "Donuts", category: "Desserts", price: 80, image: "https://img.freepik.com/premium-photo/product-shots-donuts-high-quality-4k-ultra-hd_670382-96797.jpg" },


  // Beverages
  { id: 28, name: "Chocolate Milkshake", category: "Drinks", price: 90, image: "https://img.freepik.com/premium-photo/chocolate-milkshake-hd-ai-generative-8k-wallpaper-stock-photographic-image_929434-3193.jpg" },
  { id: 29, name: "Coffee", category: "Drinks", price: 60, image: "https://www.pixelstalk.net/wp-content/uploads/2016/05/Desktop-Download-Coffee-Wallpapers-HD.jpg" },
  { id: 30, name: "Tea", category: "Drinks", price: 70, image: "https://www.baltana.com/files/wallpapers-8/Tea-Cup-HD-Wallpapers-23999.jpg" },
  { id: 31, name: "Black Tea", category: "Drinks", price: 70, image: "https://images6.alphacoders.com/387/387331.jpg" },
  { id: 32, name: "Green Tea", category: "Drinks", price: 70, image: "https://wallpapercave.com/wp/CG1CMrn.jpg" },

  // Noodles
  { id: 33, name: "Ramen", category: "Noodles", price: 180, image: "https://wallpaperaccess.com/full/7088942.jpg" },
  { id: 34, name: "Chow Mein", category: "Noodles", price: 150, image: "https://t3.ftcdn.net/jpg/06/10/03/82/360_F_610038219_jVhQanmTK0WUw2NO0lPhQBUqdQiLzTOs.jpg" },

];

export default foods;
