import { useEffect, useState } from "react";
import { Textarea } from "./ui/textarea";
import { Slider } from "@/components/ui/slider";

export function TextLengthCounter() {
  const [text, setText] = useState("");
  const [maxChars, setMaxChars] = useState(100);
  const [isOverLimit, setIsOverLimit] = useState(false);

  useEffect(() => {
    console.log(text.length);
    if (text.length > maxChars) {
      console.log("PREVEC ZNAKOV");
      setIsOverLimit(true);
    }
  }, [text]);
  return (
    <div>
      <Textarea
        value={text}
        onChange={(v) => setText(v.target.value)}
      ></Textarea>
      <Slider
        value={[maxChars]}
        onValueChange={(new_value) => setMaxChars(new_value[0])}
      ></Slider>
      {isOverLimit ? "predolgo besedilo" : "dobro besedilo"}

      {/* if (isOverLimit == true) {         je enako kot odzgori
        predolg telst
      } else { 
        ok t ekst 
        }*/}
    </div>
  );
}
