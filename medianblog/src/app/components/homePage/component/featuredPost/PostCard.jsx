import React from 'react'
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { BsDot } from "react-icons/bs";

export default function PostCard(props) {

    const { postDetails, index } = props;
    const [isFollowed, setIsFollowed] = React.useState(false);

    const postedOn = () => {
        let tempDate = new Date(postDetails?.postedOn).toDateString().split(" ");
        tempDate.shift();
        tempDate = tempDate.join(" ");
        return tempDate;
    }

    console.log(postedOn, "dskjfs");
    return (

        <Card isFooterBlurred className="max-w-[340px]">
            <CardHeader className="justify-between">
                <div className="flex gap-5">
                    <Avatar isBordered radius="full" size="sm" src="/avatars/avatar-1.png" />
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
            <CardBody className="px-3 py-0 text-small font-semibold text-default-600">
                <p>
                    Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
                </p>
            </CardBody>
            <CardFooter className="gap-3">
                <div className="flex gap-1">
                    {/* <p className="font-semibold text-default-400 text-small">{postedOn}</p> */}
                    <p className="flex items-center text-default-500 text-xs">{postedOn}  <BsDot />  {postDetails?.readTime}</p>
                </div>
            </CardFooter>
        </Card>
    )
}   
