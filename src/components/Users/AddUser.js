import React, {useState, useRef} from 'react';

import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import Wrapper from '../Helpers/Wrapper';
import ErrorModal from '../UI/ErrorModal';

//  In React JS, need "htmlFor" instead of "for", which is Vanilla way of saying what the label for.
//  Impt for the "for" and the id to be same to help w screen readers for 
//  ppl w vision problems or something.

//  Ahh, he does use "number" for the type even though that comes w its own error messages.
const AddUser = props => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        //  THIS IS DIF THAN WHAT U DID, WHAT U SHOULD HAVE DONE!!
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0)
        {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        //  Don't need "else if" bec would have returned already from the first one if that true.
        //  Will the program crash on the "+" if enteredAge isn't a number? Like if it's "a"?
        if (+enteredUserAge < 1)
        {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            });
            return;
        }
        props.onAddUser(enteredName, enteredUserAge);

        //  This manipulates the DOM, which is usually bad, but ok here?:
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    const errorHandler = () => {
        setError(null);
    };

    //  addUserHandler = a pointer to that function.
    //  addUserHandler() = executes the function immediately, bad.
    return (
        <Wrapper>
            {error && (
                <ErrorModal 
                    title={error.title} 
                    message={error.message} 
                    onConfirm={errorHandler} 
                />
            )}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input 
                        id="username" 
                        type="text" 
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input 
                        id="age" 
                        type="number" 
                        ref={ageInputRef} 
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;