# dev-much-teste
## DeliveryMuch Tech Challenge
Esta API foi um desafio proposto pelo time de recrutamento da DeliveryMuch. Sua proposta é, ao consumir duas API (RecipePuppy e Giphy) e assim retornar titulo de receitas, com lista de ingredientes e um link com um gif da receita.

# Instruções para rodar
Primeiramente, após fazer o download ou clonar o projeto, é necessario adicionar no arquivo .env que está na raiz do projeto, logo após "GIPHY_API_KEY=", uma chave para a API do Giphy. Caso não possua, uma chave poderá ser obtida clicando [aqui](https://developers.giphy.com/).

Exemplo de inserção da chave de acesso:
```
GIPHY_API_KEY=127836187246exemplof987123b
```

## Rodando no __docker__:
Na pasta do projeto digite:
```
sudo docker build -t ericsales-api
```
```
sudo docker run -it -p 3000:3000 ericsales-api
```

## NPM
```
npm install
npm run test
```
## YARN
```
yarn install
yarn run test
```
# Exemplo de como utilizar a API:

Nesta API existe apenas um endpoint, que segue o padrão:

``` 
http://{HOST}/recipes/?i={ingredient_1},{ingredient_2}= 
```
Um exemplo real de uso em ambiente local seria:

```
http://127.0.0.1:3000/recipes/?i=banana,apple
```
A resposta da requisição segue a seguinte estrutura:
```
{
    "keywords": [
        "apple",
        "banana"
    ],
    "recipes": [
        {
            "title": "Apple Stacks",
            "ingredients": "almond butter, apple, banana, carrot, raisins",
            "link": "http://www.recipezaar.com/Apple-Stacks-190858",
            "gif": "https://media0.giphy.com/media/QrDHLs1py45IA/giphy.gif?cid=142993c08c94f20cdf78ef04e1051aa381080866362db961&rid=giphy.gif"
        },
        {
            "title": "\nPineapple &amp; Fruit Salad Recipe\n\n",
            "ingredients": "pineapple, vanilla pudding mix, banana, apple",
            "link": "http://cookeatshare.com/recipes/pineapple-fruit-salad-49402",
            "gif": "https://media3.giphy.com/media/YMShTviqV7fG4iszxJ/giphy.gif?cid=142993c0fad6e85c42ff715a30457eb512f333c9e0a722ea&rid=giphy.gif"
        },
    ]
}
```
Para obter uma resposta válida é necessário que haja no mínimo 1 ingrediente no endpoint e no máximo 3. Qualquer utilização fora destes limites retornará uma mensagem de erro.
# Testes

Os testes estão no diretório ```__testes__``` na raiz do projeto. Para rodar os testes execute:
NPM
```
npm install
npm run test
```
YARN
```
yarn install
yarn run test
```
