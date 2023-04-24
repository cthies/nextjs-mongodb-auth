import Link from 'next/link';

function Login() {
    return (
        <>
          <h1>Please create an account to see our products</h1>
          <Link className='btn' href="/login" legacyBehavior={false}>Login or create account</Link>
        </>
    )
}

export default Login;