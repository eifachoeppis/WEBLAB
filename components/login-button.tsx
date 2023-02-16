import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
      <li>
        Signed in as <strong>{session.user && session.user.name}</strong>
      </li>
        <li>
          <button className="outline" onClick={() => signOut({callbackUrl: "/"})}>Sign Out</button>
        </li>
      </>
    );
  }
  return (
    <>
      <li>
        <button className="outline" onClick={() => signIn()}>Sign In</button>
      </li>
    </>
  );
}
