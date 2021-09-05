import React, {useState} from 'react';

import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';

//  In React JS, need "htmlFor" instead of "for", which is Vanilla way of saying what the label for.
//  Impt for the "for" and the id to be same to help w screen readers for 
//  ppl w vision problems or something.

//  Ahh, he does use "number" for the type even though that comes w its own error messages.
const AddUser = props => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        //  THIS IS DIF THAN WHAT U DID, WHAT U SHOULD HAVE DONE!!
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
        {
            return;
        }
        //  Don't need "else if" bec would have returned already from the first one if that true.
        //  Will the program crash on the "+" if enteredAge isn't a number? Like if it's "a"?
        if (+enteredAge < 1)
        {
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    //  addUserHandler = a pointer to that function.
    //  addUserHandler() = executes the function immediately, bad.

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;