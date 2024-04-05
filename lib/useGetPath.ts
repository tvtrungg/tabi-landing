'use client'

import { usePathname } from "next/navigation";

const useGetPath = () =>{
    const pathname = usePathname();
    return pathname.split('/');
}

export default useGetPath;
