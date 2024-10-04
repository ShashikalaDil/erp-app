import Image from "next/image";

export default function Nav() {
  return (
    <div flex>
      <ol>
        <li>
          <Image
            className="dark:invert"
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </li>
        <li>
            <button>toggle</button>
        </li>
      </ol>
    </div>
  );
}
