   const form = document.getElementById("novoItem")
   const lista = document.getElementById("lista")
   const itens = JSON.parse(localStorage.getItem("itens")) || []

   itens.forEach((elemento) => {
        criaElemento(elemento)
   })

   form.addEventListener("submit", (evento) => {
        evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    const existe = itens.find ( elemento => elemento.nome === nome.value )
   
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    if (existe) {
        itemAtual.id = existe.id
        atualizaElemento(itemAtual)

        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual
    }else {
        itemAtual.id = itens[itens.length -1] ? (itens[itens.length-1]).id +1 : 0

        criaElemento(itemAtual)

        itens.push(itemAtual)
    }

    localStorage.setItem("itens", JSON.stringify(itens))

    nome.value = ""
    quantidade.value = ""

   })

   function criaElemento(item) {
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade
    numeroItem.dataset.id = item.id
    novoItem.appendChild(numeroItem)

    novoItem.innerHTML += item.nome

    novoItem.appendChild(botaoDeleta(item.id))

    lista.appendChild(novoItem)
 }

 function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
 }

 function botaoDeleta(id) {
    const elementoBotao = document.createElement("button")
    elementoBotao.innerText = "X"

    elementoBotao.addEventListener("click", function() {
        deletaElemento(this.parentNode, id)
    })

    return elementoBotao
 }

 function deletaElemento(tag, id) {
    tag.remove()

    itens.splice(itens.findIndex(elemento => elemento.id === id), 1)

    localStorage.setItem("itens", JSON.stringify(itens))
 }

 

// function soma(...valores){ 
//     res=0

//     for(let v of valores){
//         res+=v
//     }
//     return res;
// }

// console.log(soma(10,20,30,40,50,60,70,80,90,100))

// const f=function(...valores){
//     let res=0
//     for(v of valores){
//         res+=v
//     }
//     return res
// }

// console.log(f(10,5))

// const f=new Function("v1","v2","return v1+v2") //função Construtor anônima

// console.log(f(10,5))






// const soma=(v1,v2) =>{return v1+v2}
// console.log(soma(10,13))

// const soma1=(v1,v2) =>{
//     let res = v1+v2
//     return res
// }
// console.log(soma1(10,13))

// const nome = n => {return n}
// console.log(nome("Ytallo"))

// const add = n => n+=14
// console.log(add(12))




// const soma=(...valores)=>{
//     const somar=val=>{
//         let res=0
//         for(v of val)
//             res+=v
//         return res
//     }
//     return somar(valores)
// }
// console.log(soma(15,13,14))



// const somar=val=>{
//     let res=0
//     for(v of val)
//         res+=v
//     return res
// }
// const soma=(...valores)=>{
    
//     return somar(valores)
// }
// console.log(soma(15,13,14))
// //ou
// valor=[1,2,3]
// console.log(soma(...valor))






// function* cores(){
//     yield 'Vermelho '
//     yield 'Verde'
//     yield 'Azul'
// }

// let itc= cores()
// console.log(itc.next().value)
// console.log(itc.next().value)
// console.log(itc.next().value)
// console.log(itc.next().value) // undefined



// function* perguntas(){
// const nome = yield  'Qual seu nome?'
// const esporte = yield 'Qual seu esporte favorito?'

// return "Seu nome é " + nome + ', seu esporte favorito é ' + esporte

// }

// const itp = perguntas()
// console.log(itp.next().value)
// console.log(itp.next('Ytallo César').value)
// console.log(itp.next('Musculação').value)

// function* contador(){
//     let i=0

//     while(true){
//         yield i++
//     }
// }
// const itc=contador()
// for(let i=0; i<10; i++){
//     console.log(itc.next().value)
// }



// function* contador(){
//     let i=0
//     while(true){
//         yield i++
//         if(i>5){
//             break
//         }
//     }
// }
// const itc=contador()
// for(let c of itc){
//     console.log(c + ' Tentativa(s)')
// }





// const cursos=['HTML', 'CSS', 'JavaScript', 'PHP', 'React']
// cursos.map((el,i)=>{
//     console.log("Curso: " + el + " - Posição do Curso - " + i )
//     console.log(el + " " + i )
// })



// const cursos=['HTML', 'CSS', 'JavaScript', 'PHP', 'React']
// let c = cursos.map((el,i)=>{
//     return "<div>"+el+"</div>"
// })

// console.log(c)


// let el=document.getElementsByTagName("label")
// el=[...el]
// el.map((e,i)=>{
//     e.innerHTML="TESTE"
// })



// const el=document.getElementsByTagName("label")
// const val=Array.prototype.map.call(el,({innerHTML})=>innerHTML)
// console.log(val)



// const converterInt=(e)=>parseInt(e)
// let num=['1', '2', '3', '4', '5'].map(converterInt)
// console.log(num)

// const converterInt=(e)=>parseInt(e)
// const dobrar=(e)=>e*2
// let num=['1', '2', '3', '4', '5'].map(dobrar)
// console.log(num)



// function aluno(nome,nota){
//     this.nome=nome
//     this.nota=nota

//     this.dados_anonimo=function(){ 
//         setTimeout(function(){ //erro por causa do sombreamento setTimeout usando function()
//             console.log(this.nome)
//             console.log(this.nota)
//         },2000)
//     }
   
//     this.dados_arrow=function(){
//         setTimeout(()=>{ //forma correta de usar com arrow function
//             console.log(this.nome)
//             console.log(this.nota)
//         },2000)
//     }
    
// }     

// const al1=new aluno("Ytallo",9.5)

// al1.dados_anonimo() //undefined
// al1.dados_arrow()




// let colecaoHTML=[...document.getElementsByTagName("label")]

// colecaoHTML.map((e)=>{
//     e.innerHTML="TESTE"
// })




    //################# Teste para função #############

    // var a = []
    // a.push(parseInt(item.quantidade))
    // var b = [1]
    // var c = 0


    // for(var i = 0; i<a.length; i++){
    //     c += (a[i]+b[i])
        
    // }
    
    // d = JSON.stringify(c)

    // console.log(d)
    // numeroItem.innerText = 'blablabla\n' + numeroItem.innerText
    // numeroItem.appendChild(d.quantidade)