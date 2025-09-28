import db from '../db.json'
import PlantImage from '../assets/Plant.png'
import CowImage from '../assets/Cow.png'
import '../css/Home.css'
import  CardProduto  from '../components/CardProduto'


export function Home() {

  const classicos = db.produtos.filter(produto => produto.categoria === "classicos");
  const gelados = db.produtos.filter(produto => produto.categoria === "gelados");

  return (
    <>    
      <main>
        <section className="slogan">
          <div className="container">
            <h1 className="slogan__title">Fragrância e sabor elevado ao cubo</h1>
            <p className="slogan__text">
              Explore nossa variedade de blends exclusivos e saboreie a perfeição em cada gole.
            </p>
          </div>
        </section>
        <section className="products">
          <div className="container">
            <h2 className="products__title">Clássicos</h2>
            <div className="products__list">
              
              {classicos.map((produto, index) => (
                <CardProduto item={produto} key={produto.id} />
              ))}
              
            </div>
          </div>
        </section>
        <section className="products">
          <div className="container">
            <h2 className="products__title">Gelados</h2>
            <div className="products__list">

              {gelados.map((produto, index) => (
                <CardProduto item={produto} key={produto.id} />
              ))}
              
            </div>
          </div>
          <div></div>
        </section>
      </main>      
    </>
  )
}
