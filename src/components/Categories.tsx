import { useState } from "react"
import '../App.css'

const Categories = () => {
    const pizzCategories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
    const [index, setIndex] = useState(0)
    return (

        <div className="categories">
            <ul>
                {pizzCategories.map((item, i) => <li key={i}
                    onClick={() => setIndex(i)}
                    className={index == i ? 'active' : ''} >{item}</li>)}

            </ul>
        </div >
    )
}

export default Categories
