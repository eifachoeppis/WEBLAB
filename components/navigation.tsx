import Link from "next/link";
import LoginButton from "./login-button";
import { useSession } from "next-auth/react";

export function Navigation() {
  const { data: session } = useSession();
  return (
    <nav>
      <ul>
        <li>
          <strong>WEBLAB Tech-Radar</strong>
        </li>
      </ul>
      <ul>
        {session &&
          <li>
            <Link href="/administration">
              <button className="outline">Administration</button>
            </Link>
          </li>
        }
        <LoginButton />
      </ul>
    </nav>
  );
}
