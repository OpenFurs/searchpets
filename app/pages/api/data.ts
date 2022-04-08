import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // send the data to the flask server
  fetch('http://localhost:5000/data')
    .then(response => response.json())
    .then(data => {
      res.status(200).json(data)
    })
}