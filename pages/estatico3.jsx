
//Incremental Static Regeneration 
//a propriedade revalidate
//aqui foi colocada em segundos revalidate:7, onde o next entendera que o conteúdo não é mais válido e irá solicitar revalidação para que seja gerada uma nova página
// Em produção NPM START durante 7 segundos não conseguimos gerar novos valores pelo método Math.random(), e após 7 segundos é possível que um novo valor seja gerado. 
export function getStaticProps() {
  return {
    revalidate: 7,//segundos
    props: {
      numero: Math.random(),
    },
  };
}

export default function Estatico3(props) {
  return (
    <div>
      <h1>Estático #03</h1>
      <h2>{props.numero}</h2>
    </div>
  );
}
