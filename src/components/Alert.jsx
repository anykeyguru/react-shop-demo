import {useEffect} from "react";

function Alert(props) {
    const { name = '', handleCloseAlert = Function.prototype } = props

    useEffect(()=>{
        const timerId = setTimeout(handleCloseAlert, 3000)
        return ()=> {
            clearTimeout(timerId);
        }
    }, [name]);
    return <div id="toast-container" className="toast-fade">
        <div className="toast">{ name } added to basket</div>
    </div>
}

export {Alert}