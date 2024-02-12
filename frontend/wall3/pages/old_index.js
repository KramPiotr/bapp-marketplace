/* eslint-disable @next/next/no-img-element */
// Next, React
import Head from "next/head"
import LoggedOut from "../ui/components/LoggedOut"
import { useAuth } from "../ui/service/use-auth-client"

function HomePage() {
  const { isAuthenticated, logout } = useAuth()
  return (
    <>
      <div className="min-h-screen p-2">
        <Head>
          <title>Wall-3</title>
        </Head>
        <div className="p-20 flex-1 items-center">
          {isAuthenticated && (
            <div className="w-full max-w-screen flex justify-end">
              <button
                onClick={logout}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Logout
              </button>
            </div>
          )}
          <h1 className="m-0 text-4xl font-bold text-center">
            Create your own NFT collection!
          </h1>

          {/* {isAuthenticated ? <DataSection /> : <LoggedOut />} */}
        </div>
      </div>
    </>
  )
}

export default HomePage
