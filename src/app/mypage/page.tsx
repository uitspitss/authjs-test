'use client';

import { auth } from '@/auth';
import Link from 'next/link';
import { getMe } from '../lib/fetch-actions';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

export default function MyPage() {
  // const session = await auth();
  const session = useSession()
  const [me, setMe] = useState<any>()
  console.log('🚧 | MyPage | me:', me);

  // const me = await getMe(session?.user?.email)

  useEffect(() => {
    if (!session) return

    const fetchMe = async () => {
      const res = await getMe(session?.user?.email)
      console.log('🚧 | fetchMe | res:', res);
      setMe(res)
    }
    fetchMe();
    // console.log('me', me)
  }, [session])

  return (
    <main className='flex min-h-screen flex-col items-center'>
      <h1 className='my-6 text-center text-2xl'>マイページ</h1>
      <div className='flex flex-col gap-4'>
        <div className='bg-gray-200 rounded-tl-md rounded-tr-md px-2 py-1.5 text-sm'>
          ユーザー情報
        </div>
        {/* <pre className='bg-gray-100 rounded-bl-md rounded-br-md p-2'>
          {JSON.stringify(session, null, 2)}
        </pre> */}
        {/* <pre className='bg-gray-100 rounded-bl-md rounded-br-md p-2'>
          {JSON.stringify(me, null, 2)}
        </pre> */}
      </div>
      <Link
        href='/'
        className='bg-green-500 text-white rounded-lg px-8 py-2 mt-6 hover:bg-green-400 focus-visible:outline-offset-2'
      >
        ホーム
      </Link>
    </main>
  );
}
