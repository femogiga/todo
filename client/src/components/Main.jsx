
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
        if (inputValue == null || inputValue === "") {
            return
        }
        setData([...data, { id: data.length + 1, task: inputValue, completed: false }])
        setInputValue("")
    };
    // console.log(data)


    const handleDelete = (id) => {
        setData(data.filter(item => item.id != id))
    }



    const handleCheckboxChange = (e, itemId) => {

        let mapped = null

        if (e.currentTarget.checked) {
            setStyle(styled)
            mapped = data.map(item => {
                if (item.id === itemId) {
                    return { ...item, completed: !item.completed }
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
                        <input id={item.id} type='checkbox' checked={item.completed} onChange={((e) => handleCheckboxChange(e, item.id))} /><p style={item.completed ? style : null}>{item.task}</p><button onClick={() => handleDelete(item.id)}><span className="material-symbols-outlined">
                            delete
                        </span></button></li>))
                        : linKVal === 'Active' ? data.filter(b => b.completed === false).map((item, index) => (<li key={index} className={`todo flex`}>
                            <input id={item.id} checked={item.completed} type='checkbox' onChange={((e) => handleCheckboxChange(e, item.id))} /><p>{item.task}</p></li>))
                            : data.map((item, index) => (<li key={index} className={`todo flex`}>
                                <input id={item.id} checked={item.completed} type='checkbox' onChange={((e) => handleCheckboxChange(e, item.id))} /><p style={item.completed ? style : null}>{item.task}</p></li>))


                }



            </ul>
            {linKVal === 'Completed' ? <button>Delete</button> : null}
        </div>
    );
}

export default Main;
