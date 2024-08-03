import React from 'react'
import {Chip} from "@nextui-org/react";
import { BiSolidCategoryAlt } from "react-icons/bi";

export default function DiscoverMoreTopicsOnHome() {
    return (
        <>
            <div className="flex justify-center mt-9 bg-gradient-to-r from-purple-900 to-red-800">
                <div className=" mx-6 sm:mx-16 max-w-[1192px] w-full">
                    <div className='pt-10 pb-4'>
                        <div className="mb-4 flex items-center gap-2 text-white">
                            <BiSolidCategoryAlt className='text-[22px]'/>
                            <h2 className='text-[22px] font-medium'> Discover more what you like</h2>
                        </div>

                        <div className="gap-3 flex flex-wrap ml-12 mb-4 sm:p-2">
                            <Chip clickable onClick={console.log("we are border")} >Bordered</Chip>
                            <Chip >Bordered</Chip>
                            <Chip >Bordered</Chip>
                            <Chip >Programming</Chip>
                            <Chip >Data science</Chip>
                            <Chip >Technology</Chip>
                            <Chip >Relationship</Chip>
                            <Chip >Machine learning</Chip>
                            <Chip >writing</Chip>
                            <Chip >Bordered</Chip>
                            <Chip >productivity</Chip>
                            <Chip >Self inpovement</Chip>
                            <Chip >Bordered</Chip>
                            <Chip >politics</Chip>

                            <div className='text-center text-base text-white font-semibold cursor-pointer flex justify-center sm:w-auto w-full'><h1 className='hover:underline'>Discover more topics {'>>>'}</h1></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
