import React from 'react';

import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';

//  In React JS, need "htmlFor" instead of "for", which is Vanilla way of saying what the label for.
//  Impt for the "for" and the id to be same to help w screen readers for 
//  ppl w vision problems or something.

//  Ahh, he does use "number" for the type even though that comes w its own error messages.
const AddUser = props => {

    const addUserHandler = (event) => {
        event.preventDefault();
    };

    //  addUserHandler = a pointer to that function.
    //  addUserHandler() = executes the function immediately, bad.

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;