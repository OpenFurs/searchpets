import { searchComics } from '../../../lib/redis'
import type { NextApiRequest, NextApiResponse } from 'next'
import { resolve } from 'path'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const sendData = (async () => {
    let comics = await searchComics(req.body.years, req.body.characters)
    console.log(comics)
    res.status(200).json(JSON.stringify(comics))
    resolve()
  })()
}
