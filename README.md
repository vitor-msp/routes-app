# Routes App

Site para obtenção das melhores rotas para transporte em um mapa (grafo).

O backend está disponibilizado no GitLab e pode ser acessado [aqui](https://gitlab.com/vitor-msp/desafio-dev-jr-pl)

## Execução

1. Clonar este repositório
```
git clone https://github.com/vitor-msp/routes-app.git
```

2. Acessar a pasta baixada
```
cd routes-app
```

3. Executar o docker-compose

Obs.1: as portas 3000 e 8080 da sua máquina devem estar liberadas

```
sudo docker-compose up -d
```

## Testes e Considerações

1. A documentação da api foi desenvolvida pelo [Swagger](https://swagger.io/) e se encontra disponível [aqui](http://localhost:8080/api-docs/), onde a API poderá ser testada

2. Caso seja necessário organizar seu conteúdo json para testes pelo Swagger, é possível usar a página html disponível [aqui](http://localhost:8080/json-beautify)

3. Para utilizar o site, basta acessar [aqui](http://localhost:3000)