export async function getStaticPaths() {
  const resp = await fetch('http://localhost:3000/api/alunos/tutores ')
  const ids = await resp.json()

  const paths = ids.map(id => {
    return { params: { id: `${id}` }}
  })


  return {
    fallback: false, // gera erro 404
    paths        
  }
}

export async function getStaticProps({ params }) {
  const resp = await fetch('http://localhost:3000/api/alunos/${params.id}')
  const aluno = await resp.json()
  return {
    props: {
      aluno
    }
  }
}
//geração de conteúdo estático sem conteúdo fixo
export default function AlunoPorId(props) {
  const { aluno } = props
  return (
    <div>
      <h1>aluno</h1>   
      <ul>
        <li>aluno.id</li>
        <li>aluno.nome</li>
        <li>aluno.email</li>
      </ul>   
    </div>
  )
}