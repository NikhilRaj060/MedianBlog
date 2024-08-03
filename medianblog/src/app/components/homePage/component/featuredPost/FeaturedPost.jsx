import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import React from 'react'
import { FaFirstdraft } from "react-icons/fa";
import PostCard from "./PostCard"

export default function FeaturedPost() {
    const list = [{id:"temp", title: "Orange", img: "/image/github.svg", price: "$5.50", writer: "alex", aboutWriter: "It's me doing great in software", postedOn:1708843781693, readTime:"4.5 min" },
    { id:"temp",title: "Tangerine", img: "/image/facebook.svg", price: "$3.00", writer: "alex", aboutWriter: "It's me doing great in software", postedOn:1708843781693, readTime:"7 min" },
    { id:"temp",title: "Raspberry", img: "/image/github.svg", price: "$10.00", writer: "alex", aboutWriter: "It's me doing great in software", postedOn:1708843781693, readTime:"8 min" },
    { id:"temp",title: "Lemon", img: "/image/instagram.svg", price: "$5.30", writer: "alex", aboutWriter: "It's me doing great in software", postedOn:1708843781693, readTime:"3 min" },
    { id:"temp",title: "Avocado", img: "/image/facebook.svg", price: "$15.70", writer: "alex", aboutWriter: "It's me doing great in software", postedOn:1708843781693, readTime:"3.7 min" },
    { id:"temp",title: "Lemon 2", img: "/image/instagram.svg", price: "$8.00", writer: "alex", aboutWriter: "It's me doing great in software", postedOn:1708843781693, readTime:"12 min" },
    ];
    const [isFollowed, setIsFollowed] = React.useState(false);

    return (

        <>
            <div className="flex justify-center">
                <div className=" mx-6 sm:mx-16 max-w-[1192px]">
                    <div className='pt-10 pb-4'>
                        <div className="mb-4 flex items-center gap-2">
                            <FaFirstdraft  className="m-0 p-0"/>
                            <h3 className='text-[22px] font-medium'> Featured post</h3>
                        </div>

                        <div className="gap-2 grid grid-cols-1 sm:grid-cols-3">
                            {list.map((postDetails, index) => (
                                <div key={index} className='flex'>
                                    <div className='flex items-center mr-3 text-[32px] font-semibold text-gray-500'><h1>{ index<10 ? "0"+(index+1) : index} </h1></div>
                                    <PostCard key={index}  postDetails={postDetails} index={index} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
