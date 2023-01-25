import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="rounded-lg bg-gray-100 shadow-lg px-8 py-4 max-w-2xl">
        <h1 className="text-6xl">Quizlet Ripoff</h1>
        <span className="block text-xl my-4">
          Welcome to the absolute greatest flash card app on the planet! This is
          absolutely <span className="italic">not</span> a Quizlet ripoff.
        </span>
        <img
          className="rounded-lg"
          alt="An image of a pig"
          src="https://i.natgeofe.com/k/23e409f9-4699-46f0-a645-5cc1f5040363/pig-full-body_2x1.jpg"
        />
        <Link href="question/0">
          <button className="rounded-md bg-green-300 hover:bg-green-400 hover:shadow-lg px-6 py-2 font-bold mt-6">
            Begin Quiz
          </button>
        </Link>
      </div>
    </div>
  );
}
