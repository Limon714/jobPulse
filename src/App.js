import './HOOK_USESTATE/style.css';
import Rabbil from './props/Rabbil';
import SonnySangha from "./props/SonnySangha";
function App() {
  return (
    <>
      <div>
        <Rabbil name="props" hours="2 hours" />
        <Rabbil name="state" hours="3 hours" />
        <SonnySangha name="SonnySangha" hours="20 hours" />
        {/* <Rabbil text ={{codename:'fr2o'}} /> */}
      </div>
    </>
  );
}

export default App;
