export function getStaticPaths() {
  return {
    fallback: false, // gera erro 404
    paths: [
      { params: { id: '1'}},
      { params: { id: '2'}},
      { params: { id: '3'}},
      
    ]
  }
}

export function getStaticProps() {
  return {
    props: {}
  }
}
//geração de conteúdo estático sem conteúdo fixo
export default function AlunoPorId() {
  return (
    <div>
      <h1>Detalhes do aluno</h1>      
    </div>
  )
}