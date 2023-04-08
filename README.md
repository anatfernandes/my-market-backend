# :shopping_cart: My Market API

## Índice

- [Sobre](#Sobre)
- [Rotas](#Rotas)
  - [Listar categorias](#Listar-categorias)
  - [Listar produtos](#Listar-produtos)
  - [Buscar um produto pelo id](#Buscar-um-produto-pelo-id)
- [Como rodar em desenvolvimento](#Como-rodar-em-desenvolvimento)

<br/>

## Sobre

API de supermercado, uma solução prática e eficiente para quem deseja ter acesso rápido e fácil a categorias, que vão desde produtos de limpeza até alimentos e bebidas, e a diversos produtos disponíveis no mercado.

<br/>

## Rotas

**URL base:** `https://my-market-api.onrender.com/api`

<br/>

## Listar categorias

- Rota: `/categories`
- Método: `GET`
- Status code de sucesso: **200**
- Exemplo de Resposta:

  ```json
  [
  	{
  		"_id": "6428b25f49a98f8ef75f2add",
  		"name": "hortaliças",
  		"updatedAt": 1680388703775,
  		"createdAt": 1680388703775
  	}
  ]
  ```

<br/>

## Listar produtos

- Rota: `/products?page=`
- Método: `GET`
- Status code de sucesso: **200**
- Produtos por página: **10**
- Exemplo de Resposta:

  ```json
  [
  	{
  		"_id": "6428b26149a98f8ef75f2ae0",
  		"name": "Combo Chá Leão",
  		"image": "https://cdn.awsli.com.br/400x400/2532/2532767/produto/1925652215311b91fe6.jpg",
  		"categoryId": "6428b25f49a98f8ef75f2ada",
  		"price": 8175,
  		"isPromotion": true,
  		"updatedAt": 1680388705091,
  		"createdAt": 1680388705091
  	}
  ]
  ```

- Possíveis erros:

  | status code | motivo                                                                   |
  | ----------- | ------------------------------------------------------------------------ |
  | 400         | parâmetro _page_ ausente, com tipo diferente de _number_, ou menor que 1 |

<br/>

## Buscar um produto pelo id

- Rota: `/products/:id`
- Método: `GET`
- Status code de sucesso: **200**
- Exemplo de Resposta:

  ```json
  {
  	"_id": "6428b26149a98f8ef75f2ae0",
  	"name": "Combo Chá Leão",
  	"description": "Este combo possui uma Caixa de madeira com 6 compartimentos para armazenagem de chás. Sabores: Maçã, Frutas Vermelhas, Morango, Maracujá, Laranja, Gengibre, Hibisco, Rosa Silvestre, Amora, Mirtilo e Baunilha. Embalagem: 6 (seis) caixas com 10 (Dez) sachês. Totalizando 60 sachês. Saquinhos: Cada saquinho tem 1,6g de chá.",
  	"image": "https://cdn.awsli.com.br/400x400/2532/2532767/produto/1925652215311b91fe6.jpg",
  	"categoryId": "6428b25f49a98f8ef75f2ada",
  	"categoryName": "bebidas",
  	"originalPrice": 9890,
  	"isPromotion": true,
  	"promotionPrice": 8175,
  	"updatedAt": 1680388705091,
  	"createdAt": 1680388705091
  }
  ```

- Possíveis erros:

  | status code | motivo                                |
  | ----------- | ------------------------------------- |
  | 400         | id informado é inválido               |
  | 404         | não existe produto com o id informado |

<br/>

## Como rodar em desenvolvimento

**Atenção:** para rodar o projeto é preciso ter o [MongoDB](https://www.mongodb.com/docs/manual/installation/) instalado em sua máquina.

<br/>

1. Clone esse repositório:

   > ```bash
   > git clone https://github.com/AnaLTFernandes/my-market-backend.git
   > ```

2. Na raiz do projeto, instale as dependências:

   > ```bash
   > npm install
   > ```

3. Configure o arquivo `.env` usando como base o arquivo `.env.example`

4. Inicie o projeto:

   > ```bash
   > npm run dev
   > ```

5. Divirta-se nas rotas usando de URL base: `http://localhost:{ENV_PORT}`

6. [*Opcional*] Instale e configure o [frontend](https://github.com/AnaLTFernandes/my-market-frontend)

7. [*Opcional*] Rode os testes:

   > ```bash
   > npm run test
   > #ou
   > npm run test:watch
   > ```

8. [*Opcional*] Acompanhe a cobertura dos testes:
   > ```bash
   > npm run coverage
   > ```
