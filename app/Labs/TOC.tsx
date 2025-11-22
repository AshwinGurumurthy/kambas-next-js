"use client";

import { Nav } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TOC() {
  const pathname = usePathname();

  return (
    <Nav variant="pills">
      <Nav.Item>
        <Nav.Link
          as={Link}
          href="/Labs"
          className={pathname.endsWith("Labs") ? "active" : ""}
        >
          Labs
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          as={Link}
          href="/Labs/Lab1"
          className={pathname.endsWith("Lab1") ? "active" : ""}
        >
          Lab 1
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          as={Link}
          href="/Labs/Lab2"
          className={pathname.endsWith("Lab2") ? "active" : ""}
        >
          Lab 2
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          as={Link}
          href="/Labs/Lab3"
          className={pathname.endsWith("Lab3") ? "active" : ""}
        >
          Lab 3
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          as={Link}
          href="/Labs/Lab4"
          className={pathname.endsWith("Lab4") ? "active" : ""}
        >
          Lab 4
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          as={Link}
          href="/Labs/Lab5"
          className={pathname.endsWith("Lab5") ? "active" : ""}
        >
          Lab 5
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={Link} href="/">
          Kambaz
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="https://github.com/AshwinGurumurthy/kambas-next-js">My GitHub</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
