// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {id: 1, nome: 'Caneta', preco: 5.60},
    {id: 2, nome: 'Lapis', preco: 2.60},
    {id: 3, nome: 'Caderno', preco: 16.60},
    {id: 4, nome: 'Borracha', preco: 2.00}
  ])
}
