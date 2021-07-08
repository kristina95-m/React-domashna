import React from 'react';
// import Hello from './Hello';
import {HelloFunc} from './HelloFunc';
import { NameSurnameFunc } from './NameSurnameFunc';

export function App() {

  return (
    <div id="app">
        {/* <Hello/> */}
        <HelloFunc/>
        <NameSurnameFunc/>
    </div>
  )
}