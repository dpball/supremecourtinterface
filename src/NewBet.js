import React, { Component } from 'react';
import Checkbox from './Checkbox';

const items = [
    'Sport',
    'Politics',
    'Third Option',
];

componentWillMount = () => {
    this.selectedCheckboxes = new Set();
}

toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
        this.selectedCheckboxes.delete(label);
    } else {
        this.selectedCheckboxes.add(label);
    }
}

handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
        console.log(checkbox, 'is selected.');
    }
}

createCheckbox = label => (
    <Checkbox
        label={label}
        handleCheckboxChange={this.toggleCheckbox}
        key={label}
    />
)

createCheckboxes = () => (
    items.map(this.createCheckbox)
)


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
                {this.createCheckboxes()}

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