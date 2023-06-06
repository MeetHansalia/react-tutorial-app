

import React from "react";
import {useForm} from "react-hook-form";


function FormFill(){
    const [register, handleSubmit]= useForm();

    const onSubmit =(data)=>{
        alert(JSON.stringify(data));
    };

    return(
        <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input {...register("firstName")} placeholder="meet"></input>
                </div>

                <div>
                    <label htmlFor="lastName">last Name</label>
                    <input {...register("lastName")} placeholder="hansalia"></input>
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input {...register("email")} placeholder="meethansalia99@gmail.com" type="email"></input>
                </div>

                <input type="submit"/>

            </form>
        </div>
    )
}

export default FormFill;