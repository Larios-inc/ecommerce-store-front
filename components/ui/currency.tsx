"use client"

import { useEffect, useState } from "react"

export const formatter = new Intl.NumberFormat("es-GT",{
    style:'currency',
    currency:'GTQ'
})

interface CurrencyProps{
    value?: string | number
}

export const Currency: React.FC<CurrencyProps> = ({value}) =>{

    const [ isMounted, setIsMounted ] = useState(false)

    useEffect(()=>{
        setIsMounted(true)
    },[])

    if(!isMounted){
        return null
    }

    return (
        <div className="font-semibold">
            {formatter.format(Number(value))}
        </div>
    )

}