import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import LoginButton from "./login-button";

export function Navigation() {
  const session = useSession();
  return (
    <nav>
      <ul>
        <li>
          <strong>WEBLAB Tech-Radar</strong>
        </li>
      </ul>
      <ul>
        <li>
          <input id="theme-toggle" type="checkbox" role="switch" />
        </li>
        <LoginButton />
      </ul>
    </nav>
  );
}
