interface MenuItemProps {
  name: string;
  price: number;
  imageSrc: string;
  addToCart: () => void;
}
  
  export default function MenuItem({ name, price, imageSrc, addToCart }: MenuItemProps) {
    return (
      <div className="menu-card">
        <img src={imageSrc} alt={name} className="menu-image" />
        <div className="menu-info">
          <h3>{name}</h3>
          <p>{price} บาท</p>
          <button onClick={addToCart} className="add-to-cart-btn">เพิ่มลงตะกร้า</button>
        </div>
      </div>
    );
  }
  