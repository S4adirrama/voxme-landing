"use client"

import Link from "next/link"

const navItems = [
  { name: "Voxme Music", active: true, new: true },
  { name: "Voice Effects", active: false },
  { name: "Audio Controls", active: false },
  { name: "Beat Generator", active: false },
  { name: "Vocal Synthesis", active: false },
]

export default function SubNavigation() {
  return (
    <nav className="bg-black border-b border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center space-x-8 h-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href="#"
              className={`text-sm font-medium transition-colors flex items-center space-x-2 ${
                item.active ? "text-lime-400" : "text-gray-400 hover:text-white"
              }`}
            >
              <span>{item.name}</span>
              {item.new && <span className="bg-lime-400 text-black text-xs px-1.5 py-0.5 rounded font-bold">New</span>}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
