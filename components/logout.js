import { useSession, signOut } from 'next-auth/react';

function Login({email}) {
    return (
        <>
          <h1>Hello {email}</h1>
          <button onClick={() => signOut({ redirect: true, callbackUrl: '/'})}>Sign Out</button>
        </>
    )
}

export default Login;