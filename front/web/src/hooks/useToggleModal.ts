import {Dispatch, SetStateAction, useState} from "react";

type Return = [boolean, Dispatch<SetStateAction<boolean>>, () => void, () => void]

const useToggleModal = (): Return => {
    const [view, setView] = useState<boolean>(false)
    const openView = () => {
        setView(true)
    }
    const closeView = () => {
        setView(false)
    }
    return [view, setView, openView, closeView]
}

export default useToggleModal