import React, { Component } from 'react';


class NewBet extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('/api/form-submit-url', {
            method: 'POST',
            body: data,
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>


                <label htmlFor="title">Enter the category</label>
                <input id="category" name="category" type="text" />

                <label htmlFor="title">Enter the title</label>
                <input id="title" name="title" type="text" />

                <label htmlFor="description">Enter the description</label>
                <input id="description" name="description" type="text" />

                <label htmlFor="Question">Enter your birth date</label>
                <input id="question" name="question" type="text" />

                
                <button>Send data!</button>
            </form>
        );
    }
}
 