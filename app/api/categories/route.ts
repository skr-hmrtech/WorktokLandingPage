
import { NextResponse } from 'next/server'

export async function GET() {
  // Your API logic here
  const response = await fetch('http://localhost:3001/api/categories')
  const data = await response.json()
  return NextResponse.json(data)
}
