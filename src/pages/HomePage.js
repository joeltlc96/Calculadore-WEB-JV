import { useNavigate } from "react-router-dom";

export default function HomePage(){

    const navigate = useNavigate();

    const HandleSuma = () => {
        navigate("/suma");
    } 

    const HandleResta = () => {
        navigate("/resta");
    } 

    const HandleMultiplicacion = () => {
        navigate("/multiplicacion");
    } 

    const HandleDivision = () => {
        navigate("/division");
    } 
    return(
        <div class="container">
            <div class="row m-3">
                <div class="col-6">
                    <button class="btn btn-lg btn-success" onClick={HandleSuma}>
                        Suma
                    </button>
                </div>
                <div class="col-6">
                    <button class='btn btn-lg btn-info' onClick={HandleResta}>
                        Resta
                    </button>
                </div>
            </div>
            <div class="row m-3">
                <div class="col-6">
                    <button class='btn btn-lg btn-primary' onClick={HandleMultiplicacion}>
                        Multiplicacion
                    </button>
                </div>
                <div class="col-6">
                    <button class='btn btn-lg btn-secondary' onClick={HandleDivision}>
                        Division
                    </button>
                </div>
            </div>
        </div>
    );
}