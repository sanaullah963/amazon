'use client'

import Container from "./Container"

interface props {
  products : any
}
function Products({products}:props) {
  let item = products;
  // console.log(item[2]);
  
  return (
    <main>
      <Container className={'grid grid-cols-4 gap-9'}>
        {
          // item.map((item)=>(item))
        }
        
        
      </Container>
    </main>
  )
}

export default Products