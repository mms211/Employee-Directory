import React, { Component } from 'react';

class FetchUsers extends Component {

    state = {
        loading: true,
        people: [],
    };

    async componentDidMount() {
        const url = "https://api.randomuser.me/?results=10&nat=us";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ people: data.results, loading: false })
    }

    render() {
        return <div>
            {this.state.loading || !this.state.people ? (
                <div>loading...</div>
            ) : (
                    <div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">DOB</th>
                                </tr>
                            </thead>
                            {this.state.people.map(person => (
                                <tbody key={person.login.uuid}>
                                    <tr>
                                        <th scope="row"><img src={person.picture.medium} /></th>
                                        <td>{person.name.first + " " + person.name.last}</td>
                                        <td>{person.phone}</td>
                                        <td>{person.email}</td>
                                        <td>{person.dob.date}</td>
                                    </tr>
                                </tbody>
                        ))}
                        </table>
                    </div>
                )}
        </div>
    }
}

export default FetchUsers;