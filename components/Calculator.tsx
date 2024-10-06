import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CloseIcon from '@mui/icons-material/Close';


const Calculator = ({ onCloseModal }: closeModalProps) => {
    const [display, setDisplay] = useState('0');
    const [equation, setEquation] = useState('');
    const [isNewNumber, setIsNewNumber] = useState(true);

    const handleNumber = (number: string) => {
        if (isNewNumber) {
            setDisplay(number);
            setIsNewNumber(false);
        } else {
            setDisplay(display + number);
        }
    };

    const handleOperator = (operator: string) => {
        setEquation(display + ' ' + operator + ' ');
        setIsNewNumber(true);
    };

    const handleEqual = () => {
        const finalEquation = equation + display;
        try {
            const result = eval(finalEquation);
            setDisplay(result.toString());
            setEquation('');
            setIsNewNumber(true);
        } catch (error) {
            setDisplay('Error');
            setEquation('');
            setIsNewNumber(true);
        }
    };

    const handleClear = () => {
        setDisplay('0');
        setEquation('');
        setIsNewNumber(true);
    };

    const handleBackspace = () => {
        if (display.length > 1) {
            setDisplay(display.slice(0, -1));
        } else {
            setDisplay('0');
            setIsNewNumber(true);
        }
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key >= '0' && event.key <= '9' || event.key === '.') {
                handleNumber(event.key);
            } else if (['+', '-', '*', '/'].includes(event.key)) {
                handleOperator(event.key);
            } else if (event.key === 'Enter' || event.key === '=') {
                handleEqual();
            } else if (event.key === 'Escape') {
                handleClear();
            } else if (event.key === 'Backspace') {
                handleBackspace();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [display, equation]); // Dependencies for the useEffect

    return (
        <div className="modal-primary_div transition ease-in-out delay-150 ">
            <div className="modal-main_div p-2">
                <Card className="w-72">
                    <CardHeader>
                        <CardTitle className="text-center">Calculator</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-secondary p-2 rounded-md mb-4">
                            <div className="text-sm text-secondary-foreground/70 h-6">{equation}</div>
                            <div className="text-3xl font-semibold text-right">{display}</div>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                            <Button variant="outline" onClick={() => handleNumber('7')}>7</Button>
                            <Button variant="outline" onClick={() => handleNumber('8')}>8</Button>
                            <Button variant="outline" onClick={() => handleNumber('9')}>9</Button>
                            <Button variant="secondary" onClick={() => handleOperator('/')}>/</Button>

                            <Button variant="outline" onClick={() => handleNumber('4')}>4</Button>
                            <Button variant="outline" onClick={() => handleNumber('5')}>5</Button>
                            <Button variant="outline" onClick={() => handleNumber('6')}>6</Button>
                            <Button variant="secondary" onClick={() => handleOperator('*')}>×</Button>

                            <Button variant="outline" onClick={() => handleNumber('1')}>1</Button>
                            <Button variant="outline" onClick={() => handleNumber('2')}>2</Button>
                            <Button variant="outline" onClick={() => handleNumber('3')}>3</Button>
                            <Button variant="secondary" onClick={() => handleOperator('-')}>-</Button>

                            <Button variant="outline" onClick={() => handleNumber('0')}>0</Button>
                            <Button variant="outline" onClick={() => handleNumber('.')}>.</Button>
                            <Button variant="primary" onClick={handleEqual}>=</Button>
                            <Button variant="secondary" onClick={() => handleOperator('+')}>+</Button>

                            <Button variant="destructive" className="col-span-4" onClick={handleClear}>Clear</Button>
                        </div>
                    </CardContent>
                </Card>
                <div className="flex justify-center pb-2">
                    <button
                        onClick={onCloseModal}
                        className="modal-close_btn"
                        title="close"
                    >
                        <CloseIcon />
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Calculator;