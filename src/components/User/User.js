import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useTheme } from "../../ThemeProvider";

function User() {
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const { theme } = useTheme();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                setUserData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
                setLoading(false);
            });
    }, [id]);

    return (
        <div className="container-row">
            <h1>User Details</h1>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="container row">
                    <div className="col-md-6 my-2">
                        <div className={`card bg-${theme}`}>
                            <div className="card-body">
                                <h5 className="pl-2 card-title">{userData.name}</h5>
                                <ul className="list-group my-3">
                                    <li className="list-group-user">
                                        <strong>Username:</strong> {userData.username}
                                    </li>
                                    <li className="list-group">
                                        <strong>Email:</strong> {userData.email}
                                    </li>
                                </ul>
                                <ul className="list-goup my-3">
                                    <strong>Address:</strong>
                                    <li className="mx-2">
                                        <strong>Street:</strong> {userData.address.street}
                                    </li>
                                    <li className="mx-2">
                                        <strong>Suite:</strong> {userData.address.suite}
                                    </li>
                                    <li className="mx-2">
                                        <strong>Zipcode:</strong> {userData.address.zipcode}
                                    </li>
                                </ul>
                                <li className="list-group-user">
                                    <strong>Phone:</strong> {userData.phone}
                                </li>
                                <li className="list-group-user">
                                    <strong>Website:</strong> {userData.website}
                                </li>
                                <ul className="list-group mt-2">
                                    <strong>Company-details:</strong>
                                    <li className="mx-2">
                                        <strong>Name:</strong> {userData.company.name}
                                    </li>
                                    <li className="mx-2">
                                        <strong>Catch Phrase:</strong> {userData.company.catchPhrase}
                                    </li>
                                    <li className="mx-2">
                                        <strong>BS:</strong> {userData.company.bs}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 my-2">
                        <div className={`img-thumbnail bg-${theme}`}>
                            <img src="" alt="" className="card-image-top" />
                            <p className="text-center lead mt-2">{userData.name}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default User;
