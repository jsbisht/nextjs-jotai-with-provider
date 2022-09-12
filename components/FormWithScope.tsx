import { useAtom, useAtomValue } from "jotai";
import { useState } from "react";
import { textValueAtom } from "../state/atoms";
import Text from "./Text";
import TextWithScope from "./TextWithScope";

export default function FormWithScope({ title, scope }: any) {
  const value = useAtomValue(textValueAtom, scope);
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
          <TextWithScope scope={scope} />
        </label>
        <input type="submit" value="Submit"  onClick={handleSubmit} />
      </div>
      <pre>
        <code>{JSON.stringify(result, null, 2)}</code>
      </pre>
    </>
  );
}
