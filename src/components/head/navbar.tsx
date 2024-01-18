/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import Link from "next/link";

const imageLogoUrl =
    "https://firebasestorage.googleapis.com/v0/b/beanstore-db.appspot.com/o/Store%2FLogo.png?alt=media&token=97a8b0a6-08bf-48dc-ae95-2f79c640ce97";


export default function navbar() {
    return (
        <div className=" sticky top-0 left-0 right-0">
            <div className="max-w-[1380px] mx-auto h-20 flex items-center">
                <Link href="/">
                    <div className="flex flex-row items-center">
                        <div className="h-16 aspect-[3/1] w-auto">
                            <img src={imageLogoUrl} alt="logo" className="object-cover" />
                        </div>
                    </div>
                </Link>
                <div className="flex-grow flex flex-row items-center justify-end gap-4">
                    {/* <Link href="/">
                        <SearchIcon className="animate-pulse" />
                    </Link> */}

                    <a href="/about">
                        <p className="hover:bg-green-400 hover:text-white text-[16px] p-3 rounded-xl" >about us</p>
                    </a>
                    <a href="/store">
                        <p className="hover:bg-green-400 hover:text-white  text-[16px] p-3 rounded-xl">store</p>
                    </a>
                    <a href="/admin">
                        <p className="hover:bg-green-400 hover:text-white  text-[16px] p-3 rounded-xl">admin</p>
                    </a>
                    <a href="/login">
                        <p className="hover:bg-green-400 hover:text-white  text-[16px] p-3 rounded-xl">login/register</p>
                    </a>
                </div>
            </div>
        </div>

    )
}
