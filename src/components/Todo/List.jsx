import * as React from 'react'
import {  useState } from 'react'


const List = (props) => {
    const [inputValue, setInputValue] = useState("");
    const [lists, setLists] = useState([]);
    const testClick = () => {
        setInputValue("");
        let item = {}
        item.id = lists.length + 1
        item.con = inputValue
        setLists([...lists, item])
    };
    const liClick = function (e) {
        lists.splice(e, 1);
        setLists([...lists])
    };
    return (
        <div >
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={testClick}>提交</button>
            <ul>
                {lists.map((item, index) =>
                    <li key={index} >{item.con} <button onClick={(e) => liClick(index)}>删除</button>  </li>
                )}
            </ul>
        </div>
    );
}
export default List