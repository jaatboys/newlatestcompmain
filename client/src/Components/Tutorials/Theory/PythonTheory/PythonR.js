
import { Route, Routes } from 'react-router-dom';
import PythonBreak from './PythonList/PythonBreak';
import PythonComments from './PythonList/PythonComments';
import PythonConstructor from './PythonList/PythonConstructor';
import PythonContinue from './PythonList/PythonContinue';
import PythonDictionaries from './PythonList/PythonDictionaries';
import Pythonexceptionhandling from './PythonList/Pythonexceptionhandling';
import Pythonforloop from './PythonList/Pythonforloop';
import PythonFunction from './PythonList/PythonFunction';
import PythonFunctionArgument from './PythonList/PythonFunctionArgument';
import PythonHistory from './PythonList/PythonHistory';
import PythonFunctionoverloading from './PythonList/PythonFunctionoverloading';
import PythonFunctionoverride from './PythonList/PythonFunctionoverride';
import PythonIdentifiers from './PythonList/PythonIdentifiers';
import PythonIf from './PythonList/PythonIf';
import PythonIfElse from './PythonList/PythonIfElse';
import PythonIfElseIf from './PythonList/PythonIfElseIf';
import PythonInheritance from './PythonList/PythonInheritance';
import PythonInput from './PythonList/PythonInput';
import PythonKeywords from './PythonList/PythonKeywords';
import PythonLambda from './PythonList/PythonLambda';
import Pythonlist from './PythonList/Pythonlist';
import PythonLooping from './PythonList/PythonLooping';
import PythonobjectandClass from './PythonList/PythonobjectandClass';
import Pythonoops from './PythonList/Pythonoops';
import PythonOperators from './PythonList/PythonOperators';
import PythonSearching from './PythonList/PythonSearching';
import PythonString from './PythonList/PythonString';
import PythonTuple from './PythonList/PythonTuple';
import PythonTypesofVariables from './PythonList/PythonTypesofVariables';
import PythonVariables from './PythonList/PythonVariables';
import PythonWhile from './PythonList/PythonWhile';
import PythonListMethood from './PythonList/PythonListMethood'; 
import PythonControlStructure from './PythonList/PythonControlStructureStatement';




// console.log(list.map(l => `<Route path='${l} element=/>`))
function PythonR() {
  return (
    <Routes>
      <Route path='python-variables' element={<PythonVariables />} />
      <Route path='python-types-of-variables' element={<PythonTypesofVariables />} />
      <Route path='python-identifiers' element={<PythonIdentifiers />} />
      <Route path='python-keywords' element={<PythonKeywords />} />
      <Route path='python-input' element={<PythonInput />} />
      <Route path='python-comments' element={<PythonComments />} />
      <Route path='python-operators' element={<PythonOperators />} />
      <Route path='python-string' element={<PythonString />} />
      <Route path='python-control-structure' element={<PythonControlStructure />} />
      
      <Route path='python-if' element={<PythonIf />} />
      <Route path='python-if-else' element={<PythonIfElse />} />
      <Route path='python-if-else-if' element={<PythonIfElseIf />} />
      <Route path='python-looping' element={<PythonLooping />} />
      <Route path='python-while' element={<PythonWhile />} />
      <Route path='python-for-loop' element={<Pythonforloop />} />
      <Route path='python-break' element={<PythonBreak />} />
      <Route path='python-continue' element={<PythonContinue />} />
      <Route path='python-lambda' element={<PythonLambda />} />
      <Route path='python-list' element={<Pythonlist />} />
      <Route path='python-list-method' element={<PythonListMethood />} />
      <Route path='python-oops' element={<Pythonoops />} />
      <Route path='python-object-and-class' element={<PythonobjectandClass />} />
      <Route path='python-dictionaries' element={<PythonDictionaries />} />
      <Route path='python-tuple' element={<PythonTuple />} />
      <Route path='python-inheritance' element={<PythonInheritance />} />
      <Route path='python-constructor' element={<PythonConstructor />} />
      <Route path='python-searching' element={<PythonSearching />} />
      <Route path='python-function' element={<PythonFunction />} />
      <Route path='python-function-argument' element={<PythonFunctionArgument />} />
      <Route path='python-function-overloading' element={<PythonFunctionoverloading />} />
      <Route path='python-function-override' element={<PythonFunctionoverride />} />
      <Route path='python-exception-handling' element={<Pythonexceptionhandling />} />
      <Route path='python-history' element={<PythonHistory />} />

    </Routes>

  );
}

export default PythonR;
