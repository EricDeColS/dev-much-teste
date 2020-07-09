## dev-much-teste
# DeliveryMuch Tech Challenge
Esta API foi um desafio proposto pelo time de recrutamento da DeliveryMuch. Sua proposta é, ao consumir duas API (RecipePuppy e Giphy) e assim retornar titulo de receitas, com lista de ingredientes e um link com um gif da receita.

## Instruções para rodar
Primeiramente, após fazer o download ou clonar o projeto, é necessario adicionar no arquivo .env que está na raiz do projeto, logo após "GIPHY_API_KEY=", uma chave para a API do Giphy. Caso não possua, uma chave poderá ser obtida clicando [aqui](https://developers.giphy.com/).

Exemplo de inserção da chave de acesso:
```
GIPHY_API_KEY=127836187246exemplof987123b
```

### Rodando no __docker__
Na pasta do projeto digite:
```
sudo docker build -t ericsales-api
```
```
sudo docker run -it -p 3000:3000 ericsales-api
```

### Rodando no __docker-compose__
Requer o docker-compose, digite o comando a seguir no diretorio do projeto:
```
docker-compose up
```
### Rodando com NPM
```
npm install
npm start
```
### Rodando com YARN
```
yarn install
yarn start
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
    {
    "keywords": [
        "apple",
        "banana"
    ],
    "recipes": [
        {
            "title": "Groovy Green Smoothie",
            "ingredients": [
                "apple",
                "banana",
                "grapes",
                "spinach"
            ],
            "link": "http://allrecipes.com/Recipe/Groovy-Green-Smoothie/Detail.aspx",
            "gif": "https://media0.giphy.com/media/1kMBl3iwHj8Iw/giphy.gif?cid=142993c05c0f91138a1e37097043a4ef4cf2ac242b6c7972&rid=giphy.gif"
        },
        {
            "title": "Sunday Best Fruit Salad",
            "ingredients": [
                "apple",
                "banana",
                "kiwi",
                "strawberries"
            ],
            "link": "http://allrecipes.com/Recipe/Sunday-Best-Fruit-Salad/Detail.aspx",
            "gif": "https://media0.giphy.com/media/xUA7aUxCScDJLTwemA/giphy.gif?cid=142993c0592645d8a67a067e4a6f81ccd3c0b19139ef2966&rid=giphy.gif"
        },
        {
            "title": " Pineapple & Fruit Salad Recipe  ",
            "ingredients": [
                "apple",
                "banana",
                "pineapple",
                "vanillapuddingmix"
            ],
            "link": "http://cookeatshare.com/recipes/pineapple-fruit-salad-49402",
            "gif": "https://media0.giphy.com/media/YMShTviqV7fG4iszxJ/giphy.gif?cid=142993c002c98f713f4782f5381ef1794ca0957d42c26598&rid=giphy.gif"
        }
    ]
}
```
Para obter uma resposta válida é necessário que haja no mínimo 1 ingrediente no endpoint e no máximo 3. Qualquer utilização fora destes limites retornará uma mensagem de erro.

# Testes

Os testes estão no diretório ```__testes__``` na raiz do projeto. Para rodar os testes execute:
### NPM
```
npm install
npm run test
```
### YARN
```
yarn install
yarn run test
```
