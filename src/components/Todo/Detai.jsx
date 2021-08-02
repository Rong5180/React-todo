import { useEffect } from 'react'

const Detail = (props) => {
    useEffect(() => {
        console.log(props);
    })

    return (
        <div>
            <div>id:</div>
            <div>内容：</div>
        </div>

    )
}
export default Detail