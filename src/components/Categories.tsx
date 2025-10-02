interface Props{
    index:number;
   onChange:(i:number)=>void;
}


const Categories = ({index,onChange}:Props) => {
    const pizzCategories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
   
    return (

        <div className="categories">
            <ul>
                {pizzCategories.map((item, i) => <li key={i}
                    onClick={() => onChange(i)}
                    className={index == i ? 'active' : ''} >{item}</li>)}

            </ul>
        </div >
    )
}

export default Categories
