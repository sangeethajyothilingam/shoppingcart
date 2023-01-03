export default function Cart({ cartList, removeCart }) {
  return (
    <ol class="list-group list-group-numbered">
      {cartList.map((item) => {
        return (
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <div class="ms-2 me-auto">
              <div class="fw-bold">{item.productName}</div>
              {item.price}
            </div>
            <button
              onClick={() => removeCart(item)}
              class="bg-primary rounded-pill"
            >
              X
            </button>
          </li>
        );
      })}
    </ol>
  );
}
