import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await axios.get('https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=London');
  res.status(200).json(response.data);
}