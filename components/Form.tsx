import { useAtomValue } from "jotai";
import { useState } from "react";
import { textValueAtom } from "../state/atoms";
import Text from "./Text";

export default function Form({ title }: any) {
  const value = useAtomValue(textValueAtom);
  const [result, setResult] = useState({});

  const handleSubmit = () => {
    setResult({value})
  };

  return (
    <>
      <h3>{title}</h3>
      <div>
        <label>
          Name:
          <Text />
        </label>
        <input type="submit" value="Submit"  onClick={handleSubmit} />
      </div>
      <pre>
        <code>{JSON.stringify(result, null, 2)}</code>
      </pre>
    </>
  );
}
