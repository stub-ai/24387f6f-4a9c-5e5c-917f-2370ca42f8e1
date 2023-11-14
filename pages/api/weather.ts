import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const city = req.query.city || 'london';
  const response = await axios.get(`https://gpt.saikeai.com/weather.php?city=${city}`);
  res.status(200).json(response.data);
}