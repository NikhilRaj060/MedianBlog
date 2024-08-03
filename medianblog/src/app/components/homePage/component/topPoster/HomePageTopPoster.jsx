import Link from 'next/link';
import Image from 'next/image';
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

export default function HomePageTopPoster() {
    return (
        <>
            <div className='w-full h-auto md:h-screen relative'>
                <div
                    className="flex items-center w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: "url(/main-bg.webp)" }}
                >
                    <div className="p-10 md:pl-56 pb-56 md:pb-20 flex flex-col gap-3 z-[10] max-w-[950px]">
                        <h1 className="text-[38px] md:text-[45px] text-white font-semibold">
                            Explore boundless horizons across diverse categories with
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                                {" "}
                                Our rich content.
                            </span>
                        </h1>
                        <p className="text-gray-200 m-0 font-thin text-xl">
                            Discover stories, thinking, and expertise from writers on any topic.
                        </p>
                        <div className="flex items-center text-center md:flex-row md:flex gap-5">
                            <Link
                                href="#"
                                className="rounded-[20px] items-center flex gap-3 group h-8 relative bg-gradient-to-r from-violet-900 to-red-600 px-6 text-lg text-white max-w-[200px]"
                            >
                                Start rading <LiaLongArrowAltRightSolid height={1} width={1} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />

        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div> */}

                <div className="absolute bottom-0 z-[5] w-full h-auto">
                    <Image
                        src="/trees.webp"
                        alt="trees"
                        width={2000}
                        height={2000}
                        className="w-full h-full"
                        priority={true}
                    />
                </div>

                <Image
                    src="/stars.png"
                    alt="stars"
                    height={300}
                    width={300}
                    className="w-auto absolute top-0 left-0 z-[10]"
                />
            </div>
        </>
    )
}
