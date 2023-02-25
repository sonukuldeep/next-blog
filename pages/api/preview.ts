import type { NextApiRequest, NextApiResponse } from 'next'

// ./pages/api/preview.ts

export default function preview(req: NextApiRequest, res: NextApiResponse) {
    res.setPreviewData({})
    res.writeHead(307, { Location: '/' })
    res.end()
}