import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function index() {
  const route = useRouter();
  
  return (
    <div>
        <Link href="/post/121">
            <span>Post</span>
        </Link>
    </div>
  )
}
