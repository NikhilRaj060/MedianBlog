import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import React from 'react'

export default function FeaturedPost() {
    const list = [{ title: "Orange", img: "/image/github.svg", price: "$5.50", writer: "alex", aboutWriter: "It's me doing great in software" },
    { title: "Tangerine", img: "/image/facebook.svg", price: "$3.00", writer: "alex", aboutWriter: "It's me doing great in software" },
    { title: "Raspberry", img: "/image/github.svg", price: "$10.00", writer: "alex", aboutWriter: "It's me doing great in software" },
    { title: "Lemon", img: "/image/instagram.svg", price: "$5.30", writer: "alex", aboutWriter: "It's me doing great in software" },
    { title: "Avocado", img: "/image/facebook.svg", price: "$15.70", writer: "alex", aboutWriter: "It's me doing great in software" },
    { title: "Lemon 2", img: "/image/instagram.svg", price: "$8.00", writer: "alex", aboutWriter: "It's me doing great in software" },
    ];

    const [isFollowed, setIsFollowed] = React.useState(false);

    return (

        <div>
            <div className="flex justify-center">
                <div className=" mx-8 sm:mx-16 max-w-[1192px] w-full">
                    <div className='pt-10 pb-4'>
                        <div className="mb-4"><h2 className='text-[22px] md:text-[30px] font-medium'>Featured post</h2></div>

                        <div className="gap-2 grid grid-cols-1 sm:grid-cols-3">
                            {list.map((item, index) => (

                                <Card isFooterBlurred shadow="md" key={index} isPressable onPress={() => console.log("aba tani...")}>
                                    <CardHeader className="justify-between absolute z-10 top-1" >
                                        <Button className="flex gap-3 bg-transparent" onPress={() => console.log("I'm coming budy..")}>
                                            <Avatar radius="full" size="sm" src={item.img} />
                                            <div className="flex flex-col gap-1 items-start justify-center">
                                                <h4 className="text-small font-normal leading-none text-default-600">{item.writer}</h4>
                                                {/* <h5 className="text-small tracking-tight text-default-400">{item.aboutWriter}</h5> */}
                                            </div>
                                        </Button>
                                        {/* <Button
                                            className={`${isFollowed ? "bg-transparent text-foreground border-default-200" : "bg-gradient-to-r from-purple-700 to-red-700"}`}
                                            color="primary"
                                            radius="full"
                                            size="sm"
                                            variant={isFollowed ? "bordered" : "solid"}
                                            onPress={() => setIsFollowed(!isFollowed)}
                                        >
                                            {isFollowed ? "Unfollow" : "+ Follow"}
                                        </Button> */}
                                    </CardHeader>

                                    <CardBody className="overflow-visible p-0">
                                        <Image
                                            shadow="sm"
                                            radius="lg"
                                            width="100%"
                                            alt={item.title}
                                            className="w-full object-cover h-[140px] z-0"
                                            src={"/main-bg.webp"}
                                        />
                                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum amet architecto fugit dolore sapiente, maxime quidem, beatae incidunt blanditiis commodi eveniet? Est, possimus. Tenetur accusamus vitae commodi pariatur dolorum unde!</p> */}
                                    </CardBody>
                                    <CardFooter className="text-small justify-between">
                                        <b>{item.title}</b>
                                        <p className="text-default-500">{item.price}</p>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
