import { useAtom } from "jotai"
import { textValueAtom } from "../state/atoms"

export default function Text() {
    const [value, setValue] = useAtom(textValueAtom)

    const handleChange = (event:any) => {
        setValue(event.target.value)
    }
    
    return <input type="text" value={value} onChange={handleChange} />
}