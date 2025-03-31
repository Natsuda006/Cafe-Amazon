import { useState } from "react";
import Header from "./components/Navbar";
import MenuItem from "./components/MenuItem";
import Cart from "./components/Cart";
import Receipt from "./components/Receipt";
import "./index.css";

// นำเข้ารูปภาพเครื่องดื่มและสินค้า
import EspressoIMG from "./product_img/s.jpg";
import BlackCoffeeIMG from "./product_img/ดำ.jpg";
import AmazonExtraIMG from "./product_img/เมซอน.jpg";
import CappuccinoIMG from "./product_img/คาปู.jpg";
import GreenTeaMilkIMG from "./product_img/ชาเขียว.jpg";
import LemonTeaIMG from "./product_img/ชามะนาว.jpg";
import LightCoffeeIMG from "./product_img/ไลท์คอฟฟี่.jpg";
import BlackTeaHoneyIMG from "./product_img/แบล็คทีฮันนี่.jpg";
import MatchaHoneyIMG from "./product_img/มัทฉะฮันนี่.jpg";
import LycheeIMG from "./product_img/ลิ้นจี่.jpg";
import StrawberryIMG from "./product_img/สตรอเบอรี่.jpg";
import KiwiIMG from "./product_img/กี่วี่.jpg";
import YogurtStrawberryIMG from "./product_img/โยเกิร์ต.jpg";
import YogurtMixBerryIMG from "./product_img/มิก.jpg";
import MixedBerryIMG from "./product_img/ปั่น.jpg";
import FreshMilkIMG from "./product_img/นมสด.jpg";
import ChocolateIMG from "./product_img/ช็อคโกแลต.jpg";
import StrawberryCheesecakeIMG from "./product_img/ชีสเค้ก.jpg";
import OceanBingsuBubblesEditionIMG from "./product_img/ฟ้า.jpg";
import StrawberryBingsuBlossomEditionIMG from "./product_img/สตอรี่.jpg";
import MelonKiwiBingsuButteEditionIMG from "./product_img/ฟ.jpg";
import ThaiIMG from "./product_img/แก้ว.jpg";
import SnoopyTumblerIMG from "./product_img/สนูปปี้.jpg";
import LimitedIMG from "./product_img/ลิมิต.jpg";
// เพิ่มเมนูเครื่องดื่มและสินค้า
const menuItems = [
  { category: "กาแฟ & ชา", name: "เอสเปรสโซ่", price: 55, imageSrc: EspressoIMG },
  { category: "กาแฟ & ชา", name: "แบล็คคอฟฟี่", price: 55, imageSrc: BlackCoffeeIMG },
  { category: "กาแฟ & ชา", name: "อเมซอน เอ็กซ์ตร้า", price: 70, imageSrc: AmazonExtraIMG },
  { category: "กาแฟ & ชา", name: "คาปูชิโน่", price: 60, imageSrc: CappuccinoIMG },
  { category: "กาแฟ & ชา", name: "ชาเขียวนม", price: 50, imageSrc: GreenTeaMilkIMG },
  { category: "กาแฟ & ชา", name: "ชามะนาว", price: 45, imageSrc: LemonTeaIMG },
  { category: "เครื่องดื่มเพื่อสุขภาพ", name: "ไลท์คอฟฟี่ฮันนี่", price: 55, imageSrc: LightCoffeeIMG },
  { category: "เครื่องดื่มเพื่อสุขภาพ", name: "แบล็คทีฮันนี่", price: 45, imageSrc: BlackTeaHoneyIMG },
  { category: "เครื่องดื่มเพื่อสุขภาพ", name: "มัทฉะฮันนี่", price: 55, imageSrc: MatchaHoneyIMG },
  { category: "น้ำผลไม้ & สมูทตี้", name: "น้ำลิ้นจี่", price: 45, imageSrc: LycheeIMG },
  { category: "น้ำผลไม้ & สมูทตี้", name: "น้ำสตรอเบอร์รี่ปั่น", price: 60, imageSrc: StrawberryIMG },
  { category: "น้ำผลไม้ & สมูทตี้", name: "น้ำกีวี่ปั่น", price: 60, imageSrc: KiwiIMG },
  { category: "น้ำผลไม้ & สมูทตี้", name: "โยเกิร์ตสมูทตี้สตรอเบอร์รี่", price: 70, imageSrc: YogurtStrawberryIMG },
  { category: "น้ำผลไม้ & สมูทตี้", name: "โยเกิร์ตสมูทตี้มิกซ์เบอรรี่", price: 70, imageSrc: YogurtMixBerryIMG },
  { category: "น้ำผลไม้ & สมูทตี้", name: "น้ำมิกซ์เบอร์รี่ปั่น", price: 70, imageSrc: MixedBerryIMG },
  { category: "นม/ช็อกโกแลต", name: "นมสด", price: 50, imageSrc: FreshMilkIMG },
  { category: "นม/ช็อกโกแลต", name: "ช็อกโกแลต", price: 55, imageSrc: ChocolateIMG },
  { category: "เมนูแนะนำ", name: "สตรอเบอร์รี่ชีสเค้ก", price: 75, imageSrc: StrawberryCheesecakeIMG },
  { category: "เมนูแนะนำ", name: "Ocean Bingsu Bubbles Edition", price: 89, imageSrc: OceanBingsuBubblesEditionIMG  },
  { category: "เมนูแนะนำ", name: "Strawberry Bingsu Blossom Edition", price: 89, imageSrc: StrawberryBingsuBlossomEditionIMG },
  { category: "เมนูแนะนำ", name: "Melon Kiwi Bingsu Buttercup Edition", price: 89, imageSrc: MelonKiwiBingsuButteEditionIMG },
  { category: "สินค้าพรีเมียม", name: "แก้วเปลี่ยนสี เที่ยวไทย 4 ภาค", price: 149, imageSrc:  ThaiIMG },
  { category: "สินค้าพรีเมียม", name: "Snoopy Tumbler", price: 199, imageSrc: SnoopyTumblerIMG },
  { category: "สินค้าพรีเมียม", name: "แก้วเปลี่ยนสี ลาย Limited “Thailand”", price: 189, imageSrc: LimitedIMG },
];

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (name: string, price: number) => {
    const existingIndex = cart.findIndex(item => item.name === name);
    if (existingIndex !== -1) {
      const newCart = [...cart];
      newCart[existingIndex].quantity += 1;
      setCart(newCart);
    } else {
      setCart([...cart, { name, price, quantity: 1 }]);
    }
  };
  
  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(index);
      return;
    }
    const newCart = [...cart];
    newCart[index].quantity = newQuantity;
    setCart(newCart);
  };
  
  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };
  
  const categories = Array.from(new Set(menuItems.map(item => item.category)));

  return (
    <div className="container">
      <Header />
      <h1>เมนูทั้งหมด</h1>
      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="grid">
            {menuItems.filter(item => item.category === category).map(({ name, price, imageSrc }) => (
              <MenuItem key={name} name={name} price={price} imageSrc={imageSrc} addToCart={() => addToCart(name, price)} />
            ))}
          </div>
        </div>
      ))}
      <Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
      {cart.length > 0 && <Receipt cart={cart} />}
    </div>
  );
}
