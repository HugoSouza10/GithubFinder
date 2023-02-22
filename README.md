
# Projeto Prático.

https://user-images.githubusercontent.com/51915862/220461667-2c97b36c-2e3e-4aab-8dc7-8ae98a972a6c.mp4






# Questões Teóricas

## 1. O que é autocomplete, autofocus e required nos campos de input?

Autocomplete: *É uma forma de filtrar dados, promovendo assim outros destinos de acordo com o que o cliente digita no campo de busca*.
	
Autofocus: *Consiste em deixar o campo focado assim que o sistema é carregado*.

Required:  *indica que um determinando campo de formulário é obrigatório para o envio do mesmo*


## 2. Qual keyCode do botão ENTER no evento de teclado?

	
*No React mais moderno essa Propriedade keyCode ficou obsoleta, ou seja não é mais recomendado usar, porém o keyCode é o 13 que indica o botão enter do teclado.  Uma forma moderna de saber o keyCode é usando e.key === 'Enter'. Se tiver usando o TypeScript podemos colocar a tipagem KeyboardEvent.*



## 3. Qual a lógica no React para, enquanto estiver carregando algo, bloquear alterações em campos?

*Para bloquear o campo, precisamos da propriedade disabled no input, essa propriedade recebe um true ou false.  Então podemos criar uma state e enviar um parâmetro para ele com true ou false, dependendo da situação ele vai habilitar ou não. Enquanto tiver fazendo a requisição deverá retornar true para o campo ficar bloqueado, quando terminar devemos alterar a state para false e liberar o campo.*


## 4. Para integração com Github, o que é necessário?

*Para integrar com o github precisamos fazer uma requisição http para este endereço: https://api.github.com. Nesse caso podemos fazer uma requisição com diversas formas como XMLHttpRequest, fetch ou bibliotecas como axios.*


