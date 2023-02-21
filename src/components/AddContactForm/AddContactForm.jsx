import React, {useState} from 'react';

function AddContactForm({onSave, onCancel}) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!firstName || !lastName || !phone) {
            alert('Please fill in all fields');
            return;
        }
        onSave({
            id: Date.now(),
            name: firstName,
            username: lastName,
            phone: phone,
        });
    };

    return (
        <div>
            <h1>Add Contact</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                    />
                </label>
                <label>
                    Phone:
                    <input
                        type="text"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                    />
                </label>
                <button type="submit">Save</button>
                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
            </form>
        </div>
    );
}

export default AddContactForm;
