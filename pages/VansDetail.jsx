import React from "react"
import { useParams } from "react-router-dom"

export default function VanDetail() {
    const params = useParams()
    const [vans, setVans] = React.useState([])

        React.useEffect(() => {
            fetch("/api/vans/:vanid")
                .then(res => res.json())
                .then(data => setVans(data.vans))
        }, [])
 
        console.log(vans)

    return <h1>Van detail page goes here</h1>
}