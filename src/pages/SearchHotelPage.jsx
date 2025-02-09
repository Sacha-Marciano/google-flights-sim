// Components
import FlightForm from "../components/FlightForm";

// Context

// Banner
import Banner from "../assets/banner.png";

export default function SearchHotelsPage() {
  return (
    <main className="relative">
      <div className="w-full h-full opacity-50">
        <div className="flex flex-col relative mb-4 ">
          <img
            src={Banner}
            className="object-cover max-h-[40vh] w-full my-2 rounded-lg dark:opacity-50 "
          />
          <FlightForm />
        </div>
      </div>
      <div className="w-[50vw] h-[50vh] text-sky-400 bg-gray-300 dark:bg-white absolute top-[20vh] left-[25vw] flex flex-col items-center justify-center rounded-full">
        <h1 className="text-3xl font-bold">Coming Soon !</h1>
        <h2 className="text-2xl font-semibold">Hotel Search Engine</h2>
      </div>
    </main>
  );
}
