const products = [
  { id: 1, name: 'Wireless Headphones', price: '$99', image: 'https://via.placeholder.com/300' },
  { id: 2, name: 'Smart Watch', price: '$249', image: 'https://via.placeholder.com/300' },
  { id: 3, name: 'Laptop Stand', price: '$49', image: 'https://via.placeholder.com/300' },
  { id: 4, name: 'USB-C Cable', price: '$19', image: 'https://via.placeholder.com/300' },
  { id: 5, name: 'Desk Lamp', price: '$79', image: 'https://via.placeholder.com/300' },
  { id: 6, name: 'Wireless Mouse', price: '$59', image: 'https://via.placeholder.com/300' },
  { id: 7, name: 'Keyboard', price: '$129', image: 'https://via.placeholder.com/300' },
  { id: 8, name: 'Monitor', price: '$399', image: 'https://via.placeholder.com/300' },
]

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* TODO: Add responsive padding:
          - Mobile: p-4
          - Tablet: md:p-8
          - Desktop: lg:p-12
      */}
      <div className="">
        {/* TODO: Make the heading responsive:
            - Mobile: text-2xl
            - Tablet: md:text-3xl
            - Desktop: lg:text-4xl
            - Add font-bold and text-gray-800
            - Add bottom margin: mb-8
        */}
        <h1 className="">
          Our Products
        </h1>

        {/* TODO: Create a responsive grid:
            - Mobile: grid-cols-1 (1 column)
            - Tablet: md:grid-cols-2 (2 columns)
            - Desktop: lg:grid-cols-4 (4 columns)
            - Add gap between items: gap-6
        */}
        <div className="">
          {products.map((product) => (
            <div key={product.id}>
              {/* TODO: Style the product card:
                  - Background: white (bg-white)
                  - Rounded corners: rounded-lg
                  - Shadow: shadow-md
                  - Hover shadow on desktop: lg:hover:shadow-xl
                  - Transition: transition-shadow
                  - Overflow: hidden
              */}
              <div className="">
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />

                {/* TODO: Style the card content:
                    - Padding: p-4
                */}
                <div className="">
                  {/* TODO: Style the product name:
                      - Text size: text-lg
                      - Font weight: font-semibold
                      - Text color: text-gray-800
                      - Bottom margin: mb-2
                  */}
                  <h3 className="">
                    {product.name}
                  </h3>

                  {/* TODO: Style the price:
                      - Text size: text-xl
                      - Font weight: font-bold
                      - Text color: text-blue-600
                      - Bottom margin: mb-4
                  */}
                  <p className="">
                    {product.price}
                  </p>

                  {/* TODO: Style the button:
                      - Background: blue-500
                      - Hover background: hover:bg-blue-600
                      - Text: white
                      - Padding: px-4 py-2
                      - Rounded: rounded-md
                      - Full width: w-full
                      - Font weight: font-medium
                      - Transition: transition-colors
                  */}
                  <button className="">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
