import { LightSwitch } from "./components/LightSwitch";
import { TextLengthCounter } from "./components/TextLengthCounter";

export default function App() {
  return (
    <div className="p-4">
      <LightSwitch />
      <TextLengthCounter />
    </div>
  );
}
