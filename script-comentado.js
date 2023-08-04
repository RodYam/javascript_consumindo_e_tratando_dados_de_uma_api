// Podemos destrinchar o fluxo de execução de tarefas em JavaScript em três partes: Event Loop, Call Stack e Task Queue. O Event Loop é um ciclo que monitora e executa as ações que mandamos para o JavaScript. O processo de leitura do código só é finalizado quando não existem mais ações a serem executadas. A call stack é um mecanismo que organiza como irá funcionar o script quando existem muitas funções: qual função está sendo executada, quais estão sendo chamadas dentro de alguma função, etc. Por fim, a task queue é a fila de tarefas assíncronas. Se algo precisa ocorrer em segundo plano ou mais tarde, é nessa fila que ele será adicionado e executado mais tarde.

// API é Interface de Programação de Aplicações.

// O método Fetch é assíncrono e tem como parâmetro obrigatório a URL da API. Ou seja, usamos o ViaCEP, usando outra opção, obteríamos outro link, e é esse link que é obrigatório, o único parâmetro obrigatório desse método.

var consultaCep = fetch('https://viacep.com.br/ws/01001000/json/') //API viacep. Consumindo dados da API pelo metodo fetch.
.then(resposta => resposta.json())
.then(r => {
    if (r.erro) {
        throw Error('Esse CEP não existe!')
    } else
        console.log(r)
    })
.catch(erro => console.log(erro)); 

// Lembra que comentei sobre uma entrega, que estávamos esperando receber, e esse status de entrega era como uma promessa? E quando ela era entregue, essa promessa era resolvida, e quando acontecia alguma coisa com o entregador, a promessa era rejeitada? Então, em qualquer uma dessas situações, a resposta que vai chegar em nós, é um objeto do tipo Response. E como fazemos para acessar esse objeto? Vamos no trecho de código, que criamos aquela variável consultaCEP. Então, ao final do fetch, você vai colocar: .then ();.

// Em um panorama mais geral, uma promessa sempre vai retornar um objeto do tipo response, seja ela rejeitada ou resolvida. E esse then() funciona assim, como a sua tradução. Ele é basicamente um “então”. Que é: faça o fetch, ele vai lá e faz a requisição.

// E então, com aquela resposta, ele vai fazer alguma operação que vamos colocar dentro do then(). E a resposta, sendo do objeto do Response, não vem da maneira que podemos acessar. Vamos precisar converter. Que é da mesma maneira que, como se aquela encomenda que eu estava comentando, ela tivesse vindo com a voltagem 110V, e as tomadas da sua casa são 220V, e você precisa de um adaptador.

// Ele vai fazer essa conversão de voltagem para você poder usar o seu aparelho. Vamos fazer a mesma coisa que essa resposta. Então, vamos colocar: resposta =>;, porque estamos formando uma arrow function. E a resposta, vamos colocar novamente json(). O objeto do tipo Response nos trouxe um corpo de resposta que não conseguíamos acessar. Ele trouxe um amontoado de bytes. Usamos o JSON para ele converter essa resposta em json, que é um formato muito usado no desenvolvimento em JavaScript, porque ele parece um objeto JavaScript. Então, vamos conseguir acessá-lo. Mas ainda assim, salvando essa alteração, vamos ver o resultado. Salvei e agora eu vou testar o que retorna para nós. Cliquei na tecla “F5”, ainda não exibiu nada. Porque eu só fiz a conversão, eu não pedi para exibir na tela.

// E seguindo a lógica do then(), sendo “então”, vamos colocar outro then(), quando fecha o anterior. Então, no final vamos incluir .then(). Eu vou pegar novamente uma resposta ou eu vou colocar “r”, (r =>). É novamente uma arrow function: console.log. E vai imprimir esse “r”: console.log(r). Vou salvar e ir no navegador, clicar na tecla “F5”, novamente. Ele primeiro fez a promessa, nos disse que ela estava executando, e depois imprimiu o valor dela. Ainda na linha da variável que pedimos o console.log, e imprimiu todos os dados que precisávamos: o bairro, o CEP e o complemento.

// Você pode interpretar assim: catch em português significa "pegue". Assim, caso aconteça algum erro, ele pega o erro e imprime na tela. Basicamente podemos entender dessa forma para ficar mais fácil de entender como ele está funcionando.

// Vou colocar if, uma condicional que significa "se". Se (r.erro) for verdade, eu quero que ele faça alguma operação. Coloquei duas chaves de novo, o que estiver ali dentro é um código. E vou colocar throw Error ('').

// Entre os parênteses: ('Esse cep não existe!') E se não for verdade, então else, ele vai dar o console.log(r). O que aconteceu? Eu vou salvar, só que esse erro também não vai dar certo, porque eu quero um CEP que não existe. Então eu vou colocar no fetch, em que tem o CEP, eu vou colocar 01001250. Não deve existir, vou salvar e vamos analisar no navegador o que aconteceu. Vou recarregar.

// Agora ele deu esse erro de que o CEP não existe. Por que eu fiz esse tratamento, do (r.erro)? Vamos no viaCEP comigo. Quando ele fala da validação do CEP, no site do viaCEP, ele nos explica como lidar com erros.

// para CEPs que não existem, ele não vai voltar reject, ele não vai no catch, mas no then. E para pegarmos esse erro, temos que fazer essa condicional. Se o retorno foi um erro igual a true, não precisamos informar que é true. Eu só coloquei (r.erro), ele vai imprimir um erro chamado de "Esse cep não existe!". E o catch vai pegar aquele erro que eu coloquei. E caso não esteja incorreto, ele vai continuar, vai dar o else console.log(r) e imprimir sem mandar erro nenhum

console.log(consultaCep);