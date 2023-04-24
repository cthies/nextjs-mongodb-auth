import { useSession, signOut, signIn } from 'next-auth/react';
import Login from '../components/login';
import Logout from '../components/logout';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      {session?.user?.email ? (

        <Logout email={session?.user?.email} />

      ) : (

          <Login/>

      )}
    </div>
  )
}
