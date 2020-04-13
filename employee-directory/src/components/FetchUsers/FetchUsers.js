import React, { Component } from 'react';
import './FetchUsers.css';

class FetchUsers extends Component {

    constructor(){
        super()
        this.state = {
            loading: true,
            people: [],
            filteredPeople: []
        }
    };

    async componentDidMount() {
        const url = "https://api.randomuser.me/?results=10&nat=us";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ people: data.results, loading: false })
    };

    filterEmployees = (search) => {
        let filteredPeople = this.state.people;
        filteredPeople = filteredPeople.filter((person) => {
            let name = person.name.first.toLowerCase() + person.name.last.toLowerCase()
            return name.indexOf(
                search.toLowerCase()) !== -1
        })
        this.setState({
            people: filteredPeople,
            filteredPeople
        })
    };

    render = () => {
        return <div>
            {this.state.loading || !this.state.people ? (
                <div>loading...</div>
            ) : (
                    <div className="employee-table">
                        <table className="table table-striped table-sortable">
                            <thead>
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">DOB</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.people.map(person => (
                                    <tr key={person.login.uuid}>
                                        <th scope="row"><img src={person.picture.medium} alt={person.name.first + " " + person.name.last} /></th>
                                        <td>{person.name.first + " " + person.name.last}</td>
                                        <td>{person.phone}</td>
                                        <td>{person.email}</td>
                                        <td>{person.dob.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
        </div>
    }
}

export default FetchUsers;