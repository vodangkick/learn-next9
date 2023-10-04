import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

export default function post() {
  const route = useRouter();
  
  return (
    <div>
        <h1>{ route.query.id }</h1>
        <Link href="/user">
            <span>User</span>
        </Link>
    </div>
  )
}
