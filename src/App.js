import './App.css';
import Button from './components/button/button';
import Paragraph, { paragraphUpperCase, paragraphLowerCase } from './components/paragraph/paragraph';



function App() {
  return (
    <>
      <Paragraph id={'firstParagraph'} text={'Bem vindo ao meu parágrafo colorido e maiúsculo.'} />

      <Button label='Deixar maiusculo' onClick={paragraphUpperCase} />
      <Button label='Deixar miniscúlo' onClick={paragraphLowerCase} />

    </>
  )
}

export default App;
