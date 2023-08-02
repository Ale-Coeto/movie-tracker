import AuthForm from "./components/AuthForm";


export default function Home() {
  return (
    <main className="flex flex-col gap-16 p-8 sm:p-24 bg-gray-50 h-screen w-screen justify-center items-center">
      <div>
        <h2 className="text-4xl font-semibold text-center">
          Welcome to Video Tracker, <br />please login or register
        </h2>
      </div>

      <AuthForm />

    </main>
  )
}
