import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";

const Users = () => {
    return (
        <Layout title={"All Users-Dashboard"}>
            <div className="container-fluid mt-5 pt-5">
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9">
                        <h1>Team member</h1>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Users;