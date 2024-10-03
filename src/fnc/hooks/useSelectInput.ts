import React, { useState } from "react";


type value = string
type handler = (e: React.ChangeEvent<HTMLSelectElement>) => void

type returnType = [value, handler]



function useSelectInput(baseValue: value): returnType {
    const [value, setValue] = useState<string>(baseValue)

    function handlerOnChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setValue(e.target.value)
    }

    return [value, handlerOnChange]
}

export { useSelectInput }