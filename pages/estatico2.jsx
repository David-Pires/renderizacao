export function getStaticProps() {
  return {
    props: {
      numero: Math.random(),
    },
  };
}
// Em ambiente de desenvolvimento esta mesma função mesmo sendo estática continua sendo chamada
//GetStaticProps() a requisição em ambiente de produção só é solicitado uma única vez
export default function Estatico2(props) {
  return (
    <div>
      <h1>Estático #02</h1>
      <h2>{props.numero}</h2>
    </div>
  );
}
