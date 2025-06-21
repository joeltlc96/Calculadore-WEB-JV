import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MultiplicacionPage(){

    const navigate = useNavigate();

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [respuesta, setRespuesta] = useState(0);

    const HandleSubmit = (e) => {
        e.preventDefault();

        const response = num1 * num2;
        setRespuesta(response);
    };

    const HandleReturn = () => {
        navigate("/home");
    } 

    return(
        <div class="container">
            <div class="row">
                <div class="col-3 mt-3">
                    <button class="btn btn-lg btn-info" onClick={HandleReturn}>
                        Regresar
                    </button>
                </div>
            </div>
            <div class="row mt-5">
                <h1>Multiplicacion</h1>
            </div>
            <div class="mt-1 card">
                <form class="card-body row" onSubmit={HandleSubmit}>
                    <div class="col-6 ms-2">
                        <div class="row">
                            <label 
                                    className="form-label" 
                                    htmlFor="num1">
                                        Ingrese Numero 1
                                </label>
                                <input 
                                    type="number" 
                                    id="num1" 
                                    className="form-control"
                                    value={num1}
                                    onChange={(e) => setNum1(Number(e.target.value))}
                                    required
                                />    
                        </div>
                        <div class="row">
                            <label 
                                    className="form-label" 
                                    htmlFor="num2">
                                        Ingrese numero 2
                                </label>
                                <input 
                                    type="number" 
                                    id="num2" 
                                    className="form-control"
                                    value={num2}
                                    onChange={(e) => setNum2(Number(e.target.value))}
                                    required
                                />
                        </div>
                    </div>
                    <div class="col-4 ms-5">
                        <div class="row mt-3">
                            <button type="submit" class="btn btn-success btn-lg">
                                Calcular
                            </button>
                        </div>
                        <div class="row mt-2">
                            <h4>Su respuesta es {respuesta}</h4>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
} 