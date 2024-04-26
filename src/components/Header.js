import React from 'react'

export const Header = () => {
    return (
        <div class="bg-green-500 ">
            <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
                <div class="flex justify-between h-16">
                    <div class="flex">
                        <div class="flex-shrink-0 flex items-center text-white text-sm lg:text-xl gap-2 md:gap-5">
                            <a href="#about"   class="bg-white px-2 text-black py-1 rounded-md   font-medium">ABOUT ME</a>
                            <a href="#skill"   class="bg-white px-2 text-black py-1 rounded-md   font-medium">SKILLS</a>
                            <a href="#project"   class="bg-white px-2 text-black py-1 rounded-md   font-medium">PROJECTS</a>
                            <a href="#resume"   class="bg-white px-2 text-black py-1 rounded-md   font-medium">RESUME</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}
