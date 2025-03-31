type ReceiptProps = {
    cart: { name: string; price: number; quantity: number }[];
  };
  
  export default function Receipt({ cart }: ReceiptProps) {
    const printReceipt = () => {
      const date = new Date().toLocaleString("th-TH");
      const receiptNumber = `#${Math.floor(Math.random() * 1000000)}`;
  
      const receiptContent = `
        <html>
          <head>
            <style>
              body {
                font-family: "Courier New", Courier, monospace;
                font-size: 14px;
                width: 250px;
                margin: auto;
                padding: 10px;
                line-height: 1.5;
              }
              h2 {
                text-align: center;
                font-size: 18px;
                margin: 0;
                padding-bottom: 5px;
              }
              p {
                text-align: center;
                margin: 5px 0;
                font-size: 14px;
              }
              .item {
                display: flex;
                justify-content: space-between;
                margin-bottom: 5px;
              }
              .item span {
                width: 70%;
                text-align: left;
              }
              .item .price {
                width: 30%;
                text-align: right;
              }
              hr {
                margin: 10px 0;
                border: 1px dashed black;
              }
              .footer {
                text-align: center;
                margin-top: 10px;
                font-size: 12px;
              }
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
                    <span class="price">฿${item.price * item.quantity}</span>
                  </div>
                `
              )
              .join("")}
            
            <hr />
            <p><strong>รวมทั้งหมด: ฿${cart.reduce(
              (sum, item) => sum + item.price * item.quantity,
              0
            )}</strong></p>
            
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
      <button
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
        onClick={printReceipt}
      >
        🖨 พิมพ์ใบเสร็จ
      </button>
    );
  }
  