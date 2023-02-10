import Link from "next/link";

export function Navigation() {
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
      </ul>
    </nav>
  );
}
