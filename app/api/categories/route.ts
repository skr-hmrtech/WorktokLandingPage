
import { NextResponse } from 'next/server'

export async function GET() {
  // Mock data for development
  const mockCategories = [
    {
      id: 1,
      name: "Home Cleaning",
      description: "Professional house cleaning services",
      icon: "🏠"
    },
    {
      id: 2,
      name: "Plumbing",
      description: "Expert plumbing repairs and installations",
      icon: "🔧"
    },
    {
      id: 3,
      name: "Electrical",
      description: "Licensed electrical services",
      icon: "⚡"
    },
    {
      id: 4,
      name: "Landscaping",
      description: "Garden and lawn maintenance",
      icon: "🌱"
    },
    {
      id: 5,
      name: "HVAC",
      description: "Heating and cooling services",
      icon: "🌡️"
    },
    {
      id: 6,
      name: "Painting",
      description: "Interior and exterior painting",
      icon: "🎨"
    },
    {
      id: 7,
      name: "Carpentry",
      description: "Custom woodwork and repairs",
      icon: "🔨"
    },
    {
      id: 8,
      name: "Pest Control",
      description: "Safe and effective pest management",
      icon: "🐛"
    }
  ]

  return NextResponse.json(mockCategories)
}
