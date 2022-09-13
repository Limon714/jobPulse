import './HOOK_USESTATE/style.css';
import SonnySangha from "./props/SonnySangha";
import WebStylePress from './props/WebStylePress';
function App() {
  const data = {
    name: "WebstylePress",
    platform: "YouTube",
    subs : 34
  }
  return (
    <>
      <div>
       <SonnySangha name="SonnySangha" hours="20 hours" />
        <WebStylePress
        {...data}
        />
      </div>
    </>
  );
}

export default App;
