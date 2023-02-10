import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
      <li>
        Signed in as {session.user.name}
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
        <Link href="/administration">
            <button className="outline">Administration</button>
        </Link>
      </li>
    </>
  );
}
