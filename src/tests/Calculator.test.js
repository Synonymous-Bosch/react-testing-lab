import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';
// import { multiply } from 'cypress/types/lodash';

describe('Calculator', () => {
  let container;
  let runningTotal;
  let equalsButton;
  let addButton;
  let subtractButton;
  let button4;
  let multiplyButton;
  let button1;
  let button2;
  let button3;
  let button5;
  let button6;
  let button7;
  let button8;
  let button9;
  let divideButton;
  let clearButton;

  beforeEach(() => {
    container = render(<Calculator/>)
    runningTotal = container.getByTestId('running-total');
    equalsButton = container.getByTestId('operator-equals');
    addButton = container.getByTestId('operator-add');
    subtractButton = container.getByTestId('operator-subtract');
    button4 = container.getByTestId('number4');
    multiplyButton = container.getByTestId('operator-multiply');
    button1 = container.getByTestId('number1');
    button2 = container.getByTestId('number2');
    button3 = container.getByTestId('number3');
    button5 = container.getByTestId('number5');
    button6 = container.getByTestId('number6');
    button7 = container.getByTestId('number7');
    button8 = container.getByTestId('number8');
    button9 = container.getByTestId('number9');
    divideButton = container.getByTestId('operator-divide');
    clearButton = container.getByTestId('clear');
  })

  it('should change running total on number enter', () => {
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add two numbers together',() => {
    fireEvent.click(button4);
    fireEvent.click(addButton);
    fireEvent.click(button1);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should subtract 4 from 7 and get 3', () => {
    fireEvent.click(button7);
    fireEvent.click(subtractButton);
    fireEvent.click(button4);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('3');
  })

  it ('should multiply 3 by 5 and get 15', () => {
    fireEvent.click(button3);
    fireEvent.click(multiplyButton);
    fireEvent.click(button5);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('15');
  })

  it('should divide 21 by 7 and get 3', () => {
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divideButton);
    fireEvent.click(button7);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should concatenate multiple number button clicks', () => {
    fireEvent.click(button1);
    fireEvent.click(button1);
    fireEvent.click(button8);
    expect(runningTotal.textContent).toEqual('118');
  }) 

  it('should chain multiple operations together', () => {
    fireEvent.click(button3);
    fireEvent.click(addButton);
    fireEvent.click(button6);
    fireEvent.click(subtractButton);
    fireEvent.click(button4);
    fireEvent.click(multiplyButton);
    fireEvent.click(button2);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('10')
  })

  it('should clear the running total without affecting the calculation', () => {
    fireEvent.click(button2);
    fireEvent.click(addButton);
    fireEvent.click(button8);
    fireEvent.click(clearButton);
    fireEvent.click(addButton);
    fireEvent.click(button1);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('3')

  })


})

