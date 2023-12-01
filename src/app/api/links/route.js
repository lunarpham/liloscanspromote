import linkList from '@/lib/linkList'

export async function GET(req) {
  const data = linkList;

  return Response.json({
    total: data.length,
    items: data
  })
}