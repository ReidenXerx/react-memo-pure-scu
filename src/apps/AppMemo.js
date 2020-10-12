import React, {memo} from "react"

const AppMemo = ({count, increaseMethod}/*мгновенная деструктуризация*/) => {
    console.log(`Rendering TestC : ${count}`)

    return ( 
        <div>
            {count}
            <button onClick={() => increaseMethod()}>
                increase
            </button>
        </div>
    )
}

const MemodAppMemo = memo(AppMemo)
export default MemodAppMemo;
