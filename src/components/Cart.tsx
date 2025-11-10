import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, total } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-light bg-white shadow-sm sticky-top">
        <div className="container-lg d-flex justify-content-between align-items-center">
          <span className="navbar-brand mb-0 h1 fw-bold fs-4 text-primary">
            SHOP
          </span>

          <div className="d-flex align-items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn position-relative text-white bg-primary rounded-circle p-2"
              style={{ width: "50px", height: "50px" }}
            >
              <i className="fa-solid fa-cart-shopping"></i>
              {cart.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-white">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`offcanvas offcanvas-end ${isOpen ? "show" : ""}`}
        style={{ visibility: isOpen ? "visible" : "hidden" }}
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title fw-light">Cart</h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => setIsOpen(false)}
          ></button>
        </div>
        <div className="offcanvas-body p-0 d-flex flex-column">
          {cart.length === 0 ? (
            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
              <p className="text-muted text-center">Chưa có sản phẩm nào</p>
            </div>
          ) : (
            <>
              <div className="flex-grow-1 overflow-y-auto">
                {cart.map((item, index) => {
                  const quantity = item.quantity || 1;
                  const price = Number(item.price) || 0;
                  return (
                    <div key={index} className="p-3 border-bottom">
                      <div className="d-flex align-items-center">
                        <img
                          src={item.thumbnail}
                          alt=""
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                            marginRight: "10px",
                          }}
                        />

                        <div className="flex-grow-1">
                          <h6 className="fw-light mb-1">{item.title}</h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">
                              Qty: {quantity}
                            </small>
                            <span className="fw-light">
                              ${(price * quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="btn btn-sm text-danger p-2 ms-2"
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-3 border-top">
                <div className="d-flex justify-content-between mb-3">
                  <span className="text-muted">Total</span>
                  <strong>${total.toFixed(2)}</strong>
                </div>
                <button className="btn btn-dark w-100 fw-light">
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {isOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
          style={{ zIndex: 999 }}
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Cart;
