'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import useMemo from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <Link href='/stop-watch'>
        Click Here to Use the Stopwatch 🙂
      </Link>
    </main>
  )
}
