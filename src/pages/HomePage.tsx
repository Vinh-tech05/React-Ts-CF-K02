import { useContext, useEffect, useState } from "react";
import api from "../api";
import { CartContext } from "../context/CartContext";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/");
        setProducts(res.data.products);
      } catch (error) {
        console.error("Lỗi tải sản phẩm:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-light">
      <section className="py-5 border-bottom">
        <div className="container-lg text-center">
          <h1 className="display-6 fw-light mb-3 text-dark">
            Luxury Collection
          </h1>
          <img src="" alt="" />
          <p className="text-muted lead">
            Curated selection of premium products. Discover timeless elegance
            and exceptional craftsmanship.
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container-lg">
          <div className="row g-4">
            {products.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div
                    className="position-relative overflow-hidden bg-secondary"
                    style={{ height: "250px" }}
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="card-img-top w-100 h-100 object-fit-cover"
                      style={{ transition: "transform 0.5s ease" }}
                      onMouseEnter={(e) =>
                        (e.target.style.transform = "scale(1.05)")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.transform = "scale(1)")
                      }
                    />
                  </div>

                  <div className="card-body d-flex flex-column">
                    <h5
                      className="card-title fw-light text-dark"
                      style={{ fontSize: "0.95rem" }}
                    >
                      {item.title}
                    </h5>
                    <p className="card-text text-muted small mb-3 flex-grow-1">
                      {item.description?.substring(0, 60)}...
                    </p>

                    <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                      <span className="fw-light text-dark">${item.price}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="btn btn-sm btn-dark fw-light"
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
