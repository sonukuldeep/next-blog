import type { NextApiRequest, NextApiResponse } from 'next'
// ./pages/api/exit-preview.ts

export default function exit(req: NextApiRequest, res: NextApiResponse) {
    res.clearPreviewData()
    res.writeHead(307, {Location: '/'})
    res.end()
}