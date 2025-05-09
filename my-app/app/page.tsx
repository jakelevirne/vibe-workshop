import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Hello, Sun!</h1>
      <Image
        src="/beach-scene.svg"
        alt="Beach scene with sun and clouds"
        width={400}
        height={300}
      />
    </main>
  );
}
