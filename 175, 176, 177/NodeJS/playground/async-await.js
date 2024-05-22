// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// fetchPromise
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data[0].name);
//   });

// async-await implementation for above;

async function fetchProduct() {
    try{
        const res = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
        if(!res.ok){
            throw new Error(res.status);
        }
        const data = await res.json();
        console.log(data[0].name);
    }
    catch(err){
        console.log(`Couldn't get the product: ${err}`)
    }
}
fetchProduct();