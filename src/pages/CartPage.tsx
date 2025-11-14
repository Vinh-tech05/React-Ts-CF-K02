import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, total } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div
        className="min-vh-100 d-flex align-items-center justify-content-center"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="text-center py-5">
          <div className="mb-4" style={{ fontSize: "64px", opacity: "0.2" }}>
            🛒
          </div>
          <h2
            className="mb-3"
            style={{ fontWeight: "600", fontSize: "24px", color: "#1a1a1a" }}
          >
            Giỏ hàng trống
          </h2>
          <p className="text-muted mb-4" style={{ fontSize: "15px" }}>
            Hãy thêm sản phẩm để tiếp tục mua sắm
          </p>
          <Link
            to="/"
            className="btn btn-dark px-5 py-3"
            style={{
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "0.5px",
            }}
          >
            Khám phá sản phẩm
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#fafafa", minHeight: "100vh" }}>
      {/* Clean Header */}
      <div
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e5e5e5",
          padding: "32px 0",
        }}
      >
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1
                className="mb-2"
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "#1a1a1a",
                  letterSpacing: "-0.5px",
                }}
              >
                Giỏ hàng
              </h1>
              <p className="mb-0 text-muted" style={{ fontSize: "14px" }}>
                {cart.length} sản phẩm
              </p>
            </div>

            <Link
              to="/"
              className="btn btn-outline-dark"
              style={{
                borderRadius: "8px",
                padding: "10px 24px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-5">
        <div className="row g-4">
          {/* Products List */}
          <div className="col-lg-8">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {cart.map((item) => {
                const quantity = item.quantity || 1;
                const price = Number(item.price) || 0;
                const itemTotal = price * quantity;

                return (
                  <div
                    key={item.id}
                    className="bg-white"
                    style={{
                      borderRadius: "12px",
                      border: "1px solid #e5e5e5",
                      overflow: "hidden",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#999";
                      e.currentTarget.style.boxShadow =
                        "0 4px 12px rgba(0,0,0,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#e5e5e5";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div style={{ padding: "20px" }}>
                      <div className="row g-3 align-items-center">
                        {/* Image */}
                        <div className="col-auto">
                          <div
                            style={{
                              width: "120px",
                              height: "120px",
                              borderRadius: "8px",
                              overflow: "hidden",
                              backgroundColor: "#f5f5f5",
                            }}
                          >
                            <img
                              src={item.thumbnail || "/placeholder.svg"}
                              alt={item.title}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        </div>

                        {/* Info */}
                        <div className="col">
                          <div className="d-flex justify-content-between align-items-start mb-3">
                            <div style={{ flex: 1 }}>
                              <h5
                                className="mb-1"
                                style={{
                                  fontSize: "16px",
                                  fontWeight: "600",
                                  color: "#1a1a1a",
                                }}
                              >
                                {item.title}
                              </h5>
                              <p
                                className="text-muted mb-0"
                                style={{ fontSize: "13px" }}
                              >
                                SKU: {item.id}
                              </p>
                            </div>

                            {/* Remove button */}
                            <button
                              className="btn btn-sm"
                              onClick={() => removeFromCart(item.id)}
                              style={{
                                width: "32px",
                                height: "32px",
                                borderRadius: "6px",
                                border: "1px solid #e5e5e5",
                                backgroundColor: "white",
                                color: "#666",
                                fontSize: "18px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "all 0.2s ease",
                                marginLeft: "12px",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "#dc3545";
                                e.currentTarget.style.color = "#dc3545";
                                e.currentTarget.style.backgroundColor =
                                  "#fff5f5";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "#e5e5e5";
                                e.currentTarget.style.color = "#666";
                                e.currentTarget.style.backgroundColor = "white";
                              }}
                            >
                              ×
                            </button>
                          </div>

                          {/* Price and Quantity Row */}
                          <div className="d-flex justify-content-between align-items-center">
                            {/* Quantity Controls */}
                            <div
                              className="d-flex align-items-center"
                              style={{ gap: "8px" }}
                            >
                              <button
                                className="btn btn-sm"
                                style={{
                                  width: "32px",
                                  height: "32px",
                                  padding: "0",
                                  borderRadius: "6px",
                                  border: "1px solid #e5e5e5",
                                  fontSize: "16px",
                                  fontWeight: "500",
                                  backgroundColor: "white",
                                  color: "#333",
                                  transition: "all 0.2s ease",
                                }}
                                onClick={() =>
                                  updateQuantity({
                                    type: "DECREASE",
                                    payload: item.id,
                                  })
                                }
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.borderColor = "#333";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.borderColor = "#e5e5e5";
                                }}
                              >
                                −
                              </button>

                              <span
                                className="fw-500"
                                style={{
                                  minWidth: "40px",
                                  textAlign: "center",
                                  fontSize: "15px",
                                  color: "#1a1a1a",
                                }}
                              >
                                {quantity}
                              </span>

                              <button
                                className="btn btn-sm"
                                style={{
                                  width: "32px",
                                  height: "32px",
                                  padding: "0",
                                  borderRadius: "6px",
                                  border: "1px solid #e5e5e5",
                                  fontSize: "16px",
                                  fontWeight: "500",
                                  backgroundColor: "white",
                                  color: "#333",
                                  transition: "all 0.2s ease",
                                }}
                                onClick={() =>
                                  updateQuantity({
                                    type: "INCREASE",
                                    payload: item.id,
                                  })
                                }
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.borderColor = "#333";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.borderColor = "#e5e5e5";
                                }}
                              >
                                +
                              </button>
                            </div>

                            {/* Price */}
                            <div className="text-end">
                              <div
                                style={{
                                  fontSize: "12px",
                                  color: "#999",
                                  marginBottom: "4px",
                                }}
                              >
                                ${price.toFixed(2)} × {quantity}
                              </div>
                              <div
                                style={{
                                  fontSize: "18px",
                                  fontWeight: "700",
                                  color: "#1a1a1a",
                                }}
                              >
                                ${itemTotal.toFixed(2)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Order Summary */}
          <div className="col-lg-4">
            <div
              className="bg-white"
              style={{
                borderRadius: "12px",
                border: "1px solid #e5e5e5",
                position: "sticky",
                top: "24px",
                overflow: "hidden",
              }}
            >
              <div style={{ padding: "24px" }}>
                <h5
                  className="mb-4"
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#1a1a1a",
                  }}
                >
                  Tóm tắt đơn hàng
                </h5>

                {/* Summary items */}
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-3">
                    <span style={{ fontSize: "15px", color: "#666" }}>
                      Tạm tính
                    </span>
                    <span
                      style={{
                        fontSize: "15px",
                        fontWeight: "600",
                        color: "#1a1a1a",
                      }}
                    >
                      ${total.toFixed(2)}
                    </span>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <span style={{ fontSize: "15px", color: "#666" }}>
                      Phí vận chuyển
                    </span>
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#28a745",
                      }}
                    >
                      Miễn phí
                    </span>
                  </div>

                  <div
                    className="d-flex justify-content-between pt-3"
                    style={{
                      borderTop: "1px solid #e5e5e5",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: "700",
                        color: "#1a1a1a",
                      }}
                    >
                      Tổng cộng
                    </span>
                    <span
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        color: "#1a1a1a",
                      }}
                    >
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  className="btn btn-dark w-100 mb-3"
                  style={{
                    borderRadius: "8px",
                    padding: "14px",
                    fontSize: "15px",
                    fontWeight: "600",
                    letterSpacing: "0.3px",
                  }}
                >
                  Thanh toán
                </button>

                {/* Features */}
                <div
                  className="pt-4"
                  style={{ borderTop: "1px solid #e5e5e5" }}
                >
                  <div
                    className="mb-3"
                    style={{ fontSize: "13px", color: "#666" }}
                  >
                    ✓ Miễn phí vận chuyển cho đơn từ $50
                  </div>
                  <div
                    className="mb-3"
                    style={{ fontSize: "13px", color: "#666" }}
                  >
                    ✓ Đổi trả trong vòng 30 ngày
                  </div>
                  <div style={{ fontSize: "13px", color: "#666" }}>
                    ✓ Thanh toán an toàn & bảo mật
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
