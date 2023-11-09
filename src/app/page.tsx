import Carusel from "@/components/Carousel";
import Products from "@/components/Products";
import Menu from "@/components/Menu";

const getDataFromApi = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/products")
  if(!res.ok){
    console.log('API data not caching this time');
  }
  return res.json();
};

const Home = async ()=> {
  const products = await getDataFromApi()
  
  return (
    <main>
      <Menu />
      <Carusel />
      <Products products={products}/>
      
    </main>
  );
}
export default Home
