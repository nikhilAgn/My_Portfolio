import React from 'react'

export const Header = () => {
    return (
            <div class="bg-green-500">
                <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                    <div class="flex justify-between h-16">
                        <div class="flex">
                            <div class="flex-shrink-0 flex items-center text-white text-lg">
                                <a href="#about" class="px-3 py-2 rounded-md text-sm font-medium">ABOUT ME</a>
                                <a href="#project" class="px-3 py-2 rounded-md text-sm font-medium">PROJECTS</a>
                                <a href="#resume" class="px-3 py-2 rounded-md text-sm font-medium">RESUME</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
    
    )
}
