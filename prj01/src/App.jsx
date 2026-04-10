import jogo from './assets/God_of_War_Ragnarok_capa.jpg'
import principe from './assets/principe-book.jpeg'
import plato from './assets/República.jpg'
import holmes from './assets/Estudo.jpg'
import samurai from './assets/Musashi.jpg'
import absurdo from './assets/Camus.jpg'
import './App.css'
import Card from './components/Card'


function App() {
  

  return (
    
    <main>
      <Card book={jogo} title ="God of War: Ragnorök" description ="God of War Ragnarök encerra a saga nórdica com Kratos e seu filho adolescente, Atreus, viajando pelos Nove Reinos durante o Fimbulwinter para evitar o apocalipse profetizado. Eles enfrentam deuses nórdicos como Thor e Odin, enquanto Atreus busca entender seu papel como Loki e Kratos luta para proteger seu filho e seu passado." texto ="Saiba mais" />
      <Card book = {principe} title = "O Príncipe"
      description="Publicado em 1532 pelo controverso e complexo filósofo Maquiavel, O Príncipe traz uma abordagem direta e desapaixonada acerca da natureza e do poder político. Neste tratado, o autor defende conceitos pragmáticos, entre os quais a ideia de um governante ser capaz de agir sem restrições morais para manter o controle de seu estado. Com base em exemplos históricos e em sua própria experiência como diplomata, Maquiavel também oferece conselhos práticos sobre como conquistar e manter o poder, reforçando, ainda, a importância de manter a lealdade do povo e dos aliados. Trata-se de um livro que oferece uma visão única e fascinante do mundo político de sua época, repleta de intrigas, conflitos e traições." texto= "Saiba mais"/>
      <Card book = {plato} title = "A República"
      description="A República é a obra mais importante de Platão filósofo grego que vivem entre os séculos V e IV antes de Cristo. De caráter político, prega um Estado ideal governado por líderes justos, sábios e instruídos. Para Platão, o homem capaz de reunir essas qualidades seria o filósofo. Ele mesmo teve a oportunidade de colocar em prática suas ideias, por três, todas fracassadas. Em A República Platão passa em revista todos os sistemas de governo existentes na época e analisa sobretudo a aristocracia, a oligarquia, a democracia e a ditadura. Ainda que reconheça que sua república é uma utopia, defende que esse seria o único caminho para uma sociedade perfeita. À parte alguns princípios sociais inaceitáveis hoje, tudo é de tamanha atualidade que até parece retratar os nossos dias, apesar de ter sido escrita há mais de 2.300 anos." texto= "Saiba mais"/>
      <Card book = {holmes} title = "Um Estudo em Vermelho"
      description="Publicado originalmente em 1887, Um estudo em vermelho chegou a ser considerado uma espécie de 'livro do Gênesis' para os casos de Sherlock Holmes, pois marca não só a primeira aparição pública do detetive mais popular da literatura universal como o primeiro encontro entre Holmes e Watson. Ao buscar conhecer melhor seu novo amigo, em pouco tempo Watson vê-se envolvido numa história sinistra de vingança e assassinato...
      Essa edição traz texto integral e cerca de 30 ilustrações originais. A versão impressa apresenta capa dura e acabamento de luxo." texto= "Saiba mais"/>
      <Card book = {samurai} title = "O Livro dos Cinco Anéis"
      description="O Livro dos Cinco Anéis é mais do que um simples manual de artes marciais. É um guia filosófico que busca transmitir as lições de Musashi sobre a excelência pessoal, a estratégia de combate e a busca da verdade interior. Suas ideias continuam a influenciar pessoas em diferentes áreas até os de hoje." texto= "Saiba mais"/>
      <Card book = {absurdo} title = "A morte feliz"
      description="Apesar da morte precoce, Albert Camus deixou um legado para a sociedade e para cada indivíduo, iluminando os problemas da consciência humana. Nesta obra, o autor nos mostra um vislumbre de sua filosofia de ação e responsabilidade moral que faria dele e a figura central do pensamento de nosso tempo. Ele acredita que, para conquistar a felicidade, é necessário ser independente, livre, mas também ter dinheiro; a pobreza é a condição que impede a vida feliz.

      Esta obra foi o trabalho precursor de seu livro mais famoso, O estrangeiro. O protagonista Patrice Mersault de A morte feliz tem características muito semelhantes a Meursault de O estrangeiro, ambos são franco-argelinos e levam uma vida difícil em uma sociedade indiferente. Em A morte feliz, o protagonista mata um homem a sangue frio, e acompanhamos sua jornada por várias fases, como exílio, hedonismo, privação e morte. " texto= "Saiba mais"/>


    </main>
  )
}

export default App
