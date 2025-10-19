import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './css/global.css'
import { Product }  from './pages/Product'
import { Home } from './pages/Home'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

function Layout() {

  const [carrinho, setCarrinho] = useState([]);
  const [isCarrinhoOpen, setIsCarrinhoOpen] = useState(false);

  const adicionarAoCarrinho = (produto, quantidade, observacao) => {

    const obsNormalizada = observacao?.trim() || '';

    const produtoExiste = carrinho.find(item =>{
      const eMesmoProduto = String(item.idProduto) === String(produto.id);
      const eMesmaObs = (item.observacao?.trim() || '') === obsNormalizada;

      return eMesmoProduto && eMesmaObs;
    });

    if (produtoExiste) {      

      const novaQuantidade = produtoExiste.quantidade + quantidade;

      setCarrinho(carrinho.map(item => 
        item.id === produtoExiste.id ? { ...item, quantidade: novaQuantidade } : item
      ));

    } else {

    const novoItem = {

      id: crypto.randomUUID(),
      idProduto: produto.id,
      nome: produto.nome,
      imagem: produto.imagem,
      preco: produto.preco.por,
      vegano: produto.vegano,
      quantidade: quantidade,
      observacao: obsNormalizada
    };
    
  setCarrinho([...carrinho, novoItem]);

    }

  setIsCarrinhoOpen(true);

};

  const removerDoCarrinho = (id) => {
    setCarrinho(carrinho.filter(item => item.id !== id));
};

  const atualizarCarrinho = (id, novaQuantidade) => {
    setCarrinho(carrinho.map(item =>
      item.id === id ? { ...item, quantidade : novaQuantidade } :item
    ));

  }

  const limpaCarrinho = () => {
    setCarrinho([]);
  }



  const abreCarrinho = () => setIsCarrinhoOpen(true);
  const fechaCarrinho = () => setIsCarrinhoOpen(false);

  return (
    <div>
      <Header
        carrinho={carrinho}
        isCarrinhoOpen={isCarrinhoOpen}
        abreCarrinho={abreCarrinho}
        fechaCarrinho={fechaCarrinho}
        removerDoCarrinho={removerDoCarrinho}
        atualizarCarrinho={atualizarCarrinho}
        limpaCarrinho={limpaCarrinho} />
      <main>
        <Outlet context={{ adicionarAoCarrinho }} />
      </main>
      <Footer />
    </div>
  );
}


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/product/:id" element={ <Product /> } />
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)

