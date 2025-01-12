import { A } from "vaderjs";

export default function Navbar () {
  return (
    <nav>
      <ul class="flex text-lg justify-between gap-5">
        <li>
          <A href="/">MW</A>
        </li>
        <li class="flex gap-5">
          <A
            href="/about"
            class="hover:underline hover:animate-bounce hover:underline-offset-2"
          >
            About{" "}
          </A>
          <A
            href="/work"
            class="hover:underline hover:animate-bounce hover:underline-offset-2"
          >
            Work
          </A>
        </li>
      </ul>
    </nav>
  );
}
