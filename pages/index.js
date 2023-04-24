import { useSession, signOut, signIn } from 'next-auth/react';
import Link from 'next/link';

export default function Home({ products }) {
  const { data: session } = useSession();

  return (
    <div>
      {session?.user?.email ? (
        <>
          <h1>Hello {session?.user?.email}</h1>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      ) : (
        <>
          <h1>Please create an account to see our products</h1>
          <Link className='btn' href="/login" legacyBehavior={false}>Login or create account</Link>
        </>
      )}
    </div>
  )
}
