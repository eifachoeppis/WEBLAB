import LoginButton from "./login-button";

export function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <strong>WEBLAB Tech-Radar</strong>
        </li>
      </ul>
      <ul>
        <LoginButton />
      </ul>
    </nav>
  );
}
