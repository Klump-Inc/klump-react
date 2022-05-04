# klump-react

> Klump component for React that helps you integrate Klump - https://useklump.com/ easily"

[![NPM](https://img.shields.io/npm/v/klump-react.svg)](https://www.npmjs.com/package/klump-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save klump-react
```

## Usage

```jsx
import React, {useState} from 'react'

import { KlumpCheckout } from 'klump-react'



const ExampleComponent = () => {
   const [data, setData] = useState(
     {
       amount: 4100,
       shipping_fee: 100,
       currency: 'NGN',
       redirect_url: 'https://verygoodmerchant.com/checkout/confirmation',
       merchant_reference: 'what-ever-you-want-this-to-be',
       meta_data: {
         customer: 'Elon Musk',
         email: 'musk@spacex.com'
       },
       items: [{
         image_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
         item_url: 'https://www.paypal.com/in/webapps/mpp/home',
         name: 'Awesome item',
         unit_price: '2000',
         quantity: 2,
       }]
     }
   )

    const payWithKlump = () => {
        const payload = {
           publicKey: 'klp_pk_1234abdc5678',
           data,
           onSuccess,
           onError,
           onLoad,
           onOpen,
           onClose
        }

        new Klump(payload)
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

  return <KlumpCheckout onClick={payWithKlump}/>
}

export default ExampleComponent
```

## License

MIT © [Klump-Inc](https://github.com/Klump-Inc) - see the [LICENSE.md](LICENSE) file for details

