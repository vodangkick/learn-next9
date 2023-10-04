import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/image'
import ImageNew from '../../assets/images/corgi.jpg';


export default function index() {
  const route = useRouter();

  return (
    <div>
      <Image src={ImageNew} width={300} alt="asdsd" priority />
      <Link href="/post/121">
        <span>Post</span>
      </Link>
    </div>
  );
}
