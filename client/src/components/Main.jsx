import ToDo from './ToDo'
import { useEffect, useState } from "react"

const Main = ({ linKVal }) => {
    const [inputValue, setInputValue] = useState("");
    const [data, setData] = useState([])
    const [style, setStyle] = useState({})
    const styled = {
        textDecoration: 'line-through',
        color: 'blue'
    }


    const handleClick = (e) => {
        e.preventDefault();

        setData([...data, { id: data.length + 1, task: inputValue, completed: false }])

    };
    // console.log(data)






    const handleCheckboxChange = (e, itemId) => {
        // if(e.currentTarget.checked){
        //  setData( [...data, data.map(item=>{
        //     if(item.id ===e.currentTarget.key){
        //         return {...item,completed:true}
        //     }
        //    })])
        // }
        let mapped = null

        if (e.currentTarget.checked) {
            setStyle(styled)
            mapped = data.map(item => {
                if (item.id === itemId) {
                    return { ...item, completed: e.currentTarget.checked }
                }
                else {
                    return item
                }
            })
            setData(mapped)


        }


    }

    console.log(data)
    console.log('link', { linKVal })
    return (
        <div>
            <form className='form'>
                <fieldset className="">
                    <input type='text' value={inputValue} name="task" placeholder="add details" onChange={(e) => setInputValue(e.target.value)} />
                    <button onClick={handleClick}>Add</button>
                </fieldset>
            </form>
            <ul>

                {





                    linKVal === 'Completed' ? data.filter(b => b.completed === true).map((item, index) => (<li key={index} className={`todo flex`}>
                        <input id={item.id} type='checkbox' checked={item.completed} onChange={((e) => handleCheckboxChange(e, item.id))} /><p style={item.completed ? style : null}>{item.task}</p></li>))
                        : linKVal === 'Active' ? data.filter(b => b.completed === false).map((item, index) => (<li key={index} className={`todo flex`}>
                            <input id={item.id} type='checkbox' onChange={((e) => handleCheckboxChange(e, item.id))} /><p>{item.task}</p></li>))
                            : data.map((item, index) => (<li key={index} className={`todo flex`}>
                                <input id={item.id} checked={item.completed} type='checkbox' onChange={((e) => handleCheckboxChange(e, item.id))} /><p style={item.completed ? style : null}>{item.task}</p></li>))
                }



            </ul>
        </div>
    );
}

export default Main;
