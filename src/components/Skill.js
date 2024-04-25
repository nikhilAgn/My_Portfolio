import { FaJava } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";
import React from 'react'
import { SiFirebase, SiKotlin, SiSqlite } from "react-icons/si";
import { DiAndroid, DiGit } from "react-icons/di";

export const Skill = () => {
    return (
        <>
            <div className="max-w-6xl mx-auto mb-10 px-4 py-8  bg-zinc-300 shadow-xl rounded-lg text-black">
                <h2 className="text-xl font-bold text-zinc-900 mb-10">Skills</h2>
                <div className="flex flex-wrap justify-between md:px-10 logoOuter">
                    <div>
                        <SiKotlin className="mb-2 rounded-full" size={64} />
                        <span className="text-black">Kotlin</span>
                    </div>
                    <div>
                        <FaJava className="mb-2 rounded-full" size={64} />
                        <span className="text-black">Java</span>
                    </div>
                    <div>
                        <DiAndroid className="mb-2 rounded-full" size={64} />
                        <span className="text-black">Android Studio</span>
                    </div>
                    <div>
                        <SiFirebase className="mb-2 rounded-full" size={64} />
                        <span className="text-black">Firebase</span>
                    </div>
                    <div>
                        <DiGit className="mb-2 rounded-full" size={64} />
                        <span className="text-black">Git</span>
                    </div>
                    <div>
                        <SiSqlite className="mb-2 rounded-full" size={64} />
                        <span className="text-black">SQLite</span>
                    </div>
                    <div>
                        <AiFillApi className="mb-2 rounded-full" size={64} />
                        <span className="text-black">REST API</span>
                    </div>
                </div>
            </div></>
    )
}

