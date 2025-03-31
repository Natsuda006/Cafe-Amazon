type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

type CartProps = {
  cart: CartItem[];
  updateQuantity: (index: number, newQuantity: number) => void;
  removeFromCart: (index: number) => void;
};

export default function Cart({ cart, updateQuantity, removeFromCart }: CartProps) {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const printReceipt = () => {
    const date = new Intl.DateTimeFormat("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date());
    const receiptNumber = `#${Math.floor(Math.random() * 1000000)}`;

    const receiptContent = `
      <html>
        <head>
          <style>
            body { font-family: 'Courier New', Courier, monospace; font-size: 14px; width: 250px; margin: auto; padding: 10px; line-height: 1.5; }
            h2 { text-align: center; font-size: 18px; margin: 0; padding-bottom: 5px; }
            p { text-align: center; margin: 5px 0; font-size: 14px; }
            .item { display: flex; justify-content: space-between; margin-bottom: 5px; }
            .item span { width: 70%; text-align: left; }
            .item .price { width: 30%; text-align: right; }
            hr { margin: 10px 0; border: 1px dashed black; }
            .footer { text-align: center; margin-top: 10px; font-size: 12px; }
          </style>
        </head>
        <body>
          <h2>Cafe Amazon</h2>
          <p>ใบเสร็จ</p>
          <p><strong>เลขที่ใบเสร็จ:</strong> ${receiptNumber}</p>
          <p><strong>เวลา:</strong> ${date}</p>
          
          ${cart
            .map(
              (item) => `
                <div class="item">
                  <span>${item.name} x${item.quantity}</span>
                  <span class="price">฿${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              `
            )
            .join("")}
          
          <hr />
          <p><strong>รวมทั้งหมด: ฿${totalPrice.toFixed(2)}</strong></p>
          
          <hr />
          <div class="footer">
            <p>📍 Cafe Amazon สาขามหาวิทยาลัยราชภัฏนครปฐม</p>
            <p>ขอบคุณที่ใช้บริการ!</p>
          </div>
        </body>
      </html>
    `;

    const printWindow = window.open("", "", "width=300,height=400");
    if (printWindow) {
      printWindow.document.write(receiptContent);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 mt-2">ไม่มีสินค้าในตะกร้า</p>
      ) : (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>
                  <div className="cart-quantity-wrapper">
                    <button
                      className="cart-quantity-btn"
                      onClick={() => updateQuantity(index, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      ➖
                    </button>
                    <input
                      type="text"
                      value={item.quantity}
                      readOnly
                      className="cart-quantity"
                    />
                    <button
                      className="cart-quantity-btn"
                      onClick={() => updateQuantity(index, item.quantity + 1)}
                    >
                      ➕
                    </button>
                  </div>
                </td>
                <td>฿{item.price}</td>
                <td>฿{(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button
                    className="cart-remove-btn"
                    onClick={() => removeFromCart(index)}
                  >
                    🗑
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="cart-total">รวมทั้งหมด: ฿{totalPrice.toFixed(2)}</div>
      {cart.length > 0 && (
        <button
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={printReceipt}
        >
          🖨 พิมพ์ใบเสร็จ
        </button>
      )}
    </div>
  );
}