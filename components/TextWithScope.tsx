import { useAtom } from "jotai"
import { textValueAtom } from "../state/atoms"

export default function TextWithScope({ scope }: any) {
    const [value, setValue] = useAtom(textValueAtom, scope)

    const handleChange = (event:any) => {
        setValue(event.target.value)
    }
    
    return <input type="text" value={value} onChange={handleChange} />
}