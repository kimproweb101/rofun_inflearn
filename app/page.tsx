import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata={
  title:"Next.js tutorial",
  description:"Next.js 튜토리얼 배우기"
}

export default function Home() {
  return <main>
    <Link href="/dashboard">dashboard</Link>
  </main>
}
