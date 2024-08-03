import React from 'react'
import Link from 'next/link';
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { BsDot } from "react-icons/bs";

export default function PostCard(props) {

    const { postDetails, index } = props;
    const [isFollowed, setIsFollowed] = React.useState(false);

    const formatPostedDate = (postedOnDate) => {
        if (!postedOnDate) return ''; // Handle null or undefined input
        const tempDate = new Date(postedOnDate).toDateString().split(" ");
        const formattedDate = tempDate.slice(1).join(" ");
        return formattedDate;
    };

    const postedDate = formatPostedDate(postDetails?.postedOn);

    console.log(postedDate, "dskjfs");
    return (

        <Card isFooterBlurred key={index} className="max-w-[340px]">
            <CardHeader className="justify-between">
                <div className="flex gap-2">
                    <Avatar radius="full" size="sm" src="/avatars/avatar-1.png" />
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">{postDetails.writer}</h4>
                        {/* <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5> */}
                    </div>
                </div>
                <Button
                    className={isFollowed ? "bg-transparent text-foreground border-default-200" : "bg-gradient-to-r from-purple-900 to-red-800"}
                    color="primary"
                    radius="full"
                    size="sm"
                    variant={isFollowed ? "bordered" : "solid"}
                    onPress={() => setIsFollowed(!isFollowed)}
                >
                    {isFollowed ? "Unfollow" : "+ Follow"}
                </Button>
            </CardHeader>
            <Link href={`/blog/${postDetails.id}`} passHref>
                <CardBody className="px-3 py-0 text-small font-semibold">
                    <p>
                        Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
                    </p>
                </CardBody>
            </Link>
            <CardFooter className="gap-3">
                <div className="flex gap-1">
                    {/* <p className="font-semibold text-default-400 text-small">{postedOn}</p> */}
                    <p className="flex items-center text-default-500 text-xs">{postedDate}  <BsDot />  {postDetails?.readTime}</p>
                </div>
            </CardFooter>
        </Card>
    )
}   
