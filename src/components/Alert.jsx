import {useContext, useEffect} from "react";
import {ShopContext} from "../contexts/context";

function Alert() {
    const { closeAlert, alertName } = useContext(ShopContext);

    useEffect(()=>{
        const timerId = setTimeout(closeAlert, 3000)
        return ()=> {
            clearTimeout(timerId);
        }
        // eslint-disable-next-line
    }, [alertName]);
    return <div id="toast-container" className="toast-fade">
        <div className="toast">{ alertName } added to basket</div>
    </div>
}

export {Alert}