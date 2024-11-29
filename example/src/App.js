import React, {useState} from 'react'

import { KlumpCheckout } from 'klump-react'

const products = [{
    name: "Iphone 4",
    price: 100000
  },
  {
    name: "Iphone 5",
    price: 200000
  },
  {
    name: "Iphone 6",
    price: 150000
  },
]

const App = () => {
  

   const [product, setProduct] = useState({})
   const [productPrice, setProductPrice] = useState(0)
   const [quantity, setQuantity] = useState(1)
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")

    const payWithKlump = () => {
        // You can run your validation checks here
        const data = {
          amount: productPrice * quantity,
          currency: 'NGN',
          meta_data: {
            customer: name,
            email: email
          },
          items: [{
            name: product,
            quantity: parseInt(quantity),
            unit_price: productPrice
          }]

        }
       
        // eslint-disable-next-line no-undef
        new Klump({
            publicKey: 'klp_pk_1234abdc5678',
            data,
            onSuccess,
            onError,
            onLoad,
            onOpen,
            onClose
        })
    }

    const handleProductChange = (e) => {
      setProduct(e.target.value)
      setProductPrice(products.find(product => product.name === e.target.value).price)
    }

    const onSuccess = (data) => {
      console.log('html onSuccess will be handled by the merchant');
      console.log(data);
      return data;
    }
    const onError = (data) => {
      console.log('html onError will be handled by the merchant');
      console.log(data);
    }

    const onLoad = (data) => {
      console.log('html onLoad will be handled by the merchant');
      console.log(data);
    } 

    const onOpen = (data) => {
      console.log('html OnOpen will be handled by the merchant');
      console.log(data);
    }
    const onClose = (data) => {
      console.log('html onClose will be handled by the merchant');
      console.log(data);
    }

  return (
      <section>
        <h1>Buy Now</h1>
        <form className="container">
            <div>
                <label htmlFor="name">
                    <strong>Full Name</strong>
                </label>
                <input onChange={(e) => setName(e.target.value)} required type="text" placeholder="Enter full name"  />
            </div>
            <div>
                <label htmlFor="email">
                <strong>Email Address</strong>
                </label>
                <input onChange={(e) => setEmail(e.target.value)} required type="text" value={email} placeholder="Enter email" name="email" />
            </div>
             <div>
                <label htmlFor="product">
                <strong>Product</strong>
                </label>
                <select onChange={handleProductChange} name="product" value={product} id="product">
                  <option value="">Please select a product</option>
                  {products.map(product => (
                    <option key={product.name} value={product.name} >{product.name}</option>
                  ))}
                </select>
            </div>
            <div>
                <label htmlFor="quantity">
                <strong>Quantity</strong>
                </label>
                <input onChange={(e) => setQuantity(e.target.value)} min="1"  type="number" value={quantity} placeholder="quantity" name="quantity" required />
            </div>
             <h2>Total: {productPrice * quantity}</h2>
            <KlumpCheckout onClick={payWithKlump}/>
        </form>
    </section>
  )
  

}

export default App
